
import { motion } from "framer-motion";
import { ArrowRight, BarChart3, ShieldCheck, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  {
    icon: <BarChart3 className="h-10 w-10 text-white" />,
    title: "Advanced Analytics",
    description: "Real-time market analysis with AI-powered insights and custom indicators for informed decision-making."
  },
  {
    icon: <Zap className="h-10 w-10 text-white" />,
    title: "High-Speed Execution",
    description: "Low-latency trade execution with microsecond precision to capitalize on market opportunities."
  },
  {
    icon: <ShieldCheck className="h-10 w-10 text-white" />,
    title: "Risk Management",
    description: "Comprehensive risk controls with automated stop-loss, position sizing, and portfolio diversification."
  }
];

export function Features() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { 
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        type: "spring", 
        stiffness: 100, 
        damping: 15 
      }
    }
  };

  const iconVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: { 
      scale: 1, 
      rotate: 0,
      transition: { 
        type: "spring", 
        stiffness: 200, 
        delay: 0.3 
      }
    }
  };

  return (
    <section id="features" className="py-24 bg-black">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Powerful Trading Features
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Our cutting-edge platform provides everything you need for successful algorithmic trading
          </p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-3 gap-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative bg-black/40 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/10 group"
              whileHover={{ 
                y: -10, 
                boxShadow: "0 20px 25px -5px rgba(255, 255, 255, 0.05), 0 10px 10px -5px rgba(255, 255, 255, 0.02)"
              }}
            >
              <motion.div 
                className="mb-4 relative z-10"
                variants={iconVariants}
              >
                {feature.icon}
                <motion.div 
                  className="absolute inset-0 bg-white/5 rounded-full -z-10"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 2.5 }}
                  transition={{ duration: 0.7, delay: 0.5 + index * 0.1 }}
                  viewport={{ once: true }}
                ></motion.div>
              </motion.div>
              <motion.h3 
                className="text-xl font-bold mb-2 text-white"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                viewport={{ once: true }}
              >
                {feature.title}
              </motion.h3>
              <motion.p 
                className="text-white/70"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                viewport={{ once: true }}
              >
                {feature.description}
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                viewport={{ once: true }}
              >
                <Button 
                  variant="ghost" 
                  className="mt-4 group text-white p-0 font-medium overflow-hidden"
                >
                  <span className="relative inline-block group-hover:translate-x-1 transition-transform duration-300">
                    Learn more
                    <motion.span 
                      className="absolute bottom-0 left-0 w-full h-0.5 bg-white/40"
                      initial={{ scaleX: 0, originX: 0 }}
                      whileHover={{ scaleX: 1, originX: 0 }}
                      transition={{ duration: 0.3 }}
                    ></motion.span>
                  </span>
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
