import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Article } from './types'

export const introductionArticles: Record<string, Article> = {
  intro: {
    title: 'Introduction to Machine Learning',
    content: (
      <>
        <p className="text-lg leading-relaxed mb-6">
          Machine learning is a subset of artificial intelligence that focuses on building systems 
          that can learn from and make decisions based on data. Unlike traditional programming where 
          rules are explicitly coded, machine learning algorithms identify patterns in data and use 
          them to make predictions or decisions.
        </p>
        
        <h2 className="text-2xl font-bold mt-8 mb-4">What is Machine Learning?</h2>
        <p className="leading-relaxed mb-4">
          At its core, machine learning is about creating algorithms that can automatically improve 
          through experience. These algorithms build mathematical models based on sample data, known 
          as training data, to make predictions or decisions without being explicitly programmed to 
          perform the task.
        </p>
        
        <Card className="my-6 bg-accent/50 border-accent">
          <CardContent className="p-6">
            <h3 className="font-semibold mb-2">Key Concept</h3>
            <p className="text-sm text-muted-foreground">
              Machine learning enables computers to learn from data and improve their performance 
              over time without being explicitly programmed for every scenario.
            </p>
          </CardContent>
        </Card>

        <h2 className="text-2xl font-bold mt-8 mb-4">Why Machine Learning Matters</h2>
        <ul className="list-disc list-inside space-y-2 mb-6">
          <li>Automates decision-making processes</li>
          <li>Discovers patterns humans might miss</li>
          <li>Scales to handle massive amounts of data</li>
          <li>Continuously improves with more data</li>
          <li>Enables personalized experiences</li>
        </ul>

        <h2 className="text-2xl font-bold mt-8 mb-4">Real-World Applications</h2>
        <p className="leading-relaxed mb-4">
          Machine learning powers many technologies we use daily, from email spam filters and 
          recommendation systems to voice assistants and autonomous vehicles. Understanding these 
          fundamentals opens doors to countless career opportunities in technology.
        </p>

        <Card className="my-6 border-primary/20 bg-primary/5">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              📚 Comprehensive Guide
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-3">
              This introduction covers the foundational concepts you need before diving into specific ML techniques.
            </p>
            <ul className="text-sm space-y-1 text-muted-foreground">
              <li>✓ Definition and core principles of ML</li>
              <li>✓ Historical context and evolution</li>
              <li>✓ Key terminology and concepts</li>
              <li>✓ Real-world impact and applications</li>
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
                <p className="text-sm font-medium mb-2">Exercise 1: Identify ML Applications</p>
                <p className="text-xs text-muted-foreground mb-2">
                  Which of these use machine learning?
                </p>
                <ul className="text-xs space-y-1 ml-4">
                  <li>□ Email spam filter</li>
                  <li>□ Calculator app</li>
                  <li>□ Netflix recommendations</li>
                  <li>□ Simple if-else statement</li>
                </ul>
                <p className="text-xs text-muted-foreground mt-2 italic">
                  Answer: Spam filters and Netflix recommendations use ML. Calculators and simple if-else statements follow explicit rules.
                </p>
              </div>
              <div className="bg-background p-3 rounded-lg border">
                <p className="text-sm font-medium mb-2">Exercise 2: Traditional vs ML Approach</p>
                <p className="text-xs text-muted-foreground">
                  For predicting house prices, compare:
                </p>
                <div className="grid grid-cols-2 gap-2 mt-2 text-xs">
                  <div className="p-2 bg-muted rounded">
                    <strong>Traditional:</strong><br/>
                    Fixed formula based on square footage
                  </div>
                  <div className="p-2 bg-muted rounded">
                    <strong>ML Approach:</strong><br/>
                    Learn from thousands of past sales
                  </div>
                </div>
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
            <div className="space-y-4">
              <div className="bg-background p-4 rounded-lg border">
                <p className="text-sm font-medium mb-3">Traditional Programming vs Machine Learning</p>
                <div className="grid grid-cols-2 gap-4 text-xs">
                  <div>
                    <strong className="text-primary">Traditional:</strong>
                    <div className="mt-2 p-2 bg-muted rounded">
                      Data + Rules → Answers
                    </div>
                  </div>
                  <div>
                    <strong className="text-primary">Machine Learning:</strong>
                    <div className="mt-2 p-2 bg-muted rounded">
                      Data + Answers → Rules
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-background p-4 rounded-lg border">
                <p className="text-sm font-medium mb-2">The ML Workflow</p>
                <div className="flex items-center justify-between text-xs">
                  <div className="flex-1 text-center p-2 bg-primary/10 rounded">Collect Data</div>
                  <span className="mx-1">→</span>
                  <div className="flex-1 text-center p-2 bg-primary/10 rounded">Train Model</div>
                  <span className="mx-1">→</span>
                  <div className="flex-1 text-center p-2 bg-primary/10 rounded">Evaluate</div>
                  <span className="mx-1">→</span>
                  <div className="flex-1 text-center p-2 bg-primary/10 rounded">Deploy</div>
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
                <span className="font-mono text-xs bg-muted px-2 py-1 rounded">ML</span>
                <span className="text-muted-foreground">Machine Learning - algorithms that learn from data</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="font-mono text-xs bg-muted px-2 py-1 rounded">AI</span>
                <span className="text-muted-foreground">Artificial Intelligence - broader field including ML</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="font-mono text-xs bg-muted px-2 py-1 rounded">Training Data</span>
                <span className="text-muted-foreground">Historical data used to teach the model</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="font-mono text-xs bg-muted px-2 py-1 rounded">Model</span>
                <span className="text-muted-foreground">The learned representation/pattern from data</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="font-mono text-xs bg-muted px-2 py-1 rounded">Prediction</span>
                <span className="text-muted-foreground">Output generated by the model for new data</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </>
    )
  },
  'what-is-ml': {
    title: 'What is Machine Learning?',
    content: (
      <>
        <p className="text-lg leading-relaxed mb-6">
          Machine learning represents a paradigm shift in how we approach problem-solving with computers. 
          Instead of writing explicit instructions for every possible scenario, we teach machines to learn 
          from examples.
        </p>
        
        <h2 className="text-2xl font-bold mt-8 mb-4">The Learning Process</h2>
        <p className="leading-relaxed mb-4">
          Just like humans learn from experience, machine learning models learn from data. The process 
          involves feeding the algorithm large amounts of data, allowing it to identify patterns, and 
          then using those patterns to make predictions on new, unseen data.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">Types of Problems ML Solves</h2>
        <div className="grid gap-4 my-6">
          <Card>
            <CardContent className="p-4">
              <h3 className="font-semibold mb-2">Prediction</h3>
              <p className="text-sm text-muted-foreground">
                Forecasting future values based on historical data, such as stock prices or weather.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <h3 className="font-semibold mb-2">Classification</h3>
              <p className="text-sm text-muted-foreground">
                Categorizing data into predefined groups, like spam detection or image recognition.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <h3 className="font-semibold mb-2">Pattern Recognition</h3>
              <p className="text-sm text-muted-foreground">
                Identifying regularities in data that may not be obvious to human observers.
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
              Deep dive into what makes ML different from traditional programming and AI.
            </p>
            <ul className="text-sm space-y-1 text-muted-foreground">
              <li>✓ Learning paradigms explained</li>
              <li>✓ When to use ML vs traditional approaches</li>
              <li>✓ Data requirements and quality</li>
              <li>✓ Common misconceptions about ML</li>
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
              <p className="text-sm font-medium mb-2">Think About It</p>
              <p className="text-xs text-muted-foreground mb-2">
                You want to build a system that detects fraudulent credit card transactions. Would you use:
              </p>
              <div className="space-y-2 text-xs">
                <div className="p-2 bg-muted rounded">
                  <strong>Option A:</strong> Write rules like "if transaction {'>'} $10,000 AND foreign country"
                </div>
                <div className="p-2 bg-muted rounded">
                  <strong>Option B:</strong> Train on millions of past transactions (fraudulent & legitimate)
                </div>
              </div>
              <p className="text-xs text-muted-foreground mt-2 italic">
                Answer: Option B (ML) is better because fraud patterns evolve and are complex. Rules miss subtle patterns.
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
              <p className="text-sm font-medium mb-3">How ML Learns from Data</p>
              <div className="space-y-2 text-xs">
                <div className="flex items-center gap-2">
                  <div className="w-20 text-right font-medium">Training:</div>
                  <div className="flex-1 p-2 bg-primary/10 rounded">Historical Data + Known Outcomes</div>
                  <span>→</span>
                  <div className="flex-1 p-2 bg-primary/10 rounded">Learned Model</div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-20 text-right font-medium">Prediction:</div>
                  <div className="flex-1 p-2 bg-primary/10 rounded">New Data</div>
                  <span>→</span>
                  <div className="flex-1 p-2 bg-primary/10 rounded">Model → Prediction</div>
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
                <span className="font-mono text-xs bg-muted px-2 py-1 rounded">Supervised</span>
                <span className="text-muted-foreground">Learning with labeled examples (input-output pairs)</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="font-mono text-xs bg-muted px-2 py-1 rounded">Unsupervised</span>
                <span className="text-muted-foreground">Finding patterns in unlabeled data</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="font-mono text-xs bg-muted px-2 py-1 rounded">Features</span>
                <span className="text-muted-foreground">Input variables/attributes used for learning</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="font-mono text-xs bg-muted px-2 py-1 rounded">Labels</span>
                <span className="text-muted-foreground">Target outputs in supervised learning</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </>
    )
  },
  'types-of-ml': {
    title: 'Types of Machine Learning',
    content: (
      <>
        <p className="text-lg leading-relaxed mb-6">
          Machine learning can be categorized into several types based on how the algorithm learns 
          and what kind of feedback it receives during training.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">Supervised Learning</h2>
        <p className="leading-relaxed mb-4">
          In supervised learning, the algorithm learns from labeled training data. Each example in 
          the training set includes both input features and the correct output. The goal is to learn 
          a mapping function from inputs to outputs.
        </p>
        <ul className="list-disc list-inside space-y-2 mb-6">
          <li>Classification: Predicting discrete categories</li>
          <li>Regression: Predicting continuous values</li>
        </ul>

        <h2 className="text-2xl font-bold mt-8 mb-4">Unsupervised Learning</h2>
        <p className="leading-relaxed mb-4">
          Unsupervised learning works with unlabeled data. The algorithm must find structure and 
          patterns in the data without any guidance on what the correct answers should be.
        </p>
        <ul className="list-disc list-inside space-y-2 mb-6">
          <li>Clustering: Grouping similar data points</li>
          <li>Association: Finding rules that describe data</li>
          <li>Dimensionality Reduction: Simplifying data</li>
        </ul>

        <h2 className="text-2xl font-bold mt-8 mb-4">Reinforcement Learning</h2>
        <p className="leading-relaxed mb-4">
          Reinforcement learning involves an agent that learns by interacting with an environment. 
          The agent receives rewards or penalties based on its actions and learns to maximize 
          cumulative rewards over time.
        </p>

        <Card className="my-6 border-primary/20 bg-primary/5">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              📚 Comprehensive Guide
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-3">
              Understand the three main paradigms of machine learning and when to use each.
            </p>
            <ul className="text-sm space-y-1 text-muted-foreground">
              <li>✓ Detailed comparison of learning types</li>
              <li>✓ Real-world examples for each type</li>
              <li>✓ Hybrid approaches and semi-supervised learning</li>
              <li>✓ Choosing the right approach for your problem</li>
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
              <p className="text-sm font-medium mb-2">Match the Scenario</p>
              <p className="text-xs text-muted-foreground mb-2">
                Which type of ML would you use?
              </p>
              <div className="space-y-2 text-xs">
                <div className="p-2 bg-muted rounded">
                  <strong>1.</strong> Group customers by purchasing behavior (no labels)<br/>
                  <span className="text-primary">→ Unsupervised (Clustering)</span>
                </div>
                <div className="p-2 bg-muted rounded">
                  <strong>2.</strong> Predict house prices from historical sales<br/>
                  <span className="text-primary">→ Supervised (Regression)</span>
                </div>
                <div className="p-2 bg-muted rounded">
                  <strong>3.</strong> Train robot to walk through trial and error<br/>
                  <span className="text-primary">→ Reinforcement Learning</span>
                </div>
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
              <p className="text-sm font-medium mb-3">Learning Types Comparison</p>
              <div className="grid grid-cols-3 gap-2 text-xs">
                <div className="p-2 bg-primary/10 rounded text-center">
                  <strong>Supervised</strong><br/>
                  <span className="text-muted-foreground">Labeled Data → Model</span>
                </div>
                <div className="p-2 bg-primary/10 rounded text-center">
                  <strong>Unsupervised</strong><br/>
                  <span className="text-muted-foreground">Unlabeled Data → Patterns</span>
                </div>
                <div className="p-2 bg-primary/10 rounded text-center">
                  <strong>Reinforcement</strong><br/>
                  <span className="text-muted-foreground">Actions → Rewards → Policy</span>
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
                <span className="font-mono text-xs bg-muted px-2 py-1 rounded">Labels</span>
                <span className="text-muted-foreground">Known outputs in training data</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="font-mono text-xs bg-muted px-2 py-1 rounded">Agent</span>
                <span className="text-muted-foreground">Learner/decision-maker in RL</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="font-mono text-xs bg-muted px-2 py-1 rounded">Reward</span>
                <span className="text-muted-foreground">Feedback signal in reinforcement learning</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="font-mono text-xs bg-muted px-2 py-1 rounded">Semi-supervised</span>
                <span className="text-muted-foreground">Mix of labeled and unlabeled data</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </>
    )
  },
  applications: {
    title: 'Applications of Machine Learning',
    content: (
      <>
        <p className="text-lg leading-relaxed mb-6">
          Machine learning has transformed numerous industries and continues to create new 
          possibilities across virtually every sector.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">Healthcare</h2>
        <p className="leading-relaxed mb-4">
          ML algorithms assist in disease diagnosis, drug discovery, personalized treatment plans, 
          and medical imaging analysis. They can detect patterns in patient data that might indicate 
          health risks before symptoms appear.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">Finance</h2>
        <p className="leading-relaxed mb-4">
          From fraud detection and risk assessment to algorithmic trading and credit scoring, 
          machine learning helps financial institutions make better decisions and protect customers.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">Technology</h2>
        <ul className="list-disc list-inside space-y-2 mb-6">
          <li>Natural Language Processing for translation and chatbots</li>
          <li>Computer Vision for image and video analysis</li>
          <li>Recommendation Systems for personalized content</li>
          <li>Voice Recognition for virtual assistants</li>
        </ul>

        <h2 className="text-2xl font-bold mt-8 mb-4">Transportation</h2>
        <p className="leading-relaxed mb-4">
          Autonomous vehicles, route optimization, and predictive maintenance all rely on 
          machine learning to improve safety and efficiency.
        </p>

        <Card className="my-6 border-primary/20 bg-primary/5">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              📚 Comprehensive Guide
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-3">
              Explore how ML is revolutionizing industries with real-world case studies.
            </p>
            <ul className="text-sm space-y-1 text-muted-foreground">
              <li>✓ Industry-specific use cases and examples</li>
              <li>✓ ROI and business impact analysis</li>
              <li>✓ Implementation challenges and solutions</li>
              <li>✓ Emerging applications and future trends</li>
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
              <p className="text-sm font-medium mb-2">Industry Challenge</p>
              <p className="text-xs text-muted-foreground mb-2">
                A retail company wants to reduce customer churn. Which ML application would help most?
              </p>
              <div className="space-y-2 text-xs">
                <div className="p-2 bg-muted rounded">
                  <strong>A.</strong> Image recognition for product photos
                </div>
                <div className="p-2 bg-muted rounded">
                  <strong>B.</strong> Predictive analytics to identify at-risk customers
                </div>
                <div className="p-2 bg-muted rounded">
                  <strong>C.</strong> Speech recognition for call centers
                </div>
              </div>
              <p className="text-xs text-muted-foreground mt-2 italic">
                Answer: B - Predictive analytics can identify patterns indicating customers likely to leave.
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
              <p className="text-sm font-medium mb-3">ML Impact Across Industries</p>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="p-2 bg-primary/10 rounded">
                  <strong>Healthcare</strong><br/>
                  <span className="text-muted-foreground">Diagnosis, drug discovery, personalized medicine</span>
                </div>
                <div className="p-2 bg-primary/10 rounded">
                  <strong>Finance</strong><br/>
                  <span className="text-muted-foreground">Fraud detection, trading, risk assessment</span>
                </div>
                <div className="p-2 bg-primary/10 rounded">
                  <strong>Retail</strong><br/>
                  <span className="text-muted-foreground">Recommendations, inventory, pricing</span>
                </div>
                <div className="p-2 bg-primary/10 rounded">
                  <strong>Manufacturing</strong><br/>
                  <span className="text-muted-foreground">Quality control, predictive maintenance</span>
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
                <span className="font-mono text-xs bg-muted px-2 py-1 rounded">NLP</span>
                <span className="text-muted-foreground">Natural Language Processing - text/speech understanding</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="font-mono text-xs bg-muted px-2 py-1 rounded">CV</span>
                <span className="text-muted-foreground">Computer Vision - image/video analysis</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="font-mono text-xs bg-muted px-2 py-1 rounded">RecSys</span>
                <span className="text-muted-foreground">Recommendation Systems - personalized suggestions</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="font-mono text-xs bg-muted px-2 py-1 rounded">IoT + ML</span>
                <span className="text-muted-foreground">Smart devices with embedded intelligence</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </>
    )
  }
}