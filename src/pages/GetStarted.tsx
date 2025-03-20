import { motion } from "framer-motion";
import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const GetStarted = () => {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
    terms: false
  });

  const [signupData, setSignupData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    terms: false
  });

  const handleLoginChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginData(prev => ({ ...prev, [name]: value }));
  };

  const handleSignupChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSignupData(prev => ({ ...prev, [name]: value }));
  };

  const handleLoginCheckboxChange = (checked: boolean) => {
    setLoginData(prev => ({ ...prev, terms: checked }));
  };

  const handleSignupCheckboxChange = (checked: boolean) => {
    setSignupData(prev => ({ ...prev, terms: checked }));
  };

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login data:", loginData);
    // In a real application, you would validate credentials here
    navigate("/dashboard");
  };

  const handleSignupSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Signup data:", signupData);
    // In a real application, you would create account here
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
            className="bg-zinc-900/80 rounded-xl border border-white/10 p-8 shadow-xl"
          >
            <Tabs defaultValue="login" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-6">
                <TabsTrigger value="login" className="text-lg">Login</TabsTrigger>
                <TabsTrigger value="signup" className="text-lg">Sign Up</TabsTrigger>
              </TabsList>
              
              <TabsContent value="login">
                <motion.div 
                  variants={itemVariants}
                  className="text-left mb-6"
                >
                  <h1 className="text-2xl font-bold">Welcome back</h1>
                  <p className="text-white/60 mt-2">Enter your credentials to access your account</p>
                </motion.div>

                <form onSubmit={handleLoginSubmit} className="space-y-6">
                  <motion.div variants={itemVariants} className="space-y-2">
                    <Label htmlFor="login-email">Email</Label>
                    <Input
                      id="login-email"
                      name="email"
                      type="email"
                      value={loginData.email}
                      onChange={handleLoginChange}
                      placeholder="name@example.com"
                      className="bg-zinc-800 border-white/10"
                      required
                    />
                  </motion.div>

                  <motion.div variants={itemVariants} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <Label htmlFor="login-password">Password</Label>
                      <a href="#" className="text-sm text-white/60 hover:text-white">
                        Forgot password?
                      </a>
                    </div>
                    <Input
                      id="login-password"
                      name="password"
                      type="password"
                      value={loginData.password}
                      onChange={handleLoginChange}
                      placeholder="••••••••"
                      className="bg-zinc-800 border-white/10"
                      required
                    />
                  </motion.div>

                  <motion.div variants={itemVariants} className="flex items-center space-x-2">
                    <Checkbox 
                      id="login-terms" 
                      checked={loginData.terms} 
                      onCheckedChange={handleLoginCheckboxChange}
                    />
                    <label
                      htmlFor="login-terms"
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
                      className="w-full bg-white text-black hover:bg-white/90 flex items-center justify-center"
                      disabled={!loginData.terms}
                    >
                      Login <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </motion.div>
                </form>
              </TabsContent>
              
              <TabsContent value="signup">
                <motion.div 
                  variants={itemVariants}
                  className="text-left mb-6"
                >
                  <h1 className="text-2xl font-bold">Create an account</h1>
                  <p className="text-white/60 mt-2">Fill in your details to get started</p>
                </motion.div>

                <form onSubmit={handleSignupSubmit} className="space-y-6">
                  <motion.div variants={itemVariants} className="space-y-2">
                    <Label htmlFor="signup-name">Full Name</Label>
                    <Input
                      id="signup-name"
                      name="name"
                      type="text"
                      value={signupData.name}
                      onChange={handleSignupChange}
                      placeholder="John Doe"
                      className="bg-zinc-800 border-white/10"
                      required
                    />
                  </motion.div>

                  <motion.div variants={itemVariants} className="space-y-2">
                    <Label htmlFor="signup-email">Email</Label>
                    <Input
                      id="signup-email"
                      name="email"
                      type="email"
                      value={signupData.email}
                      onChange={handleSignupChange}
                      placeholder="name@example.com"
                      className="bg-zinc-800 border-white/10"
                      required
                    />
                  </motion.div>

                  <motion.div variants={itemVariants} className="space-y-2">
                    <Label htmlFor="signup-password">Password</Label>
                    <Input
                      id="signup-password"
                      name="password"
                      type="password"
                      value={signupData.password}
                      onChange={handleSignupChange}
                      placeholder="Create a strong password"
                      className="bg-zinc-800 border-white/10"
                      required
                    />
                  </motion.div>

                  <motion.div variants={itemVariants} className="space-y-2">
                    <Label htmlFor="signup-confirm-password">Confirm Password</Label>
                    <Input
                      id="signup-confirm-password"
                      name="confirmPassword"
                      type="password"
                      value={signupData.confirmPassword}
                      onChange={handleSignupChange}
                      placeholder="Confirm your password"
                      className="bg-zinc-800 border-white/10"
                      required
                    />
                  </motion.div>

                  <motion.div variants={itemVariants} className="flex items-center space-x-2">
                    <Checkbox 
                      id="signup-terms" 
                      checked={signupData.terms} 
                      onCheckedChange={handleSignupCheckboxChange}
                    />
                    <label
                      htmlFor="signup-terms"
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
                      className="w-full bg-white text-black hover:bg-white/90 flex items-center justify-center"
                      disabled={!signupData.terms}
                    >
                      Sign Up <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </motion.div>
                </form>
              </TabsContent>
            </Tabs>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default GetStarted;
