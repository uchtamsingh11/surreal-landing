
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Connect Your Account",
    description: "Securely link your brokerage account to our platform with institutional-grade security protocols.",
  },
  {
    number: "02",
    title: "Select Your Strategy",
    description: "Choose from our library of pre-built strategies or create your own custom algorithm with our intuitive builder.",
  },
  {
    number: "03",
    title: "Backtest & Optimize",
    description: "Run comprehensive backtests against historical data to fine-tune your strategy parameters for optimal performance.",
  },
  {
    number: "04",
    title: "Deploy & Monitor",
    description: "Launch your algorithm in live markets and monitor performance with real-time analytics and customizable alerts.",
  }
];

export function HowItWorks() {
  return (
    <section className="py-24 bg-neutral-50 dark:bg-neutral-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            How AlgoZ Works
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg text-neutral-600 dark:text-neutral-400"
          >
            Our streamlined process gets you from strategy to execution in minutes, not days
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex gap-6"
            >
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-teal-100 dark:bg-teal-900 text-teal-600 dark:text-teal-400 font-bold">
                  {step.number}
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-neutral-600 dark:text-neutral-400 mb-3">{step.description}</p>
                <ul>
                  <li className="flex items-center text-sm text-neutral-600 dark:text-neutral-400">
                    <CheckCircle className="h-4 w-4 text-teal-500 mr-2" />
                    <span>Fast setup</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
