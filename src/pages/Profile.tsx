
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { DashboardHeader } from "@/components/DashboardHeader";
import { DashboardSidebar } from "@/components/DashboardSidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Profile = () => {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen bg-black text-white">
      <DashboardHeader />
      
      <div className="flex h-[calc(100vh-61px)]">
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
            >
              <Button 
                variant="outline" 
                onClick={() => navigate("/dashboard")}
                className="mb-6"
              >
                ← Back to Dashboard
              </Button>
              
              <Card className="bg-zinc-900 border-white/10">
                <CardHeader className="flex flex-col items-center sm:flex-row sm:items-start gap-6 pb-2">
                  <Avatar className="h-24 w-24 border-2 border-white/20">
                    <AvatarImage src="/avatar-placeholder.png" alt="User" />
                    <AvatarFallback className="bg-zinc-800 text-white text-xl">UA</AvatarFallback>
                  </Avatar>
                  
                  <div>
                    <CardTitle className="text-2xl font-bold">User Account</CardTitle>
                    <p className="text-white/70 mt-1">user@example.com</p>
                    <div className="flex gap-2 mt-4">
                      <Button size="sm">Edit Profile</Button>
                      <Button size="sm" variant="outline">Change Password</Button>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="mt-6">
                  <div className="grid gap-6 md:grid-cols-2">
                    <div>
                      <h3 className="text-lg font-medium mb-3">Account Details</h3>
                      <div className="space-y-3">
                        <div className="flex justify-between border-b border-white/10 pb-2">
                          <span className="text-white/70">Member Since</span>
                          <span>June 2023</span>
                        </div>
                        <div className="flex justify-between border-b border-white/10 pb-2">
                          <span className="text-white/70">Account Type</span>
                          <span>Trader</span>
                        </div>
                        <div className="flex justify-between border-b border-white/10 pb-2">
                          <span className="text-white/70">Subscription</span>
                          <span className="text-green-400">Active</span>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-medium mb-3">Preferences</h3>
                      <div className="space-y-3">
                        <div className="flex justify-between border-b border-white/10 pb-2">
                          <span className="text-white/70">Two-Factor Authentication</span>
                          <span className="text-yellow-400">Not Enabled</span>
                        </div>
                        <div className="flex justify-between border-b border-white/10 pb-2">
                          <span className="text-white/70">Email Notifications</span>
                          <span>Enabled</span>
                        </div>
                        <div className="flex justify-between border-b border-white/10 pb-2">
                          <span className="text-white/70">Trading Alerts</span>
                          <span>Enabled</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </SidebarProvider>
      </div>
    </div>
  );
};

export default Profile;
