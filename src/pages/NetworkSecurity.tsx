import { Shield, Globe, AlertTriangle, Activity, Ban } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { StatCard } from "@/components/StatCard";
import { Badge } from "@/components/ui/badge";
import { PageHeader } from "@/components/PageHeader";
import { FeatureToggleList } from "@/components/FeatureToggleList";
import { DataTable } from "@/components/DataTable";
import { SeverityBadge } from "@/components/SeverityBadge";
import { SeverityLevel } from "@/lib/constants";

const firewallFeatures = [
  { icon: Shield, title: "Smart Firewall", description: "Monitors all network traffic", enabled: true },
  { icon: Shield, title: "Intrusion Detection (IDS)", description: "Detects suspicious network patterns", enabled: true },
  { icon: Shield, title: "Intrusion Prevention (IPS)", description: "Blocks malicious network activity", enabled: true },
  { icon: Shield, title: "Ad & Tracker Blocking", description: "Blocks ads and online trackers", enabled: true },
  { icon: Shield, title: "VPN Protection", description: "Monitors VPN connections for leaks", enabled: false },
  { icon: Shield, title: "DNS Security", description: "Protects against DNS hijacking", enabled: true },
];

const networkTraffic = [
  { app: "Chrome.exe", protocol: "HTTPS", ip: "172.217.14.206", port: "443", status: "Allowed", data: "1.2 MB" },
  { app: "Steam.exe", protocol: "TCP", ip: "104.96.52.146", port: "27015", status: "Allowed", data: "45.3 KB" },
  { app: "Discord.exe", protocol: "WSS", ip: "162.159.130.233", port: "443", status: "Allowed", data: "234 KB" },
  { app: "Unknown", protocol: "TCP", ip: "185.220.101.45", port: "8080", status: "Blocked", data: "0 B" },
  { app: "Outlook.exe", protocol: "IMAP", ip: "52.97.205.82", port: "993", status: "Allowed", data: "89 KB" },
];

const idsAlerts = [
  { time: "14:32:45", type: "Port Scan", severity: "Medium" as SeverityLevel, ip: "192.168.1.234", action: "Blocked" },
  { time: "13:15:22", type: "SQL Injection", severity: "High" as SeverityLevel, ip: "185.220.101.45", action: "Blocked" },
  { time: "12:45:11", type: "DDoS Attempt", severity: "Critical" as SeverityLevel, ip: "103.232.215.89", action: "Blocked" },
  { time: "11:20:05", type: "Brute Force", severity: "High" as SeverityLevel, ip: "198.51.100.23", action: "Blocked" },
];

const NetworkSecurity = () => {
  return (
    <div className="space-y-8 animate-fade-in">
      <PageHeader
        title="Network Security"
        description="Advanced firewall, IDS/IPS, and network protection"
        icon={Shield}
        action={{ label: "Configure Rules", icon: Shield }}
      />

      <div className="grid gap-6 md:grid-cols-4">
        <StatCard title="Active Connections" value="847" change="+5.2%" icon={Activity} />
        <StatCard title="Blocked Threats" value="1,249" change="-12.3%" icon={Ban} />
        <StatCard title="Data Transfer" value="45.2 GB" change="+8.7%" icon={Globe} />
        <StatCard title="IDS Alerts" value="23" change="+3.1%" icon={AlertTriangle} />
      </div>

      <Card className="p-6 bg-card border-border shadow-lg">
        <h3 className="text-xl font-semibold mb-6 text-foreground">Firewall & Protection Status</h3>
        <FeatureToggleList features={firewallFeatures} variant="list" />
      </Card>

      <Card className="p-6 bg-card border-border shadow-lg">
        <h3 className="text-xl font-semibold mb-6 text-foreground">Real-Time Network Traffic</h3>
        <DataTable
          columns={[
            { key: "app", header: "Application", render: (item) => <span className="text-foreground font-medium">{item.app}</span> },
            { key: "protocol", header: "Protocol", render: (item) => <span className="text-muted-foreground">{item.protocol}</span> },
            { key: "ip", header: "Remote IP", render: (item) => <span className="text-muted-foreground font-mono text-sm">{item.ip}</span> },
            { key: "port", header: "Port", render: (item) => <span className="text-muted-foreground">{item.port}</span> },
            { key: "status", header: "Status", render: (item) => <Badge variant={item.status === "Blocked" ? "destructive" : "outline"}>{item.status}</Badge> },
            { key: "data", header: "Data", render: (item) => <span className="text-muted-foreground">{item.data}</span> },
          ]}
          data={networkTraffic}
          keyExtractor={(item) => `${item.app}-${item.ip}`}
        />
      </Card>

      <Card className="p-6 bg-card border-border shadow-lg">
        <h3 className="text-xl font-semibold mb-6 text-foreground">Recent IDS/IPS Alerts</h3>
        <div className="space-y-3">
          {idsAlerts.map((alert, index) => (
            <div key={index} className="flex items-center justify-between p-4 rounded-lg bg-muted/50">
              <div className="flex items-center gap-4">
                <AlertTriangle className={`w-5 h-5 ${
                  alert.severity === "Critical" ? "text-critical" :
                  alert.severity === "High" ? "text-warning" : "text-info"
                }`} />
                <div>
                  <div className="font-semibold text-foreground">{alert.type}</div>
                  <div className="text-sm text-muted-foreground">{alert.time} • From {alert.ip}</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <SeverityBadge severity={alert.severity} />
                <Badge variant="outline">{alert.action}</Badge>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default NetworkSecurity;
