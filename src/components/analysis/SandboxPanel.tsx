import { Package, FileUp, Play, AlertTriangle, CheckCircle, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useState } from "react";

interface SandboxPanelProps {
  onNavigateToFull?: () => void;
}

const SandboxPanel = ({ onNavigateToFull }: SandboxPanelProps) => {
  const [analyzing, setAnalyzing] = useState(false);
  const [progress, setProgress] = useState(0);
  const [selectedFile, setSelectedFile] = useState<string | null>(null);

  const recentAnalyses = [
    { file: "suspicious.exe", verdict: "Malicious", score: 92, date: "2024-01-15 14:30" },
    { file: "document.pdf", verdict: "Clean", score: 5, date: "2024-01-15 12:15" },
    { file: "update.msi", verdict: "Suspicious", score: 45, date: "2024-01-14 16:45" },
  ];

  const handleFileSelect = () => {
    setSelectedFile("selected_file.exe");
  };

  const startAnalysis = () => {
    if (!selectedFile) return;
    setAnalyzing(true);
    setProgress(0);
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setAnalyzing(false);
          return 100;
        }
        return prev + 5;
      });
    }, 200);
  };

  return (
    <div className="space-y-6">
      {/* Upload Section */}
      <div className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-primary transition-colors">
        <Package className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
        <h4 className="text-lg font-semibold text-foreground mb-2">Upload Suspicious File</h4>
        <p className="text-sm text-muted-foreground mb-4">
          Drag & drop or click to select a file for sandbox analysis
        </p>
        <Button onClick={handleFileSelect} variant="outline">
          <FileUp className="w-4 h-4 mr-2" />
          Select File
        </Button>
      </div>

      {selectedFile && (
        <div className="p-4 rounded-lg bg-muted/50 border border-border">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Package className="w-5 h-5 text-primary" />
              <div>
                <div className="font-medium text-foreground">{selectedFile}</div>
                <div className="text-sm text-muted-foreground">Size: 2.4 MB</div>
              </div>
            </div>
            <Button onClick={startAnalysis} disabled={analyzing} size="sm">
              <Play className="w-4 h-4 mr-2" />
              Analyze
            </Button>
          </div>
        </div>
      )}

      {analyzing && (
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-foreground">Analysis in Progress...</span>
            <Badge variant="outline" className="animate-pulse">Running</Badge>
          </div>
          <Progress value={progress} className="h-2" />
          <div className="text-xs text-muted-foreground">
            {progress < 30 && "Initializing sandbox environment..."}
            {progress >= 30 && progress < 60 && "Executing file and monitoring behavior..."}
            {progress >= 60 && progress < 90 && "Analyzing network activity..."}
            {progress >= 90 && "Generating report..."}
          </div>
        </div>
      )}

      {/* Recent Analyses */}
      <div>
        <h4 className="text-sm font-semibold text-foreground mb-3">Recent Analyses</h4>
        <ScrollArea className="h-[200px]">
          <div className="space-y-2">
            {recentAnalyses.map((analysis, index) => (
              <div
                key={index}
                className="p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors border border-border cursor-pointer"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    {analysis.verdict === "Malicious" ? (
                      <AlertTriangle className="w-4 h-4 text-destructive" />
                    ) : analysis.verdict === "Clean" ? (
                      <CheckCircle className="w-4 h-4 text-green-500" />
                    ) : (
                      <Clock className="w-4 h-4 text-yellow-500" />
                    )}
                    <div>
                      <div className="font-mono text-sm text-foreground">{analysis.file}</div>
                      <div className="text-xs text-muted-foreground">{analysis.date}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium text-foreground">{analysis.score}/100</span>
                    <Badge
                      variant={
                        analysis.verdict === "Malicious"
                          ? "destructive"
                          : analysis.verdict === "Clean"
                          ? "outline"
                          : "secondary"
                      }
                    >
                      {analysis.verdict}
                    </Badge>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </div>

      {onNavigateToFull && (
        <Button onClick={onNavigateToFull} variant="outline" className="w-full">
          Open Full Sandbox Environment
        </Button>
      )}
    </div>
  );
};

export default SandboxPanel;
