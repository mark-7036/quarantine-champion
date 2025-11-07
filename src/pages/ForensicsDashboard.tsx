import { Search, Clock, Database, Download, FileSearch, Activity } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

const ForensicsDashboard = () => {
  const timeline = [
    { time: "14:35:22", event: "Initial Access", description: "Phishing email opened", severity: "High" },
    { time: "14:36:15", event: "Execution", description: "Malicious macro executed", severity: "Critical" },
    { time: "14:37:45", event: "Persistence", description: "Registry key modified", severity: "High" },
    { time: "14:38:12", event: "Discovery", description: "Network scan initiated", severity: "Medium" },
    { time: "14:39:01", event: "Lateral Movement", description: "SMB connection to DC-01", severity: "Critical" },
    { time: "14:40:33", event: "Collection", description: "Files compressed", severity: "High" },
    { time: "14:41:18", event: "Exfiltration", description: "Data uploaded to C2", severity: "Critical" },
    { time: "14:42:05", event: "Impact", description: "Files encrypted", severity: "Critical" },
  ];

  const artifacts = [
    { name: "malware.exe", type: "Executable", hash: "a3f8d9c7b2e1...", size: "245 KB" },
    { name: "persistence.reg", type: "Registry", hash: "f4a6b8c9d2e3...", size: "2 KB" },
    { name: "network.pcap", type: "Network Capture", hash: "c9d2e3f4a6b8...", size: "12.4 MB" },
    { name: "memory.dmp", type: "Memory Dump", hash: "e3f4a6b8c9d2...", size: "4.2 GB" },
  ];

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-display font-bold mb-3 text-foreground">
            Forensics & Investigation
          </h1>
          <p className="text-lg text-muted-foreground">
            Timeline reconstruction, PCAP analysis, and evidence collection
          </p>
        </div>
        <Button className="bg-primary hover:bg-primary/90">
          <Download className="w-4 h-4 mr-2" />
          Export Case
        </Button>
      </div>

      {/* Attack Kill Chain */}
      <Card className="p-6 bg-card border-border shadow-lg">
        <h3 className="text-xl font-semibold mb-6 text-foreground">Kill Chain Visualization</h3>
        <div className="flex items-center justify-between gap-2 overflow-x-auto pb-4">
          {["Initial Access", "Execution", "Persistence", "Privilege Escalation", "Defense Evasion", "Credential Access", "Discovery", "Lateral Movement", "Collection", "Exfiltration", "Impact"].map((stage, idx) => (
            <div key={idx} className="flex-shrink-0 text-center">
              <div className={`w-20 h-20 rounded-full flex items-center justify-center ${idx <= 7 ? 'bg-red-500/20 border-2 border-red-500' : 'bg-muted/50 border-2 border-border'} mb-2`}>
                <Activity className={`w-8 h-8 ${idx <= 7 ? 'text-red-400' : 'text-muted-foreground'}`} />
              </div>
              <div className="text-xs text-foreground font-medium w-20">{stage}</div>
            </div>
          ))}
        </div>
      </Card>

      {/* Timeline Reconstruction */}
      <Card className="p-6 bg-card border-border shadow-lg">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-semibold text-foreground">Event Timeline</h3>
          <div className="flex gap-2">
            <Button size="sm" variant="outline">
              <Clock className="w-4 h-4 mr-2" />
              Zoom In
            </Button>
            <Button size="sm" variant="outline">Filter</Button>
          </div>
        </div>
        <ScrollArea className="h-[400px]">
          <div className="relative">
            {timeline.map((event, index) => (
              <div key={index} className="relative pl-8 pb-6 border-l-2 border-primary last:border-0">
                <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-primary border-4 border-background" />
                <div className="mb-1 text-xs text-muted-foreground">{event.time}</div>
                <div className="flex items-center justify-between mb-1">
                  <div className="font-semibold text-foreground">{event.event}</div>
                  <Badge variant={event.severity === "Critical" ? "destructive" : "outline"}>
                    {event.severity}
                  </Badge>
                </div>
                <div className="text-sm text-muted-foreground">{event.description}</div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </Card>

      {/* Evidence Artifacts */}
      <Card className="p-6 bg-card border-border shadow-lg">
        <h3 className="text-xl font-semibold mb-6 text-foreground">Evidence Artifacts</h3>
        <div className="space-y-3">
          {artifacts.map((artifact, index) => (
            <div key={index} className="p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors border border-border">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <FileSearch className="w-5 h-5 text-primary" />
                  <div>
                    <div className="font-semibold text-foreground">{artifact.name}</div>
                    <div className="text-sm text-muted-foreground">
                      {artifact.type} • {artifact.size} • Hash: {artifact.hash}
                    </div>
                  </div>
                </div>
                <Button size="sm" variant="outline">
                  <Download className="w-4 h-4 mr-2" />
                  Download
                </Button>
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* PCAP Analysis */}
      <Card className="p-6 bg-card border-border shadow-lg">
        <h3 className="text-xl font-semibold mb-6 text-foreground">Network Traffic Analysis (PCAP)</h3>
        <div className="grid grid-cols-2 gap-6">
          <div>
            <div className="text-sm font-semibold text-foreground mb-3">Top Connections</div>
            <div className="space-y-2">
              {[
                { ip: "185.220.45.12:443", proto: "HTTPS", bytes: "45.2 MB", threat: "C2 Server" },
                { ip: "192.168.1.100:445", proto: "SMB", bytes: "2.3 MB", threat: "Lateral Movement" },
                { ip: "8.8.8.8:53", proto: "DNS", bytes: "124 KB", threat: "Clean" },
              ].map((conn, idx) => (
                <div key={idx} className="p-3 bg-muted/50 rounded-lg">
                  <div className="flex justify-between items-center mb-1">
                    <span className="font-mono text-sm text-foreground">{conn.ip}</span>
                    <Badge variant={conn.threat === "Clean" ? "secondary" : "destructive"} className="text-xs">
                      {conn.threat}
                    </Badge>
                  </div>
                  <div className="text-xs text-muted-foreground">{conn.proto} • {conn.bytes}</div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <div className="text-sm font-semibold text-foreground mb-3">Protocol Distribution</div>
            <div className="space-y-3">
              {[
                { protocol: "HTTPS", percentage: 68 },
                { protocol: "SMB", percentage: 18 },
                { protocol: "DNS", percentage: 8 },
                { protocol: "Other", percentage: 6 },
              ].map((proto, idx) => (
                <div key={idx}>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-foreground">{proto.protocol}</span>
                    <span className="text-muted-foreground">{proto.percentage}%</span>
                  </div>
                  <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-primary" style={{ width: `${proto.percentage}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Card>

      {/* Memory Forensics */}
      <Card className="p-6 bg-card border-border shadow-lg">
        <h3 className="text-xl font-semibold mb-6 text-foreground">Memory Forensics</h3>
        <div className="bg-muted/30 p-4 rounded-lg font-mono text-sm overflow-x-auto">
          <pre className="text-foreground">
{`Process Analysis:
  PID: 4728  |  Name: powershell.exe  |  Parent: explorer.exe
  Memory: 145 MB  |  Status: Terminated  |  Suspicious: Yes
  
Injected DLLs:
  - malicious.dll (Not Signed)
  - inject_payload.dll (Hidden)
  
Network Connections:
  185.220.45.12:443 (ESTABLISHED) - C2 Communication
  
Registry Modifications:
  HKLM\\SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\Run
  → Added: "SystemUpdate" = "C:\\Temp\\malware.exe"`}
          </pre>
        </div>
      </Card>
    </div>
  );
};

export default ForensicsDashboard;
