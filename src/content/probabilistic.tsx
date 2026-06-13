import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Article } from './types'

export const probabilisticArticles: Record<string, Article> = {
  'prob-approach': {
    title: 'Probabilistic Approach in ML',
    estimatedTime: '18 min',
    difficulty: 'advanced',
    content: (
      <>
        <p className="text-lg leading-relaxed mb-6">
          The probabilistic framework treats machine learning as a problem of <strong>statistical inference</strong>:
          given observed data, what can we say about the underlying process that generated it?
          Instead of just finding a "good" model, we reason about probability distributions over data and parameters.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">The Generative Story</h2>
        <p className="leading-relaxed mb-4">
          In the probabilistic view, we assume data is generated from some distribution p(x, y).
          The goal of learning is to estimate this distribution (or parts of it) from a finite sample.
          This perspective unifies many seemingly different algorithms under one framework.
        </p>

        <Card className="my-6 bg-accent/50 border-accent">
          <CardContent className="p-6">
            <h3 className="font-semibold mb-2">Maximum Likelihood Estimation (MLE)</h3>
            <p className="text-sm text-muted-foreground mb-2">
              Find parameters θ that make the observed data most probable:
            </p>
            <p className="font-mono text-xs bg-muted px-2 py-1 rounded inline-block">
              θ* = argmax<sub>θ</sub> Σ<sub>i</sub> log p(y<sub>i</sub> | x<sub>i</sub>, θ)
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              MLE is the foundation of many ML algorithms. Linear regression with MSE loss is MLE
              under Gaussian noise. Logistic regression is MLE under Bernoulli likelihood.
            </p>
          </CardContent>
        </Card>

        <h2 className="text-2xl font-bold mt-8 mb-4">The Exponential Family</h2>
        <p className="leading-relaxed mb-4">
          Many common distributions (Gaussian, Bernoulli, Poisson, Exponential, Gamma, Beta) belong to the
          <strong> exponential family</strong> — distributions that can be written in a unified form:
        </p>
        <Card className="my-6 border-primary/20 bg-primary/5">
          <CardContent className="p-6">
            <p className="text-center font-mono text-sm mb-2">
              p(y | θ) = h(y) · exp( η(θ)·T(y) − A(η) )
            </p>
            <div className="grid grid-cols-2 gap-2 text-xs mt-3">
              <div><strong>η(θ)</strong> — natural parameter</div>
              <div><strong>T(y)</strong> — sufficient statistic</div>
              <div><strong>A(η)</strong> — log-partition function</div>
              <div><strong>h(y)</strong> — base measure</div>
            </div>
          </CardContent>
        </Card>

        <h3 className="text-xl font-bold mt-6 mb-3">Why This Matters</h3>
        <div className="space-y-3 my-6">
          <Card><CardContent className="p-4">
            <h3 className="font-semibold mb-1">Unified Theory</h3>
            <p className="text-sm text-muted-foreground">
              All exponential family distributions share key properties: MLE has a closed-form sufficient statistic,
              the log-likelihood is concave (unique global optimum), and conjugate priors exist for Bayesian analysis.
            </p>
          </CardContent></Card>
          <Card><CardContent className="p-4">
            <h3 className="font-semibold mb-1">Maximum Entropy Principle</h3>
            <p className="text-sm text-muted-foreground">
              The exponential family distribution is the <strong>maximum entropy distribution</strong>
              given constraints on the expected values of sufficient statistics. In other words, it makes
              the fewest assumptions beyond what the data tells us.
            </p>
          </CardContent></Card>
        </div>

        <h2 className="text-2xl font-bold mt-8 mb-4">From MLE to Regularization</h2>
        <p className="leading-relaxed mb-4">
          Pure MLE can overfit. Adding a <strong>prior</strong> on parameters leads to
          <strong> Maximum A Posteriori (MAP)</strong> estimation, which is equivalent to regularized MLE:
        </p>
        <Card className="my-6 border-primary/20 bg-primary/5">
          <CardContent className="p-6">
            <p className="font-mono text-sm text-center mb-2">
              θ<sub>MAP</sub> = argmax<sub>θ</sub> [ log p(D|θ) + log p(θ) ]
            </p>
            <div className="grid grid-cols-2 gap-2 text-xs mt-3">
              <div className="p-2 bg-blue-500/10 rounded">
                <strong>Gaussian prior</strong> → L2 regularization (Ridge)
              </div>
              <div className="p-2 bg-orange-500/10 rounded">
                <strong>Laplace prior</strong> → L1 regularization (Lasso)
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="my-6 border-purple-500/20 bg-purple-500/5">
          <CardHeader><CardTitle className="text-lg">Key Takeaway</CardTitle></CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              The probabilistic approach provides a unified foundation: MLE for parameter estimation,
              exponential family for modeling flexibility, and Bayesian priors for regularization.
              This framework connects linear regression, logistic regression, Naive Bayes, and
              many other algorithms as special cases.
            </p>
          </CardContent>
        </Card>
      </>
    )
  },

  'glm': {
    title: 'Generalized Linear Models',
    estimatedTime: '16 min',
    difficulty: 'advanced',
    content: (
      <>
        <p className="text-lg leading-relaxed mb-6">
          Generalized Linear Models (GLMs) extend linear regression to handle non-Gaussian response variables.
          They unify linear regression, logistic regression, Poisson regression, and more into a single
          elegant framework based on the exponential family.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">Three Components of a GLM</h2>
        <div className="space-y-4 my-6">
          <Card className="border-primary/20 bg-primary/5"><CardContent className="p-4">
            <h3 className="font-semibold mb-2">1. Random Component</h3>
            <p className="text-sm text-muted-foreground">
              The response variable Y follows a distribution from the exponential family
              (Gaussian, Bernoulli, Poisson, Gamma, etc.). This determines the variance function.
            </p>
          </CardContent></Card>
          <Card className="border-primary/20 bg-primary/5"><CardContent className="p-4">
            <h3 className="font-semibold mb-2">2. Systematic Component</h3>
            <p className="text-sm text-muted-foreground">
              A linear predictor: η = w<sup>T</sup>x + b. This is the same linear combination
              of features as in ordinary linear regression.
            </p>
          </CardContent></Card>
          <Card className="border-primary/20 bg-primary/5"><CardContent className="p-4">
            <h3 className="font-semibold mb-2">3. Link Function</h3>
            <p className="text-sm text-muted-foreground">
              Connects the expected value E[Y] = μ to the linear predictor: g(μ) = η.
              The <strong>canonical link</strong> is the natural choice that makes η equal to the natural parameter.
            </p>
          </CardContent></Card>
        </div>

        <h2 className="text-2xl font-bold mt-8 mb-4">Common GLMs</h2>
        <div className="overflow-x-auto my-6">
          <table className="w-full text-sm border-collapse">
            <thead><tr className="border-b bg-muted/50">
              <th className="p-2 text-left">Distribution</th>
              <th className="p-2 text-left">Link Function</th>
              <th className="p-2 text-left">Use Case</th>
              <th className="p-2 text-left">Model Name</th>
            </tr></thead>
            <tbody>
              <tr className="border-b">
                <td className="p-2">Gaussian</td>
                <td className="p-2 text-muted-foreground">Identity: g(μ) = μ</td>
                <td className="p-2 text-muted-foreground">Continuous outcomes</td>
                <td className="p-2 font-medium">Linear Regression</td>
              </tr>
              <tr className="border-b">
                <td className="p-2">Bernoulli</td>
                <td className="p-2 text-muted-foreground">Logit: g(μ) = log(μ/(1−μ))</td>
                <td className="p-2 text-muted-foreground">Binary classification</td>
                <td className="p-2 font-medium">Logistic Regression</td>
              </tr>
              <tr className="border-b">
                <td className="p-2">Poisson</td>
                <td className="p-2 text-muted-foreground">Log: g(μ) = log(μ)</td>
                <td className="p-2 text-muted-foreground">Count data</td>
                <td className="p-2 font-medium">Poisson Regression</td>
              </tr>
              <tr className="border-b">
                <td className="p-2">Gamma</td>
                <td className="p-2 text-muted-foreground">Inverse: g(μ) = 1/μ</td>
                <td className="p-2 text-muted-foreground">Positive skewed data</td>
                <td className="p-2 font-medium">Gamma Regression</td>
              </tr>
            </tbody>
          </table>
        </div>

        <Card className="my-6 bg-accent/50 border-accent">
          <CardContent className="p-6">
            <h3 className="font-semibold mb-2">Logistic Regression as a GLM</h3>
            <p className="text-sm text-muted-foreground mb-2">
              For binary classification (y ∈ {'{'}0, 1{'}'}), the Bernoulli distribution with logit link gives:
            </p>
            <p className="font-mono text-xs bg-muted px-2 py-1 rounded inline-block">
              P(y=1|x) = σ(w<sup>T</sup>x) = 1 / (1 + exp(−w<sup>T</sup>x))
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              Training with cross-entropy loss is exactly MLE for this GLM. The log-likelihood is concave,
              so gradient-based methods find the global optimum.
            </p>
          </CardContent>
        </Card>

        <h2 className="text-2xl font-bold mt-8 mb-4">Estimation</h2>
        <p className="leading-relaxed mb-4">
          GLM parameters are estimated by <strong>maximum likelihood</strong>, typically using
          <strong> Iteratively Reweighted Least Squares (IRLS)</strong> — a Newton-Raphson variant
          that exploits the GLM structure for efficient computation. For large datasets,
          SGD and its variants work well.
        </p>

        <Card className="my-6 border-purple-500/20 bg-purple-500/5">
          <CardHeader><CardTitle className="text-lg">Why GLMs Matter</CardTitle></CardHeader>
          <CardContent>
            <div className="grid gap-2 text-sm text-muted-foreground">
              <p>• <strong>Unified framework:</strong> One theory covers regression, classification, count models</p>
              <p>• <strong>Interpretability:</strong> Coefficients have clear meaning through the link function</p>
              <p>• <strong>Statistical inference:</strong> Confidence intervals, hypothesis tests, deviance</p>
              <p>• <strong>Foundation:</strong> Basis for mixed models, GAMs, Bayesian GLMs</p>
            </div>
          </CardContent>
        </Card>
      </>
    )
  },

  'bayesian': {
    title: 'Bayesian Approach in ML',
    estimatedTime: '18 min',
    difficulty: 'advanced',
    content: (
      <>
        <p className="text-lg leading-relaxed mb-6">
          The Bayesian approach treats parameters as <strong>random variables</strong> with probability distributions,
          rather than fixed unknown values. This provides a principled way to quantify uncertainty,
          incorporate prior knowledge, and avoid overfitting.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">Bayes' Theorem for ML</h2>
        <Card className="my-6 border-primary/20 bg-primary/5">
          <CardContent className="p-6">
            <p className="text-center font-mono text-sm mb-3">
              p(θ | D) = p(D | θ) · p(θ) / p(D)
            </p>
            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="p-2 bg-blue-500/10 rounded">
                <p className="font-semibold text-blue-600 dark:text-blue-400">p(θ | D) — Posterior</p>
                <p className="text-muted-foreground">Updated belief about θ after seeing data</p>
              </div>
              <div className="p-2 bg-green-500/10 rounded">
                <p className="font-semibold text-green-600 dark:text-green-400">p(D | θ) — Likelihood</p>
                <p className="text-muted-foreground">How well θ explains the observed data</p>
              </div>
              <div className="p-2 bg-orange-500/10 rounded">
                <p className="font-semibold text-orange-600 dark:text-orange-400">p(θ) — Prior</p>
                <p className="text-muted-foreground">Belief about θ before seeing data</p>
              </div>
              <div className="p-2 bg-gray-500/10 rounded">
                <p className="font-semibold text-gray-600 dark:text-gray-400">p(D) — Evidence</p>
                <p className="text-muted-foreground">Normalizing constant (often intractable)</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <h2 className="text-2xl font-bold mt-8 mb-4">MAP vs Full Bayes</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
          <Card className="border-blue-500/20 bg-blue-500/5"><CardContent className="p-4">
            <h3 className="font-semibold mb-2">MAP Estimation</h3>
            <p className="text-sm text-muted-foreground mb-2">
              Find the single most probable θ. Equivalent to regularized MLE.
              Fast but ignores uncertainty.
            </p>
            <p className="font-mono text-xs bg-muted px-2 py-1 rounded inline-block">
              θ<sub>MAP</sub> = argmax p(θ|D)
            </p>
          </CardContent></Card>
          <Card className="border-green-500/20 bg-green-500/5"><CardContent className="p-4">
            <h3 className="font-semibold mb-2">Full Bayesian Inference</h3>
            <p className="text-sm text-muted-foreground mb-2">
              Integrate over all possible θ weighted by posterior.
              Computationally expensive but captures uncertainty.
            </p>
            <p className="font-mono text-xs bg-muted px-2 py-1 rounded inline-block">
              p(y*|D) = ∫ p(y*|θ)·p(θ|D)dθ
            </p>
          </CardContent></Card>
        </div>

        <h2 className="text-2xl font-bold mt-8 mb-4">Approximate Inference</h2>
        <p className="leading-relaxed mb-4">
          Computing the posterior exactly is often intractable. Key approximation methods:
        </p>
        <div className="space-y-3 my-6">
          <Card><CardContent className="p-4">
            <h3 className="font-semibold mb-1">MCMC (Markov Chain Monte Carlo)</h3>
            <p className="text-sm text-muted-foreground">
              Sample from the posterior using random walks (Metropolis-Hastings, Hamiltonian MC).
              Asymptotically exact but can be slow. Used by Stan, PyMC.
            </p>
          </CardContent></Card>
          <Card><CardContent className="p-4">
            <h3 className="font-semibold mb-1">Variational Inference</h3>
            <p className="text-sm text-muted-foreground">
              Approximate posterior with a simpler family of distributions. Optimize KL divergence.
              Faster than MCMC, used in VAEs and large-scale Bayesian models.
            </p>
          </CardContent></Card>
          <Card><CardContent className="p-4">
            <h3 className="font-semibold mb-1">Laplace Approximation</h3>
            <p className="text-sm text-muted-foreground">
              Approximate posterior as Gaussian centered at MAP estimate. Quick and simple.
              Used in Bayesian neural networks and model comparison.
            </p>
          </CardContent></Card>
        </div>

        <h2 className="text-2xl font-bold mt-8 mb-4">Bayesian Methods in Practice</h2>
        <div className="space-y-3 my-6">
          <Card><CardContent className="p-4">
            <h3 className="font-semibold mb-1">Naive Bayes</h3>
            <p className="text-sm text-muted-foreground">
              Assumes features are conditionally independent given the class. Despite the strong assumption,
              works surprisingly well for text classification and as a fast baseline.
            </p>
          </CardContent></Card>
          <Card><CardContent className="p-4">
            <h3 className="font-semibold mb-1">Gaussian Processes</h3>
            <p className="text-sm text-muted-foreground">
              Non-parametric Bayesian regression. Provides predictions with uncertainty estimates.
              Core component of Bayesian optimization. Scales as O(n³) — limited to ~10k data points.
            </p>
          </CardContent></Card>
          <Card><CardContent className="p-4">
            <h3 className="font-semibold mb-1">Bayesian Optimization</h3>
            <p className="text-sm text-muted-foreground">
              Uses Gaussian Process surrogate to optimize expensive black-box functions
              (e.g., hyperparameter tuning). Each evaluation updates the posterior.
            </p>
          </CardContent></Card>
        </div>

        <Card className="my-6 border-purple-500/20 bg-purple-500/5">
          <CardHeader><CardTitle className="text-lg">When to Go Bayesian?</CardTitle></CardHeader>
          <CardContent>
            <div className="grid gap-2 text-sm text-muted-foreground">
              <p>• You need <strong>uncertainty estimates</strong> (medical decisions, autonomous systems)</p>
              <p>• You have strong <strong>prior knowledge</strong> to incorporate</p>
              <p>• Data is <strong>scarce</strong> and you need regularization from priors</p>
              <p>• You're doing <strong>model comparison</strong> (Bayes factors, marginal likelihoods)</p>
            </div>
          </CardContent>
        </Card>
      </>
    )
  },

  'generative-models': {
    title: 'Generative vs Discriminative Models',
    estimatedTime: '14 min',
    difficulty: 'intermediate',
    content: (
      <>
        <p className="text-lg leading-relaxed mb-6">
          Classification models fall into two families based on what they learn about the data:
          <strong> generative</strong> models learn how data is produced (the joint distribution),
          while <strong>discriminative</strong> models learn the decision boundary directly.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">Discriminative Models</h2>
        <p className="leading-relaxed mb-4">
          Model <strong>P(Y | X)</strong> directly — given the features, what's the probability of each class?
          They focus all capacity on the decision boundary without worrying about how X was generated.
        </p>
        <Card className="my-6 bg-accent/50 border-accent">
          <CardContent className="p-6">
            <h3 className="font-semibold mb-2">Examples</h3>
            <p className="text-sm text-muted-foreground">
              Logistic Regression, SVM, Decision Trees, Random Forests, Neural Networks, Gradient Boosting.
              Most modern ML models are discriminative.
            </p>
          </CardContent>
        </Card>

        <h2 className="text-2xl font-bold mt-8 mb-4">Generative Models</h2>
        <p className="leading-relaxed mb-4">
          Model the <strong>joint distribution P(X, Y) = P(X|Y) · P(Y)</strong>. They learn what each class
          "looks like" (the class-conditional distribution P(X|Y)) and how common each class is (the prior P(Y)).
          Classification is then done via Bayes' theorem.
        </p>
        <Card className="my-6 bg-accent/50 border-accent">
          <CardContent className="p-6">
            <h3 className="font-semibold mb-2">Examples</h3>
            <p className="text-sm text-muted-foreground">
              Naive Bayes, Gaussian Discriminant Analysis (LDA/QDA), GMM, HMM, GANs, VAEs, Diffusion Models.
              Generative models can also <em>generate new data samples</em>.
            </p>
          </CardContent>
        </Card>

        <h2 className="text-2xl font-bold mt-8 mb-4">Comparison</h2>
        <div className="overflow-x-auto my-6">
          <table className="w-full text-sm border-collapse">
            <thead><tr className="border-b bg-muted/50">
              <th className="p-2 text-left">Aspect</th>
              <th className="p-2 text-left">Discriminative</th>
              <th className="p-2 text-left">Generative</th>
            </tr></thead>
            <tbody>
              <tr className="border-b">
                <td className="p-2 font-medium">Models</td>
                <td className="p-2 text-muted-foreground">P(Y|X) directly</td>
                <td className="p-2 text-muted-foreground">P(X,Y) = P(X|Y)·P(Y)</td>
              </tr>
              <tr className="border-b">
                <td className="p-2 font-medium">Data needed</td>
                <td className="p-2 text-muted-foreground">More data for good performance</td>
                <td className="p-2 text-muted-foreground">Can work with less data (stronger assumptions)</td>
              </tr>
              <tr className="border-b">
                <td className="p-2 font-medium">Generation</td>
                <td className="p-2 text-muted-foreground">Cannot generate new samples</td>
                <td className="p-2 text-muted-foreground">Can generate new samples</td>
              </tr>
              <tr className="border-b">
                <td className="p-2 font-medium">Missing data</td>
                <td className="p-2 text-muted-foreground">Cannot handle missing features</td>
                <td className="p-2 text-muted-foreground">Can marginalize over missing features</td>
              </tr>
              <tr className="border-b">
                <td className="p-2 font-medium">Accuracy</td>
                <td className="p-2 text-muted-foreground">Usually higher with enough data</td>
                <td className="p-2 text-muted-foreground">Lower if assumptions are wrong</td>
              </tr>
            </tbody>
          </table>
        </div>

        <Card className="my-6 border-primary/20 bg-primary/5">
          <CardContent className="p-6">
            <h3 className="font-semibold mb-2">Andrew Ng's Insight</h3>
            <p className="text-sm text-muted-foreground">
              With small data, generative models (Naive Bayes) can outperform discriminative ones
              (Logistic Regression) because the strong assumptions act as regularization. With large data,
              discriminative models win because they don't need to model P(X|Y) — they can focus entirely
              on the boundary. This is the classic bias-variance tradeoff in model choice.
            </p>
          </CardContent>
        </Card>
      </>
    )
  },

  'latent-variables': {
    title: 'Models with Latent Variables',
    estimatedTime: '16 min',
    difficulty: 'advanced',
    content: (
      <>
        <p className="text-lg leading-relaxed mb-6">
          <strong>Latent (hidden) variables</strong> are unobserved quantities that explain the structure
          in observed data. They're central to many of the most powerful probabilistic models —
          from topic models to modern generative AI.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">What Are Latent Variables?</h2>
        <p className="leading-relaxed mb-4">
          Variables we can't directly observe but that influence the data. Examples:
          "topic" explains word co-occurrences in documents; "cluster membership" explains grouping
          in data; "sentiment" explains word choice in reviews.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">Key Models</h2>
        <div className="space-y-4 my-6">
          <Card className="border-blue-500/20 bg-blue-500/5"><CardContent className="p-4">
            <h3 className="font-semibold mb-2">Gaussian Mixture Models (GMM)</h3>
            <p className="text-sm text-muted-foreground mb-2">
              Data comes from a mixture of K Gaussians. The latent variable z ∈ {'{'}1,...,K{'}'} indicates
              which component generated each point.
            </p>
            <p className="font-mono text-xs bg-muted px-2 py-1 rounded inline-block">
              p(x) = Σ<sub>k</sub> π<sub>k</sub> · N(x | μ<sub>k</sub>, Σ<sub>k</sub>)
            </p>
          </CardContent></Card>

          <Card className="border-green-500/20 bg-green-500/5"><CardContent className="p-4">
            <h3 className="font-semibold mb-2">Hidden Markov Models (HMM)</h3>
            <p className="text-sm text-muted-foreground">
              Sequential model where hidden states generate observable outputs.
              The Markov assumption means the current state depends only on the previous one.
              Solved with the Forward-Backward algorithm and Viterbi decoding.
            </p>
          </CardContent></Card>

          <Card className="border-orange-500/20 bg-orange-500/5"><CardContent className="p-4">
            <h3 className="font-semibold mb-2">Latent Dirichlet Allocation (LDA)</h3>
            <p className="text-sm text-muted-foreground">
              Topic model: each document is a mixture of topics, each topic is a distribution over words.
              Two levels of latent variables: per-document topic proportions and per-word topic assignments.
            </p>
          </CardContent></Card>

          <Card className="border-purple-500/20 bg-purple-500/5"><CardContent className="p-4">
            <h3 className="font-semibold mb-2">Variational Autoencoders (VAE)</h3>
            <p className="text-sm text-muted-foreground">
              Deep generative models with continuous latent variables z.
              The encoder maps data to a distribution over z, the decoder maps z back to data space.
              Trained with variational inference and the reparameterization trick.
            </p>
          </CardContent></Card>
        </div>

        <h2 className="text-2xl font-bold mt-8 mb-4">The EM Algorithm</h2>
        <p className="leading-relaxed mb-4">
          The <strong>Expectation-Maximization</strong> algorithm is the standard method for maximum likelihood
          estimation with latent variables. It alternates between two steps:
        </p>
        <div className="space-y-2 my-6">
          <Card className="border-primary/20 bg-primary/5"><CardContent className="p-4">
            <h3 className="font-semibold mb-1">E-step (Expectation)</h3>
            <p className="text-sm text-muted-foreground">
              Given current parameters θ, compute the expected value of the latent variables:
              Q(z) = p(z | x, θ). This "fills in" the missing data probabilistically.
            </p>
          </CardContent></Card>
          <Card className="border-primary/20 bg-primary/5"><CardContent className="p-4">
            <h3 className="font-semibold mb-1">M-step (Maximization)</h3>
            <p className="text-sm text-muted-foreground">
              Update parameters to maximize the expected complete-data log-likelihood:
              θ* = argmax E<sub>Q</sub>[log p(x, z | θ)]. This is like MLE with "filled-in" data.
            </p>
          </CardContent></Card>
          <Card><CardContent className="p-4">
            <h3 className="font-semibold mb-1">Convergence</h3>
            <p className="text-sm text-muted-foreground">
              EM is guaranteed to increase the likelihood at each step (or keep it the same).
              It converges to a local maximum. Multiple random restarts are often used.
            </p>
          </CardContent></Card>
        </div>

        <Card className="my-6 bg-accent/50 border-accent">
          <CardContent className="p-6">
            <h3 className="font-semibold mb-2">EM for Gaussian Mixtures (Intuition)</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p><strong>E-step:</strong> For each point, compute the "responsibility" — probability that each Gaussian generated it</p>
              <p><strong>M-step:</strong> Recompute each Gaussian's mean, variance, and mixing weight using the weighted points</p>
              <p><strong>Repeat:</strong> Responsibilities shift points between clusters, parameters update to fit the new soft assignments</p>
            </div>
          </CardContent>
        </Card>
      </>
    )
  }
}
