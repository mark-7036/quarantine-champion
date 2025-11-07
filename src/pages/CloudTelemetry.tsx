import { Cloud, Key, Server, Database, Activity, AlertTriangle } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { StatCard } from "@/components/StatCard";

const CloudTelemetry = () => {
  const cloudEvents = [
    { time: "16:23:45", event: "IAM Role Created", resource: "arn:aws:iam::admin-role", user: "admin@corp.com", provider: "AWS", severity: "High", action: "Create" },
    { time: "16:20:12", event: "S3 Bucket Made Public", resource: "sensitive-data-bucket", user: "developer@corp.com", provider: "AWS", severity: "Critical", action: "Modify" },
    { time: "16:18:33", event: "VM Instance Launched", resource: "vm-prod-web-01", user: "devops@corp.com", provider: "Azure", severity: "Info", action: "Create" },
    { time: "16:15:21", event: "Unauthorized API Call", resource: "compute.instances.delete", user: "external-ip-192.168.1.1", provider: "GCP", severity: "Critical", action: "Attempt" },
    { time: "16:12:09", event: "Database Snapshot Created", resource: "prod-db-snapshot-001", user: "backup-service", provider: "AWS", severity: "Info", action: "Create" },
    { time: "16:10:45", event: "Security Group Modified", resource: "sg-prod-web", user: "contractor@corp.com", provider: "AWS", severity: "High", action: "Modify" },
    { time: "16:08:33", event: "Root Account Login", resource: "root-account", user: "root", provider: "Azure", severity: "Critical", action: "Login" },
    { time: "16:05:12", event: "CloudTrail Disabled", resource: "audit-trail-main", user: "unknown", provider: "AWS", severity: "Critical", action: "Delete" },
  ];

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "Critical": return "destructive";
      case "High": return "destructive";
      case "Medium": return "outline";
      default: return "secondary";
    }
  };

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-display font-bold mb-3 text-foreground">
            Cloud Telemetry
          </h1>
          <p className="text-lg text-muted-foreground">
            Monitor IAM events, workload activities, and resource changes
          </p>
        </div>
        <Button className="bg-primary hover:bg-primary/90">
          <Activity className="w-4 h-4 mr-2" />
          Export Events
        </Button>
      </div>

      {/* Stats */}
      <div className="grid gap-6 md:grid-cols-4">
        <StatCard
          title="Cloud Events"
          value="3,842"
          change="+234"
          icon={Cloud}
        />
        <StatCard
          title="IAM Changes"
          value="67"
          change="+12"
          icon={Key}
        />
        <StatCard
          title="Resource Creates"
          value="145"
          change="+23"
          icon={Server}
        />
        <StatCard
          title="Critical Alerts"
          value="8"
          change="+3"
          icon={AlertTriangle}
        />
      </div>

      {/* Filters */}
      <Card className="p-6 bg-card border-border shadow-lg">
        <div className="flex gap-4">
          <Input placeholder="Search resources, users, actions..." className="flex-1" />
          <select className="px-4 py-2 rounded-lg bg-muted border border-border text-foreground">
            <option>All Providers</option>
            <option>AWS</option>
            <option>Azure</option>
            <option>GCP</option>
          </select>
          <select className="px-4 py-2 rounded-lg bg-muted border border-border text-foreground">
            <option>All Severities</option>
            <option>Critical</option>
            <option>High</option>
            <option>Info</option>
          </select>
        </div>
      </Card>

      {/* Event Stream */}
      <Card className="p-6 bg-card border-border shadow-lg">
        <h3 className="text-xl font-semibold mb-6 text-foreground">Cloud Security Events</h3>
        <ScrollArea className="h-[600px]">
          <div className="space-y-3">
            {cloudEvents.map((event, index) => (
              <div key={index} className="p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors border border-border">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <Cloud className="w-5 h-5 text-primary" />
                    <div className="flex-1">
                      <div className="font-semibold text-foreground">{event.event}</div>
                      <div className="text-sm text-muted-foreground">Resource: {event.resource}</div>
                    </div>
                  </div>
                  <Badge variant={getSeverityColor(event.severity) as any}>
                    {event.severity}
                  </Badge>
                </div>
                <div className="ml-8 flex gap-6 text-sm text-muted-foreground">
                  <span>User: {event.user}</span>
                  <span>Provider: <Badge variant="outline" className="text-xs">{event.provider}</Badge></span>
                  <span>Action: {event.action}</span>
                  <span className="text-xs">{event.time}</span>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </Card>
    </div>
  );
};

export default CloudTelemetry;
