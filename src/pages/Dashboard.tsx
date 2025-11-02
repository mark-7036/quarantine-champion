import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Activity, Shield, AlertTriangle, Eye } from "lucide-react";
import { StatCard } from "@/components/StatCard";

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
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">XDR Dashboard</h1>
          <p className="text-muted-foreground mt-1">
            Enterprise-grade security monitoring and threat intelligence
          </p>
        </div>
        <Badge className="bg-success/10 text-success border-success/30 text-sm px-3 py-1">
          All Systems Protected
        </Badge>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <StatCard
          title="System Health"
          value="98%"
          change="+2% from last week"
          changeType="positive"
          icon={Shield}
          iconColor="text-success"
        />
        <StatCard
          title="Active Threats"
          value="3"
          change="2 quarantined"
          changeType="negative"
          icon={AlertTriangle}
          iconColor="text-critical"
        />
        <StatCard
          title="Monitored Processes"
          value="247"
          change="Normal activity"
          changeType="neutral"
          icon={Eye}
          iconColor="text-info"
        />
        <StatCard
          title="Files Scanned"
          value="847K"
          change="Today"
          changeType="neutral"
          icon={Activity}
          iconColor="text-primary"
        />
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        <Card className="border-border bg-gradient-to-br from-card/80 to-card/60 backdrop-blur-xl animate-scale-in">
          <div className="p-8">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-xl font-semibold text-foreground">System Status</h2>
              <Badge className="bg-success/10 text-success border-success/30">
                Protected
              </Badge>
            </div>
            
            <div className="flex flex-col items-center justify-center">
              <div className="relative w-48 h-48">
                <svg className="w-full h-full transform -rotate-90">
                  <circle
                    cx="96"
                    cy="96"
                    r="88"
                    stroke="hsl(var(--muted))"
                    strokeWidth="12"
                    fill="none"
                    opacity="0.2"
                  />
                  <circle
                    cx="96"
                    cy="96"
                    r="88"
                    stroke="hsl(var(--success))"
                    strokeWidth="12"
                    fill="none"
                    strokeDasharray={`${(98 / 100) * 553} 553`}
                    strokeLinecap="round"
                    className="transition-all duration-1000"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <span className="text-5xl font-bold text-foreground">98</span>
                    <span className="text-2xl text-muted-foreground">%</span>
                  </div>
                </div>
              </div>
              
              <div className="text-center mt-6 space-y-1">
                <p className="text-lg font-semibold text-foreground">System Secure</p>
                <p className="text-sm text-muted-foreground">
                  Last Scan: <span className="text-foreground">Today, 7:05 AM</span>
                </p>
              </div>
            </div>
          </div>
        </Card>

        <Card className="border-border bg-gradient-to-br from-card/80 to-card/60 backdrop-blur-xl animate-scale-in" style={{ animationDelay: '50ms' }}>
          <div className="p-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-foreground">Recent Threats</h2>
              <Badge variant="outline" className="bg-critical/10 text-critical border-critical/30">
                {threats.length} Active
              </Badge>
            </div>
            
            <div className="overflow-hidden rounded-lg border border-border">
              <table className="w-full">
                <thead className="bg-muted/30">
                  <tr>
                    <th className="text-left py-3 px-4 text-xs font-semibold text-muted-foreground uppercase">
                      Threat
                    </th>
                    <th className="text-left py-3 px-4 text-xs font-semibold text-muted-foreground uppercase">
                      Severity
                    </th>
                    <th className="text-left py-3 px-4 text-xs font-semibold text-muted-foreground uppercase">
                      Date
                    </th>
                    <th className="text-left py-3 px-4 text-xs font-semibold text-muted-foreground uppercase">
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
                      <td className="py-3 px-4 text-foreground text-sm font-medium">{threat.name}</td>
                      <td className="py-3 px-4">
                        <Badge
                          variant="outline"
                          className={`${severityColors[threat.severity]} font-medium text-xs px-3 py-1`}
                        >
                          {threat.severity}
                        </Badge>
                      </td>
                      <td className="py-3 px-4 text-muted-foreground text-sm">{threat.date}</td>
                      <td className="py-3 px-4 text-muted-foreground text-sm">{threat.status}</td>
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
