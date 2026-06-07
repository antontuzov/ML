import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Article } from './types'

export const evaluationArticles: Record<string, Article> = {
  metrics: {
    title: 'Evaluation Metrics',
    content: (
      <>
        <p className="text-lg leading-relaxed mb-6">
          Choosing the right evaluation metrics is crucial for assessing model performance. Different 
          metrics provide insights into various aspects of model behavior, and the choice depends on 
          the problem type and business objectives.
        </p>
        
        <h2 className="text-2xl font-bold mt-8 mb-4">Classification Metrics</h2>
        <div className="space-y-4 my-6">
          <Card>
            <CardContent className="p-4">
              <h3 className="font-semibold mb-2">Accuracy</h3>
              <p className="text-sm text-muted-foreground">
                Proportion of correct predictions. Simple but can be misleading with imbalanced datasets.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <h3 className="font-semibold mb-2">Precision</h3>
              <p className="text-sm text-muted-foreground">
                Of all positive predictions, how many were actually positive? Important when false positives are costly.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <h3 className="font-semibold mb-2">Recall (Sensitivity)</h3>
              <p className="text-sm text-muted-foreground">
                Of all actual positives, how many did we catch? Critical when missing positives is dangerous (e.g., disease detection).
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <h3 className="font-semibold mb-2">F1-Score</h3>
              <p className="text-sm text-muted-foreground">
                Harmonic mean of precision and recall. Provides balance between the two metrics.
              </p>
            </CardContent>
          </Card>
        </div>

        <Card className="my-6 bg-accent/50 border-accent">
          <CardContent className="p-6">
            <h3 className="font-semibold mb-2">Confusion Matrix</h3>
            <p className="text-sm text-muted-foreground mb-2">
              A table showing true positives, false positives, true negatives, and false negatives.
            </p>
            <div className="bg-background p-3 rounded text-xs font-mono">
              <div>Predicted: Yes | No</div>
              <div>Actual Yes: TP | FN</div>
              <div>Actual No: FP | TN</div>
            </div>
          </CardContent>
        </Card>

        <h2 className="text-2xl font-bold mt-8 mb-4">Regression Metrics</h2>
        <ul className="list-disc list-inside space-y-2 mb-6">
          <li><strong>Mean Absolute Error (MAE):</strong> Average absolute difference between predicted and actual values</li>
          <li><strong>Mean Squared Error (MSE):</strong> Average squared differences (penalizes large errors more)</li>
          <li><strong>Root Mean Squared Error (RMSE):</strong> Square root of MSE (in same units as target)</li>
          <li><strong>R-squared (R²):</strong> Proportion of variance explained by the model (0 to 1, higher is better)</li>
          <li><strong>Mean Absolute Percentage Error (MAPE):</strong> Percentage-based error metric</li>
        </ul>

        <h2 className="text-2xl font-bold mt-8 mb-4">ROC Curve and AUC</h2>
        <p className="leading-relaxed mb-4">
          The ROC (Receiver Operating Characteristic) curve plots True Positive Rate vs. False Positive Rate 
          at various threshold settings. AUC (Area Under Curve) summarizes the curve - a value of 1 indicates 
          perfect classification, 0.5 indicates random guessing.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">Choosing the Right Metric</h2>
        <p className="leading-relaxed mb-4">
          Consider your business context:
        </p>
        <ul className="list-disc list-inside space-y-2 mb-6">
          <li>Spam detection: High precision (don't miss legitimate emails)</li>
          <li>Cancer screening: High recall (don't miss any cases)</li>
          <li>Recommendation systems: Balance of precision and diversity</li>
          <li>Financial forecasting: Low RMSE for accurate predictions</li>
        </ul>

        <Card className="my-6 border-primary/20 bg-primary/5">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              📚 Comprehensive Guide
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-3">
              Complete evaluation toolkit - choose and interpret metrics for any ML problem.
            </p>
            <ul className="text-sm space-y-1 text-muted-foreground">
              <li>✓ Metric selection framework</li>
              <li>✓ Trade-offs between different metrics</li>
              <li>✓ Statistical significance testing</li>
              <li>✓ Business metric alignment</li>
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
            <div className="space-y-3">
              <div className="bg-background p-3 rounded-lg border">
                <p className="text-sm font-medium mb-2">Calculate Precision & Recall</p>
                <p className="text-xs text-muted-foreground mb-2">
                  Your model predicted 100 emails as spam. 80 were actually spam (TP), 20 were not (FP). There were 10 spam emails you missed (FN).
                </p>
                <div className="text-xs space-y-1 ml-2 mb-2">
                  <div><strong>Precision:</strong> TP / (TP + FP) = 80 / (80 + 20) = 80%</div>
                  <div><strong>Recall:</strong> TP / (TP + FN) = 80 / (80 + 10) = 89%</div>
                  <div><strong>F1-Score:</strong> 2 × (P × R) / (P + R) = 84%</div>
                </div>
                <p className="text-xs text-muted-foreground italic">
                  Question: Which matters more for spam detection - precision or recall?
                </p>
              </div>
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
              <p className="text-sm font-medium mb-3">Confusion Matrix Visualization</p>
              <div className="grid grid-cols-2 gap-2 text-xs max-w-[300px] mx-auto">
                <div className="p-2"></div>
                <div className="p-2 text-center font-bold">Predicted Yes</div>
                <div className="p-2 text-center font-bold">Predicted No</div>
                <div className="p-2 text-right font-bold">Actual Yes</div>
                <div className="p-2 bg-green-100 text-center">TP ✓</div>
                <div className="p-2 bg-red-100 text-center">FN ✗</div>
                <div className="p-2 text-right font-bold">Actual No</div>
                <div className="p-2 bg-red-100 text-center">FP ✗</div>
                <div className="p-2 bg-green-100 text-center">TN ✓</div>
              </div>
              <p className="text-xs text-muted-foreground mt-2 text-center">
                Green = Correct predictions | Red = Errors
              </p>
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
                <span className="font-mono text-xs bg-muted px-2 py-1 rounded">Accuracy</span>
                <span className="text-muted-foreground">(TP + TN) / Total - overall correctness</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="font-mono text-xs bg-muted px-2 py-1 rounded">Precision</span>
                <span className="text-muted-foreground">TP / (TP + FP) - quality of positive predictions</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="font-mono text-xs bg-muted px-2 py-1 rounded">Recall</span>
                <span className="text-muted-foreground">TP / (TP + FN) - completeness of detection</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="font-mono text-xs bg-muted px-2 py-1 rounded">F1-Score</span>
                <span className="text-muted-foreground">Harmonic mean of precision and recall</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="font-mono text-xs bg-muted px-2 py-1 rounded">AUC-ROC</span>
                <span className="text-muted-foreground">Area under ROC curve - threshold-independent</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </>
    )
  },
  validation: {
    title: 'Cross-Validation',
    content: (
      <>
        <p className="text-lg leading-relaxed mb-6">
          Cross-validation is a resampling technique used to evaluate machine learning models on limited 
          data. It provides a more robust estimate of model performance compared to a simple train-test split.
        </p>
        
        <h2 className="text-2xl font-bold mt-8 mb-4">Why Cross-Validation?</h2>
        <ul className="list-disc list-inside space-y-2 mb-6">
          <li>Better utilization of available data</li>
          <li>Reduces variance in performance estimates</li>
          <li>Detects overfitting more effectively</li>
          <li>Provides confidence intervals for metrics</li>
          <li>Helps in model selection and hyperparameter tuning</li>
        </ul>

        <Card className="my-6 bg-accent/50 border-accent">
          <CardContent className="p-6">
            <h3 className="font-semibold mb-2">The Problem with Single Split</h3>
            <p className="text-sm text-muted-foreground">
              A single train-test split might give misleading results if the split is unrepresentative. 
              Cross-validation averages results over multiple splits for a more reliable estimate.
            </p>
          </CardContent>
        </Card>

        <h2 className="text-2xl font-bold mt-8 mb-4">K-Fold Cross-Validation</h2>
        <p className="leading-relaxed mb-4">
          The dataset is divided into K equal folds. The model is trained K times, each time using K-1 folds 
          for training and 1 fold for testing. Results are averaged across all folds.
        </p>
        <ol className="list-decimal list-inside space-y-2 mb-6">
          <li>Shuffle the dataset randomly</li>
          <li>Split into K groups (folds)</li>
          <li>For each unique group: use it as test set, remaining as training set</li>
          <li>Calculate summary statistic from K scores</li>
        </ol>

        <h2 className="text-2xl font-bold mt-8 mb-4">Common Variations</h2>
        <div className="grid gap-4 my-6">
          <Card>
            <CardContent className="p-4">
              <h3 className="font-semibold mb-2">Stratified K-Fold</h3>
              <p className="text-sm text-muted-foreground">
                Maintains class distribution in each fold. Essential for imbalanced datasets.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <h3 className="font-semibold mb-2">Leave-One-Out (LOOCV)</h3>
              <p className="text-sm text-muted-foreground">
                K equals number of samples. Maximum data usage but computationally expensive.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <h3 className="font-semibold mb-2">Time Series Split</h3>
              <p className="text-sm text-muted-foreground">
                Respects temporal ordering. Training set only contains past data relative to test set.
              </p>
            </CardContent>
          </Card>
        </div>

        <h2 className="text-2xl font-bold mt-8 mb-4">Choosing K</h2>
        <p className="leading-relaxed mb-4">
          Common choices are K=5 or K=10. Larger K gives less biased estimates but higher variance and 
          computational cost. Smaller K is faster but may have higher bias.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">Best Practices</h2>
        <ul className="list-disc list-inside space-y-2 mb-6">
          <li>Always shuffle data before splitting (unless time series)</li>
          <li>Use stratified splits for classification with imbalanced classes</li>
          <li>Perform feature scaling within each fold to avoid data leakage</li>
          <li>Report mean and standard deviation of cross-validation scores</li>
          <li>Use nested cross-validation for hyperparameter tuning</li>
        </ul>

        <Card className="my-6 border-primary/20 bg-primary/5">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              📚 Comprehensive Guide
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-3">
              Master robust model evaluation techniques for reliable performance estimates.
            </p>
            <ul className="text-sm space-y-1 text-muted-foreground">
              <li>✓ K-Fold vs Stratified vs LOOCV comparison</li>
              <li>✓ Nested cross-validation for tuning</li>
              <li>✓ Handling time series data</li>
              <li>✓ Statistical significance of results</li>
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
              <p className="text-sm font-medium mb-2">5-Fold Cross-Validation Example</p>
              <p className="text-xs text-muted-foreground mb-2">
                Dataset: 1000 samples, 5-fold CV results: [0.85, 0.88, 0.82, 0.87, 0.86]
              </p>
              <div className="text-xs space-y-1 ml-2 mb-2">
                <div><strong>Mean Accuracy:</strong> (0.85 + 0.88 + 0.82 + 0.87 + 0.86) / 5 = 85.6%</div>
                <div><strong>Standard Deviation:</strong> 2.3%</div>
                <div><strong>Report as:</strong> 85.6% ± 2.3%</div>
              </div>
              <p className="text-xs text-muted-foreground italic">
                The standard deviation tells you about the stability of your model's performance.
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
              <p className="text-sm font-medium mb-3">5-Fold Cross-Validation Process</p>
              <div className="space-y-1 text-xs">
                <div className="flex items-center gap-2">
                  <div className="w-16 text-right font-medium">Fold 1:</div>
                  <div className="w-12 p-1 bg-red-100 text-center">Test</div>
                  <div className="flex-1 p-1 bg-green-100 text-center">Train | Train | Train | Train</div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-16 text-right font-medium">Fold 2:</div>
                  <div className="w-12 p-1 bg-green-100 text-center">Train</div>
                  <div className="w-12 p-1 bg-red-100 text-center">Test</div>
                  <div className="flex-1 p-1 bg-green-100 text-center">Train | Train | Train</div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-16 text-right font-medium">Fold 3:</div>
                  <div className="w-12 p-1 bg-green-100 text-center">Train</div>
                  <div className="w-12 p-1 bg-green-100 text-center">Train</div>
                  <div className="w-12 p-1 bg-red-100 text-center">Test</div>
                  <div className="flex-1 p-1 bg-green-100 text-center">Train | Train</div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-16 text-right font-medium">Fold 4:</div>
                  <div className="w-12 p-1 bg-green-100 text-center">Train</div>
                  <div className="w-12 p-1 bg-green-100 text-center">Train</div>
                  <div className="w-12 p-1 bg-green-100 text-center">Train</div>
                  <div className="w-12 p-1 bg-red-100 text-center">Test</div>
                  <div className="w-12 p-1 bg-green-100 text-center">Train</div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-16 text-right font-medium">Fold 5:</div>
                  <div className="flex-1 p-1 bg-green-100 text-center">Train | Train | Train | Train</div>
                  <div className="w-12 p-1 bg-red-100 text-center">Test</div>
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
                <span className="font-mono text-xs bg-muted px-2 py-1 rounded">K-Fold</span>
                <span className="text-muted-foreground">Split data into K parts, rotate test set</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="font-mono text-xs bg-muted px-2 py-1 rounded">Stratified</span>
                <span className="text-muted-foreground">Maintains class balance in each fold</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="font-mono text-xs bg-muted px-2 py-1 rounded">LOOCV</span>
                <span className="text-muted-foreground">Leave One Out - K = number of samples</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="font-mono text-xs bg-muted px-2 py-1 rounded">Nested CV</span>
                <span className="text-muted-foreground">CV within CV for unbiased tuning</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </>
    )
  },
  overfitting: {
    title: 'Overfitting & Underfitting',
    content: (
      <>
        <p className="text-lg leading-relaxed mb-6">
          Finding the right balance between model complexity and generalization is one of the most important 
          challenges in machine learning. Overfitting and underfitting represent two extremes of this balance.
        </p>
        
        <h2 className="text-2xl font-bold mt-8 mb-4">Understanding the Bias-Variance Tradeoff</h2>
        <p className="leading-relaxed mb-4">
          Every model has two sources of error:
        </p>
        <ul className="list-disc list-inside space-y-2 mb-6">
          <li><strong>Bias:</strong> Error from overly simplistic assumptions</li>
          <li><strong>Variance:</strong> Error from sensitivity to small fluctuations in training data</li>
        </ul>
        <p className="leading-relaxed mb-4">
          The goal is to find the sweet spot where total error (bias + variance) is minimized.
        </p>

        <Card className="my-6 bg-accent/50 border-accent">
          <CardContent className="p-6">
            <h3 className="font-semibold mb-2">The Goldilocks Principle</h3>
            <p className="text-sm text-muted-foreground">
              You want a model that's "just right" - not too simple (underfitting) and not too complex 
              (overfitting). It should capture patterns without memorizing noise.
            </p>
          </CardContent>
        </Card>

        <h2 className="text-2xl font-bold mt-8 mb-4">Underfitting (High Bias)</h2>
        <p className="leading-relaxed mb-4">
          Underfitting occurs when a model is too simple to capture the underlying pattern in the data.
        </p>
        <div className="bg-muted p-4 rounded-lg mb-6">
          <h4 className="font-semibold mb-2">Signs of Underfitting:</h4>
          <ul className="text-sm space-y-1">
            <li>• Poor performance on both training and test data</li>
            <li>• Training and validation errors are both high</li>
            <li>• Gap between training and validation error is small</li>
          </ul>
        </div>
        <p className="leading-relaxed mb-4"><strong>Solutions:</strong></p>
        <ul className="list-disc list-inside space-y-2 mb-6">
          <li>Increase model complexity (more features, deeper network)</li>
          <li>Reduce regularization</li>
          <li>Train for more epochs</li>
          <li>Add relevant features</li>
        </ul>

        <h2 className="text-2xl font-bold mt-8 mb-4">Overfitting (High Variance)</h2>
        <p className="leading-relaxed mb-4">
          Overfitting occurs when a model learns the training data too well, including its noise and outliers,
          resulting in poor generalization to new data.
        </p>
        <div className="bg-muted p-4 rounded-lg mb-6">
          <h4 className="font-semibold mb-2">Signs of Overfitting:</h4>
          <ul className="text-sm space-y-1">
            <li>• Excellent performance on training data</li>
            <li>• Poor performance on test/validation data</li>
            <li>• Large gap between training and validation error</li>
          </ul>
        </div>
        <p className="leading-relaxed mb-4"><strong>Solutions:</strong></p>
        <ul className="list-disc list-inside space-y-2 mb-6">
          <li>Get more training data</li>
          <li>Reduce model complexity</li>
          <li>Add regularization (L1, L2, Dropout)</li>
          <li>Use cross-validation</li>
          <li>Feature selection to remove irrelevant features</li>
          <li>Early stopping during training</li>
          <li>Data augmentation</li>
        </ul>

        <h2 className="text-2xl font-bold mt-8 mb-4">Detecting Overfitting</h2>
        <p className="leading-relaxed mb-4">
          Monitor training and validation curves during model development:
        </p>
        <ul className="list-disc list-inside space-y-2 mb-6">
          <li>If both curves plateau at similar low error → Good fit</li>
          <li>If training error keeps decreasing but validation error increases → Overfitting</li>
          <li>If both curves plateau at high error → Underfitting</li>
        </ul>

        <Card className="my-6 bg-accent/50 border-accent">
          <CardContent className="p-6">
            <h3 className="font-semibold mb-2">Learning Curves</h3>
            <p className="text-sm text-muted-foreground">
              Plot training and validation error against training set size or epochs. These curves help 
              diagnose whether you need more data, a simpler model, or different regularization.
            </p>
          </CardContent>
        </Card>

        <h2 className="text-2xl font-bold mt-8 mb-4">Regularization Techniques</h2>
        <p className="leading-relaxed mb-4">
          Regularization adds constraints to prevent overfitting:
        </p>
        <ul className="list-disc list-inside space-y-2 mb-6">
          <li><strong>L1 (Lasso):</strong> Adds absolute value of coefficients as penalty. Can zero out features.</li>
          <li><strong>L2 (Ridge):</strong> Adds squared magnitude of coefficients. Shrinks weights evenly.</li>
          <li><strong>Elastic Net:</strong> Combines L1 and L2 penalties</li>
          <li><strong>Dropout:</strong> Randomly drops neurons during training (for neural networks)</li>
        </ul>

        <Card className="my-6 border-primary/20 bg-primary/5">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              📚 Comprehensive Guide
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-3">
              Master the balance between bias and variance for optimal model performance.
            </p>
            <ul className="text-sm space-y-1 text-muted-foreground">
              <li>✓ Bias-variance tradeoff mathematics</li>
              <li>✓ Regularization techniques deep dive</li>
              <li>✓ Early stopping strategies</li>
              <li>✓ Model complexity selection</li>
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
              <p className="text-sm font-medium mb-2">Diagnose the Problem</p>
              <p className="text-xs text-muted-foreground mb-2">
                Model performance after 100 epochs:
              </p>
              <div className="text-xs space-y-1 ml-2 mb-2">
                <div>• Training accuracy: 99%</div>
                <div>• Validation accuracy: 75%</div>
                <div>• Training loss: 0.05</div>
                <div>• Validation loss: 1.2</div>
              </div>
              <p className="text-xs font-medium mb-1">What's the issue and how to fix it?</p>
              <p className="text-xs text-muted-foreground italic">
                Answer: Clear overfitting. Try: dropout (0.5), L2 regularization, reduce model size, or get more data.
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
              <p className="text-sm font-medium mb-3">Model Complexity vs Error</p>
              <div className="space-y-2 text-xs">
                <div className="flex items-center gap-2">
                  <div className="w-24 text-right font-medium">Underfitting:</div>
                  <div className="flex-1 p-2 bg-yellow-100 rounded">High bias, low variance</div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-24 text-right font-medium">Good Fit:</div>
                  <div className="flex-1 p-2 bg-green-100 rounded">Balanced bias and variance</div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-24 text-right font-medium">Overfitting:</div>
                  <div className="flex-1 p-2 bg-red-100 rounded">Low bias, high variance</div>
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
                <span className="font-mono text-xs bg-muted px-2 py-1 rounded">Overfitting</span>
                <span className="text-muted-foreground">Model memorizes training data, poor generalization</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="font-mono text-xs bg-muted px-2 py-1 rounded">Underfitting</span>
                <span className="text-muted-foreground">Model too simple to capture patterns</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="font-mono text-xs bg-muted px-2 py-1 rounded">Regularization</span>
                <span className="text-muted-foreground">Techniques to prevent overfitting</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="font-mono text-xs bg-muted px-2 py-1 rounded">Early Stopping</span>
                <span className="text-muted-foreground">Stop training before overfitting occurs</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </>
    )
  }
}