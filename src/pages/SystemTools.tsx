import { Wrench, Zap, HardDrive, FileX, Shield, Settings } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { StatCard } from "@/components/StatCard";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { ActionDialog } from "@/components/ActionDialog";
import { Progress } from "@/components/ui/progress";

const SystemTools = () => {
  const { toast } = useToast();
  const [cleanupProgress, setCleanupProgress] = useState<number | null>(null);
  const [showCleanDialog, setShowCleanDialog] = useState(false);
  const [selectedCleanup, setSelectedCleanup] = useState<string>("");
  const [startupPrograms, setStartupPrograms] = useState([
    { name: "Microsoft OneDrive", publisher: "Microsoft Corporation", impact: "Low", enabled: true },
    { name: "Steam Client", publisher: "Valve Corporation", impact: "Medium", enabled: true },
    { name: "Adobe Creative Cloud", publisher: "Adobe Inc.", impact: "High", enabled: true },
    { name: "Discord", publisher: "Discord Inc.", impact: "Low", enabled: true },
    { name: "NVIDIA GeForce Experience", publisher: "NVIDIA Corporation", impact: "Medium", enabled: false },
    { name: "Spotify", publisher: "Spotify AB", impact: "Low", enabled: false },
  ]);

  const runTool = (toolName: string) => {
    toast({
      title: `${toolName} Started`,
      description: "Running system utility...",
    });
    
    setCleanupProgress(0);
    const interval = setInterval(() => {
      setCleanupProgress((prev) => {
        if (prev === null || prev >= 100) {
          clearInterval(interval);
          toast({
            title: `${toolName} Complete`,
            description: "Operation completed successfully",
          });
          setTimeout(() => setCleanupProgress(null), 1000);
          return 100;
        }
        return prev + 5;
      });
    }, 100);
  };

  const toggleStartup = (index: number) => {
    setStartupPrograms((prev) => {
      const updated = [...prev];
      updated[index].enabled = !updated[index].enabled;
      toast({
        title: updated[index].enabled ? "Program Enabled" : "Program Disabled",
        description: `${updated[index].name} will ${updated[index].enabled ? "start" : "no longer start"} with Windows`,
      });
      return updated;
    });
  };

  const cleanCategory = (category: string) => {
    setSelectedCleanup(category);
    setShowCleanDialog(true);
  };

  const confirmCleanup = () => {
    toast({
      title: "Cleanup Started",
      description: `Cleaning ${selectedCleanup}...`,
    });
    setTimeout(() => {
      toast({
        title: "Cleanup Complete",
        description: `${selectedCleanup} has been cleaned successfully`,
      });
    }, 2000);
  };
  return (
    <div className="space-y-8 animate-fade-in">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-display font-bold mb-3 text-foreground">
          System Tools
        </h1>
        <p className="text-lg text-muted-foreground">
          Optimization, cleanup, and system maintenance utilities
        </p>
      </div>

      {/* Statistics */}
      <div className="grid gap-6 md:grid-cols-4">
        <StatCard
          title="Disk Space"
          value="156 GB"
          change="Available"
          icon={HardDrive}
        />
        <StatCard
          title="Startup Programs"
          value="18"
          change="Active"
          icon={Zap}
        />
        <StatCard
          title="Junk Files"
          value="4.2 GB"
          change="Can clean"
          icon={FileX}
        />
        <StatCard
          title="Vulnerabilities"
          value="3"
          change="Found"
          icon={Shield}
        />
      </div>

      {/* Progress Bar */}
      {cleanupProgress !== null && (
        <Card className="p-6 bg-card border-border shadow-lg">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-semibold text-foreground">Operation in Progress...</h3>
              <Badge variant="outline" className="animate-pulse">Active</Badge>
            </div>
            <Progress value={cleanupProgress} className="h-3" />
            <p className="text-sm text-muted-foreground">{cleanupProgress}% complete</p>
          </div>
        </Card>
      )}

      {/* Quick Tools */}
      <Card className="p-6 bg-card border-border shadow-lg">
        <h3 className="text-xl font-semibold mb-6 text-foreground">Quick Tools</h3>
        <div className="grid md:grid-cols-3 gap-4">
          <Button
            onClick={() => runTool("Disk Cleanup")}
            disabled={cleanupProgress !== null}
            className="h-auto py-6 flex flex-col items-center gap-3 bg-primary hover:bg-primary/90"
          >
            <HardDrive className="w-8 h-8" />
            <div>
              <div className="font-semibold">Disk Cleanup</div>
              <div className="text-xs opacity-80">Free up space</div>
            </div>
          </Button>

          <Button
            onClick={() => runTool("Startup Optimizer")}
            disabled={cleanupProgress !== null}
            className="h-auto py-6 flex flex-col items-center gap-3 bg-primary hover:bg-primary/90"
          >
            <Zap className="w-8 h-8" />
            <div>
              <div className="font-semibold">Startup Manager</div>
              <div className="text-xs opacity-80">Optimize boot time</div>
            </div>
          </Button>

          <Button
            onClick={() => runTool("Vulnerability Scan")}
            disabled={cleanupProgress !== null}
            className="h-auto py-6 flex flex-col items-center gap-3 bg-primary hover:bg-primary/90"
          >
            <Shield className="w-8 h-8" />
            <div>
              <div className="font-semibold">Vulnerability Scan</div>
              <div className="text-xs opacity-80">Find security issues</div>
            </div>
          </Button>
        </div>
      </Card>

      <ActionDialog
        open={showCleanDialog}
        onClose={() => setShowCleanDialog(false)}
        onConfirm={confirmCleanup}
        title={`Clean ${selectedCleanup}`}
        description={`Are you sure you want to clean ${selectedCleanup}? This will permanently remove these files.`}
        confirmText="Clean Now"
        variant="warning"
      />

      {/* Startup Manager */}
      <Card className="p-6 bg-card border-border shadow-lg">
        <h3 className="text-xl font-semibold mb-6 text-foreground">Startup Programs</h3>
        <div className="space-y-3">
          {startupPrograms.map((program, index) => (
            <div key={index} className="flex items-center justify-between p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors cursor-pointer">
              <div className="flex-1">
                <div className="font-semibold text-foreground">{program.name}</div>
                <div className="text-sm text-muted-foreground">{program.publisher}</div>
              </div>
              <div className="flex items-center gap-4">
                <Badge variant={
                  program.impact === "High" ? "destructive" :
                  program.impact === "Medium" ? "outline" : "outline"
                }>
                  {program.impact} Impact
                </Badge>
                <Switch checked={program.enabled} onCheckedChange={() => toggleStartup(index)} />
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Cleanup Recommendations */}
      <Card className="p-6 bg-card border-border shadow-lg">
        <h3 className="text-xl font-semibold mb-6 text-foreground">Cleanup Recommendations</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-3 px-4 font-semibold text-foreground">Category</th>
                <th className="text-left py-3 px-4 font-semibold text-foreground">Size</th>
                <th className="text-left py-3 px-4 font-semibold text-foreground">Items</th>
                <th className="text-left py-3 px-4 font-semibold text-foreground">Impact</th>
                <th className="text-left py-3 px-4 font-semibold text-foreground">Action</th>
              </tr>
            </thead>
            <tbody>
              {[
                { category: "Temporary Files", size: "1.8 GB", items: "12,456", impact: "High" },
                { category: "Browser Cache", size: "892 MB", items: "8,234", impact: "Medium" },
                { category: "Log Files", size: "445 MB", items: "3,421", impact: "Low" },
                { category: "Old Windows Updates", size: "1.2 GB", items: "15", impact: "High" },
                { category: "Recycle Bin", size: "523 MB", items: "142", impact: "Low" },
              ].map((item, index) => (
                <tr key={index} className="border-b border-border hover:bg-muted/50 transition-colors">
                  <td className="py-3 px-4 text-foreground font-medium">{item.category}</td>
                  <td className="py-3 px-4 text-muted-foreground">{item.size}</td>
                  <td className="py-3 px-4 text-muted-foreground">{item.items}</td>
                  <td className="py-3 px-4">
                    <Badge variant={
                      item.impact === "High" ? "default" :
                      item.impact === "Medium" ? "outline" : "outline"
                    }>
                      {item.impact}
                    </Badge>
                  </td>
                  <td className="py-3 px-4">
                    <Button size="sm" variant="outline" onClick={() => cleanCategory(item.category)}>Clean</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      {/* Registry Monitor */}
      <Card className="p-6 bg-card border-border shadow-lg">
        <h3 className="text-xl font-semibold mb-6 text-foreground">Registry Monitor</h3>
        <div className="space-y-3">
          {[
            { key: "HKLM\\Software\\Microsoft\\Windows\\CurrentVersion\\Run", action: "Modified", time: "2 min ago", risk: "Low" },
            { key: "HKCU\\Software\\Classes\\exefile\\shell\\open\\command", action: "Accessed", time: "15 min ago", risk: "Medium" },
            { key: "HKLM\\System\\CurrentControlSet\\Services", action: "Modified", time: "1 hour ago", risk: "High" },
          ].map((entry, index) => (
            <div key={index} className="flex items-center justify-between p-4 rounded-lg bg-muted/50">
              <div className="flex-1">
                <div className="font-mono text-sm text-foreground">{entry.key}</div>
                <div className="text-sm text-muted-foreground mt-1">{entry.action} • {entry.time}</div>
              </div>
              <Badge variant={entry.risk === "High" ? "destructive" : "outline"}>
                {entry.risk} Risk
              </Badge>
            </div>
          ))}
        </div>
      </Card>

      {/* File Shredder */}
      <Card className="p-6 bg-card border-border shadow-lg">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-xl font-semibold text-foreground">Secure File Shredder</h3>
            <p className="text-sm text-muted-foreground mt-1">Permanently delete sensitive files beyond recovery</p>
          </div>
          <Button className="bg-primary hover:bg-primary/90">
            <FileX className="w-4 h-4 mr-2" />
            Shred Files
          </Button>
        </div>
        <div className="grid md:grid-cols-3 gap-4 p-4 bg-muted/30 rounded-lg">
          <div className="text-center">
            <div className="text-2xl font-bold text-primary mb-1">DoD 5220.22-M</div>
            <div className="text-sm text-muted-foreground">Shredding Standard</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-primary mb-1">7 Passes</div>
            <div className="text-sm text-muted-foreground">Overwrite Cycles</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-primary mb-1">1,234</div>
            <div className="text-sm text-muted-foreground">Files Shredded</div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default SystemTools;
