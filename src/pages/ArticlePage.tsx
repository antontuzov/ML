import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { useProgress } from '@/context/ProgressContext'
import { articles } from '@/content'
import { motion } from 'framer-motion'
import {
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  Circle,
  Clock,
  Lightbulb,
  ArrowUp,
  BookOpen
} from 'lucide-react'

const articleTips = [
  "Read actively — pause after each section and try to summarize what you learned.",
  "Don't skip exercises! They solidify understanding far more than passive reading.",
  "Connect new concepts to things you already know for better retention.",
  "If a concept feels unclear, revisit the previous article — they build on each other.",
  "Take notes in your own words — it dramatically improves comprehension.",
  "Try implementing concepts in code, even simple examples reinforce learning.",
  "Discuss what you learn with others — teaching is the best way to understand.",
  "Focus on intuition first, then formalize with math. Don't get lost in notation."
]

export default function ArticlePage({ articleId: propArticleId }: { articleId?: string }) {
  const { articleId: paramArticleId } = useParams()
  const articleId = propArticleId || paramArticleId || 'intro'
  const article = articles[articleId as keyof typeof articles] || articles['intro']
  const { completedSections, toggleSection } = useProgress()
  const isCompleted = completedSections.includes(articleId)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [tipIndex] = useState(() => Math.floor(Math.random() * articleTips.length))

  // Get all article IDs in order
  const articleIds = Object.keys(articles)
  const currentIndex = articleIds.indexOf(articleId)
  const prevArticleId = currentIndex > 0 ? articleIds[currentIndex - 1] : null
  const nextArticleId = currentIndex < articleIds.length - 1 ? articleIds[currentIndex + 1] : null
  const articleNumber = currentIndex + 1
  const totalArticles = articleIds.length

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrollTop = window.scrollY
      setScrollProgress(scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0)
      setShowScrollTop(scrollTop > 400)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [articleId])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  // Determine difficulty badge color
  const difficultyColors: Record<string, string> = {
    beginner: 'bg-green-100 text-green-700',
    intermediate: 'bg-yellow-100 text-yellow-700',
    advanced: 'bg-red-100 text-red-700'
  }

  return (
    <div className="relative">
      {/* Reading progress bar */}
      <div className="fixed top-14 left-0 right-0 z-20 h-0.5 bg-muted/50">
        <motion.div
          className="h-full bg-primary"
          style={{ width: `${scrollProgress}%` }}
          transition={{ duration: 0.1 }}
        />
      </div>

      <motion.div
        key={articleId}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="max-w-4xl mx-auto p-6 lg:p-8"
      >
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
          <Link to="/dashboard" className="hover:text-foreground transition-colors">Dashboard</Link>
          <ChevronRight className="h-3 w-3" />
          <span className="text-foreground font-medium">{article.title}</span>
        </nav>

        {/* Article Header */}
        <div className="flex items-start justify-between mb-8 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-3 flex-wrap">
              <span className="text-xs text-muted-foreground flex items-center gap-1">
                <BookOpen className="h-3 w-3" />
                {articleNumber} of {totalArticles}
              </span>
              {article.estimatedTime && (
                <span className="text-xs text-muted-foreground flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  {article.estimatedTime} read
                </span>
              )}
              {article.difficulty && (
                <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${difficultyColors[article.difficulty] || ''}`}>
                  {article.difficulty}
                </span>
              )}
            </div>
            <h1 className="text-3xl lg:text-4xl font-bold">{article.title}</h1>
          </div>
          <div className="flex gap-2 flex-shrink-0">
            <Button
              variant={isCompleted ? "default" : "outline"}
              size="sm"
              onClick={() => toggleSection(articleId)}
              className="transition-all"
            >
              {isCompleted ? (
                <>
                  <CheckCircle2 className="h-4 w-4 mr-1.5" />
                  Done
                </>
              ) : (
                <>
                  <Circle className="h-4 w-4 mr-1.5" />
                  Mark Complete
                </>
              )}
            </Button>
          </div>
        </div>

        {/* Tip callout */}
        <motion.div
          initial={{ opacity: 0, x: -8 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-8"
        >
          <Card className="border-primary/20 bg-primary/5">
            <CardContent className="p-4 flex items-start gap-3">
              <Lightbulb className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-medium text-primary mb-0.5">Learning Tip</p>
                <p className="text-sm text-muted-foreground">{articleTips[tipIndex]}</p>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Article Content */}
        <article className="prose prose-slate max-w-none">
          {article.content}
        </article>

        {/* Completion CTA */}
        {!isCompleted && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-10"
          >
            <Card className="border-green-500/20 bg-green-500/5">
              <CardContent className="p-6 text-center">
                <h3 className="font-semibold mb-2">Finished reading?</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Mark this article as complete to track your progress
                </p>
                <Button
                  onClick={() => toggleSection(articleId)}
                  className="bg-green-600 hover:bg-green-700"
                >
                  <CheckCircle2 className="h-4 w-4 mr-2" />
                  Mark as Complete
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        )}

        {/* Navigation */}
        <div className="flex items-center justify-between mt-12 pt-8 border-t">
          {prevArticleId ? (
            <Link to={`/dashboard/article/${prevArticleId}`} className="group">
              <Button variant="outline" className="group-hover:border-primary/50 transition-colors">
                <ChevronLeft className="h-4 w-4 mr-2 transition-transform group-hover:-translate-x-0.5" />
                Previous
              </Button>
            </Link>
          ) : (
            <div />
          )}
          {nextArticleId ? (
            <Link to={`/dashboard/article/${nextArticleId}`} className="group">
              <Button className="group-hover:shadow-md transition-all">
                Next
                <ChevronRight className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-0.5" />
              </Button>
            </Link>
          ) : (
            <Link to="/">
              <Button>
                <CheckCircle2 className="h-4 w-4 mr-2" />
                Course Complete!
              </Button>
            </Link>
          )}
        </div>
      </motion.div>

      {/* Scroll to top */}
      {showScrollTop && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 h-10 w-10 rounded-full bg-primary text-primary-foreground shadow-lg flex items-center justify-center hover:bg-primary/90 transition-colors"
        >
          <ArrowUp className="h-5 w-5" />
        </motion.button>
      )}
    </div>
  )
}
