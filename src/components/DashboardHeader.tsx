
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { 
  Avatar, 
  AvatarFallback, 
  AvatarImage 
} from "@/components/ui/avatar";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuSeparator, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { User, LogOut } from "lucide-react";

export function DashboardHeader() {
  const navigate = useNavigate();
  const [userEmail] = useState("user@example.com"); // In a real app, this would come from auth
  
  // Get user initials for avatar fallback
  const userInitials = userEmail
    .split("@")[0]
    .split(".")
    .map(name => name[0])
    .join("")
    .toUpperCase();
  
  const handleLogout = () => {
    // In a real app, you would handle logout logic here
    navigate("/");
  };

  return (
    <motion.header
      className="bg-black/80 backdrop-blur-md py-3 px-4 border-b border-white/10 flex items-center justify-between w-full"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Link to="/dashboard" className="text-white text-xl font-bold">
        AlgoZ
      </Link>
      
      <DropdownMenu>
        <DropdownMenuTrigger className="focus:outline-none">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-3"
          >
            <span className="text-sm text-white/80 hidden sm:inline">{userEmail}</span>
            <Avatar className="h-9 w-9 border-2 border-white/20 cursor-pointer">
              <AvatarImage src="/avatar-placeholder.png" alt="User" />
              <AvatarFallback className="bg-zinc-800 text-white">{userInitials}</AvatarFallback>
            </Avatar>
          </motion.div>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="bg-zinc-900 border border-white/10 text-white">
          <DropdownMenuItem onClick={() => navigate("/profile")} className="cursor-pointer">
            <User className="mr-2 h-4 w-4" />
            <span>Profile</span>
          </DropdownMenuItem>
          <DropdownMenuSeparator className="bg-white/10" />
          <DropdownMenuItem onClick={handleLogout} className="cursor-pointer text-red-400">
            <LogOut className="mr-2 h-4 w-4" />
            <span>Logout</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </motion.header>
  );
}
