
import { useState } from "react";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { 
  LayoutDashboard, 
  Key, 
  ChartLine, 
  Settings, 
  Webhook, 
  FileJson, 
  Hash, 
  ClipboardList,
  Scissors,
  Tool,
  Users,
  Wand,
  FileCode,
  TrendingUp,
  DollarSign,
  Bitcoin,
  HelpCircle,
  LogOut
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarProvider,
  SidebarSeparator
} from "@/components/ui/sidebar";

interface SubMenuItem {
  name: string;
  icon: React.ElementType;
  path: string;
}

interface MenuItem {
  name: string;
  icon: React.ElementType;
  path: string;
  subItems?: SubMenuItem[];
}

export function DashboardSidebar() {
  const location = useLocation();
  const [expanded, setExpanded] = useState<string | null>(null);

  const menuItems: MenuItem[] = [
    {
      name: "Dashboard",
      icon: LayoutDashboard,
      path: "/dashboard",
    },
    {
      name: "Broker Auth",
      icon: Key,
      path: "/dashboard/broker-auth",
    },
    {
      name: "TradingView",
      icon: ChartLine,
      path: "/dashboard/tradingview",
      subItems: [
        { name: "Manage", icon: Settings, path: "/dashboard/tradingview/manage" },
        { name: "Webhook URL", icon: Webhook, path: "/dashboard/tradingview/webhook" },
        { name: "JSON", icon: FileJson, path: "/dashboard/tradingview/json" },
        { name: "Symbol", icon: Hash, path: "/dashboard/tradingview/symbol" },
        { name: "Trade Logs", icon: ClipboardList, path: "/dashboard/tradingview/logs" },
      ],
    },
    {
      name: "Scalping Tool",
      icon: Scissors,
      path: "/dashboard/scalping",
      subItems: [
        { name: "Manage", icon: Settings, path: "/dashboard/scalping/manage" },
        { name: "Tool", icon: Tool, path: "/dashboard/scalping/tool" },
      ],
    },
    {
      name: "Copy Trading",
      icon: Users,
      path: "/dashboard/copy-trading",
      subItems: [
        { name: "Manage", icon: Settings, path: "/dashboard/copy-trading/manage" },
        { name: "Strategies", icon: Wand, path: "/dashboard/copy-trading/strategies" },
      ],
    },
    {
      name: "Strategy",
      icon: FileCode,
      path: "/dashboard/strategy",
      subItems: [
        { name: "Pine Script", icon: FileCode, path: "/dashboard/strategy/pine" },
        { name: "MQL", icon: FileCode, path: "/dashboard/strategy/mql" },
        { name: "AFL", icon: FileCode, path: "/dashboard/strategy/afl" },
        { name: "Python", icon: FileCode, path: "/dashboard/strategy/python" },
      ],
    },
    {
      name: "Bots",
      icon: TrendingUp,
      path: "/dashboard/bots",
      subItems: [
        { name: "NSE/BSE", icon: TrendingUp, path: "/dashboard/bots/nse-bse" },
        { name: "Forex", icon: DollarSign, path: "/dashboard/bots/forex" },
        { name: "Crypto", icon: Bitcoin, path: "/dashboard/bots/crypto" },
      ],
    },
    {
      name: "Pricing",
      icon: DollarSign,
      path: "/dashboard/pricing",
    },
  ];

  const isActiveItem = (path: string) => {
    return location.pathname === path || location.pathname.startsWith(path + '/');
  };

  const handleExpand = (name: string) => {
    setExpanded(prev => prev === name ? null : name);
  };

  return (
    <Sidebar variant="sidebar" className="border-r border-white/10 bg-black">
      <SidebarContent>
        {menuItems.map((item) => (
          <SidebarGroup key={item.name}>
            {!item.subItems ? (
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton
                    asChild 
                    isActive={isActiveItem(item.path)}
                    tooltip={item.name}
                  >
                    <Link to={item.path}>
                      <item.icon className="mr-2 h-4 w-4" />
                      <span>{item.name}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            ) : (
              <>
                <SidebarGroupLabel 
                  className="cursor-pointer hover:text-white"
                  onClick={() => handleExpand(item.name)}
                >
                  <div className="flex items-center justify-between w-full">
                    <div className="flex items-center gap-2">
                      <item.icon className="h-4 w-4" />
                      <span>{item.name}</span>
                    </div>
                    <motion.span
                      animate={{ rotate: expanded === item.name ? 90 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="text-xs"
                    >
                      {">"}
                    </motion.span>
                  </div>
                </SidebarGroupLabel>
                {expanded === item.name && (
                  <SidebarGroupContent className="pl-4">
                    <SidebarMenu>
                      {item.subItems.map((subItem) => (
                        <SidebarMenuItem key={subItem.name}>
                          <SidebarMenuButton 
                            asChild 
                            isActive={isActiveItem(subItem.path)}
                            tooltip={subItem.name}
                          >
                            <Link to={subItem.path}>
                              <subItem.icon className="mr-2 h-4 w-4" />
                              <span>{subItem.name}</span>
                            </Link>
                          </SidebarMenuButton>
                        </SidebarMenuItem>
                      ))}
                    </SidebarMenu>
                  </SidebarGroupContent>
                )}
              </>
            )}
          </SidebarGroup>
        ))}
      </SidebarContent>
      
      <SidebarFooter>
        <SidebarSeparator />
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild tooltip="FAQ">
              <Link to="/dashboard/faq">
                <HelpCircle className="mr-2 h-4 w-4" />
                <span>FAQ</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              variant="outline" 
              className="text-red-400 hover:text-red-300 hover:border-red-300"
              tooltip="Logout"
            >
              <Link to="/">
                <LogOut className="mr-2 h-4 w-4" />
                <span>Logout</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
