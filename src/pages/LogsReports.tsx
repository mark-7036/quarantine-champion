import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BookOpen, Download, Filter, Calendar } from "lucide-react";
import { StatCard } from "@/components/StatCard";

export default function LogsReports() {
  const logs = [
    { time: "14:23:45", category: "Security", event: "Threat Blocked", severity: "High", details: "Malware execution prevented" },
    { time: "14:18:12", category: "System", event: "Scan Completed", severity: "Info", details: "Full system scan finished" },
    { time: "14:15:33", category: "Network", event: "Connection Blocked", severity: "Medium", details: "Suspicious IP blocked" },
    { time: "14:12:08", category: "Security", event: "File Quarantined", severity: "High", details: "Ransomware detected" },
    { time: "13:45:22", category: "Update", event: "Signatures Updated", severity: "Info", details: "Database version 2025.11.03" },
    { time: "13:30:15", category: "Security", event: "USB Scan", severity: "Low", details: "External drive scanned - Clean" },
  ];

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="space-y-3">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-primary/10 border border-primary/20">
            <BookOpen className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h1 className="text-4xl font-display font-bold text-foreground tracking-tight">Logs & Reports</h1>
            <p className="text-muted-foreground mt-1 text-base">
              Comprehensive activity logs and security reports
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <StatCard
          title="Total Events"
          value="12,847"
          change="Last 7 days"
          changeType="neutral"
          icon={BookOpen}
          iconColor="text-info"
        />
        <StatCard
          title="Security Events"
          value="234"
          change="47 critical"
          changeType="negative"
          icon={Filter}
          iconColor="text-critical"
        />
        <StatCard
          title="System Events"
          value="892"
          change="All normal"
          changeType="positive"
          icon={Calendar}
          iconColor="text-success"
        />
        <StatCard
          title="Reports Generated"
          value="15"
          change="This month"
          changeType="neutral"
          icon={Download}
          iconColor="text-primary"
        />
      </div>

      <Card className="p-8 bg-gradient-to-br from-card/80 to-card/60 backdrop-blur-xl border-border shadow-lg" style={{ boxShadow: 'var(--shadow-elevated)' }}>
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-semibold text-foreground">Activity Timeline</h3>
          <div className="flex gap-3">
            <Button variant="outline" size="sm">
              <Filter className="w-4 h-4 mr-2" />
              Filter
            </Button>
            <Button variant="outline" size="sm">
              <Download className="w-4 h-4 mr-2" />
              Export
            </Button>
          </div>
        </div>

        <div className="space-y-3">
          {logs.map((log, index) => (
            <div
              key={index}
              className="flex items-center gap-4 p-4 bg-muted/20 rounded-lg border border-border hover:bg-muted/30 transition-all animate-fade-in"
              style={{ animationDelay: `${index * 40}ms` }}
            >
              <div className="flex-shrink-0">
                <div className="text-xs text-muted-foreground font-mono">{log.time}</div>
              </div>
              <div className="flex-shrink-0">
                <Badge variant="outline" className="bg-muted/50 text-muted-foreground border-border">
                  {log.category}
                </Badge>
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-foreground text-sm">{log.event}</h4>
                <p className="text-xs text-muted-foreground mt-0.5">{log.details}</p>
              </div>
              <div className="flex-shrink-0">
                <Badge
                  variant="outline"
                  className={
                    log.severity === "High"
                      ? "bg-critical/10 text-critical border-critical/30"
                      : log.severity === "Medium"
                      ? "bg-warning/10 text-warning border-warning/30"
                      : log.severity === "Low"
                      ? "bg-info/10 text-info border-info/30"
                      : "bg-muted/50 text-muted-foreground border-border"
                  }
                >
                  {log.severity}
                </Badge>
              </div>
            </div>
          ))}
        </div>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { title: "Security Report", period: "Weekly", lastGenerated: "Nov 1, 2025", items: "847 events" },
          { title: "Threat Summary", period: "Monthly", lastGenerated: "Oct 31, 2025", items: "2,341 threats" },
          { title: "System Health", period: "Daily", lastGenerated: "Today", items: "All systems normal" },
        ].map((report, index) => (
          <Card
            key={index}
            className="p-6 bg-gradient-to-br from-card/80 to-card/60 backdrop-blur-xl border-border shadow-lg hover:shadow-xl transition-all animate-slide-in"
            style={{ boxShadow: 'var(--shadow-elevated)', animationDelay: `${index * 60}ms` }}
          >
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-foreground text-lg">{report.title}</h3>
                <p className="text-sm text-muted-foreground mt-1">{report.period} Report</p>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Last Generated:</span>
                  <span className="text-foreground font-medium">{report.lastGenerated}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Contains:</span>
                  <span className="text-foreground font-medium">{report.items}</span>
                </div>
              </div>
              <Button className="w-full bg-primary hover:bg-primary/90">
                <Download className="w-4 h-4 mr-2" />
                Download Report
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
