import { Microscope, Cpu, AlertTriangle, Shield, Play, Search, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useState } from "react";

const MemoryScannerPanel = () => {
  const [scanning, setScanning] = useState(false);
  const [progress, setProgress] = useState(0);
  const [scanComplete, setScanComplete] = useState(false);

  const memoryThreats = [
    { address: "0x7FFE0000", process: "suspicious.exe", type: "Code Injection", severity: "Critical", size: "4 KB" },
    { address: "0x00400000", process: "powershell.exe", type: "Shellcode", severity: "High", size: "2 KB" },
    { address: "0x76A20000", process: "svchost.exe", type: "Hook Detected", severity: "Medium", size: "256 B" },
  ];

  const memoryRegions = [
    { region: "Heap", used: 2.4, total: 8, status: "Normal" },
    { region: "Stack", used: 0.8, total: 2, status: "Normal" },
    { region: "Executable", used: 1.2, total: 4, status: "Warning" },
    { region: "Mapped Files", used: 3.6, total: 8, status: "Normal" },
  ];

  const startScan = () => {
    setScanning(true);
    setProgress(0);
    setScanComplete(false);
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setScanning(false);
          setScanComplete(true);
          return 100;
        }
        return prev + 2;
      });
    }, 80);
  };

  return (
    <div className="space-y-6">
      {/* Memory Overview */}
      <div className="grid grid-cols-2 gap-4">
        <div className="p-4 rounded-lg bg-muted/50 border border-border">
          <div className="flex items-center gap-3 mb-2">
            <Cpu className="w-5 h-5 text-primary" />
            <span className="font-medium text-foreground">RAM Usage</span>
          </div>
          <div className="text-2xl font-bold text-foreground mb-2">12.4 GB / 32 GB</div>
          <Progress value={38.75} className="h-2" />
        </div>
        <div className="p-4 rounded-lg bg-muted/50 border border-border">
          <div className="flex items-center gap-3 mb-2">
            <Microscope className="w-5 h-5 text-primary" />
            <span className="font-medium text-foreground">Scan Status</span>
          </div>
          <div className="flex items-center gap-2">
            {scanComplete ? (
              <>
                <div className="w-2 h-2 rounded-full bg-green-500" />
                <span className="text-sm text-foreground">Scan Complete</span>
              </>
            ) : scanning ? (
              <>
                <div className="w-2 h-2 rounded-full bg-yellow-500 animate-pulse" />
                <span className="text-sm text-foreground">Scanning...</span>
              </>
            ) : (
              <>
                <div className="w-2 h-2 rounded-full bg-muted-foreground" />
                <span className="text-sm text-muted-foreground">Ready</span>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Scan Controls */}
      <div className="flex gap-3">
        <Button onClick={startScan} disabled={scanning} className="flex-1">
          <Play className="w-4 h-4 mr-2" />
          {scanning ? "Scanning..." : "Start Memory Scan"}
        </Button>
        <Button variant="outline">
          <Search className="w-4 h-4 mr-2" />
          Deep Scan
        </Button>
      </div>

      {/* Scan Progress */}
      {scanning && (
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-foreground">Scanning memory regions...</span>
            <span className="text-sm text-muted-foreground">{progress}%</span>
          </div>
          <Progress value={progress} className="h-2" />
          <div className="text-xs text-muted-foreground">
            Analyzing {Math.floor(progress * 124)} of 12,400 memory pages
          </div>
        </div>
      )}

      {/* Memory Regions */}
      <div>
        <h4 className="text-sm font-semibold text-foreground mb-3">Memory Regions</h4>
        <div className="grid grid-cols-2 gap-3">
          {memoryRegions.map((region, index) => (
            <div key={index} className="p-3 rounded-lg bg-muted/50 border border-border">
              <div className="flex items-center justify-between mb-2">
                <span className="font-medium text-foreground">{region.region}</span>
                <Badge variant={region.status === "Warning" ? "secondary" : "outline"}>
                  {region.status}
                </Badge>
              </div>
              <Progress value={(region.used / region.total) * 100} className="h-2 mb-1" />
              <div className="text-xs text-muted-foreground">
                {region.used} GB / {region.total} GB
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Detected Threats */}
      {(scanComplete || true) && (
        <div>
          <div className="flex items-center justify-between mb-3">
            <h4 className="text-sm font-semibold text-foreground">Memory Threats Detected</h4>
            <Badge variant="destructive">{memoryThreats.length} threats</Badge>
          </div>
          <ScrollArea className="h-[180px]">
            <div className="space-y-2">
              {memoryThreats.map((threat, index) => (
                <div
                  key={index}
                  className="p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors border border-border"
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <AlertTriangle
                        className={`w-4 h-4 ${
                          threat.severity === "Critical"
                            ? "text-destructive"
                            : threat.severity === "High"
                            ? "text-orange-500"
                            : "text-yellow-500"
                        }`}
                      />
                      <span className="font-mono text-sm text-foreground">{threat.address}</span>
                    </div>
                    <Badge
                      variant={
                        threat.severity === "Critical"
                          ? "destructive"
                          : threat.severity === "High"
                          ? "secondary"
                          : "outline"
                      }
                    >
                      {threat.severity}
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <div>
                      <span className="text-muted-foreground">Process: </span>
                      <span className="text-foreground font-mono">{threat.process}</span>
                    </div>
                    <span className="text-muted-foreground">{threat.type}</span>
                  </div>
                  <div className="mt-2 flex gap-2">
                    <Button size="sm" variant="outline" className="h-7 text-xs">
                      <Shield className="w-3 h-3 mr-1" />
                      Quarantine
                    </Button>
                    <Button size="sm" variant="destructive" className="h-7 text-xs">
                      <Trash2 className="w-3 h-3 mr-1" />
                      Remove
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>
        </div>
      )}
    </div>
  );
};

export default MemoryScannerPanel;
