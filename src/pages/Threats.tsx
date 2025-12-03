import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { AlertTriangle, Shield, Filter, Clock, Target, Activity } from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { MetricCard } from "@/components/MetricCard";
import { SearchInput } from "@/components/SearchInput";
import { SeverityBadge } from "@/components/SeverityBadge";
import { StatusBadge } from "@/components/StatusBadge";
import { AlertTimeline } from "@/components/AlertTimeline";
import { SeverityLevel, StatusType } from "@/lib/constants";

interface Alert {
  id: string;
  name: string;
  severity: SeverityLevel;
  technique: string;
  timestamp: string;
  status: StatusType;
  source: string;
  ioc: string;
}

const alerts: Alert[] = [
  { id: "ALT-2025-001", name: "Ransomware Encryption Attempt", severity: "Critical", technique: "T1486", timestamp: "2025-11-08 14:23:45", status: "Active", source: "Endpoint-WS-042", ioc: "malware.exe (SHA256: 7d8f...)" },
  { id: "ALT-2025-002", name: "Lateral Movement Detected", severity: "High", technique: "T1021", timestamp: "2025-11-08 13:15:22", status: "Investigating", source: "Endpoint-WS-031", ioc: "192.168.1.45:445" },
  { id: "ALT-2025-003", name: "Suspicious PowerShell Execution", severity: "High", technique: "T1059.001", timestamp: "2025-11-08 12:08:11", status: "Investigating", source: "Endpoint-WS-089", ioc: "powershell.exe -enc ..." },
  { id: "ALT-2025-004", name: "Privilege Escalation Attempt", severity: "Medium", technique: "T1068", timestamp: "2025-11-08 11:42:33", status: "Resolved", source: "Endpoint-SRV-015", ioc: "exploit.dll" },
  { id: "ALT-2025-005", name: "Credential Dumping Activity", severity: "Critical", technique: "T1003", timestamp: "2025-11-08 10:55:18", status: "Active", source: "Endpoint-WS-067", ioc: "mimikatz.exe" },
];

const Threats = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [severityFilter, setSeverityFilter] = useState("all");

  const timelineItems = alerts.slice(0, 3).map((alert) => ({
    id: alert.id,
    title: alert.name,
    description: alert.source,
    timestamp: alert.timestamp,
    severity: alert.severity,
  }));

  return (
    <div className="space-y-6 animate-fade-in">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem><BreadcrumbLink href="/">Dashboard</BreadcrumbLink></BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem><BreadcrumbPage>Threats & Alerts</BreadcrumbPage></BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-display font-bold text-foreground">Threats & Alerts</h1>
          <p className="text-lg text-muted-foreground mt-2">Real-time threat detection and alert management</p>
        </div>
        <Badge variant="outline" className="bg-critical/10 text-critical border-critical/30 text-sm px-4 py-2">
          <AlertTriangle className="w-4 h-4 mr-2" />
          {alerts.filter((a) => a.status === "Active").length} Active Alerts
        </Badge>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <MetricCard title="Critical Alerts" value={alerts.filter((a) => a.severity === "Critical").length} icon={AlertTriangle} iconColor="text-critical" valueColor="text-critical" />
        <MetricCard title="High Priority" value={alerts.filter((a) => a.severity === "High").length} icon={Shield} iconColor="text-warning" valueColor="text-warning" />
        <MetricCard title="Under Investigation" value={alerts.filter((a) => a.status === "Investigating").length} icon={Activity} iconColor="text-info" valueColor="text-info" />
        <MetricCard title="Resolved Today" value={alerts.filter((a) => a.status === "Resolved").length} icon={Target} iconColor="text-success" valueColor="text-success" />
      </div>

      <Card className="p-6 border-border bg-card shadow-lg">
        <div className="flex items-center gap-4 mb-6">
          <SearchInput value={searchTerm} onChange={setSearchTerm} placeholder="Search alerts by name, ID, or IOC..." className="flex-1" />
          <Select value={severityFilter} onValueChange={setSeverityFilter}>
            <SelectTrigger className="w-48 bg-background border-border">
              <Filter className="w-4 h-4 mr-2" />
              <SelectValue placeholder="Filter by severity" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Severities</SelectItem>
              <SelectItem value="critical">Critical</SelectItem>
              <SelectItem value="high">High</SelectItem>
              <SelectItem value="medium">Medium</SelectItem>
              <SelectItem value="low">Low</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="border-b border-border">
              <tr>
                <th className="text-left py-4 px-4 text-xs font-semibold text-muted-foreground uppercase">Alert ID</th>
                <th className="text-left py-4 px-4 text-xs font-semibold text-muted-foreground uppercase">Threat Name</th>
                <th className="text-left py-4 px-4 text-xs font-semibold text-muted-foreground uppercase">Severity</th>
                <th className="text-left py-4 px-4 text-xs font-semibold text-muted-foreground uppercase">MITRE Technique</th>
                <th className="text-left py-4 px-4 text-xs font-semibold text-muted-foreground uppercase">Status</th>
                <th className="text-left py-4 px-4 text-xs font-semibold text-muted-foreground uppercase">Source</th>
                <th className="text-left py-4 px-4 text-xs font-semibold text-muted-foreground uppercase">Timestamp</th>
                <th className="text-left py-4 px-4 text-xs font-semibold text-muted-foreground uppercase">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {alerts.map((alert, index) => (
                <tr key={alert.id} className="hover:bg-muted/20 transition-colors animate-fade-in" style={{ animationDelay: `${index * 50}ms` }}>
                  <td className="py-4 px-4"><span className="font-mono text-sm text-foreground">{alert.id}</span></td>
                  <td className="py-4 px-4">
                    <div className="flex flex-col">
                      <span className="text-foreground font-medium">{alert.name}</span>
                      <span className="text-xs text-muted-foreground font-mono">{alert.ioc}</span>
                    </div>
                  </td>
                  <td className="py-4 px-4"><SeverityBadge severity={alert.severity} /></td>
                  <td className="py-4 px-4"><Badge variant="outline" className="font-mono text-xs">{alert.technique}</Badge></td>
                  <td className="py-4 px-4"><StatusBadge status={alert.status} /></td>
                  <td className="py-4 px-4"><span className="text-muted-foreground text-sm">{alert.source}</span></td>
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-2 text-muted-foreground text-sm">
                      <Clock className="w-3 h-3" />{alert.timestamp}
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <Button variant="outline" size="sm" className="bg-background hover:bg-muted/50">Investigate</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      <AlertTimeline items={timelineItems} title="Alert Timeline (Last 24 Hours)" />
    </div>
  );
};

export default Threats;
