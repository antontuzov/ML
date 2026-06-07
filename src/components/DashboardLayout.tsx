import { useState } from 'react'
import { Outlet, Link, useLocation } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { useProgress } from '@/context/ProgressContext'
import { 
  BookOpen, 
  Menu, 
  X, 
  Search, 
  ChevronRight,
  Brain,
  Home,
  CheckCircle2,
  Circle
} from 'lucide-react'

const chapters = [
  {
    id: 'intro',
    title: 'Introduction to ML',
    sections: [
      { id: 'what-is-ml', title: 'What is Machine Learning?' },
      { id: 'types-of-ml', title: 'Types of Machine Learning' },
      { id: 'applications', title: 'Applications of ML' }
    ]
  },
  {
    id: 'supervised',
    title: 'Supervised Learning',
    sections: [
      { id: 'classification', title: 'Classification' },
      { id: 'regression', title: 'Regression' },
      { id: 'algorithms', title: 'Common Algorithms' }
    ]
  },
  {
    id: 'unsupervised',
    title: 'Unsupervised Learning',
    sections: [
      { id: 'clustering', title: 'Clustering' },
      { id: 'dimensionality', title: 'Dimensionality Reduction' },
      { id: 'anomaly', title: 'Anomaly Detection' }
    ]
  },
  {
    id: 'neural',
    title: 'Neural Networks',
    sections: [
      { id: 'basics', title: 'Neural Network Basics' },
      { id: 'architecture', title: 'Network Architecture' },
      { id: 'training', title: 'Training Techniques' }
    ]
  },
  {
    id: 'deep-learning',
    title: 'Deep Learning',
    sections: [
      { id: 'cnn', title: 'Convolutional Neural Networks' },
      { id: 'rnn', title: 'Recurrent Neural Networks' },
      { id: 'transformers', title: 'Transformers' }
    ]
  },
  {
    id: 'evaluation',
    title: 'Model Evaluation',
    sections: [
      { id: 'metrics', title: 'Evaluation Metrics' },
      { id: 'validation', title: 'Cross-Validation' },
      { id: 'overfitting', title: 'Overfitting & Underfitting' }
    ]
  }
]

export default function DashboardLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const location = useLocation()
  const { completedSections, toggleSection, getProgress } = useProgress()
  const progress = getProgress()

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-4">
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
          
          <div className="flex items-center gap-4">
            <div className="relative hidden md:block">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search topics..."
                className="h-9 w-64 rounded-md border border-input bg-background pl-9 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
              />
            </div>
            <div className="hidden lg:flex items-center gap-2 text-sm">
              <span className="text-muted-foreground">{progress}% Complete</span>
              <div className="w-32 h-2 bg-secondary rounded-full overflow-hidden">
                <div 
                  className="h-full bg-primary transition-all duration-300"
                  style={{ width: `${progress}%` }}
                />
              </div>
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
          className={`fixed lg:sticky top-16 z-30 h-[calc(100vh-4rem)] w-72 overflow-y-auto border-r bg-background transition-transform ${
            sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0 lg:w-0 lg:overflow-hidden'
          }`}
        >
          <div className="p-4">
            <nav className="space-y-2">
              {chapters.map((chapter) => (
                <div key={chapter.id} className="space-y-1">
                  <button className="w-full flex items-center justify-between px-3 py-2 text-sm font-medium rounded-md hover:bg-accent">
                    <span>{chapter.title}</span>
                    <ChevronRight className="h-4 w-4 text-muted-foreground" />
                  </button>
                  <div className="ml-4 space-y-1">
                    {chapter.sections.map((section) => {
                      const isCompleted = completedSections.includes(section.id)
                      return (
                        <div key={section.id} className="flex items-center gap-2">
                          <button
                            onClick={() => toggleSection(section.id)}
                            className="flex-shrink-0"
                          >
                            {isCompleted ? (
                              <CheckCircle2 className="h-4 w-4 text-primary" />
                            ) : (
                              <Circle className="h-4 w-4 text-muted-foreground" />
                            )}
                          </button>
                          <Link
                            to={`/dashboard/article/${section.id}`}
                            className={`flex-1 px-3 py-2 text-sm rounded-md transition-colors ${
                              location.pathname.includes(section.id)
                                ? 'bg-accent text-accent-foreground font-medium'
                                : 'text-muted-foreground hover:text-foreground hover:bg-accent/50'
                            }`}
                          >
                            {section.title}
                          </Link>
                        </div>
                      )
                    })}
                  </div>
                </div>
              ))}
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
