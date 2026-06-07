import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Article } from './types'

export const unsupervisedArticles: Record<string, Article> = {
  clustering: {
    title: 'Clustering',
    content: (
      <>
        <p className="text-lg leading-relaxed mb-6">
          Clustering is an unsupervised learning technique that groups similar data points together 
          based on their features. Unlike classification, there are no predefined labels—the algorithm 
          discovers the natural groupings in the data.
        </p>
        
        <h2 className="text-2xl font-bold mt-8 mb-4">How Clustering Works</h2>
        <p className="leading-relaxed mb-4">
          Clustering algorithms measure similarity between data points using distance metrics. Points 
          that are close together in feature space are grouped into the same cluster, while points 
          far apart belong to different clusters.
        </p>

        <Card className="my-6 bg-accent/50 border-accent">
          <CardContent className="p-6">
            <h3 className="font-semibold mb-2">Common Applications</h3>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• Customer segmentation for targeted marketing</li>
              <li>• Document grouping by topic</li>
              <li>• Image segmentation in computer vision</li>
              <li>• Anomaly detection in network security</li>
              <li>• Gene sequence analysis in bioinformatics</li>
            </ul>
          </CardContent>
        </Card>

        <h2 className="text-2xl font-bold mt-8 mb-4">K-Means Clustering</h2>
        <p className="leading-relaxed mb-4">
          K-Means is one of the most popular clustering algorithms. It partitions data into K clusters 
          by iteratively assigning points to the nearest centroid and updating centroids based on 
          assigned points.
        </p>
        <ul className="list-disc list-inside space-y-2 mb-6">
          <li>Simple and efficient for large datasets</li>
          <li>Requires specifying the number of clusters (K) in advance</li>
          <li>Works best with spherical clusters of similar size</li>
          <li>Sensitive to initial centroid placement</li>
        </ul>

        <h2 className="text-2xl font-bold mt-8 mb-4">Hierarchical Clustering</h2>
        <p className="leading-relaxed mb-4">
          Hierarchical clustering creates a tree-like structure (dendrogram) of clusters. It can be 
          agglomerative (bottom-up) or divisive (top-down).
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">DBSCAN</h2>
        <p className="leading-relaxed mb-4">
          DBSCAN (Density-Based Spatial Clustering) identifies clusters based on density. It can find 
          arbitrarily shaped clusters and detect outliers effectively.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">Choosing the Number of Clusters</h2>
        <p className="leading-relaxed mb-4">
          Methods like the Elbow Method and Silhouette Score help determine the optimal number of 
          clusters by evaluating cluster compactness and separation.
        </p>

        <Card className="my-6 border-primary/20 bg-primary/5">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              📚 Comprehensive Guide
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-3">
              Complete guide to unsupervised learning techniques for discovering hidden patterns.
            </p>
            <ul className="text-sm space-y-1 text-muted-foreground">
              <li>✓ Algorithm selection based on data characteristics</li>
              <li>✓ Distance metrics and similarity measures</li>
              <li>✓ Cluster validation and evaluation</li>
              <li>✓ Scaling to large datasets</li>
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
              <p className="text-sm font-medium mb-2">Hands-on: Customer Segmentation</p>
              <p className="text-xs text-muted-foreground mb-2">
                You have customer data with: Age, Income, Purchase Frequency, Average Order Value.
              </p>
              <p className="text-xs font-medium mb-1">Which clustering approach?</p>
              <ul className="text-xs space-y-1 ml-4 mb-2">
                <li>□ K-Means (fast, needs K specified)</li>
                <li>□ DBSCAN (finds arbitrary shapes, detects outliers)</li>
                <li>□ Hierarchical (no K needed, dendrogram visualization)</li>
              </ul>
              <p className="text-xs text-muted-foreground italic">
                Tip: Start with K-Means for speed, use Elbow Method to find optimal K.
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
              <p className="text-sm font-medium mb-3">K-Means Iteration Process</p>
              <div className="space-y-2 text-xs">
                <div className="flex items-center gap-2">
                  <div className="w-16 text-right font-medium">Step 1:</div>
                  <div className="flex-1 p-2 bg-primary/10 rounded">Initialize K centroids randomly</div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-16 text-right font-medium">Step 2:</div>
                  <div className="flex-1 p-2 bg-primary/10 rounded">Assign points to nearest centroid</div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-16 text-right font-medium">Step 3:</div>
                  <div className="flex-1 p-2 bg-primary/10 rounded">Update centroids to cluster means</div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-16 text-right font-medium">Repeat:</div>
                  <div className="flex-1 p-2 bg-primary/10 rounded">Until convergence (no changes)</div>
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
                <span className="font-mono text-xs bg-muted px-2 py-1 rounded">K-Means</span>
                <span className="text-muted-foreground">Fast, spherical clusters, specify K</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="font-mono text-xs bg-muted px-2 py-1 rounded">DBSCAN</span>
                <span className="text-muted-foreground">Density-based, finds outliers, no K needed</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="font-mono text-xs bg-muted px-2 py-1 rounded">Centroid</span>
                <span className="text-muted-foreground">Center point of a cluster</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="font-mono text-xs bg-muted px-2 py-1 rounded">Elbow Method</span>
                <span className="text-muted-foreground">Plot inertia vs K to find optimal clusters</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </>
    )
  },
  dimensionality: {
    title: 'Dimensionality Reduction',
    content: (
      <>
        <p className="text-lg leading-relaxed mb-6">
          Dimensionality reduction techniques reduce the number of features in a dataset while 
          preserving as much important information as possible. This helps combat the "curse of 
          dimensionality" and improves model performance.
        </p>
        
        <h2 className="text-2xl font-bold mt-8 mb-4">Why Reduce Dimensions?</h2>
        <ul className="list-disc list-inside space-y-2 mb-6">
          <li>Reduces computational complexity and training time</li>
          <li>Removes redundant or irrelevant features</li>
          <li>Helps visualize high-dimensional data</li>
          <li>Reduces overfitting by simplifying the model</li>
          <li>Improves model interpretability</li>
        </ul>

        <Card className="my-6 bg-accent/50 border-accent">
          <CardContent className="p-6">
            <h3 className="font-semibold mb-2">The Curse of Dimensionality</h3>
            <p className="text-sm text-muted-foreground">
              As the number of features increases, the amount of data needed to generalize accurately 
              grows exponentially. High-dimensional spaces become sparse, making it difficult for 
              algorithms to find meaningful patterns.
            </p>
          </CardContent>
        </Card>

        <h2 className="text-2xl font-bold mt-8 mb-4">Principal Component Analysis (PCA)</h2>
        <p className="leading-relaxed mb-4">
          PCA transforms data into a new coordinate system where the greatest variance lies on the 
          first axis (principal component), the second greatest on the second axis, and so on.
        </p>
        <ul className="list-disc list-inside space-y-2 mb-6">
          <li>Linear transformation technique</li>
          <li>Preserves maximum variance in fewer dimensions</li>
          <li>Components are orthogonal (uncorrelated)</li>
          <li>Widely used for data compression and visualization</li>
        </ul>

        <h2 className="text-2xl font-bold mt-8 mb-4">t-SNE (t-Distributed Stochastic Neighbor Embedding)</h2>
        <p className="leading-relaxed mb-4">
          t-SNE is particularly effective for visualizing high-dimensional data in 2D or 3D. It 
          preserves local structures, making similar points stay close together.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">Other Techniques</h2>
        <div className="grid gap-4 my-6">
          <Card>
            <CardContent className="p-4">
              <h3 className="font-semibold mb-2">Linear Discriminant Analysis (LDA)</h3>
              <p className="text-sm text-muted-foreground">
                Supervised technique that maximizes class separability while reducing dimensions
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <h3 className="font-semibold mb-2">UMAP</h3>
              <p className="text-sm text-muted-foreground">
                Modern alternative to t-SNE that's faster and preserves more global structure
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <h3 className="font-semibold mb-2">Autoencoders</h3>
              <p className="text-sm text-muted-foreground">
                Neural network-based approach for non-linear dimensionality reduction
              </p>
            </CardContent>
          </Card>
        </div>

        <Card className="my-6 border-primary/20 bg-primary/5">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              📚 Comprehensive Guide
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-3">
              Master techniques to simplify complex datasets while preserving information.
            </p>
            <ul className="text-sm space-y-1 text-muted-foreground">
              <li>✓ PCA mathematics and implementation</li>
              <li>✓ Linear vs non-linear methods</li>
              <li>✓ Choosing number of components</li>
              <li>✓ Visualization in reduced dimensions</li>
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
              <p className="text-sm font-medium mb-2">Dimensionality Decision</p>
              <p className="text-xs text-muted-foreground mb-2">
                You have a dataset with 100 features. PCA shows:
              </p>
              <div className="text-xs space-y-1 ml-2 mb-2">
                <div>• First 10 components capture 85% variance</div>
                <div>• First 20 components capture 95% variance</div>
                <div>• First 50 components capture 99% variance</div>
              </div>
              <p className="text-xs font-medium mb-1">How many components would you keep?</p>
              <p className="text-xs text-muted-foreground italic">
                Tip: Balance between information retention (95%) and simplicity (20 vs 100 features).
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
              <p className="text-sm font-medium mb-3">PCA Transformation Process</p>
              <div className="space-y-2 text-xs">
                <div className="flex items-center gap-2">
                  <div className="w-28 text-right font-medium">Original Data:</div>
                  <div className="flex-1 p-2 bg-primary/10 rounded">High-dimensional cloud of points</div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-28 text-right font-medium">Find Axes:</div>
                  <div className="flex-1 p-2 bg-primary/10 rounded">Directions of maximum variance</div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-28 text-right font-medium">Project:</div>
                  <div className="flex-1 p-2 bg-primary/10 rounded">Map data onto principal components</div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-28 text-right font-medium">Result:</div>
                  <div className="flex-1 p-2 bg-primary/10 rounded">Lower-dimensional representation</div>
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
                <span className="font-mono text-xs bg-muted px-2 py-1 rounded">PCA</span>
                <span className="text-muted-foreground">Principal Component Analysis - linear method</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="font-mono text-xs bg-muted px-2 py-1 rounded">t-SNE</span>
                <span className="text-muted-foreground">Non-linear visualization technique</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="font-mono text-xs bg-muted px-2 py-1 rounded">Variance</span>
                <span className="text-muted-foreground">Amount of information preserved</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="font-mono text-xs bg-muted px-2 py-1 rounded">Components</span>
                <span className="text-muted-foreground">New orthogonal features created</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </>
    )
  },
  anomaly: {
    title: 'Anomaly Detection',
    content: (
      <>
        <p className="text-lg leading-relaxed mb-6">
          Anomaly detection identifies rare items, events, or observations that differ significantly 
          from the majority of the data. These anomalies, also called outliers, often indicate 
          critical incidents or valuable insights.
        </p>
        
        <h2 className="text-2xl font-bold mt-8 mb-4">Types of Anomalies</h2>
        <div className="space-y-4 my-6">
          <Card>
            <CardContent className="p-4">
              <h3 className="font-semibold mb-2">Point Anomalies</h3>
              <p className="text-sm text-muted-foreground">
                Individual data points that are far from the rest. Example: A sudden spike in credit card transactions
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <h3 className="font-semibold mb-2">Contextual Anomalies</h3>
              <p className="text-sm text-muted-foreground">
                Data points that are anomalous in a specific context. Example: High temperature in winter
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <h3 className="font-semibold mb-2">Collective Anomalies</h3>
              <p className="text-sm text-muted-foreground">
                A collection of related data points that are anomalous together. Example: Copy-paste attack pattern
              </p>
            </CardContent>
          </Card>
        </div>

        <h2 className="text-2xl font-bold mt-8 mb-4">Detection Approaches</h2>
        <ul className="list-disc list-inside space-y-2 mb-6">
          <li><strong>Statistical Methods:</strong> Use statistical tests to identify outliers</li>
          <li><strong>Distance-Based:</strong> Detect points far from their neighbors</li>
          <li><strong>Density-Based:</strong> Identify regions of low density</li>
          <li><strong>Clustering-Based:</strong> Points not belonging to any cluster are anomalies</li>
          <li><strong>Machine Learning:</strong> Train models to recognize normal vs. abnormal patterns</li>
        </ul>

        <Card className="my-6 bg-accent/50 border-accent">
          <CardContent className="p-6">
            <h3 className="font-semibold mb-2">Real-World Applications</h3>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• Fraud detection in financial transactions</li>
              <li>• Network intrusion detection</li>
              <li>• Manufacturing defect detection</li>
              <li>• Medical diagnosis of rare diseases</li>
              <li>• System health monitoring</li>
            </ul>
          </CardContent>
        </Card>

        <h2 className="text-2xl font-bold mt-8 mb-4">Challenges</h2>
        <p className="leading-relaxed mb-4">
          Anomaly detection faces several challenges including imbalanced datasets (anomalies are rare), 
          defining what constitutes "normal" behavior, and dealing with evolving patterns over time. 
          The cost of false positives versus false negatives must be carefully balanced based on the 
          application domain.
        </p>

        <Card className="my-6 border-primary/20 bg-primary/5">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              📚 Comprehensive Guide
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-3">
              Master techniques for identifying outliers and unusual patterns in data.
            </p>
            <ul className="text-sm space-y-1 text-muted-foreground">
              <li>✓ Statistical vs ML-based approaches</li>
              <li>✓ Handling imbalanced datasets</li>
              <li>✓ Real-time anomaly detection systems</li>
              <li>✓ False positive/negative trade-offs</li>
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
              <p className="text-sm font-medium mb-2">Fraud Detection Scenario</p>
              <p className="text-xs text-muted-foreground mb-2">
                You're building a fraud detection system for credit cards. Which approach makes sense?
              </p>
              <div className="text-xs space-y-1 ml-2 mb-2">
                <div>• 99.5% of transactions are legitimate</div>
                <div>• Only 0.5% are fraudulent</div>
                <div>• Missing fraud is very costly</div>
              </div>
              <p className="text-xs font-medium mb-1">Which matters more?</p>
              <p className="text-xs text-muted-foreground italic">
                Answer: High recall (catch most fraud) even if it means some false alarms (lower precision).
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
              <p className="text-sm font-medium mb-3">Anomaly Detection Methods</p>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="p-2 bg-primary/10 rounded">
                  <strong>Statistical</strong><br/>
                  <span className="text-muted-foreground">Z-score, IQR method</span>
                </div>
                <div className="p-2 bg-primary/10 rounded">
                  <strong>Distance-based</strong><br/>
                  <span className="text-muted-foreground">KNN distance threshold</span>
                </div>
                <div className="p-2 bg-primary/10 rounded">
                  <strong>Density-based</strong><br/>
                  <span className="text-muted-foreground">DBSCAN, LOF</span>
                </div>
                <div className="p-2 bg-primary/10 rounded">
                  <strong>Model-based</strong><br/>
                  <span className="text-muted-foreground">Isolation Forest, Autoencoders</span>
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
                <span className="font-mono text-xs bg-muted px-2 py-1 rounded">Outlier</span>
                <span className="text-muted-foreground">Data point significantly different from others</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="font-mono text-xs bg-muted px-2 py-1 rounded">Z-score</span>
                <span className="text-muted-foreground">Number of standard deviations from mean</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="font-mono text-xs bg-muted px-2 py-1 rounded">IQR</span>
                <span className="text-muted-foreground">Interquartile Range - robust outlier detection</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="font-mono text-xs bg-muted px-2 py-1 rounded">Isolation Forest</span>
                <span className="text-muted-foreground">Isolates anomalies by random partitioning</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </>
    )
  }
}