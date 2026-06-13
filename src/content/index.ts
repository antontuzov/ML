import { Article, ArticleId } from './types'
import { introductionArticles } from './introduction'
import { supervisedArticles } from './supervised'
import { supervisedLearningArticles } from './supervised-learning'
import { unsupervisedArticles } from './unsupervised'
import { neuralArticles } from './neural'
import { deepLearningArticles } from './deep-learning'
import { deepLearningPracticeArticles } from './deep-learning-practice'
import { evaluationArticles } from './evaluation'
import { featureEngineeringArticles } from './feature-engineering'
import { ensembleArticles } from './ensemble'
import { ensemblesAdvancedArticles } from './ensembles-advanced'
import { gradientBoostingArticles } from './gradient-boosting'
import { probabilisticArticles } from './probabilistic'
import { generativeArticles } from './generative'
import { recommendationArticles } from './recommendation'
import { reinforcementArticles } from './reinforcement'

export type { Article, ArticleId }

const allArticles = {
  ...introductionArticles,
  ...supervisedArticles,
  ...supervisedLearningArticles,
  ...unsupervisedArticles,
  ...neuralArticles,
  ...deepLearningArticles,
  ...deepLearningPracticeArticles,
  ...evaluationArticles,
  ...featureEngineeringArticles,
  ...ensembleArticles,
  ...ensemblesAdvancedArticles,
  ...gradientBoostingArticles,
  ...probabilisticArticles,
  ...generativeArticles,
  ...recommendationArticles,
  ...reinforcementArticles,
}

export const articles = allArticles as Record<ArticleId, Article>

export const TOTAL_ARTICLES = Object.keys(allArticles).length
