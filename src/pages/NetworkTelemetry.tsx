import { Activity, Globe, Wifi, ArrowUpDown, AlertTriangle } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { StatCard } from "@/components/StatCard";
import { ScrollArea } from "@/components/ui/scroll-area";

const NetworkTelemetry = () => {
  const trafficFlows = [
    { src: "192.168.1.100", dst: "8.8.8.8", protocol: "DNS", bytes: "2.4 KB", status: "Normal", timestamp: "14:32:01" },
    { src: "192.168.1.105", dst: "185.220.45.12", protocol: "HTTPS", bytes: "145 MB", status: "Suspicious", timestamp: "14:31:45" },
    { src: "192.168.1.102", dst: "10.0.0.50", protocol: "SMB", bytes: "23.5 MB", status: "Normal", timestamp: "14:31:22" },
    { src: "192.168.1.108", dst: "tor-exit-node.com", protocol: "TCP", bytes: "890 KB", status: "Critical", timestamp: "14:30:58" },
  ];

  const protocolStats = [
    { protocol: "HTTPS", percentage: 65, color: "bg-success" },
    { protocol: "HTTP", percentage: 12, color: "bg-warning" },
    { protocol: "DNS", percentage: 15, color: "bg-info" },
    { protocol: "SMB", percentage: 8, color: "bg-primary" },
  ];

  return (
    <div className="space-y-8 animate-fade-in">
      <div>
        <h1 className="text-4xl font-display font-bold mb-3 text-foreground">Network Telemetry</h1>
        <p className="text-lg text-muted-foreground">Real-time network traffic analysis, flow monitoring, and protocol inspection</p>
      </div>

      <div className="grid gap-6 md:grid-cols-4">
        <StatCard title="Active Flows" value="2,847" change="+234" icon={Activity} />
        <StatCard title="Bandwidth" value="1.2 Gbps" change="Peak" icon={ArrowUpDown} />
        <StatCard title="Unique IPs" value="892" change="+45" icon={Globe} />
        <StatCard title="Anomalies" value="12" change="3 critical" icon={AlertTriangle} />
      </div>

      <Card className="p-6 bg-card border-border shadow-lg">
        <h3 className="text-xl font-semibold mb-6 text-foreground">Protocol Distribution</h3>
        <div className="space-y-4">
          {protocolStats.map((stat, idx) => (
            <div key={idx} className="flex items-center gap-4">
              <span className="w-16 text-sm text-muted-foreground">{stat.protocol}</span>
              <div className="flex-1 h-3 bg-muted rounded-full overflow-hidden">
                <div className={`h-full ${stat.color} rounded-full transition-all`} style={{ width: `${stat.percentage}%` }} />
              </div>
              <span className="text-sm font-medium text-foreground">{stat.percentage}%</span>
            </div>
          ))}
        </div>
      </Card>

      <Card className="p-6 bg-card border-border shadow-lg">
        <h3 className="text-xl font-semibold mb-6 text-foreground">Live Traffic Flows</h3>
        <ScrollArea className="h-[400px]">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-3 px-4 font-semibold text-foreground">Source</th>
                <th className="text-left py-3 px-4 font-semibold text-foreground">Destination</th>
                <th className="text-left py-3 px-4 font-semibold text-foreground">Protocol</th>
                <th className="text-left py-3 px-4 font-semibold text-foreground">Bytes</th>
                <th className="text-left py-3 px-4 font-semibold text-foreground">Status</th>
                <th className="text-left py-3 px-4 font-semibold text-foreground">Time</th>
              </tr>
            </thead>
            <tbody>
              {trafficFlows.map((flow, idx) => (
                <tr key={idx} className="border-b border-border hover:bg-muted/50 transition-colors">
                  <td className="py-3 px-4 text-foreground font-mono text-sm">{flow.src}</td>
                  <td className="py-3 px-4 text-foreground font-mono text-sm">{flow.dst}</td>
                  <td className="py-3 px-4"><Badge variant="outline">{flow.protocol}</Badge></td>
                  <td className="py-3 px-4 text-muted-foreground">{flow.bytes}</td>
                  <td className="py-3 px-4">
                    <Badge variant={flow.status === "Critical" ? "destructive" : flow.status === "Suspicious" ? "outline" : "secondary"}>
                      {flow.status}
                    </Badge>
                  </td>
                  <td className="py-3 px-4 text-muted-foreground text-sm">{flow.timestamp}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </ScrollArea>
      </Card>
    </div>
  );
};

export default NetworkTelemetry;