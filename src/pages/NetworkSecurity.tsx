import { Shield, Globe, AlertTriangle, Activity, Lock, Ban } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { StatCard } from "@/components/StatCard";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";

const NetworkSecurity = () => {
  return (
    <div className="space-y-8 animate-fade-in">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-display font-bold mb-3 text-foreground">
            Network Security
          </h1>
          <p className="text-lg text-muted-foreground">
            Advanced firewall, IDS/IPS, and network protection
          </p>
        </div>
        <Button className="bg-primary hover:bg-primary/90">
          <Shield className="w-4 h-4 mr-2" />
          Configure Rules
        </Button>
      </div>

      {/* Statistics */}
      <div className="grid gap-6 md:grid-cols-4">
        <StatCard
          title="Active Connections"
          value="847"
          change="+5.2%"
          icon={Activity}
        />
        <StatCard
          title="Blocked Threats"
          value="1,249"
          change="-12.3%"
          icon={Ban}
        />
        <StatCard
          title="Data Transfer"
          value="45.2 GB"
          change="+8.7%"
          icon={Globe}
        />
        <StatCard
          title="IDS Alerts"
          value="23"
          change="+3.1%"
          icon={AlertTriangle}
        />
      </div>

      {/* Firewall Status */}
      <Card className="p-6 bg-card border-border shadow-lg">
        <h3 className="text-xl font-semibold mb-6 text-foreground">Firewall & Protection Status</h3>
        <div className="space-y-4">
          {[
            { name: "Smart Firewall", desc: "Monitors all network traffic", enabled: true },
            { name: "Intrusion Detection (IDS)", desc: "Detects suspicious network patterns", enabled: true },
            { name: "Intrusion Prevention (IPS)", desc: "Blocks malicious network activity", enabled: true },
            { name: "Ad & Tracker Blocking", desc: "Blocks ads and online trackers", enabled: true },
            { name: "VPN Protection", desc: "Monitors VPN connections for leaks", enabled: false },
            { name: "DNS Security", desc: "Protects against DNS hijacking", enabled: true },
          ].map((feature, index) => (
            <div key={index} className="flex items-center justify-between p-4 rounded-lg bg-muted/50">
              <div className="flex items-center gap-4">
                <Shield className={`w-5 h-5 ${feature.enabled ? "text-primary" : "text-muted-foreground"}`} />
                <div>
                  <div className="font-semibold text-foreground">{feature.name}</div>
                  <div className="text-sm text-muted-foreground">{feature.desc}</div>
                </div>
              </div>
              <Switch checked={feature.enabled} />
            </div>
          ))}
        </div>
      </Card>

      {/* Network Traffic Monitor */}
      <Card className="p-6 bg-card border-border shadow-lg">
        <h3 className="text-xl font-semibold mb-6 text-foreground">Real-Time Network Traffic</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-3 px-4 font-semibold text-foreground">Application</th>
                <th className="text-left py-3 px-4 font-semibold text-foreground">Protocol</th>
                <th className="text-left py-3 px-4 font-semibold text-foreground">Remote IP</th>
                <th className="text-left py-3 px-4 font-semibold text-foreground">Port</th>
                <th className="text-left py-3 px-4 font-semibold text-foreground">Status</th>
                <th className="text-left py-3 px-4 font-semibold text-foreground">Data</th>
              </tr>
            </thead>
            <tbody>
              {[
                { app: "Chrome.exe", protocol: "HTTPS", ip: "172.217.14.206", port: "443", status: "Allowed", data: "1.2 MB" },
                { app: "Steam.exe", protocol: "TCP", ip: "104.96.52.146", port: "27015", status: "Allowed", data: "45.3 KB" },
                { app: "Discord.exe", protocol: "WSS", ip: "162.159.130.233", port: "443", status: "Allowed", data: "234 KB" },
                { app: "Unknown", protocol: "TCP", ip: "185.220.101.45", port: "8080", status: "Blocked", data: "0 B" },
                { app: "Outlook.exe", protocol: "IMAP", ip: "52.97.205.82", port: "993", status: "Allowed", data: "89 KB" },
              ].map((conn, index) => (
                <tr key={index} className="border-b border-border hover:bg-muted/50 transition-colors">
                  <td className="py-3 px-4 text-foreground font-medium">{conn.app}</td>
                  <td className="py-3 px-4 text-muted-foreground">{conn.protocol}</td>
                  <td className="py-3 px-4 text-muted-foreground font-mono text-sm">{conn.ip}</td>
                  <td className="py-3 px-4 text-muted-foreground">{conn.port}</td>
                  <td className="py-3 px-4">
                    <Badge variant={conn.status === "Blocked" ? "destructive" : "outline"}>
                      {conn.status}
                    </Badge>
                  </td>
                  <td className="py-3 px-4 text-muted-foreground">{conn.data}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      {/* IDS/IPS Alerts */}
      <Card className="p-6 bg-card border-border shadow-lg">
        <h3 className="text-xl font-semibold mb-6 text-foreground">Recent IDS/IPS Alerts</h3>
        <div className="space-y-3">
          {[
            { time: "14:32:45", type: "Port Scan", severity: "Medium", ip: "192.168.1.234", action: "Blocked" },
            { time: "13:15:22", type: "SQL Injection", severity: "High", ip: "185.220.101.45", action: "Blocked" },
            { time: "12:45:11", type: "DDoS Attempt", severity: "Critical", ip: "103.232.215.89", action: "Blocked" },
            { time: "11:20:05", type: "Brute Force", severity: "High", ip: "198.51.100.23", action: "Blocked" },
          ].map((alert, index) => (
            <div key={index} className="flex items-center justify-between p-4 rounded-lg bg-muted/50">
              <div className="flex items-center gap-4">
                <AlertTriangle className={`w-5 h-5 ${
                  alert.severity === "Critical" ? "text-red-500" :
                  alert.severity === "High" ? "text-orange-500" : "text-yellow-500"
                }`} />
                <div>
                  <div className="font-semibold text-foreground">{alert.type}</div>
                  <div className="text-sm text-muted-foreground">
                    {alert.time} • From {alert.ip}
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Badge variant={alert.severity === "Critical" ? "destructive" : "outline"}>
                  {alert.severity}
                </Badge>
                <Badge variant="outline">{alert.action}</Badge>
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Firewall Rules */}
      <Card className="p-6 bg-card border-border shadow-lg">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-semibold text-foreground">Firewall Rules</h3>
          <Button size="sm" variant="outline">Add Rule</Button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-3 px-4 font-semibold text-foreground">Rule Name</th>
                <th className="text-left py-3 px-4 font-semibold text-foreground">Direction</th>
                <th className="text-left py-3 px-4 font-semibold text-foreground">Protocol</th>
                <th className="text-left py-3 px-4 font-semibold text-foreground">Port</th>
                <th className="text-left py-3 px-4 font-semibold text-foreground">Action</th>
                <th className="text-left py-3 px-4 font-semibold text-foreground">Status</th>
              </tr>
            </thead>
            <tbody>
              {[
                { name: "Block Tor", direction: "Inbound", protocol: "TCP", port: "9050", action: "Block", status: "Active" },
                { name: "Allow Web", direction: "Outbound", protocol: "HTTPS", port: "443", action: "Allow", status: "Active" },
                { name: "Block BitTorrent", direction: "Both", protocol: "TCP", port: "6881-6889", action: "Block", status: "Active" },
                { name: "Allow SSH", direction: "Inbound", protocol: "TCP", port: "22", action: "Allow", status: "Inactive" },
              ].map((rule, index) => (
                <tr key={index} className="border-b border-border hover:bg-muted/50 transition-colors">
                  <td className="py-3 px-4 text-foreground font-medium">{rule.name}</td>
                  <td className="py-3 px-4 text-muted-foreground">{rule.direction}</td>
                  <td className="py-3 px-4 text-muted-foreground">{rule.protocol}</td>
                  <td className="py-3 px-4 text-muted-foreground">{rule.port}</td>
                  <td className="py-3 px-4">
                    <Badge variant={rule.action === "Block" ? "destructive" : "outline"}>
                      {rule.action}
                    </Badge>
                  </td>
                  <td className="py-3 px-4">
                    <Badge variant={rule.status === "Active" ? "default" : "outline"}>
                      {rule.status}
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
};

export default NetworkSecurity;
