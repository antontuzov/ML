import { Card, CardContent } from '@/components/ui/card'
import { Article } from './types'

export const recommendationArticles: Record<string, Article> = {
  'recsys-intro': {
    title: 'Introduction to Recommendation Systems',
    estimatedTime: '12 min',
    difficulty: 'intermediate',
    content: (
      <>
        <p className="text-lg leading-relaxed mb-6">
          Recommendation systems predict user preferences and suggest items they're likely to enjoy.
          They're behind Netflix suggestions, Amazon product recommendations, Spotify playlists,
          and virtually every modern digital platform.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">Types of Recommendation</h2>
        <div className="space-y-4 my-6">
          <Card>
            <CardContent className="p-4">
              <h3 className="font-semibold mb-2">Collaborative Filtering</h3>
              <p className="text-sm text-muted-foreground">
                "Users who liked X also liked Y." Learns from user-item interactions without
                needing item metadata. Can be user-based or item-based.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <h3 className="font-semibold mb-2">Content-Based Filtering</h3>
              <p className="text-sm text-muted-foreground">
                Recommends items similar to what the user liked before, based on item features
                (genre, category, description, etc.).
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <h3 className="font-semibold mb-2">Hybrid Approaches</h3>
              <p className="text-sm text-muted-foreground">
                Combine collaborative and content-based methods. Most production systems use
                hybrid approaches for robustness.
              </p>
            </CardContent>
          </Card>
        </div>

        <h2 className="text-2xl font-bold mt-8 mb-4">The Cold Start Problem</h2>
        <p className="leading-relaxed mb-4">
          New users (no interaction history) and new items (no ratings) present a challenge.
          Solutions include using demographic data, content features, exploration strategies,
          and popularity-based fallbacks.
        </p>

        <Card className="my-6 bg-accent/50 border-accent">
          <CardContent className="p-6">
            <h3 className="font-semibold mb-2">Evaluation Metrics</h3>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• <strong>Precision@K:</strong> Fraction of top-K recommendations that are relevant</li>
              <li>• <strong>Recall@K:</strong> Fraction of relevant items found in top-K</li>
              <li>• <strong>NDCG:</strong> Considers position of relevant items in ranking</li>
              <li>• <strong>Serendipity:</strong> Measures surprising/diverse recommendations</li>
            </ul>
          </CardContent>
        </Card>
      </>
    )
  },
  'matrix-factorization': {
    title: 'Matrix Factorization',
    estimatedTime: '14 min',
    difficulty: 'advanced',
    content: (
      <>
        <p className="text-lg leading-relaxed mb-6">
          Matrix Factorization decomposes the user-item interaction matrix into lower-dimensional
          latent factor matrices. It was the winning approach in the Netflix Prize and remains
          foundational in recommendation systems.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">The Idea</h2>
        <p className="leading-relaxed mb-4">
          Given an m×n ratings matrix (m users, n items), factorize it into two smaller matrices:
          a user factors matrix (m×k) and an item factors matrix (n×k). The dot product of user
          and item vectors approximates the rating.
        </p>

        <Card className="my-6 bg-accent/50 border-accent">
          <CardContent className="p-6">
            <h3 className="font-semibold mb-2">Latent Factors</h3>
            <p className="text-sm text-muted-foreground">
              Each dimension of the latent space captures a hidden "taste axis." For movies, these
              might correspond to action level, comedy, romance, etc. — discovered automatically from data.
            </p>
          </CardContent>
        </Card>

        <h2 className="text-2xl font-bold mt-8 mb-4">Variants</h2>
        <ul className="list-disc list-inside space-y-2 mb-6">
          <li><strong>SVD:</strong> Singular Value Decomposition — classical factorization</li>
          <li><strong>ALS:</strong> Alternating Least Squares — efficient for sparse matrices</li>
          <li><strong>BPR:</strong> Bayesian Personalized Ranking — for implicit feedback</li>
          <li><strong>SVD++:</strong> Incorporates implicit feedback signals</li>
        </ul>

        <h2 className="text-2xl font-bold mt-8 mb-4">Deep Learning Approaches</h2>
        <p className="leading-relaxed mb-4">
          Neural Collaborative Filtering (NCF) replaces dot products with neural networks to capture
          non-linear user-item interactions. Two-tower models learn separate embeddings for users
          and items using deep networks.
        </p>
      </>
    )
  },
  'content-based': {
    title: 'Content-Based Recommendations',
    estimatedTime: '10 min',
    difficulty: 'intermediate',
    content: (
      <>
        <p className="text-lg leading-relaxed mb-6">
          Content-based systems recommend items similar to those a user has liked in the past,
          based on item attributes and features rather than other users' behavior.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">How It Works</h2>
        <ol className="list-decimal list-inside space-y-2 mb-6">
          <li>Create item profiles from features (text, category, metadata)</li>
          <li>Build user profiles from their interaction history</li>
          <li>Score items by similarity to user profile</li>
          <li>Rank and recommend top-scoring items</li>
        </ol>

        <h2 className="text-2xl font-bold mt-8 mb-4">Text-Based Features</h2>
        <p className="leading-relaxed mb-4">
          TF-IDF and word embeddings are common ways to represent text content. For articles,
          documents, or products with descriptions, cosine similarity in embedding space provides
          effective content matching.
        </p>

        <Card className="my-6 bg-accent/50 border-accent">
          <CardContent className="p-6">
            <h3 className="font-semibold mb-2">Advantages & Limitations</h3>
            <div className="grid grid-cols-2 gap-4 text-sm text-muted-foreground mt-2">
              <div>
                <strong>Advantages:</strong>
                <ul className="mt-1 space-y-1 text-xs">
                  <li>• No cold start for new items</li>
                  <li>• Transparent/explainable</li>
                  <li>• Independent of other users</li>
                </ul>
              </div>
              <div>
                <strong>Limitations:</strong>
                <ul className="mt-1 space-y-1 text-xs">
                  <li>• Limited serendipity</li>
                  <li>• Needs good item features</li>
                  <li>• Over-specialization</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </>
    )
  }
}
