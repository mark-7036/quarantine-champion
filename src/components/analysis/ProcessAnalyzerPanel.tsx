import { Activity, Cpu, HardDrive, Network, AlertTriangle, Shield, Search, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Progress } from "@/components/ui/progress";
import { useState } from "react";

const ProcessAnalyzerPanel = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProcess, setSelectedProcess] = useState<number | null>(null);

  const processes = [
    { pid: 1234, name: "chrome.exe", cpu: 12.5, memory: 856, network: "142 KB/s", status: "Normal", parent: "explorer.exe" },
    { pid: 4567, name: "node.exe", cpu: 8.2, memory: 234, network: "24 KB/s", status: "Normal", parent: "code.exe" },
    { pid: 7890, name: "suspicious.exe", cpu: 45.8, memory: 1024, network: "2.1 MB/s", status: "Suspicious", parent: "cmd.exe" },
    { pid: 2345, name: "svchost.exe", cpu: 2.1, memory: 45, network: "0 KB/s", status: "Normal", parent: "services.exe" },
    { pid: 6789, name: "powershell.exe", cpu: 18.4, memory: 128, network: "512 KB/s", status: "Warning", parent: "explorer.exe" },
    { pid: 1111, name: "explorer.exe", cpu: 3.2, memory: 156, network: "8 KB/s", status: "Normal", parent: "winlogon.exe" },
  ];

  const filteredProcesses = processes.filter((p) =>
    p.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const selectedProcessData = processes.find((p) => p.pid === selectedProcess);

  return (
    <div className="space-y-6">
      {/* Search and Refresh */}
      <div className="flex items-center gap-3">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            placeholder="Search processes..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>
        <Button variant="outline" size="icon">
          <RefreshCw className="w-4 h-4" />
        </Button>
      </div>

      {/* System Overview */}
      <div className="grid grid-cols-3 gap-4">
        <div className="p-4 rounded-lg bg-muted/50 border border-border text-center">
          <Cpu className="w-6 h-6 mx-auto mb-2 text-primary" />
          <div className="text-2xl font-bold text-foreground">34%</div>
          <div className="text-xs text-muted-foreground">CPU Usage</div>
        </div>
        <div className="p-4 rounded-lg bg-muted/50 border border-border text-center">
          <HardDrive className="w-6 h-6 mx-auto mb-2 text-primary" />
          <div className="text-2xl font-bold text-foreground">67%</div>
          <div className="text-xs text-muted-foreground">Memory</div>
        </div>
        <div className="p-4 rounded-lg bg-muted/50 border border-border text-center">
          <Network className="w-6 h-6 mx-auto mb-2 text-primary" />
          <div className="text-2xl font-bold text-foreground">2.8 MB/s</div>
          <div className="text-xs text-muted-foreground">Network</div>
        </div>
      </div>

      {/* Process List */}
      <div>
        <h4 className="text-sm font-semibold text-foreground mb-3">Running Processes ({filteredProcesses.length})</h4>
        <ScrollArea className="h-[280px]">
          <div className="space-y-2">
            {filteredProcesses.map((process) => (
              <div
                key={process.pid}
                onClick={() => setSelectedProcess(process.pid)}
                className={`p-3 rounded-lg border transition-colors cursor-pointer ${
                  selectedProcess === process.pid
                    ? "bg-primary/10 border-primary"
                    : "bg-muted/50 border-border hover:bg-muted"
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    {process.status === "Suspicious" ? (
                      <AlertTriangle className="w-4 h-4 text-destructive" />
                    ) : process.status === "Warning" ? (
                      <AlertTriangle className="w-4 h-4 text-yellow-500" />
                    ) : (
                      <Activity className="w-4 h-4 text-muted-foreground" />
                    )}
                    <div>
                      <div className="font-mono text-sm text-foreground">{process.name}</div>
                      <div className="text-xs text-muted-foreground">PID: {process.pid}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-right">
                      <div className="text-xs text-muted-foreground">CPU: {process.cpu}%</div>
                      <div className="text-xs text-muted-foreground">RAM: {process.memory} MB</div>
                    </div>
                    <Badge
                      variant={
                        process.status === "Suspicious"
                          ? "destructive"
                          : process.status === "Warning"
                          ? "secondary"
                          : "outline"
                      }
                    >
                      {process.status}
                    </Badge>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </div>

      {/* Process Details */}
      {selectedProcessData && (
        <div className="p-4 rounded-lg bg-muted/30 border border-border">
          <h4 className="text-sm font-semibold text-foreground mb-3">Process Details</h4>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <span className="text-muted-foreground">Name:</span>
              <span className="ml-2 text-foreground font-mono">{selectedProcessData.name}</span>
            </div>
            <div>
              <span className="text-muted-foreground">PID:</span>
              <span className="ml-2 text-foreground">{selectedProcessData.pid}</span>
            </div>
            <div>
              <span className="text-muted-foreground">Parent:</span>
              <span className="ml-2 text-foreground font-mono">{selectedProcessData.parent}</span>
            </div>
            <div>
              <span className="text-muted-foreground">Network:</span>
              <span className="ml-2 text-foreground">{selectedProcessData.network}</span>
            </div>
          </div>
          <div className="mt-4 flex gap-2">
            <Button size="sm" variant="outline">
              <Shield className="w-4 h-4 mr-2" />
              Scan Process
            </Button>
            <Button size="sm" variant="destructive">
              Terminate
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProcessAnalyzerPanel;
