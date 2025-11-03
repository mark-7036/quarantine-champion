import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Layers, AlertTriangle, Shield, TrendingUp, Activity, Database, GitMerge, Filter, Target, Search, GitBranch } from "lucide-react";
import { StatCard } from "@/components/StatCard";
import { Progress } from "@/components/ui/progress";

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

      {/* Unified Data Collection Dashboard */}
      <Card className="p-8 bg-gradient-to-br from-card/80 to-card/60 backdrop-blur-xl border-border shadow-lg" style={{ boxShadow: 'var(--shadow-elevated)' }}>
        <div className="flex items-center gap-3 mb-6">
          <Database className="w-6 h-6 text-primary" />
          <h3 className="text-xl font-semibold text-foreground">Unified Data Collection</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="p-4 bg-muted/20 rounded-lg border border-border">
            <p className="text-xs text-muted-foreground uppercase mb-2">Events/sec</p>
            <p className="text-2xl font-bold text-foreground">1,247</p>
            <Progress value={72} className="mt-2" />
          </div>
          <div className="p-4 bg-muted/20 rounded-lg border border-border">
            <p className="text-xs text-muted-foreground uppercase mb-2">Active Collectors</p>
            <p className="text-2xl font-bold text-success">24/24</p>
            <Progress value={100} className="mt-2" />
          </div>
          <div className="p-4 bg-muted/20 rounded-lg border border-border">
            <p className="text-xs text-muted-foreground uppercase mb-2">Data Ingested</p>
            <p className="text-2xl font-bold text-foreground">4.2 GB</p>
            <Progress value={45} className="mt-2" />
          </div>
        </div>

        <div className="space-y-2">
          <p className="text-sm font-semibold text-muted-foreground uppercase">Collector Status</p>
          {["Endpoint Logs", "Network Traffic", "Cloud Events", "Application Logs"].map((collector, i) => (
            <div key={i} className="flex items-center justify-between p-3 bg-muted/10 rounded-lg border border-border">
              <span className="text-sm text-foreground">{collector}</span>
              <Badge variant="outline" className="bg-success/10 text-success border-success/30">Active</Badge>
            </div>
          ))}
        </div>
      </Card>

      {/* Correlated Threat Detection */}
      <Card className="p-8 bg-gradient-to-br from-card/80 to-card/60 backdrop-blur-xl border-border shadow-lg" style={{ boxShadow: 'var(--shadow-elevated)' }}>
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <GitMerge className="w-6 h-6 text-warning" />
            <h3 className="text-xl font-semibold text-foreground">Correlated Threat Detection</h3>
          </div>
          <Button variant="outline">MITRE ATT&CK Map</Button>
        </div>

        <div className="space-y-4">
          {[
            { technique: "T1566 - Phishing", layer: "Email + Endpoint", severity: "High", events: 12 },
            { technique: "T1059 - Command Execution", layer: "Endpoint + Process", severity: "Critical", events: 8 },
            { technique: "T1071 - Application Protocol", layer: "Network + Cloud", severity: "Medium", events: 23 },
          ].map((threat, i) => (
            <div key={i} className="p-4 bg-muted/20 rounded-lg border border-border">
              <div className="flex items-center justify-between mb-2">
                <p className="text-sm font-semibold text-foreground">{threat.technique}</p>
                <Badge variant="outline" className={
                  threat.severity === "Critical" ? "bg-critical/10 text-critical border-critical/30" :
                  threat.severity === "High" ? "bg-warning/10 text-warning border-warning/30" :
                  "bg-info/10 text-info border-info/30"
                }>
                  {threat.severity}
                </Badge>
              </div>
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <span>Cross-layer: {threat.layer}</span>
                <span>{threat.events} correlated events</span>
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Alert Deduplication */}
      <Card className="p-8 bg-gradient-to-br from-card/80 to-card/60 backdrop-blur-xl border-border shadow-lg" style={{ boxShadow: 'var(--shadow-elevated)' }}>
        <div className="flex items-center gap-3 mb-6">
          <Filter className="w-6 h-6 text-info" />
          <h3 className="text-xl font-semibold text-foreground">Alert Deduplication & Noise Reduction</h3>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="p-4 bg-muted/20 rounded-lg border border-border">
            <p className="text-xs text-muted-foreground uppercase mb-2">Total Alerts</p>
            <p className="text-2xl font-bold text-foreground">3,847</p>
          </div>
          <div className="p-4 bg-muted/20 rounded-lg border border-border">
            <p className="text-xs text-muted-foreground uppercase mb-2">After Dedup</p>
            <p className="text-2xl font-bold text-success">247</p>
          </div>
        </div>

        <div className="p-4 bg-success/10 border border-success/30 rounded-lg">
          <p className="text-sm font-semibold text-success mb-1">93.6% Noise Reduction</p>
          <p className="text-xs text-muted-foreground">AI-powered deduplication reduced alert fatigue by grouping similar threats</p>
        </div>
      </Card>

      {/* Risk Scoring Engine */}
      <Card className="p-8 bg-gradient-to-br from-card/80 to-card/60 backdrop-blur-xl border-border shadow-lg" style={{ boxShadow: 'var(--shadow-elevated)' }}>
        <div className="flex items-center gap-3 mb-6">
          <Target className="w-6 h-6 text-critical" />
          <h3 className="text-xl font-semibold text-foreground">Risk Scoring Engine</h3>
        </div>

        <div className="flex items-center justify-center mb-6">
          <div className="relative w-48 h-48">
            <svg className="w-full h-full transform -rotate-90">
              <circle cx="96" cy="96" r="80" stroke="hsl(var(--muted))" strokeWidth="12" fill="none" />
              <circle cx="96" cy="96" r="80" stroke="hsl(var(--critical))" strokeWidth="12" fill="none" strokeDasharray="502" strokeDashoffset="125" />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <p className="text-5xl font-bold text-critical">73</p>
              <p className="text-sm text-muted-foreground">Risk Score</p>
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <p className="text-sm font-semibold text-muted-foreground uppercase mb-3">Top Risky Entities</p>
          {[
            { entity: "User: admin@company.com", risk: 89 },
            { entity: "Endpoint: LAPTOP-X9D2M", risk: 76 },
            { entity: "Process: suspicious.exe", risk: 94 },
          ].map((item, i) => (
            <div key={i} className="flex items-center justify-between p-3 bg-muted/10 rounded-lg border border-border">
              <span className="text-sm text-foreground">{item.entity}</span>
              <div className="flex items-center gap-2">
                <Progress value={item.risk} className="w-24" />
                <span className="text-sm font-bold text-critical">{item.risk}</span>
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Threat Hunting Console */}
      <Card className="p-8 bg-gradient-to-br from-card/80 to-card/60 backdrop-blur-xl border-border shadow-lg" style={{ boxShadow: 'var(--shadow-elevated)' }}>
        <div className="flex items-center gap-3 mb-6">
          <Search className="w-6 h-6 text-primary" />
          <h3 className="text-xl font-semibold text-foreground">Threat Hunting Console</h3>
        </div>

        <div className="space-y-4">
          <div className="flex gap-2">
            <input 
              type="text" 
              placeholder="Search for IOCs, processes, network activity..." 
              className="flex-1 px-4 py-3 bg-muted/20 border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary font-mono text-sm"
            />
            <Button className="bg-primary hover:bg-primary/90 px-6">Hunt</Button>
          </div>

          <div className="grid grid-cols-4 gap-2">
            {["Process", "Network", "File", "Registry"].map((filter) => (
              <Button key={filter} variant="outline" size="sm">{filter}</Button>
            ))}
          </div>

          <div className="overflow-hidden rounded-lg border border-border">
            <table className="w-full">
              <thead className="bg-muted/30">
                <tr>
                  <th className="text-left py-3 px-4 text-xs font-semibold text-muted-foreground uppercase">Timestamp</th>
                  <th className="text-left py-3 px-4 text-xs font-semibold text-muted-foreground uppercase">Entity</th>
                  <th className="text-left py-3 px-4 text-xs font-semibold text-muted-foreground uppercase">Activity</th>
                  <th className="text-left py-3 px-4 text-xs font-semibold text-muted-foreground uppercase">Risk</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border bg-card/50">
                {[
                  { time: "14:23:45", entity: "powershell.exe", activity: "Script execution", risk: "High" },
                  { time: "14:24:12", entity: "192.168.1.45", activity: "Outbound connection", risk: "Medium" },
                  { time: "14:24:38", entity: "config.sys", activity: "Modification", risk: "Low" },
                ].map((result, i) => (
                  <tr key={i} className="hover:bg-muted/20 transition-colors">
                    <td className="py-3 px-4 text-xs font-mono text-muted-foreground">{result.time}</td>
                    <td className="py-3 px-4 text-sm text-foreground font-medium">{result.entity}</td>
                    <td className="py-3 px-4 text-sm text-muted-foreground">{result.activity}</td>
                    <td className="py-3 px-4">
                      <Badge variant="outline" className={
                        result.risk === "High" ? "bg-critical/10 text-critical border-critical/30" :
                        result.risk === "Medium" ? "bg-warning/10 text-warning border-warning/30" :
                        "bg-info/10 text-info border-info/30"
                      }>
                        {result.risk}
                      </Badge>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Card>

      {/* Root Cause Analysis */}
      <Card className="p-8 bg-gradient-to-br from-card/80 to-card/60 backdrop-blur-xl border-border shadow-lg" style={{ boxShadow: 'var(--shadow-elevated)' }}>
        <div className="flex items-center gap-3 mb-6">
          <GitBranch className="w-6 h-6 text-warning" />
          <h3 className="text-xl font-semibold text-foreground">Root Cause Analysis (RCA)</h3>
        </div>

        <div className="space-y-6">
          <div className="p-4 bg-muted/20 rounded-lg border border-border">
            <p className="text-sm font-semibold text-foreground mb-4">Attack Flow Diagram</p>
            <div className="space-y-3">
              {[
                "Initial Access: Phishing Email",
                "↓",
                "Execution: Malicious Macro",
                "↓",
                "Persistence: Registry Modification",
                "↓",
                "Lateral Movement: SMB Protocol",
                "↓",
                "Exfiltration: Data Transfer"
              ].map((step, i) => (
                <div key={i} className={step === "↓" ? "text-center text-muted-foreground" : "p-2 bg-muted/10 rounded border border-border text-center"}>
                  <span className="text-sm text-foreground">{step}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold text-muted-foreground uppercase mb-3">Affected Objects</p>
            <div className="space-y-2">
              {[
                "User: john.doe@company.com",
                "Endpoint: DESKTOP-K9D2M",
                "Files: 147 encrypted",
                "Network: 3 IPs contacted"
              ].map((obj, i) => (
                <div key={i} className="p-3 bg-muted/10 rounded-lg border border-border text-sm text-foreground">
                  {obj}
                </div>
              ))}
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}

