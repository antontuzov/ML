import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Article } from './types'

export const ensemblesAdvancedArticles: Record<string, Article> = {
  'bias-variance': {
    title: 'Bias-Variance Decomposition',
    estimatedTime: '15 min',
    difficulty: 'intermediate',
    content: (
      <>
        <p className="text-lg leading-relaxed mb-6">
          Can we combine several models and get better quality than each individual model? Yes.
          In this section we'll decompose the prediction error into components — noise, bias, and variance —
          and then see how different ensemble methods target each component.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">The Decomposition</h2>
        <p className="leading-relaxed mb-4">
          Consider a regression problem with squared loss. For an algorithm <em>a</em> trained on sample X,
          the expected error on a test point (x, y) can be written as:
        </p>
        <Card className="my-6 border-primary/20 bg-primary/5">
          <CardContent className="p-6">
            <p className="text-center font-mono text-sm mb-3">
              Error = Bias² + Variance + Noise
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
              <div className="p-2 bg-blue-500/10 rounded">
                <p className="font-semibold text-blue-600 dark:text-blue-400 mb-1">Bias²</p>
                <p className="text-muted-foreground">
                  How far the average prediction is from the true value. Reduced by more complex models.
                </p>
              </div>
              <div className="p-2 bg-orange-500/10 rounded">
                <p className="font-semibold text-orange-600 dark:text-orange-400 mb-1">Variance</p>
                <p className="text-muted-foreground">
                  How much predictions vary across different training sets. Reduced by averaging.
                </p>
              </div>
              <div className="p-2 bg-gray-500/10 rounded">
                <p className="font-semibold text-gray-600 dark:text-gray-400 mb-1">Noise</p>
                <p className="text-muted-foreground">
                  Irreducible error from data randomness. Cannot be reduced by any algorithm.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <h2 className="text-2xl font-bold mt-8 mb-4">Why This Matters for Ensembles</h2>
        <p className="leading-relaxed mb-4">
          Since we can't reduce noise, ensemble methods target either <strong>bias</strong> or <strong>variance</strong>:
        </p>
        <div className="grid gap-4 my-6">
          <Card className="border-blue-500/20 bg-blue-500/5"><CardContent className="p-4">
            <h3 className="font-semibold mb-2">To reduce Variance → Bagging</h3>
            <p className="text-sm text-muted-foreground">
              Train many independent models on different data subsets, then average. Like ancient Greek
              democracy: many subjective voters collectively make wise decisions.
            </p>
          </CardContent></Card>
          <Card className="border-orange-500/20 bg-orange-500/5"><CardContent className="p-4">
            <h3 className="font-semibold mb-2">To reduce Bias → Boosting</h3>
            <p className="text-sm text-muted-foreground">
              Build models sequentially where each corrects the previous errors.
              The final composition has lower bias than any individual model.
            </p>
          </CardContent></Card>
          <Card className="border-green-500/20 bg-green-500/5"><CardContent className="p-4">
            <h3 className="font-semibold mb-2">To combine different models → Stacking</h3>
            <p className="text-sm text-muted-foreground">
              Train diverse base models and use a meta-model to combine their predictions.
              Doesn't directly target bias or variance, but often reduces both.
            </p>
          </CardContent></Card>
        </div>

        <Card className="my-6 bg-accent/50 border-accent">
          <CardContent className="p-6">
            <h3 className="font-semibold mb-2">🎯 Summary Table</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm mt-2">
                <thead><tr className="border-b">
                  <th className="p-2 text-left">Method</th>
                  <th className="p-2 text-left">Target</th>
                  <th className="p-2 text-left">Principle</th>
                </tr></thead>
                <tbody>
                  <tr className="border-b"><td className="p-2 font-medium">Bagging</td><td className="p-2 text-muted-foreground">Variance ↓</td><td className="p-2 text-muted-foreground">Independent models on bootstrap samples, averaged</td></tr>
                  <tr className="border-b"><td className="p-2 font-medium">Boosting</td><td className="p-2 text-muted-foreground">Bias ↓</td><td className="p-2 text-muted-foreground">Sequential models correcting predecessors' errors</td></tr>
                  <tr className="border-b"><td className="p-2 font-medium">Stacking</td><td className="p-2 text-muted-foreground">Total Error ↓</td><td className="p-2 text-muted-foreground">Meta-model learns to combine diverse base predictions</td></tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </>
    )
  },

  'bagging-forests': {
    title: 'Bagging & Random Forests',
    estimatedTime: '18 min',
    difficulty: 'intermediate',
    content: (
      <>
        <p className="text-lg leading-relaxed mb-6">
          Bagging (Bootstrap Aggregating) trains multiple models on random subsets of data and combines them.
          Random Forest extends this to decision trees with an extra layer of feature randomness.
          Together, they dramatically reduce variance.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">Bagging: The Algorithm</h2>
        <ol className="list-decimal list-inside space-y-2 mb-6">
          <li>Given training set of n objects, draw a <strong>bootstrap sample</strong> of size n (sampling with replacement)</li>
          <li>Train a base model on this sample</li>
          <li>Repeat B times to get B models</li>
          <li><strong>Regression:</strong> average all B predictions</li>
          <li><strong>Classification:</strong> majority vote among B predictions</li>
        </ol>

        <Card className="my-6 border-primary/20 bg-primary/5">
          <CardContent className="p-6">
            <h3 className="font-semibold mb-2">Mathematical Justification</h3>
            <p className="text-sm text-muted-foreground mb-2">
              If base models are uncorrelated, bagging reduces variance by a factor of B:
            </p>
            <p className="font-mono text-xs bg-muted px-2 py-1 rounded inline-block">
              Var(ensemble) = Var(single_model) / B
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              The bias stays the same as a single base model. In practice, models are correlated
              (they learn from overlapping data), so the reduction is less dramatic but still significant.
            </p>
          </CardContent>
        </Card>

        <h2 className="text-2xl font-bold mt-8 mb-4">Random Forest</h2>
        <p className="leading-relaxed mb-4">
          Pure bagging produces correlated trees (they all learn the same dependency from overlapping samples).
          <strong> Random Forest</strong> decorrelates trees by randomly selecting features at each split:
        </p>
        <div className="space-y-3 my-6">
          <Card><CardContent className="p-4">
            <h3 className="font-semibold mb-1">Step 1: Bootstrap sample</h3>
            <p className="text-sm text-muted-foreground">
              Draw n samples with replacement from the training set.
            </p>
          </CardContent></Card>
          <Card><CardContent className="p-4">
            <h3 className="font-semibold mb-1">Step 2: Random feature subset at each split</h3>
            <p className="text-sm text-muted-foreground">
              At each node, randomly choose √d features (classification) or d/3 features (regression),
              then find the best split among these features only.
            </p>
          </CardContent></Card>
          <Card><CardContent className="p-4">
            <h3 className="font-semibold mb-1">Step 3: Grow deep trees</h3>
            <p className="text-sm text-muted-foreground">
              Use deep trees (low bias). The bagging will handle variance reduction.
            </p>
          </CardContent></Card>
          <Card><CardContent className="p-4">
            <h3 className="font-semibold mb-1">Step 4: Aggregate predictions</h3>
            <p className="text-sm text-muted-foreground">
              Average for regression, majority vote for classification.
            </p>
          </CardContent></Card>
        </div>

        <h2 className="text-2xl font-bold mt-8 mb-4">Key Hyperparameters</h2>
        <div className="grid gap-4 my-6">
          <Card><CardContent className="p-4">
            <h3 className="font-semibold mb-1">Tree Depth</h3>
            <p className="text-sm text-muted-foreground">
              Use deep trees. Shallow trees have high bias that bagging can't fix.
              Deep trees have high variance that bagging reduces.
            </p>
          </CardContent></Card>
          <Card><CardContent className="p-4">
            <h3 className="font-semibold mb-1">Number of Features per Split</h3>
            <p className="text-sm text-muted-foreground">
              Fewer features = less correlation between trees = better ensemble.
              But too few = weak individual trees. √d is a good starting point.
            </p>
          </CardContent></Card>
          <Card><CardContent className="p-4">
            <h3 className="font-semibold mb-1">Number of Trees</h3>
            <p className="text-sm text-muted-foreground">
              More trees = better, with diminishing returns. Plot error vs. number of trees
              and stop when improvement plateaus. Typical: 100–500 trees.
            </p>
          </CardContent></Card>
        </div>

        <Card className="my-6 bg-accent/50 border-accent">
          <CardContent className="p-6">
            <h3 className="font-semibold mb-2">🎯 Out-of-Bag (OOB) Score</h3>
            <p className="text-sm text-muted-foreground">
              Each bootstrap sample uses ~63% of data. The remaining ~37% (out-of-bag samples) can serve
              as a free validation set. OOB error is a reliable estimate of generalization performance
              without needing separate cross-validation.
            </p>
          </CardContent>
        </Card>
      </>
    )
  },

  'ensemble-boosting': {
    title: 'Introduction to Boosting',
    estimatedTime: '14 min',
    difficulty: 'intermediate',
    content: (
      <>
        <p className="text-lg leading-relaxed mb-6">
          Boosting is an ensemble method where models are built <strong>sequentially</strong>, unlike bagging
          where they're built independently. Each new model is trained to correct the errors of its predecessors,
          reducing the overall <strong>bias</strong> of the composition.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">Bagging vs. Boosting</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
          <Card className="border-blue-500/20 bg-blue-500/5"><CardContent className="p-4">
            <h3 className="font-semibold mb-2 text-blue-600 dark:text-blue-400">Bagging / Random Forest</h3>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• Models trained <strong>independently</strong></li>
              <li>• Parallel training possible</li>
              <li>• Reduces <strong>variance</strong></li>
              <li>• Uses deep trees (low bias)</li>
              <li>• Very robust, hard to overfit</li>
            </ul>
          </CardContent></Card>
          <Card className="border-orange-500/20 bg-orange-500/5"><CardContent className="p-4">
            <h3 className="font-semibold mb-2 text-orange-600 dark:text-orange-400">Boosting</h3>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• Models trained <strong>sequentially</strong></li>
              <li>• Must train one at a time</li>
              <li>• Reduces <strong>bias</strong> (and some variance)</li>
              <li>• Uses shallow trees (high bias, low variance)</li>
              <li>• Can overfit if not regularized</li>
            </ul>
          </CardContent></Card>
        </div>

        <h2 className="text-2xl font-bold mt-8 mb-4">Why Weak Learners?</h2>
        <p className="leading-relaxed mb-4">
          Since boosting's main goal is bias reduction, we use <strong>weak learners</strong> as base models —
          models with high bias but low variance. For decision trees, this means <strong>shallow trees
          (depth 2–3)</strong>. These are fast to train, which is critical since they must be trained sequentially.
        </p>

        <Card className="my-6 bg-accent/50 border-accent">
          <CardContent className="p-6">
            <h3 className="font-semibold mb-2">💡 Key Insight</h3>
            <p className="text-sm text-muted-foreground">
              Although Random Forest is powerful and easy to use, in practice <strong>Gradient Boosting
              almost always outperforms it</strong> on tabular data when properly tuned. This is why GBDT
              is the de facto standard for production ML with structured data.
            </p>
          </CardContent>
        </Card>

        <h2 className="text-2xl font-bold mt-8 mb-4">Historical Context</h2>
        <div className="space-y-3 my-6">
          <Card><CardContent className="p-4">
            <h3 className="font-semibold mb-1">AdaBoost (1997)</h3>
            <p className="text-sm text-muted-foreground">
              First practical boosting algorithm. Reweights training samples, giving more weight to
              misclassified examples. Limited to binary classification with exponential loss.
            </p>
          </CardContent></Card>
          <Card><CardContent className="p-4">
            <h3 className="font-semibold mb-1">Gradient Boosting (1999)</h3>
            <p className="text-sm text-muted-foreground">
              Generalized boosting using gradient descent in function space. Each new tree fits the
              negative gradient (pseudo-residuals) of the loss function. Works with any differentiable loss.
            </p>
          </CardContent></Card>
          <Card><CardContent className="p-4">
            <h3 className="font-semibold mb-1">XGBoost / LightGBM / CatBoost (2014–2017)</h3>
            <p className="text-sm text-muted-foreground">
              Modern optimized implementations with regularization, parallel tree building, GPU support,
              and smart splitting strategies. The workhorses of production ML today.
            </p>
          </CardContent></Card>
        </div>
      </>
    )
  },

  'stacking': {
    title: 'Stacking & Blending',
    estimatedTime: '12 min',
    difficulty: 'advanced',
    content: (
      <>
        <p className="text-lg leading-relaxed mb-6">
          Stacking is an ensemble method that combines <strong>different types</strong> of models using
          a learned meta-model. Unlike bagging (which averages identical models) or boosting
          (which sequentially corrects errors), stacking leverages the diversity of heterogeneous algorithms.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">How Stacking Works</h2>
        <div className="space-y-3 my-6">
          <Card className="border-primary/20 bg-primary/5"><CardContent className="p-4">
            <h3 className="font-semibold mb-1">Step 1: Split the data</h3>
            <p className="text-sm text-muted-foreground">
              Divide the full dataset into training and test sets.
            </p>
          </CardContent></Card>
          <Card className="border-primary/20 bg-primary/5"><CardContent className="p-4">
            <h3 className="font-semibold mb-1">Step 2: K-fold cross-validation for base models</h3>
            <p className="text-sm text-muted-foreground">
              Split training data into K folds. For each fold, train all base models (e.g., KNN, SVM, Random Forest)
              on the other K-1 folds and generate predictions on the held-out fold.
              This prevents base models from overfitting when producing meta-features.
            </p>
          </CardContent></Card>
          <Card className="border-primary/20 bg-primary/5"><CardContent className="p-4">
            <h3 className="font-semibold mb-1">Step 3: Train the meta-model</h3>
            <p className="text-sm text-muted-foreground">
              Use the out-of-fold predictions (meta-features) as input to train a meta-model
              (often a simple linear model or another tree-based model).
            </p>
          </CardContent></Card>
          <Card className="border-primary/20 bg-primary/5"><CardContent className="p-4">
            <h3 className="font-semibold mb-1">Step 4: Predict on test data</h3>
            <p className="text-sm text-muted-foreground">
              Retrain base models on full training data, get their predictions on the test set,
              and feed these to the meta-model for the final prediction.
            </p>
          </CardContent></Card>
        </div>

        <Card className="my-6 bg-accent/50 border-accent">
          <CardContent className="p-6">
            <h3 className="font-semibold mb-2">Why Cross-Validation?</h3>
            <p className="text-sm text-muted-foreground">
              If we trained base models on the full training set and then used their predictions on the
              same set as meta-features, the meta-model would learn from overfitted predictions.
              K-fold CV ensures the meta-features come from predictions on unseen data.
            </p>
          </CardContent>
        </Card>

        <h2 className="text-2xl font-bold mt-8 mb-4">Blending: A Simpler Alternative</h2>
        <p className="leading-relaxed mb-4">
          If you have a lot of data, you can skip K-fold CV and simply split the training data into
          two parts: one for training base models, one for generating meta-features.
          This simpler approach is called <strong>blending</strong>.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
          <Card className="border-blue-500/20 bg-blue-500/5"><CardContent className="p-4">
            <h3 className="font-semibold mb-1">Stacking (K-fold CV)</h3>
            <p className="text-xs text-muted-foreground">
              More data-efficient. Better for smaller datasets. More complex to implement.
            </p>
          </CardContent></Card>
          <Card className="border-orange-500/20 bg-orange-500/5"><CardContent className="p-4">
            <h3 className="font-semibold mb-1">Blending (Simple Split)</h3>
            <p className="text-xs text-muted-foreground">
              Simpler to implement. No information leakage between levels. Needs more data.
            </p>
          </CardContent></Card>
        </div>

        <Card className="my-6 border-purple-500/20 bg-purple-500/5">
          <CardHeader><CardTitle className="text-lg">⚡ Practical Tips</CardTitle></CardHeader>
          <CardContent>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>• Use diverse base models (linear + tree + KNN + neural net) for maximum benefit</p>
              <p>• A simple meta-model (linear regression, logistic regression) often works best</p>
              <p>• Stacking dominates Kaggle competitions — top solutions almost always use it</p>
              <p>• In production, stacking adds complexity. Only use it if the accuracy gain justifies the engineering cost</p>
            </div>
          </CardContent>
        </Card>
      </>
    )
  }
}
