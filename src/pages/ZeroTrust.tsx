import { Shield, Lock, Users, Globe, CheckCircle, AlertTriangle } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { StatCard } from "@/components/StatCard";
import { Progress } from "@/components/ui/progress";

const ZeroTrust = () => {
  const accessRequests = [
    { user: "john.smith@corp.com", resource: "Production DB", device: "WKS-001", location: "Office", status: "Granted", risk: "Low" },
    { user: "jane.doe@corp.com", resource: "HR Portal", device: "Mobile", location: "Remote", status: "MFA Required", risk: "Medium" },
    { user: "contractor@external.com", resource: "Dev Server", device: "Unknown", location: "Unknown", status: "Denied", risk: "High" },
    { user: "admin@corp.com", resource: "Admin Console", device: "WKS-ADMIN", location: "Office", status: "Granted", risk: "Low" },
  ];

  const segments = [
    { name: "Production Network", devices: 45, policies: 12, status: "Enforced" },
    { name: "Development Zone", devices: 78, policies: 8, status: "Enforced" },
    { name: "Guest Network", devices: 23, policies: 15, status: "Enforced" },
    { name: "IoT Segment", devices: 156, policies: 20, status: "Monitoring" },
  ];

  const trustScores = [
    { factor: "Device Health", score: 95, weight: "High" },
    { factor: "User Behavior", score: 88, weight: "High" },
    { factor: "Location", score: 72, weight: "Medium" },
    { factor: "Time of Access", score: 90, weight: "Low" },
    { factor: "Resource Sensitivity", score: 85, weight: "High" },
  ];

  return (
    <div className="space-y-8 animate-fade-in">
      <div>
        <h1 className="text-4xl font-display font-bold mb-3 text-foreground">Zero Trust</h1>
        <p className="text-lg text-muted-foreground">ZTNA, micro-segmentation, and continuous verification</p>
      </div>

      <div className="grid gap-6 md:grid-cols-4">
        <StatCard title="Access Requests" value="1,247" change="Today" icon={Users} />
        <StatCard title="Denied" value="89" change="Blocked" icon={AlertTriangle} />
        <StatCard title="Segments" value="12" change="Active" icon={Globe} />
        <StatCard title="Trust Score" value="87" change="Good" icon={Shield} />
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card className="p-6 bg-card border-border shadow-lg">
          <h3 className="text-xl font-semibold mb-6 text-foreground">Trust Score Factors</h3>
          <div className="space-y-4">
            {trustScores.map((factor, idx) => (
              <div key={idx} className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-foreground">{factor.factor}</span>
                    <Badge variant="outline" className="text-xs">{factor.weight}</Badge>
                  </div>
                  <span className="font-medium text-foreground">{factor.score}%</span>
                </div>
                <Progress value={factor.score} className="h-2" />
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-6 bg-card border-border shadow-lg">
          <h3 className="text-xl font-semibold mb-6 text-foreground">Micro-Segmentation</h3>
          <div className="space-y-3">
            {segments.map((segment, idx) => (
              <div key={idx} className="p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors border border-border">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium text-foreground">{segment.name}</span>
                  <Badge variant={segment.status === "Enforced" ? "default" : "outline"} className={segment.status === "Enforced" ? "bg-success" : ""}>
                    {segment.status}
                  </Badge>
                </div>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span>{segment.devices} devices</span>
                  <span>{segment.policies} policies</span>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>

      <Card className="p-6 bg-card border-border shadow-lg">
        <h3 className="text-xl font-semibold mb-6 text-foreground">Recent Access Requests</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-3 px-4 font-semibold text-foreground">User</th>
                <th className="text-left py-3 px-4 font-semibold text-foreground">Resource</th>
                <th className="text-left py-3 px-4 font-semibold text-foreground">Device</th>
                <th className="text-left py-3 px-4 font-semibold text-foreground">Location</th>
                <th className="text-left py-3 px-4 font-semibold text-foreground">Risk</th>
                <th className="text-left py-3 px-4 font-semibold text-foreground">Status</th>
              </tr>
            </thead>
            <tbody>
              {accessRequests.map((request, idx) => (
                <tr key={idx} className="border-b border-border hover:bg-muted/50 transition-colors">
                  <td className="py-3 px-4 text-foreground">{request.user}</td>
                  <td className="py-3 px-4 text-muted-foreground">{request.resource}</td>
                  <td className="py-3 px-4 text-muted-foreground">{request.device}</td>
                  <td className="py-3 px-4 text-muted-foreground">{request.location}</td>
                  <td className="py-3 px-4">
                    <Badge variant={request.risk === "High" ? "destructive" : request.risk === "Medium" ? "outline" : "secondary"}>
                      {request.risk}
                    </Badge>
                  </td>
                  <td className="py-3 px-4">
                    <Badge variant={request.status === "Granted" ? "default" : request.status === "Denied" ? "destructive" : "outline"} className={request.status === "Granted" ? "bg-success" : ""}>
                      {request.status}
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

export default ZeroTrust;