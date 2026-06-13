import { Card, CardContent } from '@/components/ui/card'
import { Article } from './types'

export const featureEngineeringArticles: Record<string, Article> = {
  'feature-engineering': {
    title: 'Feature Engineering',
    estimatedTime: '12 min',
    difficulty: 'intermediate',
    content: (
      <>
        <p className="text-lg leading-relaxed mb-6">
          Feature engineering is the process of using domain knowledge to create features that make machine learning
          algorithms work better. It's one of the most important and time-consuming steps in the ML pipeline.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">Why Features Matter</h2>
        <p className="leading-relaxed mb-4">
          A machine learning model is only as good as the features it learns from. Well-engineered features can
          dramatically improve model performance, sometimes more than choosing a more complex algorithm.
        </p>

        <Card className="my-6 bg-accent/50 border-accent">
          <CardContent className="p-6">
            <h3 className="font-semibold mb-2">The Feature Engineering Process</h3>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• <strong>Brainstorm:</strong> Use domain knowledge to identify relevant features</li>
              <li>• <strong>Create:</strong> Transform raw data into informative features</li>
              <li>• <strong>Transform:</strong> Scale, encode, and normalize features</li>
              <li>• <strong>Select:</strong> Keep only the most informative features</li>
              <li>• <strong>Iterate:</strong> Refine based on model performance</li>
            </ul>
          </CardContent>
        </Card>

        <h2 className="text-2xl font-bold mt-8 mb-4">Common Techniques</h2>
        <div className="grid gap-4 my-6">
          <Card>
            <CardContent className="p-4">
              <h3 className="font-semibold mb-2">Encoding Categorical Variables</h3>
              <p className="text-sm text-muted-foreground">
                One-hot encoding for nominal data, label encoding for ordinal data, target encoding for high-cardinality features.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <h3 className="font-semibold mb-2">Scaling & Normalization</h3>
              <p className="text-sm text-muted-foreground">
                Standardization (z-score), Min-Max scaling, Robust scaling for data with outliers.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <h3 className="font-semibold mb-2">Feature Interactions</h3>
              <p className="text-sm text-muted-foreground">
                Multiply, divide, or combine features to capture relationships (e.g., price per sqft = price / area).
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <h3 className="font-semibold mb-2">Date/Time Features</h3>
              <p className="text-sm text-muted-foreground">
                Extract day of week, month, hour, is_weekend, time_since_event from datetime columns.
              </p>
            </CardContent>
          </Card>
        </div>

        <h2 className="text-2xl font-bold mt-8 mb-4">Handling Missing Data</h2>
        <ul className="list-disc list-inside space-y-2 mb-6">
          <li><strong>Deletion:</strong> Remove rows or columns with missing values</li>
          <li><strong>Imputation:</strong> Fill with mean, median, mode, or predicted values</li>
          <li><strong>Indicator:</strong> Add binary flag for "is_missing"</li>
          <li><strong>Forward/Backward Fill:</strong> For time series data</li>
        </ul>
      </>
    )
  },
  'feature-selection': {
    title: 'Feature Selection',
    estimatedTime: '10 min',
    difficulty: 'intermediate',
    content: (
      <>
        <p className="text-lg leading-relaxed mb-6">
          Feature selection identifies the most relevant features for your model, reducing dimensionality,
          improving performance, and making models more interpretable.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">Why Select Features?</h2>
        <ul className="list-disc list-inside space-y-2 mb-6">
          <li>Reduces overfitting by removing irrelevant features</li>
          <li>Improves model accuracy and training speed</li>
          <li>Makes models easier to interpret and explain</li>
          <li>Reduces data storage and preprocessing requirements</li>
        </ul>

        <h2 className="text-2xl font-bold mt-8 mb-4">Selection Methods</h2>
        <div className="space-y-4 my-6">
          <Card>
            <CardContent className="p-4">
              <h3 className="font-semibold mb-2">Filter Methods</h3>
              <p className="text-sm text-muted-foreground">
                Statistical tests (correlation, chi-square, mutual information) to score features independently of the model.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <h3 className="font-semibold mb-2">Wrapper Methods</h3>
              <p className="text-sm text-muted-foreground">
                Forward selection, backward elimination, recursive feature elimination — use model performance as criterion.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <h3 className="font-semibold mb-2">Embedded Methods</h3>
              <p className="text-sm text-muted-foreground">
                L1 regularization, tree-based importance, Elastic Net — selection happens during model training.
              </p>
            </CardContent>
          </Card>
        </div>

        <Card className="my-6 bg-accent/50 border-accent">
          <CardContent className="p-6">
            <h3 className="font-semibold mb-2">Practical Tip</h3>
            <p className="text-sm text-muted-foreground">
              Start with filter methods for a quick baseline, then use embedded methods (like Random Forest importance)
              for a more informed selection that accounts for feature interactions.
            </p>
          </CardContent>
        </Card>
      </>
    )
  }
}
