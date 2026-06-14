import { useState, useCallback, useRef } from 'react'
import { motion } from 'framer-motion'

// ─── Dataset generators ──────────────────────────────────────────────
interface Point { x: number; y: number; label: number }

function makeMoons(n: number): Point[] {
  const pts: Point[] = []
  for (let i = 0; i < n; i++) {
    const isTop = i < n / 2
    const angle = Math.PI * (i % (n / 2)) / (n / 2 - 1)
    const r = 1
    const noise = (Math.random() - 0.5) * 0.25
    if (isTop) {
      pts.push({ x: r * Math.cos(angle) + noise, y: r * Math.sin(angle) + noise, label: 0 })
    } else {
      pts.push({ x: 1 - r * Math.cos(angle) + noise, y: 0.5 - r * Math.sin(angle) + noise, label: 1 })
    }
  }
  return pts
}

function makeCircles(n: number): Point[] {
  const pts: Point[] = []
  for (let i = 0; i < n; i++) {
    const isInner = i < n / 2
    const angle = 2 * Math.PI * Math.random()
    const r = isInner ? 0.4 + Math.random() * 0.1 : 0.8 + Math.random() * 0.15
    pts.push({
      x: r * Math.cos(angle),
      y: r * Math.sin(angle),
      label: isInner ? 0 : 1,
    })
  }
  return pts
}

function makeSpiral(n: number): Point[] {
  const pts: Point[] = []
  for (let i = 0; i < n; i++) {
    const cls = i < n / 2 ? 0 : 1
    const t = (i % (n / 2)) / (n / 2) * 2 * Math.PI + cls * Math.PI
    const r = 0.15 + 0.8 * (i % (n / 2)) / (n / 2)
    const noise = (Math.random() - 0.5) * 0.15
    pts.push({
      x: r * Math.cos(t) + noise,
      y: r * Math.sin(t) + noise,
      label: cls,
    })
  }
  return pts
}

const DATASETS: Record<string, { label: string; gen: (n: number) => Point[] }> = {
  moons: { label: 'Moons', gen: makeMoons },
  circles: { label: 'Circles', gen: makeCircles },
  spiral: { label: 'Spiral', gen: makeSpiral },
}

// ─── Simple neural network (forward + backward) ──────────────────────
type Weights = number[][][] // [layer][to][from+1] (last = bias)

function initWeights(sizes: number[]): Weights {
  const w: Weights = []
  for (let l = 1; l < sizes.length; l++) {
    const fan_in = sizes[l - 1]
    const fan_out = sizes[l]
    const scale = Math.sqrt(2 / fan_in)
    const layer: number[][] = []
    for (let j = 0; j < fan_out; j++) {
      const row: number[] = []
      for (let i = 0; i <= fan_in; i++) {
        row.push((Math.random() * 2 - 1) * scale)
      }
      layer.push(row)
    }
    w.push(layer)
  }
  return w
}

function relu(x: number) { return Math.max(0, x) }
function sigmoid(x: number) { return 1 / (1 + Math.exp(-x)) }

function forward(weights: Weights, input: number[]): { activations: number[][]; preActivations: number[][] } {
  const activations = [input]
  const preActivations: number[][] = [[]]
  let current = input
  for (let l = 0; l < weights.length; l++) {
    const isLast = l === weights.length - 1
    const next: number[] = []
    const pre: number[] = []
    for (let j = 0; j < weights[l].length; j++) {
      let sum = weights[l][j][weights[l][j].length - 1] // bias
      for (let i = 0; i < current.length; i++) {
        sum += weights[l][j][i] * current[i]
      }
      pre.push(sum)
      next.push(isLast ? sigmoid(sum) : relu(sum))
    }
    preActivations.push(pre)
    activations.push(next)
    current = next
  }
  return { activations, preActivations }
}

function trainStep(weights: Weights, data: Point[], lr: number): { weights: Weights; accuracy: number; loss: number } {
  const newWeights = weights.map((l) => l.map((r) => [...r]))
  let correct = 0
  let totalLoss = 0

  for (const pt of data) {
    const { activations, preActivations } = forward(weights, [pt.x, pt.y])
    const output = activations[activations.length - 1][0]
    const pred = output > 0.5 ? 1 : 0
    if (pred === pt.label) correct++

    // BCE loss
    const eps = 1e-7
    totalLoss += -(pt.label * Math.log(output + eps) + (1 - pt.label) * Math.log(1 - output + eps))

    // Backward pass
    const deltas: number[][] = []
    // Output delta
    const outDelta = [output - pt.label]
    deltas.unshift(outDelta)

    // Hidden deltas
    for (let l = weights.length - 2; l >= 0; l--) {
      const nextDelta = deltas[0]
      const d: number[] = []
      for (let j = 0; j < weights[l].length; j++) {
        let sum = 0
        for (let k = 0; k < nextDelta.length; k++) {
          sum += nextDelta[k] * weights[l + 1][k][j]
        }
        // ReLU derivative
        d.push(preActivations[l + 1][j] > 0 ? sum : 0)
      }
      deltas.unshift(d)
    }

    // Update weights
    for (let l = 0; l < newWeights.length; l++) {
      const act = activations[l]
      for (let j = 0; j < newWeights[l].length; j++) {
        for (let i = 0; i < act.length; i++) {
          newWeights[l][j][i] -= lr * deltas[l][j] * act[i]
        }
        // Bias
        newWeights[l][j][act.length] -= lr * deltas[l][j]
      }
    }
  }

  return {
    weights: newWeights,
    accuracy: correct / data.length,
    loss: totalLoss / data.length,
  }
}

// ─── Decision boundary rendering ─────────────────────────────────────
function renderDecisionBoundary(weights: Weights, resolution: number): number[][] {
  const grid: number[][] = []
  for (let i = 0; i < resolution; i++) {
    const row: number[] = []
    for (let j = 0; j < resolution; j++) {
      const x = -1.5 + 3 * (j / (resolution - 1))
      const y = -1.5 + 3 * (i / (resolution - 1))
      const { activations } = forward(weights, [x, y])
      row.push(activations[activations.length - 1][0])
    }
    grid.push(row)
  }
  return grid
}

// ─── Component ───────────────────────────────────────────────────────
const NETWORK_W = 380
const NETWORK_H = 240

export default function InteractiveNeuralTrainer() {
  const [arch, setArch] = useState([2, 4, 4, 1])
  const [dataset, setDataset] = useState('moons')
  const [data] = useState<Point[]>(() => DATASETS.moons.gen(120))
  const [weights, setWeights] = useState<Weights>(() => initWeights(arch))
  const [accuracy, setAccuracy] = useState(0)
  const [loss, setLoss] = useState(0)
  const [epoch, setEpoch] = useState(0)
  const [accuracyHistory, setAccuracyHistory] = useState<number[]>([])
  const [isTraining, setIsTraining] = useState(false)
  const [boundary, setBoundary] = useState<number[][]>(() => renderDecisionBoundary(initWeights(arch), 30))
  const trainingRef = useRef(false)

  const addLayer = useCallback(() => {
    if (arch.length >= 6) return
    const newArch = [...arch]
    newArch.splice(newArch.length - 1, 0, 4)
    setArch(newArch)
    const w = initWeights(newArch)
    setWeights(w)
    setBoundary(renderDecisionBoundary(w, 30))
    setAccuracy(0)
    setLoss(0)
    setEpoch(0)
    setAccuracyHistory([])
  }, [arch])

  const removeLayer = useCallback(() => {
    if (arch.length <= 3) return
    const newArch = [...arch]
    newArch.splice(newArch.length - 2, 1)
    setArch(newArch)
    const w = initWeights(newArch)
    setWeights(w)
    setBoundary(renderDecisionBoundary(w, 30))
    setAccuracy(0)
    setLoss(0)
    setEpoch(0)
    setAccuracyHistory([])
  }, [arch])

  const addNeuron = useCallback((layerIdx: number) => {
    if (arch[layerIdx] >= 8) return
    const newArch = [...arch]
    newArch[layerIdx] += 1
    setArch(newArch)
    const w = initWeights(newArch)
    setWeights(w)
    setBoundary(renderDecisionBoundary(w, 30))
    setAccuracy(0)
    setLoss(0)
    setEpoch(0)
    setAccuracyHistory([])
  }, [arch])

  const removeNeuron = useCallback((layerIdx: number) => {
    if (arch[layerIdx] <= 1) return
    const newArch = [...arch]
    newArch[layerIdx] -= 1
    setArch(newArch)
    const w = initWeights(newArch)
    setWeights(w)
    setBoundary(renderDecisionBoundary(w, 30))
    setAccuracy(0)
    setLoss(0)
    setEpoch(0)
    setAccuracyHistory([])
  }, [arch])

  const resetWeights = useCallback(() => {
    const w = initWeights(arch)
    setWeights(w)
    setBoundary(renderDecisionBoundary(w, 30))
    setAccuracy(0)
    setLoss(0)
    setEpoch(0)
    setAccuracyHistory([])
  }, [arch])

  const changeDataset = useCallback((key: string) => {
    setDataset(key)
    const w = initWeights(arch)
    setWeights(w)
    setBoundary(renderDecisionBoundary(w, 30))
    setAccuracy(0)
    setLoss(0)
    setEpoch(0)
    setAccuracyHistory([])
  }, [arch])

  const runEpoch = useCallback(() => {
    const result = trainStep(weights, data, 0.05)
    setWeights(result.weights)
    setAccuracy(result.accuracy)
    setLoss(result.loss)
    setEpoch((e) => e + 1)
    setAccuracyHistory((h) => [...h, result.accuracy])
    setBoundary(renderDecisionBoundary(result.weights, 30))
  }, [weights, data])

  const trainMultiple = useCallback(async () => {
    if (isTraining) {
      trainingRef.current = false
      setIsTraining(false)
      return
    }
    setIsTraining(true)
    trainingRef.current = true
    let currentWeights = weights
    let currentEpoch = epoch

    for (let i = 0; i < 50 && trainingRef.current; i++) {
      const result = trainStep(currentWeights, data, 0.05)
      currentWeights = result.weights
      currentEpoch += 1
      setWeights(result.weights)
      setAccuracy(result.accuracy)
      setLoss(result.loss)
      setEpoch(currentEpoch)
      setAccuracyHistory((h) => [...h, result.accuracy])
      setBoundary(renderDecisionBoundary(result.weights, 30))
      await new Promise((r) => setTimeout(r, 50))
    }
    setIsTraining(false)
  }, [weights, data, epoch, isTraining])

  const currentData = dataset === 'moons' ? data : DATASETS[dataset].gen(120)

  return (
    <div className="rounded-xl border bg-card p-4 sm:p-6 my-6">
      <div className="flex items-center justify-between mb-3">
        <h3 className="font-semibold text-sm">Interactive Neural Network Trainer</h3>
        <span className="text-xs text-muted-foreground">Epoch: {epoch}</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Network Architecture */}
        <div className="bg-background rounded-lg border p-3">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-medium text-muted-foreground">Architecture</span>
            <div className="flex gap-1">
              <button onClick={addLayer} disabled={arch.length >= 6} className="px-1.5 py-0.5 rounded text-[10px] bg-muted hover:bg-muted/80 disabled:opacity-30">+ Layer</button>
              <button onClick={removeLayer} disabled={arch.length <= 3} className="px-1.5 py-0.5 rounded text-[10px] bg-muted hover:bg-muted/80 disabled:opacity-30">− Layer</button>
            </div>
          </div>
          <svg viewBox={`0 0 ${NETWORK_W} ${NETWORK_H}`} className="w-full" style={{ minHeight: 160 }}>
            {arch.map((size, li) => {
              if (li === 0) return null
              const prevSize = arch[li - 1]
              return Array.from({ length: prevSize }, (_, fi) =>
                Array.from({ length: size }, (_, ti) => {
                  const x1 = 40 + ((li - 1) / (arch.length - 1)) * (NETWORK_W - 80)
                  const y1 = NETWORK_H / 2 + (fi - (prevSize - 1) / 2) * Math.min(40, (NETWORK_H - 40) / prevSize)
                  const x2 = 40 + (li / (arch.length - 1)) * (NETWORK_W - 80)
                  const y2 = NETWORK_H / 2 + (ti - (size - 1) / 2) * Math.min(40, (NETWORK_H - 40) / size)
                  return <line key={`e${li}-${fi}-${ti}`} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#d1d5db" strokeWidth={0.8} />
                })
              )
            })}
            {arch.map((size, li) =>
              Array.from({ length: size }, (_, ni) => {
                const x = 40 + (li / (arch.length - 1)) * (NETWORK_W - 80)
                const y = NETWORK_H / 2 + (ni - (size - 1) / 2) * Math.min(40, (NETWORK_H - 40) / size)
                const color = li === 0 ? '#6366f1' : li === arch.length - 1 ? '#f59e0b' : '#10b981'
                return (
                  <g key={`n${li}-${ni}`}>
                    <circle cx={x} cy={y} r={12} fill="white" stroke={color} strokeWidth={2} />
                    <text x={x} y={y + 3} textAnchor="middle" className="text-[8px] font-mono" fill={color}>
                      {li === 0 ? `x${ni + 1}` : li === arch.length - 1 ? 'ŷ' : `h`}
                    </text>
                  </g>
                )
              })
            )}
            {/* Layer labels & +/- buttons */}
            {arch.map((size, li) => {
              const x = 40 + (li / (arch.length - 1)) * (NETWORK_W - 80)
              const label = li === 0 ? 'Input' : li === arch.length - 1 ? 'Output' : `Hidden ${li}`
              const color = li === 0 ? '#6366f1' : li === arch.length - 1 ? '#f59e0b' : '#10b981'
              const isHidden = li > 0 && li < arch.length - 1
              return (
                <g key={`lbl${li}`}>
                  <text x={x} y={NETWORK_H - 2} textAnchor="middle" className="text-[9px] font-medium" fill={color}>{label}</text>
                  <text x={x} y={12} textAnchor="middle" className="text-[8px]" fill="#94a3b8">{size}</text>
                  {isHidden && (
                    <>
                      <foreignObject x={x - 10} y={16} width={20} height={16}>
                        <button
                          onClick={() => addNeuron(li)}
                          className="w-full h-full text-[10px] bg-emerald-100 text-emerald-700 rounded hover:bg-emerald-200"
                        >+</button>
                      </foreignObject>
                      <foreignObject x={x + 12} y={16} width={20} height={16}>
                        <button
                          onClick={() => removeNeuron(li)}
                          className="w-full h-full text-[10px] bg-red-100 text-red-700 rounded hover:bg-red-200"
                        >−</button>
                      </foreignObject>
                    </>
                  )}
                </g>
              )
            })}
          </svg>
        </div>

        {/* Decision Boundary */}
        <div className="bg-background rounded-lg border p-3">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-medium text-muted-foreground">Decision Boundary</span>
            <span className="text-xs">{(accuracy * 100).toFixed(1)}% accuracy</span>
          </div>
          <svg viewBox="0 0 200 200" className="w-full" style={{ minHeight: 160 }}>
            {/* Boundary heatmap */}
            {boundary.map((row, i) =>
              row.map((v, j) => (
                <rect
                  key={`c${i}-${j}`}
                  x={(j / 30) * 200}
                  y={(i / 30) * 200}
                  width={200 / 30 + 1}
                  height={200 / 30 + 1}
                  fill={v > 0.5 ? `rgba(99,102,241,${Math.abs(v - 0.5) * 1.5})` : `rgba(245,158,11,${Math.abs(0.5 - v) * 1.5})`}
                />
              ))
            )}
            {/* Data points */}
            {currentData.map((pt, i) => {
              const px = ((pt.x + 1.5) / 3) * 200
              const py = ((pt.y + 1.5) / 3) * 200
              return (
                <circle
                  key={i}
                  cx={px}
                  cy={py}
                  r={3}
                  fill={pt.label === 0 ? '#6366f1' : '#f59e0b'}
                  stroke="white"
                  strokeWidth={0.8}
                />
              )
            })}
          </svg>
        </div>
      </div>

      {/* Accuracy chart */}
      {accuracyHistory.length > 1 && (
        <div className="mt-3 bg-background rounded-lg border p-3">
          <span className="text-xs font-medium text-muted-foreground">Accuracy over Epochs</span>
          <svg viewBox="0 0 400 80" className="w-full mt-1" style={{ minHeight: 60 }}>
            {/* Grid */}
            <line x1="0" y1="75" x2="400" y2="75" stroke="#e5e7eb" strokeWidth={0.5} />
            <line x1="0" y1="5" x2="400" y2="5" stroke="#e5e7eb" strokeWidth={0.5} />
            <text x="2" y="14" className="text-[8px]" fill="#94a3b8">100%</text>
            <text x="2" y="74" className="text-[8px]" fill="#94a3b8">0%</text>
            {/* Line */}
            <motion.path
              d={accuracyHistory
                .map((a, i) => {
                  const x = (i / Math.max(accuracyHistory.length - 1, 1)) * 400
                  const y = 75 - a * 70
                  return `${i === 0 ? 'M' : 'L'}${x.toFixed(1)},${y.toFixed(1)}`
                })
                .join(' ')}
              fill="none"
              stroke="#6366f1"
              strokeWidth={2}
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.3 }}
            />
          </svg>
        </div>
      )}

      {/* Controls */}
      <div className="flex flex-wrap items-center gap-2 mt-3">
        <button
          onClick={runEpoch}
          className="px-3 py-1.5 rounded-md text-xs font-medium bg-indigo-500 text-white hover:bg-indigo-600 transition-colors"
        >
          Run 1 Epoch
        </button>
        <button
          onClick={trainMultiple}
          className={`px-3 py-1.5 rounded-md text-xs font-medium transition-colors ${
            isTraining ? 'bg-red-500 text-white hover:bg-red-600' : 'bg-emerald-500 text-white hover:bg-emerald-600'
          }`}
        >
          {isTraining ? '■ Stop' : '▶ Train 50 Epochs'}
        </button>
        <button
          onClick={resetWeights}
          className="px-3 py-1.5 rounded-md text-xs font-medium bg-muted hover:bg-muted/80 transition-colors"
        >
          Reset Weights
        </button>

        <div className="flex-1" />

        {/* Dataset selection */}
        <div className="flex gap-1">
          {Object.entries(DATASETS).map(([key, { label }]) => (
            <button
              key={key}
              onClick={() => changeDataset(key)}
              className={`px-2.5 py-1.5 rounded-md text-xs font-medium transition-colors ${
                dataset === key ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground hover:bg-muted/80'
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* Stats */}
      <div className="flex gap-4 mt-3 text-xs text-muted-foreground">
        <span>Loss: {loss.toFixed(4)}</span>
        <span>Accuracy: {(accuracy * 100).toFixed(1)}%</span>
        <span>Layers: {arch.length - 2} hidden</span>
        <span>Params: {arch.reduce((s, n, i) => i < arch.length - 1 ? s + n * arch[i + 1] + arch[i + 1] : s, 0)}</span>
      </div>
    </div>
  )
}
