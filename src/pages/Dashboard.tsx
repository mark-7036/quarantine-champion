import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Activity, TrendingUp } from "lucide-react";

interface Threat {
  name: string;
  severity: "Critical" | "High" | "Medium";
  date: string;
  status: string;
}

const threats: Threat[] = [
  {
    name: "EICAR-Test-File",
    severity: "Critical",
    date: "5/11/2016",
    status: "Unprocessed",
  },
  {
    name: "Malware.exe",
    severity: "High",
    date: "10/09/2025",
    status: "Quarantined",
  },
  {
    name: "Suspicious.doc",
    severity: "Medium",
    date: "10/08/2025",
    status: "Blocked",
  },
];

const severityColors = {
  Critical: "bg-critical/10 text-critical border-critical/30",
  High: "bg-warning/10 text-warning border-warning/30",
  Medium: "bg-blue-500/10 text-blue-400 border-blue-500/30",
};

const Dashboard = () => {
  return (
    <div className="space-y-8 animate-fade-in">
      <div className="space-y-3">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-primary/10 border border-primary/20">
            <Activity className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h1 className="text-4xl font-display font-bold text-foreground tracking-tight">Dashboard</h1>
            <p className="text-muted-foreground mt-1 text-base">
              Real-time security overview and system status
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
        <Card className="border-border bg-gradient-to-br from-card/80 to-card/60 backdrop-blur-xl shadow-2xl animate-scale-in" style={{ boxShadow: 'var(--shadow-elevated)' }}>
          <div className="p-10">
            <div className="flex items-center justify-between mb-10">
              <h2 className="text-2xl font-display font-bold text-foreground">System Status</h2>
              <div className="flex items-center gap-2 text-success">
                <TrendingUp className="w-5 h-5" />
                <span className="text-sm font-semibold">Protected</span>
              </div>
            </div>
            
            <div className="flex flex-col items-center justify-center">
              <div className="relative w-56 h-56">
                <svg className="w-full h-full transform -rotate-90">
                  <circle
                    cx="112"
                    cy="112"
                    r="100"
                    stroke="hsl(var(--muted))"
                    strokeWidth="16"
                    fill="none"
                    opacity="0.2"
                  />
                  <circle
                    cx="112"
                    cy="112"
                    r="100"
                    stroke="hsl(var(--success))"
                    strokeWidth="16"
                    fill="none"
                    strokeDasharray={`${(90 / 100) * 628} 628`}
                    strokeLinecap="round"
                    className="transition-all duration-1000 animate-scale-in"
                    style={{ filter: 'drop-shadow(var(--glow-primary))' }}
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <span className="text-7xl font-display font-bold text-foreground tabular-nums">90</span>
                    <div className="w-12 h-1 bg-primary/30 rounded-full mx-auto mt-2" />
                  </div>
                </div>
              </div>
              
              <div className="text-center mt-10 space-y-2">
                <p className="text-xl font-display font-semibold text-foreground">System Secure</p>
                <p className="text-sm text-muted-foreground">
                  Last Scan: <span className="text-foreground font-medium">Today, 7:05 AM</span>
                </p>
              </div>
            </div>
          </div>
        </Card>

        <Card className="border-border bg-gradient-to-br from-card/80 to-card/60 backdrop-blur-xl shadow-2xl animate-scale-in" style={{ boxShadow: 'var(--shadow-elevated)', animationDelay: '100ms' }}>
          <div className="p-10">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-display font-bold text-foreground">Recent Threats</h2>
              <Badge variant="outline" className="bg-critical/10 text-critical border-critical/30 text-xs px-3 py-1">
                {threats.length} Active
              </Badge>
            </div>
            
            <div className="overflow-hidden rounded-xl border border-border">
              <table className="w-full">
                <thead className="bg-muted/30">
                  <tr>
                    <th className="text-left py-4 px-5 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                      Threat
                    </th>
                    <th className="text-left py-4 px-5 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                      Severity
                    </th>
                    <th className="text-left py-4 px-5 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                      Date
                    </th>
                    <th className="text-left py-4 px-5 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border bg-card/50">
                  {threats.map((threat, index) => (
                    <tr 
                      key={index} 
                      className="hover:bg-muted/20 transition-colors animate-fade-in"
                      style={{ animationDelay: `${index * 50}ms` }}
                    >
                      <td className="py-4 px-5 text-foreground text-sm font-medium">{threat.name}</td>
                      <td className="py-4 px-5">
                        <Badge
                          variant="outline"
                          className={`${severityColors[threat.severity]} font-medium text-xs px-3 py-1`}
                        >
                          {threat.severity}
                        </Badge>
                      </td>
                      <td className="py-4 px-5 text-muted-foreground text-sm tabular-nums">{threat.date}</td>
                      <td className="py-4 px-5 text-muted-foreground text-sm">{threat.status}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
