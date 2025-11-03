import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Lock, Shield, FolderLock, AlertTriangle } from "lucide-react";
import { StatCard } from "@/components/StatCard";

export default function Ransomware() {
  const protectedFolders = [
    { path: "C:\\Users\\Documents", status: "Protected", files: 1247 },
    { path: "C:\\Users\\Pictures", status: "Protected", files: 3892 },
    { path: "D:\\Work Projects", status: "Protected", files: 543 },
    { path: "C:\\Users\\Desktop", status: "Protected", files: 234 },
  ];

  const blockedAttempts = [
    { process: "suspicious.exe", action: "Encrypt Files", time: "14:23:45", blocked: true },
    { process: "malware.dll", action: "Mass File Deletion", time: "12:15:33", blocked: true },
    { process: "ransom.bat", action: "Registry Modification", time: "09:47:12", blocked: true },
  ];

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="space-y-3">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-primary/10 border border-primary/20">
            <Lock className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h1 className="text-4xl font-display font-bold text-foreground tracking-tight">Anti-Ransomware</h1>
            <p className="text-muted-foreground mt-1 text-base">
              Advanced protection against ransomware and file encryption threats
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <StatCard
          title="Protected Folders"
          value="12"
          change="5,916 files"
          changeType="positive"
          icon={FolderLock}
          iconColor="text-success"
        />
        <StatCard
          title="Blocked Attempts"
          value="37"
          change="Today"
          changeType="negative"
          icon={AlertTriangle}
          iconColor="text-critical"
        />
        <StatCard
          title="Backup Status"
          value="Active"
          change="Last: 2 hours ago"
          changeType="positive"
          icon={Shield}
          iconColor="text-info"
        />
        <StatCard
          title="Protection Level"
          value="Maximum"
          change="All features enabled"
          changeType="positive"
          icon={Lock}
          iconColor="text-primary"
        />
      </div>

      <Card className="p-8 bg-gradient-to-br from-card/80 to-card/60 backdrop-blur-xl border-border shadow-lg" style={{ boxShadow: 'var(--shadow-elevated)' }}>
        <h3 className="text-xl font-semibold text-foreground mb-6">Protection Features</h3>
        
        <div className="grid gap-5">
          {[
            { icon: Shield, title: "Real-time Ransomware Shield", description: "Blocks known and unknown ransomware variants", enabled: true },
            { icon: FolderLock, title: "Controlled Folder Access", description: "Prevents unauthorized apps from modifying protected folders", enabled: true },
            { icon: Lock, title: "Behavior-based Detection", description: "Detects ransomware-like file encryption patterns", enabled: true },
            { icon: AlertTriangle, title: "Mass File Modification Alert", description: "Alerts on suspicious bulk file operations", enabled: false },
          ].map((feature, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-5 bg-muted/20 rounded-lg border border-border animate-slide-in"
              style={{ animationDelay: `${index * 60}ms` }}
            >
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-lg bg-primary/10 border border-primary/20">
                  <feature.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">{feature.title}</h4>
                  <p className="text-sm text-muted-foreground mt-0.5">{feature.description}</p>
                </div>
              </div>
              <Switch defaultChecked={feature.enabled} className="data-[state=checked]:bg-success" />
            </div>
          ))}
        </div>
      </Card>

      <Card className="p-8 bg-gradient-to-br from-card/80 to-card/60 backdrop-blur-xl border-border shadow-lg" style={{ boxShadow: 'var(--shadow-elevated)' }}>
        <h3 className="text-xl font-semibold text-foreground mb-6">Protected Folders</h3>
        <div className="overflow-hidden rounded-lg border border-border">
          <table className="w-full">
            <thead className="bg-muted/30">
              <tr>
                <th className="text-left py-3 px-4 text-xs font-semibold text-muted-foreground uppercase">Path</th>
                <th className="text-left py-3 px-4 text-xs font-semibold text-muted-foreground uppercase">Status</th>
                <th className="text-left py-3 px-4 text-xs font-semibold text-muted-foreground uppercase">Files</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border bg-card/50">
              {protectedFolders.map((folder, index) => (
                <tr key={index} className="hover:bg-muted/20 transition-colors animate-fade-in" style={{ animationDelay: `${index * 50}ms` }}>
                  <td className="py-3 px-4 text-sm text-foreground font-medium">{folder.path}</td>
                  <td className="py-3 px-4">
                    <Badge variant="outline" className="bg-success/10 text-success border-success/30">
                      {folder.status}
                    </Badge>
                  </td>
                  <td className="py-3 px-4 text-sm text-muted-foreground">{folder.files.toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      <Card className="p-8 bg-gradient-to-br from-card/80 to-card/60 backdrop-blur-xl border-border shadow-lg" style={{ boxShadow: 'var(--shadow-elevated)' }}>
        <h3 className="text-xl font-semibold text-foreground mb-6">Recent Blocked Attempts</h3>
        <div className="overflow-hidden rounded-lg border border-border">
          <table className="w-full">
            <thead className="bg-muted/30">
              <tr>
                <th className="text-left py-3 px-4 text-xs font-semibold text-muted-foreground uppercase">Process</th>
                <th className="text-left py-3 px-4 text-xs font-semibold text-muted-foreground uppercase">Action Attempted</th>
                <th className="text-left py-3 px-4 text-xs font-semibold text-muted-foreground uppercase">Time</th>
                <th className="text-left py-3 px-4 text-xs font-semibold text-muted-foreground uppercase">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border bg-card/50">
              {blockedAttempts.map((attempt, index) => (
                <tr key={index} className="hover:bg-muted/20 transition-colors animate-fade-in" style={{ animationDelay: `${index * 50}ms` }}>
                  <td className="py-3 px-4 text-sm text-foreground font-medium">{attempt.process}</td>
                  <td className="py-3 px-4 text-sm text-muted-foreground">{attempt.action}</td>
                  <td className="py-3 px-4 text-sm text-muted-foreground">{attempt.time}</td>
                  <td className="py-3 px-4">
                    <Badge variant="outline" className="bg-success/10 text-success border-success/30">
                      Blocked
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
