import { Card, CardContent } from '@/components/ui/card'
import { Article } from './types'

export const probabilisticArticles: Record<string, Article> = {
  bayesian: {
    title: 'Bayesian Approach in ML',
    estimatedTime: '15 min',
    difficulty: 'advanced',
    content: (
      <>
        <p className="text-lg leading-relaxed mb-6">
          The Bayesian approach treats model parameters as random variables with probability distributions,
          rather than fixed values. This provides a principled way to incorporate prior knowledge and quantify uncertainty.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">Bayes' Theorem</h2>
        <div className="bg-muted p-4 rounded-lg mb-6 font-mono text-sm text-center">
          P(θ|D) = P(D|θ) × P(θ) / P(D)
        </div>
        <p className="leading-relaxed mb-4">
          <strong>Posterior</strong> = <strong>Likelihood</strong> × <strong>Prior</strong> / <strong>Evidence</strong>
        </p>

        <Card className="my-6 bg-accent/50 border-accent">
          <CardContent className="p-6">
            <h3 className="font-semibold mb-2">Key Concepts</h3>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• <strong>Prior P(θ):</strong> Our belief about parameters before seeing data</li>
              <li>• <strong>Likelihood P(D|θ):</strong> How likely the data is given parameters</li>
              <li>• <strong>Posterior P(θ|D):</strong> Updated belief after observing data</li>
              <li>• <strong>Evidence P(D):</strong> Marginal probability of data (normalizing constant)</li>
            </ul>
          </CardContent>
        </Card>

        <h2 className="text-2xl font-bold mt-8 mb-4">Maximum A Posteriori (MAP)</h2>
        <p className="leading-relaxed mb-4">
          MAP estimation finds the most probable parameter values given the data. It's equivalent to
          Maximum Likelihood Estimation (MLE) with a prior regularization term. L2 regularization
          corresponds to a Gaussian prior, L1 to a Laplace prior.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">Bayesian Methods in Practice</h2>
        <div className="grid gap-4 my-6">
          <Card>
            <CardContent className="p-4">
              <h3 className="font-semibold mb-2">Naive Bayes Classifier</h3>
              <p className="text-sm text-muted-foreground">
                Simple but effective — assumes features are conditionally independent given the class.
                Works surprisingly well for text classification.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <h3 className="font-semibold mb-2">Gaussian Processes</h3>
              <p className="text-sm text-muted-foreground">
                Non-parametric Bayesian approach to regression. Provides uncertainty estimates
                alongside predictions. Used in Bayesian optimization.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <h3 className="font-semibold mb-2">Bayesian Neural Networks</h3>
              <p className="text-sm text-muted-foreground">
                Place distributions over network weights instead of point estimates. Enables
                uncertainty quantification in deep learning predictions.
              </p>
            </CardContent>
          </Card>
        </div>
      </>
    )
  },
  'generative-models': {
    title: 'Generative vs Discriminative Models',
    estimatedTime: '11 min',
    difficulty: 'intermediate',
    content: (
      <>
        <p className="text-lg leading-relaxed mb-6">
          Machine learning models can be categorized by how they approach classification: generative models
          learn the joint probability P(X,Y), while discriminative models learn the conditional P(Y|X) directly.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">Discriminative Models</h2>
        <p className="leading-relaxed mb-4">
          Learn the decision boundary directly. They model P(Y|X) — given the features, what's the probability
          of each class? Examples: Logistic Regression, SVM, Neural Networks, Decision Trees.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">Generative Models</h2>
        <p className="leading-relaxed mb-4">
          Learn the distribution of each class. They model P(X|Y) and P(Y), then use Bayes' theorem to compute
          P(Y|X). Can generate new data samples. Examples: Naive Bayes, GMM, LDA, GANs, VAEs.
        </p>

        <Card className="my-6 bg-accent/50 border-accent">
          <CardContent className="p-6">
            <h3 className="font-semibold mb-2">When to Use Which?</h3>
            <div className="grid grid-cols-2 gap-4 text-sm text-muted-foreground mt-2">
              <div>
                <strong>Discriminative:</strong>
                <ul className="mt-1 space-y-1 text-xs">
                  <li>• Better accuracy with enough data</li>
                  <li>• Feature engineering flexibility</li>
                  <li>• Most modern ML tasks</li>
                </ul>
              </div>
              <div>
                <strong>Generative:</strong>
                <ul className="mt-1 space-y-1 text-xs">
                  <li>• Works well with less data</li>
                  <li>• Can generate new samples</li>
                  <li>• Semi-supervised learning</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </>
    )
  },
  'latent-variables': {
    title: 'Models with Latent Variables',
    estimatedTime: '13 min',
    difficulty: 'advanced',
    content: (
      <>
        <p className="text-lg leading-relaxed mb-6">
          Latent (hidden) variables are unobserved quantities that explain the structure in observed data.
          They're central to many powerful ML models including topic models, mixture models, and autoencoders.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">What Are Latent Variables?</h2>
        <p className="leading-relaxed mb-4">
          Variables that aren't directly observed but influence the data we can see. For example,
          "topic" in a document isn't labeled but explains word co-occurrences. "Customer segment"
          isn't explicit but explains purchasing behavior.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">Key Models</h2>
        <div className="space-y-4 my-6">
          <Card>
            <CardContent className="p-4">
              <h3 className="font-semibold mb-2">Gaussian Mixture Models (GMM)</h3>
              <p className="text-sm text-muted-foreground">
                Data is generated from a mixture of several Gaussian distributions. The latent variable
                indicates which component generated each data point. Solved with EM algorithm.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <h3 className="font-semibold mb-2">Hidden Markov Models (HMM)</h3>
              <p className="text-sm text-muted-foreground">
                Sequence model where hidden states generate observable outputs. Used in speech recognition,
                bioinformatics, and part-of-speech tagging.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <h3 className="font-semibold mb-2">Topic Models (LDA)</h3>
              <p className="text-sm text-muted-foreground">
                Latent Dirichlet Allocation discovers hidden topics in document collections. Each document
                is a mixture of topics, each topic is a distribution over words.
              </p>
            </CardContent>
          </Card>
        </div>

        <h2 className="text-2xl font-bold mt-8 mb-4">EM Algorithm</h2>
        <p className="leading-relaxed mb-4">
          The Expectation-Maximization algorithm is the standard method for learning models with latent variables:
        </p>
        <ol className="list-decimal list-inside space-y-2 mb-6">
          <li><strong>E-step:</strong> Estimate latent variables given current parameters</li>
          <li><strong>M-step:</strong> Update parameters given estimated latent variables</li>
          <li><strong>Repeat</strong> until convergence</li>
        </ol>
      </>
    )
  }
}
