import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Article } from './types'

export const neuralArticles: Record<string, Article> = {
  basics: {
    title: 'Neural Network Basics',
    content: (
      <>
        <p className="text-lg leading-relaxed mb-6">
          Neural networks are computing systems inspired by biological neural networks in the human brain. 
          They consist of interconnected nodes (neurons) that process information and learn from data 
          through adjustment of connection strengths (weights).
        </p>
        
        <h2 className="text-2xl font-bold mt-8 mb-4">The Biological Inspiration</h2>
        <p className="leading-relaxed mb-4">
          Just as biological neurons receive signals through dendrites, process them, and transmit outputs 
          through axons, artificial neurons receive inputs, apply weights and biases, pass through an 
          activation function, and produce outputs.
        </p>

        <Card className="my-6 bg-accent/50 border-accent">
          <CardContent className="p-6">
            <h3 className="font-semibold mb-2">Key Components of a Neuron</h3>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• <strong>Inputs:</strong> Data features or outputs from previous layer</li>
              <li>• <strong>Weights:</strong> Importance assigned to each input</li>
              <li>• <strong>Bias:</strong> Threshold adjustment for activation</li>
              <li>• <strong>Activation Function:</strong> Determines if neuron fires</li>
              <li>• <strong>Output:</strong> Result passed to next layer</li>
            </ul>
          </CardContent>
        </Card>

        <h2 className="text-2xl font-bold mt-8 mb-4">How a Single Neuron Works</h2>
        <p className="leading-relaxed mb-4">
          Each neuron performs a weighted sum of its inputs, adds a bias term, and applies an activation 
          function:
        </p>
        <div className="bg-muted p-4 rounded-lg mb-6 font-mono text-sm">
          output = activation(weights · inputs + bias)
        </div>

        <h2 className="text-2xl font-bold mt-8 mb-4">Common Activation Functions</h2>
        <div className="grid gap-4 my-6">
          <Card>
            <CardContent className="p-4">
              <h3 className="font-semibold mb-2">Sigmoid</h3>
              <p className="text-sm text-muted-foreground">
                Squashes values between 0 and 1. Useful for binary classification but suffers from vanishing gradient.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <h3 className="font-semibold mb-2">ReLU (Rectified Linear Unit)</h3>
              <p className="text-sm text-muted-foreground">
                Returns 0 for negative inputs, identity for positive. Most popular choice due to simplicity and effectiveness.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <h3 className="font-semibold mb-2">Tanh</h3>
              <p className="text-sm text-muted-foreground">
                Similar to sigmoid but ranges from -1 to 1. Zero-centered, which can help with training.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <h3 className="font-semibold mb-2">Softmax</h3>
              <p className="text-sm text-muted-foreground">
                Converts outputs to probabilities that sum to 1. Used in multi-class classification.
              </p>
            </CardContent>
          </Card>
        </div>

        <h2 className="text-2xl font-bold mt-8 mb-4">The Power of Layers</h2>
        <p className="leading-relaxed mb-4">
          By stacking multiple layers of neurons, neural networks can learn hierarchical representations 
          of data. Early layers capture simple patterns, while deeper layers combine these into complex 
          features.
        </p>

        <Card className="my-6 border-primary/20 bg-primary/5">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              📚 Comprehensive Guide
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-3">
              Foundation of deep learning - understand how artificial neurons mimic biological brains.
            </p>
            <ul className="text-sm space-y-1 text-muted-foreground">
              <li>✓ Biological vs artificial neurons</li>
              <li>✓ Activation function mathematics</li>
              <li>✓ Weight initialization strategies</li>
              <li>✓ Forward propagation mechanics</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="my-6 border-blue-500/20 bg-blue-500/5">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              🎯 Interactive Learning
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="bg-background p-3 rounded-lg border">
              <p className="text-sm font-medium mb-2">Calculate Neuron Output</p>
              <p className="text-xs text-muted-foreground mb-2">
                Given: Inputs = [0.5, 0.8], Weights = [0.3, 0.7], Bias = 0.1, Activation = ReLU
              </p>
              <div className="text-xs space-y-1 ml-2 mb-2">
                <div>1. Weighted sum = (0.5 × 0.3) + (0.8 × 0.7) + 0.1</div>
                <div>2. Weighted sum = 0.15 + 0.56 + 0.1 = 0.81</div>
                <div>3. ReLU(0.81) = max(0, 0.81) = 0.81</div>
              </div>
              <p className="text-xs text-muted-foreground italic">
                Try: What if bias was -1.0? Answer: ReLU(-0.19) = 0 (neuron doesn't fire)
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="my-6 border-green-500/20 bg-green-500/5">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              📊 Visual Explanations
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="bg-background p-4 rounded-lg border">
                <p className="text-sm font-medium mb-3">Activation Function Comparison</p>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="p-2 bg-muted rounded">
                    <strong>Sigmoid</strong><br/>
                    <span className="text-muted-foreground">S-curve, 0 to 1</span>
                  </div>
                  <div className="p-2 bg-muted rounded">
                    <strong>ReLU</strong><br/>
                    <span className="text-muted-foreground">0 for negative, linear for positive</span>
                  </div>
                  <div className="p-2 bg-muted rounded">
                    <strong>Tanh</strong><br/>
                    <span className="text-muted-foreground">S-curve, -1 to 1</span>
                  </div>
                  <div className="p-2 bg-muted rounded">
                    <strong>Softmax</strong><br/>
                    <span className="text-muted-foreground">Probability distribution</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="my-6 border-purple-500/20 bg-purple-500/5">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              ⚡ Quick Reference
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-3 text-sm">
              <div className="flex items-start gap-2">
                <span className="font-mono text-xs bg-muted px-2 py-1 rounded">Neuron</span>
                <span className="text-muted-foreground">Basic computational unit that processes inputs</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="font-mono text-xs bg-muted px-2 py-1 rounded">Weight</span>
                <span className="text-muted-foreground">Importance/strength of a connection</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="font-mono text-xs bg-muted px-2 py-1 rounded">Bias</span>
                <span className="text-muted-foreground">Threshold adjustment for activation</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="font-mono text-xs bg-muted px-2 py-1 rounded">Epoch</span>
                <span className="text-muted-foreground">One complete pass through training data</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </>
    )
  },
  architecture: {
    title: 'Network Architecture',
    content: (
      <>
        <p className="text-lg leading-relaxed mb-6">
          Neural network architecture refers to how neurons are organized into layers and connected. 
          Different architectures are suited for different types of problems and data.
        </p>
        
        <h2 className="text-2xl font-bold mt-8 mb-4">Layer Types</h2>
        <div className="space-y-4 my-6">
          <Card>
            <CardContent className="p-4">
              <h3 className="font-semibold mb-2">Input Layer</h3>
              <p className="text-sm text-muted-foreground">
                Receives raw data features. Number of neurons equals the number of input features.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <h3 className="font-semibold mb-2">Hidden Layers</h3>
              <p className="text-sm text-muted-foreground">
                Intermediate layers that extract features and learn representations. Deep networks have many hidden layers.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <h3 className="font-semibold mb-2">Output Layer</h3>
              <p className="text-sm text-muted-foreground">
                Produces final predictions. Structure depends on the task (single neuron for regression, multiple for classification).
              </p>
            </CardContent>
          </Card>
        </div>

        <h2 className="text-2xl font-bold mt-8 mb-4">Feedforward Neural Networks</h2>
        <p className="leading-relaxed mb-4">
          In feedforward networks, information flows in one direction from input to output. There are no 
          cycles or loops. This is the simplest architecture and forms the basis for more complex networks.
        </p>

        <Card className="my-6 bg-accent/50 border-accent">
          <CardContent className="p-6">
            <h3 className="font-semibold mb-2">Universal Approximation Theorem</h3>
            <p className="text-sm text-muted-foreground">
              A feedforward network with a single hidden layer containing a finite number of neurons can 
              approximate any continuous function, given appropriate activation functions and sufficient neurons.
            </p>
          </CardContent>
        </Card>

        <h2 className="text-2xl font-bold mt-8 mb-4">Deep vs. Shallow Networks</h2>
        <ul className="list-disc list-inside space-y-2 mb-6">
          <li><strong>Shallow Networks:</strong> One or two hidden layers. Simpler but limited capacity.</li>
          <li><strong>Deep Networks:</strong> Many hidden layers. Can learn complex hierarchical features but harder to train.</li>
        </ul>

        <h2 className="text-2xl font-bold mt-8 mb-4">Design Considerations</h2>
        <p className="leading-relaxed mb-4">
          When designing network architecture, consider:
        </p>
        <ul className="list-disc list-inside space-y-2 mb-6">
          <li>Number of layers (depth)</li>
          <li>Number of neurons per layer (width)</li>
          <li>Type of connections (fully connected, sparse, etc.)</li>
          <li>Activation functions for each layer</li>
          <li>Regularization techniques to prevent overfitting</li>
        </ul>

        <Card className="my-6 border-primary/20 bg-primary/5">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              📚 Comprehensive Guide
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-3">
              Design effective neural network architectures for different problem types.
            </p>
            <ul className="text-sm space-y-1 text-muted-foreground">
              <li>✓ Layer configuration strategies</li>
              <li>✓ Network depth vs width trade-offs</li>
              <li>✓ Connectivity patterns and their effects</li>
              <li>✓ Architecture search techniques</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="my-6 border-blue-500/20 bg-blue-500/5">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              🎯 Interactive Learning
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="bg-background p-3 rounded-lg border">
              <p className="text-sm font-medium mb-2">Design a Network</p>
              <p className="text-xs text-muted-foreground mb-2">
                Task: Classify 28×28 grayscale images into 10 digit classes (0-9).
              </p>
              <div className="text-xs space-y-1 ml-2 mb-2">
                <div><strong>Input:</strong> 784 features (28×28 pixels flattened)</div>
                <div><strong>Output:</strong> 10 classes (softmax)</div>
                <div><strong>Hidden:</strong> What architecture would you choose?</div>
              </div>
              <p className="text-xs text-muted-foreground italic">
                Tip: For image data, consider CNN architecture instead of fully connected layers.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="my-6 border-green-500/20 bg-green-500/5">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              📊 Visual Explanations
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="bg-background p-4 rounded-lg border">
              <p className="text-sm font-medium mb-3">Network Architecture Types</p>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="p-2 bg-primary/10 rounded">
                  <strong>Fully Connected</strong><br/>
                  <span className="text-muted-foreground">Every neuron connected to all in next layer</span>
                </div>
                <div className="p-2 bg-primary/10 rounded">
                  <strong>Convolutional</strong><br/>
                  <span className="text-muted-foreground">Local connections, shared weights</span>
                </div>
                <div className="p-2 bg-primary/10 rounded">
                  <strong>Recurrent</strong><br/>
                  <span className="text-muted-foreground">Feedback loops for sequences</span>
                </div>
                <div className="p-2 bg-primary/10 rounded">
                  <strong>Skip Connections</strong><br/>
                  <span className="text-muted-foreground">Bypass layers (ResNet)</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="my-6 border-purple-500/20 bg-purple-500/5">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              ⚡ Quick Reference
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-3 text-sm">
              <div className="flex items-start gap-2">
                <span className="font-mono text-xs bg-muted px-2 py-1 rounded">Depth</span>
                <span className="text-muted-foreground">Number of layers in the network</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="font-mono text-xs bg-muted px-2 py-1 rounded">Width</span>
                <span className="text-muted-foreground">Number of neurons per layer</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="font-mono text-xs bg-muted px-2 py-1 rounded">Parameters</span>
                <span className="text-muted-foreground">Total weights and biases to learn</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="font-mono text-xs bg-muted px-2 py-1 rounded">Capacity</span>
                <span className="text-muted-foreground">Model's ability to learn complex patterns</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </>
    )
  },
  training: {
    title: 'Training Techniques',
    content: (
      <>
        <p className="text-lg leading-relaxed mb-6">
          Training neural networks involves adjusting weights and biases to minimize the difference between 
          predicted and actual outputs. This process requires careful selection of algorithms, hyperparameters, 
          and optimization strategies.
        </p>
        
        <h2 className="text-2xl font-bold mt-8 mb-4">Backpropagation</h2>
        <p className="leading-relaxed mb-4">
          Backpropagation is the fundamental algorithm for training neural networks. It calculates gradients 
          of the loss function with respect to each weight by applying the chain rule of calculus, working 
          backward from the output layer.
        </p>
        <ol className="list-decimal list-inside space-y-2 mb-6">
          <li>Forward pass: Compute predictions</li>
          <li>Calculate loss: Measure prediction error</li>
          <li>Backward pass: Compute gradients</li>
          <li>Update weights: Adjust parameters using gradients</li>
        </ol>

        <Card className="my-6 bg-accent/50 border-accent">
          <CardContent className="p-6">
            <h3 className="font-semibold mb-2">Gradient Descent Variants</h3>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• <strong>Batch GD:</strong> Uses entire dataset for each update (slow but stable)</li>
              <li>• <strong>Stochastic GD:</strong> Uses one sample per update (fast but noisy)</li>
              <li>• <strong>Mini-batch GD:</strong> Uses small batches (best of both worlds)</li>
            </ul>
          </CardContent>
        </Card>

        <h2 className="text-2xl font-bold mt-8 mb-4">Optimization Algorithms</h2>
        <div className="grid gap-4 my-6">
          <Card>
            <CardContent className="p-4">
              <h3 className="font-semibold mb-2">SGD (Stochastic Gradient Descent)</h3>
              <p className="text-sm text-muted-foreground">
                Basic optimizer that updates weights using gradient and learning rate.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <h3 className="font-semibold mb-2">Adam</h3>
              <p className="text-sm text-muted-foreground">
                Adaptive optimizer that combines momentum and RMSProp. Most popular choice for deep learning.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <h3 className="font-semibold mb-2">RMSprop</h3>
              <p className="text-sm text-muted-foreground">
                Adapts learning rate for each parameter based on recent gradients.
              </p>
            </CardContent>
          </Card>
        </div>

        <h2 className="text-2xl font-bold mt-8 mb-4">Learning Rate</h2>
        <p className="leading-relaxed mb-4">
          The learning rate controls how much weights change during each update. Too high, and training 
          diverges; too low, and training is slow. Learning rate schedules gradually decrease the rate 
          during training.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">Regularization Techniques</h2>
        <ul className="list-disc list-inside space-y-2 mb-6">
          <li><strong>Dropout:</strong> Randomly deactivate neurons during training to prevent co-adaptation</li>
          <li><strong>L1/L2 Regularization:</strong> Add penalty terms to loss function to keep weights small</li>
          <li><strong>Batch Normalization:</strong> Normalize layer inputs to stabilize training</li>
          <li><strong>Early Stopping:</strong> Stop training when validation performance stops improving</li>
          <li><strong>Data Augmentation:</strong> artificially increase training data variety</li>
        </ul>

        <h2 className="text-2xl font-bold mt-8 mb-4">Best Practices</h2>
        <p className="leading-relaxed mb-4">
          Start with simple architectures, use proper weight initialization, monitor training and validation 
          curves, experiment with different optimizers, and use cross-validation to ensure generalization.
        </p>

        <Card className="my-6 border-primary/20 bg-primary/5">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              📚 Comprehensive Guide
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-3">
              Master the art and science of training neural networks effectively.
            </p>
            <ul className="text-sm space-y-1 text-muted-foreground">
              <li>✓ Backpropagation mathematics</li>
              <li>✓ Optimizer comparison and selection</li>
              <li>✓ Hyperparameter tuning strategies</li>
              <li>✓ Training debugging techniques</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="my-6 border-blue-500/20 bg-blue-500/5">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              🎯 Interactive Learning
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="bg-background p-3 rounded-lg border">
              <p className="text-sm font-medium mb-2">Training Scenario</p>
              <p className="text-xs text-muted-foreground mb-2">
                Your neural network has low training loss but high validation loss. What's happening?
              </p>
              <div className="text-xs space-y-1 ml-2 mb-2">
                <div>• Training accuracy: 98%</div>
                <div>• Validation accuracy: 72%</div>
                <div>• Gap: 26% difference</div>
              </div>
              <p className="text-xs font-medium mb-1">Diagnosis and solution?</p>
              <p className="text-xs text-muted-foreground italic">
                Answer: Overfitting! Try adding dropout, regularization, or getting more training data.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="my-6 border-green-500/20 bg-green-500/5">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              📊 Visual Explanations
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="bg-background p-4 rounded-lg border">
              <p className="text-sm font-medium mb-3">Learning Rate Effects</p>
              <div className="space-y-2 text-xs">
                <div className="flex items-center gap-2">
                  <div className="w-24 text-right font-medium">Too High:</div>
                  <div className="flex-1 p-2 bg-red-100 rounded">Oscillation, divergence, no convergence</div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-24 text-right font-medium">Just Right:</div>
                  <div className="flex-1 p-2 bg-green-100 rounded">Smooth convergence to minimum</div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-24 text-right font-medium">Too Low:</div>
                  <div className="flex-1 p-2 bg-yellow-100 rounded">Very slow convergence, may get stuck</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="my-6 border-purple-500/20 bg-purple-500/5">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              ⚡ Quick Reference
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-3 text-sm">
              <div className="flex items-start gap-2">
                <span className="font-mono text-xs bg-muted px-2 py-1 rounded">Backprop</span>
                <span className="text-muted-foreground">Algorithm to compute gradients for weight updates</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="font-mono text-xs bg-muted px-2 py-1 rounded">Learning Rate</span>
                <span className="text-muted-foreground">Step size for weight updates</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="font-mono text-xs bg-muted px-2 py-1 rounded">Batch Size</span>
                <span className="text-muted-foreground">Number of samples per gradient update</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="font-mono text-xs bg-muted px-2 py-1 rounded">Loss Function</span>
                <span className="text-muted-foreground">Measure of prediction error to minimize</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </>
    )
  }
}