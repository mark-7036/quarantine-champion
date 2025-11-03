import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Zap, Trash2, HardDrive, Cpu, TrendingUp } from "lucide-react";
import { StatCard } from "@/components/StatCard";

export default function Optimization() {
  const cleanupItems = [
    { category: "Temporary Files", size: "2.4 GB", items: 12847, impact: "High" },
    { category: "System Cache", size: "1.8 GB", items: 5692, impact: "Medium" },
    { category: "Browser Data", size: "847 MB", items: 3421, impact: "Low" },
    { category: "Old Logs", size: "523 MB", items: 892, impact: "Low" },
  ];

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="space-y-3">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-primary/10 border border-primary/20">
            <Zap className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h1 className="text-4xl font-display font-bold text-foreground tracking-tight">System Optimization</h1>
            <p className="text-muted-foreground mt-1 text-base">
              Performance tuning and system cleanup tools
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <StatCard
          title="Disk Space"
          value="124 GB"
          change="Can be freed"
          changeType="neutral"
          icon={HardDrive}
          iconColor="text-info"
        />
        <StatCard
          title="System Performance"
          value="87%"
          change="Good"
          changeType="positive"
          icon={Cpu}
          iconColor="text-success"
        />
        <StatCard
          title="Startup Programs"
          value="23"
          change="8 can be disabled"
          changeType="neutral"
          icon={Zap}
          iconColor="text-warning"
        />
        <StatCard
          title="Optimization Score"
          value="92/100"
          change="Excellent"
          changeType="positive"
          icon={TrendingUp}
          iconColor="text-primary"
        />
      </div>

      <Card className="p-8 bg-gradient-to-br from-card/80 to-card/60 backdrop-blur-xl border-border shadow-lg" style={{ boxShadow: 'var(--shadow-elevated)' }}>
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-semibold text-foreground">Quick Actions</h3>
          <Badge variant="outline" className="bg-info/10 text-info border-info/30">
            One-Click Optimization
          </Badge>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { icon: Trash2, title: "Clean Junk Files", description: "Remove temporary and unnecessary files", size: "5.6 GB" },
            { icon: Zap, title: "Optimize Startup", description: "Disable unnecessary startup programs", items: "8 programs" },
            { icon: HardDrive, title: "Defragment Disk", description: "Optimize disk performance", status: "Not needed" },
            { icon: Cpu, title: "Memory Optimization", description: "Free up RAM and improve speed", gain: "2.3 GB" },
          ].map((action, index) => (
            <div
              key={index}
              className="p-5 bg-muted/20 rounded-lg border border-border hover:bg-muted/30 transition-all animate-slide-in"
              style={{ animationDelay: `${index * 60}ms` }}
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-primary/10 border border-primary/20">
                    <action.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">{action.title}</h4>
                    <p className="text-sm text-muted-foreground mt-0.5">{action.description}</p>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between mt-4">
                <span className="text-sm text-muted-foreground">
                  {action.size || action.items || action.status || action.gain}
                </span>
                <Button size="sm" className="bg-primary hover:bg-primary/90">
                  Optimize
                </Button>
              </div>
            </div>
          ))}
        </div>
      </Card>

      <Card className="p-8 bg-gradient-to-br from-card/80 to-card/60 backdrop-blur-xl border-border shadow-lg" style={{ boxShadow: 'var(--shadow-elevated)' }}>
        <h3 className="text-xl font-semibold text-foreground mb-6">Cleanup Recommendations</h3>
        <div className="overflow-hidden rounded-lg border border-border">
          <table className="w-full">
            <thead className="bg-muted/30">
              <tr>
                <th className="text-left py-3 px-4 text-xs font-semibold text-muted-foreground uppercase">Category</th>
                <th className="text-left py-3 px-4 text-xs font-semibold text-muted-foreground uppercase">Size</th>
                <th className="text-left py-3 px-4 text-xs font-semibold text-muted-foreground uppercase">Items</th>
                <th className="text-left py-3 px-4 text-xs font-semibold text-muted-foreground uppercase">Impact</th>
                <th className="text-right py-3 px-4 text-xs font-semibold text-muted-foreground uppercase">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border bg-card/50">
              {cleanupItems.map((item, index) => (
                <tr key={index} className="hover:bg-muted/20 transition-colors animate-fade-in" style={{ animationDelay: `${index * 50}ms` }}>
                  <td className="py-3 px-4 text-sm text-foreground font-medium">{item.category}</td>
                  <td className="py-3 px-4 text-sm text-muted-foreground">{item.size}</td>
                  <td className="py-3 px-4 text-sm text-muted-foreground">{item.items.toLocaleString()}</td>
                  <td className="py-3 px-4">
                    <Badge
                      variant="outline"
                      className={
                        item.impact === "High"
                          ? "bg-success/10 text-success border-success/30"
                          : item.impact === "Medium"
                          ? "bg-warning/10 text-warning border-warning/30"
                          : "bg-info/10 text-info border-info/30"
                      }
                    >
                      {item.impact}
                    </Badge>
                  </td>
                  <td className="py-3 px-4 text-right">
                    <Button variant="ghost" size="sm">Clean</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}
