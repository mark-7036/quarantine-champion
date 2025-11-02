import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Search, Play, Pause, FileSearch, Shield, AlertTriangle } from "lucide-react";
import { StatCard } from "@/components/StatCard";

export default function Scanner() {
  const [scanning, setScanning] = useState(false);
  const [progress, setProgress] = useState(0);

  const startScan = () => {
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
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Antivirus Scanner</h1>
          <p className="text-muted-foreground mt-1">
            Real-time malware detection and system scanning
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" size="lg">
            <FileSearch className="w-4 h-4 mr-2" />
            Custom Scan
          </Button>
          <Button
            size="lg"
            onClick={startScan}
            disabled={scanning}
            className="bg-primary hover:bg-primary/90"
          >
            {scanning ? (
              <>
                <Pause className="w-4 h-4 mr-2" />
                Pause Scan
              </>
            ) : (
              <>
                <Play className="w-4 h-4 mr-2" />
                Start Full Scan
              </>
            )}
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatCard
          title="Files Scanned"
          value="847,392"
          change="+1.2% from last scan"
          changeType="neutral"
          icon={FileSearch}
          iconColor="text-info"
        />
        <StatCard
          title="Threats Detected"
          value="3"
          change="2 quarantined"
          changeType="negative"
          icon={AlertTriangle}
          iconColor="text-critical"
        />
        <StatCard
          title="System Health"
          value="98%"
          change="Excellent"
          changeType="positive"
          icon={Shield}
          iconColor="text-success"
        />
      </div>

      <Card className="p-8 bg-gradient-to-br from-card/80 to-card/60 backdrop-blur-xl border-border">
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-xl font-semibold text-foreground">Scan Progress</h3>
              <p className="text-sm text-muted-foreground mt-1">
                {scanning ? "Scanning system files..." : "Ready to scan"}
              </p>
            </div>
            <Badge variant="outline" className="bg-success/10 text-success border-success/30">
              {scanning ? "In Progress" : "Idle"}
            </Badge>
          </div>

          <div className="space-y-3">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">
                {scanning ? "Scanning: C:\\Windows\\System32\\drivers..." : "Not scanning"}
              </span>
              <span className="text-foreground font-medium">{progress}%</span>
            </div>
            <Progress value={progress} className="h-3" />
          </div>

          {scanning && (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4 border-t border-border">
              <div>
                <p className="text-xs text-muted-foreground">Files/sec</p>
                <p className="text-lg font-semibold text-foreground">2,847</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Time Elapsed</p>
                <p className="text-lg font-semibold text-foreground">2m 14s</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Remaining</p>
                <p className="text-lg font-semibold text-foreground">~8m</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground">CPU Usage</p>
                <p className="text-lg font-semibold text-foreground">34%</p>
              </div>
            </div>
          )}
        </div>
      </Card>

      <Card className="p-8 bg-gradient-to-br from-card/80 to-card/60 backdrop-blur-xl border-border">
        <h3 className="text-xl font-semibold text-foreground mb-6">Recent Scan Results</h3>
        <div className="overflow-hidden rounded-lg border border-border">
          <table className="w-full">
            <thead className="bg-muted/30">
              <tr>
                <th className="text-left py-3 px-4 text-xs font-semibold text-muted-foreground uppercase">
                  Scan Type
                </th>
                <th className="text-left py-3 px-4 text-xs font-semibold text-muted-foreground uppercase">
                  Date
                </th>
                <th className="text-left py-3 px-4 text-xs font-semibold text-muted-foreground uppercase">
                  Files Scanned
                </th>
                <th className="text-left py-3 px-4 text-xs font-semibold text-muted-foreground uppercase">
                  Threats
                </th>
                <th className="text-left py-3 px-4 text-xs font-semibold text-muted-foreground uppercase">
                  Duration
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border bg-card/50">
              {[
                { type: "Full System Scan", date: "2025-11-02 14:30", files: "847,392", threats: 0, duration: "12m 34s" },
                { type: "Quick Scan", date: "2025-11-02 09:15", files: "124,567", threats: 0, duration: "2m 18s" },
                { type: "Custom Scan", date: "2025-11-01 18:45", files: "45,789", threats: 3, duration: "4m 52s" },
                { type: "Full System Scan", date: "2025-11-01 08:00", files: "845,123", threats: 1, duration: "11m 45s" },
              ].map((scan, index) => (
                <tr key={index} className="hover:bg-muted/20 transition-colors">
                  <td className="py-3 px-4 text-sm text-foreground font-medium">{scan.type}</td>
                  <td className="py-3 px-4 text-sm text-muted-foreground">{scan.date}</td>
                  <td className="py-3 px-4 text-sm text-muted-foreground">{scan.files}</td>
                  <td className="py-3 px-4">
                    <Badge
                      variant="outline"
                      className={
                        scan.threats === 0
                          ? "bg-success/10 text-success border-success/30"
                          : "bg-critical/10 text-critical border-critical/30"
                      }
                    >
                      {scan.threats}
                    </Badge>
                  </td>
                  <td className="py-3 px-4 text-sm text-muted-foreground">{scan.duration}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}
