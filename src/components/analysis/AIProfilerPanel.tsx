import { Brain, TrendingUp, AlertTriangle, Shield, Activity, Zap, BarChart3 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const AIProfilerPanel = () => {
  const [isScanning, setIsScanning] = useState(false);

  const behaviorPatterns = [
    { pattern: "File Encryption Activity", confidence: 92, severity: "Critical", detected: "2 minutes ago" },
    { pattern: "Unusual Registry Access", confidence: 78, severity: "High", detected: "15 minutes ago" },
    { pattern: "Network Beacon Pattern", confidence: 85, severity: "High", detected: "1 hour ago" },
    { pattern: "Process Injection Attempt", confidence: 45, severity: "Medium", detected: "3 hours ago" },
    { pattern: "Privilege Escalation", confidence: 34, severity: "Low", detected: "6 hours ago" },
  ];

  const modelStats = [
    { name: "Neural Network v3.2", accuracy: 98.7, samples: "1.2M" },
    { name: "Behavior Classifier", accuracy: 96.4, samples: "850K" },
    { name: "Anomaly Detector", accuracy: 94.2, samples: "2.1M" },
  ];

  const startScan = () => {
    setIsScanning(true);
    setTimeout(() => setIsScanning(false), 3000);
  };

  return (
    <div className="space-y-6">
      {/* AI Status Overview */}
      <div className="grid grid-cols-2 gap-4">
        <div className="p-4 rounded-lg bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/30">
          <div className="flex items-center gap-3 mb-2">
            <Brain className="w-6 h-6 text-primary" />
            <span className="font-semibold text-foreground">AI Engine Status</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-sm text-muted-foreground">Active & Learning</span>
          </div>
        </div>
        <div className="p-4 rounded-lg bg-muted/50 border border-border">
          <div className="flex items-center gap-3 mb-2">
            <TrendingUp className="w-6 h-6 text-primary" />
            <span className="font-semibold text-foreground">Detection Rate</span>
          </div>
          <div className="text-2xl font-bold text-foreground">99.2%</div>
        </div>
      </div>

      {/* Model Statistics */}
      <div>
        <h4 className="text-sm font-semibold text-foreground mb-3">Active ML Models</h4>
        <div className="space-y-3">
          {modelStats.map((model, index) => (
            <div key={index} className="p-3 rounded-lg bg-muted/50 border border-border">
              <div className="flex items-center justify-between mb-2">
                <span className="font-medium text-foreground">{model.name}</span>
                <Badge variant="outline">{model.samples} samples</Badge>
              </div>
              <div className="flex items-center gap-3">
                <Progress value={model.accuracy} className="flex-1 h-2" />
                <span className="text-sm font-medium text-foreground">{model.accuracy}%</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Detected Behavior Patterns */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <h4 className="text-sm font-semibold text-foreground">Detected Behavior Patterns</h4>
          <Button onClick={startScan} disabled={isScanning} size="sm" variant="outline">
            {isScanning ? (
              <>
                <Activity className="w-4 h-4 mr-2 animate-spin" />
                Scanning...
              </>
            ) : (
              <>
                <Zap className="w-4 h-4 mr-2" />
                Run Analysis
              </>
            )}
          </Button>
        </div>
        <ScrollArea className="h-[220px]">
          <div className="space-y-2">
            {behaviorPatterns.map((behavior, index) => (
              <div
                key={index}
                className="p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors border border-border"
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    {behavior.severity === "Critical" ? (
                      <AlertTriangle className="w-4 h-4 text-destructive" />
                    ) : behavior.severity === "High" ? (
                      <AlertTriangle className="w-4 h-4 text-orange-500" />
                    ) : behavior.severity === "Medium" ? (
                      <Shield className="w-4 h-4 text-yellow-500" />
                    ) : (
                      <Shield className="w-4 h-4 text-muted-foreground" />
                    )}
                    <span className="font-medium text-foreground">{behavior.pattern}</span>
                  </div>
                  <Badge
                    variant={
                      behavior.severity === "Critical"
                        ? "destructive"
                        : behavior.severity === "High"
                        ? "secondary"
                        : "outline"
                    }
                  >
                    {behavior.severity}
                  </Badge>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2">
                    <BarChart3 className="w-3 h-3 text-muted-foreground" />
                    <span className="text-muted-foreground">Confidence: {behavior.confidence}%</span>
                  </div>
                  <span className="text-muted-foreground">{behavior.detected}</span>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </div>

      {/* Threat Summary */}
      <div className="p-4 rounded-lg bg-destructive/10 border border-destructive/30">
        <div className="flex items-center gap-3 mb-2">
          <AlertTriangle className="w-5 h-5 text-destructive" />
          <span className="font-semibold text-foreground">AI Threat Summary</span>
        </div>
        <p className="text-sm text-muted-foreground">
          2 critical and 1 high-severity behavioral anomalies detected in the last 24 hours. 
          Ransomware-like encryption patterns observed on 3 endpoints.
        </p>
      </div>
    </div>
  );
};

export default AIProfilerPanel;
