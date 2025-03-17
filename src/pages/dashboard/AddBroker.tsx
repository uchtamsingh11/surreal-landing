
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { DashboardHeader } from "@/components/DashboardHeader";
import { DashboardSidebar } from "@/components/DashboardSidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowLeft, Search } from "lucide-react";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { useToast } from "@/hooks/use-toast";

interface Broker {
  id: string;
  name: string;
  logo: string;
}

const brokerFormSchema = z.object({
  apiKey: z.string().min(1, "API Key is required"),
  apiSecret: z.string().min(1, "API Secret is required"),
  clientId: z.string().min(1, "Client ID is required"),
});

const AddBroker = () => {
  const [indianBrokers, setIndianBrokers] = useState<Broker[]>([
    { id: "1", name: "Zerodha", logo: "/placeholder.svg" },
    { id: "2", name: "Upstox", logo: "/placeholder.svg" },
    { id: "3", name: "Angel One", logo: "/placeholder.svg" },
    { id: "4", name: "ICICI Direct", logo: "/placeholder.svg" },
    { id: "5", name: "5paisa", logo: "/placeholder.svg" },
    { id: "6", name: "Groww", logo: "/placeholder.svg" },
    { id: "7", name: "Dhan", logo: "/placeholder.svg" },
    { id: "8", name: "Kotak Securities", logo: "/placeholder.svg" },
    { id: "9", name: "HDFC Securities", logo: "/placeholder.svg" },
    { id: "10", name: "Motilal Oswal", logo: "/placeholder.svg" },
    { id: "11", name: "Sharekhan", logo: "/placeholder.svg" },
    { id: "12", name: "SBI Securities", logo: "/placeholder.svg" },
    { id: "13", name: "Axis Direct", logo: "/placeholder.svg" },
    { id: "14", name: "IIFL Securities", logo: "/placeholder.svg" },
    { id: "15", name: "Alice Blue", logo: "/placeholder.svg" },
    { id: "16", name: "Fyers", logo: "/placeholder.svg" },
    { id: "17", name: "Samco", logo: "/placeholder.svg" },
    { id: "18", name: "Prostocks", logo: "/placeholder.svg" },
    { id: "19", name: "Tradingview", logo: "/placeholder.svg" },
    { id: "20", name: "Finvasia", logo: "/placeholder.svg" },
  ]);
  
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedBroker, setSelectedBroker] = useState<Broker | null>(null);
  const [showForm, setShowForm] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  const filteredBrokers = indianBrokers.filter(broker => 
    broker.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const form = useForm<z.infer<typeof brokerFormSchema>>({
    resolver: zodResolver(brokerFormSchema),
    defaultValues: {
      apiKey: "",
      apiSecret: "",
      clientId: "",
    },
  });

  const handleSelectBroker = (broker: Broker) => {
    setSelectedBroker(broker);
  };

  const handleContinue = () => {
    setShowForm(true);
  };

  const onSubmit = (values: z.infer<typeof brokerFormSchema>) => {
    // In a real app, you'd send this data to your backend
    console.log({ broker: selectedBroker, credentials: values });
    
    toast({
      title: "Broker Connected Successfully",
      description: `${selectedBroker?.name} has been connected to your account.`,
    });
    
    // Redirect back to broker auth page
    navigate("/dashboard/broker-auth");
  };

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
            <div className="flex items-center gap-4 mb-6">
              <Link to="/dashboard/broker-auth">
                <Button variant="ghost" size="icon">
                  <ArrowLeft className="h-5 w-5" />
                </Button>
              </Link>
              <h1 className="text-2xl font-bold">
                {showForm ? `Connect ${selectedBroker?.name}` : "Select Broker"}
              </h1>
            </div>
            
            {!showForm ? (
              <>
                <div className="relative mb-6">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-zinc-400" />
                  <Input
                    placeholder="Search broker..."
                    className="pl-10 bg-zinc-900 border-zinc-800"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                  {filteredBrokers.map((broker) => (
                    <div
                      key={broker.id}
                      className={`flex flex-col items-center justify-center gap-3 p-4 rounded-xl cursor-pointer transition-all ${
                        selectedBroker?.id === broker.id 
                          ? "bg-zinc-800 border-2 border-blue-500" 
                          : "bg-zinc-900 border border-white/10 hover:bg-zinc-800"
                      }`}
                      onClick={() => handleSelectBroker(broker)}
                    >
                      <div className="h-16 w-16 bg-zinc-800 rounded-md flex items-center justify-center">
                        <img src={broker.logo} alt={broker.name} className="h-10 w-10" />
                      </div>
                      <span className="text-sm font-medium text-center">{broker.name}</span>
                    </div>
                  ))}
                </div>
                
                {selectedBroker && (
                  <div className="mt-6 text-center">
                    <Button 
                      size="lg" 
                      onClick={handleContinue}
                      className="w-full max-w-sm mx-auto"
                    >
                      Continue with {selectedBroker.name}
                    </Button>
                  </div>
                )}
              </>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-zinc-900 rounded-xl border border-white/10 p-6 max-w-xl mx-auto"
              >
                <div className="flex items-center justify-center mb-6">
                  <div className="h-16 w-16 bg-zinc-800 rounded-full flex items-center justify-center">
                    <img src={selectedBroker?.logo} alt={selectedBroker?.name} className="h-10 w-10" />
                  </div>
                </div>
                
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                      control={form.control}
                      name="apiKey"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>API Key</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter your API Key" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="apiSecret"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>API Secret</FormLabel>
                          <FormControl>
                            <Input
                              type="password"
                              placeholder="Enter your API Secret"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="clientId"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Client ID</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter your Client ID" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <div className="flex justify-end gap-3">
                      <Button
                        type="button"
                        variant="outline"
                        onClick={() => setShowForm(false)}
                      >
                        Back
                      </Button>
                      <Button type="submit">Connect Broker</Button>
                    </div>
                  </form>
                </Form>
              </motion.div>
            )}
          </motion.div>
        </SidebarProvider>
      </div>
    </div>
  );
};

export default AddBroker;
