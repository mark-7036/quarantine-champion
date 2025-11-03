import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Usb, Shield, AlertTriangle, CheckCircle } from "lucide-react";
import { StatCard } from "@/components/StatCard";

export default function USBScan() {
  const devices = [
    { name: "SanDisk USB 3.0", capacity: "64 GB", status: "Scanned", threats: 0, lastScan: "2 min ago" },
    { name: "Kingston DataTraveler", capacity: "128 GB", status: "Blocked", threats: 2, lastScan: "15 min ago" },
    { name: "Samsung T5 SSD", capacity: "500 GB", status: "Scanned", threats: 0, lastScan: "1 hour ago" },
  ];

  const scanHistory = [
    { device: "SanDisk USB 3.0", files: 1247, threats: 0, date: "2025-11-03 14:23", duration: "12s" },
    { device: "Kingston DataTraveler", files: 892, threats: 2, date: "2025-11-03 13:45", duration: "8s" },
    { device: "WD My Passport", files: 3456, threats: 0, date: "2025-11-03 09:12", duration: "34s" },
  ];

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="space-y-3">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-primary/10 border border-primary/20">
            <Usb className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h1 className="text-4xl font-display font-bold text-foreground tracking-tight">USB Auto-Scan</h1>
            <p className="text-muted-foreground mt-1 text-base">
              Automatic malware scanning for USB and external devices
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <StatCard
          title="Devices Scanned"
          value="47"
          change="This week"
          changeType="neutral"
          icon={Usb}
          iconColor="text-info"
        />
        <StatCard
          title="Threats Found"
          value="5"
          change="All quarantined"
          changeType="negative"
          icon={AlertTriangle}
          iconColor="text-critical"
        />
        <StatCard
          title="Auto-Scan Status"
          value="Active"
          change="Real-time"
          changeType="positive"
          icon={Shield}
          iconColor="text-success"
        />
        <StatCard
          title="Clean Devices"
          value="42"
          change="89% success rate"
          changeType="positive"
          icon={CheckCircle}
          iconColor="text-success"
        />
      </div>

      <Card className="p-8 bg-gradient-to-br from-card/80 to-card/60 backdrop-blur-xl border-border shadow-lg" style={{ boxShadow: 'var(--shadow-elevated)' }}>
        <h3 className="text-xl font-semibold text-foreground mb-6">Auto-Scan Settings</h3>
        
        <div className="grid gap-5">
          {[
            { icon: Shield, title: "Automatic Scan on Connect", description: "Scan USB devices immediately when plugged in", enabled: true },
            { icon: AlertTriangle, title: "Block Suspicious Devices", description: "Prevent access to devices with detected threats", enabled: true },
            { icon: Usb, title: "Deep Scan Mode", description: "Perform thorough scan of all files and folders", enabled: false },
            { icon: CheckCircle, title: "Auto-Quarantine Threats", description: "Automatically isolate detected malware", enabled: true },
          ].map((feature, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-5 bg-muted/20 rounded-lg border border-border animate-slide-in"
              style={{ animationDelay: `${index * 60}ms` }}
            >
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-lg bg-primary/10 border border-primary/20">
                  <feature.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">{feature.title}</h4>
                  <p className="text-sm text-muted-foreground mt-0.5">{feature.description}</p>
                </div>
              </div>
              <Switch defaultChecked={feature.enabled} className="data-[state=checked]:bg-success" />
            </div>
          ))}
        </div>
      </Card>

      <Card className="p-8 bg-gradient-to-br from-card/80 to-card/60 backdrop-blur-xl border-border shadow-lg" style={{ boxShadow: 'var(--shadow-elevated)' }}>
        <h3 className="text-xl font-semibold text-foreground mb-6">Connected Devices</h3>
        <div className="overflow-hidden rounded-lg border border-border">
          <table className="w-full">
            <thead className="bg-muted/30">
              <tr>
                <th className="text-left py-3 px-4 text-xs font-semibold text-muted-foreground uppercase">Device</th>
                <th className="text-left py-3 px-4 text-xs font-semibold text-muted-foreground uppercase">Capacity</th>
                <th className="text-left py-3 px-4 text-xs font-semibold text-muted-foreground uppercase">Status</th>
                <th className="text-left py-3 px-4 text-xs font-semibold text-muted-foreground uppercase">Threats</th>
                <th className="text-left py-3 px-4 text-xs font-semibold text-muted-foreground uppercase">Last Scan</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border bg-card/50">
              {devices.map((device, index) => (
                <tr key={index} className="hover:bg-muted/20 transition-colors animate-fade-in" style={{ animationDelay: `${index * 50}ms` }}>
                  <td className="py-3 px-4 text-sm text-foreground font-medium">{device.name}</td>
                  <td className="py-3 px-4 text-sm text-muted-foreground">{device.capacity}</td>
                  <td className="py-3 px-4">
                    <Badge
                      variant="outline"
                      className={
                        device.status === "Scanned"
                          ? "bg-success/10 text-success border-success/30"
                          : "bg-critical/10 text-critical border-critical/30"
                      }
                    >
                      {device.status}
                    </Badge>
                  </td>
                  <td className="py-3 px-4 text-sm text-muted-foreground">{device.threats}</td>
                  <td className="py-3 px-4 text-sm text-muted-foreground">{device.lastScan}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      <Card className="p-8 bg-gradient-to-br from-card/80 to-card/60 backdrop-blur-xl border-border shadow-lg" style={{ boxShadow: 'var(--shadow-elevated)' }}>
        <h3 className="text-xl font-semibold text-foreground mb-6">Scan History</h3>
        <div className="overflow-hidden rounded-lg border border-border">
          <table className="w-full">
            <thead className="bg-muted/30">
              <tr>
                <th className="text-left py-3 px-4 text-xs font-semibold text-muted-foreground uppercase">Device</th>
                <th className="text-left py-3 px-4 text-xs font-semibold text-muted-foreground uppercase">Files</th>
                <th className="text-left py-3 px-4 text-xs font-semibold text-muted-foreground uppercase">Threats</th>
                <th className="text-left py-3 px-4 text-xs font-semibold text-muted-foreground uppercase">Date</th>
                <th className="text-left py-3 px-4 text-xs font-semibold text-muted-foreground uppercase">Duration</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border bg-card/50">
              {scanHistory.map((scan, index) => (
                <tr key={index} className="hover:bg-muted/20 transition-colors animate-fade-in" style={{ animationDelay: `${index * 50}ms` }}>
                  <td className="py-3 px-4 text-sm text-foreground font-medium">{scan.device}</td>
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
                  <td className="py-3 px-4 text-sm text-muted-foreground">{scan.date}</td>
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
