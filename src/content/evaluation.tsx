import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Article } from './types'

export const evaluationArticles: Record<string, Article> = {
  metrics: {
    title: 'Classification & Regression Metrics',
    estimatedTime: '22 min',
    difficulty: 'intermediate',
    content: (
      <>
        <p className="text-lg leading-relaxed mb-6">
          How do you measure model quality? A <strong>metric</strong> is a quantitative criterion that formally
          assesses how well a model solves its task. The right metric depends on the problem, the costs of
          different errors, and your business objectives.
        </p>

        <div className="my-6 p-4 rounded-lg border border-blue-500/20 bg-blue-500/5">
          <p className="text-sm font-medium mb-2">Loss Function ≠ Metric</p>
          <p className="text-sm text-muted-foreground">
            A <strong>loss function</strong> must be differentiable (for optimization). A <strong>metric</strong>
            is an external, objective criterion — it depends on predicted labels, not model parameters.
            Example: cross-entropy is the loss, accuracy is the metric. They can coincide (MSE as both loss and metric)
            but often differ.
          </p>
        </div>

        <h2 className="text-2xl font-bold mt-8 mb-4">Binary Classification: Confusion Matrix</h2>
        <p className="leading-relaxed mb-4">
          Every prediction on a binary classification task falls into one of four categories:
        </p>
        <Card className="my-6 border-primary/20 bg-primary/5">
          <CardContent className="p-6">
            <div className="grid grid-cols-3 gap-1 text-xs max-w-[340px] mx-auto">
              <div className="p-2" />
              <div className="p-2 text-center font-bold">Pred +</div>
              <div className="p-2 text-center font-bold">Pred −</div>
              <div className="p-2 text-right font-bold">Actual +</div>
              <div className="p-2 bg-green-100 dark:bg-green-900/30 text-center rounded font-medium">TP ✓</div>
              <div className="p-2 bg-red-100 dark:bg-red-900/30 text-center rounded font-medium">FN ✗</div>
              <div className="p-2 text-right font-bold">Actual −</div>
              <div className="p-2 bg-red-100 dark:bg-red-900/30 text-center rounded font-medium">FP ✗</div>
              <div className="p-2 bg-green-100 dark:bg-green-900/30 text-center rounded font-medium">TN ✓</div>
            </div>
            <p className="text-xs text-muted-foreground mt-3 text-center">
              TP=True Positive, FP=False Positive, FN=False Negative, TN=True Negative
            </p>
          </CardContent>
        </Card>

        <h2 className="text-2xl font-bold mt-8 mb-4">Core Classification Metrics</h2>
        <div className="space-y-4 my-6">
          <Card><CardContent className="p-4">
            <h3 className="font-semibold mb-2">Accuracy</h3>
            <p className="font-mono text-xs bg-muted px-2 py-1 rounded inline-block mb-2">
              Acc = (TP + TN) / (TP + TN + FP + FN)
            </p>
            <p className="text-sm text-muted-foreground">
              Fraction of correct predictions. Simple but misleading with class imbalance — a classifier
              that always predicts "healthy" achieves 99% accuracy on a dataset with 1% disease rate.
            </p>
          </CardContent></Card>

          <Card><CardContent className="p-4">
            <h3 className="font-semibold mb-2">Precision</h3>
            <p className="font-mono text-xs bg-muted px-2 py-1 rounded inline-block mb-2">
              Precision = TP / (TP + FP)
            </p>
            <p className="text-sm text-muted-foreground">
              Of all predicted positives, how many were actually positive? Critical when false positives
              are costly (e.g., spam filter — don't send legitimate emails to spam).
            </p>
          </CardContent></Card>

          <Card><CardContent className="p-4">
            <h3 className="font-semibold mb-2">Recall (Sensitivity / True Positive Rate)</h3>
            <p className="font-mono text-xs bg-muted px-2 py-1 rounded inline-block mb-2">
              Recall = TP / (TP + FN)
            </p>
            <p className="text-sm text-muted-foreground">
              Of all actual positives, how many did we find? Critical when missing positives is dangerous
              (e.g., cancer screening — don't miss any malignant tumors).
            </p>
          </CardContent></Card>

          <Card><CardContent className="p-4">
            <h3 className="font-semibold mb-2">F1-Score</h3>
            <p className="font-mono text-xs bg-muted px-2 py-1 rounded inline-block mb-2">
              F1 = 2 × (Precision × Recall) / (Precision + Recall)
            </p>
            <p className="text-sm text-muted-foreground">
              Harmonic mean of precision and recall. Penalizes extreme imbalances between them.
              Use when you need a single number balancing both concerns.
            </p>
          </CardContent></Card>
        </div>

        <Card className="my-6 bg-accent/50 border-accent">
          <CardContent className="p-6">
            <h3 className="font-semibold mb-2">The Precision-Recall Tradeoff</h3>
            <p className="text-sm text-muted-foreground">
              By adjusting the classification threshold, you can increase precision at the cost of recall
              (or vice versa). The precision-recall curve visualizes this tradeoff. The area under this curve
              (AUPRC) is especially useful for imbalanced datasets.
            </p>
          </CardContent>
        </Card>

        <h2 className="text-2xl font-bold mt-8 mb-4">ROC Curve & AUC</h2>
        <p className="leading-relaxed mb-4">
          The <strong>ROC curve</strong> plots the True Positive Rate (Recall) against the False Positive Rate
          at every possible threshold. The <strong>AUC</strong> (Area Under the Curve) summarizes the entire curve:
        </p>
        <div className="grid grid-cols-3 gap-3 my-6">
          <Card className="border-green-500/20 bg-green-500/5"><CardContent className="p-3 text-center">
            <p className="text-2xl font-bold text-green-600 dark:text-green-400">1.0</p>
            <p className="text-xs text-muted-foreground">Perfect classifier</p>
          </CardContent></Card>
          <Card className="border-yellow-500/20 bg-yellow-500/5"><CardContent className="p-3 text-center">
            <p className="text-2xl font-bold text-yellow-600 dark:text-yellow-400">0.7–0.9</p>
            <p className="text-xs text-muted-foreground">Good classifier</p>
          </CardContent></Card>
          <Card className="border-red-500/20 bg-red-500/5"><CardContent className="p-3 text-center">
            <p className="text-2xl font-bold text-red-600 dark:text-red-400">0.5</p>
            <p className="text-xs text-muted-foreground">Random guessing</p>
          </CardContent></Card>
        </div>

        <h2 className="text-2xl font-bold mt-8 mb-4">Regression Metrics</h2>
        <div className="space-y-3 my-6">
          <Card><CardContent className="p-4">
            <h3 className="font-semibold mb-1">MSE (Mean Squared Error)</h3>
            <p className="font-mono text-xs bg-muted px-2 py-1 rounded inline-block mb-1">MSE = (1/n) Σ(ŷᵢ − yᵢ)²</p>
            <p className="text-xs text-muted-foreground">Penalizes large errors quadratically. Differentiable. Sensitive to outliers.</p>
          </CardContent></Card>
          <Card><CardContent className="p-4">
            <h3 className="font-semibold mb-1">RMSE (Root Mean Squared Error)</h3>
            <p className="font-mono text-xs bg-muted px-2 py-1 rounded inline-block mb-1">RMSE = √MSE</p>
            <p className="text-xs text-muted-foreground">Same units as the target. Easier to interpret than MSE.</p>
          </CardContent></Card>
          <Card><CardContent className="p-4">
            <h3 className="font-semibold mb-1">MAE (Mean Absolute Error)</h3>
            <p className="font-mono text-xs bg-muted px-2 py-1 rounded inline-block mb-1">MAE = (1/n) Σ|ŷᵢ − yᵢ|</p>
            <p className="text-xs text-muted-foreground">Robust to outliers. Less sensitive to large individual errors.</p>
          </CardContent></Card>
          <Card><CardContent className="p-4">
            <h3 className="font-semibold mb-1">R² (Coefficient of Determination)</h3>
            <p className="font-mono text-xs bg-muted px-2 py-1 rounded inline-block mb-1">R² = 1 − (SS_res / SS_tot)</p>
            <p className="text-xs text-muted-foreground">Proportion of variance explained. 1.0 = perfect, 0.0 = no better than mean. Can be negative.</p>
          </CardContent></Card>
        </div>

        <Card className="my-6 border-purple-500/20 bg-purple-500/5">
          <CardHeader><CardTitle className="text-lg">Choosing the Right Metric</CardTitle></CardHeader>
          <CardContent>
            <div className="grid gap-2 text-sm text-muted-foreground">
              <p>• <strong>Spam detection:</strong> High precision (don't lose legitimate emails)</p>
              <p>• <strong>Cancer screening:</strong> High recall (don't miss any cases)</p>
              <p>• <strong>Fraud detection:</strong> F1-score (balance both concerns)</p>
              <p>• <strong>House prices:</strong> MAE or RMSE (interpretable in dollars)</p>
              <p>• <strong>Imbalanced classification:</strong> AUPRC or balanced accuracy, not plain accuracy</p>
            </div>
          </CardContent>
        </Card>
      </>
    )
  },

  validation: {
    title: 'Cross-Validation & Data Splitting',
    estimatedTime: '18 min',
    difficulty: 'intermediate',
    content: (
      <>
        <p className="text-lg leading-relaxed mb-6">
          Cross-validation is the standard procedure for reliably estimating model quality.
          It helps compare models, detect overfitting, and ensure your evaluation is robust
          and not dependent on a lucky or unlucky data split.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">Hold-Out Split</h2>
        <p className="leading-relaxed mb-4">
          The simplest approach: split data into <strong>train</strong> and <strong>test</strong> sets.
          Train on one, evaluate on the other. But a single split can be noisy.
        </p>

        <Card className="my-6 bg-accent/50 border-accent">
          <CardContent className="p-6">
            <h3 className="font-semibold mb-2">Always Add a Validation Set!</h3>
            <p className="text-sm text-muted-foreground">
              If you tune hyperparameters on the test set, you're leaking test information into the model.
              Split into <strong>train → validation → test</strong>: tune on validation, final comparison on test.
            </p>
            <div className="flex items-center gap-2 mt-3 text-xs">
              <div className="flex-1 p-2 bg-blue-100 dark:bg-blue-900/30 rounded text-center">Train (60-70%)</div>
              <span>→</span>
              <div className="flex-1 p-2 bg-orange-100 dark:bg-orange-900/30 rounded text-center">Validation (10-20%)</div>
              <span>→</span>
              <div className="flex-1 p-2 bg-green-100 dark:bg-green-900/30 rounded text-center">Test (10-20%)</div>
            </div>
          </CardContent>
        </Card>

        <h3 className="text-xl font-bold mt-6 mb-3">Why Shuffling Matters</h3>
        <p className="leading-relaxed mb-4">
          If data has any ordering (e.g., sorted by class or by time), a naive split without shuffling
          can create train/test sets with completely different distributions. For gradient-based models,
          unshuffled data produces periodic training loss spikes as the model re-encounters batch boundaries.
        </p>

        <h3 className="text-xl font-bold mt-6 mb-3">Stratification</h3>
        <p className="leading-relaxed mb-4">
          <strong>Stratified splitting</strong> preserves the class distribution in both train and test.
          Critical for imbalanced datasets — a random split might put all rare-class examples in one set.
          In sklearn: <code className="bg-muted px-1 rounded">train_test_split(X, y, stratify=y)</code>.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">k-Fold Cross-Validation</h2>
        <p className="leading-relaxed mb-4">
          The gold standard for model evaluation. Split data into k folds (typically 5 or 10):
        </p>
        <div className="space-y-2 my-6">
          <Card><CardContent className="p-3">
            <p className="text-sm"><strong>Step 1:</strong> Divide data into k equal-sized folds</p>
          </CardContent></Card>
          <Card><CardContent className="p-3">
            <p className="text-sm"><strong>Step 2:</strong> For each fold i: train on the other k−1 folds, evaluate on fold i</p>
          </CardContent></Card>
          <Card><CardContent className="p-3">
            <p className="text-sm"><strong>Step 3:</strong> Average the k scores for the final estimate</p>
          </CardContent></Card>
        </div>

        <Card className="my-6 border-primary/20 bg-primary/5">
          <CardContent className="p-6">
            <h3 className="font-semibold mb-2">Visual: 5-Fold Cross-Validation</h3>
            <div className="space-y-1 text-xs font-mono">
              <div className="flex gap-1">
                <div className="flex-[4] p-1 bg-blue-200 dark:bg-blue-800 rounded text-center">Train</div>
                <div className="flex-1 p-1 bg-orange-200 dark:bg-orange-800 rounded text-center">Test</div>
              </div>
              <div className="flex gap-1">
                <div className="flex-[3] p-1 bg-blue-200 dark:bg-blue-800 rounded text-center">Train</div>
                <div className="flex-1 p-1 bg-orange-200 dark:bg-orange-800 rounded text-center">Test</div>
                <div className="flex-1 p-1 bg-blue-200 dark:bg-blue-800 rounded text-center">Train</div>
              </div>
              <div className="flex gap-1">
                <div className="flex-[2] p-1 bg-blue-200 dark:bg-blue-800 rounded text-center">Train</div>
                <div className="flex-1 p-1 bg-orange-200 dark:bg-orange-800 rounded text-center">Test</div>
                <div className="flex-[2] p-1 bg-blue-200 dark:bg-blue-800 rounded text-center">Train</div>
              </div>
              <div className="flex gap-1">
                <div className="flex-1 p-1 bg-blue-200 dark:bg-blue-800 rounded text-center">Train</div>
                <div className="flex-1 p-1 bg-orange-200 dark:bg-orange-800 rounded text-center">Test</div>
                <div className="flex-[3] p-1 bg-blue-200 dark:bg-blue-800 rounded text-center">Train</div>
              </div>
              <div className="flex gap-1">
                <div className="flex-1 p-1 bg-orange-200 dark:bg-orange-800 rounded text-center">Test</div>
                <div className="flex-[4] p-1 bg-blue-200 dark:bg-blue-800 rounded text-center">Train</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <h2 className="text-2xl font-bold mt-8 mb-4">Variants</h2>
        <div className="grid gap-4 my-6">
          <Card><CardContent className="p-4">
            <h3 className="font-semibold mb-2">Stratified k-Fold</h3>
            <p className="text-sm text-muted-foreground">
              Preserves class proportions in each fold. Essential for classification with imbalanced data.
            </p>
          </CardContent></Card>
          <Card><CardContent className="p-4">
            <h3 className="font-semibold mb-2">Leave-One-Out (LOO)</h3>
            <p className="text-sm text-muted-foreground">
              k = n (each sample is its own test fold). Nearly unbiased but very expensive. Useful only for tiny datasets.
            </p>
          </CardContent></Card>
          <Card><CardContent className="p-4">
            <h3 className="font-semibold mb-2">Group k-Fold</h3>
            <p className="text-sm text-muted-foreground">
              Ensures that all samples from the same group (e.g., patient, time period) stay in the same fold.
              Prevents data leakage when samples are correlated.
            </p>
          </CardContent></Card>
          <Card><CardContent className="p-4">
            <h3 className="font-semibold mb-2">Time Series Split</h3>
            <p className="text-sm text-muted-foreground">
              Respects temporal ordering: train on past, test on future. Never use random splits on time-dependent data.
            </p>
          </CardContent></Card>
        </div>

        <div className="my-6 p-4 rounded-lg border border-red-500/20 bg-red-500/5">
          <p className="text-sm font-medium mb-2">Data Leakage Warning</p>
          <p className="text-sm text-muted-foreground">
            <strong>Never</strong> tune hyperparameters on the test set. Each time you evaluate on test,
            you leak test information into model selection. The test set must be touched only once —
            for the final, honest evaluation.
          </p>
        </div>

        <Card className="my-6 border-purple-500/20 bg-purple-500/5">
          <CardHeader><CardTitle className="text-lg">Practical Guide</CardTitle></CardHeader>
          <CardContent>
            <div className="grid gap-2 text-sm text-muted-foreground">
              <p>• <strong>Large dataset ({'>'}100k):</strong> Single train/val/test split is sufficient</p>
              <p>• <strong>Medium dataset (1k–100k):</strong> 5-fold or 10-fold CV</p>
              <p>• <strong>Small dataset ({'<'}1k):</strong> LOO or repeated k-fold</p>
              <p>• <strong>Time series:</strong> Expanding window or sliding window CV</p>
              <p>• <strong>Imbalanced:</strong> Stratified k-fold, always</p>
            </div>
          </CardContent>
        </Card>
      </>
    )
  },

  'hyperparameter-tuning': {
    title: 'Hyperparameter Tuning',
    estimatedTime: '20 min',
    difficulty: 'advanced',
    content: (
      <>
        <p className="text-lg leading-relaxed mb-6">
          Model parameters are learned from data (weights, tree splits). <strong>Hyperparameters</strong>
          are set before training: tree depth, learning rate, regularization strength, number of neighbors.
          Choosing good hyperparameters is critical — and there are smart ways to do it.
        </p>

        <Card className="my-6 bg-accent/50 border-accent">
          <CardContent className="p-6">
            <h3 className="font-semibold mb-2">The Setup</h3>
            <p className="text-sm text-muted-foreground mb-2">
              Split data into train/validation/test. For each hyperparameter combination: train on train,
              evaluate on validation. After selecting the best combination, do final evaluation on test.
            </p>
            <div className="flex items-center gap-2 text-xs mt-2">
              <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded">Train: learn parameters</div>
              <div className="p-2 bg-orange-100 dark:bg-orange-900/30 rounded">Val: select hyperparams</div>
              <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded">Test: final evaluation</div>
            </div>
          </CardContent>
        </Card>

        <h2 className="text-2xl font-bold mt-8 mb-4">Grid Search</h2>
        <p className="leading-relaxed mb-4">
          Define a set of values for each hyperparameter, then try <strong>every combination</strong>.
          Simple, exhaustive, and trivially parallelizable.
        </p>
        <div className="my-6 p-4 rounded-lg border border-blue-500/20 bg-blue-500/5">
          <p className="text-sm font-medium mb-1">Example: Tuning a Decision Tree</p>
          <p className="text-xs text-muted-foreground">
            max_depth: {'{'}3, 5, 7, 10{'}'} × criterion: {'{'}gini, entropy{'}'} × min_samples_leaf: {'{'}1, 5, 10{'}'}
            = 4 × 2 × 3 = <strong>24 combinations</strong>
          </p>
        </div>
        <p className="leading-relaxed mb-4">
          <strong>Limitation:</strong> If the grid is large or training is slow, exhaustive search becomes
          prohibitively expensive. Use <strong>log-scale</strong> grids for parameters like learning rate
          (e.g., 0.001, 0.01, 0.1, 1.0).
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">Random Search</h2>
        <p className="leading-relaxed mb-4">
          Instead of trying every combination, sample randomly from defined distributions for each
          hyperparameter. Surprisingly effective:
        </p>
        <Card className="my-6 border-primary/20 bg-primary/5">
          <CardContent className="p-6">
            <h3 className="font-semibold mb-2">Why Random Search Works Well</h3>
            <p className="text-sm text-muted-foreground">
              If you define the "best 5%" of hyperparameter space, random search finds at least one point
              in this region with probability 1 − 0.95<sup>n</sup>. With just <strong>60 iterations</strong>,
              you hit the top-5% with probability {'>'}95% — far fewer than exhaustive grid search.
            </p>
          </CardContent>
        </Card>

        <h2 className="text-2xl font-bold mt-8 mb-4">Bayesian Optimization</h2>
        <p className="leading-relaxed mb-4">
          Uses results from previous iterations to decide where to search next. Two components:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
          <Card className="border-blue-500/20 bg-blue-500/5"><CardContent className="p-4">
            <h3 className="font-semibold mb-2">Surrogate Model</h3>
            <p className="text-sm text-muted-foreground">
              A probabilistic model (usually Gaussian Process) that approximates the validation metric
              as a function of hyperparameters. Provides both mean prediction and uncertainty.
            </p>
          </CardContent></Card>
          <Card className="border-orange-500/20 bg-orange-500/5"><CardContent className="p-4">
            <h3 className="font-semibold mb-2">Acquisition Function</h3>
            <p className="text-sm text-muted-foreground">
              Balances <strong>exploration</strong> (high uncertainty regions) vs.
              <strong> exploitation</strong> (high predicted performance). Maximizing it selects the
              next point to evaluate.
            </p>
          </CardContent></Card>
        </div>

        <Card className="my-6 bg-accent/50 border-accent">
          <CardContent className="p-6">
            <h3 className="font-semibold mb-2">The Bayesian Optimization Loop</h3>
            <ol className="text-sm text-muted-foreground space-y-1 list-decimal list-inside">
              <li>Fit surrogate model to observed (hyperparameters, score) pairs</li>
              <li>Maximize acquisition function to find next hyperparameters to try</li>
              <li>Train model with these hyperparameters, evaluate on validation</li>
              <li>Add result to observations, go to step 1</li>
            </ol>
          </CardContent>
        </Card>

        <h2 className="text-2xl font-bold mt-8 mb-4">TPE (Tree-structured Parzen Estimator)</h2>
        <p className="leading-relaxed mb-4">
          Used by the popular <strong>Hyperopt</strong> and <strong>Optuna</strong> libraries. After a warmup
          phase (random search), TPE splits observed configurations into "good" (top 10-25%) and "bad" groups,
          fits density estimators to each, and samples new candidates that maximize the ratio l(x)/g(x) —
          favoring hyperparameters that look like previous winners.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">Comparison</h2>
        <div className="overflow-x-auto my-6">
          <table className="w-full text-sm border-collapse">
            <thead><tr className="border-b bg-muted/50">
              <th className="p-2 text-left">Method</th>
              <th className="p-2 text-left">Uses History?</th>
              <th className="p-2 text-left">Parallel?</th>
              <th className="p-2 text-left">Best For</th>
            </tr></thead>
            <tbody>
              <tr className="border-b"><td className="p-2 font-medium">Grid Search</td><td className="p-2 text-muted-foreground">No</td><td className="p-2 text-muted-foreground">Yes</td><td className="p-2 text-muted-foreground">Few params, parallel compute</td></tr>
              <tr className="border-b"><td className="p-2 font-medium">Random Search</td><td className="p-2 text-muted-foreground">No</td><td className="p-2 text-muted-foreground">Yes</td><td className="p-2 text-muted-foreground">Many params, quick baseline</td></tr>
              <tr className="border-b"><td className="p-2 font-medium">Bayesian Opt.</td><td className="p-2 text-muted-foreground">Yes</td><td className="p-2 text-muted-foreground">Limited</td><td className="p-2 text-muted-foreground">Expensive evaluations, few params</td></tr>
              <tr className="border-b"><td className="p-2 font-medium">TPE</td><td className="p-2 text-muted-foreground">Yes</td><td className="p-2 text-muted-foreground">Limited</td><td className="p-2 text-muted-foreground">Mixed param types, tree-structured</td></tr>
            </tbody>
          </table>
        </div>

        <Card className="my-6 border-purple-500/20 bg-purple-500/5">
          <CardHeader><CardTitle className="text-lg">Libraries</CardTitle></CardHeader>
          <CardContent>
            <div className="grid gap-2 text-sm text-muted-foreground">
              <p>• <strong>scikit-learn:</strong> GridSearchCV, RandomizedSearchCV</p>
              <p>• <strong>Optuna:</strong> TPE, random search, pruning — most modern choice</p>
              <p>• <strong>Hyperopt:</strong> TPE with tree-structured search spaces</p>
              <p>• <strong>Scikit-Optimize:</strong> Bayesian optimization with Gaussian processes</p>
            </div>
          </CardContent>
        </Card>
      </>
    )
  },

  overfitting: {
    title: 'Overfitting & Underfitting',
    estimatedTime: '12 min',
    difficulty: 'beginner',
    content: (
      <>
        <p className="text-lg leading-relaxed mb-6">
          Overfitting occurs when a model memorizes training data instead of learning general patterns.
          Underfitting occurs when a model is too simple to capture the underlying relationship.
          The goal is to find the sweet spot between them.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">Diagnosing the Problem</h2>
        <div className="grid gap-4 my-6">
          <Card className="border-red-500/20 bg-red-500/5"><CardContent className="p-4">
            <h3 className="font-semibold mb-2">Overfitting (High Variance)</h3>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• Excellent training performance, poor validation/test performance</li>
              <li>• Large gap between train and validation loss</li>
              <li>• Causes: model too complex, too few data points, insufficient regularization</li>
            </ul>
          </CardContent></Card>
          <Card className="border-orange-500/20 bg-orange-500/5"><CardContent className="p-4">
            <h3 className="font-semibold mb-2">Underfitting (High Bias)</h3>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• Poor performance on both training and test data</li>
              <li>• Training loss plateaus at a high value</li>
              <li>• Causes: model too simple, features not informative, too much regularization</li>
            </ul>
          </CardContent></Card>
        </div>

        <h2 className="text-2xl font-bold mt-8 mb-4">Learning Curves</h2>
        <p className="leading-relaxed mb-4">
          Plot training and validation error as a function of training set size (or epochs).
          Learning curves are the most diagnostic tool for identifying overfitting vs underfitting.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">Solutions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
          <Card><CardContent className="p-4">
            <h3 className="font-semibold mb-2">Fight Overfitting</h3>
            <ul className="text-xs text-muted-foreground space-y-1">
              <li>• Add more training data</li>
              <li>• Simplify the model (fewer params, shallower trees)</li>
              <li>• Add regularization (L1, L2, dropout)</li>
              <li>• Use cross-validation</li>
              <li>• Feature selection / dimensionality reduction</li>
              <li>• Early stopping</li>
            </ul>
          </CardContent></Card>
          <Card><CardContent className="p-4">
            <h3 className="font-semibold mb-2">Fight Underfitting</h3>
            <ul className="text-xs text-muted-foreground space-y-1">
              <li>• Use a more complex model</li>
              <li>• Add more informative features</li>
              <li>• Reduce regularization strength</li>
              <li>• Train longer (more epochs/iterations)</li>
              <li>• Feature engineering / interactions</li>
            </ul>
          </CardContent></Card>
        </div>

        <Card className="my-6 bg-accent/50 border-accent">
          <CardContent className="p-6">
            <h3 className="font-semibold mb-2">The Bias-Variance Tradeoff</h3>
            <p className="text-sm text-muted-foreground">
              As model complexity increases, bias decreases (model fits training data better) but
              variance increases (model becomes more sensitive to specific training samples).
              The optimal complexity minimizes total error = bias² + variance + noise.
              Ensemble methods (Chapter 2.5) are designed to break this tradeoff.
            </p>
          </CardContent>
        </Card>
      </>
    )
  }
}
