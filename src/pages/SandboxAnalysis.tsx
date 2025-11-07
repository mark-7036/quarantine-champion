import { Package, Activity, FileText, Globe, AlertTriangle, CheckCircle } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

const SandboxAnalysis = () => {
  const processBehavior = [
    { process: "malware.exe", action: "Created", target: "C:\\Temp\\payload.dll", risk: "High" },
    { process: "malware.exe", action: "Executed", target: "powershell.exe -encodedCommand...", risk: "Critical" },
    { process: "powershell.exe", action: "Network", target: "185.220.45.12:443", risk: "Critical" },
    { process: "malware.exe", action: "Registry", target: "HKLM\\...\\Run", risk: "High" },
  ];

  const fileOperations = [
    { operation: "Created", path: "C:\\Temp\\payload.dll", size: "245 KB", timestamp: "14:35:22" },
    { operation: "Modified", path: "C:\\Windows\\System32\\config.ini", size: "12 KB", timestamp: "14:35:45" },
    { operation: "Deleted", path: "C:\\Users\\victim\\important.docx", size: "2.1 MB", timestamp: "14:36:12" },
    { operation: "Encrypted", path: "C:\\Documents\\*.pdf", size: "Various", timestamp: "14:36:30" },
  ];

  const networkActivity = [
    { ip: "185.220.45.12", port: "443", protocol: "HTTPS", bytes: "45.2 MB", threat: "C2 Server" },
    { ip: "192.168.1.254", port: "445", protocol: "SMB", bytes: "2.3 MB", threat: "Lateral Movement" },
    { ip: "8.8.8.8", port: "53", protocol: "DNS", bytes: "124 KB", threat: "DNS Tunneling" },
  ];

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-display font-bold mb-3 text-foreground">
            Sandbox Analysis
          </h1>
          <p className="text-lg text-muted-foreground">
            Dynamic malware analysis with isolated execution environment
          </p>
        </div>
        <Button className="bg-primary hover:bg-primary/90">
          <Package className="w-4 h-4 mr-2" />
          Upload Sample
        </Button>
      </div>

      {/* Risk Verdict */}
      <Card className="p-6 bg-card border-border shadow-lg">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-24 h-24 rounded-full bg-red-500/20 border-4 border-red-500 flex items-center justify-center">
              <span className="text-3xl font-bold text-red-400">92</span>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-2">Final Verdict: Malicious</h3>
              <p className="text-muted-foreground">High confidence ransomware detected with C2 communication</p>
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-red-400" />
              <span className="text-foreground font-medium">Behaviors: 12 malicious</span>
            </div>
            <div className="flex items-center gap-2">
              <Globe className="w-5 h-5 text-red-400" />
              <span className="text-foreground font-medium">Network: C2 detected</span>
            </div>
            <div className="flex items-center gap-2">
              <FileText className="w-5 h-5 text-red-400" />
              <span className="text-foreground font-medium">Files: Encryption attempted</span>
            </div>
          </div>
        </div>
      </Card>

      {/* Process Behavior Tree */}
      <Card className="p-6 bg-card border-border shadow-lg">
        <h3 className="text-xl font-semibold mb-6 text-foreground">Process Behavior Tree</h3>
        <ScrollArea className="h-[300px]">
          <div className="space-y-3">
            {processBehavior.map((behavior, index) => (
              <div key={index} className="p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors border border-border">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <Activity className="w-5 h-5 text-primary" />
                    <div>
                      <div className="font-mono text-sm text-foreground">{behavior.process}</div>
                      <div className="text-sm text-muted-foreground">{behavior.action}: {behavior.target}</div>
                    </div>
                  </div>
                  <Badge variant={behavior.risk === "Critical" ? "destructive" : "outline"}>
                    {behavior.risk}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </Card>

      {/* File I/O Operations */}
      <Card className="p-6 bg-card border-border shadow-lg">
        <h3 className="text-xl font-semibold mb-6 text-foreground">File I/O Changes</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-3 px-4 font-semibold text-foreground">Operation</th>
                <th className="text-left py-3 px-4 font-semibold text-foreground">Path</th>
                <th className="text-left py-3 px-4 font-semibold text-foreground">Size</th>
                <th className="text-left py-3 px-4 font-semibold text-foreground">Timestamp</th>
              </tr>
            </thead>
            <tbody>
              {fileOperations.map((op, index) => (
                <tr key={index} className="border-b border-border hover:bg-muted/50 transition-colors">
                  <td className="py-3 px-4">
                    <Badge variant={op.operation === "Encrypted" || op.operation === "Deleted" ? "destructive" : "outline"}>
                      {op.operation}
                    </Badge>
                  </td>
                  <td className="py-3 px-4 text-foreground font-mono text-sm">{op.path}</td>
                  <td className="py-3 px-4 text-muted-foreground">{op.size}</td>
                  <td className="py-3 px-4 text-muted-foreground text-sm">{op.timestamp}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      {/* Network Simulation */}
      <Card className="p-6 bg-card border-border shadow-lg">
        <h3 className="text-xl font-semibold mb-6 text-foreground">Network Simulation View</h3>
        <div className="space-y-3">
          {networkActivity.map((net, index) => (
            <div key={index} className="p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors border border-border">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-3">
                  <Globe className="w-5 h-5 text-primary" />
                  <div>
                    <div className="font-mono text-sm text-foreground">{net.ip}:{net.port}</div>
                    <div className="text-sm text-muted-foreground">{net.protocol} • {net.bytes}</div>
                  </div>
                </div>
                <Badge variant={net.threat !== "Clean" ? "destructive" : "secondary"}>
                  {net.threat}
                </Badge>
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Registry Operations */}
      <Card className="p-6 bg-card border-border shadow-lg">
        <h3 className="text-xl font-semibold mb-6 text-foreground">Registry Operations</h3>
        <div className="bg-muted/30 p-4 rounded-lg font-mono text-sm overflow-x-auto">
          <pre className="text-foreground">
{`[HKEY_LOCAL_MACHINE\\SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\Run]
  "SystemUpdate" = "C:\\Temp\\malware.exe"  [CREATED]

[HKEY_CURRENT_USER\\Software\\Microsoft\\Windows\\CurrentVersion\\Policies]
  "DisableTaskMgr" = dword:00000001  [MODIFIED]

[HKEY_LOCAL_MACHINE\\SYSTEM\\CurrentControlSet\\Services\\WinDefend]
  "Start" = dword:00000004  [MODIFIED - Disabled]`}
          </pre>
        </div>
      </Card>
    </div>
  );
};

export default SandboxAnalysis;
