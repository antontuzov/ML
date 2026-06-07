import { useParams, Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { useProgress } from '@/context/ProgressContext'
import { ChevronLeft, ChevronRight, Bookmark, CheckCircle2, Circle } from 'lucide-react'

const articles: Record<string, { title: string; content: React.ReactNode }> = {
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
  },
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
      </>
    )
  },
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
      </>
    )
  },
  basics: {
    title: 'Neural Network Basics',
    content: (
      <>
        <p className="text-lg leading-relaxed mb-6">
          Neural networks are computing systems inspired by biological neural networks in the human brain. 
          They consist of interconnected nodes (neurons) that process information and learn from data 
          through adjustment of connection strengths (weights).
        </p>
        
        <h2 className="text-2xl font-bold mt-8 mb-4">The Biological Inspiration</h2>
        <p className="leading-relaxed mb-4">
          Just as biological neurons receive signals through dendrites, process them, and transmit outputs 
          through axons, artificial neurons receive inputs, apply weights and biases, pass through an 
          activation function, and produce outputs.
        </p>

        <Card className="my-6 bg-accent/50 border-accent">
          <CardContent className="p-6">
            <h3 className="font-semibold mb-2">Key Components of a Neuron</h3>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• <strong>Inputs:</strong> Data features or outputs from previous layer</li>
              <li>• <strong>Weights:</strong> Importance assigned to each input</li>
              <li>• <strong>Bias:</strong> Threshold adjustment for activation</li>
              <li>• <strong>Activation Function:</strong> Determines if neuron fires</li>
              <li>• <strong>Output:</strong> Result passed to next layer</li>
            </ul>
          </CardContent>
        </Card>

        <h2 className="text-2xl font-bold mt-8 mb-4">How a Single Neuron Works</h2>
        <p className="leading-relaxed mb-4">
          Each neuron performs a weighted sum of its inputs, adds a bias term, and applies an activation 
          function:
        </p>
        <div className="bg-muted p-4 rounded-lg mb-6 font-mono text-sm">
          output = activation(weights · inputs + bias)
        </div>

        <h2 className="text-2xl font-bold mt-8 mb-4">Common Activation Functions</h2>
        <div className="grid gap-4 my-6">
          <Card>
            <CardContent className="p-4">
              <h3 className="font-semibold mb-2">Sigmoid</h3>
              <p className="text-sm text-muted-foreground">
                Squashes values between 0 and 1. Useful for binary classification but suffers from vanishing gradient.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <h3 className="font-semibold mb-2">ReLU (Rectified Linear Unit)</h3>
              <p className="text-sm text-muted-foreground">
                Returns 0 for negative inputs, identity for positive. Most popular choice due to simplicity and effectiveness.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <h3 className="font-semibold mb-2">Tanh</h3>
              <p className="text-sm text-muted-foreground">
                Similar to sigmoid but ranges from -1 to 1. Zero-centered, which can help with training.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <h3 className="font-semibold mb-2">Softmax</h3>
              <p className="text-sm text-muted-foreground">
                Converts outputs to probabilities that sum to 1. Used in multi-class classification.
              </p>
            </CardContent>
          </Card>
        </div>

        <h2 className="text-2xl font-bold mt-8 mb-4">The Power of Layers</h2>
        <p className="leading-relaxed mb-4">
          By stacking multiple layers of neurons, neural networks can learn hierarchical representations 
          of data. Early layers capture simple patterns, while deeper layers combine these into complex 
          features.
        </p>

        <Card className="my-6 border-primary/20 bg-primary/5">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              📚 Comprehensive Guide
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-3">
              Foundation of deep learning - understand how artificial neurons mimic biological brains.
            </p>
            <ul className="text-sm space-y-1 text-muted-foreground">
              <li>✓ Biological vs artificial neurons</li>
              <li>✓ Activation function mathematics</li>
              <li>✓ Weight initialization strategies</li>
              <li>✓ Forward propagation mechanics</li>
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
              <p className="text-sm font-medium mb-2">Calculate Neuron Output</p>
              <p className="text-xs text-muted-foreground mb-2">
                Given: Inputs = [0.5, 0.8], Weights = [0.3, 0.7], Bias = 0.1, Activation = ReLU
              </p>
              <div className="text-xs space-y-1 ml-2 mb-2">
                <div>1. Weighted sum = (0.5 × 0.3) + (0.8 × 0.7) + 0.1</div>
                <div>2. Weighted sum = 0.15 + 0.56 + 0.1 = 0.81</div>
                <div>3. ReLU(0.81) = max(0, 0.81) = 0.81</div>
              </div>
              <p className="text-xs text-muted-foreground italic">
                Try: What if bias was -1.0? Answer: ReLU(-0.19) = 0 (neuron doesn't fire)
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
            <div className="space-y-3">
              <div className="bg-background p-4 rounded-lg border">
                <p className="text-sm font-medium mb-3">Activation Function Comparison</p>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="p-2 bg-muted rounded">
                    <strong>Sigmoid</strong><br/>
                    <span className="text-muted-foreground">S-curve, 0 to 1</span>
                  </div>
                  <div className="p-2 bg-muted rounded">
                    <strong>ReLU</strong><br/>
                    <span className="text-muted-foreground">0 for negative, linear for positive</span>
                  </div>
                  <div className="p-2 bg-muted rounded">
                    <strong>Tanh</strong><br/>
                    <span className="text-muted-foreground">S-curve, -1 to 1</span>
                  </div>
                  <div className="p-2 bg-muted rounded">
                    <strong>Softmax</strong><br/>
                    <span className="text-muted-foreground">Probability distribution</span>
                  </div>
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
                <span className="font-mono text-xs bg-muted px-2 py-1 rounded">Neuron</span>
                <span className="text-muted-foreground">Basic computational unit that processes inputs</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="font-mono text-xs bg-muted px-2 py-1 rounded">Weight</span>
                <span className="text-muted-foreground">Importance/strength of a connection</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="font-mono text-xs bg-muted px-2 py-1 rounded">Bias</span>
                <span className="text-muted-foreground">Threshold adjustment for activation</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="font-mono text-xs bg-muted px-2 py-1 rounded">Epoch</span>
                <span className="text-muted-foreground">One complete pass through training data</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </>
    )
  },
  architecture: {
    title: 'Network Architecture',
    content: (
      <>
        <p className="text-lg leading-relaxed mb-6">
          Neural network architecture refers to how neurons are organized into layers and connected. 
          Different architectures are suited for different types of problems and data.
        </p>
        
        <h2 className="text-2xl font-bold mt-8 mb-4">Layer Types</h2>
        <div className="space-y-4 my-6">
          <Card>
            <CardContent className="p-4">
              <h3 className="font-semibold mb-2">Input Layer</h3>
              <p className="text-sm text-muted-foreground">
                Receives raw data features. Number of neurons equals the number of input features.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <h3 className="font-semibold mb-2">Hidden Layers</h3>
              <p className="text-sm text-muted-foreground">
                Intermediate layers that extract features and learn representations. Deep networks have many hidden layers.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <h3 className="font-semibold mb-2">Output Layer</h3>
              <p className="text-sm text-muted-foreground">
                Produces final predictions. Structure depends on the task (single neuron for regression, multiple for classification).
              </p>
            </CardContent>
          </Card>
        </div>

        <h2 className="text-2xl font-bold mt-8 mb-4">Feedforward Neural Networks</h2>
        <p className="leading-relaxed mb-4">
          In feedforward networks, information flows in one direction from input to output. There are no 
          cycles or loops. This is the simplest architecture and forms the basis for more complex networks.
        </p>

        <Card className="my-6 bg-accent/50 border-accent">
          <CardContent className="p-6">
            <h3 className="font-semibold mb-2">Universal Approximation Theorem</h3>
            <p className="text-sm text-muted-foreground">
              A feedforward network with a single hidden layer containing a finite number of neurons can 
              approximate any continuous function, given appropriate activation functions and sufficient neurons.
            </p>
          </CardContent>
        </Card>

        <h2 className="text-2xl font-bold mt-8 mb-4">Deep vs. Shallow Networks</h2>
        <ul className="list-disc list-inside space-y-2 mb-6">
          <li><strong>Shallow Networks:</strong> One or two hidden layers. Simpler but limited capacity.</li>
          <li><strong>Deep Networks:</strong> Many hidden layers. Can learn complex hierarchical features but harder to train.</li>
        </ul>

        <h2 className="text-2xl font-bold mt-8 mb-4">Design Considerations</h2>
        <p className="leading-relaxed mb-4">
          When designing network architecture, consider:
        </p>
        <ul className="list-disc list-inside space-y-2 mb-6">
          <li>Number of layers (depth)</li>
          <li>Number of neurons per layer (width)</li>
          <li>Type of connections (fully connected, sparse, etc.)</li>
          <li>Activation functions for each layer</li>
          <li>Regularization techniques to prevent overfitting</li>
        </ul>
      </>
    )
  },
  training: {
    title: 'Training Techniques',
    content: (
      <>
        <p className="text-lg leading-relaxed mb-6">
          Training neural networks involves adjusting weights and biases to minimize the difference between 
          predicted and actual outputs. This process requires careful selection of algorithms, hyperparameters, 
          and optimization strategies.
        </p>
        
        <h2 className="text-2xl font-bold mt-8 mb-4">Backpropagation</h2>
        <p className="leading-relaxed mb-4">
          Backpropagation is the fundamental algorithm for training neural networks. It calculates gradients 
          of the loss function with respect to each weight by applying the chain rule of calculus, working 
          backward from the output layer.
        </p>
        <ol className="list-decimal list-inside space-y-2 mb-6">
          <li>Forward pass: Compute predictions</li>
          <li>Calculate loss: Measure prediction error</li>
          <li>Backward pass: Compute gradients</li>
          <li>Update weights: Adjust parameters using gradients</li>
        </ol>

        <Card className="my-6 bg-accent/50 border-accent">
          <CardContent className="p-6">
            <h3 className="font-semibold mb-2">Gradient Descent Variants</h3>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• <strong>Batch GD:</strong> Uses entire dataset for each update (slow but stable)</li>
              <li>• <strong>Stochastic GD:</strong> Uses one sample per update (fast but noisy)</li>
              <li>• <strong>Mini-batch GD:</strong> Uses small batches (best of both worlds)</li>
            </ul>
          </CardContent>
        </Card>

        <h2 className="text-2xl font-bold mt-8 mb-4">Optimization Algorithms</h2>
        <div className="grid gap-4 my-6">
          <Card>
            <CardContent className="p-4">
              <h3 className="font-semibold mb-2">SGD (Stochastic Gradient Descent)</h3>
              <p className="text-sm text-muted-foreground">
                Basic optimizer that updates weights using gradient and learning rate.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <h3 className="font-semibold mb-2">Adam</h3>
              <p className="text-sm text-muted-foreground">
                Adaptive optimizer that combines momentum and RMSProp. Most popular choice for deep learning.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <h3 className="font-semibold mb-2">RMSprop</h3>
              <p className="text-sm text-muted-foreground">
                Adapts learning rate for each parameter based on recent gradients.
              </p>
            </CardContent>
          </Card>
        </div>

        <h2 className="text-2xl font-bold mt-8 mb-4">Learning Rate</h2>
        <p className="leading-relaxed mb-4">
          The learning rate controls how much weights change during each update. Too high, and training 
          diverges; too low, and training is slow. Learning rate schedules gradually decrease the rate 
          during training.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">Regularization Techniques</h2>
        <ul className="list-disc list-inside space-y-2 mb-6">
          <li><strong>Dropout:</strong> Randomly deactivate neurons during training to prevent co-adaptation</li>
          <li><strong>L1/L2 Regularization:</strong> Add penalty terms to loss function to keep weights small</li>
          <li><strong>Batch Normalization:</strong> Normalize layer inputs to stabilize training</li>
          <li><strong>Early Stopping:</strong> Stop training when validation performance stops improving</li>
          <li><strong>Data Augmentation:</strong> artificially increase training data variety</li>
        </ul>

        <h2 className="text-2xl font-bold mt-8 mb-4">Best Practices</h2>
        <p className="leading-relaxed mb-4">
          Start with simple architectures, use proper weight initialization, monitor training and validation 
          curves, experiment with different optimizers, and use cross-validation to ensure generalization.
        </p>
      </>
    )
  },
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
      </>
    )
  },
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
      </>
    )
  },
}

export default function ArticlePage({ articleId: propArticleId }: { articleId?: string }) {
  const { articleId: paramArticleId } = useParams()
  const articleId = propArticleId || paramArticleId || 'intro'
  const article = articles[articleId] || articles['intro']
  const { completedSections, toggleSection } = useProgress()
  const isCompleted = completedSections.includes(articleId)

  // Get all article IDs in order
  const articleIds = Object.keys(articles)
  const currentIndex = articleIds.indexOf(articleId)
  const prevArticleId = currentIndex > 0 ? articleIds[currentIndex - 1] : null
  const nextArticleId = currentIndex < articleIds.length - 1 ? articleIds[currentIndex + 1] : null

  return (
    <div className="max-w-4xl mx-auto p-6 lg:p-8">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
        <span>Dashboard</span>
        <ChevronRight className="h-4 w-4" />
        <span className="text-foreground">{article.title}</span>
      </nav>

      {/* Article Header */}
      <div className="flex items-start justify-between mb-8">
        <h1 className="text-3xl lg:text-4xl font-bold">{article.title}</h1>
        <div className="flex gap-2">
          <Button 
            variant={isCompleted ? "default" : "outline"} 
            size="sm"
            onClick={() => toggleSection(articleId)}
          >
            {isCompleted ? (
              <>
                <CheckCircle2 className="h-4 w-4 mr-2" />
                Completed
              </>
            ) : (
              <>
                <Circle className="h-4 w-4 mr-2" />
                Mark Complete
              </>
            )}
          </Button>
          <Button variant="ghost" size="icon">
            <Bookmark className="h-5 w-5" />
          </Button>
        </div>
      </div>

      {/* Article Content */}
      <article className="prose prose-slate max-w-none">
        {article.content}
      </article>

      {/* Navigation */}
      <div className="flex items-center justify-between mt-12 pt-8 border-t">
        {prevArticleId ? (
          <Link to={`/dashboard/article/${prevArticleId}`}>
            <Button variant="outline">
              <ChevronLeft className="h-4 w-4 mr-2" />
              Previous
            </Button>
          </Link>
        ) : (
          <div />
        )}
        {nextArticleId ? (
          <Link to={`/dashboard/article/${nextArticleId}`}>
            <Button>
              Next
              <ChevronRight className="h-4 w-4 ml-2" />
            </Button>
          </Link>
        ) : (
          <div />
        )}
      </div>
    </div>
  )
}
