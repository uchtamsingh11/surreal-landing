
import { motion } from "framer-motion";
import { ArrowRight, BarChart3, ShieldCheck, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  {
    icon: <BarChart3 className="h-10 w-10 text-teal-500" />,
    title: "Advanced Analytics",
    description: "Real-time market analysis with AI-powered insights and custom indicators for informed decision-making."
  },
  {
    icon: <Zap className="h-10 w-10 text-teal-500" />,
    title: "High-Speed Execution",
    description: "Low-latency trade execution with microsecond precision to capitalize on market opportunities."
  },
  {
    icon: <ShieldCheck className="h-10 w-10 text-teal-500" />,
    title: "Risk Management",
    description: "Comprehensive risk controls with automated stop-loss, position sizing, and portfolio diversification."
  }
];

export function Features() {
  return (
    <section id="features" className="py-24 bg-white dark:bg-neutral-950">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-600"
          >
            Powerful Trading Features
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto"
          >
            Our cutting-edge platform provides everything you need for successful algorithmic trading
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative bg-neutral-50 dark:bg-neutral-900 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-neutral-200 dark:border-neutral-800"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-neutral-600 dark:text-neutral-400">{feature.description}</p>
              <Button variant="ghost" className="mt-4 group text-teal-600 dark:text-teal-400 p-0 font-medium">
                Learn more
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
