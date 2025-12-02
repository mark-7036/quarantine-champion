import { Brain, TrendingUp, Users, AlertTriangle, Activity, Target } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { StatCard } from "@/components/StatCard";
import { Progress } from "@/components/ui/progress";

const AdvancedDetection = () => {
  const uebaAlerts = [
    { user: "john.smith@corp.com", anomaly: "Unusual login location", score: 92, severity: "Critical", time: "2 min ago" },
    { user: "admin@corp.com", anomaly: "Mass file download", score: 87, severity: "High", time: "15 min ago" },
    { user: "service_account_db", anomaly: "After-hours activity", score: 78, severity: "Medium", time: "1 hour ago" },
    { user: "jane.doe@corp.com", anomaly: "First-time app access", score: 45, severity: "Low", time: "3 hours ago" },
  ];

  const mlModels = [
    { name: "Malware Classifier", accuracy: 99.2, status: "Active", lastUpdate: "2 hours ago" },
    { name: "Anomaly Detector", accuracy: 97.8, status: "Active", lastUpdate: "1 hour ago" },
    { name: "Behavioral Analyzer", accuracy: 96.5, status: "Training", lastUpdate: "30 min ago" },
    { name: "Network Threat Model", accuracy: 98.1, status: "Active", lastUpdate: "4 hours ago" },
  ];

  const mitreHeatmap = [
    { tactic: "Initial Access", techniques: 12, detections: 45 },
    { tactic: "Execution", techniques: 18, detections: 78 },
    { tactic: "Persistence", techniques: 15, detections: 34 },
    { tactic: "Privilege Escalation", techniques: 10, detections: 23 },
    { tactic: "Defense Evasion", techniques: 22, detections: 56 },
    { tactic: "Credential Access", techniques: 8, detections: 19 },
    { tactic: "Lateral Movement", techniques: 6, detections: 12 },
    { tactic: "Exfiltration", techniques: 5, detections: 8 },
  ];

  return (
    <div className="space-y-8 animate-fade-in">
      <div>
        <h1 className="text-4xl font-display font-bold mb-3 text-foreground">Advanced Detection</h1>
        <p className="text-lg text-muted-foreground">UEBA, ML-powered analytics, and MITRE ATT&CK mapping</p>
      </div>

      <div className="grid gap-6 md:grid-cols-4">
        <StatCard title="UEBA Alerts" value="24" change="+7 today" icon={Users} />
        <StatCard title="ML Detections" value="156" change="+23" icon={Brain} />
        <StatCard title="Risk Score" value="72" change="Medium" icon={Target} />
        <StatCard title="Active Models" value="4" change="All healthy" icon={Activity} />
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card className="p-6 bg-card border-border shadow-lg">
          <h3 className="text-xl font-semibold mb-6 text-foreground">UEBA Alerts</h3>
          <div className="space-y-4">
            {uebaAlerts.map((alert, idx) => (
              <div key={idx} className="p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors border border-border">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <span className="font-medium text-foreground">{alert.user}</span>
                    <p className="text-sm text-muted-foreground">{alert.anomaly}</p>
                  </div>
                  <Badge variant={alert.severity === "Critical" ? "destructive" : alert.severity === "High" ? "outline" : "secondary"}>
                    {alert.severity}
                  </Badge>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-muted-foreground">Risk Score:</span>
                    <Progress value={alert.score} className="w-24 h-2" />
                    <span className="text-xs font-medium text-foreground">{alert.score}</span>
                  </div>
                  <span className="text-xs text-muted-foreground">{alert.time}</span>
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-6 bg-card border-border shadow-lg">
          <h3 className="text-xl font-semibold mb-6 text-foreground">ML Models Status</h3>
          <div className="space-y-4">
            {mlModels.map((model, idx) => (
              <div key={idx} className="p-4 rounded-lg bg-muted/50 border border-border">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium text-foreground">{model.name}</span>
                  <Badge variant={model.status === "Active" ? "default" : "outline"}>{model.status}</Badge>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2">
                    <span className="text-muted-foreground">Accuracy:</span>
                    <span className="font-medium text-success">{model.accuracy}%</span>
                  </div>
                  <span className="text-xs text-muted-foreground">Updated: {model.lastUpdate}</span>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>

      <Card className="p-6 bg-card border-border shadow-lg">
        <h3 className="text-xl font-semibold mb-6 text-foreground">MITRE ATT&CK Coverage</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {mitreHeatmap.map((tactic, idx) => (
            <div key={idx} className="p-4 rounded-lg bg-muted/50 border border-border hover:bg-muted transition-colors">
              <div className="text-sm font-medium text-foreground mb-2">{tactic.tactic}</div>
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <span>{tactic.techniques} techniques</span>
                <span>•</span>
                <span className="text-primary">{tactic.detections} detections</span>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default AdvancedDetection;