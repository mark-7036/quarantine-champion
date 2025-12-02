import { Eye, Activity, FileText, Database, AlertTriangle } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { StatCard } from "@/components/StatCard";
import { ScrollArea } from "@/components/ui/scroll-area";

const BehaviorMonitor = () => {
  const behaviorEvents = [
    { type: "Process", event: "powershell.exe spawned cmd.exe", risk: "High", timestamp: "14:35:22", details: "Suspicious process chain" },
    { type: "File", event: "C:\\Temp\\payload.dll created", risk: "Critical", timestamp: "14:35:18", details: "Unknown executable in temp" },
    { type: "Registry", event: "Run key modified", risk: "High", timestamp: "14:35:15", details: "Persistence mechanism detected" },
    { type: "Network", event: "Outbound connection to known C2", risk: "Critical", timestamp: "14:35:10", details: "Beacon activity" },
    { type: "Memory", event: "Code injection detected", risk: "Critical", timestamp: "14:35:05", details: "Process hollowing attempt" },
  ];

  const processTree = [
    { name: "explorer.exe", pid: "4892", children: ["chrome.exe (12456)", "outlook.exe (8934)"] },
    { name: "services.exe", pid: "892", children: ["svchost.exe (1024)", "spoolsv.exe (2048)"] },
    { name: "powershell.exe", pid: "5678", children: ["cmd.exe (9012)", "malware.exe (3456)"], suspicious: true },
  ];

  return (
    <div className="space-y-8 animate-fade-in">
      <div>
        <h1 className="text-4xl font-display font-bold mb-3 text-foreground">Behavior Monitor</h1>
        <p className="text-lg text-muted-foreground">Real-time process, file, registry, and network behavior analysis</p>
      </div>

      <div className="grid gap-6 md:grid-cols-4">
        <StatCard title="Processes Monitored" value="847" change="Active" icon={Activity} />
        <StatCard title="File Events" value="12,459" change="+2,341" icon={FileText} />
        <StatCard title="Registry Changes" value="234" change="+45" icon={Database} />
        <StatCard title="Anomalies" value="8" change="3 critical" icon={AlertTriangle} />
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card className="p-6 bg-card border-border shadow-lg">
          <h3 className="text-xl font-semibold mb-6 text-foreground">Process Tree</h3>
          <div className="space-y-4">
            {processTree.map((proc, idx) => (
              <div key={idx} className={`p-4 rounded-lg ${proc.suspicious ? 'bg-destructive/10 border border-destructive/30' : 'bg-muted/50 border border-border'}`}>
                <div className="flex items-center gap-2 mb-2">
                  <Eye className={`w-4 h-4 ${proc.suspicious ? 'text-destructive' : 'text-primary'}`} />
                  <span className="font-mono text-sm text-foreground">{proc.name}</span>
                  <Badge variant="outline">PID: {proc.pid}</Badge>
                  {proc.suspicious && <Badge variant="destructive">Suspicious</Badge>}
                </div>
                <div className="ml-6 space-y-1">
                  {proc.children.map((child, cidx) => (
                    <div key={cidx} className="text-sm text-muted-foreground font-mono">└─ {child}</div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-6 bg-card border-border shadow-lg">
          <h3 className="text-xl font-semibold mb-6 text-foreground">Behavior Events</h3>
          <ScrollArea className="h-[350px]">
            <div className="space-y-3">
              {behaviorEvents.map((event, idx) => (
                <div key={idx} className="p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors border border-border">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <Badge variant="outline">{event.type}</Badge>
                      <span className="text-sm text-foreground">{event.event}</span>
                    </div>
                    <Badge variant={event.risk === "Critical" ? "destructive" : "outline"}>{event.risk}</Badge>
                  </div>
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>{event.details}</span>
                    <span>{event.timestamp}</span>
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>
        </Card>
      </div>
    </div>
  );
};

export default BehaviorMonitor;