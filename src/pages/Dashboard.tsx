
import { useState } from "react";
import { motion } from "framer-motion";
import { DashboardHeader } from "@/components/DashboardHeader";
import { DashboardSidebar } from "@/components/DashboardSidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <DashboardHeader />
      
      <div className="flex flex-1 h-[calc(100vh-61px)]">
        <SidebarProvider>
          <DashboardSidebar />
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex-1 p-6 overflow-auto"
          >
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="bg-zinc-900 rounded-xl border border-white/10 p-8 shadow-xl"
            >
              <h2 className="text-xl font-bold mb-4">Welcome to your dashboard!</h2>
              <p className="text-white/70">
                This is your dashboard home. Navigate using the sidebar to access different features.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              <div className="bg-zinc-900 rounded-xl border border-white/10 p-6">
                <h3 className="text-lg font-semibold mb-2">Recent Activity</h3>
                <p className="text-white/70">No recent activity to display.</p>
              </div>
              
              <div className="bg-zinc-900 rounded-xl border border-white/10 p-6">
                <h3 className="text-lg font-semibold mb-2">Performance Overview</h3>
                <p className="text-white/70">Your trading performance metrics will appear here.</p>
              </div>
            </motion.div>
          </motion.div>
        </SidebarProvider>
      </div>
    </div>
  );
};

export default Dashboard;
