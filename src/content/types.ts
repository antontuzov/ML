export interface Article {
  title: string
  content: React.ReactNode
}

export type ArticleId = 
  | 'intro' | 'what-is-ml' | 'types-of-ml' | 'applications'
  | 'classification' | 'regression' | 'algorithms'
  | 'clustering' | 'dimensionality' | 'anomaly'
  | 'basics' | 'architecture' | 'training'
  | 'cnn' | 'rnn' | 'transformers'
  | 'metrics' | 'validation' | 'overfitting'

export type ArticlesMap = Record<ArticleId, Article>