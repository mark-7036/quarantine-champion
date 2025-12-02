import { Eye, Server, FileText, Key, Database, AlertTriangle } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { StatCard } from "@/components/StatCard";
import { Button } from "@/components/ui/button";

const DeceptionTechnology = () => {
  const honeypots = [
    { name: "HP-WEB-01", type: "Web Server", status: "Active", interactions: 45, lastHit: "5 min ago" },
    { name: "HP-DB-01", type: "Database", status: "Active", interactions: 23, lastHit: "1 hour ago" },
    { name: "HP-FILE-01", type: "File Share", status: "Active", interactions: 67, lastHit: "2 min ago" },
    { name: "HP-SSH-01", type: "SSH Server", status: "Active", interactions: 89, lastHit: "30 sec ago" },
  ];

  const honeyTokens = [
    { type: "Credential", name: "admin_backup_cred", triggered: 3, location: "AD", lastTrigger: "2 hours ago" },
    { type: "Document", name: "salary_data_2024.xlsx", triggered: 7, location: "File Share", lastTrigger: "45 min ago" },
    { type: "API Key", name: "aws_api_canary", triggered: 1, location: "Config File", lastTrigger: "1 day ago" },
    { type: "Database", name: "customer_dump.sql", triggered: 12, location: "Backup Server", lastTrigger: "15 min ago" },
  ];

  const recentActivity = [
    { timestamp: "14:35:22", source: "192.168.1.105", target: "HP-FILE-01", action: "File Access Attempt", severity: "High" },
    { timestamp: "14:32:18", source: "10.0.0.45", target: "admin_backup_cred", action: "Credential Usage", severity: "Critical" },
    { timestamp: "14:28:55", source: "192.168.1.200", target: "HP-SSH-01", action: "SSH Brute Force", severity: "High" },
  ];

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-display font-bold mb-3 text-foreground">Deception Technology</h1>
          <p className="text-lg text-muted-foreground">Honeypots, honey tokens, and canary deployments</p>
        </div>
        <Button className="bg-primary hover:bg-primary/90">
          <Eye className="w-4 h-4 mr-2" />
          Deploy Decoy
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-4">
        <StatCard title="Active Honeypots" value="12" change="Deployed" icon={Server} />
        <StatCard title="Honey Tokens" value="47" change="Planted" icon={Key} />
        <StatCard title="Interactions" value="234" change="This week" icon={Eye} />
        <StatCard title="Attackers Trapped" value="8" change="+2 today" icon={AlertTriangle} />
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card className="p-6 bg-card border-border shadow-lg">
          <h3 className="text-xl font-semibold mb-6 text-foreground">Honeypots</h3>
          <div className="space-y-3">
            {honeypots.map((hp, idx) => (
              <div key={idx} className="p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors border border-border">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <Server className="w-4 h-4 text-primary" />
                    <span className="font-medium text-foreground">{hp.name}</span>
                    <Badge variant="outline">{hp.type}</Badge>
                  </div>
                  <Badge variant="default" className="bg-success">{hp.status}</Badge>
                </div>
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <span>{hp.interactions} interactions</span>
                  <span>Last hit: {hp.lastHit}</span>
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-6 bg-card border-border shadow-lg">
          <h3 className="text-xl font-semibold mb-6 text-foreground">Honey Tokens</h3>
          <div className="space-y-3">
            {honeyTokens.map((token, idx) => (
              <div key={idx} className="p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors border border-border">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-3">
                    {token.type === "Credential" && <Key className="w-4 h-4 text-warning" />}
                    {token.type === "Document" && <FileText className="w-4 h-4 text-info" />}
                    {token.type === "API Key" && <Key className="w-4 h-4 text-primary" />}
                    {token.type === "Database" && <Database className="w-4 h-4 text-destructive" />}
                    <span className="font-mono text-sm text-foreground">{token.name}</span>
                  </div>
                  <Badge variant={token.triggered > 5 ? "destructive" : "outline"}>{token.triggered} triggers</Badge>
                </div>
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span>Location: {token.location}</span>
                  <span>Last: {token.lastTrigger}</span>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>

      <Card className="p-6 bg-card border-border shadow-lg">
        <h3 className="text-xl font-semibold mb-6 text-foreground">Recent Deception Activity</h3>
        <div className="space-y-3">
          {recentActivity.map((activity, idx) => (
            <div key={idx} className="p-4 rounded-lg bg-destructive/10 border border-destructive/30">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-4">
                  <span className="text-xs font-mono text-muted-foreground">{activity.timestamp}</span>
                  <span className="font-mono text-sm text-foreground">{activity.source}</span>
                  <span className="text-muted-foreground">→</span>
                  <span className="text-foreground">{activity.target}</span>
                </div>
                <Badge variant="destructive">{activity.severity}</Badge>
              </div>
              <p className="text-sm text-muted-foreground">{activity.action}</p>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default DeceptionTechnology;