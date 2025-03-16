
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function CTA() {
  return (
    <section id="get-started" className="py-24 bg-gradient-to-r from-zinc-900 to-black text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-6"
          >
            Ready to Revolutionize Your Trading?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl mb-10 text-white/80"
          >
            Join thousands of traders who have already transformed their approach with AlgoZ's cutting-edge platform.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button className="bg-white text-black hover:bg-white/90 px-8 py-6 text-lg font-semibold rounded-xl">
              Start Free Trial
            </Button>
            <Button variant="outline" className="bg-transparent border-white/30 text-white hover:bg-white/10 px-8 py-6 text-lg font-semibold rounded-xl">
              Schedule Demo
            </Button>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
            className="mt-6 text-sm text-white/60"
          >
            No credit card required. 14-day free trial.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
