import { Article, ArticleId } from './types'
import { introductionArticles } from './introduction'
import { supervisedArticles } from './supervised'
import { unsupervisedArticles } from './unsupervised'
import { neuralArticles } from './neural'
import { deepLearningArticles } from './deep-learning'
import { evaluationArticles } from './evaluation'

export type { Article, ArticleId }

const allArticles = {
  ...introductionArticles,
  ...supervisedArticles,
  ...unsupervisedArticles,
  ...neuralArticles,
  ...deepLearningArticles,
  ...evaluationArticles
}

export const articles = allArticles as Record<ArticleId, Article>