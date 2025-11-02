import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Globe, Shield, TrendingUp, TrendingDown, Activity } from "lucide-react";
import { StatCard } from "@/components/StatCard";

export default function Network() {
  const connections = [
    {
      ip: "192.168.1.45",
      port: 443,
      protocol: "HTTPS",
      status: "Allowed",
      traffic: "2.4 MB",
      threat: "None",
    },
    {
      ip: "185.220.101.45",
      port: 8080,
      protocol: "HTTP",
      status: "Blocked",
      traffic: "847 KB",
      threat: "Suspicious",
    },
    {
      ip: "104.26.3.112",
      port: 443,
      protocol: "HTTPS",
      status: "Allowed",
      traffic: "5.2 MB",
      threat: "None",
    },
    {
      ip: "203.0.113.89",
      port: 22,
      protocol: "SSH",
      status: "Blocked",
      traffic: "12 KB",
      threat: "Port Scan",
    },
    {
      ip: "8.8.8.8",
      port: 53,
      protocol: "DNS",
      status: "Allowed",
      traffic: "124 KB",
      threat: "None",
    },
  ];

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Network & Firewall</h1>
          <p className="text-muted-foreground mt-1">
            Real-time network traffic monitoring and firewall control
          </p>
        </div>
        <Button size="lg" className="bg-primary hover:bg-primary/90">
          <Shield className="w-4 h-4 mr-2" />
          Firewall Settings
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <StatCard
          title="Incoming Traffic"
          value="847 MB"
          change="+12% from average"
          changeType="neutral"
          icon={TrendingDown}
          iconColor="text-info"
        />
        <StatCard
          title="Outgoing Traffic"
          value="1.2 GB"
          change="+8% from average"
          changeType="neutral"
          icon={TrendingUp}
          iconColor="text-primary"
        />
        <StatCard
          title="Blocked Connections"
          value="34"
          change="Last hour"
          changeType="positive"
          icon={Shield}
          iconColor="text-success"
        />
        <StatCard
          title="Active Connections"
          value="127"
          change="Normal activity"
          changeType="neutral"
          icon={Activity}
          iconColor="text-warning"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="p-6 bg-gradient-to-br from-card/80 to-card/60 backdrop-blur-xl border-border">
          <h3 className="text-lg font-semibold text-foreground mb-4">Traffic Overview</h3>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm text-muted-foreground">Incoming</span>
                <span className="text-sm text-foreground font-medium">847 MB</span>
              </div>
              <div className="h-2 bg-background rounded-full overflow-hidden">
                <div className="h-full bg-info rounded-full" style={{ width: "65%" }} />
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm text-muted-foreground">Outgoing</span>
                <span className="text-sm text-foreground font-medium">1.2 GB</span>
              </div>
              <div className="h-2 bg-background rounded-full overflow-hidden">
                <div className="h-full bg-primary rounded-full" style={{ width: "85%" }} />
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm text-muted-foreground">Blocked</span>
                <span className="text-sm text-foreground font-medium">124 MB</span>
              </div>
              <div className="h-2 bg-background rounded-full overflow-hidden">
                <div className="h-full bg-critical rounded-full" style={{ width: "25%" }} />
              </div>
            </div>
          </div>
        </Card>

        <Card className="p-6 bg-gradient-to-br from-card/80 to-card/60 backdrop-blur-xl border-border">
          <h3 className="text-lg font-semibold text-foreground mb-4">Firewall Status</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 rounded-lg bg-background/50">
              <div>
                <p className="font-medium text-foreground">Firewall Protection</p>
                <p className="text-sm text-muted-foreground">Active and monitoring</p>
              </div>
              <Badge className="bg-success/10 text-success border-success/30">Enabled</Badge>
            </div>
            <div className="flex items-center justify-between p-4 rounded-lg bg-background/50">
              <div>
                <p className="font-medium text-foreground">Intrusion Prevention</p>
                <p className="text-sm text-muted-foreground">Real-time blocking</p>
              </div>
              <Badge className="bg-success/10 text-success border-success/30">Enabled</Badge>
            </div>
            <div className="flex items-center justify-between p-4 rounded-lg bg-background/50">
              <div>
                <p className="font-medium text-foreground">DDoS Protection</p>
                <p className="text-sm text-muted-foreground">Advanced filtering</p>
              </div>
              <Badge className="bg-success/10 text-success border-success/30">Enabled</Badge>
            </div>
          </div>
        </Card>
      </div>

      <Card className="p-8 bg-gradient-to-br from-card/80 to-card/60 backdrop-blur-xl border-border">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-semibold text-foreground">Active Connections</h3>
          <Badge variant="outline" className="bg-info/10 text-info border-info/30">
            Live
          </Badge>
        </div>

        <div className="overflow-hidden rounded-lg border border-border">
          <table className="w-full">
            <thead className="bg-muted/30">
              <tr>
                <th className="text-left py-3 px-4 text-xs font-semibold text-muted-foreground uppercase">
                  IP Address
                </th>
                <th className="text-left py-3 px-4 text-xs font-semibold text-muted-foreground uppercase">
                  Port
                </th>
                <th className="text-left py-3 px-4 text-xs font-semibold text-muted-foreground uppercase">
                  Protocol
                </th>
                <th className="text-left py-3 px-4 text-xs font-semibold text-muted-foreground uppercase">
                  Status
                </th>
                <th className="text-left py-3 px-4 text-xs font-semibold text-muted-foreground uppercase">
                  Traffic
                </th>
                <th className="text-left py-3 px-4 text-xs font-semibold text-muted-foreground uppercase">
                  Threat
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border bg-card/50">
              {connections.map((conn, index) => (
                <tr
                  key={index}
                  className="hover:bg-muted/20 transition-colors animate-fade-in"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <td className="py-3 px-4 text-sm text-foreground font-mono">{conn.ip}</td>
                  <td className="py-3 px-4 text-sm text-muted-foreground">{conn.port}</td>
                  <td className="py-3 px-4 text-sm text-muted-foreground">{conn.protocol}</td>
                  <td className="py-3 px-4">
                    <Badge
                      variant="outline"
                      className={
                        conn.status === "Allowed"
                          ? "bg-success/10 text-success border-success/30"
                          : "bg-critical/10 text-critical border-critical/30"
                      }
                    >
                      {conn.status}
                    </Badge>
                  </td>
                  <td className="py-3 px-4 text-sm text-muted-foreground">{conn.traffic}</td>
                  <td className="py-3 px-4">
                    <Badge
                      variant="outline"
                      className={
                        conn.threat === "None"
                          ? "bg-muted/50 text-muted-foreground border-border"
                          : "bg-warning/10 text-warning border-warning/30"
                      }
                    >
                      {conn.threat}
                    </Badge>
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
