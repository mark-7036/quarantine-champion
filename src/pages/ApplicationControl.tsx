import { AppWindow, Shield, Ban, CheckCircle, FileCode, Lock } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { StatCard } from "@/components/StatCard";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";

const ApplicationControl = () => {
  const whitelistedApps = [
    { name: "Microsoft Office", publisher: "Microsoft Corporation", status: "Allowed", signed: true },
    { name: "Chrome Browser", publisher: "Google LLC", status: "Allowed", signed: true },
    { name: "Slack", publisher: "Slack Technologies", status: "Allowed", signed: true },
    { name: "Visual Studio Code", publisher: "Microsoft Corporation", status: "Allowed", signed: true },
  ];

  const blockedApps = [
    { name: "uTorrent.exe", reason: "P2P Software", blocked: 45, lastAttempt: "2 hours ago" },
    { name: "CCleaner.exe", reason: "Potentially Unwanted", blocked: 12, lastAttempt: "Yesterday" },
    { name: "unknown_installer.exe", reason: "Unsigned", blocked: 89, lastAttempt: "30 min ago" },
  ];

  const controls = [
    { name: "Application Whitelisting", enabled: true, description: "Only allow approved applications" },
    { name: "DLL Control", enabled: true, description: "Monitor and control DLL loading" },
    { name: "Script Control", enabled: true, description: "Block unauthorized scripts" },
    { name: "Macro Control", enabled: true, description: "Control Office macro execution" },
    { name: "Driver Control", enabled: false, description: "Control driver installation" },
    { name: "Certificate Pinning", enabled: true, description: "Validate application certificates" },
  ];

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-display font-bold mb-3 text-foreground">Application Control</h1>
          <p className="text-lg text-muted-foreground">Whitelist management, DLL control, and code signing validation</p>
        </div>
        <Button className="bg-primary hover:bg-primary/90">
          <AppWindow className="w-4 h-4 mr-2" />
          Add Application
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-4">
        <StatCard title="Whitelisted Apps" value="247" change="Approved" icon={CheckCircle} />
        <StatCard title="Blocked Today" value="146" change="Prevented" icon={Ban} />
        <StatCard title="Unsigned Apps" value="12" change="Review" icon={FileCode} />
        <StatCard title="Policy Rules" value="89" change="Active" icon={Shield} />
      </div>

      <Card className="p-6 bg-card border-border shadow-lg">
        <h3 className="text-xl font-semibold mb-6 text-foreground">Control Settings</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {controls.map((control, idx) => (
            <div key={idx} className="flex items-center justify-between p-4 rounded-lg bg-muted/50 border border-border">
              <div>
                <span className="font-medium text-foreground">{control.name}</span>
                <p className="text-sm text-muted-foreground">{control.description}</p>
              </div>
              <Switch checked={control.enabled} />
            </div>
          ))}
        </div>
      </Card>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card className="p-6 bg-card border-border shadow-lg">
          <h3 className="text-xl font-semibold mb-6 text-foreground">Whitelisted Applications</h3>
          <div className="space-y-3">
            {whitelistedApps.map((app, idx) => (
              <div key={idx} className="p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors border border-border">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-4 h-4 text-success" />
                    <span className="font-medium text-foreground">{app.name}</span>
                  </div>
                  <Badge variant="default" className="bg-success">{app.status}</Badge>
                </div>
                <div className="flex items-center gap-4 text-sm text-muted-foreground ml-7">
                  <span>{app.publisher}</span>
                  {app.signed && <Badge variant="outline" className="text-xs">Signed</Badge>}
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-6 bg-card border-border shadow-lg">
          <h3 className="text-xl font-semibold mb-6 text-foreground">Blocked Applications</h3>
          <div className="space-y-3">
            {blockedApps.map((app, idx) => (
              <div key={idx} className="p-4 rounded-lg bg-destructive/10 border border-destructive/30">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <Ban className="w-4 h-4 text-destructive" />
                    <span className="font-mono text-sm text-foreground">{app.name}</span>
                  </div>
                  <Badge variant="destructive">{app.blocked} blocked</Badge>
                </div>
                <div className="flex items-center justify-between text-sm text-muted-foreground ml-7">
                  <span>Reason: {app.reason}</span>
                  <span>Last: {app.lastAttempt}</span>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default ApplicationControl;