import { Card, CardContent } from '@/components/ui/card'
import { Article } from './types'

export const ensembleArticles: Record<string, Article> = {
  bagging: {
    title: 'Bagging & Random Forests',
    estimatedTime: '14 min',
    difficulty: 'intermediate',
    content: (
      <>
        <p className="text-lg leading-relaxed mb-6">
          Bootstrap Aggregating (Bagging) is an ensemble technique that trains multiple models on random subsets
          of data and combines their predictions. Random Forest extends this idea to decision trees.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">How Bagging Works</h2>
        <ol className="list-decimal list-inside space-y-2 mb-6">
          <li>Create multiple bootstrap samples (random sampling with replacement)</li>
          <li>Train a separate model on each sample</li>
          <li>Combine predictions by averaging (regression) or voting (classification)</li>
        </ol>

        <Card className="my-6 bg-accent/50 border-accent">
          <CardContent className="p-6">
            <h3 className="font-semibold mb-2">Why Bagging Reduces Variance</h3>
            <p className="text-sm text-muted-foreground">
              Each model captures different aspects of the data. Averaging reduces the impact of individual
              model errors, similar to how "wisdom of crowds" produces better estimates than individuals.
            </p>
          </CardContent>
        </Card>

        <h2 className="text-2xl font-bold mt-8 mb-4">Random Forest</h2>
        <p className="leading-relaxed mb-4">
          Random Forest adds an extra layer of randomness: at each split in a tree, only a random subset of
          features is considered. This decorrelates trees and improves ensemble performance.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">Key Hyperparameters</h2>
        <div className="grid gap-4 my-6">
          <Card>
            <CardContent className="p-4">
              <h3 className="font-semibold mb-2">n_estimators</h3>
              <p className="text-sm text-muted-foreground">
                Number of trees. More is generally better but with diminishing returns.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <h3 className="font-semibold mb-2">max_depth</h3>
              <p className="text-sm text-muted-foreground">
                Maximum tree depth. Controls overfitting vs underfitting trade-off.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <h3 className="font-semibold mb-2">max_features</h3>
              <p className="text-sm text-muted-foreground">
                Number of features to consider at each split. sqrt(n) for classification, n/3 for regression.
              </p>
            </CardContent>
          </Card>
        </div>

        <h2 className="text-2xl font-bold mt-8 mb-4">Out-of-Bag (OOB) Score</h2>
        <p className="leading-relaxed mb-4">
          Each tree is trained on ~63% of data (bootstrap sample). The remaining ~37% can be used as a
          validation set, providing a free estimate of model performance without separate cross-validation.
        </p>
      </>
    )
  },
  boosting: {
    title: 'Gradient Boosting',
    estimatedTime: '16 min',
    difficulty: 'advanced',
    content: (
      <>
        <p className="text-lg leading-relaxed mb-6">
          Gradient Boosting builds an ensemble of weak learners sequentially, where each new model focuses
          on correcting the errors made by its predecessors. It's the gold standard for tabular data.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">The Boosting Idea</h2>
        <p className="leading-relaxed mb-4">
          Unlike bagging where models are trained independently, boosting trains models sequentially. Each
          new model fits to the residual errors (negative gradients) of the current ensemble, gradually
          improving performance.
        </p>

        <Card className="my-6 bg-accent/50 border-accent">
          <CardContent className="p-6">
            <h3 className="font-semibold mb-2">Bagging vs Boosting</h3>
            <div className="grid grid-cols-2 gap-4 text-sm text-muted-foreground">
              <div>
                <strong>Bagging:</strong>
                <ul className="mt-1 space-y-1 text-xs">
                  <li>• Models trained independently</li>
                  <li>• Reduces variance</li>
                  <li>• Parallel training</li>
                </ul>
              </div>
              <div>
                <strong>Boosting:</strong>
                <ul className="mt-1 space-y-1 text-xs">
                  <li>• Models trained sequentially</li>
                  <li>• Reduces bias + variance</li>
                  <li>• Sequential training</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <h2 className="text-2xl font-bold mt-8 mb-4">Popular Implementations</h2>
        <div className="space-y-4 my-6">
          <Card>
            <CardContent className="p-4">
              <h3 className="font-semibold mb-2">XGBoost</h3>
              <p className="text-sm text-muted-foreground">
                Extreme Gradient Boosting — optimized for speed with parallel tree building, regularization,
                and cache optimization. Won countless Kaggle competitions.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <h3 className="font-semibold mb-2">LightGBM</h3>
              <p className="text-sm text-muted-foreground">
                Microsoft's implementation using histogram-based splitting. Extremely fast on large datasets
                with lower memory usage.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <h3 className="font-semibold mb-2">CatBoost</h3>
              <p className="text-sm text-muted-foreground">
                Yandex's implementation with native categorical feature support, ordered boosting, and
                excellent default hyperparameters.
              </p>
            </CardContent>
          </Card>
        </div>

        <h2 className="text-2xl font-bold mt-8 mb-4">Key Hyperparameters</h2>
        <ul className="list-disc list-inside space-y-2 mb-6">
          <li><strong>Learning rate (eta):</strong> Step size for gradient descent (0.01–0.3)</li>
          <li><strong>n_estimators:</strong> Number of boosting rounds</li>
          <li><strong>max_depth:</strong> Tree depth (typically 3–10)</li>
          <li><strong>subsample:</strong> Fraction of data per tree (0.6–1.0)</li>
          <li><strong>colsample_bytree:</strong> Fraction of features per tree</li>
          <li><strong>min_child_weight:</strong> Minimum sum of instance weight needed in a child</li>
        </ul>
      </>
    )
  }
}
