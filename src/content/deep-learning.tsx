import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Article } from './types'

export const deepLearningArticles: Record<string, Article> = {
  cnn: {
    title: 'Convolutional Neural Networks',
    content: (
      <>
        <p className="text-lg leading-relaxed mb-6">
          Convolutional Neural Networks (CNNs) are specialized neural networks designed for processing 
          grid-like data such as images. They automatically learn spatial hierarchies of features through 
          convolution operations.
        </p>
        
        <h2 className="text-2xl font-bold mt-8 mb-4">Why CNNs for Images?</h2>
        <p className="leading-relaxed mb-4">
          Traditional neural networks treat input as a flat vector, losing spatial structure. CNNs preserve 
          spatial relationships and exploit local patterns, making them ideal for image recognition tasks.
        </p>

        <Card className="my-6 bg-accent/50 border-accent">
          <CardContent className="p-6">
            <h3 className="font-semibold mb-2">Key Advantages</h3>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• Parameter sharing reduces model size</li>
              <li>• Translation invariance detects features anywhere</li>
              <li>• Hierarchical feature learning (edges → shapes → objects)</li>
              <li>• State-of-the-art performance on vision tasks</li>
            </ul>
          </CardContent>
        </Card>

        <h2 className="text-2xl font-bold mt-8 mb-4">Core Components</h2>
        <div className="space-y-4 my-6">
          <Card>
            <CardContent className="p-4">
              <h3 className="font-semibold mb-2">Convolutional Layers</h3>
              <p className="text-sm text-muted-foreground">
                Apply filters (kernels) that slide across the input to detect features like edges, textures, and patterns. Each filter learns to recognize specific features.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <h3 className="font-semibold mb-2">Pooling Layers</h3>
              <p className="text-sm text-muted-foreground">
                Reduce spatial dimensions while retaining important information. Max pooling takes the maximum value in each region, providing translation invariance.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <h3 className="font-semibold mb-2">Fully Connected Layers</h3>
              <p className="text-sm text-muted-foreground">
                Final layers that combine extracted features for classification or regression tasks.
              </p>
            </CardContent>
          </Card>
        </div>

        <h2 className="text-2xl font-bold mt-8 mb-4">How Convolution Works</h2>
        <p className="leading-relaxed mb-4">
          A filter (small matrix) slides across the input image, computing dot products at each position. 
          This produces a feature map highlighting where specific patterns occur.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">Popular CNN Architectures</h2>
        <ul className="list-disc list-inside space-y-2 mb-6">
          <li><strong>LeNet:</strong> Early CNN for digit recognition</li>
          <li><strong>AlexNet:</strong> Breakthrough architecture that won ImageNet 2012</li>
          <li><strong>VGG:</strong> Simple architecture with small 3×3 filters</li>
          <li><strong>ResNet:</strong> Introduced skip connections for very deep networks</li>
          <li><strong>Inception:</strong> Uses parallel convolutions with different filter sizes</li>
          <li><strong>EfficientNet:</strong> Optimized for efficiency and accuracy</li>
        </ul>

        <h2 className="text-2xl font-bold mt-8 mb-4">Applications Beyond Images</h2>
        <p className="leading-relaxed mb-4">
          CNNs are also used for video analysis, medical imaging, natural language processing (1D convolutions), 
          and even game playing (AlphaGo).
        </p>

        <Card className="my-6 border-primary/20 bg-primary/5">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              📚 Comprehensive Guide
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-3">
              Master computer vision with CNNs - from basic convolutions to state-of-the-art architectures.
            </p>
            <ul className="text-sm space-y-1 text-muted-foreground">
              <li>✓ Convolution mathematics and operations</li>
              <li>✓ Architecture design patterns</li>
              <li>✓ Transfer learning strategies</li>
              <li>✓ Data augmentation techniques</li>
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
              <p className="text-sm font-medium mb-2">Convolution Calculation</p>
              <p className="text-xs text-muted-foreground mb-2">
                Apply a 3×3 filter to an image patch:
              </p>
              <div className="grid grid-cols-3 gap-1 text-xs mb-2 max-w-[150px]">
                <div className="p-1 bg-muted text-center">1</div>
                <div className="p-1 bg-muted text-center">2</div>
                <div className="p-1 bg-muted text-center">0</div>
                <div className="p-1 bg-muted text-center">0</div>
                <div className="p-1 bg-muted text-center">1</div>
                <div className="p-1 bg-muted text-center">2</div>
                <div className="p-1 bg-muted text-center">2</div>
                <div className="p-1 bg-muted text-center">1</div>
                <div className="p-1 bg-muted text-center">0</div>
              </div>
              <p className="text-xs text-muted-foreground italic">
                Filter slides across image, computing dot product at each position to create feature map.
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
              <p className="text-sm font-medium mb-3">CNN Layer Hierarchy</p>
              <div className="space-y-2 text-xs">
                <div className="flex items-center gap-2">
                  <div className="w-24 text-right font-medium">Early Layers:</div>
                  <div className="flex-1 p-2 bg-primary/10 rounded">Edges, corners, simple textures</div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-24 text-right font-medium">Middle Layers:</div>
                  <div className="flex-1 p-2 bg-primary/10 rounded">Shapes, patterns, object parts</div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-24 text-right font-medium">Deep Layers:</div>
                  <div className="flex-1 p-2 bg-primary/10 rounded">Complete objects, complex features</div>
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
                <span className="font-mono text-xs bg-muted px-2 py-1 rounded">Kernel</span>
                <span className="text-muted-foreground">Small filter that detects specific features</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="font-mono text-xs bg-muted px-2 py-1 rounded">Stride</span>
                <span className="text-muted-foreground">How far filter moves at each step</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="font-mono text-xs bg-muted px-2 py-1 rounded">Padding</span>
                <span className="text-muted-foreground">Border pixels added to preserve size</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="font-mono text-xs bg-muted px-2 py-1 rounded">Pooling</span>
                <span className="text-muted-foreground">Downsamples feature maps (max/average)</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </>
    )
  },
  rnn: {
    title: 'Recurrent Neural Networks',
    content: (
      <>
        <p className="text-lg leading-relaxed mb-6">
          Recurrent Neural Networks (RNNs) are designed for sequential data where order matters. Unlike 
          feedforward networks, RNNs have connections that form cycles, allowing information to persist 
          across time steps.
        </p>
        
        <h2 className="text-2xl font-bold mt-8 mb-4">Understanding Sequential Data</h2>
        <p className="leading-relaxed mb-4">
          Many real-world problems involve sequences: text sentences, time series, speech audio, DNA sequences. 
          The context from previous elements influences the interpretation of current elements.
        </p>

        <Card className="my-6 bg-accent/50 border-accent">
          <CardContent className="p-6">
            <h3 className="font-semibold mb-2">Sequential Data Examples</h3>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• Natural language (words in a sentence)</li>
              <li>• Time series (stock prices over time)</li>
              <li>• Speech signals (audio samples)</li>
              <li>• Video frames (temporal sequences)</li>
            </ul>
          </CardContent>
        </Card>

        <h2 className="text-2xl font-bold mt-8 mb-4">The Recurrent Connection</h2>
        <p className="leading-relaxed mb-4">
          RNNs maintain a hidden state that acts as memory. At each time step, the network processes the 
          current input and the previous hidden state to produce a new hidden state and output.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">Challenges with Basic RNNs</h2>
        <ul className="list-disc list-inside space-y-2 mb-6">
          <li><strong>Vanishing Gradients:</strong> Gradients become extremely small over long sequences</li>
          <li><strong>Exploding Gradients:</strong> Gradients become extremely large, causing instability</li>
          <li><strong>Short-term Memory:</strong> Difficulty capturing long-range dependencies</li>
        </ul>

        <h2 className="text-2xl font-bold mt-8 mb-4">LSTM (Long Short-Term Memory)</h2>
        <p className="leading-relaxed mb-4">
          LSTMs solve the vanishing gradient problem using a sophisticated gating mechanism:
        </p>
        <div className="grid gap-4 my-6">
          <Card>
            <CardContent className="p-4">
              <h3 className="font-semibold mb-2">Forget Gate</h3>
              <p className="text-sm text-muted-foreground">
                Decides what information to discard from the cell state
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <h3 className="font-semibold mb-2">Input Gate</h3>
              <p className="text-sm text-muted-foreground">
                Determines what new information to store in the cell state
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <h3 className="font-semibold mb-2">Output Gate</h3>
              <p className="text-sm text-muted-foreground">
                Controls what parts of the cell state contribute to the output
              </p>
            </CardContent>
          </Card>
        </div>

        <h2 className="text-2xl font-bold mt-8 mb-4">GRU (Gated Recurrent Unit)</h2>
        <p className="leading-relaxed mb-4">
          GRUs are a simplified version of LSTMs with fewer gates. They combine the forget and input gates 
          into an update gate, making them faster to train while maintaining good performance.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">RNN Applications</h2>
        <ul className="list-disc list-inside space-y-2 mb-6">
          <li>Machine translation and language modeling</li>
          <li>Speech recognition and synthesis</li>
          <li>Time series forecasting</li>
          <li>Video captioning</li>
          <li>Music generation</li>
        </ul>

        <Card className="my-6 border-primary/20 bg-primary/5">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              📚 Comprehensive Guide
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-3">
              Master sequence modeling with RNNs, LSTMs, and GRUs for time series and NLP tasks.
            </p>
            <ul className="text-sm space-y-1 text-muted-foreground">
              <li>✓ Recurrent architecture fundamentals</li>
              <li>✓ LSTM vs GRU comparison</li>
              <li>✓ Sequence-to-sequence models</li>
              <li>✓ Bidirectional processing</li>
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
              <p className="text-sm font-medium mb-2">Sequence Prediction</p>
              <p className="text-xs text-muted-foreground mb-2">
                Given sequence: 1, 2, 4, 8, 16, ?
              </p>
              <div className="text-xs space-y-1 ml-2 mb-2">
                <div><strong>Pattern:</strong> Each number doubles the previous</div>
                <div><strong>RNN would learn:</strong> The relationship between consecutive elements</div>
                <div><strong>Prediction:</strong> 32</div>
              </div>
              <p className="text-xs text-muted-foreground italic">
                Try: What about 1, 1, 2, 3, 5, 8? Answer: Fibonacci sequence → 13
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
              <p className="text-sm font-medium mb-3">RNN vs LSTM Memory</p>
              <div className="space-y-2 text-xs">
                <div className="flex items-center gap-2">
                  <div className="w-20 text-right font-medium">RNN:</div>
                  <div className="flex-1 p-2 bg-red-100 rounded">Short memory, forgets old information quickly</div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-20 text-right font-medium">LSTM:</div>
                  <div className="flex-1 p-2 bg-green-100 rounded">Long memory, can retain information for hundreds of steps</div>
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
                <span className="font-mono text-xs bg-muted px-2 py-1 rounded">Hidden State</span>
                <span className="text-muted-foreground">Memory carried across time steps</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="font-mono text-xs bg-muted px-2 py-1 rounded">Cell State</span>
                <span className="text-muted-foreground">LSTM's long-term memory highway</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="font-mono text-xs bg-muted px-2 py-1 rounded">Gates</span>
                <span className="text-muted-foreground">Learned mechanisms to control information flow</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="font-mono text-xs bg-muted px-2 py-1 rounded">Time Steps</span>
                <span className="text-muted-foreground">Individual positions in the sequence</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </>
    )
  },
  transformers: {
    title: 'Transformers',
    content: (
      <>
        <p className="text-lg leading-relaxed mb-6">
          Transformers revolutionized natural language processing and have become the foundation of modern 
          AI. Introduced in 2017, they rely entirely on attention mechanisms, eliminating the need for 
          recurrence.
        </p>
        
        <h2 className="text-2xl font-bold mt-8 mb-4">The Attention Mechanism</h2>
        <p className="leading-relaxed mb-4">
          Attention allows the model to weigh the importance of different words in a sequence when processing 
          each word. Instead of processing sequentially like RNNs, transformers process all positions 
          simultaneously.
        </p>

        <Card className="my-6 bg-accent/50 border-accent">
          <CardContent className="p-6">
            <h3 className="font-semibold mb-2">Self-Attention</h3>
            <p className="text-sm text-muted-foreground">
              Each word attends to all other words in the sequence, creating contextual representations. 
              "Bank" in "river bank" vs. "bank account" gets different meanings based on context.
            </p>
          </CardContent>
        </Card>

        <h2 className="text-2xl font-bold mt-8 mb-4">Transformer Architecture</h2>
        <div className="space-y-4 my-6">
          <Card>
            <CardContent className="p-4">
              <h3 className="font-semibold mb-2">Encoder</h3>
              <p className="text-sm text-muted-foreground">
                Processes input sequence and creates rich representations. Contains multi-head self-attention and feed-forward layers.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <h3 className="font-semibold mb-2">Decoder</h3>
              <p className="text-sm text-muted-foreground">
                Generates output sequence one token at a time. Uses masked self-attention to prevent seeing future tokens.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <h3 className="font-semibold mb-2">Positional Encoding</h3>
              <p className="text-sm text-muted-foreground">
                Adds information about token positions since transformers don't process sequentially.
              </p>
            </CardContent>
          </Card>
        </div>

        <h2 className="text-2xl font-bold mt-8 mb-4">Multi-Head Attention</h2>
        <p className="leading-relaxed mb-4">
          Instead of single attention function, transformers use multiple attention heads in parallel. Each 
          head learns different aspects of relationships between words, providing richer representations.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">Transformer-Based Models</h2>
        <ul className="list-disc list-inside space-y-2 mb-6">
          <li><strong>BERT:</strong> Bidirectional encoder for understanding context</li>
          <li><strong>GPT:</strong> Generative pre-trained transformer for text generation</li>
          <li><strong>T5:</strong> Text-to-text transfer transformer</li>
          <li><strong>BART:</strong> Denoising autoencoder for text generation</li>
          <li><strong>ViT:</strong> Vision Transformer for image processing</li>
        </ul>

        <Card className="my-6 bg-accent/50 border-accent">
          <CardContent className="p-6">
            <h3 className="font-semibold mb-2">Why Transformers Dominated</h3>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• Parallel processing (faster training than RNNs)</li>
              <li>• Better capture of long-range dependencies</li>
              <li>• Scalable to massive datasets</li>
              <li>• Transfer learning capabilities</li>
              <li>• Versatile across different domains</li>
            </ul>
          </CardContent>
        </Card>

        <h2 className="text-2xl font-bold mt-8 mb-4">Beyond NLP</h2>
        <p className="leading-relaxed mb-4">
          Transformers now excel in computer vision (ViT), audio processing, protein folding (AlphaFold), 
          and even code generation. The architecture's flexibility makes it applicable to many sequential 
          and structured data problems.
        </p>

        <Card className="my-6 border-primary/20 bg-primary/5">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              📚 Comprehensive Guide
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-3">
              Master the architecture behind GPT, BERT, and modern AI systems.
            </p>
            <ul className="text-sm space-y-1 text-muted-foreground">
              <li>✓ Attention mechanism mathematics</li>
              <li>✓ Positional encoding strategies</li>
              <li>✓ Transfer learning and fine-tuning</li>
              <li>✓ Scaling laws and emergent abilities</li>
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
              <p className="text-sm font-medium mb-2">Attention in Action</p>
              <p className="text-xs text-muted-foreground mb-2">
                Sentence: "The cat sat on the mat"
              </p>
              <div className="text-xs space-y-1 ml-2 mb-2">
                <div><strong>When processing "sat":</strong></div>
                <div>• High attention to "cat" (subject)</div>
                <div>• Medium attention to "mat" (location)</div>
                <div>• Low attention to "the" (determiners)</div>
              </div>
              <p className="text-xs text-muted-foreground italic">
                The model learns which words are most relevant for understanding each word's meaning.
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
              <p className="text-sm font-medium mb-3">Transformer vs RNN Processing</p>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="p-2 bg-primary/10 rounded">
                  <strong>RNN:</strong><br/>
                  <span className="text-muted-foreground">Sequential (word by word)</span><br/>
                  <span className="text-muted-foreground">Slow, limited memory</span>
                </div>
                <div className="p-2 bg-primary/10 rounded">
                  <strong>Transformer:</strong><br/>
                  <span className="text-muted-foreground">Parallel (all words at once)</span><br/>
                  <span className="text-muted-foreground">Fast, unlimited context</span>
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
                <span className="font-mono text-xs bg-muted px-2 py-1 rounded">Attention</span>
                <span className="text-muted-foreground">Mechanism to weigh importance of different inputs</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="font-mono text-xs bg-muted px-2 py-1 rounded">Self-Attention</span>
                <span className="text-muted-foreground">Words attending to other words in same sequence</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="font-mono text-xs bg-muted px-2 py-1 rounded">Multi-Head</span>
                <span className="text-muted-foreground">Multiple parallel attention mechanisms</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="font-mono text-xs bg-muted px-2 py-1 rounded">Positional</span>
                <span className="text-muted-foreground">Encoding to preserve sequence order information</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </>
    )
  }
}