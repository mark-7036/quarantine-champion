import { BookOpen, Download, Filter, FileText, Shield, Globe, Activity } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { StatCard } from "@/components/StatCard";
import { Badge } from "@/components/ui/badge";

const ReportsLogs = () => {
  return (
    <div className="space-y-8 animate-fade-in">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-display font-bold mb-3 text-foreground">
            Reports & Logs
          </h1>
          <p className="text-lg text-muted-foreground">
            Security events, system logs, and comprehensive reports
          </p>
        </div>
        <Button className="bg-primary hover:bg-primary/90">
          <Download className="w-4 h-4 mr-2" />
          Export All
        </Button>
      </div>

      {/* Statistics */}
      <div className="grid gap-6 md:grid-cols-4">
        <StatCard
          title="Total Events"
          value="45,892"
          change="+12.3%"
          icon={Activity}
        />
        <StatCard
          title="Security Events"
          value="1,234"
          change="-5.4%"
          icon={Shield}
        />
        <StatCard
          title="System Logs"
          value="8,456"
          change="+8.2%"
          icon={FileText}
        />
        <StatCard
          title="Reports Generated"
          value="47"
          change="This month"
          icon={BookOpen}
        />
      </div>

      {/* Activity Timeline */}
      <Card className="p-6 bg-card border-border shadow-lg">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-semibold text-foreground">Activity Timeline</h3>
          <div className="flex gap-2">
            <Button variant="outline" size="sm">
              <Filter className="w-4 h-4 mr-2" />
              Filters
            </Button>
            <Button variant="outline" size="sm">
              <Download className="w-4 h-4 mr-2" />
              Export
            </Button>
          </div>
        </div>
        
        <div className="space-y-3">
          {[
            { time: "14:32:45", category: "Threat Detection", event: "Malware Blocked", details: "Trojan.Generic.KD.45123456", severity: "Critical" },
            { time: "13:15:22", category: "System", event: "Full Scan Completed", details: "1,245,892 files scanned, 0 threats", severity: "Info" },
            { time: "12:45:11", category: "Network", event: "Suspicious Connection Blocked", details: "IP: 185.220.101.45", severity: "High" },
            { time: "11:20:05", category: "Update", event: "Definitions Updated", details: "Version 2024.01.15.01", severity: "Info" },
            { time: "10:15:30", category: "Firewall", event: "Port Scan Detected", details: "From: 192.168.1.234", severity: "Medium" },
            { time: "09:45:12", category: "Threat Detection", event: "Ransomware Behavior Detected", details: "Process: suspicious.exe", severity: "Critical" },
            { time: "08:30:55", category: "System", event: "Real-time Protection Enabled", details: "All modules active", severity: "Info" },
          ].map((log, index) => (
            <div key={index} className="flex items-start justify-between p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-1">
                  <Badge variant="outline" className="text-xs">{log.time}</Badge>
                  <Badge variant="outline">{log.category}</Badge>
                  <span className="font-semibold text-foreground">{log.event}</span>
                </div>
                <div className="text-sm text-muted-foreground">{log.details}</div>
              </div>
              <Badge variant={
                log.severity === "Critical" ? "destructive" :
                log.severity === "High" ? "destructive" :
                log.severity === "Medium" ? "outline" : "outline"
              }>
                {log.severity}
              </Badge>
            </div>
          ))}
        </div>
      </Card>

      {/* Report Summaries */}
      <div className="grid md:grid-cols-2 gap-6">
        <Card className="p-6 bg-card border-border shadow-lg">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-lg font-semibold text-foreground">Security Summary Report</h3>
              <p className="text-sm text-muted-foreground">January 2024</p>
            </div>
            <FileText className="w-8 h-8 text-primary" />
          </div>
          <div className="space-y-2 mb-4">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Threats Blocked:</span>
              <span className="font-semibold text-foreground">1,249</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Scans Performed:</span>
              <span className="font-semibold text-foreground">124</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Quarantined Files:</span>
              <span className="font-semibold text-foreground">47</span>
            </div>
          </div>
          <Button variant="outline" className="w-full">
            <Download className="w-4 h-4 mr-2" />
            Download Report
          </Button>
        </Card>

        <Card className="p-6 bg-card border-border shadow-lg">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-lg font-semibold text-foreground">Network Activity Report</h3>
              <p className="text-sm text-muted-foreground">Last 7 Days</p>
            </div>
            <Globe className="w-8 h-8 text-primary" />
          </div>
          <div className="space-y-2 mb-4">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Connections Monitored:</span>
              <span className="font-semibold text-foreground">45,892</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Blocked IPs:</span>
              <span className="font-semibold text-foreground">234</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Data Transfer:</span>
              <span className="font-semibold text-foreground">156.3 GB</span>
            </div>
          </div>
          <Button variant="outline" className="w-full">
            <Download className="w-4 h-4 mr-2" />
            Download Report
          </Button>
        </Card>

        <Card className="p-6 bg-card border-border shadow-lg">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-lg font-semibold text-foreground">Scan History Report</h3>
              <p className="text-sm text-muted-foreground">Last 30 Days</p>
            </div>
            <Shield className="w-8 h-8 text-primary" />
          </div>
          <div className="space-y-2 mb-4">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Total Scans:</span>
              <span className="font-semibold text-foreground">124</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Files Scanned:</span>
              <span className="font-semibold text-foreground">12.4M</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Total Time:</span>
              <span className="font-semibold text-foreground">42h 15m</span>
            </div>
          </div>
          <Button variant="outline" className="w-full">
            <Download className="w-4 h-4 mr-2" />
            Download Report
          </Button>
        </Card>

        <Card className="p-6 bg-card border-border shadow-lg">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-lg font-semibold text-foreground">System Health Report</h3>
              <p className="text-sm text-muted-foreground">Current Status</p>
            </div>
            <Activity className="w-8 h-8 text-primary" />
          </div>
          <div className="space-y-2 mb-4">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Protection Status:</span>
              <Badge variant="outline" className="bg-green-500/10 text-green-600">Active</Badge>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Last Update:</span>
              <span className="font-semibold text-foreground">2 hours ago</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">System Health:</span>
              <span className="font-semibold text-foreground">98%</span>
            </div>
          </div>
          <Button variant="outline" className="w-full">
            <Download className="w-4 h-4 mr-2" />
            Download Report
          </Button>
        </Card>
      </div>

      {/* Log Categories */}
      <Card className="p-6 bg-card border-border shadow-lg">
        <h3 className="text-xl font-semibold mb-6 text-foreground">Log Categories</h3>
        <div className="grid md:grid-cols-4 gap-4">
          {[
            { name: "Detection Logs", count: "1,234", icon: Shield },
            { name: "Firewall Logs", count: "8,456", icon: Globe },
            { name: "Scan Logs", count: "124", icon: FileText },
            { name: "System Logs", count: "3,421", icon: Activity },
          ].map((category, index) => (
            <Button
              key={index}
              variant="outline"
              className="h-auto py-6 flex flex-col items-center gap-3"
            >
              <category.icon className="w-8 h-8 text-primary" />
              <div>
                <div className="font-semibold">{category.name}</div>
                <div className="text-sm opacity-70">{category.count} entries</div>
              </div>
            </Button>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default ReportsLogs;
