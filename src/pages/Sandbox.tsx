import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FileSearch, Upload, Play, AlertTriangle, CheckCircle, Clock } from "lucide-react";

export default function Sandbox() {
  const [analyzing, setAnalyzing] = useState(false);

  const recentAnalyses = [
    {
      filename: "suspicious_document.docx",
      timestamp: "2025-11-02 15:24",
      status: "Malicious",
      threat: "Macro Virus",
      score: 95,
    },
    {
      filename: "installer.exe",
      timestamp: "2025-11-02 14:18",
      status: "Safe",
      threat: "None",
      score: 12,
    },
    {
      filename: "update_patch.msi",
      timestamp: "2025-11-02 13:45",
      status: "Suspicious",
      threat: "PUP.Optional",
      score: 68,
    },
    {
      filename: "report.pdf",
      timestamp: "2025-11-02 12:30",
      status: "Safe",
      threat: "None",
      score: 5,
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Malicious":
        return "bg-critical/10 text-critical border-critical/30";
      case "Suspicious":
        return "bg-warning/10 text-warning border-warning/30";
      default:
        return "bg-success/10 text-success border-success/30";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Malicious":
        return <AlertTriangle className="w-4 h-4 text-critical" />;
      case "Suspicious":
        return <Clock className="w-4 h-4 text-warning" />;
      default:
        return <CheckCircle className="w-4 h-4 text-success" />;
    }
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Sandbox Analysis</h1>
          <p className="text-muted-foreground mt-1">
            Isolated environment for safe file analysis and behavior testing
          </p>
        </div>
      </div>

      <Card className="p-12 bg-gradient-to-br from-card/80 to-card/60 backdrop-blur-xl border-border border-dashed">
        <div className="flex flex-col items-center justify-center text-center space-y-4">
          <div className="p-6 rounded-2xl bg-primary/10 border border-primary/20">
            <Upload className="w-12 h-12 text-primary" />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-foreground mb-2">
              Upload File for Analysis
            </h3>
            <p className="text-muted-foreground max-w-md">
              Drag and drop a suspicious file or click to browse. The file will be analyzed in a
              secure, isolated environment.
            </p>
          </div>
          <Button size="lg" className="bg-primary hover:bg-primary/90">
            <Upload className="w-4 h-4 mr-2" />
            Select File
          </Button>
        </div>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="p-6 bg-gradient-to-br from-card/80 to-card/60 backdrop-blur-xl border-border">
          <div className="flex items-center gap-3 mb-4">
            <FileSearch className="w-5 h-5 text-primary" />
            <h3 className="font-semibold text-foreground">Behavioral Analysis</h3>
          </div>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-success" />
              Process monitoring
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-success" />
              Registry changes
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-success" />
              Network activity
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-success" />
              File system operations
            </li>
          </ul>
        </Card>

        <Card className="p-6 bg-gradient-to-br from-card/80 to-card/60 backdrop-blur-xl border-border">
          <div className="flex items-center gap-3 mb-4">
            <Play className="w-5 h-5 text-primary" />
            <h3 className="font-semibold text-foreground">Static Analysis</h3>
          </div>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-success" />
              PE/ELF structure
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-success" />
              String extraction
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-success" />
              Signature matching
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-success" />
              Metadata analysis
            </li>
          </ul>
        </Card>

        <Card className="p-6 bg-gradient-to-br from-card/80 to-card/60 backdrop-blur-xl border-border">
          <div className="flex items-center gap-3 mb-4">
            <AlertTriangle className="w-5 h-5 text-primary" />
            <h3 className="font-semibold text-foreground">Threat Intelligence</h3>
          </div>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-success" />
              Hash reputation
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-success" />
              Domain analysis
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-success" />
              YARA rules
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-success" />
              Community reports
            </li>
          </ul>
        </Card>
      </div>

      <Card className="p-8 bg-gradient-to-br from-card/80 to-card/60 backdrop-blur-xl border-border">
        <h3 className="text-xl font-semibold text-foreground mb-6">Recent Analyses</h3>

        <div className="overflow-hidden rounded-lg border border-border">
          <table className="w-full">
            <thead className="bg-muted/30">
              <tr>
                <th className="text-left py-3 px-4 text-xs font-semibold text-muted-foreground uppercase">
                  Filename
                </th>
                <th className="text-left py-3 px-4 text-xs font-semibold text-muted-foreground uppercase">
                  Timestamp
                </th>
                <th className="text-left py-3 px-4 text-xs font-semibold text-muted-foreground uppercase">
                  Status
                </th>
                <th className="text-left py-3 px-4 text-xs font-semibold text-muted-foreground uppercase">
                  Threat
                </th>
                <th className="text-left py-3 px-4 text-xs font-semibold text-muted-foreground uppercase">
                  Risk Score
                </th>
                <th className="text-right py-3 px-4 text-xs font-semibold text-muted-foreground uppercase">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border bg-card/50">
              {recentAnalyses.map((analysis, index) => (
                <tr
                  key={index}
                  className="hover:bg-muted/20 transition-colors animate-fade-in"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-2">
                      <FileSearch className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm text-foreground font-medium">
                        {analysis.filename}
                      </span>
                    </div>
                  </td>
                  <td className="py-3 px-4 text-sm text-muted-foreground">
                    {analysis.timestamp}
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-2">
                      {getStatusIcon(analysis.status)}
                      <Badge variant="outline" className={getStatusColor(analysis.status)}>
                        {analysis.status}
                      </Badge>
                    </div>
                  </td>
                  <td className="py-3 px-4 text-sm text-muted-foreground">{analysis.threat}</td>
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-2">
                      <div className="flex-1 max-w-[100px] h-2 bg-background rounded-full overflow-hidden">
                        <div
                          className={`h-full rounded-full ${
                            analysis.score >= 70
                              ? "bg-critical"
                              : analysis.score >= 40
                              ? "bg-warning"
                              : "bg-success"
                          }`}
                          style={{ width: `${analysis.score}%` }}
                        />
                      </div>
                      <span className="text-sm text-foreground font-medium">
                        {analysis.score}%
                      </span>
                    </div>
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex justify-end">
                      <Button variant="ghost" size="sm">
                        View Report
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}
