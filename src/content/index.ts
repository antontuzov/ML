import { Article, ArticleId } from './types'
import { introductionArticles } from './introduction'
import { supervisedArticles } from './supervised'
import { unsupervisedArticles } from './unsupervised'
import { neuralArticles } from './neural'
import { deepLearningArticles } from './deep-learning'
import { evaluationArticles } from './evaluation'
import { featureEngineeringArticles } from './feature-engineering'
import { ensembleArticles } from './ensemble'
import { probabilisticArticles } from './probabilistic'
import { generativeArticles } from './generative'
import { recommendationArticles } from './recommendation'
import { reinforcementArticles } from './reinforcement'

export type { Article, ArticleId }

const allArticles = {
  ...introductionArticles,
  ...supervisedArticles,
  ...unsupervisedArticles,
  ...neuralArticles,
  ...deepLearningArticles,
  ...evaluationArticles,
  ...featureEngineeringArticles,
  ...ensembleArticles,
  ...probabilisticArticles,
  ...generativeArticles,
  ...recommendationArticles,
  ...reinforcementArticles,
}

export const articles = allArticles as Record<ArticleId, Article>

export const TOTAL_ARTICLES = Object.keys(allArticles).length
