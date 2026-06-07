import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Article } from './types'

export const supervisedArticles: Record<string, Article> = {
  classification: {
    title: 'Classification',
    content: (
      <>
        <p className="text-lg leading-relaxed mb-6">
          Classification is a supervised learning technique where the algorithm learns to assign 
          input data to one of several predefined categories or classes based on training examples.
        </p>
        
        <h2 className="text-2xl font-bold mt-8 mb-4">How Classification Works</h2>
        <p className="leading-relaxed mb-4">
          The classifier analyzes training data with known labels to learn patterns that distinguish 
          different classes. Once trained, it can predict the class of new, unseen data points.
        </p>

        <Card className="my-6 bg-accent/50 border-accent">
          <CardContent className="p-6">
            <h3 className="font-semibold mb-2">Example Applications</h3>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• Email spam detection (spam vs. not spam)</li>
              <li>• Medical diagnosis (disease present vs. absent)</li>
              <li>• Image recognition (cat vs. dog vs. bird)</li>
              <li>• Sentiment analysis (positive, negative, neutral)</li>
            </ul>
          </CardContent>
        </Card>

        <h2 className="text-2xl font-bold mt-8 mb-4">Binary vs. Multi-class Classification</h2>
        <div className="grid gap-4 my-6">
          <Card>
            <CardContent className="p-4">
              <h3 className="font-semibold mb-2">Binary Classification</h3>
              <p className="text-sm text-muted-foreground">
                Two possible outcomes. Example: Is this email spam? (Yes/No)
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <h3 className="font-semibold mb-2">Multi-class Classification</h3>
              <p className="text-sm text-muted-foreground">
                Three or more possible outcomes. Example: What animal is in this image? (Cat/Dog/Bird/Fish)
              </p>
            </CardContent>
          </Card>
        </div>

        <h2 className="text-2xl font-bold mt-8 mb-4">Popular Classification Algorithms</h2>
        <ul className="list-disc list-inside space-y-2 mb-6">
          <li><strong>Logistic Regression:</strong> Simple and effective for binary classification</li>
          <li><strong>Decision Trees:</strong> Easy to interpret, handles both numerical and categorical data</li>
          <li><strong>Random Forest:</strong> Ensemble of decision trees for improved accuracy</li>
          <li><strong>Support Vector Machines (SVM):</strong> Effective in high-dimensional spaces</li>
          <li><strong>K-Nearest Neighbors (KNN):</strong> Simple instance-based learning</li>
          <li><strong>Naive Bayes:</strong> Fast and works well with text classification</li>
        </ul>

        <h2 className="text-2xl font-bold mt-8 mb-4">Evaluating Classifiers</h2>
        <p className="leading-relaxed mb-4">
          Common metrics include accuracy, precision, recall, F1-score, and the confusion matrix. 
          The choice of metric depends on the specific problem and whether false positives or false 
          negatives are more costly.
        </p>

        <Card className="my-6 border-primary/20 bg-primary/5">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              📚 Comprehensive Guide
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-3">
              Master classification with in-depth coverage of algorithms, evaluation, and best practices.
            </p>
            <ul className="text-sm space-y-1 text-muted-foreground">
              <li>✓ Algorithm comparison and selection criteria</li>
              <li>✓ Handling imbalanced datasets</li>
              <li>✓ Multi-class strategies (One-vs-Rest, One-vs-One)</li>
              <li>✓ Probability calibration and threshold tuning</li>
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
                <p className="text-sm font-medium mb-2">Practice: Choose the Right Classifier</p>
                <p className="text-xs text-muted-foreground mb-2">
                  Scenario: You need to classify customer emails into 5 categories (Support, Sales, Billing, Feedback, Spam).
                </p>
                <p className="text-xs font-medium mb-1">Which algorithm would you try first?</p>
                <ul className="text-xs space-y-1 ml-4 mb-2">
                  <li>□ Naive Bayes (fast, good for text)</li>
                  <li>□ SVM (good for high dimensions)</li>
                  <li>□ Random Forest (robust, handles multi-class well)</li>
                </ul>
                <p className="text-xs text-muted-foreground italic">
                  Tip: Try Random Forest first for robustness, then compare with Naive Bayes for speed.
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
              <p className="text-sm font-medium mb-3">Decision Boundary Visualization</p>
              <div className="grid grid-cols-3 gap-2 text-xs">
                <div className="text-center p-2 bg-muted rounded">
                  <strong>Linear</strong><br/>
                  <span className="text-muted-foreground">Straight line separation</span>
                </div>
                <div className="text-center p-2 bg-muted rounded">
                  <strong>Non-linear</strong><br/>
                  <span className="text-muted-foreground">Curved boundaries</span>
                </div>
                <div className="text-center p-2 bg-muted rounded">
                  <strong>Complex</strong><br/>
                  <span className="text-muted-foreground">Multiple regions</span>
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
                <span className="font-mono text-xs bg-muted px-2 py-1 rounded">Binary</span>
                <span className="text-muted-foreground">Two classes (Yes/No, Spam/Ham)</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="font-mono text-xs bg-muted px-2 py-1 rounded">Multi-class</span>
                <span className="text-muted-foreground">Three or more classes</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="font-mono text-xs bg-muted px-2 py-1 rounded">Precision</span>
                <span className="text-muted-foreground">Of predicted positives, how many correct?</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="font-mono text-xs bg-muted px-2 py-1 rounded">Recall</span>
                <span className="text-muted-foreground">Of actual positives, how many found?</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </>
    )
  },
  regression: {
    title: 'Regression',
    content: (
      <>
        <p className="text-lg leading-relaxed mb-6">
          Regression is a supervised learning technique used to predict continuous numerical values. 
          Unlike classification which predicts categories, regression predicts quantities.
        </p>
        
        <h2 className="text-2xl font-bold mt-8 mb-4">Understanding Regression</h2>
        <p className="leading-relaxed mb-4">
          Regression models learn the relationship between input features (independent variables) 
          and a continuous output variable (dependent variable). The goal is to find a function that 
          best maps inputs to outputs.
        </p>

        <Card className="my-6 bg-accent/50 border-accent">
          <CardContent className="p-6">
            <h3 className="font-semibold mb-2">Real-World Examples</h3>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• Predicting house prices based on size, location, and features</li>
              <li>• Forecasting stock prices or sales revenue</li>
              <li>• Estimating temperature or weather conditions</li>
              <li>• Predicting customer lifetime value</li>
            </ul>
          </CardContent>
        </Card>

        <h2 className="text-2xl font-bold mt-8 mb-4">Types of Regression</h2>
        <div className="space-y-4 my-6">
          <Card>
            <CardContent className="p-4">
              <h3 className="font-semibold mb-2">Linear Regression</h3>
              <p className="text-sm text-muted-foreground">
                Models the relationship as a straight line. Best when the relationship between 
                variables is approximately linear.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <h3 className="font-semibold mb-2">Polynomial Regression</h3>
              <p className="text-sm text-muted-foreground">
                Fits a curved line to the data by using polynomial features. Useful for non-linear relationships.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <h3 className="font-semibold mb-2">Ridge & Lasso Regression</h3>
              <p className="text-sm text-muted-foreground">
                Regularized versions of linear regression that prevent overfitting by penalizing large coefficients.
              </p>
            </CardContent>
          </Card>
        </div>

        <h2 className="text-2xl font-bold mt-8 mb-4">Key Concepts</h2>
        <ul className="list-disc list-inside space-y-2 mb-6">
          <li><strong>Features:</strong> Input variables used for prediction</li>
          <li><strong>Target:</strong> The continuous value we want to predict</li>
          <li><strong>Coefficients:</strong> Weights assigned to each feature</li>
          <li><strong>Residuals:</strong> Differences between predicted and actual values</li>
          <li><strong>R-squared:</strong> Measure of how well the model fits the data</li>
        </ul>

        <h2 className="text-2xl font-bold mt-8 mb-4">Evaluating Regression Models</h2>
        <p className="leading-relaxed mb-4">
          Common metrics include Mean Squared Error (MSE), Root Mean Squared Error (RMSE), 
          Mean Absolute Error (MAE), and R-squared. Lower error values indicate better performance.
        </p>

        <Card className="my-6 border-primary/20 bg-primary/5">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              📚 Comprehensive Guide
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-3">
              Master regression analysis for predicting continuous values with practical techniques.
            </p>
            <ul className="text-sm space-y-1 text-muted-foreground">
              <li>✓ Linear vs non-linear regression methods</li>
              <li>✓ Regularization techniques (Ridge, Lasso, Elastic Net)</li>
              <li>✓ Feature engineering for regression</li>
              <li>✓ Model diagnostics and residual analysis</li>
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
              <p className="text-sm font-medium mb-2">Calculate Prediction</p>
              <p className="text-xs text-muted-foreground mb-2">
                Linear regression model: Price = 50,000 + (200 × sq_ft) + (10,000 × bedrooms)
              </p>
              <div className="text-xs space-y-1 ml-2 mb-2">
                <div><strong>House:</strong> 1,500 sq ft, 3 bedrooms</div>
                <div><strong>Prediction:</strong> 50,000 + (200 × 1,500) + (10,000 × 3)</div>
                <div><strong>=</strong> 50,000 + 300,000 + 30,000 = $380,000</div>
              </div>
              <p className="text-xs text-muted-foreground italic">
                Try: What if the house has 2,000 sq ft and 4 bedrooms? Answer: $480,000
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
              <p className="text-sm font-medium mb-3">Regression Line Fitting</p>
              <div className="space-y-2 text-xs">
                <div className="flex items-center gap-2">
                  <div className="w-24 text-right font-medium">Data Points:</div>
                  <div className="flex-1 p-2 bg-primary/10 rounded">Scattered observations (x, y)</div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-24 text-right font-medium">Best Fit Line:</div>
                  <div className="flex-1 p-2 bg-primary/10 rounded">Minimizes sum of squared residuals</div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-24 text-right font-medium">Residuals:</div>
                  <div className="flex-1 p-2 bg-primary/10 rounded">Vertical distances from points to line</div>
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
                <span className="font-mono text-xs bg-muted px-2 py-1 rounded">MSE</span>
                <span className="text-muted-foreground">Mean Squared Error - average squared differences</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="font-mono text-xs bg-muted px-2 py-1 rounded">RMSE</span>
                <span className="text-muted-foreground">Root MSE - in same units as target variable</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="font-mono text-xs bg-muted px-2 py-1 rounded">R²</span>
                <span className="text-muted-foreground">Proportion of variance explained (0-1)</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="font-mono text-xs bg-muted px-2 py-1 rounded">MAE</span>
                <span className="text-muted-foreground">Mean Absolute Error - robust to outliers</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </>
    )
  },
  algorithms: {
    title: 'Common Supervised Learning Algorithms',
    content: (
      <>
        <p className="text-lg leading-relaxed mb-6">
          Understanding various supervised learning algorithms helps you choose the right tool 
          for your specific problem. Each algorithm has its strengths and ideal use cases.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">Decision Trees</h2>
        <p className="leading-relaxed mb-4">
          Decision trees split data based on feature values to make predictions. They create a 
          tree-like model of decisions that's easy to understand and visualize.
        </p>
        <ul className="list-disc list-inside space-y-2 mb-6">
          <li>Easy to interpret and explain</li>
          <li>Handles both numerical and categorical data</li>
          <li>Requires little data preprocessing</li>
          <li>Can capture non-linear relationships</li>
        </ul>

        <h2 className="text-2xl font-bold mt-8 mb-4">Random Forest</h2>
        <p className="leading-relaxed mb-4">
          Random Forest combines multiple decision trees to improve accuracy and reduce overfitting. 
          It's an ensemble method that aggregates predictions from many trees.
        </p>
        <Card className="my-6 bg-accent/50 border-accent">
          <CardContent className="p-6">
            <h3 className="font-semibold mb-2">Why Random Forest?</h3>
            <p className="text-sm text-muted-foreground">
              By averaging multiple trees, Random Forest reduces variance and provides more stable 
              predictions than a single decision tree.
            </p>
          </CardContent>
        </Card>

        <h2 className="text-2xl font-bold mt-8 mb-4">Support Vector Machines (SVM)</h2>
        <p className="leading-relaxed mb-4">
          SVM finds the optimal boundary (hyperplane) that separates different classes with maximum 
          margin. It works well in high-dimensional spaces.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">Gradient Boosting</h2>
        <p className="leading-relaxed mb-4">
          Gradient Boosting builds models sequentially, with each new model correcting errors made 
          by previous ones. Popular implementations include XGBoost, LightGBM, and CatBoost.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">Choosing the Right Algorithm</h2>
        <div className="grid gap-4 my-6">
          <Card>
            <CardContent className="p-4">
              <h3 className="font-semibold mb-2">Small Dataset</h3>
              <p className="text-sm text-muted-foreground">
                Try SVM or Naive Bayes - they work well with limited data
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <h3 className="font-semibold mb-2">Large Dataset</h3>
              <p className="text-sm text-muted-foreground">
                Consider Random Forest or Gradient Boosting for better performance
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <h3 className="font-semibold mb-2">Need Interpretability</h3>
              <p className="text-sm text-muted-foreground">
                Use Decision Trees or Logistic Regression for transparent models
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
              Master the most popular supervised learning algorithms and when to use each.
            </p>
            <ul className="text-sm space-y-1 text-muted-foreground">
              <li>✓ Algorithm strengths and weaknesses</li>
              <li>✓ Hyperparameter tuning strategies</li>
              <li>✓ Ensemble methods and combinations</li>
              <li>✓ Scalability and performance considerations</li>
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
              <p className="text-sm font-medium mb-2">Algorithm Selection Challenge</p>
              <p className="text-xs text-muted-foreground mb-2">
                You have 10,000 customer records with 50 features. You need to predict customer churn.
              </p>
              <div className="text-xs space-y-1 ml-2 mb-2">
                <div><strong>Considerations:</strong></div>
                <div>• Dataset is medium-sized (good for most algorithms)</div>
                <div>• Features may have complex interactions</div>
                <div>• Need good interpretability for stakeholders</div>
              </div>
              <p className="text-xs font-medium mb-1">Which algorithm would you recommend?</p>
              <p className="text-xs text-muted-foreground italic">
                Tip: Random Forest offers good balance of accuracy and interpretability with feature importance scores.
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
              <p className="text-sm font-medium mb-3">Algorithm Complexity Comparison</p>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="p-2 bg-primary/10 rounded">
                  <strong>Simple Models</strong><br/>
                  <span className="text-muted-foreground">Linear Regression, Naive Bayes</span><br/>
                  <span className="text-muted-foreground">Fast, interpretable, low capacity</span>
                </div>
                <div className="p-2 bg-primary/10 rounded">
                  <strong>Medium Models</strong><br/>
                  <span className="text-muted-foreground">SVM, Decision Trees</span><br/>
                  <span className="text-muted-foreground">Moderate speed, good balance</span>
                </div>
                <div className="p-2 bg-primary/10 rounded">
                  <strong>Ensemble Models</strong><br/>
                  <span className="text-muted-foreground">Random Forest, XGBoost</span><br/>
                  <span className="text-muted-foreground">High accuracy, less interpretable</span>
                </div>
                <div className="p-2 bg-primary/10 rounded">
                  <strong>Neural Networks</strong><br/>
                  <span className="text-muted-foreground">Deep Learning</span><br/>
                  <span className="text-muted-foreground">Highest capacity, needs lots of data</span>
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
                <span className="font-mono text-xs bg-muted px-2 py-1 rounded">Ensemble</span>
                <span className="text-muted-foreground">Combining multiple models for better performance</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="font-mono text-xs bg-muted px-2 py-1 rounded">Hyperparameter</span>
                <span className="text-muted-foreground">Settings configured before training</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="font-mono text-xs bg-muted px-2 py-1 rounded">Cross-validation</span>
                <span className="text-muted-foreground">Technique to estimate model performance</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="font-mono text-xs bg-muted px-2 py-1 rounded">Grid Search</span>
                <span className="text-muted-foreground">Exhaustive search over hyperparameter space</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </>
    )
  }
}