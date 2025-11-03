import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AlertTriangle, Globe, MapPin, TrendingUp } from "lucide-react";
import { StatCard } from "@/components/StatCard";

export default function ThreatIntel() {
  const threats = [
    { name: "Emotet Botnet", type: "Malware", severity: "Critical", origin: "Russia", detections: 1247 },
    { name: "APT28 Campaign", type: "APT", severity: "High", origin: "China", detections: 892 },
    { name: "Phishing Kit v3.2", type: "Phishing", severity: "Medium", origin: "Nigeria", detections: 543 },
    { name: "Ransomware-as-a-Service", type: "Ransomware", severity: "Critical", origin: "Unknown", detections: 2134 },
  ];

  const indicators = [
    { type: "IP Address", value: "192.168.100.45", confidence: "95%", status: "Malicious" },
    { type: "Domain", value: "malicious-site.com", confidence: "89%", status: "Malicious" },
    { type: "File Hash", value: "a4f3d2e1b6c7...", confidence: "78%", status: "Suspicious" },
    { type: "URL", value: "http://phishing.example", confidence: "92%", status: "Malicious" },
  ];

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="space-y-3">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-primary/10 border border-primary/20">
            <AlertTriangle className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h1 className="text-4xl font-display font-bold text-foreground tracking-tight">Threat Intelligence</h1>
            <p className="text-muted-foreground mt-1 text-base">
              Global threat landscape and indicators of compromise
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <StatCard
          title="Global Threats"
          value="12,847"
          change="+234 today"
          changeType="negative"
          icon={Globe}
          iconColor="text-critical"
        />
        <StatCard
          title="IOCs Tracked"
          value="45,692"
          change="+1,203 new"
          changeType="neutral"
          icon={MapPin}
          iconColor="text-info"
        />
        <StatCard
          title="Active Campaigns"
          value="89"
          change="23 high severity"
          changeType="negative"
          icon={TrendingUp}
          iconColor="text-warning"
        />
        <StatCard
          title="Intelligence Score"
          value="97/100"
          change="Excellent coverage"
          changeType="positive"
          icon={AlertTriangle}
          iconColor="text-success"
        />
      </div>

      <Card className="p-8 bg-gradient-to-br from-card/80 to-card/60 backdrop-blur-xl border-border shadow-lg" style={{ boxShadow: 'var(--shadow-elevated)' }}>
        <h3 className="text-xl font-semibold text-foreground mb-6">Active Threat Campaigns</h3>
        <div className="overflow-hidden rounded-lg border border-border">
          <table className="w-full">
            <thead className="bg-muted/30">
              <tr>
                <th className="text-left py-3 px-4 text-xs font-semibold text-muted-foreground uppercase">
                  Threat Name
                </th>
                <th className="text-left py-3 px-4 text-xs font-semibold text-muted-foreground uppercase">
                  Type
                </th>
                <th className="text-left py-3 px-4 text-xs font-semibold text-muted-foreground uppercase">
                  Severity
                </th>
                <th className="text-left py-3 px-4 text-xs font-semibold text-muted-foreground uppercase">
                  Origin
                </th>
                <th className="text-left py-3 px-4 text-xs font-semibold text-muted-foreground uppercase">
                  Detections
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border bg-card/50">
              {threats.map((threat, index) => (
                <tr
                  key={index}
                  className="hover:bg-muted/20 transition-colors animate-fade-in"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <td className="py-3 px-4 text-sm text-foreground font-medium">{threat.name}</td>
                  <td className="py-3 px-4 text-sm text-muted-foreground">{threat.type}</td>
                  <td className="py-3 px-4">
                    <Badge
                      variant="outline"
                      className={
                        threat.severity === "Critical"
                          ? "bg-critical/10 text-critical border-critical/30"
                          : threat.severity === "High"
                          ? "bg-warning/10 text-warning border-warning/30"
                          : "bg-info/10 text-info border-info/30"
                      }
                    >
                      {threat.severity}
                    </Badge>
                  </td>
                  <td className="py-3 px-4 text-sm text-muted-foreground">{threat.origin}</td>
                  <td className="py-3 px-4 text-sm text-muted-foreground">{threat.detections.toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      <Card className="p-8 bg-gradient-to-br from-card/80 to-card/60 backdrop-blur-xl border-border shadow-lg" style={{ boxShadow: 'var(--shadow-elevated)' }}>
        <h3 className="text-xl font-semibold text-foreground mb-6">Indicators of Compromise (IOCs)</h3>
        <div className="overflow-hidden rounded-lg border border-border">
          <table className="w-full">
            <thead className="bg-muted/30">
              <tr>
                <th className="text-left py-3 px-4 text-xs font-semibold text-muted-foreground uppercase">
                  Type
                </th>
                <th className="text-left py-3 px-4 text-xs font-semibold text-muted-foreground uppercase">
                  Value
                </th>
                <th className="text-left py-3 px-4 text-xs font-semibold text-muted-foreground uppercase">
                  Confidence
                </th>
                <th className="text-left py-3 px-4 text-xs font-semibold text-muted-foreground uppercase">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border bg-card/50">
              {indicators.map((indicator, index) => (
                <tr
                  key={index}
                  className="hover:bg-muted/20 transition-colors animate-fade-in"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <td className="py-3 px-4 text-sm text-foreground font-medium">{indicator.type}</td>
                  <td className="py-3 px-4 text-sm text-muted-foreground font-mono">{indicator.value}</td>
                  <td className="py-3 px-4 text-sm text-muted-foreground">{indicator.confidence}</td>
                  <td className="py-3 px-4">
                    <Badge
                      variant="outline"
                      className={
                        indicator.status === "Malicious"
                          ? "bg-critical/10 text-critical border-critical/30"
                          : "bg-warning/10 text-warning border-warning/30"
                      }
                    >
                      {indicator.status}
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
