
import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    terms: false
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (checked: boolean) => {
    setFormData(prev => ({ ...prev, terms: checked }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login data:", formData);
    // In a real application, you would validate credentials here
    // For now, we'll just redirect to the dashboard
    navigate("/dashboard");
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 15 }
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <Navigation />
      <main className="flex-grow flex items-center justify-center py-16 px-4">
        <div className="w-full max-w-md">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="bg-zinc-900 rounded-xl border border-white/10 p-8 shadow-xl"
          >
            <motion.div 
              variants={itemVariants}
              className="text-center mb-8"
            >
              <h1 className="text-2xl font-bold">Login into AlgoZ</h1>
              <p className="text-white/60 mt-2">Welcome back to AlgoZ</p>
            </motion.div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <motion.div variants={itemVariants} className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className="bg-zinc-800 border-white/10"
                  required
                />
              </motion.div>

              <motion.div variants={itemVariants} className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter your password"
                  className="bg-zinc-800 border-white/10"
                  required
                />
                <div className="text-right">
                  <a href="#" className="text-sm text-white/60 hover:text-white">
                    Forgot password?
                  </a>
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="flex items-center space-x-2">
                <Checkbox 
                  id="terms" 
                  checked={formData.terms} 
                  onCheckedChange={handleCheckboxChange}
                />
                <label
                  htmlFor="terms"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-white/80"
                >
                  I agree to the terms and conditions
                </label>
              </motion.div>

              <motion.div 
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button 
                  type="submit" 
                  className="w-full bg-white text-black hover:bg-white/90"
                  disabled={!formData.terms}
                >
                  Log In
                </Button>
              </motion.div>

              <motion.div variants={itemVariants} className="text-center mt-6">
                <p className="text-white/60 text-sm">
                  Don't have an account?{" "}
                  <a href="/signup" className="text-white hover:underline">
                    Sign Up
                  </a>
                </p>
              </motion.div>
            </form>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Login;
