import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Monitor, Activity, AlertTriangle, CheckCircle, Cpu, HardDrive, Wifi } from "lucide-react";
import {
  Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { MetricCard } from "@/components/MetricCard";
import { SearchInput } from "@/components/SearchInput";
import { STATUS_COLORS, AGENT_STATUS_COLORS } from "@/lib/constants";

interface Device {
  id: string;
  name: string;
  type: "Workstation" | "Server" | "Laptop";
  status: "Protected" | "At Risk" | "Offline";
  agent: "Active" | "Outdated" | "Disconnected";
  os: string;
  ip: string;
  cpu: number;
  ram: number;
  network: number;
  vulnerabilities: number;
  lastSeen: string;
}

const devices: Device[] = [
  { id: "EP-WS-042", name: "DESKTOP-SALES-01", type: "Workstation", status: "Protected", agent: "Active", os: "Windows 11 Pro", ip: "192.168.1.42", cpu: 45, ram: 68, network: 25, vulnerabilities: 0, lastSeen: "2 mins ago" },
  { id: "EP-SRV-015", name: "SRV-DATABASE-01", type: "Server", status: "At Risk", agent: "Active", os: "Windows Server 2022", ip: "192.168.1.15", cpu: 82, ram: 91, network: 78, vulnerabilities: 3, lastSeen: "1 min ago" },
  { id: "EP-LT-089", name: "LAPTOP-DEV-089", type: "Laptop", status: "Protected", agent: "Active", os: "Windows 11 Pro", ip: "192.168.1.89", cpu: 32, ram: 55, network: 15, vulnerabilities: 0, lastSeen: "5 mins ago" },
  { id: "EP-WS-067", name: "DESKTOP-IT-067", type: "Workstation", status: "At Risk", agent: "Outdated", os: "Windows 10 Pro", ip: "192.168.1.67", cpu: 15, ram: 42, network: 8, vulnerabilities: 2, lastSeen: "1 hour ago" },
  { id: "EP-WS-031", name: "DESKTOP-HR-031", type: "Workstation", status: "Offline", agent: "Disconnected", os: "Windows 11 Pro", ip: "192.168.1.31", cpu: 0, ram: 0, network: 0, vulnerabilities: 1, lastSeen: "3 hours ago" },
];

const Devices = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="space-y-6 animate-fade-in">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem><BreadcrumbLink href="/">Dashboard</BreadcrumbLink></BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem><BreadcrumbPage>Devices</BreadcrumbPage></BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-display font-bold text-foreground">Devices</h1>
          <p className="text-lg text-muted-foreground mt-2">Endpoint management and monitoring</p>
        </div>
        <Button className="bg-primary hover:bg-primary/90">
          <Monitor className="w-4 h-4 mr-2" />Add Device
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <MetricCard title="Total Endpoints" value={devices.length} icon={Monitor} iconColor="text-primary" />
        <MetricCard title="Protected" value={devices.filter((d) => d.status === "Protected").length} icon={CheckCircle} iconColor="text-success" valueColor="text-success" />
        <MetricCard title="At Risk" value={devices.filter((d) => d.status === "At Risk").length} icon={AlertTriangle} iconColor="text-warning" valueColor="text-warning" />
        <MetricCard title="Offline" value={devices.filter((d) => d.status === "Offline").length} icon={Activity} iconColor="text-muted-foreground" valueColor="text-muted-foreground" />
      </div>

      <Card className="p-6 border-border bg-card shadow-lg">
        <div className="mb-6">
          <SearchInput value={searchTerm} onChange={setSearchTerm} placeholder="Search devices by name, IP, or ID..." />
        </div>

        <div className="space-y-4">
          {devices.map((device, index) => (
            <Card key={device.id} className="p-6 border-border bg-muted/30 hover:bg-muted/50 transition-colors animate-fade-in" style={{ animationDelay: `${index * 50}ms` }}>
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <Monitor className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">{device.name}</h3>
                    <div className="flex items-center gap-3 mt-1">
                      <span className="text-sm text-muted-foreground font-mono">{device.id}</span>
                      <span className="text-sm text-muted-foreground">•</span>
                      <span className="text-sm text-muted-foreground">{device.ip}</span>
                      <span className="text-sm text-muted-foreground">•</span>
                      <span className="text-sm text-muted-foreground">{device.os}</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="outline" className={STATUS_COLORS[device.status]}>{device.status}</Badge>
                  <Badge variant="outline" className={AGENT_STATUS_COLORS[device.agent]}>Agent: {device.agent}</Badge>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
                {[
                  { icon: Cpu, label: "CPU Usage", value: device.cpu },
                  { icon: HardDrive, label: "RAM Usage", value: device.ram },
                  { icon: Wifi, label: "Network", value: device.network },
                ].map((metric) => (
                  <div key={metric.label}>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <metric.icon className="w-4 h-4 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">{metric.label}</span>
                      </div>
                      <span className="text-sm font-medium text-foreground">{metric.value}%</span>
                    </div>
                    <Progress value={metric.value} className="h-2" />
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-between mt-4 pt-4 border-t border-border">
                <div className="flex items-center gap-6">
                  <div className="flex items-center gap-2">
                    <AlertTriangle className={`w-4 h-4 ${device.vulnerabilities > 0 ? "text-warning" : "text-muted-foreground"}`} />
                    <span className="text-sm text-muted-foreground">{device.vulnerabilities} {device.vulnerabilities === 1 ? "Vulnerability" : "Vulnerabilities"}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Activity className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">Last seen: {device.lastSeen}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm" className="bg-background hover:bg-muted/50">View Details</Button>
                  <Button variant="outline" size="sm" className="bg-background hover:bg-muted/50">Scan Now</Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default Devices;
