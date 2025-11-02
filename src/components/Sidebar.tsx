import { Shield, Activity, Search, Lock, Globe, Layers, AlertTriangle, Settings, HelpCircle, Home } from "lucide-react";
import { NavLink } from "react-router-dom";
import { cn } from "@/lib/utils";

const menuItems = [
  { icon: Home, label: "Dashboard", path: "/" },
  { icon: Shield, label: "Protection", path: "/protection" },
  { icon: Search, label: "Scans", path: "/scans" },
  { icon: Lock, label: "Quarantine", path: "/quarantine" },
  { icon: Globe, label: "Network", path: "/network" },
  { icon: Layers, label: "Firewall", path: "/firewall" },
  { icon: AlertTriangle, label: "Alert", path: "/alert" },
  { icon: Settings, label: "Setting", path: "/setting" },
  { icon: HelpCircle, label: "Support", path: "/support" },
];

export const Sidebar = () => {
  return (
    <aside className="w-52 h-screen bg-sidebar border-r border-sidebar-border fixed left-0 top-0 flex flex-col">
      <div className="p-6 border-b border-sidebar-border">
        <div className="flex items-center gap-2">
          <Shield className="w-8 h-8 text-primary" />
          <span className="text-xl font-bold text-foreground">Secura</span>
        </div>
      </div>
      
      <nav className="flex-1 p-4">
        <ul className="space-y-1">
          {menuItems.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  cn(
                    "flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200",
                    "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
                    isActive && "bg-sidebar-accent text-sidebar-accent-foreground"
                  )
                }
              >
                <item.icon className="w-5 h-5" />
                <span className="font-medium">{item.label}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};
