import { Shield, FileText, CheckCircle, AlertTriangle, Download } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { StatCard } from "@/components/StatCard";

const ComplianceDashboard = () => {
  const complianceFrameworks = [
    { name: "SOC 2 Type II", status: "Compliant", score: 98, lastAudit: "2024-12-15", nextAudit: "2025-12-15" },
    { name: "HIPAA", status: "Compliant", score: 96, lastAudit: "2024-11-20", nextAudit: "2025-11-20" },
    { name: "PCI DSS", status: "In Progress", score: 87, lastAudit: "2024-10-10", nextAudit: "2025-10-10" },
    { name: "GDPR", status: "Compliant", score: 94, lastAudit: "2024-12-01", nextAudit: "2025-12-01" },
  ];

  const policyChecks = [
    { policy: "Password Complexity", status: "Pass", affected: 0, total: 487 },
    { policy: "MFA Enforcement", status: "Pass", affected: 0, total: 487 },
    { policy: "Patch Management", status: "Fail", affected: 23, total: 487 },
    { policy: "Data Encryption", status: "Pass", affected: 0, total: 487 },
    { policy: "Access Control", status: "Warning", affected: 5, total: 487 },
  ];

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-display font-bold mb-3 text-foreground">
            Compliance Dashboard
          </h1>
          <p className="text-lg text-muted-foreground">
            Policy compliance status and audit trails
          </p>
        </div>
        <Button className="bg-primary hover:bg-primary/90">
          <Download className="w-4 h-4 mr-2" />
          Generate Audit Report
        </Button>
      </div>

      {/* Stats */}
      <div className="grid gap-6 md:grid-cols-4">
        <StatCard
          title="Compliance Score"
          value="94%"
          change="+2%"
          icon={Shield}
        />
        <StatCard
          title="Frameworks"
          value="4/4"
          change="Active"
          icon={FileText}
        />
        <StatCard
          title="Policy Checks"
          value="452/487"
          change="92.8%"
          icon={CheckCircle}
        />
        <StatCard
          title="Open Issues"
          value="28"
          change="-5"
          icon={AlertTriangle}
        />
      </div>

      {/* Compliance Frameworks */}
      <Card className="p-6 bg-card border-border shadow-lg">
        <h3 className="text-xl font-semibold mb-6 text-foreground">Compliance Frameworks</h3>
        <div className="space-y-4">
          {complianceFrameworks.map((framework, index) => (
            <div key={index} className="p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors border border-border">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <Shield className="w-6 h-6 text-primary" />
                  <div>
                    <div className="font-semibold text-lg text-foreground">{framework.name}</div>
                    <div className="text-sm text-muted-foreground">
                      Last Audit: {framework.lastAudit} • Next: {framework.nextAudit}
                    </div>
                  </div>
                </div>
                <Badge 
                  variant={framework.status === "Compliant" ? "secondary" : "outline"}
                  className={framework.status === "Compliant" ? "bg-green-500/20 text-green-400" : ""}
                >
                  {framework.status}
                </Badge>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex-1">
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-muted-foreground">Compliance Score</span>
                    <span className="text-foreground font-medium">{framework.score}%</span>
                  </div>
                  <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                    <div 
                      className={`h-full ${framework.score >= 95 ? 'bg-green-500' : framework.score >= 85 ? 'bg-yellow-500' : 'bg-red-500'}`}
                      style={{ width: `${framework.score}%` }}
                    />
                  </div>
                </div>
                <Button size="sm" variant="outline">View Details</Button>
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Policy Compliance */}
      <Card className="p-6 bg-card border-border shadow-lg">
        <h3 className="text-xl font-semibold mb-6 text-foreground">Policy Compliance Status</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-3 px-4 font-semibold text-foreground">Policy</th>
                <th className="text-left py-3 px-4 font-semibold text-foreground">Status</th>
                <th className="text-left py-3 px-4 font-semibold text-foreground">Compliant Endpoints</th>
                <th className="text-left py-3 px-4 font-semibold text-foreground">Actions</th>
              </tr>
            </thead>
            <tbody>
              {policyChecks.map((check, index) => (
                <tr key={index} className="border-b border-border hover:bg-muted/50 transition-colors">
                  <td className="py-3 px-4 text-foreground font-medium">{check.policy}</td>
                  <td className="py-3 px-4">
                    <Badge 
                      variant={check.status === "Pass" ? "secondary" : check.status === "Fail" ? "destructive" : "outline"}
                      className={check.status === "Pass" ? "bg-green-500/20 text-green-400" : ""}
                    >
                      {check.status}
                    </Badge>
                  </td>
                  <td className="py-3 px-4 text-muted-foreground">
                    {check.total - check.affected}/{check.total} ({Math.round(((check.total - check.affected) / check.total) * 100)}%)
                  </td>
                  <td className="py-3 px-4">
                    {check.affected > 0 && (
                      <Button size="sm" variant="outline">Remediate ({check.affected})</Button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      {/* Audit Log Viewer */}
      <Card className="p-6 bg-card border-border shadow-lg">
        <h3 className="text-xl font-semibold mb-6 text-foreground">Recent Audit Events</h3>
        <div className="space-y-3">
          {[
            { time: "15:23:45", event: "Admin role assigned to user@corp.com", user: "admin@corp.com", severity: "Medium" },
            { time: "14:45:12", event: "Policy 'MFA Enforcement' modified", user: "security@corp.com", severity: "High" },
            { time: "14:20:33", event: "Compliance report exported", user: "auditor@corp.com", severity: "Info" },
            { time: "13:55:09", event: "Failed login attempt from unknown location", user: "user@corp.com", severity: "High" },
          ].map((log, index) => (
            <div key={index} className="p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors border border-border">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <FileText className="w-5 h-5 text-primary" />
                  <div>
                    <div className="font-semibold text-foreground">{log.event}</div>
                    <div className="text-sm text-muted-foreground">By: {log.user} • {log.time}</div>
                  </div>
                </div>
                <Badge variant={log.severity === "High" ? "destructive" : log.severity === "Medium" ? "outline" : "secondary"}>
                  {log.severity}
                </Badge>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default ComplianceDashboard;
