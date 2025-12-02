import { GitBranch, Target, AlertTriangle, Shield, Activity, Clock } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { StatCard } from "@/components/StatCard";
import { Button } from "@/components/ui/button";

const AttackChainViewer = () => {
  const attackChain = [
    { stage: "Initial Access", technique: "T1566.001", name: "Spearphishing Attachment", status: "Detected", time: "14:20:00" },
    { stage: "Execution", technique: "T1059.001", name: "PowerShell", status: "Detected", time: "14:22:15" },
    { stage: "Persistence", technique: "T1547.001", name: "Registry Run Keys", status: "Blocked", time: "14:23:45" },
    { stage: "Privilege Escalation", technique: "T1055", name: "Process Injection", status: "Blocked", time: "14:25:00" },
    { stage: "Defense Evasion", technique: "T1070.001", name: "Clear Windows Event Logs", status: "Blocked", time: "14:26:30" },
    { stage: "Credential Access", technique: "T1003.001", name: "LSASS Memory", status: "Blocked", time: "14:27:00" },
  ];

  const incidents = [
    { id: "INC-2024-001", severity: "Critical", endpoints: 3, status: "Active", blastRadius: "High" },
    { id: "INC-2024-002", severity: "High", endpoints: 1, status: "Contained", blastRadius: "Low" },
    { id: "INC-2024-003", severity: "Medium", endpoints: 5, status: "Investigating", blastRadius: "Medium" },
  ];

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-display font-bold mb-3 text-foreground">Attack Chain Viewer</h1>
          <p className="text-lg text-muted-foreground">Kill chain visualization, pivot analysis, and blast radius assessment</p>
        </div>
        <Button className="bg-primary hover:bg-primary/90">
          <GitBranch className="w-4 h-4 mr-2" />
          Export Chain
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-4">
        <StatCard title="Active Chains" value="3" change="Investigating" icon={GitBranch} />
        <StatCard title="Pivot Points" value="12" change="Identified" icon={Target} />
        <StatCard title="Blocked Stages" value="18" change="Today" icon={Shield} />
        <StatCard title="Avg Chain Length" value="4.2" change="Stages" icon={Activity} />
      </div>

      <Card className="p-6 bg-card border-border shadow-lg">
        <h3 className="text-xl font-semibold mb-6 text-foreground">Kill Chain Visualization</h3>
        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border" />
          <div className="space-y-4">
            {attackChain.map((stage, idx) => (
              <div key={idx} className="relative flex items-start gap-4 ml-4">
                <div className={`absolute left-4 w-3 h-3 rounded-full border-2 ${
                  stage.status === "Blocked" ? "bg-success border-success" : "bg-destructive border-destructive"
                }`} />
                <div className="ml-8 flex-1 p-4 rounded-lg bg-muted/50 border border-border hover:bg-muted transition-colors">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-semibold text-foreground">{stage.stage}</span>
                        <Badge variant="outline">{stage.technique}</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">{stage.name}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant={stage.status === "Blocked" ? "default" : "destructive"} className={stage.status === "Blocked" ? "bg-success" : ""}>
                        {stage.status}
                      </Badge>
                      <span className="text-xs text-muted-foreground flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {stage.time}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Card>

      <Card className="p-6 bg-card border-border shadow-lg">
        <h3 className="text-xl font-semibold mb-6 text-foreground">Active Incidents</h3>
        <div className="space-y-3">
          {incidents.map((inc, idx) => (
            <div key={idx} className="p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors border border-border">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <span className="font-mono text-foreground">{inc.id}</span>
                  <Badge variant={inc.severity === "Critical" ? "destructive" : inc.severity === "High" ? "outline" : "secondary"}>
                    {inc.severity}
                  </Badge>
                  <span className="text-sm text-muted-foreground">{inc.endpoints} endpoints affected</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-sm">
                    <span className="text-muted-foreground">Blast Radius: </span>
                    <span className={`font-medium ${inc.blastRadius === "High" ? "text-destructive" : inc.blastRadius === "Medium" ? "text-warning" : "text-success"}`}>
                      {inc.blastRadius}
                    </span>
                  </div>
                  <Badge variant="outline">{inc.status}</Badge>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default AttackChainViewer;