import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FileSearch, Flame, Clock, GitBranch, Shield, AlertTriangle } from "lucide-react";
import { StatCard } from "@/components/StatCard";

export default function AdvancedProcessSecurity() {
  const processTree = [
    { pid: 1234, name: "explorer.exe", heat: 12, status: "Safe" },
    { pid: 5678, name: "chrome.exe", heat: 34, status: "Safe" },
    { pid: 9012, name: "suspicious.exe", heat: 87, status: "High Risk" },
    { pid: 3456, name: "svchost.exe", heat: 23, status: "Safe" },
  ];

  const timeBombs = [
    { id: 1, process: "malware.exe", timer: "00:05:23", action: "File Deletion" },
    { id: 2, process: "backdoor.dll", timer: "00:12:45", action: "Registry Modification" },
  ];

  const commandChains = [
    { sequence: "powershell.exe → cmd.exe → net.exe", risk: "High", blocked: true },
    { sequence: "wscript.exe → cscript.exe", risk: "Medium", blocked: false },
  ];

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="space-y-3">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-primary/10 border border-primary/20">
            <Shield className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h1 className="text-4xl font-display font-bold text-foreground tracking-tight">Advanced Process Security</h1>
            <p className="text-muted-foreground mt-1 text-base">
              Deep process monitoring and threat neutralization
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <StatCard
          title="Active Processes"
          value="247"
          change="12 monitored"
          changeType="positive"
          icon={FileSearch}
          iconColor="text-info"
        />
        <StatCard
          title="High Heat Signatures"
          value="3"
          change="1 neutralized"
          changeType="positive"
          icon={Flame}
          iconColor="text-critical"
        />
        <StatCard
          title="Time-Bombs Detected"
          value="2"
          change="Both neutralized"
          changeType="positive"
          icon={Clock}
          iconColor="text-warning"
        />
        <StatCard
          title="Command Chains"
          value="8"
          change="3 blocked"
          changeType="positive"
          icon={GitBranch}
          iconColor="text-primary"
        />
      </div>

      {/* Cold Layer Execution Scanner */}
      <Card className="p-8 bg-gradient-to-br from-card/80 to-card/60 backdrop-blur-xl border-border shadow-lg" style={{ boxShadow: 'var(--shadow-elevated)' }}>
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <FileSearch className="w-6 h-6 text-info" />
            <h3 className="text-xl font-semibold text-foreground">Cold Layer Execution Scanner</h3>
          </div>
          <Button className="bg-primary hover:bg-primary/90">Refresh Scan</Button>
        </div>

        <div className="overflow-hidden rounded-lg border border-border">
          <table className="w-full">
            <thead className="bg-muted/30">
              <tr>
                <th className="text-left py-3 px-4 text-xs font-semibold text-muted-foreground uppercase">PID</th>
                <th className="text-left py-3 px-4 text-xs font-semibold text-muted-foreground uppercase">Process</th>
                <th className="text-left py-3 px-4 text-xs font-semibold text-muted-foreground uppercase">Heat Signature</th>
                <th className="text-left py-3 px-4 text-xs font-semibold text-muted-foreground uppercase">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border bg-card/50">
              {processTree.map((proc, index) => (
                <tr key={index} className="hover:bg-muted/20 transition-colors animate-fade-in" style={{ animationDelay: `${index * 50}ms` }}>
                  <td className="py-3 px-4 text-sm text-muted-foreground font-mono">{proc.pid}</td>
                  <td className="py-3 px-4 text-sm text-foreground font-medium">{proc.name}</td>
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-2">
                      <Flame className={`w-4 h-4 ${proc.heat > 70 ? 'text-critical' : proc.heat > 40 ? 'text-warning' : 'text-success'}`} />
                      <span className="text-sm text-foreground">{proc.heat}°</span>
                    </div>
                  </td>
                  <td className="py-3 px-4">
                    <Badge variant="outline" className={
                      proc.status === "High Risk" ? "bg-critical/10 text-critical border-critical/30" : "bg-success/10 text-success border-success/30"
                    }>
                      {proc.status}
                    </Badge>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      {/* Memory Time-Bomb Neutralizer */}
      <Card className="p-8 bg-gradient-to-br from-card/80 to-card/60 backdrop-blur-xl border-border shadow-lg" style={{ boxShadow: 'var(--shadow-elevated)' }}>
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <Clock className="w-6 h-6 text-warning" />
            <h3 className="text-xl font-semibold text-foreground">Memory Time-Bomb Neutralizer</h3>
          </div>
          <Badge variant="outline" className="bg-warning/10 text-warning border-warning/30">
            {timeBombs.length} Active Threats
          </Badge>
        </div>

        <div className="space-y-4">
          {timeBombs.map((bomb) => (
            <div key={bomb.id} className="p-4 bg-critical/10 border border-critical/30 rounded-lg">
              <div className="flex items-center justify-between mb-3">
                <div>
                  <p className="text-sm font-semibold text-foreground">{bomb.process}</p>
                  <p className="text-xs text-muted-foreground mt-1">Scheduled: {bomb.action}</p>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold text-critical font-mono">{bomb.timer}</p>
                  <p className="text-xs text-muted-foreground">Time Remaining</p>
                </div>
              </div>
              <div className="flex gap-2">
                <Button className="flex-1 bg-critical hover:bg-critical/90">Neutralize Now</Button>
                <Button variant="outline" className="flex-1">Quarantine</Button>
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Command Chain Interruption Firewall */}
      <Card className="p-8 bg-gradient-to-br from-card/80 to-card/60 backdrop-blur-xl border-border shadow-lg" style={{ boxShadow: 'var(--shadow-elevated)' }}>
        <div className="flex items-center gap-3 mb-6">
          <GitBranch className="w-6 h-6 text-primary" />
          <h3 className="text-xl font-semibold text-foreground">Command Chain Interruption Firewall</h3>
        </div>

        <div className="space-y-4">
          {commandChains.map((chain, index) => (
            <div key={index} className="p-4 bg-muted/20 rounded-lg border border-border">
              <div className="flex items-center justify-between mb-3">
                <div className="flex-1">
                  <p className="text-sm font-mono text-foreground">{chain.sequence}</p>
                  <div className="flex items-center gap-2 mt-2">
                    <Badge variant="outline" className={
                      chain.risk === "High" ? "bg-critical/10 text-critical border-critical/30" : "bg-warning/10 text-warning border-warning/30"
                    }>
                      {chain.risk} Risk
                    </Badge>
                    {chain.blocked && (
                      <Badge variant="outline" className="bg-success/10 text-success border-success/30">
                        Blocked
                      </Badge>
                    )}
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline">Block</Button>
                  <Button size="sm" variant="outline">Allow</Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Sandbox Auto-Compartment */}
      <Card className="p-8 bg-gradient-to-br from-card/80 to-card/60 backdrop-blur-xl border-border shadow-lg" style={{ boxShadow: 'var(--shadow-elevated)' }}>
        <div className="flex items-center gap-3 mb-6">
          <Shield className="w-6 h-6 text-info" />
          <h3 className="text-xl font-semibold text-foreground">Sandbox Auto-Compartment</h3>
        </div>

        <div className="space-y-6">
          <div className="border-2 border-dashed border-border rounded-lg p-8 text-center">
            <FileSearch className="w-12 h-12 text-muted-foreground mx-auto mb-3" />
            <p className="text-sm text-foreground font-medium mb-2">Drop File Here</p>
            <p className="text-xs text-muted-foreground">File will be automatically sandboxed and analyzed</p>
          </div>

          <div>
            <p className="text-sm font-semibold text-muted-foreground uppercase mb-3">Recent Sandbox Snapshots</p>
            <div className="space-y-2">
              {["suspicious.exe - Snapshot 1", "unknown.dll - Snapshot 2", "malware.bat - Snapshot 3"].map((snapshot, i) => (
                <div key={i} className="flex items-center justify-between p-3 bg-muted/10 rounded-lg border border-border">
                  <span className="text-sm text-foreground">{snapshot}</span>
                  <Button size="sm" variant="outline">Restore</Button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
