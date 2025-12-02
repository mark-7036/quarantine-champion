import { Cloud, Shield, AlertTriangle, Server, Database, Lock } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { StatCard } from "@/components/StatCard";
import { Progress } from "@/components/ui/progress";

const CloudSecurity = () => {
  const cloudProviders = [
    { name: "AWS", resources: 247, misconfigs: 12, score: 87, status: "Monitored" },
    { name: "Azure", resources: 156, misconfigs: 8, score: 91, status: "Monitored" },
    { name: "GCP", resources: 89, misconfigs: 3, score: 95, status: "Monitored" },
  ];

  const misconfigurations = [
    { resource: "S3 Bucket: prod-data", issue: "Public access enabled", severity: "Critical", provider: "AWS" },
    { resource: "Security Group: sg-12345", issue: "SSH open to internet", severity: "High", provider: "AWS" },
    { resource: "Storage Account: logs", issue: "No encryption", severity: "Medium", provider: "Azure" },
    { resource: "IAM User: service-account", issue: "Unused access keys", severity: "Low", provider: "AWS" },
  ];

  const workloads = [
    { name: "Production Cluster", type: "Kubernetes", instances: 24, status: "Protected", threats: 0 },
    { name: "CI/CD Pipeline", type: "Containers", instances: 12, status: "Protected", threats: 2 },
    { name: "Lambda Functions", type: "Serverless", instances: 47, status: "Monitored", threats: 0 },
  ];

  return (
    <div className="space-y-8 animate-fade-in">
      <div>
        <h1 className="text-4xl font-display font-bold mb-3 text-foreground">Cloud Security</h1>
        <p className="text-lg text-muted-foreground">CSPM, workload protection, and CASB features</p>
      </div>

      <div className="grid gap-6 md:grid-cols-4">
        <StatCard title="Cloud Resources" value="492" change="Monitored" icon={Cloud} />
        <StatCard title="Misconfigurations" value="23" change="-5 fixed" icon={AlertTriangle} />
        <StatCard title="Security Score" value="91%" change="+3%" icon={Shield} />
        <StatCard title="Workloads" value="83" change="Protected" icon={Server} />
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {cloudProviders.map((provider, idx) => (
          <Card key={idx} className="p-6 bg-card border-border shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-semibold text-foreground">{provider.name}</h3>
              <Badge variant="default" className="bg-success">{provider.status}</Badge>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Resources</span>
                <span className="font-medium text-foreground">{provider.resources}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Misconfigurations</span>
                <span className={`font-medium ${provider.misconfigs > 10 ? "text-destructive" : "text-warning"}`}>{provider.misconfigs}</span>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-muted-foreground">Security Score</span>
                  <span className="font-medium text-foreground">{provider.score}%</span>
                </div>
                <Progress value={provider.score} className="h-2" />
              </div>
            </div>
          </Card>
        ))}
      </div>

      <Card className="p-6 bg-card border-border shadow-lg">
        <h3 className="text-xl font-semibold mb-6 text-foreground">Misconfigurations</h3>
        <div className="space-y-3">
          {misconfigurations.map((config, idx) => (
            <div key={idx} className="p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors border border-border">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-medium text-foreground">{config.resource}</span>
                    <Badge variant="outline">{config.provider}</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">{config.issue}</p>
                </div>
                <Badge variant={config.severity === "Critical" ? "destructive" : config.severity === "High" ? "outline" : "secondary"}>
                  {config.severity}
                </Badge>
              </div>
            </div>
          ))}
        </div>
      </Card>

      <Card className="p-6 bg-card border-border shadow-lg">
        <h3 className="text-xl font-semibold mb-6 text-foreground">Cloud Workload Protection</h3>
        <div className="space-y-3">
          {workloads.map((workload, idx) => (
            <div key={idx} className="p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors border border-border">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div>
                    <span className="font-medium text-foreground">{workload.name}</span>
                    <p className="text-sm text-muted-foreground">{workload.type} • {workload.instances} instances</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Badge variant={workload.status === "Protected" ? "default" : "outline"} className={workload.status === "Protected" ? "bg-success" : ""}>
                    {workload.status}
                  </Badge>
                  {workload.threats > 0 && <Badge variant="destructive">{workload.threats} threats</Badge>}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default CloudSecurity;