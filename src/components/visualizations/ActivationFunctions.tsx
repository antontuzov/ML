import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const FUNCTIONS = {
  sigmoid: {
    label: 'Sigmoid',
    color: '#6366f1',
    fn: (x: number) => 1 / (1 + Math.exp(-x)),
    range: [0, 1] as [number, number],
    desc: 'Squashes to (0,1). Used for probabilities.',
    derivative: 'σ(x)(1−σ(x))',
  },
  tanh: {
    label: 'Tanh',
    color: '#f59e0b',
    fn: (x: number) => Math.tanh(x),
    range: [-1, 1] as [number, number],
    desc: 'Squashes to (−1,1). Zero-centered.',
    derivative: '1 − tanh²(x)',
  },
  relu: {
    label: 'ReLU',
    color: '#10b981',
    fn: (x: number) => Math.max(0, x),
    range: [0, Infinity] as [number, number],
    desc: 'max(0, x). Default choice for hidden layers.',
    derivative: '1 if x>0, else 0',
  },
  step: {
    label: 'Step',
    color: '#ef4444',
    fn: (x: number) => (x >= 0 ? 1 : 0),
    range: [0, 1] as [number, number],
    desc: 'Hard threshold. Not differentiable at 0.',
    derivative: '0 (undefined at x=0)',
  },
} as const

type FuncKey = keyof typeof FUNCTIONS

const W = 280
const H = 140
const PAD = 30
const X_MIN = -5
const X_MAX = 5

function plotPath(fn: (x: number) => number, yMin: number, yMax: number): string {
  const points: string[] = []
  const steps = 100
  for (let i = 0; i <= steps; i++) {
    const x = X_MIN + (X_MAX - X_MIN) * (i / steps)
    const y = fn(x)
    const clampedY = Math.max(yMin, Math.min(yMax, y))
    const px = PAD + ((x - X_MIN) / (X_MAX - X_MIN)) * (W - 2 * PAD)
    const py = H - PAD - ((clampedY - yMin) / (yMax - yMin)) * (H - 2 * PAD)
    points.push(`${i === 0 ? 'M' : 'L'}${px.toFixed(1)},${py.toFixed(1)}`)
  }
  return points.join(' ')
}

function MiniPlot({ fn, color, range, active }: { fn: (x: number) => number; color: string; range: [number, number]; active: boolean }) {
  const [min, max] = range
  const yMin = min === -Infinity ? -1 : min
  const yMax = max === Infinity ? 5 : max
  const d = plotPath(fn, yMin, yMax)

  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="w-full h-full">
      {/* Grid */}
      <line x1={PAD} y1={H - PAD} x2={W - PAD} y2={H - PAD} stroke="#e5e7eb" strokeWidth="1" />
      <line x1={PAD} y1={PAD} x2={PAD} y2={H - PAD} stroke="#e5e7eb" strokeWidth="1" />
      {/* Zero line */}
      {yMin < 0 && (
        <line
          x1={PAD}
          y1={H - PAD - ((0 - yMin) / (yMax - yMin)) * (H - 2 * PAD)}
          x2={W - PAD}
          y2={H - PAD - ((0 - yMin) / (yMax - yMin)) * (H - 2 * PAD)}
          stroke="#d1d5db"
          strokeWidth="0.5"
          strokeDasharray="3,3"
        />
      )}
      {/* Function curve */}
      <motion.path
        d={d}
        fill="none"
        stroke={color}
        strokeWidth={active ? 3 : 2}
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      />
    </svg>
  )
}

export default function ActivationFunctionsChart() {
  const [active, setActive] = useState<FuncKey>('relu')
  const [sliderX, setSliderX] = useState(0.5)

  const activeFunc = FUNCTIONS[active]
  const activeY = activeFunc.fn(sliderX)

  return (
    <div className="rounded-xl border bg-card p-4 sm:p-6 my-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold text-sm">Activation Functions</h3>
        <div className="flex gap-1">
          {(Object.keys(FUNCTIONS) as FuncKey[]).map((key) => (
            <button
              key={key}
              onClick={() => setActive(key)}
              className={`px-2.5 py-1 rounded-md text-xs font-medium transition-colors ${
                active === key
                  ? 'text-white'
                  : 'bg-muted text-muted-foreground hover:bg-muted/80'
              }`}
              style={active === key ? { backgroundColor: FUNCTIONS[key].color } : undefined}
            >
              {FUNCTIONS[key].label}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Large interactive plot */}
        <div className="bg-background rounded-lg border p-3">
          <svg viewBox="0 0 320 200" className="w-full">
            {/* Axes */}
            <line x1="40" y1="170" x2="300" y2="170" stroke="#9ca3af" strokeWidth="1" />
            <line x1="40" y1="20" x2="40" y2="170" stroke="#9ca3af" strokeWidth="1" />
            {/* Axis labels */}
            <text x="170" y="195" textAnchor="middle" className="text-[10px]" fill="#9ca3af">x</text>
            <text x="15" y="100" textAnchor="middle" className="text-[10px]" fill="#9ca3af" transform="rotate(-90 15 100)">f(x)</text>
            {/* Grid lines */}
            {[-4, -2, 0, 2, 4].map((x) => {
              const px = 40 + ((x - X_MIN) / (X_MAX - X_MIN)) * 260
              return (
                <g key={x}>
                  <line x1={px} y1="20" x2={px} y2="170" stroke="#f3f4f6" strokeWidth="0.5" />
                  <text x={px} y="183" textAnchor="middle" className="text-[9px]" fill="#9ca3af">{x}</text>
                </g>
              )
            })}
            {/* Y grid */}
            {active === 'tanh'
              ? [-1, -0.5, 0, 0.5, 1].map((y) => {
                  const py = 170 - ((y + 1) / 2) * 150
                  return (
                    <g key={y}>
                      <line x1="40" y1={py} x2="300" y2={py} stroke="#f3f4f6" strokeWidth="0.5" />
                      <text x="33" y={py + 3} textAnchor="end" className="text-[9px]" fill="#9ca3af">{y}</text>
                    </g>
                  )
                })
              : [0, 0.25, 0.5, 0.75, 1].map((y) => {
                  const py = 170 - (y / 1) * 150
                  return (
                    <g key={y}>
                      <line x1="40" y1={py} x2="300" y2={py} stroke="#f3f4f6" strokeWidth="0.5" />
                      <text x="33" y={py + 3} textAnchor="end" className="text-[9px]" fill="#9ca3af">{y}</text>
                    </g>
                  )
                })}

            {/* Function curve */}
            <path
              d={plotPath(
                activeFunc.fn,
                active === 'tanh' ? -1 : 0,
                active === 'relu' ? 4 : active === 'tanh' ? 1 : 1
              )}
              fill="none"
              stroke={activeFunc.color}
              strokeWidth="2.5"
              strokeLinecap="round"
            />

            {/* Interactive slider indicator */}
            {(() => {
              const yMin = active === 'tanh' ? -1 : 0
              const yMax = active === 'relu' ? 4 : active === 'tanh' ? 1 : 1
              const px = 40 + ((sliderX - X_MIN) / (X_MAX - X_MIN)) * 260
              const clampedY = Math.max(yMin, Math.min(yMax, activeY))
              const py = 170 - ((clampedY - yMin) / (yMax - yMin)) * 150
              return (
                <g>
                  <line x1={px} y1="170" x2={px} y2={py} stroke={activeFunc.color} strokeWidth="1" strokeDasharray="3,3" opacity="0.5" />
                  <line x1="40" y1={py} x2={px} y2={py} stroke={activeFunc.color} strokeWidth="1" strokeDasharray="3,3" opacity="0.5" />
                  <circle cx={px} cy={py} r="5" fill={activeFunc.color} />
                  <text x={px + 8} y={py - 8} className="text-[10px] font-medium" fill={activeFunc.color}>
                    ({sliderX.toFixed(1)}, {activeY.toFixed(2)})
                  </text>
                </g>
              )
            })()}
          </svg>
          <input
            type="range"
            min={X_MIN}
            max={X_MAX}
            step={0.1}
            value={sliderX}
            onChange={(e) => setSliderX(Number(e.target.value))}
            className="w-full mt-1 accent-current"
            style={{ accentColor: activeFunc.color }}
          />
          <p className="text-xs text-muted-foreground text-center mt-1">
            Drag to explore: f({sliderX.toFixed(1)}) = {activeY.toFixed(3)}
          </p>
        </div>

        {/* Info + mini plots */}
        <div className="space-y-3">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="p-3 rounded-lg border"
              style={{ borderColor: activeFunc.color + '30', backgroundColor: activeFunc.color + '08' }}
            >
              <h4 className="font-semibold text-sm mb-1" style={{ color: activeFunc.color }}>
                {activeFunc.label}
              </h4>
              <p className="text-xs text-muted-foreground mb-2">{activeFunc.desc}</p>
              <div className="flex items-center gap-2 text-xs">
                <span className="bg-muted px-2 py-0.5 rounded font-mono">f'(x)</span>
                <span className="text-muted-foreground font-mono">{activeFunc.derivative}</span>
              </div>
              <div className="mt-2 text-xs text-muted-foreground">
                <span className="font-medium">Range: </span>
                [{activeFunc.range[0]}, {activeFunc.range[1] === Infinity ? '∞' : activeFunc.range[1]}]
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Mini comparison plots */}
          <div className="grid grid-cols-2 gap-2">
            {(Object.keys(FUNCTIONS) as FuncKey[]).map((key) => (
              <button
                key={key}
                onClick={() => setActive(key)}
                className={`rounded-lg border p-1.5 transition-all ${
                  active === key ? 'ring-2 shadow-sm' : 'opacity-60 hover:opacity-100'
                }`}
                style={active === key ? { ringColor: FUNCTIONS[key].color } : undefined}
              >
                <div className="h-12">
                  <MiniPlot
                    fn={FUNCTIONS[key].fn}
                    color={FUNCTIONS[key].color}
                    range={
                      key === 'relu'
                        ? [0, 4]
                        : key === 'tanh'
                        ? [-1, 1]
                        : [0, 1]
                    }
                    active={active === key}
                  />
                </div>
                <p className="text-[10px] font-medium text-center mt-0.5" style={{ color: FUNCTIONS[key].color }}>
                  {FUNCTIONS[key].label}
                </p>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
