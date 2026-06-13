export interface Article {
  title: string
  content: React.ReactNode
  estimatedTime?: string
  difficulty?: 'beginner' | 'intermediate' | 'advanced'
}

export type ArticleId = 
  | 'intro' | 'what-is-ml' | 'types-of-ml' | 'applications'
  // Chapter 2: Classical Supervised Learning
  | 'supervised-intro' | 'linear-models' | 'metric-methods' | 'decision-trees' | 'supervised-conclusion'
  // Chapter 2.5: Ensembles
  | 'bias-variance' | 'bagging-forests' | 'ensemble-boosting' | 'stacking'
  // Chapter 2.6: Gradient Boosting
  | 'gbdt-intuition' | 'gbdt-math' | 'gbdt-practice'
  // Legacy supervised
  | 'classification' | 'regression' | 'algorithms'
  | 'clustering' | 'dimensionality' | 'anomaly'
  | 'basics' | 'architecture' | 'training' | 'backprop'
  | 'cnn' | 'rnn' | 'transformers' | 'gnn' | 'point-clouds'
  | 'representation-learning' | 'knowledge-distillation'
  | 'metrics' | 'validation' | 'overfitting' | 'hyperparameter-tuning'
  | 'feature-engineering' | 'feature-selection'
  | 'bagging' | 'boosting'
  | 'prob-approach' | 'glm' | 'bayesian' | 'generative-models' | 'latent-variables'
  | 'vae' | 'gan' | 'diffusion'
  | 'recsys-intro' | 'matrix-factorization' | 'content-based'
  | 'rl-intro' | 'rl-algorithms'

export type ArticlesMap = Record<ArticleId, Article>