
import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { DashboardHeader } from "@/components/DashboardHeader";
import { DashboardSidebar } from "@/components/DashboardSidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Plus, RefreshCw, Settings, Trash2 } from "lucide-react";

interface Broker {
  id: string;
  name: string;
  logo: string;
  status: "connected" | "disconnected";
  lastSync?: string;
}

const BrokerAuth = () => {
  const [connectedBrokers, setConnectedBrokers] = useState<Broker[]>([
    {
      id: "1",
      name: "Zerodha",
      logo: "/placeholder.svg",
      status: "connected",
      lastSync: "2 hours ago"
    }
  ]);

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
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-2xl font-bold">Connect Your Brokers</h1>
              <Link to="/dashboard/broker-auth/add">
                <Button className="flex items-center gap-2">
                  <Plus className="h-4 w-4" />
                  Add Broker
                </Button>
              </Link>
            </div>
            
            {connectedBrokers.length === 0 ? (
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="bg-zinc-900 rounded-xl border border-white/10 p-8 text-center shadow-xl"
              >
                <h2 className="text-xl font-bold mb-4">No Brokers Connected</h2>
                <p className="text-white/70 mb-6">
                  Connect your trading accounts to start using AlgoZ.
                </p>
                <Link to="/dashboard/broker-auth/add">
                  <Button size="lg" className="flex items-center gap-2">
                    <Plus className="h-4 w-4" />
                    Add Your First Broker
                  </Button>
                </Link>
              </motion.div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {connectedBrokers.map((broker) => (
                  <Card key={broker.id} className="bg-zinc-900 border border-white/10 text-white">
                    <CardHeader className="flex flex-row items-center gap-4 pb-2">
                      <div className="h-12 w-12 rounded-md bg-zinc-800 flex items-center justify-center">
                        <img src={broker.logo} alt={broker.name} className="h-8 w-8" />
                      </div>
                      <div>
                        <CardTitle>{broker.name}</CardTitle>
                        <CardDescription className="text-zinc-400">
                          {broker.status === "connected" ? "Connected" : "Disconnected"}
                        </CardDescription>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="text-sm text-zinc-400">
                        Last synced: {broker.lastSync || "Never"}
                      </div>
                    </CardContent>
                    <CardFooter className="flex gap-2 justify-end">
                      <Button variant="ghost" size="sm" className="text-zinc-400">
                        <RefreshCw className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm" className="text-zinc-400">
                        <Settings className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm" className="text-red-400 hover:text-red-300 hover:bg-red-900/20">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            )}
          </motion.div>
        </SidebarProvider>
      </div>
    </div>
  );
};

export default BrokerAuth;
