import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Layers, AlertTriangle, Shield, TrendingUp, Activity } from "lucide-react";
import { StatCard } from "@/components/StatCard";

export default function XDRDashboard() {
  const attackChain = [
    { stage: "Initial Access", method: "Phishing Email", time: "14:23:12", severity: "High" },
    { stage: "Execution", method: "Malicious Macro", time: "14:23:45", severity: "Critical" },
    { stage: "Persistence", method: "Registry Modification", time: "14:24:01", severity: "High" },
    { stage: "Lateral Movement", method: "SMB Protocol", time: "14:24:38", severity: "Medium" },
  ];

  const endpoints = [
    { name: "DESKTOP-A8F2X", status: "Protected", threats: 0, lastSeen: "2 min ago" },
    { name: "LAPTOP-K9D3M", status: "At Risk", threats: 3, lastSeen: "5 min ago" },
    { name: "SERVER-P2L7V", status: "Protected", threats: 0, lastSeen: "1 min ago" },
    { name: "DESKTOP-W5R1Q", status: "Protected", threats: 0, lastSeen: "3 min ago" },
  ];

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="space-y-3">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-primary/10 border border-primary/20">
            <Layers className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h1 className="text-4xl font-display font-bold text-foreground tracking-tight">XDR Dashboard</h1>
            <p className="text-muted-foreground mt-1 text-base">
              Extended Detection & Response - Unified threat visibility
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <StatCard
          title="Protected Endpoints"
          value="247"
          change="+3 this hour"
          changeType="positive"
          icon={Shield}
          iconColor="text-success"
        />
        <StatCard
          title="Active Threats"
          value="5"
          change="2 auto-blocked"
          changeType="negative"
          icon={AlertTriangle}
          iconColor="text-critical"
        />
        <StatCard
          title="Detection Rate"
          value="99.8%"
          change="+0.2% improvement"
          changeType="positive"
          icon={TrendingUp}
          iconColor="text-info"
        />
        <StatCard
          title="Response Time"
          value="1.3s"
          change="Average"
          changeType="positive"
          icon={Activity}
          iconColor="text-primary"
        />
      </div>

      <Card className="p-8 bg-gradient-to-br from-card/80 to-card/60 backdrop-blur-xl border-border shadow-lg" style={{ boxShadow: 'var(--shadow-elevated)' }}>
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-semibold text-foreground">Attack Chain Visualization</h3>
          <Badge variant="outline" className="bg-critical/10 text-critical border-critical/30">
            Active Incident
          </Badge>
        </div>

        <div className="space-y-4">
          {attackChain.map((stage, index) => (
            <div
              key={index}
              className="flex items-center gap-4 p-4 bg-muted/20 rounded-lg border border-border hover:bg-muted/30 transition-all animate-slide-in"
              style={{ animationDelay: `${index * 60}ms` }}
            >
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-sm">
                {index + 1}
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-foreground text-sm">{stage.stage}</h4>
                <p className="text-xs text-muted-foreground mt-0.5">{stage.method}</p>
              </div>
              <div className="text-right">
                <Badge
                  variant="outline"
                  className={
                    stage.severity === "Critical"
                      ? "bg-critical/10 text-critical border-critical/30"
                      : stage.severity === "High"
                      ? "bg-warning/10 text-warning border-warning/30"
                      : "bg-info/10 text-info border-info/30"
                  }
                >
                  {stage.severity}
                </Badge>
                <p className="text-xs text-muted-foreground mt-1">{stage.time}</p>
              </div>
            </div>
          ))}
        </div>
      </Card>

      <Card className="p-8 bg-gradient-to-br from-card/80 to-card/60 backdrop-blur-xl border-border shadow-lg" style={{ boxShadow: 'var(--shadow-elevated)' }}>
        <h3 className="text-xl font-semibold text-foreground mb-6">Endpoint Status</h3>
        <div className="overflow-hidden rounded-lg border border-border">
          <table className="w-full">
            <thead className="bg-muted/30">
              <tr>
                <th className="text-left py-3 px-4 text-xs font-semibold text-muted-foreground uppercase">
                  Endpoint
                </th>
                <th className="text-left py-3 px-4 text-xs font-semibold text-muted-foreground uppercase">
                  Status
                </th>
                <th className="text-left py-3 px-4 text-xs font-semibold text-muted-foreground uppercase">
                  Threats
                </th>
                <th className="text-left py-3 px-4 text-xs font-semibold text-muted-foreground uppercase">
                  Last Seen
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border bg-card/50">
              {endpoints.map((endpoint, index) => (
                <tr
                  key={index}
                  className="hover:bg-muted/20 transition-colors animate-fade-in"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <td className="py-3 px-4 text-sm text-foreground font-medium">{endpoint.name}</td>
                  <td className="py-3 px-4">
                    <Badge
                      variant="outline"
                      className={
                        endpoint.status === "Protected"
                          ? "bg-success/10 text-success border-success/30"
                          : "bg-critical/10 text-critical border-critical/30"
                      }
                    >
                      {endpoint.status}
                    </Badge>
                  </td>
                  <td className="py-3 px-4 text-sm text-muted-foreground">{endpoint.threats}</td>
                  <td className="py-3 px-4 text-sm text-muted-foreground">{endpoint.lastSeen}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}
