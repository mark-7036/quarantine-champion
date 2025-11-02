import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Eye, Activity, AlertTriangle, Cpu, HardDrive, Shield } from "lucide-react";
import { StatCard } from "@/components/StatCard";

export default function Behavior() {
  const processes = [
    {
      name: "chrome.exe",
      pid: 4892,
      risk: "Low",
      cpu: "12%",
      memory: "847 MB",
      behavior: "Network Activity",
      status: "normal",
    },
    {
      name: "system32.exe",
      pid: 7234,
      risk: "Critical",
      cpu: "45%",
      memory: "234 MB",
      behavior: "Registry Modification",
      status: "suspicious",
    },
    {
      name: "notepad.exe",
      pid: 2341,
      risk: "Low",
      cpu: "0.2%",
      memory: "12 MB",
      behavior: "File Access",
      status: "normal",
    },
    {
      name: "powershell.exe",
      pid: 8821,
      risk: "Medium",
      cpu: "8%",
      memory: "124 MB",
      behavior: "Command Execution",
      status: "monitoring",
    },
    {
      name: "svchost.exe",
      pid: 1024,
      risk: "Low",
      cpu: "3%",
      memory: "67 MB",
      behavior: "Service Running",
      status: "normal",
    },
  ];

  const getRiskColor = (risk: string) => {
    switch (risk) {
      case "Critical":
        return "bg-critical/10 text-critical border-critical/30";
      case "Medium":
        return "bg-warning/10 text-warning border-warning/30";
      default:
        return "bg-success/10 text-success border-success/30";
    }
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Behavior Monitor</h1>
          <p className="text-muted-foreground mt-1">
            EDR-style process monitoring and threat detection
          </p>
        </div>
        <Button size="lg" className="bg-primary hover:bg-primary/90">
          <Shield className="w-4 h-4 mr-2" />
          Enable Auto-Block
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <StatCard
          title="Active Processes"
          value="247"
          change="+8 from baseline"
          changeType="neutral"
          icon={Activity}
          iconColor="text-info"
        />
        <StatCard
          title="Suspicious Activity"
          value="2"
          change="Requires attention"
          changeType="negative"
          icon={AlertTriangle}
          iconColor="text-critical"
        />
        <StatCard
          title="CPU Usage"
          value="34%"
          change="Normal"
          changeType="positive"
          icon={Cpu}
          iconColor="text-success"
        />
        <StatCard
          title="Memory Usage"
          value="62%"
          change="12.4 GB / 20 GB"
          changeType="neutral"
          icon={HardDrive}
          iconColor="text-warning"
        />
      </div>

      <Card className="p-8 bg-gradient-to-br from-card/80 to-card/60 backdrop-blur-xl border-border">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-semibold text-foreground">Active Processes</h3>
          <Badge variant="outline" className="bg-info/10 text-info border-info/30">
            Live Monitoring
          </Badge>
        </div>

        <div className="overflow-hidden rounded-lg border border-border">
          <table className="w-full">
            <thead className="bg-muted/30">
              <tr>
                <th className="text-left py-3 px-4 text-xs font-semibold text-muted-foreground uppercase">
                  Process
                </th>
                <th className="text-left py-3 px-4 text-xs font-semibold text-muted-foreground uppercase">
                  PID
                </th>
                <th className="text-left py-3 px-4 text-xs font-semibold text-muted-foreground uppercase">
                  Risk Level
                </th>
                <th className="text-left py-3 px-4 text-xs font-semibold text-muted-foreground uppercase">
                  CPU
                </th>
                <th className="text-left py-3 px-4 text-xs font-semibold text-muted-foreground uppercase">
                  Memory
                </th>
                <th className="text-left py-3 px-4 text-xs font-semibold text-muted-foreground uppercase">
                  Behavior
                </th>
                <th className="text-right py-3 px-4 text-xs font-semibold text-muted-foreground uppercase">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border bg-card/50">
              {processes.map((process, index) => (
                <tr
                  key={index}
                  className="hover:bg-muted/20 transition-colors animate-fade-in"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-2">
                      <Activity className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm text-foreground font-medium">
                        {process.name}
                      </span>
                    </div>
                  </td>
                  <td className="py-3 px-4 text-sm text-muted-foreground font-mono">
                    {process.pid}
                  </td>
                  <td className="py-3 px-4">
                    <Badge variant="outline" className={getRiskColor(process.risk)}>
                      {process.risk}
                    </Badge>
                  </td>
                  <td className="py-3 px-4 text-sm text-muted-foreground">{process.cpu}</td>
                  <td className="py-3 px-4 text-sm text-muted-foreground">{process.memory}</td>
                  <td className="py-3 px-4 text-sm text-muted-foreground">
                    {process.behavior}
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex justify-end gap-2">
                      <Button variant="ghost" size="sm">
                        <Eye className="w-4 h-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-critical hover:text-critical"
                      >
                        Kill
                      </Button>
                    </div>
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
