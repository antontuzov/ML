import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Article } from './types'

export const deepLearningArticles: Record<string, Article> = {
  cnn: {
    title: 'Convolutional Neural Networks',
    estimatedTime: '18 min',
    difficulty: 'intermediate',
    content: (
      <>
        <p className="text-lg leading-relaxed mb-6">
          CNNs exploit the spatial structure of images by using <strong>local connections</strong> and
          <strong> shared weights</strong>. Instead of connecting every neuron to every pixel, convolutional
          filters slide across the image, detecting local patterns (edges, textures, shapes) that compose
          into higher-level features.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">Why Not Fully Connected for Images?</h2>
        <Card className="my-6 bg-accent/50 border-accent">
          <CardContent className="p-6">
            <h3 className="font-semibold mb-2">The Problem</h3>
            <p className="text-sm text-muted-foreground">
              A 224×224 RGB image has 150,528 pixels. A fully connected layer with 1024 neurons would
              need 150,528 × 1024 ≈ 154M parameters — just for one layer. CNNs solve this with weight
              sharing: a 3×3 filter needs only 9 weights regardless of image size.
            </p>
          </CardContent>
        </Card>

        <h2 className="text-2xl font-bold mt-8 mb-4">Convolution Operation</h2>
        <p className="leading-relaxed mb-4">
          A filter (kernel) of size k×k slides across the input, computing dot products at each position:
        </p>
        <Card className="my-6 border-primary/20 bg-primary/5">
          <CardContent className="p-6">
            <p className="text-center font-mono text-sm mb-2">
              output[i,j] = Σ<sub>m,n</sub> input[i+m, j+n] · kernel[m,n] + bias
            </p>
            <p className="text-center text-xs text-muted-foreground">
              Output size: ⌊(W − k + 2p) / s⌋ + 1, where p=padding, s=stride
            </p>
          </CardContent>
        </Card>

        <h2 className="text-2xl font-bold mt-8 mb-4">Key Components</h2>
        <div className="space-y-3 my-6">
          <Card><CardContent className="p-4">
            <h3 className="font-semibold mb-1">Convolutional Layers</h3>
            <p className="text-sm text-muted-foreground">
              Extract local features using learnable filters. Early layers detect edges/textures,
              deeper layers detect shapes/objects. Multiple filters per layer produce multi-channel feature maps.
            </p>
          </CardContent></Card>
          <Card><CardContent className="p-4">
            <h3 className="font-semibold mb-1">Pooling Layers</h3>
            <p className="text-sm text-muted-foreground">
              Downsample feature maps (max pooling or average pooling). Reduces spatial dimensions
              and computation. Max pooling provides small translation invariance.
            </p>
          </CardContent></Card>
          <Card><CardContent className="p-4">
            <h3 className="font-semibold mb-1">1×1 Convolutions</h3>
            <p className="text-sm text-muted-foreground">
              "Network-in-network" — changes the number of channels without spatial operations.
              Used in Inception and ResNet for dimensionality reduction.
            </p>
          </CardContent></Card>
          <Card><CardContent className="p-4">
            <h3 className="font-semibold mb-1">Skip Connections (ResNet)</h3>
            <p className="text-sm text-muted-foreground">
              F(x) + x — adds the input directly to the output. Enables training of very deep networks
              (100+ layers) by providing gradient shortcuts.
            </p>
          </CardContent></Card>
        </div>

        <h2 className="text-2xl font-bold mt-8 mb-4">Architecture Evolution</h2>
        <div className="space-y-2 my-6">
          <Card><CardContent className="p-3">
            <p className="text-sm"><strong>LeNet (1998):</strong> First practical CNN. Digit recognition. 5×5 convs → pooling → FC.</p>
          </CardContent></Card>
          <Card><CardContent className="p-3">
            <p className="text-sm"><strong>AlexNet (2012):</strong> ImageNet breakthrough. ReLU, dropout, GPU training. 8 layers.</p>
          </CardContent></Card>
          <Card><CardContent className="p-3">
            <p className="text-sm"><strong>VGG (2014):</strong> Small 3×3 filters everywhere. Depth matters (16-19 layers). Simple & elegant.</p>
          </CardContent></Card>
          <Card><CardContent className="p-3">
            <p className="text-sm"><strong>ResNet (2015):</strong> Skip connections enable 152 layers. Won ImageNet. Foundation of modern vision.</p>
          </CardContent></Card>
          <Card><CardContent className="p-3">
            <p className="text-sm"><strong>EfficientNet (2019):</strong> Compound scaling — scale depth, width, and resolution together.</p>
          </CardContent></Card>
          <Card><CardContent className="p-3">
            <p className="text-sm"><strong>ViT (2020):</strong> Transformer architecture for images. Patches as tokens. Requires large data.</p>
          </CardContent></Card>
        </div>

        <Card className="my-6 border-purple-500/20 bg-purple-500/5">
          <CardHeader><CardTitle className="text-lg">⚡ Quick Reference</CardTitle></CardHeader>
          <CardContent>
            <div className="grid gap-2 text-sm">
              <div className="flex items-start gap-2">
                <span className="font-mono text-xs bg-muted px-2 py-1 rounded">Kernel</span>
                <span className="text-muted-foreground">Small learnable filter detecting local patterns</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="font-mono text-xs bg-muted px-2 py-1 rounded">Stride</span>
                <span className="text-muted-foreground">Step size of filter sliding (stride=2 halves spatial dims)</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="font-mono text-xs bg-muted px-2 py-1 rounded">Padding</span>
                <span className="text-muted-foreground">Border pixels to preserve output size</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="font-mono text-xs bg-muted px-2 py-1 rounded">Receptive Field</span>
                <span className="text-muted-foreground">Input region affecting a neuron's output</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </>
    )
  },

  rnn: {
    title: 'Sequence Models',
    estimatedTime: '16 min',
    difficulty: 'intermediate',
    content: (
      <>
        <p className="text-lg leading-relaxed mb-6">
          Recurrent neural networks process sequences by maintaining a hidden state that evolves over time.
          At each step t, the network takes the current input x<sub>t</sub> and previous state h<sub>t-1</sub>,
          producing a new state h<sub>t</sub> and optionally an output y<sub>t</sub>.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">The Recurrence</h2>
        <Card className="my-6 border-primary/20 bg-primary/5">
          <CardContent className="p-6">
            <p className="text-center font-mono text-sm mb-2">
              h<sub>t</sub> = tanh(W<sub>hh</sub> h<sub>t-1</sub> + W<sub>xh</sub> x<sub>t</sub> + b<sub>h</sub>)
            </p>
            <p className="text-center text-xs text-muted-foreground">
              The same weights are applied at every time step — parameter sharing across time
            </p>
          </CardContent>
        </Card>

        <h2 className="text-2xl font-bold mt-8 mb-4">The Gradient Problem</h2>
        <p className="leading-relaxed mb-4">
          Unrolling the recurrence over T steps creates a very deep computational graph. The gradient
          involves T matrix multiplications of W<sub>hh</sub>, which either <strong>vanish</strong> (if eigenvalues {'<'} 1)
          or <strong>explode</strong> (if eigenvalues {'>'} 1). This makes basic RNNs unable to learn long-range dependencies.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">LSTM & GRU</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
          <Card className="border-blue-500/20 bg-blue-500/5"><CardContent className="p-4">
            <h3 className="font-semibold mb-2 text-blue-600 dark:text-blue-400">LSTM</h3>
            <ul className="text-xs text-muted-foreground space-y-1">
              <li>• <strong>Cell state:</strong> information highway across time</li>
              <li>• <strong>Forget gate:</strong> what to discard from cell state</li>
              <li>• <strong>Input gate:</strong> what new info to store</li>
              <li>• <strong>Output gate:</strong> what to output from cell state</li>
              <li>• 4× more parameters than basic RNN</li>
            </ul>
          </CardContent></Card>
          <Card className="border-orange-500/20 bg-orange-500/5"><CardContent className="p-4">
            <h3 className="font-semibold mb-2 text-orange-600 dark:text-orange-400">GRU</h3>
            <ul className="text-xs text-muted-foreground space-y-1">
              <li>• <strong>Update gate:</strong> combines forget + input</li>
              <li>• <strong>Reset gate:</strong> how much past to forget</li>
              <li>• No separate cell state</li>
              <li>• 3× more parameters than basic RNN</li>
              <li>• Faster, comparable quality to LSTM</li>
            </ul>
          </CardContent></Card>
        </div>

        <h2 className="text-2xl font-bold mt-8 mb-4">Bidirectional Processing</h2>
        <p className="leading-relaxed mb-4">
          For tasks where the full sequence is available (e.g., text classification, named entity recognition),
          running RNNs in both directions captures both past and future context:
          h<sub>t</sub> = [h→<sub>t</sub>; h←<sub>t</sub>]. This was the foundation of BERT's predecessor, ELMo.
        </p>

        <Card className="my-6 bg-accent/50 border-accent">
          <CardContent className="p-6">
            <h3 className="font-semibold mb-2">⚠️ RNNs Are Being Replaced by Transformers</h3>
            <p className="text-sm text-muted-foreground">
              For most sequence tasks (NLP, time series), Transformers have largely replaced RNNs due to:
              parallel training, better long-range dependencies, and superior transfer learning.
              RNNs remain relevant for real-time/streaming applications and some time-series forecasting.
            </p>
          </CardContent>
        </Card>

        <Card className="my-6 border-purple-500/20 bg-purple-500/5">
          <CardHeader><CardTitle className="text-lg">⚡ Quick Reference</CardTitle></CardHeader>
          <CardContent>
            <div className="grid gap-2 text-sm">
              <div className="flex items-start gap-2">
                <span className="font-mono text-xs bg-muted px-2 py-1 rounded">RNN</span>
                <span className="text-muted-foreground">h<sub>t</sub> = f(h<sub>t-1</sub>, x<sub>t</sub>) — sequential processing</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="font-mono text-xs bg-muted px-2 py-1 rounded">LSTM</span>
                <span className="text-muted-foreground">Gated cell state for long-term memory</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="font-mono text-xs bg-muted px-2 py-1 rounded">BiRNN</span>
                <span className="text-muted-foreground">Process sequence in both directions</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </>
    )
  },

  transformers: {
    title: 'Transformers',
    estimatedTime: '20 min',
    difficulty: 'advanced',
    content: (
      <>
        <p className="text-lg leading-relaxed mb-6">
          Transformers (Vaswani et al., 2017 — "Attention Is All You Need") process sequences
          <strong> in parallel</strong> using self-attention, eliminating recurrence entirely.
          They've become the foundation of modern AI: GPT, BERT, LLaMA, ViT, and beyond.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">Self-Attention Mechanism</h2>
        <p className="leading-relaxed mb-4">
          For each token, compute attention scores against all other tokens:
        </p>
        <Card className="my-6 border-primary/20 bg-primary/5">
          <CardContent className="p-6">
            <p className="text-center font-mono text-sm mb-2">
              Attention(Q, K, V) = softmax(QK<sup>T</sup> / √d<sub>k</sub>) · V
            </p>
            <p className="text-center text-xs text-muted-foreground">
              Q, K, V are linear projections of input; √d<sub>k</sub> prevents attention scores from saturating
            </p>
          </CardContent>
        </Card>
        <p className="leading-relaxed mb-4">
          Each token "looks at" all other tokens and computes a weighted sum of their values.
          The weights come from the dot product of queries and keys — similar tokens attend
          more strongly to each other.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">Multi-Head Attention</h2>
        <p className="leading-relaxed mb-4">
          Instead of one attention function, use h parallel heads (typically 8-64). Each head learns
          different relationship types: syntax, semantics, position, etc.
        </p>
        <Card className="my-6 border-primary/20 bg-primary/5">
          <CardContent className="p-6">
            <p className="text-center font-mono text-sm">
              MultiHead(Q,K,V) = Concat(head<sub>1</sub>, ..., head<sub>h</sub>) · W<sup>O</sup>
            </p>
            <p className="text-center text-xs text-muted-foreground mt-2">
              Each head operates on d<sub>model</sub>/h dimensions
            </p>
          </CardContent>
        </Card>

        <h2 className="text-2xl font-bold mt-8 mb-4">Positional Encoding</h2>
        <p className="leading-relaxed mb-4">
          Since attention is permutation-invariant (doesn't know about order), we add positional
          information. Original paper used sinusoidal encodings; modern models use learned
          positional embeddings or rotary position embeddings (RoPE).
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">Transformer Architecture</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
          <Card className="border-blue-500/20 bg-blue-500/5"><CardContent className="p-4">
            <h3 className="font-semibold mb-2 text-blue-600 dark:text-blue-400">Encoder</h3>
            <ul className="text-xs text-muted-foreground space-y-1">
              <li>• Multi-head self-attention (bidirectional)</li>
              <li>• Feed-forward network (per-position)</li>
              <li>• Layer normalization + residual connections</li>
              <li>• Used by: BERT, ViT, encoder-only models</li>
            </ul>
          </CardContent></Card>
          <Card className="border-orange-500/20 bg-orange-500/5"><CardContent className="p-4">
            <h3 className="font-semibold mb-2 text-orange-600 dark:text-orange-400">Decoder</h3>
            <ul className="text-xs text-muted-foreground space-y-1">
              <li>• Masked self-attention (causal, left-to-right)</li>
              <li>• Cross-attention to encoder outputs</li>
              <li>• Feed-forward network</li>
              <li>• Used by: GPT, LLaMA, decoder-only models</li>
            </ul>
          </CardContent></Card>
        </div>

        <h2 className="text-2xl font-bold mt-8 mb-4">The Transformer Family</h2>
        <div className="space-y-2 my-6">
          <Card><CardContent className="p-3">
            <p className="text-sm"><strong>BERT (2018):</strong> Encoder-only, bidirectional, masked LM pretraining. Text understanding.</p>
          </CardContent></Card>
          <Card><CardContent className="p-3">
            <p className="text-sm"><strong>GPT-2/3/4 (2019–2023):</strong> Decoder-only, autoregressive. Text generation → AGI debate.</p>
          </CardContent></Card>
          <Card><CardContent className="p-3">
            <p className="text-sm"><strong>T5 (2020):</strong> Encoder-decoder, text-to-text framework. One model, all NLP tasks.</p>
          </CardContent></Card>
          <Card><CardContent className="p-3">
            <p className="text-sm"><strong>ViT (2020):</strong> Image patches as tokens. Transformer for vision. Needs large data or distillation.</p>
          </CardContent></Card>
          <Card><CardContent className="p-3">
            <p className="text-sm"><strong>LLaMA/Mistral (2023–):</strong> Open-weight LLMs. RoPE, SwiGLU, GQA, KV-cache.</p>
          </CardContent></Card>
        </div>

        <Card className="my-6 bg-accent/50 border-accent">
          <CardContent className="p-6">
            <h3 className="font-semibold mb-2">Why Transformers Won</h3>
            <div className="text-sm text-muted-foreground space-y-1">
              <p>• <strong>Parallel training:</strong> Process all positions simultaneously (no sequential bottleneck)</p>
              <p>• <strong>Long-range dependencies:</strong> Any token can attend to any other in O(1) steps</p>
              <p>• <strong>Scalability:</strong> Predictable scaling laws (Chinchilla) — bigger models + more data = better</p>
              <p>• <strong>Transfer learning:</strong> Pretrain once, fine-tune for any task</p>
            </div>
          </CardContent>
        </Card>

        <Card className="my-6 border-purple-500/20 bg-purple-500/5">
          <CardHeader><CardTitle className="text-lg">⚡ Quick Reference</CardTitle></CardHeader>
          <CardContent>
            <div className="grid gap-2 text-sm">
              <div className="flex items-start gap-2">
                <span className="font-mono text-xs bg-muted px-2 py-1 rounded">Self-Attn</span>
                <span className="text-muted-foreground">softmax(QK<sup>T</sup>/√d)V — parallel token interaction</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="font-mono text-xs bg-muted px-2 py-1 rounded">MHA</span>
                <span className="text-muted-foreground">Multiple attention heads in parallel</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="font-mono text-xs bg-muted px-2 py-1 rounded">KV-Cache</span>
                <span className="text-muted-foreground">Store past keys/values for efficient generation</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </>
    )
  },

  gnn: {
    title: 'Graph Neural Networks',
    estimatedTime: '18 min',
    difficulty: 'advanced',
    content: (
      <>
        <p className="text-lg leading-relaxed mb-6">
          Graph Neural Networks (GNNs) extend deep learning to graph-structured data. They generalize
          CNNs: if you represent image pixels as graph nodes connected to their neighbors, a GNN
          convolution becomes equivalent to a standard 2D convolution.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">Graph Data</h2>
        <p className="leading-relaxed mb-4">
          Graphs are everywhere: social networks, molecules, citation networks, knowledge graphs,
          recommendation systems, traffic networks, protein interactions. Each graph G = (V, E)
          consists of nodes V with features and edges E (optionally with features and types).
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">Tasks on Graphs</h2>
        <div className="grid gap-4 my-6">
          <Card><CardContent className="p-4">
            <h3 className="font-semibold mb-1">Node-level</h3>
            <p className="text-sm text-muted-foreground">
              Classify or predict properties of individual nodes. Example: predict user interests
              in a social graph based on friends' interests. Semi-supervised — only some nodes are labeled.
            </p>
          </CardContent></Card>
          <Card><CardContent className="p-4">
            <h3 className="font-semibold mb-1">Edge-level</h3>
            <p className="text-sm text-muted-foreground">
              Predict missing links or edge properties. Example: link prediction in social networks —
              "People You May Know."
            </p>
          </CardContent></Card>
          <Card><CardContent className="p-4">
            <h3 className="font-semibold mb-1">Graph-level</h3>
            <p className="text-sm text-muted-foreground">
              Classify or predict properties of entire graphs. Example: predict if a molecule is a drug
              candidate (molecular graph → bioactivity). Requires a readout/aggregation step.
            </p>
          </CardContent></Card>
        </div>

        <h2 className="text-2xl font-bold mt-8 mb-4">Message Passing Paradigm</h2>
        <p className="leading-relaxed mb-4">
          The core mechanism of spatial GNNs. Each node has a hidden state h<sub>v</sub>. At each layer,
          nodes aggregate messages from their neighbors:
        </p>
        <Card className="my-6 border-primary/20 bg-primary/5">
          <CardContent className="p-6">
            <p className="text-center font-mono text-sm mb-2">
              h<sub>v</sub><sup>(ℓ+1)</sup> = Update(h<sub>v</sub><sup>(ℓ)</sup>, Aggregate({'{'}h<sub>u</sub><sup>(ℓ)</sup> : u ∈ N(v){'}'}))
            </p>
            <p className="text-center text-xs text-muted-foreground">
              After L layers, each node has information from its L-hop neighborhood
            </p>
          </CardContent>
        </Card>

        <h2 className="text-2xl font-bold mt-8 mb-4">Popular GNN Architectures</h2>
        <div className="space-y-3 my-6">
          <Card><CardContent className="p-4">
            <h3 className="font-semibold mb-1">GCN (Graph Convolutional Network)</h3>
            <p className="text-sm text-muted-foreground">
              Spectral approach: H<sup>(ℓ+1)</sup> = σ(D̃<sup>-½</sup> Ã D̃<sup>-½</sup> H<sup>(ℓ)</sup> W<sup>(ℓ)</sup>),
              where Ã = A + I (adjacency with self-loops) and D̃ is the degree matrix.
              Simple, effective, widely used for node classification.
            </p>
          </CardContent></Card>
          <Card><CardContent className="p-4">
            <h3 className="font-semibold mb-1">GraphSAGE</h3>
            <p className="text-sm text-muted-foreground">
              Samples and aggregates neighbor features (mean, LSTM, or pool). Inductive — can generalize
              to unseen nodes. Scalable to billion-edge graphs via neighbor sampling.
            </p>
          </CardContent></Card>
          <Card><CardContent className="p-4">
            <h3 className="font-semibold mb-1">GAT (Graph Attention Network)</h3>
            <p className="text-sm text-muted-foreground">
              Uses attention weights α<sub>vu</sub> to weight neighbor contributions. Each node decides
              which neighbors are most important. Multi-head attention for stability.
            </p>
          </CardContent></Card>
          <Card><CardContent className="p-4">
            <h3 className="font-semibold mb-1">RGCN (Relational GCN)</h3>
            <p className="text-sm text-muted-foreground">
              Handles heterogeneous graphs with multiple edge types. Uses type-specific weight matrices.
              Key for knowledge graph completion and reasoning.
            </p>
          </CardContent></Card>
        </div>

        <Card className="my-6 bg-accent/50 border-accent">
          <CardContent className="p-6">
            <h3 className="font-semibold mb-2">🎯 Key Properties</h3>
            <div className="text-sm text-muted-foreground space-y-1">
              <p>• <strong>Permutation invariant:</strong> Results don't depend on node ordering</p>
              <p>• <strong>Variable size:</strong> Handle graphs of different sizes naturally</p>
              <p>• <strong>Receptive field:</strong> After L layers = L-hop neighborhood (design L accordingly)</p>
              <p>• <strong>Normalization:</strong> Use LayerNorm or GraphNorm (not BatchNorm) for varying graph sizes</p>
            </div>
          </CardContent>
        </Card>

        <Card className="my-6 border-purple-500/20 bg-purple-500/5">
          <CardHeader><CardTitle className="text-lg">⚡ Quick Reference</CardTitle></CardHeader>
          <CardContent>
            <div className="grid gap-2 text-sm">
              <div className="flex items-start gap-2">
                <span className="font-mono text-xs bg-muted px-2 py-1 rounded">GNN</span>
                <span className="text-muted-foreground">Neural networks for graph-structured data</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="font-mono text-xs bg-muted px-2 py-1 rounded">MPNN</span>
                <span className="text-muted-foreground">Message Passing Neural Network — general GNN framework</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="font-mono text-xs bg-muted px-2 py-1 rounded">GCN</span>
                <span className="text-muted-foreground">Spectral graph convolution using normalized Laplacian</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="font-mono text-xs bg-muted px-2 py-1 rounded">GAT</span>
                <span className="text-muted-foreground">Attention-weighted neighbor aggregation</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </>
    )
  },

  'point-clouds': {
    title: 'Point Cloud Networks',
    estimatedTime: '14 min',
    difficulty: 'advanced',
    content: (
      <>
        <p className="text-lg leading-relaxed mb-6">
          Point clouds are unordered sets of 3D points, each with coordinates (x,y,z) and optional
          features (color, intensity, normals). They arise from LiDAR scanners, depth cameras, and
          3D reconstruction. Unlike images or voxels, point clouds have no grid structure.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">The Challenge</h2>
        <Card className="my-6 bg-accent/50 border-accent">
          <CardContent className="p-6">
            <h3 className="font-semibold mb-2">Why Standard CNNs Fail</h3>
            <div className="text-sm text-muted-foreground space-y-1">
              <p>• Points are <strong>unordered</strong> — there's no natural grid to apply convolutions on</p>
              <p>• Point sets have <strong>variable size</strong> — different scans have different numbers of points</p>
              <p>• Must be <strong>permutation invariant</strong> — shuffling point order shouldn't change the output</p>
              <p>• Must handle <strong>irregular spacing</strong> — points aren't uniformly distributed</p>
            </div>
          </CardContent>
        </Card>

        <h2 className="text-2xl font-bold mt-8 mb-4">Approaches</h2>
        <div className="space-y-3 my-6">
          <Card className="border-primary/20 bg-primary/5"><CardContent className="p-4">
            <h3 className="font-semibold mb-1">PointNet (2017)</h3>
            <p className="text-sm text-muted-foreground mb-1">
              Process each point independently with shared MLPs, then aggregate globally with max pooling:
            </p>
            <p className="font-mono text-xs bg-muted px-2 py-1 rounded inline-block">
              f(P) = γ(max{'{'}h(p<sub>i</sub>) : i=1,...,n{'}'})
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              Simple, elegant, permutation invariant. But ignores local structure — no neighborhood information.
            </p>
          </CardContent></Card>
          <Card className="border-primary/20 bg-primary/5"><CardContent className="p-4">
            <h3 className="font-semibold mb-1">PointNet++ (2017)</h3>
            <p className="text-sm text-muted-foreground">
              Hierarchical PointNet: sample centroids, group neighbors, apply PointNet locally,
              then propagate features upward. Captures multi-scale local structure.
            </p>
          </CardContent></Card>
          <Card className="border-primary/20 bg-primary/5"><CardContent className="p-4">
            <h3 className="font-semibold mb-1">Point Transformer (2021)</h3>
            <p className="text-sm text-muted-foreground">
              Self-attention on point neighborhoods. Each point attends to its k nearest neighbors
              using position-aware attention. State-of-the-art for semantic segmentation.
            </p>
          </CardContent></Card>
          <Card className="border-primary/20 bg-primary/5"><CardContent className="p-4">
            <h3 className="font-semibold mb-1">Voxelization + 3D CNN</h3>
            <p className="text-sm text-muted-foreground">
              Convert points to 3D voxel grid, then apply 3D convolutions. Simple but memory-intensive
              (resolution cubed). Sparse convolutions (Minkowski Engine) solve the sparsity problem.
            </p>
          </CardContent></Card>
        </div>

        <h2 className="text-2xl font-bold mt-8 mb-4">Applications</h2>
        <div className="grid gap-4 my-6">
          <Card><CardContent className="p-4">
            <h3 className="font-semibold mb-1">Autonomous Driving</h3>
            <p className="text-sm text-muted-foreground">
              LiDAR point cloud → 3D object detection (cars, pedestrians). Critical for self-driving cars.
            </p>
          </CardContent></Card>
          <Card><CardContent className="p-4">
            <h3 className="font-semibold mb-1">3D Reconstruction</h3>
            <p className="text-sm text-muted-foreground">
              Multi-view images → point cloud → mesh. Used in AR/VR, digital twins, cultural heritage.
            </p>
          </CardContent></Card>
          <Card><CardContent className="p-4">
            <h3 className="font-semibold mb-1">Robotics</h3>
            <p className="text-sm text-muted-foreground">
              Scene understanding, grasp detection, manipulation planning from depth sensor data.
            </p>
          </CardContent></Card>
        </div>

        <Card className="my-6 border-purple-500/20 bg-purple-500/5">
          <CardHeader><CardTitle className="text-lg">⚡ Quick Reference</CardTitle></CardHeader>
          <CardContent>
            <div className="grid gap-2 text-sm">
              <div className="flex items-start gap-2">
                <span className="font-mono text-xs bg-muted px-2 py-1 rounded">PointNet</span>
                <span className="text-muted-foreground">Shared MLP + global max pool — permutation invariant</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="font-mono text-xs bg-muted px-2 py-1 rounded">PointNet++</span>
                <span className="text-muted-foreground">Hierarchical local feature learning</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="font-mono text-xs bg-muted px-2 py-1 rounded">Sparse Conv</span>
                <span className="text-muted-foreground">3D CNN on voxelized clouds, efficient for sparse data</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </>
    )
  }
}
