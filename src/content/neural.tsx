import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Article } from './types'
import ActivationFunctionsChart from '@/components/visualizations/ActivationFunctions'
import NetworkVisualizer from '@/components/visualizations/NetworkVisualizer'
import BackpropAnimation from '@/components/visualizations/BackpropAnimation'
import InteractiveNeuralTrainer from '@/components/visualizations/NeuralTrainer'

export const neuralArticles: Record<string, Article> = {
  basics: {
    title: 'Neural Networks',
    estimatedTime: '18 min',
    difficulty: 'intermediate',
    content: (
      <>
        <p className="text-lg leading-relaxed mb-6">
          Neural networks are parameterized compositions of differentiable functions. They learn hierarchical
          representations of data by stacking simple transformations — each layer extracts increasingly
          abstract features from the input.
        </p>

        {/* Interactive: Network Evolution */}
        <NetworkVisualizer />

        <h2 className="text-2xl font-bold mt-8 mb-4">The Artificial Neuron</h2>
        <p className="leading-relaxed mb-4">
          Each neuron performs an affine transformation followed by a non-linear activation:
        </p>
        <Card className="my-6 border-primary/20 bg-primary/5">
          <CardContent className="p-6">
            <p className="text-center font-mono text-sm mb-2">
              y = σ(w<sub>1</sub>x<sub>1</sub> + w<sub>2</sub>x<sub>2</sub> + ... + w<sub>n</sub>x<sub>n</sub> + b) = σ(w<sup>T</sup>x + b)
            </p>
            <p className="text-center text-xs text-muted-foreground">
              where σ is the activation function, w are weights, b is bias
            </p>
          </CardContent>
        </Card>

        <h2 className="text-2xl font-bold mt-8 mb-4">Activation Functions</h2>
        <div className="grid gap-4 my-6">
          <Card>
            <CardContent className="p-4">
              <h3 className="font-semibold mb-2">ReLU (Rectified Linear Unit)</h3>
              <p className="text-sm text-muted-foreground mb-1">
                σ(z) = max(0, z). The default choice for hidden layers. Simple, fast, and avoids
                vanishing gradients for positive inputs.
              </p>
              <p className="text-xs text-muted-foreground italic">
                Derivative: 1 for z {'>'} 0, 0 for z {'<'} 0
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <h3 className="font-semibold mb-2">Sigmoid</h3>
              <p className="text-sm text-muted-foreground mb-1">
                σ(z) = 1/(1+e<sup>-z</sup>). Outputs in (0,1). Used for binary classification output
                and gating mechanisms.
              </p>
              <p className="text-xs text-muted-foreground italic">
                Suffers from vanishing gradients — derivative is σ(z)(1−σ(z)) {'≤'} 0.25
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <h3 className="font-semibold mb-2">Softmax</h3>
              <p className="text-sm text-muted-foreground mb-1">
                σ(z)<sub>i</sub> = e<sup>z<sub>i</sub></sup> / Σ<sub>j</sub> e<sup>z<sub>j</sub></sup>. Converts logits to a probability
                distribution. Used in multi-class classification.
              </p>
              <p className="text-xs text-muted-foreground italic">
                Backward pass: ∂σ<sub>i</sub>/∂z<sub>j</sub> = σ<sub>i</sub>(δ<sub>ij</sub> − σ<sub>j</sub>)
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <h3 className="font-semibold mb-2">GELU (Gaussian Error Linear Unit)</h3>
              <p className="text-sm text-muted-foreground mb-1">
                σ(z) = z · Φ(z), where Φ is the standard normal CDF. Used in Transformers (BERT, GPT).
                Smoother than ReLU, allows small negative values through.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Interactive: Activation Functions Explorer */}
        <ActivationFunctionsChart />

        <h2 className="text-2xl font-bold mt-8 mb-4">Why Non-Linearity Matters</h2>
        <Card className="my-6 bg-accent/50 border-accent">
          <CardContent className="p-6">
            <h3 className="font-semibold mb-2">The Key Insight</h3>
            <p className="text-sm text-muted-foreground">
              Without non-linear activations, a neural network of any depth collapses to a single linear
              transformation: W<sub>2</sub> · W<sub>1</sub> · x = W<sub>combined</sub> · x. Non-linearities allow the
              network to approximate arbitrarily complex functions.
            </p>
          </CardContent>
        </Card>

        <h2 className="text-2xl font-bold mt-8 mb-4">Universal Approximation Theorem</h2>
        <p className="leading-relaxed mb-4">
          A feedforward network with a single hidden layer of finite width can approximate any continuous
          function on a compact subset of ℝ<sup>n</sup> to arbitrary accuracy, given suitable activation
          functions (Cybenko 1989, Hornik 1991). However, this theorem doesn't tell us:
        </p>
        <ul className="list-disc list-inside space-y-2 mb-6">
          <li>How to <strong>find</strong> the right weights (optimization)</li>
          <li>How many neurons are needed (may be exponentially large)</li>
          <li>Whether the network will <strong>generalize</strong> to unseen data</li>
        </ul>
        <p className="leading-relaxed mb-4">
          In practice, <strong>deep</strong> networks (many layers) are far more parameter-efficient than
          wide shallow ones for the functions we actually want to learn.
        </p>

        <Card className="my-6 border-purple-500/20 bg-purple-500/5">
          <CardHeader><CardTitle className="text-lg">⚡ Quick Reference</CardTitle></CardHeader>
          <CardContent>
            <div className="grid gap-2 text-sm">
              <div className="flex items-start gap-2">
                <span className="font-mono text-xs bg-muted px-2 py-1 rounded">Neuron</span>
                <span className="text-muted-foreground">σ(w<sup>T</sup>x + b) — weighted sum + activation</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="font-mono text-xs bg-muted px-2 py-1 rounded">ReLU</span>
                <span className="text-muted-foreground">max(0, z) — default activation for hidden layers</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="font-mono text-xs bg-muted px-2 py-1 rounded">Softmax</span>
                <span className="text-muted-foreground">Probability distribution over classes</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="font-mono text-xs bg-muted px-2 py-1 rounded">UAT</span>
                <span className="text-muted-foreground">Neural nets can approximate any continuous function</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </>
    )
  },

  architecture: {
    title: 'Fully Connected Networks',
    estimatedTime: '16 min',
    difficulty: 'intermediate',
    content: (
      <>
        <p className="text-lg leading-relaxed mb-6">
          Fully connected (dense) neural networks are the foundation of deep learning. Every neuron in layer
          ℓ connects to every neuron in layer ℓ+1, enabling the network to learn arbitrary feature combinations.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">Network Structure</h2>
        <div className="space-y-3 my-6">
          <Card className="border-primary/20 bg-primary/5"><CardContent className="p-4">
            <h3 className="font-semibold mb-1">Forward Pass</h3>
            <p className="text-sm text-muted-foreground mb-1">
              For an L-layer network, the computation at each layer is:
            </p>
            <p className="font-mono text-xs bg-muted px-2 py-1 rounded inline-block">
              h<sup>(ℓ)</sup> = σ<sub>ℓ</sub>(W<sup>(ℓ)</sup> h<sup>(ℓ-1)</sup> + b<sup>(ℓ)</sup>)
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              where h<sup>(0)</sup> = x (input), W<sup>(ℓ)</sup> ∈ ℝ<sup>d<sub>ℓ</sub> × d<sub>ℓ-1</sub></sup>, and σ<sub>ℓ</sub> is the activation function
            </p>
          </CardContent></Card>
          <Card className="border-primary/20 bg-primary/5"><CardContent className="p-4">
            <h3 className="font-semibold mb-1">Parameter Count</h3>
            <p className="text-sm text-muted-foreground">
              Total parameters = Σ<sub>ℓ=1</sub><sup>L</sup> (d<sub>ℓ</sub> · d<sub>ℓ-1</sub> + d<sub>ℓ</sub>).
              For a network with layers [784, 256, 128, 10]: (784×256 + 256) + (256×128 + 128) + (128×10 + 10) = 233,866 parameters.
            </p>
          </CardContent></Card>
        </div>

        <h2 className="text-2xl font-bold mt-8 mb-4">Depth vs Width</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
          <Card className="border-blue-500/20 bg-blue-500/5"><CardContent className="p-4">
            <h3 className="font-semibold mb-2 text-blue-600 dark:text-blue-400">Deep & Narrow</h3>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• Learns hierarchical features</li>
              <li>• More parameter-efficient</li>
              <li>• Better compositionality</li>
              <li>• Harder to train (vanishing gradients)</li>
            </ul>
          </CardContent></Card>
          <Card className="border-orange-500/20 bg-orange-500/5"><CardContent className="p-4">
            <h3 className="font-semibold mb-2 text-orange-600 dark:text-orange-400">Shallow & Wide</h3>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• Universal approximation (theoretically)</li>
              <li>• Exponentially many neurons needed</li>
              <li>• Easier to optimize</li>
              <li>• Poor feature hierarchy</li>
            </ul>
          </CardContent></Card>
        </div>

        <Card className="my-6 bg-accent/50 border-accent">
          <CardContent className="p-6">
            <h3 className="font-semibold mb-2">Practical Architecture Design</h3>
            <div className="text-sm text-muted-foreground space-y-2">
              <p>• <strong>Start simple:</strong> 2-3 hidden layers with 128-512 neurons each</p>
              <p>• <strong>Scale up:</strong> Add layers before adding width (depth {'>'} width)</p>
              <p>• <strong>Use skip connections:</strong> ResNet-style blocks help gradient flow</p>
              <p>• <strong>Batch normalization:</strong> After linear layer, before activation</p>
              <p>• <strong>Dropout:</strong> 0.1-0.5 rate for regularization</p>
            </div>
          </CardContent>
        </Card>

        <h2 className="text-2xl font-bold mt-8 mb-4">Weight Initialization</h2>
        <p className="leading-relaxed mb-4">
          Proper initialization is critical — poor initialization leads to vanishing or exploding gradients.
        </p>
        <div className="grid gap-4 my-6">
          <Card><CardContent className="p-4">
            <h3 className="font-semibold mb-1">Xavier/Glorot (for sigmoid/tanh)</h3>
            <p className="font-mono text-xs bg-muted px-2 py-1 rounded inline-block">
              W ~ N(0, 2/(d<sub>in</sub> + d<sub>out</sub>))
            </p>
          </CardContent></Card>
          <Card><CardContent className="p-4">
            <h3 className="font-semibold mb-1">He/Kaiming (for ReLU)</h3>
            <p className="font-mono text-xs bg-muted px-2 py-1 rounded inline-block">
              W ~ N(0, 2/d<sub>in</sub>)
            </p>
            <p className="text-xs text-muted-foreground mt-1">Accounts for ReLU halving the variance (only positive activations pass through)</p>
          </CardContent></Card>
        </div>

        <Card className="my-6 border-purple-500/20 bg-purple-500/5">
          <CardHeader><CardTitle className="text-lg">⚡ Quick Reference</CardTitle></CardHeader>
          <CardContent>
            <div className="grid gap-2 text-sm">
              <div className="flex items-start gap-2">
                <span className="font-mono text-xs bg-muted px-2 py-1 rounded">FC Layer</span>
                <span className="text-muted-foreground">h = σ(Wx + b), fully connected transformation</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="font-mono text-xs bg-muted px-2 py-1 rounded">Depth</span>
                <span className="text-muted-foreground">More layers = hierarchical feature learning</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="font-mono text-xs bg-muted px-2 py-1 rounded">He Init</span>
                <span className="text-muted-foreground">N(0, 2/d<sub>in</sub>) — standard for ReLU networks</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </>
    )
  },

  backprop: {
    title: 'Backpropagation',
    estimatedTime: '18 min',
    difficulty: 'advanced',
    content: (
      <>
        <p className="text-lg leading-relaxed mb-6">
          Neural networks are trained via gradient descent, which requires computing gradients of the loss
          with respect to every weight. <strong>Backpropagation</strong> (Rumelhart, Hinton & Williams, 1986)
          makes this efficient by reusing intermediate computations in a single backward pass.
        </p>

        {/* Interactive: Backpropagation Animation */}
        <BackpropAnimation />

        <h2 className="text-2xl font-bold mt-8 mb-4">The Core Idea</h2>
        <p className="leading-relaxed mb-4">
          Backpropagation is simply the chain rule of calculus applied systematically to a computational
          graph. If y = f(g(x)), then:
        </p>
        <Card className="my-6 border-primary/20 bg-primary/5">
          <CardContent className="p-6">
            <p className="text-center font-mono text-sm mb-2">
              ∂y/∂x = (∂y/∂g) · (∂g/∂x)
            </p>
            <p className="text-center text-xs text-muted-foreground">
              Compute gradients backward through the network, one layer at a time
            </p>
          </CardContent>
        </Card>

        <h2 className="text-2xl font-bold mt-8 mb-4">The Algorithm</h2>
        <div className="space-y-2 my-6">
          <Card className="border-primary/20 bg-primary/5"><CardContent className="p-4">
            <h3 className="font-semibold mb-1">Step 1: Forward Pass</h3>
            <p className="text-sm text-muted-foreground">
              Compute and <strong>store</strong> all intermediate activations: h<sup>(0)</sup>, h<sup>(1)</sup>, ..., h<sup>(L)</sup>.
              These are needed during the backward pass.
            </p>
          </CardContent></Card>
          <Card className="border-primary/20 bg-primary/5"><CardContent className="p-4">
            <h3 className="font-semibold mb-1">Step 2: Compute Output Gradient</h3>
            <p className="text-sm text-muted-foreground">
              δ<sup>(L)</sup> = ∂L/∂h<sup>(L)</sup> — gradient of loss with respect to network output.
            </p>
          </CardContent></Card>
          <Card className="border-primary/20 bg-primary/5"><CardContent className="p-4">
            <h3 className="font-semibold mb-1">Step 3: Backward Pass</h3>
            <p className="text-sm text-muted-foreground mb-1">
              For each layer ℓ from L down to 1:
            </p>
            <p className="font-mono text-xs bg-muted px-2 py-1 rounded inline-block">
              δ<sup>(ℓ-1)</sup> = (W<sup>(ℓ)</sup>)<sup>T</sup> δ<sup>(ℓ)</sup> ⊙ σ'(z<sup>(ℓ-1)</sup>)
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              Propagate gradients backward, applying the chain rule at each layer
            </p>
          </CardContent></Card>
          <Card className="border-primary/20 bg-primary/5"><CardContent className="p-4">
            <h3 className="font-semibold mb-1">Step 4: Compute Weight Gradients</h3>
            <p className="font-mono text-xs bg-muted px-2 py-1 rounded inline-block">
              ∂L/∂W<sup>(ℓ)</sup> = δ<sup>(ℓ)</sup> (h<sup>(ℓ-1)</sup>)<sup>T</sup>
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              These gradients are used to update weights via SGD or Adam
            </p>
          </CardContent></Card>
        </div>

        <h2 className="text-2xl font-bold mt-8 mb-4">Gradients for Common Layers</h2>
        <div className="space-y-3 my-6">
          <Card><CardContent className="p-4">
            <h3 className="font-semibold mb-1">Element-wise activation: y = σ(x)</h3>
            <p className="text-sm text-muted-foreground">
              Gradient transforms as: δ<sub>in</sub> = δ<sub>out</sub> ⊙ σ'(x), where ⊙ is element-wise multiplication.
              For ReLU: δ<sub>in</sub> = δ<sub>out</sub> ⊙ [x {'>'} 0].
            </p>
          </CardContent></Card>
          <Card><CardContent className="p-4">
            <h3 className="font-semibold mb-1">Linear layer: y = Wx + b</h3>
            <p className="text-sm text-muted-foreground">
              δ<sub>in</sub> = W<sup>T</sup> δ<sub>out</sub>, and ∂L/∂W = δ<sub>out</sub> x<sup>T</sup>, ∂L/∂b = δ<sub>out</sub>
            </p>
          </CardContent></Card>
          <Card><CardContent className="p-4">
            <h3 className="font-semibold mb-1">Softmax + Cross-Entropy</h3>
            <p className="text-sm text-muted-foreground">
              The gradient simplifies beautifully: δ = p − y, where p is the predicted probability
              vector and y is the one-hot target. No need to compute the Jacobian explicitly.
            </p>
          </CardContent></Card>
        </div>

        <Card className="my-6 bg-accent/50 border-accent">
          <CardContent className="p-6">
            <h3 className="font-semibold mb-2">💡 Why Not Compute Gradients Directly?</h3>
            <p className="text-sm text-muted-foreground">
              Naively computing ∂L/∂W for each weight independently requires O(n²) operations for
              n parameters. Backpropagation computes <em>all</em> gradients in O(n) operations —
              just one forward pass and one backward pass, regardless of network size. This is the
              same cost as two forward passes.
            </p>
          </CardContent>
        </Card>

        <h2 className="text-2xl font-bold mt-8 mb-4">Automatic Differentiation (Autograd)</h2>
        <p className="leading-relaxed mb-4">
          Modern frameworks (PyTorch, JAX, TensorFlow) implement backpropagation automatically. Each layer
          only needs to know:
        </p>
        <ul className="list-disc list-inside space-y-2 mb-6">
          <li>How to transform input → output (forward pass)</li>
          <li>How to transform δ<sub>out</sub> → δ<sub>in</sub> (backward pass)</li>
          <li>How to compute ∂L/∂W given δ<sub>out</sub> and the stored input</li>
        </ul>
        <p className="leading-relaxed mb-4">
          Layers are assembled like Lego bricks — the framework handles the chain rule mechanically.
          This makes neural network code remarkably clean compared to, say, gradient boosting implementations.
        </p>

        <Card className="my-6 border-purple-500/20 bg-purple-500/5">
          <CardHeader><CardTitle className="text-lg">⚡ Quick Reference</CardTitle></CardHeader>
          <CardContent>
            <div className="grid gap-2 text-sm">
              <div className="flex items-start gap-2">
                <span className="font-mono text-xs bg-muted px-2 py-1 rounded">Backprop</span>
                <span className="text-muted-foreground">Chain rule applied layer-by-layer, backward</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="font-mono text-xs bg-muted px-2 py-1 rounded">δ (delta)</span>
                <span className="text-muted-foreground">Gradient flowing backward through the network</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="font-mono text-xs bg-muted px-2 py-1 rounded">Autograd</span>
                <span className="text-muted-foreground">Automatic differentiation — you write forward, framework does backward</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="font-mono text-xs bg-muted px-2 py-1 rounded">O(n)</span>
                <span className="text-muted-foreground">Cost of all gradients = 2× forward pass cost</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </>
    )
  },

  training: {
    title: 'Training Techniques',
    estimatedTime: '16 min',
    difficulty: 'intermediate',
    content: (
      <>
        <p className="text-lg leading-relaxed mb-6">
          Computing gradients via backpropagation is only half the battle. The other half is choosing
          how to use those gradients to update weights effectively. This section covers optimization
          algorithms and training stabilization techniques.
        </p>

        {/* Interactive: Neural Network Trainer */}
        <InteractiveNeuralTrainer />

        <h2 className="text-2xl font-bold mt-8 mb-4">Gradient Descent Variants</h2>
        <div className="grid gap-4 my-6">
          <Card>
            <CardContent className="p-4">
              <h3 className="font-semibold mb-2">Batch GD</h3>
              <p className="text-sm text-muted-foreground">
                Uses the entire dataset for each update. Stable convergence but computationally expensive
                for large datasets. Rarely used in practice for deep learning.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <h3 className="font-semibold mb-2">Stochastic GD (SGD)</h3>
              <p className="text-sm text-muted-foreground">
                One sample per update. Extremely noisy but can escape local minima. With momentum,
                becomes a strong baseline optimizer.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <h3 className="font-semibold mb-2">Mini-batch SGD</h3>
              <p className="text-sm text-muted-foreground">
                Batches of 32-512 samples. Best of both worlds — reduces noise while leveraging GPU
                parallelism. The standard for deep learning.
              </p>
            </CardContent>
          </Card>
        </div>

        <h2 className="text-2xl font-bold mt-8 mb-4">Optimization Algorithms</h2>
        <div className="space-y-3 my-6">
          <Card><CardContent className="p-4">
            <h3 className="font-semibold mb-1">SGD + Momentum</h3>
            <p className="text-sm text-muted-foreground mb-1">
              v<sub>t</sub> = βv<sub>t-1</sub> + (1−β)g<sub>t</sub>, then θ ← θ − ηv<sub>t</sub>
            </p>
            <p className="text-xs text-muted-foreground">
              Accumulates velocity in consistent gradient directions. β=0.9 is standard.
              Helps escape saddle points and ravines.
            </p>
          </CardContent></Card>
          <Card><CardContent className="p-4">
            <h3 className="font-semibold mb-1">Adam (Adaptive Moment Estimation)</h3>
            <p className="text-sm text-muted-foreground mb-1">
              Combines momentum (1st moment) with RMSProp (2nd moment): adapts learning rate per-parameter.
            </p>
            <p className="text-xs text-muted-foreground">
              Default choice for most deep learning tasks. β<sub>1</sub>=0.9, β<sub>2</sub>=0.999, η=1e-3 or 3e-4.
              Use AdamW (decoupled weight decay) for better generalization.
            </p>
          </CardContent></Card>
          <Card><CardContent className="p-4">
            <h3 className="font-semibold mb-1">Learning Rate Schedules</h3>
            <p className="text-sm text-muted-foreground">
              Warmup → constant → cosine decay. Start with small LR, ramp up, then decay smoothly.
              Critical for training large models and transformers.
            </p>
          </CardContent></Card>
        </div>

        <h2 className="text-2xl font-bold mt-8 mb-4">Regularization & Stabilization</h2>
        <div className="grid gap-4 my-6">
          <Card>
            <CardContent className="p-4">
              <h3 className="font-semibold mb-2">Dropout</h3>
              <p className="text-sm text-muted-foreground">
                Randomly zero out activations during training (rate 0.1-0.5). Prevents co-adaptation
                of neurons. At inference, scale activations by (1-p).
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <h3 className="font-semibold mb-2">Batch Normalization</h3>
              <p className="text-sm text-muted-foreground">
                Normalize layer inputs per mini-batch: x̂ = (x−μ)/√(σ²+ε), then scale with learned γ, β.
                Stabilizes training, allows higher learning rates. Use LayerNorm for RNNs/Transformers.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <h3 className="font-semibold mb-2">Weight Decay (L2 Regularization)</h3>
              <p className="text-sm text-muted-foreground">
                Add λ||θ||² to loss or decouple as θ ← (1−λη)θ before gradient step (AdamW).
                Typical: λ = 1e-4 to 1e-2.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <h3 className="font-semibold mb-2">Early Stopping</h3>
              <p className="text-sm text-muted-foreground">
                Monitor validation loss, stop when it stops improving for N epochs (patience).
                Restore best checkpoint. Free regularization.
              </p>
            </CardContent>
          </Card>
        </div>

        <Card className="my-6 bg-accent/50 border-accent">
          <CardContent className="p-6">
            <h3 className="font-semibold mb-2">🎯 Practical Recipe</h3>
            <div className="text-sm text-muted-foreground space-y-1">
              <p>1. Start with Adam/AdamW, lr=3e-4, weight_decay=1e-2</p>
              <p>2. Use cosine learning rate schedule with warmup</p>
              <p>3. Add dropout (0.1) and batch/layer normalization</p>
              <p>4. Train until validation loss plateaus (early stopping)</p>
              <p>5. If SGD+momentum gives better results, switch and tune lr carefully</p>
            </div>
          </CardContent>
        </Card>

        <Card className="my-6 border-purple-500/20 bg-purple-500/5">
          <CardHeader><CardTitle className="text-lg">⚡ Quick Reference</CardTitle></CardHeader>
          <CardContent>
            <div className="grid gap-2 text-sm">
              <div className="flex items-start gap-2">
                <span className="font-mono text-xs bg-muted px-2 py-1 rounded">Adam</span>
                <span className="text-muted-foreground">Adaptive optimizer — default choice for DL</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="font-mono text-xs bg-muted px-2 py-1 rounded">Warmup</span>
                <span className="text-muted-foreground">Gradually increase LR at start of training</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="font-mono text-xs bg-muted px-2 py-1 rounded">Dropout</span>
                <span className="text-muted-foreground">Random zero-out during training for regularization</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="font-mono text-xs bg-muted px-2 py-1 rounded">BatchNorm</span>
                <span className="text-muted-foreground">Normalize activations per mini-batch</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </>
    )
  }
}
