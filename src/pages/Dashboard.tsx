
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // In a real app, you would handle logout logic here
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4 py-8"
      >
        <div className="flex justify-between items-center mb-10">
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <h1 className="text-2xl font-bold">AlgoZ Dashboard</h1>
          </motion.div>
          
          <motion.div
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              onClick={handleLogout}
              variant="outline"
              className="border-white/20 hover:bg-white/10"
            >
              Logout
            </Button>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="bg-zinc-900 rounded-xl border border-white/10 p-8 shadow-xl"
        >
          <h2 className="text-xl font-bold mb-4">Welcome to your dashboard!</h2>
          <p className="text-white/70">
            This is a placeholder for the dashboard content. In a real application, 
            you would see your trading information, analytics, and controls here.
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Dashboard;
