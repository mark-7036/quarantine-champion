import { Search, Target, FileSearch, Activity, Clock, Play } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { StatCard } from "@/components/StatCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";

const ThreatHunting = () => {
  const savedQueries = [
    { name: "Suspicious PowerShell Activity", type: "Process", lastRun: "2 hours ago", results: 23 },
    { name: "Lateral Movement Detection", type: "Network", lastRun: "1 hour ago", results: 5 },
    { name: "Credential Dumping Indicators", type: "Memory", lastRun: "30 min ago", results: 2 },
    { name: "Persistence Mechanisms", type: "Registry", lastRun: "4 hours ago", results: 12 },
  ];

  const huntingPlaybooks = [
    { name: "APT29 TTPs Hunt", techniques: 15, status: "Ready", lastRun: "Yesterday" },
    { name: "Ransomware Precursors", techniques: 8, status: "Running", lastRun: "Now" },
    { name: "Insider Threat Detection", techniques: 12, status: "Ready", lastRun: "3 days ago" },
  ];

  const recentFindings = [
    { finding: "Suspicious encoded command detected", endpoint: "WKS-001", technique: "T1059.001", severity: "High" },
    { finding: "Unusual SMB traffic pattern", endpoint: "SRV-DB-01", technique: "T1021.002", severity: "Medium" },
    { finding: "Registry persistence mechanism", endpoint: "WKS-042", technique: "T1547.001", severity: "High" },
  ];

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-display font-bold mb-3 text-foreground">Threat Hunting</h1>
          <p className="text-lg text-muted-foreground">Query builder, hypothesis testing, and IOC pivoting</p>
        </div>
        <Button className="bg-primary hover:bg-primary/90">
          <Search className="w-4 h-4 mr-2" />
          New Hunt
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-4">
        <StatCard title="Active Hunts" value="3" change="Running" icon={Target} />
        <StatCard title="Saved Queries" value="47" change="+5 this week" icon={FileSearch} />
        <StatCard title="Findings Today" value="18" change="+7" icon={Activity} />
        <StatCard title="Avg Hunt Time" value="45m" change="Efficient" icon={Clock} />
      </div>

      <Card className="p-6 bg-card border-border shadow-lg">
        <h3 className="text-xl font-semibold mb-4 text-foreground">Query Builder</h3>
        <div className="flex gap-4">
          <Input 
            placeholder="Enter hunt query... (e.g., process.name:powershell.exe AND network.direction:outbound)" 
            className="flex-1 font-mono text-sm"
          />
          <Button className="bg-primary hover:bg-primary/90">
            <Play className="w-4 h-4 mr-2" />
            Execute
          </Button>
        </div>
        <div className="mt-4 flex gap-2 flex-wrap">
          {["process.name", "file.path", "registry.key", "network.ip", "user.name", "parent.name"].map((field, idx) => (
            <Badge key={idx} variant="outline" className="cursor-pointer hover:bg-muted">{field}</Badge>
          ))}
        </div>
      </Card>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card className="p-6 bg-card border-border shadow-lg">
          <h3 className="text-xl font-semibold mb-6 text-foreground">Saved Queries</h3>
          <div className="space-y-3">
            {savedQueries.map((query, idx) => (
              <div key={idx} className="p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors border border-border cursor-pointer">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium text-foreground">{query.name}</span>
                  <Badge variant="outline">{query.type}</Badge>
                </div>
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <span>Last run: {query.lastRun}</span>
                  <span>{query.results} results</span>
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-6 bg-card border-border shadow-lg">
          <h3 className="text-xl font-semibold mb-6 text-foreground">Hunting Playbooks</h3>
          <div className="space-y-3">
            {huntingPlaybooks.map((playbook, idx) => (
              <div key={idx} className="p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors border border-border">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium text-foreground">{playbook.name}</span>
                  <Badge variant={playbook.status === "Running" ? "default" : "outline"}>{playbook.status}</Badge>
                </div>
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <span>{playbook.techniques} techniques</span>
                  <span>Last run: {playbook.lastRun}</span>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>

      <Card className="p-6 bg-card border-border shadow-lg">
        <h3 className="text-xl font-semibold mb-6 text-foreground">Recent Findings</h3>
        <ScrollArea className="h-[250px]">
          <div className="space-y-3">
            {recentFindings.map((finding, idx) => (
              <div key={idx} className="p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors border border-border">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <p className="font-medium text-foreground">{finding.finding}</p>
                    <p className="text-sm text-muted-foreground">Endpoint: {finding.endpoint}</p>
                  </div>
                  <Badge variant={finding.severity === "High" ? "destructive" : "outline"}>{finding.severity}</Badge>
                </div>
                <Badge variant="outline">{finding.technique}</Badge>
              </div>
            ))}
          </div>
        </ScrollArea>
      </Card>
    </div>
  );
};

export default ThreatHunting;