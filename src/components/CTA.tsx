
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function CTA() {
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
    hidden: { y: 30, opacity: 0 },
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

  return (
    <section id="get-started" className="py-24 bg-gradient-to-r from-zinc-900 to-black text-white overflow-hidden relative">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, index) => (
          <motion.div
            key={index}
            className="absolute rounded-full bg-white/5"
            style={{
              width: Math.random() * 300 + 50,
              height: Math.random() * 300 + 50,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ 
              scale: [0, 1, 1.2, 1],
              opacity: [0, 0.1, 0.1, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.h2 
            variants={itemVariants}
            className="text-3xl md:text-5xl font-bold mb-6"
          >
            Ready to Revolutionize Your Trading?
          </motion.h2>
          
          <motion.p 
            variants={itemVariants}
            className="text-xl mb-10 text-white/80"
          >
            Join thousands of traders who have already transformed their approach with AlgoZ's cutting-edge platform.
          </motion.p>
          
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Button className="bg-white text-black hover:bg-white/90 px-8 py-6 text-lg font-semibold rounded-xl">
                Start Free Trial
              </Button>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Button variant="outline" className="bg-transparent border-white/30 text-white hover:bg-white/10 px-8 py-6 text-lg font-semibold rounded-xl">
                Schedule Demo
              </Button>
            </motion.div>
          </motion.div>
          
          <motion.p 
            variants={itemVariants}
            className="mt-6 text-sm text-white/60"
          >
            No credit card required. 14-day free trial.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
