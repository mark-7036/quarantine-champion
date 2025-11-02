import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

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
  Critical: "bg-critical/20 text-critical border-critical/50",
  High: "bg-warning/20 text-warning border-warning/50",
  Medium: "bg-blue-500/20 text-blue-400 border-blue-500/50",
};

const Dashboard = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2">Dashboard</h1>
        <p className="text-muted-foreground">Real-time security overview of your system</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="border-border bg-card/50 backdrop-blur-sm p-8">
          <h2 className="text-2xl font-bold text-foreground mb-8 text-center">Protected</h2>
          
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
                />
                <circle
                  cx="96"
                  cy="96"
                  r="88"
                  stroke="hsl(var(--success))"
                  strokeWidth="12"
                  fill="none"
                  strokeDasharray={`${(90 / 100) * 553} 553`}
                  className="transition-all duration-1000"
                  style={{ filter: "drop-shadow(var(--glow-success))" }}
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-6xl font-bold text-foreground">90</span>
              </div>
            </div>
            
            <div className="text-center mt-8">
              <p className="text-lg font-semibold text-foreground">System Secure</p>
              <p className="text-sm text-muted-foreground mt-1">Last Scan: Today, 7:05 AM</p>
            </div>
          </div>
        </Card>

        <Card className="border-border bg-card/50 backdrop-blur-sm p-6">
          <h2 className="text-xl font-bold text-foreground mb-6">Threats</h2>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 text-sm font-semibold text-muted-foreground uppercase">
                    Threat Name
                  </th>
                  <th className="text-left py-3 text-sm font-semibold text-muted-foreground uppercase">
                    Severity
                  </th>
                  <th className="text-left py-3 text-sm font-semibold text-muted-foreground uppercase">
                    Date
                  </th>
                  <th className="text-left py-3 text-sm font-semibold text-muted-foreground uppercase">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {threats.map((threat, index) => (
                  <tr key={index} className="hover:bg-muted/50 transition-colors">
                    <td className="py-3 text-foreground">{threat.name}</td>
                    <td className="py-3">
                      <Badge
                        variant="outline"
                        className={severityColors[threat.severity]}
                      >
                        {threat.severity}
                      </Badge>
                    </td>
                    <td className="py-3 text-muted-foreground">{threat.date}</td>
                    <td className="py-3 text-muted-foreground">{threat.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
