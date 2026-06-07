import { useParams, Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { useProgress } from '@/context/ProgressContext'
import { ChevronLeft, ChevronRight, Bookmark, CheckCircle2, Circle } from 'lucide-react'
import { articles } from '@/content'

export default function ArticlePage({ articleId: propArticleId }: { articleId?: string }) {
  const { articleId: paramArticleId } = useParams()
  const articleId = propArticleId || paramArticleId || 'intro'
  const article = articles[articleId as keyof typeof articles] || articles['intro']
  const { completedSections, toggleSection } = useProgress()
  const isCompleted = completedSections.includes(articleId)

  // Get all article IDs in order
  const articleIds = Object.keys(articles)
  const currentIndex = articleIds.indexOf(articleId)
  const prevArticleId = currentIndex > 0 ? articleIds[currentIndex - 1] : null
  const nextArticleId = currentIndex < articleIds.length - 1 ? articleIds[currentIndex + 1] : null

  return (
    <div className="max-w-4xl mx-auto p-6 lg:p-8">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
        <span>Dashboard</span>
        <ChevronRight className="h-4 w-4" />
        <span className="text-foreground">{article.title}</span>
      </nav>

      {/* Article Header */}
      <div className="flex items-start justify-between mb-8">
        <h1 className="text-3xl lg:text-4xl font-bold">{article.title}</h1>
        <div className="flex gap-2">
          <Button 
            variant={isCompleted ? "default" : "outline"} 
            size="sm"
            onClick={() => toggleSection(articleId)}
          >
            {isCompleted ? (
              <>
                <CheckCircle2 className="h-4 w-4 mr-2" />
                Completed
              </>
            ) : (
              <>
                <Circle className="h-4 w-4 mr-2" />
                Mark Complete
              </>
            )}
          </Button>
          <Button variant="ghost" size="icon">
            <Bookmark className="h-5 w-5" />
          </Button>
        </div>
      </div>

      {/* Article Content */}
      <article className="prose prose-slate max-w-none">
        {article.content}
      </article>

      {/* Navigation */}
      <div className="flex items-center justify-between mt-12 pt-8 border-t">
        {prevArticleId ? (
          <Link to={`/dashboard/article/${prevArticleId}`}>
            <Button variant="outline">
              <ChevronLeft className="h-4 w-4 mr-2" />
              Previous
            </Button>
          </Link>
        ) : (
          <div />
        )}
        {nextArticleId ? (
          <Link to={`/dashboard/article/${nextArticleId}`}>
            <Button>
              Next
              <ChevronRight className="h-4 w-4 ml-2" />
            </Button>
          </Link>
        ) : (
          <div />
        )}
      </div>
    </div>
  )
}