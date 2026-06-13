import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Article } from './types'

export const supervisedLearningArticles: Record<string, Article> = {
  'supervised-intro': {
    title: 'Introduction to Supervised Learning',
    estimatedTime: '12 min',
    difficulty: 'beginner',
    content: (
      <>
        <p className="text-lg leading-relaxed mb-6">
          Supervised learning is a branch of machine learning where an algorithm learns from labeled training data.
          Each object in the training set has a known target value, and the goal is to learn a function that
          maps inputs to outputs accurately for new, unseen examples.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">Formal Setting</h2>
        <p className="leading-relaxed mb-4">
          In supervised learning, every training object <strong>x</strong><sub>i</sub> from the training set X is paired with
          a known target value <strong>y</strong><sub>i</sub> from the target space Y. The main task is to learn an algorithm
          <em> a: X → Y </em> that predicts the target variable for new objects.
        </p>

        <Card className="my-6 bg-accent/50 border-accent">
          <CardContent className="p-6">
            <h3 className="font-semibold mb-2">Two Core Problems</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <p className="font-medium text-primary mb-1">Classification</p>
                <p className="text-muted-foreground">
                  The target variable Y is a finite set of classes. The goal is to assign each object to one of
                  the predefined categories. Example: spam vs. not-spam email detection.
                </p>
              </div>
              <div>
                <p className="font-medium text-primary mb-1">Regression</p>
                <p className="text-muted-foreground">
                  The target variable Y is a continuous space (typically ℝ). The goal is to predict a numerical
                  value. Example: predicting house prices from features like size, location, and age.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <h2 className="text-2xl font-bold mt-8 mb-4">Learning Paradigm</h2>
        <p className="leading-relaxed mb-4">
          The algorithm is presented with a <strong>training set</strong> — a collection of input-output pairs. It then
          searches through a family of possible models (the <em>hypothesis space</em>) to find the one that best
          approximates the true relationship between inputs and outputs. Quality is measured using a
          <em> loss function</em> that penalizes incorrect predictions.
        </p>

        <div className="my-6 p-4 rounded-lg border border-blue-500/20 bg-blue-500/5">
          <p className="text-sm font-medium mb-2">🎯 Key Insight</p>
          <p className="text-sm text-muted-foreground">
            The goal is not to memorize training data but to <strong>generalize</strong> — to perform well on
            new, previously unseen examples. This is why we always evaluate on a separate test set.
          </p>
        </div>

        <h2 className="text-2xl font-bold mt-8 mb-4">Chapter Overview</h2>
        <div className="grid gap-3 my-6">
          <Card><CardContent className="p-4">
            <h3 className="font-semibold mb-1">§2.2 Linear Models</h3>
            <p className="text-sm text-muted-foreground">Linear & logistic regression, SVM, regularization — the foundation of ML.</p>
          </CardContent></Card>
          <Card><CardContent className="p-4">
            <h3 className="font-semibold mb-1">§2.3 Metric Methods (KNN)</h3>
            <p className="text-sm text-muted-foreground">Instance-based learning where predictions come from the closest training examples.</p>
          </CardContent></Card>
          <Card><CardContent className="p-4">
            <h3 className="font-semibold mb-1">§2.4 Decision Trees</h3>
            <p className="text-sm text-muted-foreground">Hierarchical models that split data using simple yes/no questions.</p>
          </CardContent></Card>
          <Card><CardContent className="p-4">
            <h3 className="font-semibold mb-1">§2.5 Ensembles</h3>
            <p className="text-sm text-muted-foreground">Combining models via bagging, random forests, and stacking for better accuracy.</p>
          </CardContent></Card>
          <Card><CardContent className="p-4">
            <h3 className="font-semibold mb-1">§2.6 Gradient Boosting</h3>
            <p className="text-sm text-muted-foreground">The state-of-the-art method for tabular data: GBDT, XGBoost, LightGBM, CatBoost.</p>
          </CardContent></Card>
        </div>
      </>
    )
  },

  'linear-models': {
    title: 'Linear Models',
    estimatedTime: '22 min',
    difficulty: 'beginner',
    content: (
      <>
        <p className="text-lg leading-relaxed mb-6">
          Linear models are the cornerstone of machine learning. They predict the target as a weighted sum
          of input features, making them both interpretable and computationally efficient. Despite their simplicity,
          they serve as powerful baselines and building blocks for more complex methods.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">Linear Regression</h2>
        <p className="leading-relaxed mb-4">
          In linear regression, the prediction is computed as a linear combination of features:
        </p>
        <Card className="my-6 border-primary/20 bg-primary/5">
          <CardContent className="p-6">
            <p className="text-center font-mono text-sm">
              ŷ = w<sub>0</sub> + w<sub>1</sub>x<sub>1</sub> + w<sub>2</sub>x<sub>2</sub> + ... + w<sub>d</sub>x<sub>d</sub> = w<sup>T</sup>x + w<sub>0</sub>
            </p>
          </CardContent>
        </Card>
        <p className="leading-relaxed mb-4">
          The weights <strong>w</strong> are learned by minimizing the <strong>Mean Squared Error (MSE)</strong>:
        </p>
        <Card className="my-6 border-primary/20 bg-primary/5">
          <CardContent className="p-6">
            <p className="text-center font-mono text-sm">
              MSE = (1/n) Σ<sub>i=1..n</sub> (ŷ<sub>i</sub> − y<sub>i</sub>)²
            </p>
          </CardContent>
        </Card>

        <h3 className="text-xl font-bold mt-6 mb-3">Analytical Solution</h3>
        <p className="leading-relaxed mb-4">
          The optimal weights can be found in closed form using the <strong>Normal Equation</strong>:
        </p>
        <Card className="my-6 border-primary/20 bg-primary/5">
          <CardContent className="p-6">
            <p className="text-center font-mono text-sm">w* = (X<sup>T</sup>X)<sup>−1</sup>X<sup>T</sup>y</p>
          </CardContent>
        </Card>
        <p className="leading-relaxed mb-4">
          This gives the exact solution but requires inverting a d×d matrix, which is O(d³). For large
          feature spaces, we use iterative methods like <strong>Gradient Descent (GD)</strong> or
          <strong> Stochastic Gradient Descent (SGD)</strong>.
        </p>

        <Card className="my-6 bg-accent/50 border-accent">
          <CardContent className="p-6">
            <h3 className="font-semibold mb-2">💡 Pro Tip: Feature Scaling</h3>
            <p className="text-sm text-muted-foreground">
              Always normalize or standardize features before fitting a linear model. Unscaled features
              cause the optimization landscape to be elongated, making gradient descent converge much slower.
              Use <code className="bg-muted px-1 rounded">StandardScaler</code> from sklearn for this.
            </p>
          </CardContent>
        </Card>

        <h2 className="text-2xl font-bold mt-8 mb-4">Regularization</h2>
        <p className="leading-relaxed mb-4">
          When features outnumber observations or features are correlated, the model overfits. Regularization
          adds a penalty term to the loss function to constrain the weights:
        </p>
        <div className="grid gap-4 my-6">
          <Card><CardContent className="p-4">
            <h3 className="font-semibold mb-2">L2 Regularization (Ridge)</h3>
            <p className="text-sm text-muted-foreground mb-2">
              Penalty: λ Σ w<sub>j</sub>². Shrinks all weights toward zero but rarely makes them exactly zero.
              Produces stable, well-conditioned solutions.
            </p>
            <p className="text-xs font-mono bg-muted px-2 py-1 rounded inline-block">Loss = MSE + λ · ‖w‖²</p>
          </CardContent></Card>
          <Card><CardContent className="p-4">
            <h3 className="font-semibold mb-2">L1 Regularization (Lasso)</h3>
            <p className="text-sm text-muted-foreground mb-2">
              Penalty: λ Σ |w<sub>j</sub>|. Produces sparse solutions — some weights become exactly zero.
              Acts as automatic feature selection.
            </p>
            <p className="text-xs font-mono bg-muted px-2 py-1 rounded inline-block">Loss = MSE + λ · ‖w‖<sub>1</sub></p>
          </CardContent></Card>
          <Card><CardContent className="p-4">
            <h3 className="font-semibold mb-2">Elastic Net</h3>
            <p className="text-sm text-muted-foreground mb-2">
              Combines L1 and L2 penalties with a mixing parameter α ∈ [0, 1]. Useful when features are
              correlated and you want both sparsity and stability.
            </p>
            <p className="text-xs font-mono bg-muted px-2 py-1 rounded inline-block">Loss = MSE + λ₁·‖w‖₁ + λ₂·‖w‖²</p>
          </CardContent></Card>
        </div>

        <h2 className="text-2xl font-bold mt-8 mb-4">Logistic Regression</h2>
        <p className="leading-relaxed mb-4">
          For binary classification (y ∈ {'{'}−1, +1{'}'}), we use the <strong>sigmoid function</strong> to map
          the linear score to a probability:
        </p>
        <Card className="my-6 border-primary/20 bg-primary/5">
          <CardContent className="p-6">
            <p className="text-center font-mono text-sm">
              P(y=+1 | x) = σ(w<sup>T</sup>x) = 1 / (1 + e<sup>−w<sup>T</sup>x</sup>)
            </p>
          </CardContent>
        </Card>
        <p className="leading-relaxed mb-4">
          The model is trained by minimizing the <strong>log-loss</strong> (cross-entropy), which is a convex function:
        </p>
        <Card className="my-6 border-primary/20 bg-primary/5">
          <CardContent className="p-6">
            <p className="text-center font-mono text-sm">
              L(w) = −(1/n) Σ<sub>i</sub> [ y<sub>i</sub> log(ŷ<sub>i</sub>) + (1−y<sub>i</sub>) log(1−ŷ<sub>i</sub>) ]
            </p>
          </CardContent>
        </Card>

        <Card className="my-6 bg-accent/50 border-accent">
          <CardContent className="p-6">
            <h3 className="font-semibold mb-2">⚠️ Common Misconception</h3>
            <p className="text-sm text-muted-foreground">
              Despite its name, logistic regression is a <strong>classification</strong> algorithm, not regression.
              It outputs probabilities that can be thresholded at 0.5 (or any value) for class assignment.
            </p>
          </CardContent>
        </Card>

        <h2 className="text-2xl font-bold mt-8 mb-4">Support Vector Machines (SVM)</h2>
        <p className="leading-relaxed mb-4">
          SVM finds the <strong>maximum-margin hyperplane</strong> — the decision boundary that maximizes the distance
          to the nearest training points (support vectors). This margin maximization acts as a form of
          regularization and leads to good generalization.
        </p>

        <div className="my-6 p-4 rounded-lg border border-green-500/20 bg-green-500/5">
          <p className="text-sm font-medium mb-2">📊 The Kernel Trick</p>
          <p className="text-sm text-muted-foreground">
            SVM can handle non-linear boundaries using the <strong>kernel trick</strong>: instead of explicitly
            mapping data to a higher-dimensional space, we replace the dot product x<sup>T</sup>x' with a
            kernel function K(x, x'). Common kernels: polynomial, RBF (Gaussian), sigmoid.
          </p>
        </div>

        <Card className="my-6 border-purple-500/20 bg-purple-500/5">
          <CardHeader><CardTitle className="text-lg">⚡ Quick Reference</CardTitle></CardHeader>
          <CardContent>
            <div className="grid gap-2 text-sm">
              <div className="flex items-start gap-2">
                <span className="font-mono text-xs bg-muted px-2 py-1 rounded">MSE</span>
                <span className="text-muted-foreground">Mean Squared Error — standard loss for regression</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="font-mono text-xs bg-muted px-2 py-1 rounded">SGD</span>
                <span className="text-muted-foreground">Stochastic Gradient Descent — iterative optimization</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="font-mono text-xs bg-muted px-2 py-1 rounded">Sigmoid</span>
                <span className="text-muted-foreground">σ(z) = 1/(1+e⁻ᶻ) — maps scores to probabilities</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="font-mono text-xs bg-muted px-2 py-1 rounded">Margin</span>
                <span className="text-muted-foreground">Distance between decision boundary and nearest point</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </>
    )
  },

  'metric-methods': {
    title: 'Metric Methods & KNN',
    estimatedTime: '16 min',
    difficulty: 'beginner',
    content: (
      <>
        <p className="text-lg leading-relaxed mb-6">
          Metric methods don't build an explicit model. Instead, they rely on a simple but powerful intuition:
          the properties of an object are determined by its neighbors. The most prominent algorithm in this
          family is the <strong>k-Nearest Neighbors (KNN)</strong> method.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">The KNN Algorithm</h2>
        <ol className="list-decimal list-inside space-y-2 mb-6">
          <li>Given a new object x, compute its distance to every object in the training set</li>
          <li>Select the k closest training objects (the k nearest neighbors)</li>
          <li>For <strong>classification</strong>: assign the majority class among the k neighbors</li>
          <li>For <strong>regression</strong>: predict the average (or weighted average) of the k neighbors' targets</li>
        </ol>

        <Card className="my-6 bg-accent/50 border-accent">
          <CardContent className="p-6">
            <h3 className="font-semibold mb-2">🎯 Key Insight</h3>
            <p className="text-sm text-muted-foreground">
              KNN is a <strong>lazy learner</strong> — it doesn't "train" in the traditional sense. All the
              "learning" happens at prediction time when it searches for neighbors. This means zero training
              cost but potentially high prediction cost.
            </p>
          </CardContent>
        </Card>

        <h2 className="text-2xl font-bold mt-8 mb-4">Distance Metrics</h2>
        <p className="leading-relaxed mb-4">
          The choice of distance function fundamentally affects KNN's behavior. The most common metrics are:
        </p>
        <div className="grid gap-4 my-6">
          <Card><CardContent className="p-4">
            <h3 className="font-semibold mb-2">Euclidean Distance (L2)</h3>
            <p className="text-sm text-muted-foreground mb-1">d(x, x') = √(Σ(x<sub>j</sub> − x'<sub>j</sub>)²)</p>
            <p className="text-xs text-muted-foreground">The "straight-line" distance. Most common default. Sensitive to outliers and feature scaling.</p>
          </CardContent></Card>
          <Card><CardContent className="p-4">
            <h3 className="font-semibold mb-2">Manhattan Distance (L1)</h3>
            <p className="text-sm text-muted-foreground mb-1">d(x, x') = Σ|x<sub>j</sub> − x'<sub>j</sub>|</p>
            <p className="text-xs text-muted-foreground">"City block" distance. More robust to outliers. Works well in high dimensions.</p>
          </CardContent></Card>
          <Card><CardContent className="p-4">
            <h3 className="font-semibold mb-2">Minkowski Distance (Lp)</h3>
            <p className="text-sm text-muted-foreground mb-1">d(x, x') = (Σ|x<sub>j</sub> − x'<sub>j</sub>|<sup>p</sup>)<sup>1/p</sup></p>
            <p className="text-xs text-muted-foreground">General form — p=1 gives Manhattan, p=2 gives Euclidean. Tunable sensitivity to large differences.</p>
          </CardContent></Card>
        </div>

        <div className="my-6 p-4 rounded-lg border border-red-500/20 bg-red-500/5">
          <p className="text-sm font-medium mb-2">⚠️ The Curse of Dimensionality</p>
          <p className="text-sm text-muted-foreground">
            As the number of dimensions grows, distances between points become increasingly similar.
            In high-dimensional spaces, the concept of "nearest neighbor" becomes less meaningful because
            all points are approximately equidistant. This is a fundamental limitation of metric methods.
          </p>
        </div>

        <h2 className="text-2xl font-bold mt-8 mb-4">Choosing k</h2>
        <p className="leading-relaxed mb-4">
          The parameter k controls the bias-variance tradeoff:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
          <Card className="border-blue-500/20 bg-blue-500/5"><CardContent className="p-4">
            <h3 className="font-semibold mb-1">Small k (e.g., k=1)</h3>
            <p className="text-sm text-muted-foreground">
              Very flexible, low bias but high variance. Prone to overfitting and sensitive to noise.
              Creates complex, irregular decision boundaries.
            </p>
          </CardContent></Card>
          <Card className="border-orange-500/20 bg-orange-500/5"><CardContent className="p-4">
            <h3 className="font-semibold mb-1">Large k (e.g., k=n)</h3>
            <p className="text-sm text-muted-foreground">
              Very smooth, high bias but low variance. Underfits the data — always predicts the
              majority class. Use cross-validation to find the optimal k.
            </p>
          </CardContent></Card>
        </div>

        <h2 className="text-2xl font-bold mt-8 mb-4">Efficient Neighbor Search</h2>
        <p className="leading-relaxed mb-4">
          Naive KNN requires computing distances to all n training points at prediction time — O(n·d) per query.
          For large datasets, specialized data structures make this much faster:
        </p>
        <div className="space-y-4 my-6">
          <Card><CardContent className="p-4">
            <h3 className="font-semibold mb-2">KD-Tree</h3>
            <p className="text-sm text-muted-foreground">
              Partitions the space recursively along feature dimensions. Query time: O(log n) in low dimensions.
              Performance degrades in high dimensions (d {'>'} 20).
            </p>
          </CardContent></Card>
          <Card><CardContent className="p-4">
            <h3 className="font-semibold mb-2">Ball Tree</h3>
            <p className="text-sm text-muted-foreground">
              Partitions data using hyperspheres instead of axis-aligned hyperplanes. More efficient than
              KD-trees in higher dimensions because it adapts to the data distribution.
            </p>
          </CardContent></Card>
          <Card><CardContent className="p-4">
            <h3 className="font-semibold mb-2">Approximate Nearest Neighbors (ANN)</h3>
            <p className="text-sm text-muted-foreground">
              Libraries like FAISS, Annoy, and HNSW find approximately nearest neighbors much faster.
              Essential for production systems with millions of data points (e.g., search engines, recommender systems).
            </p>
          </CardContent></Card>
        </div>

        <Card className="my-6 border-purple-500/20 bg-purple-500/5">
          <CardHeader><CardTitle className="text-lg">⚡ KNN Pros & Cons</CardTitle></CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <p className="font-medium text-green-600 mb-1">✓ Advantages</p>
                <ul className="text-muted-foreground space-y-1 text-xs">
                  <li>• Simple to understand and implement</li>
                  <li>• No explicit training phase</li>
                  <li>• Naturally handles multi-class problems</li>
                  <li>• Adapts to new training data instantly</li>
                </ul>
              </div>
              <div>
                <p className="font-medium text-red-600 mb-1">✗ Disadvantages</p>
                <ul className="text-muted-foreground space-y-1 text-xs">
                  <li>• Slow prediction for large datasets</li>
                  <li>• Suffers from curse of dimensionality</li>
                  <li>• Requires feature scaling</li>
                  <li>• Sensitive to irrelevant features</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </>
    )
  },

  'decision-trees': {
    title: 'Decision Trees',
    estimatedTime: '20 min',
    difficulty: 'intermediate',
    content: (
      <>
        <p className="text-lg leading-relaxed mb-6">
          Decision trees predict the target variable through a sequence of binary decisions (predicates).
          Each internal node tests a feature, and each leaf node provides a prediction. They are intuitive,
          interpretable, and form the backbone of the most powerful ensemble methods.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">How Trees Split Data</h2>
        <p className="leading-relaxed mb-4">
          At each node, the tree selects the feature and threshold that best separate the data according
          to a <strong>splitting criterion</strong>. The goal is to create child nodes that are as "pure" as possible —
          containing mostly objects from a single class (classification) or with similar target values (regression).
        </p>

        <Card className="my-6 border-primary/20 bg-primary/5">
          <CardContent className="p-6">
            <h3 className="font-semibold mb-2">Tree Structure</h3>
            <div className="text-center text-sm space-y-2">
              <div className="inline-block p-2 bg-primary/20 rounded font-medium">Root Node: x<sub>3</sub> ≤ 5.0?</div>
              <div className="flex justify-center gap-16">
                <div>
                  <div className="text-xs text-muted-foreground">Yes →</div>
                  <div className="inline-block p-2 bg-blue-100 dark:bg-blue-900/30 rounded text-xs">x<sub>1</sub> ≤ 2.0?</div>
                  <div className="flex justify-center gap-8 mt-1">
                    <div className="text-xs text-center">
                      <div>Yes</div>
                      <div className="p-1 bg-green-100 dark:bg-green-900/30 rounded">Class A</div>
                    </div>
                    <div className="text-xs text-center">
                      <div>No</div>
                      <div className="p-1 bg-green-100 dark:bg-green-900/30 rounded">Class B</div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="text-xs text-muted-foreground">No →</div>
                  <div className="inline-block p-2 bg-blue-100 dark:bg-blue-900/30 rounded text-xs">x<sub>7</sub> ≤ 3.0?</div>
                  <div className="flex justify-center gap-8 mt-1">
                    <div className="text-xs text-center">
                      <div>Yes</div>
                      <div className="p-1 bg-green-100 dark:bg-green-900/30 rounded">Class B</div>
                    </div>
                    <div className="text-xs text-center">
                      <div>No</div>
                      <div className="p-1 bg-green-100 dark:bg-green-900/30 rounded">Class A</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <h2 className="text-2xl font-bold mt-8 mb-4">Splitting Criteria</h2>
        <div className="space-y-4 my-6">
          <Card><CardContent className="p-4">
            <h3 className="font-semibold mb-2">Entropy (Information Gain)</h3>
            <p className="text-sm text-muted-foreground mb-2">
              Measures the impurity of a node. A node with all one class has entropy 0; a perfectly mixed node has maximum entropy.
            </p>
            <p className="font-mono text-xs bg-muted px-2 py-1 rounded inline-block">
              H(S) = −Σ<sub>c</sub> p<sub>c</sub> · log₂(p<sub>c</sub>)
            </p>
            <p className="text-xs text-muted-foreground mt-2">
              Information Gain = H(parent) − weighted_avg(H(children)). The split with highest gain is chosen.
            </p>
          </CardContent></Card>

          <Card><CardContent className="p-4">
            <h3 className="font-semibold mb-2">Gini Impurity</h3>
            <p className="text-sm text-muted-foreground mb-2">
              Probability of misclassifying a random element. Faster to compute than entropy (no logarithms).
              Used as default in CART and scikit-learn.
            </p>
            <p className="font-mono text-xs bg-muted px-2 py-1 rounded inline-block">
              Gini(S) = 1 − Σ<sub>c</sub> p<sub>c</sub>²
            </p>
          </CardContent></Card>

          <Card><CardContent className="p-4">
            <h3 className="font-semibold mb-2">Variance Reduction (Regression)</h3>
            <p className="text-sm text-muted-foreground mb-2">
              For regression trees, the splitting criterion minimizes the sum of squared errors within each child node.
              The prediction at each leaf is the mean of all target values that reach it.
            </p>
          </CardContent></Card>
        </div>

        <h2 className="text-2xl font-bold mt-8 mb-4">Overfitting & Pruning</h2>
        <p className="leading-relaxed mb-4">
          Unrestricted trees grow until every leaf is pure, which leads to severe overfitting.
          Two main strategies prevent this:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
          <Card className="border-green-500/20 bg-green-500/5"><CardContent className="p-4">
            <h3 className="font-semibold mb-2">Pre-pruning (Early Stopping)</h3>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• max_depth: limit tree height</li>
              <li>• min_samples_split: min samples to allow splitting</li>
              <li>• min_samples_leaf: min samples in each leaf</li>
              <li>• max_leaf_nodes: limit total number of leaves</li>
            </ul>
          </CardContent></Card>
          <Card className="border-orange-500/20 bg-orange-500/5"><CardContent className="p-4">
            <h3 className="font-semibold mb-2">Post-pruning</h3>
            <p className="text-sm text-muted-foreground">
              Build the full tree, then prune back nodes that don't improve validation performance.
              Cost-complexity pruning (used in CART) adds a penalty α · |leaves| to find the optimal subtree.
            </p>
          </CardContent></Card>
        </div>

        <Card className="my-6 bg-accent/50 border-accent">
          <CardContent className="p-6">
            <h3 className="font-semibold mb-2">💡 Why Trees Are So Important</h3>
            <p className="text-sm text-muted-foreground">
              Individual decision trees are rarely state-of-the-art, but they are the building blocks for
              <strong> Random Forests</strong> and <strong>Gradient Boosting</strong> — the two most successful
              families of ML models for tabular data. Understanding trees deeply is essential for mastering
              these ensemble methods.
            </p>
          </CardContent>
        </Card>

        <h2 className="text-2xl font-bold mt-8 mb-4">Feature Importance</h2>
        <p className="leading-relaxed mb-4">
          Decision trees naturally provide feature importance: features used near the top of the tree
          (and on large subsets) are more important. The standard measure is <strong>Mean Decrease in Impurity (MDI)</strong> —
          the total impurity reduction weighted by the fraction of samples reaching each node.
        </p>

        <Card className="my-6 border-purple-500/20 bg-purple-500/5">
          <CardHeader><CardTitle className="text-lg">⚡ Quick Reference</CardTitle></CardHeader>
          <CardContent>
            <div className="grid gap-2 text-sm">
              <div className="flex items-start gap-2">
                <span className="font-mono text-xs bg-muted px-2 py-1 rounded">CART</span>
                <span className="text-muted-foreground">Classification And Regression Trees — binary splits</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="font-mono text-xs bg-muted px-2 py-1 rounded">Entropy</span>
                <span className="text-muted-foreground">−Σ p·log(p) — measures information content</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="font-mono text-xs bg-muted px-2 py-1 rounded">Gini</span>
                <span className="text-muted-foreground">1 − Σp² — default criterion in sklearn</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="font-mono text-xs bg-muted px-2 py-1 rounded">Pruning</span>
                <span className="text-muted-foreground">Removing parts of tree to reduce overfitting</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </>
    )
  },

  'supervised-conclusion': {
    title: 'Conclusion: Classical Supervised Learning',
    estimatedTime: '8 min',
    difficulty: 'beginner',
    content: (
      <>
        <p className="text-lg leading-relaxed mb-6">
          Classical supervised learning provides a rich toolkit of algorithms, each suited to different
          types of problems. Let's summarize when to use each method.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">Algorithm Selection Guide</h2>
        <div className="overflow-x-auto my-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b bg-muted/50">
                <th className="p-2 text-left font-semibold">Method</th>
                <th className="p-2 text-left font-semibold">Best For</th>
                <th className="p-2 text-left font-semibold">Strengths</th>
                <th className="p-2 text-left font-semibold">Weaknesses</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="p-2 font-medium">Linear Models</td>
                <td className="p-2 text-muted-foreground">Large datasets, sparse features, baseline</td>
                <td className="p-2 text-muted-foreground">Fast, interpretable, scalable</td>
                <td className="p-2 text-muted-foreground">Assumes linearity</td>
              </tr>
              <tr className="border-b">
                <td className="p-2 font-medium">KNN</td>
                <td className="p-2 text-muted-foreground">Small datasets, simple baselines</td>
                <td className="p-2 text-muted-foreground">No training, intuitive</td>
                <td className="p-2 text-muted-foreground">Slow prediction, curse of dimensionality</td>
              </tr>
              <tr className="border-b">
                <td className="p-2 font-medium">Decision Trees</td>
                <td className="p-2 text-muted-foreground">Interpretability needed, mixed data types</td>
                <td className="p-2 text-muted-foreground">Visual, handles non-linearity</td>
                <td className="p-2 text-muted-foreground">Overfits easily, unstable</td>
              </tr>
              <tr className="border-b">
                <td className="p-2 font-medium">Random Forest</td>
                <td className="p-2 text-muted-foreground">General-purpose, robust baseline</td>
                <td className="p-2 text-muted-foreground">Low variance, handles missing data</td>
                <td className="p-2 text-muted-foreground">Slower than linear, less interpretable</td>
              </tr>
              <tr className="border-b">
                <td className="p-2 font-medium">Gradient Boosting</td>
                <td className="p-2 text-muted-foreground">Maximum accuracy on tabular data</td>
                <td className="p-2 text-muted-foreground">State-of-the-art, flexible</td>
                <td className="p-2 text-muted-foreground">Needs tuning, sequential training</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-bold mt-8 mb-4">Key Takeaways</h2>
        <div className="space-y-3 my-6">
          <Card className="border-green-500/20 bg-green-500/5"><CardContent className="p-4">
            <p className="text-sm"><strong>1. Start simple.</strong> Always try a linear model or Random Forest as your baseline before moving to complex methods.</p>
          </CardContent></Card>
          <Card className="border-green-500/20 bg-green-500/5"><CardContent className="p-4">
            <p className="text-sm"><strong>2. Feature engineering matters most.</strong> Good features often beat a better algorithm. Invest time in understanding and transforming your data.</p>
          </CardContent></Card>
          <Card className="border-green-500/20 bg-green-500/5"><CardContent className="p-4">
            <p className="text-sm"><strong>3. Bias-variance tradeoff is universal.</strong> Every algorithm has this tension. Ensembles (bagging reduces variance, boosting reduces bias) are the solution.</p>
          </CardContent></Card>
          <Card className="border-green-500/20 bg-green-500/5"><CardContent className="p-4">
            <p className="text-sm"><strong>4. Gradient Boosting is the default winner.</strong> For tabular data, GBDT (XGBoost, LightGBM, CatBoost) usually achieves the best accuracy with proper tuning.</p>
          </CardContent></Card>
        </div>

        <Card className="my-6 bg-accent/50 border-accent">
          <CardContent className="p-6">
            <h3 className="font-semibold mb-2">🚀 What's Next?</h3>
            <p className="text-sm text-muted-foreground">
              In the following chapters, we'll dive into <strong>Model Evaluation</strong> — how to properly
              measure model quality with metrics and cross-validation — and then explore <strong>Probabilistic Models</strong>,
              <strong> Deep Learning</strong>, and other advanced topics that build on these foundations.
            </p>
          </CardContent>
        </Card>
      </>
    )
  }
}
