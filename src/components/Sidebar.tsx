import { Shield, User } from "lucide-react";
import { NavLink } from "react-router-dom";
import { cn } from "@/lib/utils";
import { ScrollArea } from "@/components/ui/scroll-area";
import { menuSections } from "@/lib/menuConfig";

export const Sidebar = () => {
  return (
    <aside className="w-64 h-screen bg-sidebar border-r border-sidebar-border fixed left-0 top-0 flex flex-col backdrop-blur-xl">
      <div className="p-6 border-b border-sidebar-border">
        <div className="flex items-center gap-3 mb-4">
          <div className="relative">
            <Shield className="w-8 h-8 text-primary" style={{ filter: 'drop-shadow(0 0 12px hsl(var(--primary) / 0.4))' }} />
          </div>
          <div>
            <span className="text-xl font-display font-bold text-foreground tracking-tight block">Secura XDR</span>
            <span className="text-xs text-muted-foreground">Enterprise Security Platform</span>
          </div>
        </div>
        <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-success/10 border border-success/30">
          <div className="w-2 h-2 rounded-full bg-success animate-pulse"></div>
          <span className="text-xs text-success font-medium">All Systems Protected</span>
        </div>
      </div>
      
      <ScrollArea className="flex-1 p-4">
        <nav>
          {menuSections.map((section, sectionIdx) => (
            <div key={section.title} className="mb-6">
              <div className="px-3 mb-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                {section.title}
              </div>
              <ul className="space-y-1">
                {section.items.map((item, index) => (
                  <li key={item.path} className="animate-slide-in" style={{ animationDelay: `${(sectionIdx * 50) + (index * 30)}ms` }}>
                    <NavLink
                      to={item.path}
                      className={({ isActive }) =>
                        cn(
                          "flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 group",
                          "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
                          isActive && "bg-sidebar-accent text-sidebar-accent-foreground shadow-lg"
                        )
                      }
                    >
                      <item.icon className="w-4 h-4 transition-transform group-hover:scale-110" />
                      <span className="font-medium text-sm">{item.label}</span>
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </ScrollArea>

      <div className="p-4 border-t border-sidebar-border bg-sidebar-accent/30">
        <div className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-sidebar-accent transition-colors cursor-pointer">
          <div className="w-9 h-9 rounded-full bg-primary/20 flex items-center justify-center">
            <User className="w-5 h-5 text-primary" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-foreground truncate">Admin User</p>
            <p className="text-xs text-muted-foreground truncate">admin@secura.com</p>
          </div>
        </div>
      </div>
    </aside>
  );
};
