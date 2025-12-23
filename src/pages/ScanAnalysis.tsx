import { Shield, Activity, FileSearch, Play, Brain, Microscope, Zap } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { StatCard } from "@/components/StatCard";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription } from "@/components/ui/sheet";
import { useNavigate } from "react-router-dom";
import SandboxPanel from "@/components/analysis/SandboxPanel";
import ProcessAnalyzerPanel from "@/components/analysis/ProcessAnalyzerPanel";
import AIProfilerPanel from "@/components/analysis/AIProfilerPanel";
import MemoryScannerPanel from "@/components/analysis/MemoryScannerPanel";

const ScanAnalysis = () => {
  const [scanning, setScanning] = useState(false);
  const [progress, setProgress] = useState(0);
  const [sandboxOpen, setSandboxOpen] = useState(false);
  const [processAnalyzerOpen, setProcessAnalyzerOpen] = useState(false);
  const [aiProfilerOpen, setAIProfilerOpen] = useState(false);
  const [memoryScannerOpen, setMemoryScannerOpen] = useState(false);
  const navigate = useNavigate();

  const startScan = (type: string) => {
    setScanning(true);
    setProgress(0);
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setScanning(false);
          return 100;
        }
        return prev + 2;
      });
    }, 100);
  };

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-display font-bold mb-3 text-foreground">
          Scan & Analysis
        </h1>
        <p className="text-lg text-muted-foreground">
          Comprehensive scanning and advanced threat analysis tools
        </p>
      </div>

      {/* Statistics */}
      <div className="grid gap-6 md:grid-cols-4">
        <StatCard
          title="Files Scanned"
          value="1,245,892"
          change="+12.3%"
          icon={FileSearch}
        />
        <StatCard
          title="Threats Detected"
          value="47"
          change="-8.4%"
          icon={Shield}
        />
        <StatCard
          title="AI Detections"
          value="12"
          change="+3.2%"
          icon={Brain}
        />
        <StatCard
          title="Last Scan"
          value="2h ago"
          change="Clean"
          icon={Activity}
        />
      </div>

      {/* Scan Progress */}
      {scanning && (
        <Card className="p-6 bg-card border-border shadow-lg">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-semibold text-foreground">Scanning in Progress...</h3>
              <Badge variant="outline" className="animate-pulse">Active</Badge>
            </div>
            <Progress value={progress} className="h-3" />
            <div className="grid grid-cols-3 gap-4 text-sm text-muted-foreground">
              <div>Files: {Math.floor(progress * 100)}</div>
              <div>Speed: 1,234 files/sec</div>
              <div>Time: {Math.floor(progress / 2)}s</div>
            </div>
          </div>
        </Card>
      )}

      {/* Quick Scan Options */}
      <Card className="p-6 bg-card border-border shadow-lg">
        <h3 className="text-xl font-semibold mb-6 text-foreground">Scan Options</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Button
            onClick={() => startScan("quick")}
            disabled={scanning}
            className="h-auto py-6 flex flex-col items-center gap-3 bg-primary hover:bg-primary/90"
          >
            <Zap className="w-8 h-8" />
            <div>
              <div className="font-semibold">Quick Scan</div>
              <div className="text-xs opacity-80">~2 minutes</div>
            </div>
          </Button>

          <Button
            onClick={() => startScan("full")}
            disabled={scanning}
            className="h-auto py-6 flex flex-col items-center gap-3 bg-primary hover:bg-primary/90"
          >
            <Shield className="w-8 h-8" />
            <div>
              <div className="font-semibold">Full Scan</div>
              <div className="text-xs opacity-80">~30 minutes</div>
            </div>
          </Button>

          <Button
            onClick={() => startScan("custom")}
            disabled={scanning}
            className="h-auto py-6 flex flex-col items-center gap-3 bg-primary hover:bg-primary/90"
          >
            <FileSearch className="w-8 h-8" />
            <div>
              <div className="font-semibold">Custom Scan</div>
              <div className="text-xs opacity-80">Select folders</div>
            </div>
          </Button>

          <Button
            onClick={() => startScan("boot")}
            disabled={scanning}
            className="h-auto py-6 flex flex-col items-center gap-3 bg-primary hover:bg-primary/90"
          >
            <Play className="w-8 h-8" />
            <div>
              <div className="font-semibold">Boot-Time Scan</div>
              <div className="text-xs opacity-80">Restart required</div>
            </div>
          </Button>
        </div>
      </Card>

      {/* Advanced Analysis Tools */}
      <Card className="p-6 bg-card border-border shadow-lg">
        <h3 className="text-xl font-semibold mb-6 text-foreground">Advanced Analysis</h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
            <div className="flex items-center gap-4">
              <FileSearch className="w-6 h-6 text-primary" />
              <div>
                <div className="font-semibold text-foreground">Sandbox Analysis</div>
                <div className="text-sm text-muted-foreground">Execute suspicious files in isolated environment</div>
              </div>
            </div>
            <Button variant="outline" size="sm" onClick={() => setSandboxOpen(true)}>
              Open Sandbox
            </Button>
          </div>

          <div className="flex items-center justify-between p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
            <div className="flex items-center gap-4">
              <Activity className="w-6 h-6 text-primary" />
              <div>
                <div className="font-semibold text-foreground">Process Analyzer</div>
                <div className="text-sm text-muted-foreground">Monitor and analyze running processes</div>
              </div>
            </div>
            <Button variant="outline" size="sm" onClick={() => setProcessAnalyzerOpen(true)}>
              Analyze Processes
            </Button>
          </div>

          <div className="flex items-center justify-between p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
            <div className="flex items-center gap-4">
              <Brain className="w-6 h-6 text-primary" />
              <div>
                <div className="font-semibold text-foreground">AI/ML Behavior Profiler</div>
                <div className="text-sm text-muted-foreground">Machine learning-based threat detection</div>
              </div>
            </div>
            <Button variant="outline" size="sm" onClick={() => setAIProfilerOpen(true)}>
              View Analysis
            </Button>
          </div>

          <div className="flex items-center justify-between p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
            <div className="flex items-center gap-4">
              <Microscope className="w-6 h-6 text-primary" />
              <div>
                <div className="font-semibold text-foreground">Memory Scanner</div>
                <div className="text-sm text-muted-foreground">Scan RAM for malicious code and exploits</div>
              </div>
            </div>
            <Button variant="outline" size="sm" onClick={() => setMemoryScannerOpen(true)}>
              Scan Memory
            </Button>
          </div>
        </div>
      </Card>

      {/* Recent Scan Results */}
      <Card className="p-6 bg-card border-border shadow-lg">
        <h3 className="text-xl font-semibold mb-6 text-foreground">Recent Scan Results</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-3 px-4 font-semibold text-foreground">Scan Type</th>
                <th className="text-left py-3 px-4 font-semibold text-foreground">Date</th>
                <th className="text-left py-3 px-4 font-semibold text-foreground">Files Scanned</th>
                <th className="text-left py-3 px-4 font-semibold text-foreground">Threats Found</th>
                <th className="text-left py-3 px-4 font-semibold text-foreground">Duration</th>
              </tr>
            </thead>
            <tbody>
              {[
                { type: "Full Scan", date: "2024-01-15 14:30", files: "1,245,892", threats: 0, duration: "28m 42s" },
                { type: "Quick Scan", date: "2024-01-15 09:15", files: "45,234", threats: 2, duration: "1m 45s" },
                { type: "Custom Scan", date: "2024-01-14 16:20", files: "156,789", threats: 1, duration: "8m 12s" },
                { type: "Boot Scan", date: "2024-01-14 08:00", files: "89,432", threats: 3, duration: "12m 30s" },
              ].map((scan, index) => (
                <tr key={index} className="border-b border-border hover:bg-muted/50 transition-colors">
                  <td className="py-3 px-4 text-foreground">{scan.type}</td>
                  <td className="py-3 px-4 text-muted-foreground">{scan.date}</td>
                  <td className="py-3 px-4 text-muted-foreground">{scan.files}</td>
                  <td className="py-3 px-4">
                    <Badge variant={scan.threats > 0 ? "destructive" : "outline"}>
                      {scan.threats} threats
                    </Badge>
                  </td>
                  <td className="py-3 px-4 text-muted-foreground">{scan.duration}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      {/* Sandbox Analysis Sheet */}
      <Sheet open={sandboxOpen} onOpenChange={setSandboxOpen}>
        <SheetContent className="w-full sm:max-w-xl overflow-y-auto">
          <SheetHeader>
            <SheetTitle className="flex items-center gap-2">
              <FileSearch className="w-5 h-5 text-primary" />
              Sandbox Analysis
            </SheetTitle>
            <SheetDescription>
              Execute suspicious files in an isolated virtual environment
            </SheetDescription>
          </SheetHeader>
          <div className="mt-6">
            <SandboxPanel onNavigateToFull={() => {
              setSandboxOpen(false);
              navigate("/sandbox-analysis");
            }} />
          </div>
        </SheetContent>
      </Sheet>

      {/* Process Analyzer Sheet */}
      <Sheet open={processAnalyzerOpen} onOpenChange={setProcessAnalyzerOpen}>
        <SheetContent className="w-full sm:max-w-xl overflow-y-auto">
          <SheetHeader>
            <SheetTitle className="flex items-center gap-2">
              <Activity className="w-5 h-5 text-primary" />
              Process Analyzer
            </SheetTitle>
            <SheetDescription>
              Monitor and analyze running processes in real-time
            </SheetDescription>
          </SheetHeader>
          <div className="mt-6">
            <ProcessAnalyzerPanel />
          </div>
        </SheetContent>
      </Sheet>

      {/* AI Profiler Sheet */}
      <Sheet open={aiProfilerOpen} onOpenChange={setAIProfilerOpen}>
        <SheetContent className="w-full sm:max-w-xl overflow-y-auto">
          <SheetHeader>
            <SheetTitle className="flex items-center gap-2">
              <Brain className="w-5 h-5 text-primary" />
              AI/ML Behavior Profiler
            </SheetTitle>
            <SheetDescription>
              Machine learning-based behavioral threat detection
            </SheetDescription>
          </SheetHeader>
          <div className="mt-6">
            <AIProfilerPanel />
          </div>
        </SheetContent>
      </Sheet>

      {/* Memory Scanner Sheet */}
      <Sheet open={memoryScannerOpen} onOpenChange={setMemoryScannerOpen}>
        <SheetContent className="w-full sm:max-w-xl overflow-y-auto">
          <SheetHeader>
            <SheetTitle className="flex items-center gap-2">
              <Microscope className="w-5 h-5 text-primary" />
              Memory Scanner
            </SheetTitle>
            <SheetDescription>
              Scan system memory for malicious code and exploits
            </SheetDescription>
          </SheetHeader>
          <div className="mt-6">
            <MemoryScannerPanel />
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default ScanAnalysis;
