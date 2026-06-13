export interface Article {
  title: string
  content: React.ReactNode
  estimatedTime?: string
  difficulty?: 'beginner' | 'intermediate' | 'advanced'
}

export type ArticleId = 
  | 'intro' | 'what-is-ml' | 'types-of-ml' | 'applications'
  | 'classification' | 'regression' | 'algorithms'
  | 'clustering' | 'dimensionality' | 'anomaly'
  | 'basics' | 'architecture' | 'training'
  | 'cnn' | 'rnn' | 'transformers'
  | 'metrics' | 'validation' | 'overfitting'
  | 'feature-engineering' | 'feature-selection'
  | 'bagging' | 'boosting'
  | 'bayesian' | 'generative-models' | 'latent-variables'
  | 'vae' | 'gan' | 'diffusion'
  | 'recsys-intro' | 'matrix-factorization' | 'content-based'
  | 'rl-intro' | 'rl-algorithms'

export type ArticlesMap = Record<ArticleId, Article>