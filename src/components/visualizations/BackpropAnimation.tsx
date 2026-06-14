import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

type Phase = 'idle' | 'forward' | 'error' | 'backward' | 'update'

const W = 520
const H = 280
const NODE_R = 20

interface NodePos { x: number; y: number; label: string; layer: number; idx: number }
interface Edge { from: NodePos; to: NodePos; weight: number; id: string }

function buildNetwork(): { nodes: NodePos[]; edges: Edge[] } {
  const layers = [2, 3, 1]
  const nodes: NodePos[] = []
  const layerX = [80, 260, 440]

  layers.forEach((size, li) => {
    for (let ni = 0; ni < size; ni++) {
      const spacing = Math.min(60, (H - 60) / size)
      const startY = (H - spacing * (size - 1)) / 2
      nodes.push({
        x: layerX[li],
        y: startY + ni * spacing,
        label: li === 0 ? `x${ni + 1}` : li === layers.length - 1 ? 'ŷ' : `h${li}_${ni + 1}`,
        layer: li,
        idx: ni,
      })
    }
  })

  const edges: Edge[] = []
  let edgeIdx = 0
  for (let li = 1; li < layers.length; li++) {
    const prevNodes = nodes.filter((n) => n.layer === li - 1)
    const currNodes = nodes.filter((n) => n.layer === li)
    for (const from of prevNodes) {
      for (const to of currNodes) {
        edges.push({
          from,
          to,
          weight: Math.round((Math.random() * 2 - 1) * 100) / 100,
          id: `e${edgeIdx++}`,
        })
      }
    }
  }

  return { nodes, edges }
}

function getNodeColor(layer: number, maxLayer: number) {
  if (layer === 0) return '#6366f1'
  if (layer === maxLayer) return '#f59e0b'
  return '#10b981'
}

function getLayerLabel(layer: number, maxLayer: number) {
  if (layer === 0) return 'Input'
  if (layer === maxLayer) return 'Output'
  return `Hidden ${layer}`
}

export default function BackpropAnimation() {
  const [network] = useState(buildNetwork)
  const [phase, setPhase] = useState<Phase>('idle')
  const [activeEdge, setActiveEdge] = useState<string | null>(null)
  const [activeNode, setActiveNode] = useState<string | null>(null)
  const [epoch, setEpoch] = useState(0)

  const maxLayer = Math.max(...network.nodes.map((n) => n.layer))

  const runAnimation = useCallback(async (phases: Phase[]) => {
    for (const p of phases) {
      setPhase(p)

      if (p === 'forward') {
        // Animate edges layer by layer, forward
        for (let li = 1; li <= maxLayer; li++) {
          const layerEdges = network.edges.filter((e) => e.to.layer === li)
          for (const edge of layerEdges) {
            setActiveEdge(edge.id)
            await new Promise((r) => setTimeout(r, 200))
          }
          // Activate nodes in this layer
          const layerNodes = network.nodes.filter((n) => n.layer === li)
          for (const node of layerNodes) {
            setActiveNode(`${node.layer}-${node.idx}`)
          }
          await new Promise((r) => setTimeout(r, 300))
        }
        setActiveEdge(null)
        setActiveNode(null)
        await new Promise((r) => setTimeout(r, 500))
      }

      if (p === 'error') {
        // Highlight output node
        const outNode = network.nodes.find((n) => n.layer === maxLayer)
        if (outNode) setActiveNode(`${outNode.layer}-${outNode.idx}`)
        await new Promise((r) => setTimeout(r, 1200))
        setActiveNode(null)
        await new Promise((r) => setTimeout(r, 300))
      }

      if (p === 'backward') {
        // Animate edges layer by layer, backward
        for (let li = maxLayer; li >= 1; li--) {
          const layerEdges = network.edges.filter((e) => e.to.layer === li)
          for (const edge of [...layerEdges].reverse()) {
            setActiveEdge(edge.id)
            await new Promise((r) => setTimeout(r, 200))
          }
          const layerNodes = network.nodes.filter((n) => n.layer === li - 1)
          for (const node of layerNodes) {
            setActiveNode(`${node.layer}-${node.idx}`)
          }
          await new Promise((r) => setTimeout(r, 300))
        }
        setActiveEdge(null)
        setActiveNode(null)
        await new Promise((r) => setTimeout(r, 300))
      }

      if (p === 'update') {
        setEpoch((e) => e + 1)
        await new Promise((r) => setTimeout(r, 800))
      }
    }
    setPhase('idle')
  }, [network, maxLayer])

  const runFullBackprop = useCallback(() => {
    runAnimation(['forward', 'error', 'backward', 'update'])
  }, [runAnimation])

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      setActiveEdge(null)
      setActiveNode(null)
    }
  }, [])

  const phaseInfo: Record<Phase, { title: string; desc: string; color: string }> = {
    idle: { title: 'Ready', desc: 'Click a button to start the animation.', color: '#94a3b8' },
    forward: { title: 'Forward Pass', desc: 'Data flows through the network: each layer computes σ(Wx + b). Activations are stored for the backward pass.', color: '#6366f1' },
    error: { title: 'Compute Error', desc: 'Compare prediction ŷ with true label y. The loss L(y, ŷ) measures how wrong the prediction is.', color: '#ef4444' },
    backward: { title: 'Backward Pass', desc: 'Gradients flow backward via the chain rule: δ = Wᵀδ · σ\'(z). Each layer computes its gradient contribution.', color: '#f59e0b' },
    update: { title: 'Update Weights', desc: 'θ ← θ − η·∂L/∂θ. Each weight moves in the direction that reduces the loss.', color: '#10b981' },
  }

  return (
    <div className="rounded-xl border bg-card p-4 sm:p-6 my-6">
      <div className="flex items-center justify-between mb-3">
        <h3 className="font-semibold text-sm">Backpropagation</h3>
        <div className="flex items-center gap-2">
          <span className="text-xs text-muted-foreground">Epoch: {epoch}</span>
          <span
            className="px-2 py-0.5 rounded text-xs font-medium text-white"
            style={{ backgroundColor: phaseInfo[phase].color }}
          >
            {phaseInfo[phase].title}
          </span>
        </div>
      </div>

      {/* Network SVG */}
      <div className="bg-background rounded-lg border overflow-hidden">
        <svg viewBox={`0 0 ${W} ${H}`} className="w-full" style={{ minHeight: 220 }}>
          {/* Layer labels */}
          {Array.from(new Set(network.nodes.map((n) => n.layer))).map((li) => {
            const x = network.nodes.find((n) => n.layer === li)!.x
            return (
              <text key={`ll-${li}`} x={x} y={H - 8} textAnchor="middle" className="text-[10px] font-medium" fill={getNodeColor(li, maxLayer)}>
                {getLayerLabel(li, maxLayer)}
              </text>
            )
          })}

          {/* Edges */}
          {network.edges.map((edge) => {
            const isActive = activeEdge === edge.id
            const isBackward = phase === 'backward'
            return (
              <g key={edge.id}>
                <motion.line
                  x1={edge.from.x} y1={edge.from.y}
                  x2={edge.to.x} y2={edge.to.y}
                  stroke={isActive ? (isBackward ? '#f59e0b' : '#6366f1') : '#d1d5db'}
                  strokeWidth={isActive ? 3 : 1.5}
                  opacity={isActive ? 1 : 0.5}
                  animate={{
                    strokeWidth: isActive ? 3 : 1.5,
                    opacity: isActive ? 1 : 0.5,
                  }}
                  transition={{ duration: 0.15 }}
                />
                {/* Animated dot traveling along edge */}
                {isActive && (
                  <motion.circle
                    r={4}
                    fill={isBackward ? '#f59e0b' : '#6366f1'}
                    initial={
                      isBackward
                        ? { cx: edge.to.x, cy: edge.to.y }
                        : { cx: edge.from.x, cy: edge.from.y }
                    }
                    animate={
                      isBackward
                        ? { cx: edge.from.x, cy: edge.from.y }
                        : { cx: edge.to.x, cy: edge.to.y }
                    }
                    transition={{ duration: 0.2, ease: 'linear' }}
                  />
                )}
                {/* Weight label */}
                <text
                  x={(edge.from.x + edge.to.x) / 2 + (edge.to.idx - edge.from.idx) * 3}
                  y={(edge.from.y + edge.to.y) / 2 - 5}
                  textAnchor="middle"
                  className="text-[8px] font-mono"
                  fill={phase === 'update' ? '#10b981' : '#94a3b8'}
                >
                  {edge.weight.toFixed(2)}
                </text>
              </g>
            )
          })}

          {/* Nodes */}
          {network.nodes.map((node) => {
            const nodeId = `${node.layer}-${node.idx}`
            const isActive = activeNode === nodeId
            const color = getNodeColor(node.layer, maxLayer)
            return (
              <g key={nodeId}>
                <motion.circle
                  cx={node.x} cy={node.y} r={NODE_R}
                  fill={isActive ? color : 'white'}
                  stroke={color}
                  strokeWidth={isActive ? 3 : 2}
                  animate={{
                    fill: isActive ? color : 'white',
                    r: isActive ? NODE_R + 3 : NODE_R,
                  }}
                  transition={{ duration: 0.2 }}
                />
                <text
                  x={node.x} y={node.y + 4}
                  textAnchor="middle"
                  className="text-[10px] font-semibold"
                  fill={isActive ? 'white' : color}
                >
                  {node.label}
                </text>
              </g>
            )
          })}
        </svg>
      </div>

      {/* Phase description */}
      <AnimatePresence mode="wait">
        <motion.div
          key={phase}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={{ duration: 0.2 }}
          className="mt-3 p-3 rounded-lg text-sm"
          style={{ backgroundColor: phaseInfo[phase].color + '10', borderColor: phaseInfo[phase].color + '30', borderWidth: 1 }}
        >
          <span className="font-semibold" style={{ color: phaseInfo[phase].color }}>
            {phaseInfo[phase].title}:
          </span>{' '}
          <span className="text-muted-foreground">{phaseInfo[phase].desc}</span>
        </motion.div>
      </AnimatePresence>

      {/* Controls */}
      <div className="flex flex-wrap gap-2 mt-3">
        <button
          onClick={() => runAnimation(['forward'])}
          disabled={phase !== 'idle'}
          className="px-3 py-1.5 rounded-md text-xs font-medium bg-indigo-500 text-white hover:bg-indigo-600 disabled:opacity-40 transition-colors"
        >
          ▶ Forward Pass
        </button>
        <button
          onClick={() => runAnimation(['error'])}
          disabled={phase !== 'idle'}
          className="px-3 py-1.5 rounded-md text-xs font-medium bg-red-500 text-white hover:bg-red-600 disabled:opacity-40 transition-colors"
        >
          ▶ Compute Error
        </button>
        <button
          onClick={() => runAnimation(['backward'])}
          disabled={phase !== 'idle'}
          className="px-3 py-1.5 rounded-md text-xs font-medium bg-amber-500 text-white hover:bg-amber-600 disabled:opacity-40 transition-colors"
        >
          ▶ Backward Pass
        </button>
        <button
          onClick={runFullBackprop}
          disabled={phase !== 'idle'}
          className="px-3 py-1.5 rounded-md text-xs font-medium bg-emerald-500 text-white hover:bg-emerald-600 disabled:opacity-40 transition-colors"
        >
          ▶ Full Backprop
        </button>
      </div>
    </div>
  )
}
