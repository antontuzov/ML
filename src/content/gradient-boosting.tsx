import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Article } from './types'

export const gradientBoostingArticles: Record<string, Article> = {
  'gbdt-intuition': {
    title: 'Gradient Boosting: Intuition',
    estimatedTime: '16 min',
    difficulty: 'advanced',
    content: (
      <>
        <p className="text-lg leading-relaxed mb-6">
          Gradient Boosting on Decision Trees (GBDT) is the most powerful non-neural-network model family.
          It excels on heterogeneous tabular data — the kind you find in databases, spreadsheets, and
          structured datasets. It's the backbone of search ranking, ad targeting, recommendation systems,
          and countless other production ML applications.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">The Core Idea</h2>
        <p className="leading-relaxed mb-4">
          Build a composition of M base algorithms (shallow decision trees):
        </p>
        <Card className="my-6 border-primary/20 bg-primary/5">
          <CardContent className="p-6">
            <p className="text-center font-mono text-sm">
              F(x) = f<sub>1</sub>(x) + f<sub>2</sub>(x) + ... + f<sub>M</sub>(x)
            </p>
            <p className="text-center text-xs text-muted-foreground mt-2">
              Each new tree corrects the residual errors of the current ensemble
            </p>
          </CardContent>
        </Card>

        <h2 className="text-2xl font-bold mt-8 mb-4">The Golf Analogy</h2>
        <p className="leading-relaxed mb-4">
          Imagine a golfer trying to get the ball into the hole. The ball's position represents the
          model's current prediction, and the hole is the true target value.
        </p>
        <div className="space-y-3 my-6">
          <Card className="border-green-500/20 bg-green-500/5"><CardContent className="p-4">
            <h3 className="font-semibold mb-1">First swing (f<sub>1</sub>)</h3>
            <p className="text-sm text-muted-foreground">
              The first tree makes a rough prediction — like the tee shot. It gets close to the target
              but usually misses. The ball lands at some position ŷ<sub>1</sub>.
            </p>
          </CardContent></Card>
          <Card className="border-green-500/20 bg-green-500/5"><CardContent className="p-4">
            <h3 className="font-semibold mb-1">Approach shots (f<sub>2</sub>, f<sub>3</sub>, ...)</h3>
            <p className="text-sm text-muted-foreground">
              Each subsequent tree doesn't start from scratch. Instead, it looks at where the ball
              currently is and makes a correction — like an approach shot. Tree f<sub>2</sub> tries
              to predict the residual: r<sub>2</sub> = y − ŷ<sub>1</sub>.
            </p>
          </CardContent></Card>
          <Card className="border-green-500/20 bg-green-500/5"><CardContent className="p-4">
            <h3 className="font-semibold mb-1">Putting (final trees)</h3>
            <p className="text-sm text-muted-foreground">
              As the ensemble grows, later trees make smaller, more precise corrections — like putts.
              The prediction gradually converges toward the true value.
            </p>
          </CardContent></Card>
        </div>

        <Card className="my-6 bg-accent/50 border-accent">
          <CardContent className="p-6">
            <h3 className="font-semibold mb-2">🎯 The Taylor Series Analogy</h3>
            <p className="text-sm text-muted-foreground mb-2">
              Think of GBDT as expanding the true function in a series — like a Taylor expansion.
              A single complex model tries to approximate the function in one shot. GBDT uses many
              simple models: the first roughly approximates the function, and each subsequent one
              makes the approximation more precise.
            </p>
            <p className="font-mono text-xs bg-muted px-2 py-1 rounded inline-block mt-1">
              f(x) ≈ f₁(x) + f₂(x) + f₃(x) + ... + fₘ(x)
            </p>
          </CardContent>
        </Card>

        <h2 className="text-2xl font-bold mt-8 mb-4">Step-by-Step: Regression Example</h2>
        <p className="leading-relaxed mb-4">
          For regression with MSE loss, the process is straightforward:
        </p>
        <div className="space-y-2 my-6">
          <Card><CardContent className="p-3">
            <p className="text-sm"><strong>Step 1:</strong> Train tree f<sub>1</sub> to predict y directly: f<sub>1</sub> ≈ y</p>
          </CardContent></Card>
          <Card><CardContent className="p-3">
            <p className="text-sm"><strong>Step 2:</strong> Compute residuals: r<sub>2</sub> = y − f<sub>1</sub>(x). Train tree f<sub>2</sub> to predict r<sub>2</sub>.</p>
          </CardContent></Card>
          <Card><CardContent className="p-3">
            <p className="text-sm"><strong>Step 3:</strong> Update ensemble: F<sub>2</sub>(x) = f<sub>1</sub>(x) + f<sub>2</sub>(x). Compute new residuals: r<sub>3</sub> = y − F<sub>2</sub>(x).</p>
          </CardContent></Card>
          <Card><CardContent className="p-3">
            <p className="text-sm"><strong>Step k:</strong> Compute residuals r<sub>k</sub> = y − F<sub>k-1</sub>(x). Train f<sub>k</sub> ≈ r<sub>k</sub>. Update F<sub>k</sub> = F<sub>k-1</sub> + f<sub>k</sub>.</p>
          </CardContent></Card>
        </div>

        <div className="my-6 p-4 rounded-lg border border-blue-500/20 bg-blue-500/5">
          <p className="text-sm font-medium mb-2">Key Observation</p>
          <p className="text-sm text-muted-foreground">
            For MSE loss, the residual r = y − ŷ is exactly the <strong>negative gradient</strong> of
            the loss function. This insight lets us generalize to any differentiable loss function —
            which is the topic of the next section.
          </p>
        </div>
      </>
    )
  },

  'gbdt-math': {
    title: 'Gradient Boosting: The Mathematics',
    estimatedTime: '18 min',
    difficulty: 'advanced',
    content: (
      <>
        <p className="text-lg leading-relaxed mb-6">
          For MSE loss, fitting residuals works perfectly. But what about other loss functions —
          log-loss for classification, ranking losses, Huber loss? The key insight is to replace
          "residuals" with the <strong>negative gradient (anti-gradient)</strong> of the loss function.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">From Residuals to Anti-Gradient</h2>
        <p className="leading-relaxed mb-4">
          For MSE loss, the derivative of the loss with respect to the prediction is:
        </p>
        <Card className="my-6 border-primary/20 bg-primary/5">
          <CardContent className="p-6">
            <p className="text-center font-mono text-sm">
              ∂L/∂ŷ<sub>i</sub> = ∂/∂ŷ<sub>i</sub> (ŷ<sub>i</sub> − y<sub>i</sub>)² = 2(ŷ<sub>i</sub> − y<sub>i</sub>)
            </p>
            <p className="text-center text-xs text-muted-foreground mt-2">
              The residual (y − ŷ) is proportional to the negative gradient — so fitting residuals
              = moving in the direction of steepest descent.
            </p>
          </CardContent>
        </Card>

        <h2 className="text-2xl font-bold mt-8 mb-4">Generalizing to Any Loss</h2>
        <p className="leading-relaxed mb-4">
          For any differentiable loss L(y, ŷ), at each boosting iteration m:
        </p>
        <div className="space-y-2 my-6">
          <Card className="border-primary/20 bg-primary/5"><CardContent className="p-4">
            <h3 className="font-semibold mb-1">1. Compute pseudo-residuals</h3>
            <p className="text-sm text-muted-foreground mb-1">
              For each training example i, compute the negative gradient:
            </p>
            <p className="font-mono text-xs bg-muted px-2 py-1 rounded inline-block">
              r<sub>im</sub> = −∂L(y<sub>i</sub>, F<sub>m-1</sub>(x<sub>i</sub>)) / ∂F<sub>m-1</sub>(x<sub>i</sub>)
            </p>
          </CardContent></Card>
          <Card className="border-primary/20 bg-primary/5"><CardContent className="p-4">
            <h3 className="font-semibold mb-1">2. Fit a regression tree to pseudo-residuals</h3>
            <p className="text-sm text-muted-foreground">
              Train a new decision tree f<sub>m</sub>(x) to approximate the anti-gradient values r<sub>im</sub>.
            </p>
          </CardContent></Card>
          <Card className="border-primary/20 bg-primary/5"><CardContent className="p-4">
            <h3 className="font-semibold mb-1">3. Update the ensemble</h3>
            <p className="font-mono text-xs bg-muted px-2 py-1 rounded inline-block">
              F<sub>m</sub>(x) = F<sub>m-1</sub>(x) + ν · f<sub>m</sub>(x)
            </p>
            <p className="text-xs text-muted-foreground mt-1">where ν is the learning rate (shrinkage factor)</p>
          </CardContent></Card>
        </div>

        <h2 className="text-2xl font-bold mt-8 mb-4">Why Anti-Gradient?</h2>
        <p className="leading-relaxed mb-4">
          The anti-gradient points in the direction of <strong>steepest decrease</strong> of the loss function.
          By training each new tree to predict the anti-gradient, we're moving the ensemble's predictions
          in the direction that most rapidly reduces the loss. This is analogous to gradient descent,
          but in <em>function space</em> rather than parameter space.
        </p>

        <Card className="my-6 bg-accent/50 border-accent">
          <CardContent className="p-6">
            <h3 className="font-semibold mb-2">🎯 Why This Matters: Ranking Losses</h3>
            <p className="text-sm text-muted-foreground">
              Some loss functions (like PairLogit for ranking) don't have explicit targets —
              you can't compute "residuals" directly. But you <em>can</em> compute the gradient.
              This is why the anti-gradient generalization is so powerful: it enables boosting
              for ranking, custom losses, and other non-standard problems.
            </p>
          </CardContent>
        </Card>

        <h2 className="text-2xl font-bold mt-8 mb-4">Formal Derivation (Taylor Expansion)</h2>
        <p className="leading-relaxed mb-4">
          At step m, we want to find f<sub>m</sub> that minimizes:
        </p>
        <Card className="my-6 border-primary/20 bg-primary/5">
          <CardContent className="p-6">
            <p className="font-mono text-sm text-center mb-2">
              f<sub>m</sub> = argmin<sub>f</sub> Σ<sub>i</sub> L(y<sub>i</sub>, F<sub>m-1</sub>(x<sub>i</sub>) + f(x<sub>i</sub>))
            </p>
            <p className="text-sm text-muted-foreground">
              Using first-order Taylor expansion around F<sub>m-1</sub>:
            </p>
            <p className="font-mono text-xs text-center mt-2">
              L(y<sub>i</sub>, F<sub>m-1</sub> + f(x<sub>i</sub>)) ≈ L(y<sub>i</sub>, F<sub>m-1</sub>) + g<sub>im</sub> · f(x<sub>i</sub>)
            </p>
            <p className="text-xs text-muted-foreground text-center mt-1">
              where g<sub>im</sub> = ∂L/∂F evaluated at F<sub>m-1</sub>
            </p>
          </CardContent>
        </Card>
        <p className="leading-relaxed mb-4">
          The scalar product Σ g<sub>im</sub> · f(x<sub>i</sub>) is minimized when f(x<sub>i</sub>) is
          proportional to −g<sub>im</sub>. Therefore, each base algorithm should approximate the
          <strong> negative gradient</strong> of the loss.
        </p>
      </>
    )
  },

  'gbdt-practice': {
    title: 'Gradient Boosting in Practice',
    estimatedTime: '20 min',
    difficulty: 'advanced',
    content: (
      <>
        <p className="text-lg leading-relaxed mb-6">
          Three excellent open-source implementations of GBDT dominate production ML:
          <strong> XGBoost</strong>, <strong>LightGBM</strong>, and <strong>CatBoost</strong>.
          Let's understand their differences and learn practical tips.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">The Three Libraries</h2>
        <div className="space-y-4 my-6">
          <Card className="border-red-500/20 bg-red-500/5"><CardContent className="p-5">
            <h3 className="font-semibold mb-2 text-red-600 dark:text-red-400">XGBoost</h3>
            <p className="text-sm text-muted-foreground mb-2">
              Built level-wise (symmetric trees). Trees grow layer by layer up to max_depth.
              This produces balanced trees that are robust to overfitting.
            </p>
            <ul className="text-xs text-muted-foreground space-y-1">
              <li>• Tree shape: symmetric, full binary trees</li>
              <li>• Primary control: max_depth (typically 3–10)</li>
              <li>• Built-in L1/L2 regularization on leaf weights</li>
              <li>• Won the majority of Kaggle competitions 2015–2017</li>
            </ul>
          </CardContent></Card>

          <Card className="border-purple-500/20 bg-purple-500/5"><CardContent className="p-5">
            <h3 className="font-semibold mb-2 text-purple-600 dark:text-purple-400">LightGBM</h3>
            <p className="text-sm text-muted-foreground mb-2">
              Built leaf-wise (asymmetric). Always splits the leaf with the best score.
              Can grow deep, unbalanced trees but fits data faster.
            </p>
            <ul className="text-xs text-muted-foreground space-y-1">
              <li>• Tree shape: asymmetric (leaf-wise growth)</li>
              <li>• Primary control: num_leaves (typically 31–127)</li>
              <li>• Histogram-based splitting (extremely fast on large data)</li>
              <li>• Best choice when speed matters on large datasets</li>
            </ul>
          </CardContent></Card>

          <Card className="border-yellow-500/20 bg-yellow-500/5"><CardContent className="p-5">
            <h3 className="font-semibold mb-2 text-yellow-600 dark:text-yellow-400">CatBoost</h3>
            <p className="text-sm text-muted-foreground mb-2">
              Built symmetrically with identical splits at each level. This enables efficient inference
              using bit operations — several times faster than XGBoost/LightGBM.
            </p>
            <ul className="text-xs text-muted-foreground space-y-1">
              <li>• Tree shape: symmetric (oblivious trees) — same split at each level</li>
              <li>• Primary control: depth (typically 4–10)</li>
              <li>• Native categorical feature handling (target encoding built-in)</li>
              <li>• Ordered boosting to prevent target leakage</li>
              <li>• Best defaults — often works well out of the box</li>
            </ul>
          </CardContent></Card>
        </div>

        <h2 className="text-2xl font-bold mt-8 mb-4">Tree Shape Comparison</h2>
        <div className="grid grid-cols-3 gap-3 my-6">
          <div className="text-center p-3 rounded border bg-muted/30">
            <p className="text-xs font-semibold mb-2">XGBoost</p>
            <div className="text-xs space-y-1">
              <div className="bg-primary/10 p-1 rounded">Root</div>
              <div className="flex justify-center gap-2"><div className="bg-primary/10 p-1 rounded flex-1">L</div><div className="bg-primary/10 p-1 rounded flex-1">R</div></div>
              <div className="flex justify-center gap-1"><div className="bg-primary/10 p-1 rounded flex-1">LL</div><div className="bg-primary/10 p-1 rounded flex-1">LR</div><div className="bg-primary/10 p-1 rounded flex-1">RL</div><div className="bg-primary/10 p-1 rounded flex-1">RR</div></div>
            </div>
            <p className="text-xs text-muted-foreground mt-2">Level-wise</p>
          </div>
          <div className="text-center p-3 rounded border bg-muted/30">
            <p className="text-xs font-semibold mb-2">LightGBM</p>
            <div className="text-xs space-y-1">
              <div className="bg-primary/10 p-1 rounded">Root</div>
              <div className="flex justify-center gap-2"><div className="bg-primary/10 p-1 rounded flex-1">L</div><div className="bg-primary/20 p-1 rounded flex-1">R★</div></div>
              <div className="flex justify-center gap-2"><div className="text-xs text-muted-foreground p-1 flex-1">—</div><div className="flex gap-1 flex-1"><div className="bg-primary/10 p-1 rounded flex-1">RL</div><div className="bg-primary/20 p-1 rounded flex-1">RR★</div></div></div>
            </div>
            <p className="text-xs text-muted-foreground mt-2">Leaf-wise</p>
          </div>
          <div className="text-center p-3 rounded border bg-muted/30">
            <p className="text-xs font-semibold mb-2">CatBoost</p>
            <div className="text-xs space-y-1">
              <div className="bg-primary/10 p-1 rounded">Root (x₃ {'<'} 5)</div>
              <div className="flex justify-center gap-2"><div className="bg-primary/10 p-1 rounded flex-1">L (x₃ {'<'} 5)</div><div className="bg-primary/10 p-1 rounded flex-1">R (x₃ {'<'} 5)</div></div>
            </div>
            <p className="text-xs text-muted-foreground mt-2">Oblivious trees</p>
          </div>
        </div>

        <h2 className="text-2xl font-bold mt-8 mb-4">Preventing Overfitting</h2>
        <div className="space-y-3 my-6">
          <Card><CardContent className="p-4">
            <h3 className="font-semibold mb-1">1. Learning Rate (ν)</h3>
            <p className="text-sm text-muted-foreground">
              Each tree contributes only ν · f<sub>m</sub>(x) to the ensemble. Typical values: 0.01–0.3.
              Lower learning rate = more iterations needed = better generalization but slower training.
              CatBoost can auto-select learning rate based on dataset properties.
            </p>
          </CardContent></Card>
          <Card><CardContent className="p-4">
            <h3 className="font-semibold mb-1">2. Shallow Trees</h3>
            <p className="text-sm text-muted-foreground">
              Use depth 3–6 for most problems. Deeper trees overfit. Each additional level doubles the
              number of leaves, exponentially increasing model complexity.
            </p>
          </CardContent></Card>
          <Card><CardContent className="p-4">
            <h3 className="font-semibold mb-1">3. Subsampling</h3>
            <p className="text-sm text-muted-foreground">
              Use only a fraction of data (subsample=0.6–0.8) and features (colsample=0.6–0.8) per tree.
              Acts like stochastic bagging within boosting, reducing variance.
            </p>
          </CardContent></Card>
          <Card><CardContent className="p-4">
            <h3 className="font-semibold mb-1">4. Early Stopping</h3>
            <p className="text-sm text-muted-foreground">
              Monitor validation loss and stop training when it stops improving. This automatically
              determines the optimal number of boosting iterations without manual tuning.
            </p>
          </CardContent></Card>
        </div>

        <h2 className="text-2xl font-bold mt-8 mb-4">Feature Importance</h2>
        <p className="leading-relaxed mb-4">
          GBDT provides natural feature importance measures:
        </p>
        <div className="grid gap-4 my-6">
          <Card><CardContent className="p-4">
            <h3 className="font-semibold mb-1">Mean Decrease in Impurity (MDI)</h3>
            <p className="text-sm text-muted-foreground">
              How much each feature contributes to reducing impurity across all trees, weighted by the
              fraction of samples affected. Fast but biased toward high-cardinality features.
            </p>
          </CardContent></Card>
          <Card><CardContent className="p-4">
            <h3 className="font-semibold mb-1">Permutation Importance</h3>
            <p className="text-sm text-muted-foreground">
              Shuffle each feature and measure how much model quality degrades. More reliable but slower.
              Available in sklearn and CatBoost.
            </p>
          </CardContent></Card>
        </div>

        <Card className="my-6 bg-accent/50 border-accent">
          <CardContent className="p-6">
            <h3 className="font-semibold mb-2">🎯 The Bottom Line</h3>
            <p className="text-sm text-muted-foreground">
              Gradient Boosting is one of two main pillars of modern ML (alongside neural networks).
              It's simpler, more interpretable, and often faster to deploy than deep learning for
              structured data. Typical search queries, hotel bookings, and movie recommendations
              all involve dozens of GBDT models in production.
            </p>
          </CardContent>
        </Card>

        <Card className="my-6 border-purple-500/20 bg-purple-500/5">
          <CardHeader><CardTitle className="text-lg">⚡ Quick Reference</CardTitle></CardHeader>
          <CardContent>
            <div className="grid gap-2 text-sm">
              <div className="flex items-start gap-2">
                <span className="font-mono text-xs bg-muted px-2 py-1 rounded">GBDT</span>
                <span className="text-muted-foreground">Gradient Boosting on Decision Trees</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="font-mono text-xs bg-muted px-2 py-1 rounded">LR (ν)</span>
                <span className="text-muted-foreground">Learning rate — shrinks each tree's contribution</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="font-mono text-xs bg-muted px-2 py-1 rounded">Early Stop</span>
                <span className="text-muted-foreground">Stop when validation loss stops improving</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="font-mono text-xs bg-muted px-2 py-1 rounded">MDI</span>
                <span className="text-muted-foreground">Mean Decrease in Impurity — feature importance</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </>
    )
  }
}
