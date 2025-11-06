import { Layers, Activity, Target, Shield, Search, TrendingUp } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { StatCard } from "@/components/StatCard";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";

const XDRAnalytics = () => {
  return (
    <div className="space-y-8 animate-fade-in">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-display font-bold mb-3 text-foreground">
            XDR Analytics
          </h1>
          <p className="text-lg text-muted-foreground">
            Extended Detection & Response with advanced threat analytics
          </p>
        </div>
        <Button className="bg-primary hover:bg-primary/90">
          <Search className="w-4 h-4 mr-2" />
          Threat Hunt
        </Button>
      </div>

      {/* Statistics */}
      <div className="grid gap-6 md:grid-cols-4">
        <StatCard
          title="Total Events"
          value="45,892"
          change="+12.5%"
          icon={Activity}
        />
        <StatCard
          title="Correlated Threats"
          value="127"
          change="-8.3%"
          icon={Target}
        />
        <StatCard
          title="Risk Score"
          value="68/100"
          change="+2.1%"
          icon={TrendingUp}
        />
        <StatCard
          title="Active Hunts"
          value="3"
          change="Ongoing"
          icon={Search}
        />
      </div>

      {/* Threat Timeline */}
      <Card className="p-6 bg-card border-border shadow-lg">
        <h3 className="text-xl font-semibold mb-6 text-foreground">Threat Timeline</h3>
        <div className="space-y-4">
          {[
            { time: "14:35:22", event: "Suspicious Process Execution", severity: "High", source: "Endpoint-045", stage: "Initial Access" },
            { time: "14:36:15", event: "Lateral Movement Detected", severity: "Critical", source: "Network Monitor", stage: "Lateral Movement" },
            { time: "14:37:45", event: "Credential Dumping Attempt", severity: "Critical", source: "Endpoint-045", stage: "Credential Access" },
            { time: "14:38:12", event: "Data Exfiltration Blocked", severity: "High", source: "Network Firewall", stage: "Exfiltration" },
          ].map((event, index) => (
            <div key={index} className="relative pl-8 pb-4 border-l-2 border-primary last:border-0">
              <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-primary border-4 border-background" />
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="font-semibold text-foreground">{event.event}</div>
                  <Badge variant={event.severity === "Critical" ? "destructive" : "outline"}>
                    {event.severity}
                  </Badge>
                </div>
                <div className="text-sm text-muted-foreground">
                  {event.time} • {event.source} • MITRE: {event.stage}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* MITRE ATT&CK Mapping */}
      <Card className="p-6 bg-card border-border shadow-lg">
        <h3 className="text-xl font-semibold mb-6 text-foreground">MITRE ATT&CK Coverage</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { tactic: "Initial Access", detections: 12, coverage: "85%" },
            { tactic: "Execution", detections: 23, coverage: "92%" },
            { tactic: "Persistence", detections: 18, coverage: "78%" },
            { tactic: "Privilege Escalation", detections: 15, coverage: "88%" },
            { tactic: "Defense Evasion", detections: 31, coverage: "76%" },
            { tactic: "Credential Access", detections: 9, coverage: "95%" },
            { tactic: "Discovery", detections: 14, coverage: "82%" },
            { tactic: "Lateral Movement", detections: 11, coverage: "90%" },
          ].map((tactic, index) => (
            <div key={index} className="p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
              <div className="text-sm font-semibold text-foreground mb-2">{tactic.tactic}</div>
              <div className="text-2xl font-bold text-primary mb-1">{tactic.detections}</div>
              <div className="text-xs text-muted-foreground">{tactic.coverage} coverage</div>
            </div>
          ))}
        </div>
      </Card>

      {/* Infection Chain Visualization */}
      <Card className="p-6 bg-card border-border shadow-lg">
        <h3 className="text-xl font-semibold mb-6 text-foreground">Attack Chain Analysis</h3>
        <div className="flex items-center justify-between gap-4 p-6 bg-muted/30 rounded-lg">
          <div className="flex-1 text-center">
            <Shield className="w-8 h-8 mx-auto mb-2 text-yellow-500" />
            <div className="font-semibold text-foreground">Initial Access</div>
            <div className="text-sm text-muted-foreground">Phishing Email</div>
          </div>
          <div className="w-8 h-0.5 bg-primary" />
          <div className="flex-1 text-center">
            <Shield className="w-8 h-8 mx-auto mb-2 text-orange-500" />
            <div className="font-semibold text-foreground">Execution</div>
            <div className="text-sm text-muted-foreground">Malicious Macro</div>
          </div>
          <div className="w-8 h-0.5 bg-primary" />
          <div className="flex-1 text-center">
            <Shield className="w-8 h-8 mx-auto mb-2 text-red-500" />
            <div className="font-semibold text-foreground">Persistence</div>
            <div className="text-sm text-muted-foreground">Registry Key</div>
          </div>
          <div className="w-8 h-0.5 bg-primary" />
          <div className="flex-1 text-center">
            <Shield className="w-8 h-8 mx-auto mb-2 text-green-500" />
            <div className="font-semibold text-foreground">Blocked</div>
            <div className="text-sm text-muted-foreground">XDR Prevention</div>
          </div>
        </div>
      </Card>

      {/* Threat Hunting Console */}
      <Card className="p-6 bg-card border-border shadow-lg">
        <h3 className="text-xl font-semibold mb-6 text-foreground">Threat Hunting Console</h3>
        <div className="space-y-4">
          <div className="flex gap-2">
            <Input 
              placeholder="Search for IOCs, processes, file hashes, IPs..." 
              className="flex-1"
            />
            <Button className="bg-primary hover:bg-primary/90">
              <Search className="w-4 h-4 mr-2" />
              Hunt
            </Button>
          </div>
          
          <div className="space-y-2">
            <div className="text-sm font-semibold text-foreground mb-2">Recent Hunts:</div>
            {[
              { query: "process.name:powershell.exe AND network.bytes > 1000000", results: 3, time: "2 hours ago" },
              { query: "file.hash:a3f8d... AND process.parent:explorer.exe", results: 0, time: "5 hours ago" },
              { query: "network.destination.ip:185.220.* AND event.type:connection", results: 12, time: "1 day ago" },
            ].map((hunt, index) => (
              <div key={index} className="p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                <div className="font-mono text-sm text-foreground mb-1">{hunt.query}</div>
                <div className="text-xs text-muted-foreground">
                  {hunt.results} results • {hunt.time}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Card>

      {/* Risk Scoring */}
      <Card className="p-6 bg-card border-border shadow-lg">
        <h3 className="text-xl font-semibold mb-6 text-foreground">Top Risky Entities</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-3 px-4 font-semibold text-foreground">Entity</th>
                <th className="text-left py-3 px-4 font-semibold text-foreground">Type</th>
                <th className="text-left py-3 px-4 font-semibold text-foreground">Risk Score</th>
                <th className="text-left py-3 px-4 font-semibold text-foreground">Alerts</th>
                <th className="text-left py-3 px-4 font-semibold text-foreground">Last Activity</th>
              </tr>
            </thead>
            <tbody>
              {[
                { entity: "Endpoint-045", type: "Device", risk: 85, alerts: 12, activity: "5 min ago" },
                { entity: "user@company.com", type: "User", risk: 72, alerts: 8, activity: "15 min ago" },
                { entity: "192.168.1.234", type: "IP Address", risk: 68, alerts: 5, activity: "1 hour ago" },
                { entity: "suspicious.exe", type: "Process", risk: 91, alerts: 23, activity: "2 hours ago" },
              ].map((entity, index) => (
                <tr key={index} className="border-b border-border hover:bg-muted/50 transition-colors">
                  <td className="py-3 px-4 text-foreground font-medium">{entity.entity}</td>
                  <td className="py-3 px-4 text-muted-foreground">{entity.type}</td>
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-2">
                      <div className="w-24 h-2 bg-muted rounded-full overflow-hidden">
                        <div 
                          className={`h-full ${
                            entity.risk >= 80 ? "bg-red-500" :
                            entity.risk >= 60 ? "bg-orange-500" : "bg-yellow-500"
                          }`}
                          style={{ width: `${entity.risk}%` }}
                        />
                      </div>
                      <span className="text-sm font-semibold text-foreground">{entity.risk}</span>
                    </div>
                  </td>
                  <td className="py-3 px-4">
                    <Badge variant="destructive">{entity.alerts}</Badge>
                  </td>
                  <td className="py-3 px-4 text-muted-foreground text-sm">{entity.activity}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
};

export default XDRAnalytics;
