import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { BookOpen, Search, Filter, Download, AlertTriangle, Info, CheckCircle } from "lucide-react";

export default function Logbook() {
  const [searchQuery, setSearchQuery] = useState("");

  const logs = [
    {
      id: "LOG-2025-001",
      timestamp: "2025-11-02 15:32:14",
      severity: "Critical",
      category: "Malware Detection",
      description: "Trojan.Generic detected in system32.exe",
      action: "Quarantined",
      user: "System",
    },
    {
      id: "LOG-2025-002",
      timestamp: "2025-11-02 15:28:42",
      severity: "Warning",
      category: "Network Activity",
      description: "Suspicious connection attempt from 185.220.101.45",
      action: "Blocked",
      user: "Firewall",
    },
    {
      id: "LOG-2025-003",
      timestamp: "2025-11-02 15:15:03",
      severity: "Info",
      category: "System Scan",
      description: "Full system scan completed successfully",
      action: "Completed",
      user: "Scanner",
    },
    {
      id: "LOG-2025-004",
      timestamp: "2025-11-02 14:58:21",
      severity: "Critical",
      category: "Behavior Monitor",
      description: "Registry modification attempt by unknown process",
      action: "Blocked & Terminated",
      user: "EDR Engine",
    },
    {
      id: "LOG-2025-005",
      timestamp: "2025-11-02 14:42:15",
      severity: "Warning",
      category: "Web Protection",
      description: "Phishing site blocked: fake-bank-login.com",
      action: "Blocked",
      user: "Web Filter",
    },
    {
      id: "LOG-2025-006",
      timestamp: "2025-11-02 14:30:07",
      severity: "Info",
      category: "Update",
      description: "Signature database updated to version 2025.11.02",
      action: "Updated",
      user: "System",
    },
  ];

  const getSeverityIcon = (severity: string) => {
    switch (severity) {
      case "Critical":
        return <AlertTriangle className="w-4 h-4 text-critical" />;
      case "Warning":
        return <AlertTriangle className="w-4 h-4 text-warning" />;
      default:
        return <Info className="w-4 h-4 text-info" />;
    }
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "Critical":
        return "bg-critical/10 text-critical border-critical/30";
      case "Warning":
        return "bg-warning/10 text-warning border-warning/30";
      default:
        return "bg-info/10 text-info border-info/30";
    }
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Threat Logbook</h1>
          <p className="text-muted-foreground mt-1">
            Comprehensive security event logging and audit trail
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" size="lg">
            <Filter className="w-4 h-4 mr-2" />
            Filters
          </Button>
          <Button size="lg" className="bg-primary hover:bg-primary/90">
            <Download className="w-4 h-4 mr-2" />
            Export Logs
          </Button>
        </div>
      </div>

      <Card className="p-6 bg-gradient-to-br from-card/80 to-card/60 backdrop-blur-xl border-border">
        <div className="flex items-center gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="Search logs by ID, category, or description..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
          <div className="flex gap-2">
            <Button variant="outline">Today</Button>
            <Button variant="outline">Last 7 Days</Button>
            <Button variant="outline">Last 30 Days</Button>
          </div>
        </div>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="p-6 bg-gradient-to-br from-card/80 to-card/60 backdrop-blur-xl border-border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground mb-1">Total Events</p>
              <h3 className="text-3xl font-bold text-foreground">1,284</h3>
            </div>
            <BookOpen className="w-8 h-8 text-info" />
          </div>
        </Card>
        <Card className="p-6 bg-gradient-to-br from-card/80 to-card/60 backdrop-blur-xl border-border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground mb-1">Critical</p>
              <h3 className="text-3xl font-bold text-critical">12</h3>
            </div>
            <AlertTriangle className="w-8 h-8 text-critical" />
          </div>
        </Card>
        <Card className="p-6 bg-gradient-to-br from-card/80 to-card/60 backdrop-blur-xl border-border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground mb-1">Warnings</p>
              <h3 className="text-3xl font-bold text-warning">48</h3>
            </div>
            <AlertTriangle className="w-8 h-8 text-warning" />
          </div>
        </Card>
        <Card className="p-6 bg-gradient-to-br from-card/80 to-card/60 backdrop-blur-xl border-border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground mb-1">Resolved</p>
              <h3 className="text-3xl font-bold text-success">1,224</h3>
            </div>
            <CheckCircle className="w-8 h-8 text-success" />
          </div>
        </Card>
      </div>

      <Card className="p-8 bg-gradient-to-br from-card/80 to-card/60 backdrop-blur-xl border-border">
        <h3 className="text-xl font-semibold text-foreground mb-6">Security Event Log</h3>

        <div className="space-y-3">
          {logs.map((log, index) => (
            <div
              key={log.id}
              className="p-4 rounded-lg border border-border bg-background/30 hover:bg-background/50 transition-all animate-fade-in"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-4 flex-1">
                  <div className="mt-1">{getSeverityIcon(log.severity)}</div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-sm font-mono text-muted-foreground">{log.id}</span>
                      <Badge variant="outline" className={getSeverityColor(log.severity)}>
                        {log.severity}
                      </Badge>
                      <span className="text-sm text-muted-foreground">{log.category}</span>
                    </div>
                    <p className="text-foreground font-medium mb-2">{log.description}</p>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span>{log.timestamp}</span>
                      <span>•</span>
                      <span>Action: {log.action}</span>
                      <span>•</span>
                      <span>By: {log.user}</span>
                    </div>
                  </div>
                </div>
                <Button variant="ghost" size="sm">
                  Details
                </Button>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
