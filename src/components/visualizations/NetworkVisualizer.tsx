import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface Stage {
  title: string
  desc: string
  layers: number[]
  labels: string[]
  funcLabel: string
  outputLabel: string
  showWeights: boolean
  showLayerLabels: boolean
}

const STAGES: Stage[] = [
  {
    title: 'Computational Graph',
    desc: 'A function takes inputs and produces an output through a series of operations.',
    layers: [2, 1],
    labels: ['x₁', 'x₂'],
    funcLabel: 'f',
    outputLabel: 'y',
    showWeights: false,
    showLayerLabels: false,
  },
  {
    title: 'With Weights',
    desc: 'Each input is multiplied by a learnable weight parameter.',
    layers: [2, 1],
    labels: ['x₁', 'x₂'],
    funcLabel: 'Σ',
    outputLabel: 'ŷ',
    showWeights: true,
    showLayerLabels: false,
  },
  {
    title: 'Linear Regression',
    desc: 'ŷ = w₁x₁ + w₂x₂ + b — a weighted sum of inputs.',
    layers: [2, 1],
    labels: ['x₁', 'x₂'],
    funcLabel: 'linear',
    outputLabel: 'ŷ',
    showWeights: true,
    showLayerLabels: false,
  },
  {
    title: 'Artificial Neuron',
    desc: 'Add a non-linear activation: ŷ = σ(Wx + b). This is a neuron.',
    layers: [2, 1],
    labels: ['x₁', 'x₂'],
    funcLabel: 'σ',
    outputLabel: 'ŷ',
    showWeights: true,
    showLayerLabels: false,
  },
  {
    title: 'Neural Network',
    desc: 'Stack neurons into layers. Each layer transforms the previous output.',
    layers: [2, 3, 1],
    labels: ['x₁', 'x₂'],
    funcLabel: '',
    outputLabel: 'ŷ',
    showWeights: true,
    showLayerLabels: true,
  },
  {
    title: 'Deep Network',
    desc: 'Multiple hidden layers create a deep network that learns hierarchical features.',
    layers: [2, 4, 3, 1],
    labels: ['x₁', 'x₂'],
    funcLabel: '',
    outputLabel: 'ŷ',
    showWeights: false,
    showLayerLabels: true,
  },
]

const COLORS = {
  input: '#6366f1',
  hidden: '#10b981',
  output: '#f59e0b',
  edge: '#94a3b8',
  weight: '#ef4444',
}

function getLayerX(layerIdx: number, totalLayers: number, width: number): number {
  const padding = 60
  const usable = width - 2 * padding
  return padding + (layerIdx / (totalLayers - 1)) * usable
}

function getNodeY(nodeIdx: number, nodeCount: number, height: number): number {
  const spacing = Math.min(50, (height - 60) / (nodeCount))
  const totalHeight = spacing * (nodeCount - 1)
  const startY = (height - totalHeight) / 2
  return startY + nodeIdx * spacing
}

export default function NetworkVisualizer() {
  const [stage, setStage] = useState(0)
  const current = STAGES[stage]
  const W = 480
  const H = 260

  return (
    <div className="rounded-xl border bg-card p-4 sm:p-6 my-6">
      <div className="flex items-center justify-between mb-3">
        <h3 className="font-semibold text-sm">Network Evolution</h3>
        <span className="text-xs text-muted-foreground">Step {stage + 1} of {STAGES.length}</span>
      </div>

      {/* Stage controls */}
      <div className="flex gap-1 mb-4 overflow-x-auto pb-1">
        {STAGES.map((s, i) => (
          <button
            key={i}
            onClick={() => setStage(i)}
            className={`px-2.5 py-1.5 rounded-md text-xs font-medium whitespace-nowrap transition-all ${
              i === stage
                ? 'bg-primary text-primary-foreground shadow-sm'
                : 'bg-muted text-muted-foreground hover:bg-muted/80'
            }`}
          >
            {s.title}
          </button>
        ))}
      </div>

      {/* Network visualization */}
      <div className="bg-background rounded-lg border overflow-hidden">
        <svg viewBox={`0 0 ${W} ${H}`} className="w-full" style={{ minHeight: 200 }}>
          {/* Edges */}
          {current.layers.map((layerSize, layerIdx) => {
            if (layerIdx === 0) return null
            const prevSize = current.layers[layerIdx - 1]
            return Array.from({ length: prevSize }, (_, fromIdx) =>
              Array.from({ length: layerSize }, (_, toIdx) => {
                const x1 = getLayerX(layerIdx - 1, current.layers.length, W)
                const y1 = getNodeY(fromIdx, prevSize, H)
                const x2 = getLayerX(layerIdx, current.layers.length, W)
                const y2 = getNodeY(toIdx, layerSize, H)
                return (
                  <motion.line
                    key={`e-${layerIdx}-${fromIdx}-${toIdx}`}
                    x1={x1} y1={y1} x2={x2} y2={y2}
                    stroke={COLORS.edge}
                    strokeWidth={current.showWeights ? 1.5 : 1}
                    opacity={0.4}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.4 }}
                    transition={{ delay: fromIdx * 0.05 + toIdx * 0.03, duration: 0.3 }}
                  />
                )
              })
            )
          })}

          {/* Weight labels */}
          {current.showWeights && current.layers.map((layerSize, layerIdx) => {
            if (layerIdx === 0) return null
            const prevSize = current.layers[layerIdx - 1]
            return Array.from({ length: Math.min(prevSize, 3) }, (_, fromIdx) =>
              Array.from({ length: Math.min(layerSize, 3) }, (_, toIdx) => {
                const x1 = getLayerX(layerIdx - 1, current.layers.length, W)
                const y1 = getNodeY(fromIdx, prevSize, H)
                const x2 = getLayerX(layerIdx, current.layers.length, W)
                const y2 = getNodeY(toIdx, layerSize, H)
                const mx = (x1 + x2) / 2
                const my = (y1 + y2) / 2
                return (
                  <motion.text
                    key={`w-${layerIdx}-${fromIdx}-${toIdx}`}
                    x={mx + (toIdx - fromIdx) * 3}
                    y={my - 4}
                    textAnchor="middle"
                    className="text-[8px] font-mono"
                    fill={COLORS.weight}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.7 }}
                    transition={{ delay: 0.3 + fromIdx * 0.05 }}
                  >
                    w
                  </motion.text>
                )
              })
            )
          })}

          {/* Nodes */}
          {current.layers.map((layerSize, layerIdx) =>
            Array.from({ length: layerSize }, (_, nodeIdx) => {
              const x = getLayerX(layerIdx, current.layers.length, W)
              const y = getNodeY(nodeIdx, layerSize, H)
              const isFirst = layerIdx === 0
              const isLast = layerIdx === current.layers.length - 1
              const color = isFirst ? COLORS.input : isLast ? COLORS.output : COLORS.hidden
              const label = isFirst
                ? current.labels[nodeIdx] ?? `x${nodeIdx + 1}`
                : isLast && layerSize === 1
                ? current.outputLabel
                : ''

              return (
                <motion.g key={`n-${layerIdx}-${nodeIdx}`}>
                  <motion.circle
                    cx={x} cy={y} r={18}
                    fill={color}
                    opacity={0.15}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: layerIdx * 0.1 + nodeIdx * 0.05, type: 'spring', stiffness: 300 }}
                  />
                  <motion.circle
                    cx={x} cy={y} r={16}
                    fill="white"
                    stroke={color}
                    strokeWidth={2}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: layerIdx * 0.1 + nodeIdx * 0.05, type: 'spring', stiffness: 300 }}
                  />
                  {/* Function label for single-node layers */}
                  {layerSize === 1 && !isFirst && current.funcLabel && (
                    <text x={x} y={y + 4} textAnchor="middle" className="text-[10px] font-bold" fill={color}>
                      {current.funcLabel}
                    </text>
                  )}
                  {/* Node label */}
                  {label && (
                    <text x={x} y={y + 4} textAnchor="middle" className="text-[9px] font-semibold" fill={color}>
                      {label}
                    </text>
                  )}
                </motion.g>
              )
            })
          )}

          {/* Layer labels */}
          {current.showLayerLabels && current.layers.map((_layerSize, layerIdx) => {
            const x = getLayerX(layerIdx, current.layers.length, W)
            const isFirst = layerIdx === 0
            const isLast = layerIdx === current.layers.length - 1
            const label = isFirst ? 'Input' : isLast ? 'Output' : `Hidden ${layerIdx}`
            const color = isFirst ? COLORS.input : isLast ? COLORS.output : COLORS.hidden
            return (
              <text key={`lbl-${layerIdx}`} x={x} y={H - 10} textAnchor="middle" className="text-[10px] font-medium" fill={color}>
                {label}
              </text>
            )
          })}
        </svg>
      </div>

      {/* Description */}
      <AnimatePresence mode="wait">
        <motion.div
          key={stage}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.2 }}
          className="mt-3 p-3 rounded-lg bg-muted/50 text-sm"
        >
          <span className="font-semibold">{current.title}:</span>{' '}
          <span className="text-muted-foreground">{current.desc}</span>
        </motion.div>
      </AnimatePresence>

      {/* Navigation */}
      <div className="flex justify-between mt-3">
        <button
          onClick={() => setStage(Math.max(0, stage - 1))}
          disabled={stage === 0}
          className="px-3 py-1.5 rounded-md text-xs bg-muted hover:bg-muted/80 disabled:opacity-30 transition-colors"
        >
          ← Previous
        </button>
        <button
          onClick={() => setStage(Math.min(STAGES.length - 1, stage + 1))}
          disabled={stage === STAGES.length - 1}
          className="px-3 py-1.5 rounded-md text-xs bg-primary text-primary-foreground hover:opacity-90 disabled:opacity-30 transition-colors"
        >
          Next →
        </button>
      </div>
    </div>
  )
}
