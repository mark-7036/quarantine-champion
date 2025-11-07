import { Shield, AlertTriangle, Users, Key, Activity } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { StatCard } from "@/components/StatCard";

const IdentityTelemetry = () => {
  const identityEvents = [
    { time: "14:23:45", event: "MFA Failure", user: "john.doe@corp.com", source: "VPN Gateway", severity: "High", details: "3 consecutive failed attempts" },
    { time: "14:20:12", event: "Lateral Movement Detected", user: "admin@corp.com", source: "DC-01", severity: "Critical", details: "Unusual access to multiple systems" },
    { time: "14:18:33", event: "SSO Login Success", user: "jane.smith@corp.com", source: "Azure AD", severity: "Info", details: "Login from known location" },
    { time: "14:15:21", event: "SAML Token Anomaly", user: "service-account", source: "ADFS", severity: "Medium", details: "Token lifetime exceeded" },
    { time: "14:12:09", event: "Privilege Escalation", user: "user@corp.com", source: "File Server", severity: "Critical", details: "User gained admin rights" },
    { time: "14:10:45", event: "Password Policy Violation", user: "temp.user@corp.com", source: "AD", severity: "Low", details: "Weak password detected" },
    { time: "14:08:33", event: "Account Lockout", user: "contractor@corp.com", source: "Domain Controller", severity: "Medium", details: "5 failed login attempts" },
    { time: "14:05:12", event: "Orphaned Session", user: "old.user@corp.com", source: "Web Portal", severity: "High", details: "Session from terminated account" },
  ];

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "Critical": return "destructive";
      case "High": return "destructive";
      case "Medium": return "outline";
      case "Low": return "secondary";
      default: return "outline";
    }
  };

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-display font-bold mb-3 text-foreground">
            Identity Telemetry
          </h1>
          <p className="text-lg text-muted-foreground">
            Monitor authentication events, MFA failures, and lateral movement
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
          title="Total Events"
          value="1,247"
          change="+23%"
          icon={Activity}
        />
        <StatCard
          title="MFA Failures"
          value="18"
          change="+5"
          icon={Key}
        />
        <StatCard
          title="Lateral Movement"
          value="3"
          change="Critical"
          icon={AlertTriangle}
        />
        <StatCard
          title="Active Sessions"
          value="342"
          change="-12"
          icon={Users}
        />
      </div>

      {/* Filters */}
      <Card className="p-6 bg-card border-border shadow-lg">
        <div className="flex gap-4">
          <Input placeholder="Search events, users, IPs..." className="flex-1" />
          <select className="px-4 py-2 rounded-lg bg-muted border border-border text-foreground">
            <option>All Severities</option>
            <option>Critical</option>
            <option>High</option>
            <option>Medium</option>
            <option>Low</option>
          </select>
          <select className="px-4 py-2 rounded-lg bg-muted border border-border text-foreground">
            <option>Last 24 Hours</option>
            <option>Last 7 Days</option>
            <option>Last 30 Days</option>
          </select>
        </div>
      </Card>

      {/* Event Stream */}
      <Card className="p-6 bg-card border-border shadow-lg">
        <h3 className="text-xl font-semibold mb-6 text-foreground">Real-Time Identity Events</h3>
        <ScrollArea className="h-[600px]">
          <div className="space-y-3">
            {identityEvents.map((event, index) => (
              <div key={index} className="p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors border border-border">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <Shield className="w-5 h-5 text-primary" />
                    <div>
                      <div className="font-semibold text-foreground">{event.event}</div>
                      <div className="text-sm text-muted-foreground">{event.user}</div>
                    </div>
                  </div>
                  <Badge variant={getSeverityColor(event.severity) as any}>
                    {event.severity}
                  </Badge>
                </div>
                <div className="text-sm text-muted-foreground ml-8">
                  <div className="mb-1">{event.details}</div>
                  <div className="flex gap-4 text-xs">
                    <span>Source: {event.source}</span>
                    <span>Time: {event.time}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </Card>
    </div>
  );
};

export default IdentityTelemetry;
