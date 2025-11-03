import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Activity, Brain, TrendingUp, Zap } from "lucide-react";
import { StatCard } from "@/components/StatCard";

export default function AIAnalysis() {
  const anomalies = [
    { pattern: "Unusual File Access", confidence: "97%", severity: "High", timestamp: "14:23:45" },
    { pattern: "Abnormal Network Traffic", confidence: "89%", severity: "Medium", timestamp: "14:18:12" },
    { pattern: "Registry Modification Pattern", confidence: "95%", severity: "Critical", timestamp: "14:15:33" },
    { pattern: "Process Injection Attempt", confidence: "92%", severity: "High", timestamp: "14:12:08" },
  ];

  const predictions = [
    { threat: "Ransomware Attack", probability: "78%", timeframe: "Next 24h", risk: "High" },
    { threat: "Data Exfiltration", probability: "45%", timeframe: "Next 48h", risk: "Medium" },
    { threat: "Privilege Escalation", probability: "82%", timeframe: "Next 12h", risk: "Critical" },
  ];

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="space-y-3">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-primary/10 border border-primary/20">
            <Brain className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h1 className="text-4xl font-display font-bold text-foreground tracking-tight">AI/ML Behavior Analysis</h1>
            <p className="text-muted-foreground mt-1 text-base">
              Machine learning-powered threat detection and prediction
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <StatCard
          title="Anomalies Detected"
          value="47"
          change="+12 this hour"
          changeType="negative"
          icon={Activity}
          iconColor="text-critical"
        />
        <StatCard
          title="ML Model Accuracy"
          value="98.7%"
          change="+1.2% improved"
          changeType="positive"
          icon={TrendingUp}
          iconColor="text-success"
        />
        <StatCard
          title="False Positives"
          value="0.3%"
          change="Industry leading"
          changeType="positive"
          icon={Zap}
          iconColor="text-info"
        />
        <StatCard
          title="Prediction Score"
          value="94/100"
          change="High confidence"
          changeType="positive"
          icon={Brain}
          iconColor="text-primary"
        />
      </div>

      <Card className="p-8 bg-gradient-to-br from-card/80 to-card/60 backdrop-blur-xl border-border shadow-lg" style={{ boxShadow: 'var(--shadow-elevated)' }}>
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-semibold text-foreground">Behavioral Anomalies</h3>
          <Badge variant="outline" className="bg-info/10 text-info border-info/30">
            Real-time AI Detection
          </Badge>
        </div>

        <div className="overflow-hidden rounded-lg border border-border">
          <table className="w-full">
            <thead className="bg-muted/30">
              <tr>
                <th className="text-left py-3 px-4 text-xs font-semibold text-muted-foreground uppercase">
                  Pattern Detected
                </th>
                <th className="text-left py-3 px-4 text-xs font-semibold text-muted-foreground uppercase">
                  Confidence
                </th>
                <th className="text-left py-3 px-4 text-xs font-semibold text-muted-foreground uppercase">
                  Severity
                </th>
                <th className="text-left py-3 px-4 text-xs font-semibold text-muted-foreground uppercase">
                  Timestamp
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border bg-card/50">
              {anomalies.map((anomaly, index) => (
                <tr
                  key={index}
                  className="hover:bg-muted/20 transition-colors animate-fade-in"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <td className="py-3 px-4 text-sm text-foreground font-medium">{anomaly.pattern}</td>
                  <td className="py-3 px-4 text-sm text-muted-foreground">{anomaly.confidence}</td>
                  <td className="py-3 px-4">
                    <Badge
                      variant="outline"
                      className={
                        anomaly.severity === "Critical"
                          ? "bg-critical/10 text-critical border-critical/30"
                          : anomaly.severity === "High"
                          ? "bg-warning/10 text-warning border-warning/30"
                          : "bg-info/10 text-info border-info/30"
                      }
                    >
                      {anomaly.severity}
                    </Badge>
                  </td>
                  <td className="py-3 px-4 text-sm text-muted-foreground">{anomaly.timestamp}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      <Card className="p-8 bg-gradient-to-br from-card/80 to-card/60 backdrop-blur-xl border-border shadow-lg" style={{ boxShadow: 'var(--shadow-elevated)' }}>
        <h3 className="text-xl font-semibold text-foreground mb-6">Threat Predictions</h3>
        
        <div className="space-y-4">
          {predictions.map((pred, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-5 bg-muted/20 rounded-lg border border-border hover:bg-muted/30 transition-all animate-slide-in"
              style={{ animationDelay: `${index * 60}ms` }}
            >
              <div className="flex-1">
                <h4 className="font-semibold text-foreground">{pred.threat}</h4>
                <p className="text-sm text-muted-foreground mt-1">Expected within {pred.timeframe}</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="text-right">
                  <p className="text-sm font-medium text-foreground">{pred.probability}</p>
                  <p className="text-xs text-muted-foreground">Probability</p>
                </div>
                <Badge
                  variant="outline"
                  className={
                    pred.risk === "Critical"
                      ? "bg-critical/10 text-critical border-critical/30"
                      : pred.risk === "High"
                      ? "bg-warning/10 text-warning border-warning/30"
                      : "bg-info/10 text-info border-info/30"
                  }
                >
                  {pred.risk} Risk
                </Badge>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
