import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { BookOpen, Brain, ChartBar, Zap, CheckCircle, Users } from 'lucide-react'

const features = [
  {
    icon: BookOpen,
    title: 'Comprehensive Guide',
    description: 'From basics to advanced concepts in machine learning'
  },
  {
    icon: Brain,
    title: 'Interactive Learning',
    description: 'Hands-on examples and practical exercises'
  },
  {
    icon: ChartBar,
    title: 'Visual Explanations',
    description: 'Clear diagrams and visual representations'
  },
  {
    icon: Zap,
    title: 'Quick Reference',
    description: 'Easy-to-navigate handbook for quick lookups'
  }
]

const topics = [
  'Introduction to Machine Learning',
  'Supervised Learning',
  'Unsupervised Learning',
  'Neural Networks',
  'Deep Learning',
  'Model Evaluation',
  'Feature Engineering',
  'Ensemble Methods'
]

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-32">
        <div className="container relative z-10">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-6">
              Machine Learning{' '}
              <span className="text-primary">Handbook</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Your comprehensive guide to understanding and mastering machine learning. 
              From fundamental concepts to advanced techniques, learn at your own pace.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/dashboard">
                <Button size="lg" className="w-full sm:w-auto">
                  Start Learning
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="w-full sm:w-auto">
                Browse Topics
              </Button>
            </div>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-primary/5 blur-3xl" />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 lg:py-24">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <Card key={feature.title} className="border-2 hover:border-primary/50 transition-colors">
                <CardHeader>
                  <feature.icon className="h-10 w-10 text-primary mb-2" />
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                  <CardDescription>{feature.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Topics Section */}
      <section className="py-16 lg:py-24 bg-card">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4">
              What You'll Learn
            </h2>
            <p className="text-lg text-muted-foreground">
              Master essential machine learning concepts through our structured curriculum
            </p>
          </div>
          
          <div className="grid gap-4 md:grid-cols-2">
            {topics.map((topic, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-4 rounded-lg border bg-background hover:border-primary/50 transition-colors"
              >
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="font-medium">{topic}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24">
        <div className="container">
          <Card className="bg-primary text-primary-foreground">
            <CardContent className="p-8 lg:p-12">
              <div className="mx-auto max-w-2xl text-center">
                <h2 className="text-3xl font-bold mb-4">
                  Ready to Start Your ML Journey?
                </h2>
                <p className="text-lg opacity-90 mb-8">
                  Join thousands of learners who have mastered machine learning with our interactive handbook.
                </p>
                <Link to="/dashboard">
                  <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
                    Get Started Free
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <Brain className="h-6 w-6 text-primary" />
              <span className="font-semibold">ML Handbook</span>
            </div>
            <p className="text-sm text-muted-foreground">
              © 2024 ML Handbook. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
