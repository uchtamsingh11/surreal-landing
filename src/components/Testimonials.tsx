
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote: "AlgoZ has completely transformed my trading. The automated strategies have increased my returns by 43% while reducing the time I spend monitoring markets.",
    author: "Sarah Johnson",
    role: "Professional Trader",
    rating: 5
  },
  {
    quote: "The backtesting capabilities are unmatched. I can validate my strategies across multiple market conditions with just a few clicks before risking real capital.",
    author: "Michael Chen",
    role: "Hedge Fund Manager",
    rating: 5
  },
  {
    quote: "As someone new to algo trading, the intuitive interface and pre-built strategies helped me get started quickly without a steep learning curve.",
    author: "Jessica Williams",
    role: "Retail Investor",
    rating: 4
  }
];

export function Testimonials() {
  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4 text-white"
          >
            Trusted by Traders Worldwide
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg text-white/70 max-w-2xl mx-auto"
          >
            See what our users have to say about their experience with AlgoZ
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-black/40 rounded-2xl p-8 shadow-lg border border-white/10"
            >
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`h-5 w-5 ${i < testimonial.rating ? 'text-yellow-500 fill-yellow-500' : 'text-white/20'}`} 
                  />
                ))}
              </div>
              <p className="text-white/80 mb-6 italic">"{testimonial.quote}"</p>
              <div>
                <p className="font-bold text-white">{testimonial.author}</p>
                <p className="text-sm text-white/60">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
