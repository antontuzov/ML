import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Article } from './types'

export const deepLearningPracticeArticles: Record<string, Article> = {
  'representation-learning': {
    title: 'Representation Learning',
    estimatedTime: '20 min',
    difficulty: 'advanced',
    content: (
      <>
        <p className="text-lg leading-relaxed mb-6">
          Raw data (pixels, waveforms, characters) contains too much low-level signal for direct analysis.
          <strong> Representation learning</strong> transforms raw inputs into compact, informative vectors
          (embeddings) that capture semantic meaning and are useful for downstream tasks like search,
          classification, and recommendations.
        </p>

        <Card className="my-6 bg-accent/50 border-accent">
          <CardContent className="p-6">
            <h3 className="font-semibold mb-2">The Core Idea</h3>
            <p className="text-sm text-muted-foreground">
              A 3-minute audio track at 44kHz = 7,920,000 numbers. A learned embedding might be 256 numbers
              that capture genre, mood, tempo, and instrumentation. These embeddings enable "find similar tracks,"
              clustering, and recommendation — all from one compact vector.
            </p>
          </CardContent>
        </Card>

        <h2 className="text-2xl font-bold mt-8 mb-4">Neural Networks as Feature Extractors</h2>
        <p className="leading-relaxed mb-4">
          Any intermediate layer of a trained neural network produces representations. Deeper layers
          have larger <strong>receptive fields</strong> and respond to higher-level abstractions:
        </p>
        <div className="space-y-2 my-6">
          <Card><CardContent className="p-3">
            <p className="text-sm"><strong>Early layers:</strong> Edges, textures, low-level patterns (small receptive field)</p>
          </CardContent></Card>
          <Card><CardContent className="p-3">
            <p className="text-sm"><strong>Middle layers:</strong> Shapes, parts, intermediate features</p>
          </CardContent></Card>
          <Card><CardContent className="p-3">
            <p className="text-sm"><strong>Deep layers:</strong> Whole objects, semantic concepts (large receptive field)</p>
          </CardContent></Card>
        </div>

        <h2 className="text-2xl font-bold mt-8 mb-4">Supervised Pretraining</h2>
        <p className="leading-relaxed mb-4">
          Train on a large labeled dataset (e.g., ImageNet classification), then extract features
          from intermediate layers for downstream tasks:
        </p>
        <div className="space-y-2 my-6">
          <Card className="border-primary/20 bg-primary/5"><CardContent className="p-4">
            <h3 className="font-semibold mb-1">Step 1: Pretext task</h3>
            <p className="text-sm text-muted-foreground">
              Train on a large labeled dataset. For images: ImageNet (1000 classes, 1.3M images).
              For text: language modeling on The Pile (~825 GB).
            </p>
          </CardContent></Card>
          <Card className="border-primary/20 bg-primary/5"><CardContent className="p-4">
            <h3 className="font-semibold mb-1">Step 2: Extract features</h3>
            <p className="text-sm text-muted-foreground">
              Take activations from a deep layer. Aggregate spatial dimensions (global average pooling
              for images). Result: a fixed-size vector per object.
            </p>
          </CardContent></Card>
          <Card className="border-primary/20 bg-primary/5"><CardContent className="p-4">
            <h3 className="font-semibold mb-1">Step 3: Fine-tuning</h3>
            <p className="text-sm text-muted-foreground">
              Optionally fine-tune the network on your downstream task with a small labeled dataset.
              Use warmup learning rate schedule. Freeze early layers if data is very limited.
            </p>
          </CardContent></Card>
        </div>
        <Card className="my-6 bg-accent/50 border-accent">
          <CardContent className="p-6">
            <h3 className="font-semibold mb-2">Key Insight from Big Transfer (BiT)</h3>
            <div className="text-sm text-muted-foreground space-y-1">
              <p>• <strong>Bigger datasets:</strong> 14M (ImageNet-21k) → 300M (JFT) improves few-shot transfer</p>
              <p>• <strong>Bigger models:</strong> Must scale model size with data size</p>
              <p>• <strong>GroupNorm + Weight Standardization:</strong> Better than BatchNorm for small per-GPU batches</p>
            </div>
          </CardContent>
        </Card>

        <h2 className="text-2xl font-bold mt-8 mb-4">Self-Supervised Learning</h2>
        <p className="leading-relaxed mb-4">
          The key motivation: unlabeled data is abundant and cheap, while labels are expensive and noisy.
          Self-supervised learning creates <strong>pretext tasks</strong> where labels come from the data itself:
        </p>
        <div className="grid gap-4 my-6">
          <Card><CardContent className="p-4">
            <h3 className="font-semibold mb-2">Text: Masked Language Modeling</h3>
            <p className="text-sm text-muted-foreground">
              Predict masked words from context. BERT, GPT. Foundation of modern NLP.
            </p>
          </CardContent></Card>
          <Card><CardContent className="p-4">
            <h3 className="font-semibold mb-2">Image: Contrastive Learning (SimCLR)</h3>
            <p className="text-sm text-muted-foreground">
              Two augmentations of the same image should produce similar embeddings, different images should
              produce different ones. Uses contrastive loss: pull positives together, push negatives apart.
            </p>
          </CardContent></Card>
          <Card><CardContent className="p-4">
            <h3 className="font-semibold mb-2">Vision: Masked Autoencoders (MAE)</h3>
            <p className="text-sm text-muted-foreground">
              Mask 75% of image patches, reconstruct them. BERT-style pretraining for Vision Transformers.
            </p>
          </CardContent></Card>
        </div>

        <h2 className="text-2xl font-bold mt-8 mb-4">SimCLR: Contrastive Learning</h2>
        <Card className="my-6 border-primary/20 bg-primary/5">
          <CardContent className="p-6">
            <p className="text-sm text-muted-foreground mb-2">For each image in a mini-batch:</p>
            <ol className="text-xs text-muted-foreground space-y-1 list-decimal list-inside">
              <li>Generate two random augmentations (crop, color jitter, blur)</li>
              <li>Pass both through encoder f(·) → embeddings h<sub>i</sub>, h<sub>j</sub></li>
              <li>Project through MLP g(·) → projections z<sub>i</sub>, z<sub>j</sub></li>
              <li>Compute contrastive loss: pull z<sub>i</sub>, z<sub>j</sub> together, push apart from all other z's</li>
            </ol>
            <p className="font-mono text-xs bg-muted px-2 py-1 rounded inline-block mt-3">
              ℓ = −log [exp(sim(z<sub>i</sub>, z<sub>j</sub>)/τ) / Σ<sub>k≠i</sub> exp(sim(z<sub>i</sub>, z<sub>k</sub>)/τ)]
            </p>
            <p className="text-xs text-muted-foreground mt-1">τ is the temperature parameter controlling sharpness</p>
          </CardContent>
        </Card>

        <h2 className="text-2xl font-bold mt-8 mb-4">Metric Learning: Triplet Loss</h2>
        <p className="leading-relaxed mb-4">
          When you need embeddings where Euclidean distance reflects semantic similarity:
        </p>
        <Card className="my-6 border-primary/20 bg-primary/5">
          <CardContent className="p-6">
            <p className="font-mono text-sm text-center mb-2">
              L = max(0, ||f(x<sub>a</sub>) − f(x<sub>p</sub>)||² − ||f(x<sub>a</sub>) − f(x<sub>n</sub>)||² + α)
            </p>
            <p className="text-xs text-muted-foreground text-center">
              anchor x<sub>a</sub>, positive x<sub>p</sub>, negative x<sub>n</sub>, margin α.
              Pull anchor closer to positive, push away from negative.
            </p>
          </CardContent>
        </Card>
        <p className="leading-relaxed mb-4">
          <strong>Hard negative mining</strong> is critical — random triplets are too easy and provide
          little learning signal. Select negatives that are close to the anchor but from different classes.
        </p>

        <Card className="my-6 border-purple-500/20 bg-purple-500/5">
          <CardHeader><CardTitle className="text-lg">⚡ Quick Reference</CardTitle></CardHeader>
          <CardContent>
            <div className="grid gap-2 text-sm">
              <div className="flex items-start gap-2">
                <span className="font-mono text-xs bg-muted px-2 py-1 rounded">Embedding</span>
                <span className="text-muted-foreground">Compact vector representation of an object</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="font-mono text-xs bg-muted px-2 py-1 rounded">Pretext</span>
                <span className="text-muted-foreground">Pretraining task to learn representations</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="font-mono text-xs bg-muted px-2 py-1 rounded">Fine-tune</span>
                <span className="text-muted-foreground">Adapt pretrained model to downstream task</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="font-mono text-xs bg-muted px-2 py-1 rounded">SimCLR</span>
                <span className="text-muted-foreground">Contrastive learning: augment → encode → contrast</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </>
    )
  },

  'knowledge-distillation': {
    title: 'Knowledge Distillation',
    estimatedTime: '18 min',
    difficulty: 'advanced',
    content: (
      <>
        <p className="text-lg leading-relaxed mb-6">
          Knowledge distillation (Hinton et al., 2015) transfers knowledge from a large, accurate
          <strong> teacher</strong> model to a smaller, faster <strong>student</strong> model. The student
          learns not just from ground-truth labels, but from the teacher's "soft" predictions —
          which contain rich information about class relationships.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">Why Distillation?</h2>
        <Card className="my-6 bg-accent/50 border-accent">
          <CardContent className="p-6">
            <h3 className="font-semibold mb-2">The Deployment Problem</h3>
            <div className="text-sm text-muted-foreground space-y-1">
              <p>• Large models (BERT: 110M params, GPT: billions) are too slow for real-time inference</p>
              <p>• Mobile/edge devices have limited compute and memory</p>
              <p>• Pruning/quantization alone often degrades quality significantly</p>
              <p>• Distillation preserves quality while reducing model size 2-10×</p>
            </div>
          </CardContent>
        </Card>

        <h2 className="text-2xl font-bold mt-8 mb-4">Hinton's Distillation</h2>
        <p className="leading-relaxed mb-4">
          Use the teacher's soft predictions as training targets for the student:
        </p>
        <Card className="my-6 border-primary/20 bg-primary/5">
          <CardContent className="p-6">
            <p className="text-center font-mono text-sm mb-2">
              L<sub>KD</sub> = α · CE(y, p<sub>s</sub>) + (1−α) · T² · KL(p<sub>t</sub><sup>1/T</sup> || p<sub>s</sub><sup>1/T</sup>)
            </p>
            <p className="text-center text-xs text-muted-foreground">
              p<sub>t</sub> = teacher probabilities, p<sub>s</sub> = student probabilities, T = temperature, α = balance
            </p>
          </CardContent>
        </Card>

        <h2 className="text-2xl font-bold mt-8 mb-4">Dark Knowledge</h2>
        <p className="leading-relaxed mb-4">
          The teacher's soft predictions reveal relationships between classes that hard labels (one-hot)
          don't capture. For example, when classifying a BMW:
        </p>
        <Card className="my-6 border-primary/20 bg-primary/5">
          <CardContent className="p-6">
            <div className="text-sm text-muted-foreground space-y-1">
              <p>• Hard label: BMW = 1.0, Mercedes = 0.0, bicycle = 0.0</p>
              <p>• Soft label: BMW = 0.85, Mercedes = 0.12, bicycle = 0.001</p>
              <p className="mt-2">The soft label tells the student that BMW is similar to Mercedes
                but very different from a bicycle — this "dark knowledge" is incredibly valuable for learning.</p>
            </div>
          </CardContent>
        </Card>

        <h2 className="text-2xl font-bold mt-8 mb-4">Temperature Scaling</h2>
        <p className="leading-relaxed mb-4">
          Before computing KL divergence, soften both distributions with temperature T {'>'} 1:
        </p>
        <Card className="my-6 border-primary/20 bg-primary/5">
          <CardContent className="p-6">
            <p className="font-mono text-sm text-center mb-2">
              p<sub>i</sub><sup>T</sup> = exp(z<sub>i</sub>/T) / Σ<sub>j</sub> exp(z<sub>j</sub>/T)
            </p>
            <p className="text-xs text-muted-foreground text-center">
              T→∞ gives uniform distribution; T=1 gives standard softmax. Typical: T=3-20.
              Higher T reveals more structure in the "dark knowledge."
            </p>
          </CardContent>
        </Card>
        <p className="leading-relaxed mb-4">
          As T→∞, the gradient of KL divergence approaches the gradient of MSE between logits,
          so the student essentially tries to match the teacher's logit differences.
          The T² factor compensates for the gradient scaling.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">Beyond Output Distillation</h2>
        <div className="space-y-3 my-6">
          <Card><CardContent className="p-4">
            <h3 className="font-semibold mb-1">Hint Layers (FitNets)</h3>
            <p className="text-sm text-muted-foreground">
              Distill from intermediate layers too. Match student and teacher hidden states using
              MSE loss (with learned projection if dimensions differ). Multiple pairs for deep networks.
            </p>
          </CardContent></Card>
          <Card><CardContent className="p-4">
            <h3 className="font-semibold mb-1">Smart Initialization</h3>
            <p className="text-sm text-muted-foreground">
              Copy teacher weights to initialize student (when architectures allow). DistilBERT copies
              every other layer from BERT — this alone gains 3.5 percentage points vs random init.
            </p>
          </CardContent></Card>
          <Card><CardContent className="p-4">
            <h3 className="font-semibold mb-1">Online Distillation</h3>
            <p className="text-sm text-muted-foreground">
              Train teacher and student simultaneously (DML). Both models benefit from mutual distillation,
              even without a pretrained teacher. Generalizes to multi-model ensembles.
            </p>
          </CardContent></Card>
          <Card><CardContent className="p-4">
            <h3 className="font-semibold mb-1">Self-Distillation</h3>
            <p className="text-sm text-muted-foreground">
              Distill from a model into a fresh copy of itself. Surprisingly improves generalization!
              Born-Again Networks achieve better test accuracy than the teacher.
            </p>
          </CardContent></Card>
        </div>

        <h2 className="text-2xl font-bold mt-8 mb-4">Success Stories</h2>
        <div className="space-y-2 my-6">
          <Card><CardContent className="p-3">
            <p className="text-sm"><strong>DistilBERT:</strong> 97% of BERT quality, 40% fewer params, 60% faster inference</p>
          </CardContent></Card>
          <Card><CardContent className="p-3">
            <p className="text-sm"><strong>TinyBERT:</strong> 4× compression with 96% quality retention via layer + attention distillation</p>
          </CardContent></Card>
          <Card><CardContent className="p-3">
            <p className="text-sm"><strong>NoisyStudent (ImageNet):</strong> Self-distillation with noisy augmentations set SOTA at 88.4% top-1</p>
          </CardContent></Card>
          <Card><CardContent className="p-3">
            <p className="text-sm"><strong>BYOL:</strong> Self-supervised pretraining via distillation, no negative samples needed</p>
          </CardContent></Card>
        </div>

        <Card className="my-6 bg-accent/50 border-accent">
          <CardContent className="p-6">
            <h3 className="font-semibold mb-2">🎯 Open Questions</h3>
            <div className="text-sm text-muted-foreground space-y-1">
              <p>• Why does self-distillation (same architecture) improve generalization?</p>
              <p>• Why can a worse teacher sometimes produce a better student?</p>
              <p>• What exactly is the source of "dark knowledge" — class relationships or data manifold?</p>
            </div>
          </CardContent>
        </Card>

        <Card className="my-6 border-purple-500/20 bg-purple-500/5">
          <CardHeader><CardTitle className="text-lg">⚡ Quick Reference</CardTitle></CardHeader>
          <CardContent>
            <div className="grid gap-2 text-sm">
              <div className="flex items-start gap-2">
                <span className="font-mono text-xs bg-muted px-2 py-1 rounded">KD</span>
                <span className="text-muted-foreground">Transfer teacher's knowledge to smaller student</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="font-mono text-xs bg-muted px-2 py-1 rounded">Dark Knowledge</span>
                <span className="text-muted-foreground">Class relationships in soft predictions</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="font-mono text-xs bg-muted px-2 py-1 rounded">Temperature</span>
                <span className="text-muted-foreground">T {'>'} 1 softens distributions to reveal structure</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="font-mono text-xs bg-muted px-2 py-1 rounded">BYOL</span>
                <span className="text-muted-foreground">Self-supervised learning via exponential moving average distillation</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </>
    )
  }
}
