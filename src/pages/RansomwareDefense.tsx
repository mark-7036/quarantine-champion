import { Shield, RotateCcw, FileText, AlertTriangle, Database, Lock } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { StatCard } from "@/components/StatCard";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

const RansomwareDefense = () => {
  const protectedFolders = [
    { path: "C:\\Users\\*\\Documents", status: "Protected", files: 12456, lastBackup: "5 min ago" },
    { path: "C:\\Users\\*\\Desktop", status: "Protected", files: 3421, lastBackup: "5 min ago" },
    { path: "D:\\Company Data", status: "Protected", files: 89234, lastBackup: "10 min ago" },
    { path: "E:\\Financial Records", status: "Protected", files: 4521, lastBackup: "15 min ago" },
  ];

  const honeypotFiles = [
    { name: "important_passwords.xlsx", location: "C:\\Users\\Admin\\Desktop", triggers: 3 },
    { name: "company_secrets.docx", location: "D:\\Shared", triggers: 7 },
    { name: "bitcoin_wallet.dat", location: "C:\\Users\\*\\AppData", triggers: 12 },
  ];

  const rollbackPoints = [
    { timestamp: "Today 14:30", files: 234567, size: "45.2 GB", status: "Available" },
    { timestamp: "Today 10:00", files: 234523, size: "44.8 GB", status: "Available" },
    { timestamp: "Yesterday 18:00", files: 234100, size: "44.1 GB", status: "Available" },
    { timestamp: "Yesterday 10:00", files: 233890, size: "43.9 GB", status: "Available" },
  ];

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-display font-bold mb-3 text-foreground">Ransomware Defense</h1>
          <p className="text-lg text-muted-foreground">Rollback protection, honeypot files, and CDP backup</p>
        </div>
        <Button className="bg-primary hover:bg-primary/90">
          <RotateCcw className="w-4 h-4 mr-2" />
          Emergency Rollback
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-4">
        <StatCard title="Protected Files" value="109,632" change="Real-time" icon={FileText} />
        <StatCard title="Ransomware Blocked" value="23" change="This month" icon={Shield} />
        <StatCard title="Rollback Points" value="96" change="Available" icon={RotateCcw} />
        <StatCard title="CDP Coverage" value="100%" change="All critical" icon={Database} />
      </div>

      <Card className="p-6 bg-card border-border shadow-lg">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-semibold text-foreground">Protected Folders</h3>
          <Button variant="outline" size="sm">Add Folder</Button>
        </div>
        <div className="space-y-3">
          {protectedFolders.map((folder, idx) => (
            <div key={idx} className="p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors border border-border">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-3">
                  <Shield className="w-4 h-4 text-success" />
                  <span className="font-mono text-sm text-foreground">{folder.path}</span>
                </div>
                <Badge variant="default" className="bg-success">{folder.status}</Badge>
              </div>
              <div className="flex items-center gap-4 text-sm text-muted-foreground ml-7">
                <span>{folder.files.toLocaleString()} files</span>
                <span>Last backup: {folder.lastBackup}</span>
              </div>
            </div>
          ))}
        </div>
      </Card>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card className="p-6 bg-card border-border shadow-lg">
          <h3 className="text-xl font-semibold mb-6 text-foreground">Honeypot Files</h3>
          <div className="space-y-3">
            {honeypotFiles.map((file, idx) => (
              <div key={idx} className="p-4 rounded-lg bg-warning/10 border border-warning/30">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <AlertTriangle className="w-4 h-4 text-warning" />
                    <span className="font-mono text-sm text-foreground">{file.name}</span>
                  </div>
                  <Badge variant="outline">{file.triggers} triggers</Badge>
                </div>
                <p className="text-xs text-muted-foreground ml-7">{file.location}</p>
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-6 bg-card border-border shadow-lg">
          <h3 className="text-xl font-semibold mb-6 text-foreground">Rollback Points</h3>
          <div className="space-y-3">
            {rollbackPoints.map((point, idx) => (
              <div key={idx} className="p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors border border-border">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <RotateCcw className="w-4 h-4 text-primary" />
                    <span className="font-medium text-foreground">{point.timestamp}</span>
                  </div>
                  <Badge variant="default" className="bg-success">{point.status}</Badge>
                </div>
                <div className="flex items-center gap-4 text-sm text-muted-foreground ml-7">
                  <span>{point.files.toLocaleString()} files</span>
                  <span>{point.size}</span>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>

      <Card className="p-6 bg-card border-border shadow-lg">
        <h3 className="text-xl font-semibold mb-6 text-foreground">Defense Status</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { feature: "Behavioral Detection", status: "Active" },
            { feature: "Shadow Copy Protection", status: "Active" },
            { feature: "Controlled Folder Access", status: "Active" },
            { feature: "Anti-Encryption Engine", status: "Active" },
            { feature: "Real-time Backup", status: "Active" },
            { feature: "Decryption Tools", status: "Ready" },
            { feature: "Volume Snapshots", status: "Active" },
            { feature: "File Integrity Monitor", status: "Active" },
          ].map((item, idx) => (
            <div key={idx} className="p-3 rounded-lg bg-muted/50 border border-border">
              <div className="flex items-center justify-between">
                <span className="text-sm text-foreground">{item.feature}</span>
                <div className="w-2 h-2 rounded-full bg-success animate-pulse" />
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default RansomwareDefense;