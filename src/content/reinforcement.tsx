import { Card, CardContent } from '@/components/ui/card'
import { Article } from './types'

export const reinforcementArticles: Record<string, Article> = {
  'rl-intro': {
    title: 'Introduction to Reinforcement Learning',
    estimatedTime: '14 min',
    difficulty: 'intermediate',
    content: (
      <>
        <p className="text-lg leading-relaxed mb-6">
          Reinforcement Learning (RL) is about agents learning to make decisions by interacting
          with an environment. The agent learns a policy that maximizes cumulative rewards through
          trial and error — no labeled data required.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">Key Components</h2>
        <div className="space-y-4 my-6">
          <Card>
            <CardContent className="p-4">
              <h3 className="font-semibold mb-2">Agent</h3>
              <p className="text-sm text-muted-foreground">
                The learner/decision maker that takes actions in the environment.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <h3 className="font-semibold mb-2">Environment</h3>
              <p className="text-sm text-muted-foreground">
                The world the agent interactss with. Transitions between states based on agent actions.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <h3 className="font-semibold mb-2">State (S)</h3>
              <p className="text-sm text-muted-foreground">
                Current situation/representation of the environment at a given time.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <h3 className="font-semibold mb-2">Action (A)</h3>
              <p className="text-sm text-muted-foreground">
                What the agent can do in a given state.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <h3 className="font-semibold mb-2">Reward (R)</h3>
              <p className="text-sm text-muted-foreground">
                Scalar feedback signal indicating how good the action was.
              </p>
            </CardContent>
          </Card>
        </div>

        <h2 className="text-2xl font-bold mt-8 mb-4">The RL Loop</h2>
        <div className="bg-muted p-4 rounded-lg mb-6">
          <div className="flex items-center justify-between text-xs">
            <div className="flex-1 text-center p-2 bg-primary/10 rounded">Observe State</div>
            <span className="mx-1">→</span>
            <div className="flex-1 text-center p-2 bg-primary/10 rounded">Choose Action</div>
            <span className="mx-1">→</span>
            <div className="flex-1 text-center p-2 bg-primary/10 rounded">Get Reward</div>
            <span className="mx-1">→</span>
            <div className="flex-1 text-center p-2 bg-primary/10 rounded">Update Policy</div>
            <span className="mx-1">→</span>
            <div className="flex-1 text-center p-2 bg-primary/10 rounded">Repeat</div>
          </div>
        </div>

        <h2 className="text-2xl font-bold mt-8 mb-4">Exploration vs Exploitation</h2>
        <p className="leading-relaxed mb-4">
          The fundamental trade-off: should the agent exploit known good actions, or explore
          unknown ones that might be even better? Strategies include ε-greedy, UCB (Upper
          Confidence Bound), and Thompson sampling.
        </p>

        <Card className="my-6 bg-accent/50 border-accent">
          <CardContent className="p-6">
            <h3 className="font-semibold mb-2">Real-World Applications</h3>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• Game playing (AlphaGo, OpenAI Five)</li>
              <li>• Robotics (walking, grasping, manipulation)</li>
              <li>• Autonomous driving</li>
              <li>• Resource allocation and scheduling</li>
              <li>• Trading and portfolio optimization</li>
            </ul>
          </CardContent>
        </Card>
      </>
    )
  },
  'rl-algorithms': {
    title: 'RL Algorithms & Deep RL',
    estimatedTime: '16 min',
    difficulty: 'advanced',
    content: (
      <>
        <p className="text-lg leading-relaxed mb-6">
          Modern RL combines classical algorithms with deep learning to solve complex problems.
          Deep RL uses neural networks to approximate value functions or policies in high-dimensional
          state spaces.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">Classical Algorithms</h2>
        <div className="grid gap-4 my-6">
          <Card>
            <CardContent className="p-4">
              <h3 className="font-semibold mb-2">Q-Learning</h3>
              <p className="text-sm text-muted-foreground">
                Model-free algorithm that learns the value of each state-action pair.
                Uses Bellman equation to iteratively update Q-values.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <h3 className="font-semibold mb-2">SARSA</h3>
              <p className="text-sm text-muted-foreground">
                Similar to Q-learning but on-policy — updates based on the action actually taken,
                not the best possible action.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <h3 className="font-semibold mb-2">Policy Gradient</h3>
              <p className="text-sm text-muted-foreground">
                Directly optimizes the policy by gradient ascent on expected reward.
                Works well for continuous action spaces.
              </p>
            </CardContent>
          </Card>
        </div>

        <h2 className="text-2xl font-bold mt-8 mb-4">Deep RL Breakthroughs</h2>
        <div className="space-y-4 my-6">
          <Card>
            <CardContent className="p-4">
              <h3 className="font-semibold mb-2">DQN (Deep Q-Network)</h3>
              <p className="text-sm text-muted-foreground">
                Combined Q-learning with deep neural networks. Used experience replay and target
                networks for stability. Mastered Atari games in 2013.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <h3 className="font-semibold mb-2">PPO (Proximal Policy Optimization)</h3>
              <p className="text-sm text-muted-foreground">
                Stable policy gradient method that clips updates to prevent too-large changes.
                Widely used in practice (GPT-4 RLHF).
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <h3 className="font-semibold mb-2">SAC (Soft Actor-Critic)</h3>
              <p className="text-sm text-muted-foreground">
                Maximum entropy RL — optimizes both reward and exploration. State-of-the-art
                for continuous control tasks.
              </p>
            </CardContent>
          </Card>
        </div>

        <Card className="my-6 bg-accent/50 border-accent">
          <CardContent className="p-6">
            <h3 className="font-semibold mb-2">RLHF — RL from Human Feedback</h3>
            <p className="text-sm text-muted-foreground">
              Modern LLMs (GPT-4, Claude) are fine-tuned using RLHF: train a reward model from
              human preferences, then use PPO to optimize the language model against it. This
              bridges RL with generative AI.
            </p>
          </CardContent>
        </Card>
      </>
    )
  }
}
