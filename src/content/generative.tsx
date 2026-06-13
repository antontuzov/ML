import { Card, CardContent } from '@/components/ui/card'
import { Article } from './types'

export const generativeArticles: Record<string, Article> = {
  vae: {
    title: 'Variational Autoencoders (VAE)',
    estimatedTime: '14 min',
    difficulty: 'advanced',
    content: (
      <>
        <p className="text-lg leading-relaxed mb-6">
          Variational Autoencoders are generative models that learn a compressed latent representation
          of data. Unlike regular autoencoders, VAEs learn probability distributions, enabling them to
          generate new, realistic data samples.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">Autoencoder Recap</h2>
        <p className="leading-relaxed mb-4">
          A standard autoencoder encodes input to a latent vector and decodes it back. The goal is
          reconstruction. But the latent space may have gaps — points that don't correspond to real data.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">The VAE Innovation</h2>
        <p className="leading-relaxed mb-4">
          VAEs encode inputs as distributions (mean + variance) rather than fixed vectors. By sampling
          from these distributions and adding KL divergence regularization, the latent space becomes
          smooth, continuous, and suitable for generation.
        </p>

        <Card className="my-6 bg-accent/50 border-accent">
          <CardContent className="p-6">
            <h3 className="font-semibold mb-2">VAE Loss Function</h3>
            <div className="bg-background p-3 rounded font-mono text-sm text-center mb-2">
              Loss = Reconstruction Loss + KL Divergence
            </div>
            <p className="text-sm text-muted-foreground">
              Reconstruction loss ensures faithful decoding. KL divergence pushes the learned
              distribution toward a standard normal prior, making the latent space well-structured.
            </p>
          </CardContent>
        </Card>

        <h2 className="text-2xl font-bold mt-8 mb-4">Applications</h2>
        <ul className="list-disc list-inside space-y-2 mb-6">
          <li>Image generation and interpolation</li>
          <li>Anomaly detection (high reconstruction error = anomaly)</li>
          <li>Drug discovery (generate molecular structures)</li>
          <li>Data augmentation for training</li>
        </ul>
      </>
    )
  },
  gan: {
    title: 'Generative Adversarial Networks (GAN)',
    estimatedTime: '15 min',
    difficulty: 'advanced',
    content: (
      <>
        <p className="text-lg leading-relaxed mb-6">
          GANs pit two neural networks against each other: a Generator that creates fake data and
          a Discriminator that tries to distinguish real from fake. Through this adversarial game,
          the Generator learns to produce remarkably realistic data.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">The Adversarial Game</h2>
        <div className="grid gap-4 my-6">
          <Card>
            <CardContent className="p-4">
              <h3 className="font-semibold mb-2">Generator (G)</h3>
              <p className="text-sm text-muted-foreground">
                Takes random noise as input and produces synthetic data. Goal: fool the Discriminator.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <h3 className="font-semibold mb-2">Discriminator (D)</h3>
              <p className="text-sm text-muted-foreground">
                Takes real or generated data and outputs probability of being real. Goal: correctly classify.
              </p>
            </CardContent>
          </Card>
        </div>

        <Card className="my-6 bg-accent/50 border-accent">
          <CardContent className="p-6">
            <h3 className="font-semibold mb-2">Training Process</h3>
            <ol className="text-sm text-muted-foreground space-y-1 list-decimal list-inside">
              <li>Train D on batch of real data (label 1) and fake data (label 0)</li>
              <li>Freeze D, train G to produce data that D classifies as real</li>
              <li>Repeat until Nash equilibrium — G produces realistic data</li>
            </ol>
          </CardContent>
        </Card>

        <h2 className="text-2xl font-bold mt-8 mb-4">GAN Variants</h2>
        <ul className="list-disc list-inside space-y-2 mb-6">
          <li><strong>DCGAN:</strong> Uses convolutional layers for image generation</li>
          <li><strong>StyleGAN:</strong> Controls generation at different resolution levels</li>
          <li><strong>CycleGAN:</strong> Unpaired image-to-image translation</li>
          <li><strong>WGAN:</strong> Uses Wasserstein distance for stable training</li>
        </ul>

        <h2 className="text-2xl font-bold mt-8 mb-4">Training Challenges</h2>
        <p className="leading-relaxed mb-4">
          GANs are notoriously difficult to train. Common issues include mode collapse (Generator
          produces limited variety), training instability, and vanishing gradients. Techniques
          like spectral normalization, gradient penalty, and progressive growing help stabilize training.
        </p>
      </>
    )
  },
  diffusion: {
    title: 'Diffusion Models',
    estimatedTime: '16 min',
    difficulty: 'advanced',
    content: (
      <>
        <p className="text-lg leading-relaxed mb-6">
          Diffusion models generate data by learning to reverse a gradual noising process. Starting
          from pure noise, they iteratively denoise to produce high-quality samples. They've become
          the state-of-the-art for image generation, powering models like DALL-E, Stable Diffusion, and Midjourney.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">The Core Idea</h2>
        <p className="leading-relaxed mb-4">
          <strong>Forward process:</strong> Gradually add Gaussian noise to data over T steps until it becomes pure noise.
        </p>
        <p className="leading-relaxed mb-4">
          <strong>Reverse process:</strong> Train a neural network to predict and remove noise at each step,
          going from pure noise back to realistic data.
        </p>

        <Card className="my-6 bg-accent/50 border-accent">
          <CardContent className="p-6">
            <h3 className="font-semibold mb-2">Why Diffusion Models Excel</h3>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• More stable training than GANs (no adversarial game)</li>
              <li>• Higher quality and diversity of generated samples</li>
              <li>• Better coverage of the data distribution (no mode collapse)</li>
              <li>• Flexible — can condition on text, images, or other inputs</li>
            </ul>
          </CardContent>
        </Card>

        <h2 className="text-2xl font-bold mt-8 mb-4">Key Architectures</h2>
        <div className="space-y-4 my-6">
          <Card>
            <CardContent className="p-4">
              <h3 className="font-semibold mb-2">DDPM</h3>
              <p className="text-sm text-muted-foreground">
                Denoising Diffusion Probabilistic Models — the foundational framework for modern diffusion models.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <h3 className="font-semibold mb-2">Stable Diffusion</h3>
              <p className="text-sm text-muted-foreground">
                Operates in a compressed latent space (via VAE) for efficiency. Text-conditioned via CLIP embeddings.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <h3 className="font-semibold mb-2">DALL-E / Imagen</h3>
              <p className="text-sm text-muted-foreground">
                Text-to-image models that combine language understanding with diffusion-based generation.
              </p>
            </CardContent>
          </Card>
        </div>

        <h2 className="text-2xl font-bold mt-8 mb-4">Speed Improvements</h2>
        <p className="leading-relaxed mb-4">
          Standard diffusion requires hundreds of denoising steps. Techniques like DDIM sampling,
          distillation, and consistency models reduce this to as few as 1-4 steps, enabling real-time generation.
        </p>
      </>
    )
  }
}
