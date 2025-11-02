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
    <aside className="w-64 h-screen bg-sidebar border-r border-sidebar-border fixed left-0 top-0 flex flex-col backdrop-blur-xl">
      <div className="p-8 border-b border-sidebar-border">
        <div className="flex items-center gap-3">
          <div className="relative">
            <Shield className="w-9 h-9 text-primary" style={{ filter: 'drop-shadow(0 0 12px hsl(var(--primary) / 0.4))' }} />
          </div>
          <span className="text-2xl font-display font-bold text-foreground tracking-tight">Secura</span>
        </div>
      </div>
      
      <nav className="flex-1 p-5">
        <ul className="space-y-1.5">
          {menuItems.map((item, index) => (
            <li key={item.path} className="animate-slide-in" style={{ animationDelay: `${index * 30}ms` }}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  cn(
                    "flex items-center gap-3 px-4 py-3.5 rounded-xl transition-all duration-200 group",
                    "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
                    isActive && "bg-sidebar-accent text-sidebar-accent-foreground shadow-lg"
                  )
                }
              >
                <item.icon className="w-5 h-5 transition-transform group-hover:scale-110" />
                <span className="font-medium text-sm tracking-wide">{item.label}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};
