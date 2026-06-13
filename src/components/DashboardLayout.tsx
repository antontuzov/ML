import { useState } from 'react'
import { Outlet, Link, useLocation } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { useProgress } from '@/context/ProgressContext'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Menu, 
  X, 
  ChevronDown,
  Brain,
  Home,
  CheckCircle2,
  Circle,
  Lightbulb
} from 'lucide-react'

const chapters = [
  {
    id: 'intro',
    title: '1. Introduction to ML',
    icon: '🚀',
    sections: [
      { id: 'intro', title: 'Overview' },
      { id: 'what-is-ml', title: 'What is Machine Learning?' },
      { id: 'types-of-ml', title: 'Types of Machine Learning' },
      { id: 'applications', title: 'Applications of ML' }
    ]
  },
  {
    id: 'supervised-learning',
    title: '2. Classical Supervised Learning',
    icon: '📚',
    sections: [
      { id: 'supervised-intro', title: '2.1 Introduction' },
      { id: 'linear-models', title: '2.2 Linear Models' },
      { id: 'metric-methods', title: '2.3 Metric Methods & KNN' },
      { id: 'decision-trees', title: '2.4 Decision Trees' },
      { id: 'supervised-conclusion', title: '2.7 Conclusion' }
    ]
  },
  {
    id: 'ensembles-advanced',
    title: '2.5 Ensemble Methods',
    icon: '🌳',
    sections: [
      { id: 'bias-variance', title: 'Bias-Variance Decomposition' },
      { id: 'bagging-forests', title: 'Bagging & Random Forests' },
      { id: 'ensemble-boosting', title: 'Introduction to Boosting' },
      { id: 'stacking', title: 'Stacking & Blending' }
    ]
  },
  {
    id: 'gradient-boosting',
    title: '2.6 Gradient Boosting',
    icon: '🚀',
    sections: [
      { id: 'gbdt-intuition', title: 'GBDT Intuition' },
      { id: 'gbdt-math', title: 'The Mathematics' },
      { id: 'gbdt-practice', title: 'In Practice (XGBoost/LGBM/CB)' }
    ]
  },
  {
    id: 'supervised',
    title: 'Supervised Learning (Legacy)',
    icon: '📊',
    sections: [
      { id: 'classification', title: 'Classification' },
      { id: 'regression', title: 'Regression' },
      { id: 'algorithms', title: 'Common Algorithms' }
    ]
  },
  {
    id: 'ensemble',
    title: 'Ensemble Methods (Legacy)',
    icon: '🌲',
    sections: [
      { id: 'bagging', title: 'Bagging & Random Forests' },
      { id: 'boosting', title: 'Gradient Boosting' }
    ]
  },
  {
    id: 'unsupervised',
    title: '3. Unsupervised Learning',
    icon: '🔍',
    sections: [
      { id: 'clustering', title: 'Clustering' },
      { id: 'dimensionality', title: 'Dimensionality Reduction' },
      { id: 'anomaly', title: 'Anomaly Detection' }
    ]
  },
  {
    id: 'evaluation',
    title: 'Model Evaluation',
    icon: '📈',
    sections: [
      { id: 'metrics', title: 'Evaluation Metrics' },
      { id: 'validation', title: 'Cross-Validation' },
      { id: 'overfitting', title: 'Overfitting & Underfitting' },
      { id: 'hyperparameter-tuning', title: 'Hyperparameter Tuning' }
    ]
  },
  {
    id: 'feature-eng',
    title: 'Feature Engineering',
    icon: '🔧',
    sections: [
      { id: 'feature-engineering', title: 'Feature Engineering' },
      { id: 'feature-selection', title: 'Feature Selection' }
    ]
  },
  {
    id: 'neural',
    title: 'Deep Learning: Intro',
    icon: '🧠',
    sections: [
      { id: 'basics', title: 'Neural Networks' },
      { id: 'architecture', title: 'Fully Connected Networks' },
      { id: 'backprop', title: 'Backpropagation' },
      { id: 'training', title: 'Training Techniques' }
    ]
  },
  {
    id: 'deep-learning',
    title: 'Deep Learning: Architectures',
    icon: '⚡',
    sections: [
      { id: 'cnn', title: 'Convolutional Neural Networks' },
      { id: 'rnn', title: 'Sequence Models' },
      { id: 'transformers', title: 'Transformers' },
      { id: 'gnn', title: 'Graph Neural Networks' },
      { id: 'point-clouds', title: 'Point Cloud Networks' }
    ]
  },
  {
    id: 'dl-practice',
    title: 'Deep Learning: Practice',
    icon: '🏗️',
    sections: [
      { id: 'representation-learning', title: 'Representation Learning' },
      { id: 'knowledge-distillation', title: 'Knowledge Distillation' }
    ]
  },
  {
    id: 'probabilistic',
    title: 'Probabilistic Models',
    icon: '🎲',
    sections: [
      { id: 'prob-approach', title: 'Probabilistic Approach' },
      { id: 'glm', title: 'Generalized Linear Models' },
      { id: 'bayesian', title: 'Bayesian Approach' },
      { id: 'generative-models', title: 'Generative vs Discriminative' },
      { id: 'latent-variables', title: 'Latent Variable Models' }
    ]
  },
  {
    id: 'generative',
    title: 'Generative Models',
    icon: '🎨',
    sections: [
      { id: 'vae', title: 'Variational Autoencoders' },
      { id: 'gan', title: 'GANs' },
      { id: 'diffusion', title: 'Diffusion Models' }
    ]
  },
  {
    id: 'recsys',
    title: 'Recommendation Systems',
    icon: '🎯',
    sections: [
      { id: 'recsys-intro', title: 'Introduction to RecSys' },
      { id: 'matrix-factorization', title: 'Matrix Factorization' },
      { id: 'content-based', title: 'Content-Based Filtering' }
    ]
  },
  {
    id: 'reinforcement',
    title: 'Reinforcement Learning',
    icon: '🎮',
    sections: [
      { id: 'rl-intro', title: 'Introduction to RL' },
      { id: 'rl-algorithms', title: 'RL Algorithms & Deep RL' }
    ]
  }
]

const tips = [
  "Start with simpler models before jumping to complex ones — they often perform surprisingly well.",
  "Always split your data into train/validation/test before any preprocessing to avoid data leakage.",
  "Feature engineering often matters more than algorithm choice. Spend time understanding your data.",
  "Use cross-validation instead of a single train/test split for more reliable performance estimates.",
  "Monitor both training and validation loss — the gap between them tells you about overfitting.",
  "When in doubt, try Random Forest or Gradient Boosting first — they're robust baselines.",
  "Normalize your features before using distance-based algorithms like KNN or SVM.",
  "More data often beats a more complex model. Consider data augmentation when data is scarce."
]

function ProgressRing({ progress }: { progress: number }) {
  const r = 16
  const circ = 2 * Math.PI * r
  const offset = circ - (progress / 100) * circ

  return (
    <div className="relative inline-flex items-center justify-center">
      <svg width="44" height="44" className="-rotate-90">
        <circle cx="22" cy="22" r={r} stroke="currentColor" strokeWidth="3" fill="none" className="text-muted" />
        <circle
          cx="22" cy="22" r={r}
          stroke="currentColor"
          strokeWidth="3"
          fill="none"
          className="text-primary transition-all duration-500"
          strokeDasharray={circ}
          strokeDashoffset={offset}
          strokeLinecap="round"
        />
      </svg>
      <span className="absolute text-[10px] font-bold">{progress}%</span>
    </div>
  )
}

export default function DashboardLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [expandedChapters, setExpandedChapters] = useState<string[]>(['intro', 'supervised-learning'])
  const [tipIndex] = useState(() => Math.floor(Math.random() * tips.length))
  const location = useLocation()
  const { completedSections, toggleSection, getProgress } = useProgress()
  const progress = getProgress()

  const toggleChapter = (chapterId: string) => {
    setExpandedChapters(prev =>
      prev.includes(chapterId)
        ? prev.filter(id => id !== chapterId)
        : [...prev, chapterId]
    )
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center justify-between">
          <div className="flex items-center gap-3">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="lg:hidden"
            >
              {sidebarOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
            <Link to="/" className="flex items-center gap-2">
              <Brain className="h-6 w-6 text-primary" />
              <span className="font-semibold hidden sm:inline-block">ML Handbook</span>
            </Link>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="hidden md:flex items-center gap-2 text-sm">
              <ProgressRing progress={progress} />
              <span className="text-muted-foreground hidden lg:inline">
                {completedSections.length} of {Object.keys(completedSections).length > 0 ? '' : ''}completed
              </span>
            </div>
            <Link to="/">
              <Button variant="ghost" size="sm">
                <Home className="h-4 w-4 mr-2" />
                Home
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside
          className={`fixed lg:sticky top-14 z-30 h-[calc(100vh-3.5rem)] w-72 overflow-y-auto border-r bg-background transition-transform duration-300 ${
            sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0 lg:w-0 lg:overflow-hidden lg:border-0'
          }`}
        >
          {/* Tip card */}
          <div className="p-3 border-b">
            <div className="rounded-lg bg-gradient-to-br from-primary/5 to-primary/10 p-3 border border-primary/10">
              <div className="flex items-center gap-2 mb-1">
                <Lightbulb className="h-3.5 w-3.5 text-primary" />
                <span className="text-xs font-semibold text-primary">Pro Tip</span>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {tips[tipIndex]}
              </p>
            </div>
          </div>

          {/* Progress bar */}
          <div className="px-3 pt-3 pb-1">
            <div className="flex items-center justify-between text-xs text-muted-foreground mb-1.5">
              <span>Course Progress</span>
              <span className="font-medium text-foreground">{progress}%</span>
            </div>
            <div className="w-full h-1.5 bg-muted rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-primary rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
              />
            </div>
          </div>

          {/* Chapter navigation */}
          <div className="p-3">
            <nav className="space-y-0.5">
              {chapters.map((chapter) => {
                const isExpanded = expandedChapters.includes(chapter.id)
                const chapterCompleted = chapter.sections.every(s => completedSections.includes(s.id))

                return (
                  <div key={chapter.id}>
                    <button
                      onClick={() => toggleChapter(chapter.id)}
                      className="w-full flex items-center gap-2 px-3 py-2 text-sm font-medium rounded-md hover:bg-accent/50 transition-colors"
                    >
                      <span className="text-sm">{chapter.icon}</span>
                      <span className="flex-1 text-left truncate">{chapter.title}</span>
                      {chapterCompleted && <CheckCircle2 className="h-3.5 w-3.5 text-green-500 flex-shrink-0" />}
                      <motion.div animate={{ rotate: isExpanded ? 0 : -90 }} transition={{ duration: 0.2 }}>
                        <ChevronDown className="h-3.5 w-3.5 text-muted-foreground" />
                      </motion.div>
                    </button>
                    <AnimatePresence initial={false}>
                      {isExpanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="overflow-hidden"
                        >
                          <div className="ml-4 pl-3 border-l space-y-0.5 py-1">
                            {chapter.sections.map((section) => {
                              const isCompleted = completedSections.includes(section.id)
                              const isActive = location.pathname.includes(section.id)
                              return (
                                <div key={section.id} className="flex items-center gap-2">
                                  <button
                                    onClick={() => toggleSection(section.id)}
                                    className="flex-shrink-0 hover:scale-110 transition-transform"
                                  >
                                    {isCompleted ? (
                                      <CheckCircle2 className="h-3.5 w-3.5 text-green-500" />
                                    ) : (
                                      <Circle className="h-3.5 w-3.5 text-muted-foreground/50" />
                                    )}
                                  </button>
                                  <Link
                                    to={`/dashboard/article/${section.id}`}
                                    className={`flex-1 px-2 py-1.5 text-xs rounded-md transition-all ${
                                      isActive
                                        ? 'bg-primary/10 text-primary font-medium'
                                        : 'text-muted-foreground hover:text-foreground hover:bg-accent/30'
                                    }`}
                                  >
                                    {section.title}
                                  </Link>
                                </div>
                              )
                            })}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                )
              })}
            </nav>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 min-w-0">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
