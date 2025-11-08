import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { AlertTriangle, Shield, Search, Filter, Clock, Target, Activity } from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

interface Alert {
  id: string;
  name: string;
  severity: "Critical" | "High" | "Medium" | "Low";
  technique: string;
  timestamp: string;
  status: "Active" | "Investigating" | "Resolved" | "False Positive";
  source: string;
  ioc: string;
}

const alerts: Alert[] = [
  {
    id: "ALT-2025-001",
    name: "Ransomware Encryption Attempt",
    severity: "Critical",
    technique: "T1486",
    timestamp: "2025-11-08 14:23:45",
    status: "Active",
    source: "Endpoint-WS-042",
    ioc: "malware.exe (SHA256: 7d8f...)",
  },
  {
    id: "ALT-2025-002",
    name: "Lateral Movement Detected",
    severity: "High",
    technique: "T1021",
    timestamp: "2025-11-08 13:15:22",
    status: "Investigating",
    source: "Endpoint-WS-031",
    ioc: "192.168.1.45:445",
  },
  {
    id: "ALT-2025-003",
    name: "Suspicious PowerShell Execution",
    severity: "High",
    technique: "T1059.001",
    timestamp: "2025-11-08 12:08:11",
    status: "Investigating",
    source: "Endpoint-WS-089",
    ioc: "powershell.exe -enc ...",
  },
  {
    id: "ALT-2025-004",
    name: "Privilege Escalation Attempt",
    severity: "Medium",
    technique: "T1068",
    timestamp: "2025-11-08 11:42:33",
    status: "Resolved",
    source: "Endpoint-SRV-015",
    ioc: "exploit.dll",
  },
  {
    id: "ALT-2025-005",
    name: "Credential Dumping Activity",
    severity: "Critical",
    technique: "T1003",
    timestamp: "2025-11-08 10:55:18",
    status: "Active",
    source: "Endpoint-WS-067",
    ioc: "mimikatz.exe",
  },
];

const severityColors = {
  Critical: "bg-critical/10 text-critical border-critical/30",
  High: "bg-warning/10 text-warning border-warning/30",
  Medium: "bg-info/10 text-info border-info/30",
  Low: "bg-muted text-muted-foreground border-border",
};

const statusColors = {
  Active: "bg-critical/10 text-critical border-critical/30",
  Investigating: "bg-warning/10 text-warning border-warning/30",
  Resolved: "bg-success/10 text-success border-success/30",
  "False Positive": "bg-muted text-muted-foreground border-border",
};

const Threats = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [severityFilter, setSeverityFilter] = useState("all");

  return (
    <div className="space-y-6 animate-fade-in">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Dashboard</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Threats & Alerts</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-display font-bold text-foreground">Threats & Alerts</h1>
          <p className="text-lg text-muted-foreground mt-2">
            Real-time threat detection and alert management
          </p>
        </div>
        <Badge variant="outline" className="bg-critical/10 text-critical border-critical/30 text-sm px-4 py-2">
          <AlertTriangle className="w-4 h-4 mr-2" />
          {alerts.filter((a) => a.status === "Active").length} Active Alerts
        </Badge>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="p-6 border-border bg-gradient-to-br from-card/80 to-card/60">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-muted-foreground text-sm">Critical Alerts</p>
              <p className="text-3xl font-bold text-critical mt-2">
                {alerts.filter((a) => a.severity === "Critical").length}
              </p>
            </div>
            <AlertTriangle className="w-8 h-8 text-critical" />
          </div>
        </Card>

        <Card className="p-6 border-border bg-gradient-to-br from-card/80 to-card/60">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-muted-foreground text-sm">High Priority</p>
              <p className="text-3xl font-bold text-warning mt-2">
                {alerts.filter((a) => a.severity === "High").length}
              </p>
            </div>
            <Shield className="w-8 h-8 text-warning" />
          </div>
        </Card>

        <Card className="p-6 border-border bg-gradient-to-br from-card/80 to-card/60">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-muted-foreground text-sm">Under Investigation</p>
              <p className="text-3xl font-bold text-info mt-2">
                {alerts.filter((a) => a.status === "Investigating").length}
              </p>
            </div>
            <Activity className="w-8 h-8 text-info" />
          </div>
        </Card>

        <Card className="p-6 border-border bg-gradient-to-br from-card/80 to-card/60">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-muted-foreground text-sm">Resolved Today</p>
              <p className="text-3xl font-bold text-success mt-2">
                {alerts.filter((a) => a.status === "Resolved").length}
              </p>
            </div>
            <Target className="w-8 h-8 text-success" />
          </div>
        </Card>
      </div>

      <Card className="p-6 border-border bg-card shadow-lg">
        <div className="flex items-center gap-4 mb-6">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="Search alerts by name, ID, or IOC..."
              className="pl-10 bg-background border-border"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
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
                <tr
                  key={alert.id}
                  className="hover:bg-muted/20 transition-colors animate-fade-in"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <td className="py-4 px-4">
                    <span className="font-mono text-sm text-foreground">{alert.id}</span>
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex flex-col">
                      <span className="text-foreground font-medium">{alert.name}</span>
                      <span className="text-xs text-muted-foreground font-mono">{alert.ioc}</span>
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <Badge variant="outline" className={`${severityColors[alert.severity]} font-medium text-xs px-3 py-1`}>
                      {alert.severity}
                    </Badge>
                  </td>
                  <td className="py-4 px-4">
                    <Badge variant="outline" className="font-mono text-xs">
                      {alert.technique}
                    </Badge>
                  </td>
                  <td className="py-4 px-4">
                    <Badge variant="outline" className={`${statusColors[alert.status]} text-xs px-3 py-1`}>
                      {alert.status}
                    </Badge>
                  </td>
                  <td className="py-4 px-4">
                    <span className="text-muted-foreground text-sm">{alert.source}</span>
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-2 text-muted-foreground text-sm">
                      <Clock className="w-3 h-3" />
                      {alert.timestamp}
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <Button variant="outline" size="sm" className="bg-background hover:bg-muted/50">
                      Investigate
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      <Card className="p-6 border-border bg-card shadow-lg">
        <h3 className="text-xl font-semibold text-foreground mb-6">Alert Timeline (Last 24 Hours)</h3>
        <div className="relative">
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-border"></div>
          <div className="space-y-6 pl-12">
            {alerts.slice(0, 3).map((alert, index) => (
              <div key={alert.id} className="relative animate-slide-in" style={{ animationDelay: `${index * 100}ms` }}>
                <div className={`absolute -left-[2.6rem] w-6 h-6 rounded-full border-2 ${
                  alert.severity === "Critical" ? "bg-critical border-critical" : 
                  alert.severity === "High" ? "bg-warning border-warning" : "bg-info border-info"
                }`}></div>
                <Card className="p-4 border-border bg-muted/30">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <p className="font-semibold text-foreground">{alert.name}</p>
                      <p className="text-sm text-muted-foreground">{alert.source}</p>
                    </div>
                    <Badge variant="outline" className={severityColors[alert.severity]}>
                      {alert.severity}
                    </Badge>
                  </div>
                  <p className="text-xs text-muted-foreground">{alert.timestamp}</p>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Threats;
