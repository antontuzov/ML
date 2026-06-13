import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { BookOpen, Brain, ChartBar, Zap, ArrowRight, Sparkles, Clock, Trophy } from 'lucide-react'
import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5, ease: 'easeOut' as const } })
}

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: (i: number) => ({ opacity: 1, scale: 1, transition: { delay: i * 0.08, duration: 0.4 } })
}

const features = [
  { icon: BookOpen, title: '12 Chapters', description: 'From fundamentals to cutting-edge topics like diffusion models & RLHF', color: 'from-blue-500 to-cyan-500' },
  { icon: Brain, title: '35+ Articles', description: 'Deep-dive articles with interactive exercises and visual explanations', color: 'from-purple-500 to-pink-500' },
  { icon: ChartBar, title: 'Visual Learning', description: 'Diagrams, flowcharts, and comparison tables for every concept', color: 'from-orange-500 to-red-500' },
  { icon: Zap, title: 'Practical Tips', description: 'Real-world advice, algorithm selection guides, and industry best practices', color: 'from-green-500 to-emerald-500' }
]

const topics = [
  { name: 'Introduction to ML', icon: '🚀', count: 4 },
  { name: 'Supervised Learning', icon: '📊', count: 3 },
  { name: 'Unsupervised Learning', icon: '🔍', count: 3 },
  { name: 'Neural Networks', icon: '🧠', count: 3 },
  { name: 'Deep Learning Architectures', icon: '⚡', count: 3 },
  { name: 'Model Evaluation', icon: '📈', count: 3 },
  { name: 'Feature Engineering', icon: '🔧', count: 2 },
  { name: 'Ensemble Methods', icon: '🌲', count: 2 },
  { name: 'Probabilistic Models', icon: '🎲', count: 3 },
  { name: 'Generative Models', icon: '🎨', count: 3 },
  { name: 'Recommendation Systems', icon: '🎯', count: 3 },
  { name: 'Reinforcement Learning', icon: '🎮', count: 2 }
]

const stats = [
  { label: 'Chapters', value: '12', icon: BookOpen },
  { label: 'Articles', value: '35+', icon: FileText },
  { label: 'Exercises', value: '50+', icon: Trophy },
  { label: 'Reading Time', value: '8h+', icon: Clock }
]

// Re-use Users icon for file-text alternative
function FileText(props: React.SVGProps<SVGSVGElement> & { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" x2="8" y1="13" y2="13" />
      <line x1="16" x2="8" y1="17" y2="17" />
      <line x1="10" x2="8" y1="9" y2="9" />
    </svg>
  )
}

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-32">
        {/* Background decoration */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute left-1/4 top-0 h-[600px] w-[600px] rounded-full bg-primary/5 blur-3xl" />
          <div className="absolute right-1/4 top-20 h-[400px] w-[400px] rounded-full bg-purple-500/5 blur-3xl" />
          <div className="absolute left-1/2 bottom-0 h-[300px] w-[300px] -translate-x-1/2 rounded-full bg-blue-500/5 blur-3xl" />
        </div>

        <div className="container relative z-10">
          <div className="mx-auto max-w-4xl text-center">
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border bg-muted/50 px-4 py-1.5 text-sm text-muted-foreground"
            >
              <Sparkles className="h-4 w-4 text-primary" />
              <span>Complete ML Handbook — Learn at Your Own Pace</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl font-bold tracking-tight sm:text-7xl mb-6"
            >
              Master{' '}
              <span className="bg-gradient-to-r from-primary to-orange-400 bg-clip-text text-transparent">
                Machine Learning
              </span>
              <br />
              Step by Step
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-muted-foreground mb-10 leading-relaxed max-w-2xl mx-auto"
            >
              A comprehensive, interactive course covering everything from linear regression to diffusion models.
              Built for engineers, data scientists, and curious minds.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link to="/dashboard">
                <Button size="lg" className="w-full sm:w-auto group">
                  Start Learning
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <a href="#topics">
                <Button size="lg" variant="outline" className="w-full sm:w-auto">
                  Browse Topics
                </Button>
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="border-y bg-muted/30">
        <div className="container py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={scaleIn}
                className="text-center"
              >
                <stat.icon className="h-6 w-6 mx-auto mb-2 text-primary" />
                <div className="text-2xl font-bold">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 lg:py-24">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-3xl text-center mb-12"
          >
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              Why This Handbook?
            </h2>
            <p className="text-lg text-muted-foreground">
              More than just theory — interactive exercises, visual explanations, and practical tips
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
              >
                <Card className="h-full border-2 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group">
                  <CardHeader>
                    <div className={`inline-flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br ${feature.color} text-white mb-3 group-hover:scale-110 transition-transform`}>
                      <feature.icon className="h-6 w-6" />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                    <CardDescription>{feature.description}</CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Topics Section */}
      <section id="topics" className="py-16 lg:py-24 bg-muted/30">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-3xl text-center mb-12"
          >
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              Complete Curriculum
            </h2>
            <p className="text-lg text-muted-foreground">
              12 chapters covering the full ML landscape — from basics to state-of-the-art
            </p>
          </motion.div>

          <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
            {topics.map((topic, i) => (
              <motion.div
                key={topic.name}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
              >
                <div className="flex items-center gap-3 p-4 rounded-xl border bg-background hover:border-primary/40 hover:shadow-sm transition-all duration-300 cursor-pointer group">
                  <span className="text-2xl">{topic.icon}</span>
                  <div className="flex-1">
                    <span className="font-medium group-hover:text-primary transition-colors">{topic.name}</span>
                  </div>
                  <span className="text-xs text-muted-foreground bg-muted px-2 py-0.5 rounded-full">
                    {topic.count} articles
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Path */}
      <section className="py-16 lg:py-24">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-3xl text-center mb-12"
          >
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              Your Learning Path
            </h2>
            <p className="text-lg text-muted-foreground">
              Follow a structured journey from fundamentals to advanced topics
            </p>
          </motion.div>

          <div className="mx-auto max-w-2xl">
            {[
              { step: '01', title: 'Foundation', desc: 'ML basics, types of learning, key terminology', chapters: 'Chapters 1-3' },
              { step: '02', title: 'Core Algorithms', desc: 'Classification, regression, clustering, trees', chapters: 'Chapters 2-4' },
              { step: '03', title: 'Deep Learning', desc: 'Neural networks, CNNs, RNNs, Transformers', chapters: 'Chapters 5-6' },
              { step: '04', title: 'Advanced Topics', desc: 'Generative models, RL, recommendation systems', chapters: 'Chapters 7-12' }
            ].map((item, i) => (
              <motion.div
                key={item.step}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="flex gap-6 mb-6 last:mb-0"
              >
                <div className="flex-shrink-0 w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-lg">
                  {item.step}
                </div>
                <div className="flex-1 pb-6 border-b last:border-0">
                  <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground mb-2">{item.desc}</p>
                  <span className="text-xs text-primary font-medium">{item.chapters}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pro Tips Section */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-3xl text-center mb-12"
          >
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              Pro Tips Inside
            </h2>
            <p className="text-lg text-muted-foreground">
              Every article includes practical tips to help you apply concepts in real projects
            </p>
          </motion.div>

          <div className="grid gap-4 md:grid-cols-3 max-w-3xl mx-auto">
            {[
              { icon: '💡', title: 'Algorithm Selection', desc: 'When to use which model — decision trees, SVMs, neural nets, or boosting' },
              { icon: '⚠️', title: 'Common Pitfalls', desc: 'Avoid overfitting, data leakage, and other frequent mistakes' },
              { icon: '🚀', title: 'Production Tips', desc: 'Deploy models efficiently, monitor drift, and handle scale' }
            ].map((tip, i) => (
              <motion.div
                key={tip.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={scaleIn}
              >
                <Card className="h-full text-center hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="text-4xl mb-3">{tip.icon}</div>
                    <h3 className="font-semibold mb-2">{tip.title}</h3>
                    <p className="text-sm text-muted-foreground">{tip.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card className="bg-gradient-to-br from-primary to-orange-500 text-white border-0 overflow-hidden relative">
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iYSIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVHJhbnNmb3JtPSJyb3RhdGUoNDUpIj48cGF0aCBkPSJNIC0xMCA0MCBMIDQwIC0xMCBNIC0xMCA4MCBMIDgwIC0xMCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDUpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjYSkiLz48L3N2Zz4=')] opacity-30" />
              <CardContent className="relative p-8 lg:p-16">
                <div className="mx-auto max-w-2xl text-center">
                  <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                    Ready to Start Your ML Journey?
                  </h2>
                  <p className="text-lg opacity-90 mb-8">
                    Join thousands of learners mastering machine learning with our interactive,
                    comprehensive handbook. Free forever.
                  </p>
                  <Link to="/dashboard">
                    <Button size="lg" className="bg-white text-primary hover:bg-white/90 shadow-lg">
                      Get Started Free
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </motion.div>
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
              Built with care for the ML community. Inspired by Yandex ML Handbook & SHAD traditions.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
