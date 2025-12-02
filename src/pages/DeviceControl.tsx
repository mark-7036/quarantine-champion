import { Usb, HardDrive, Bluetooth, Disc, Monitor, Mic, Camera, Printer } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { StatCard } from "@/components/StatCard";
import { Switch } from "@/components/ui/switch";

const DeviceControl = () => {
  const connectedDevices = [
    { name: "Kingston USB Drive", type: "USB Storage", user: "john.smith", status: "Blocked", risk: "High" },
    { name: "Logitech Webcam", type: "Camera", user: "jane.doe", status: "Allowed", risk: "Low" },
    { name: "Bluetooth Keyboard", type: "Bluetooth", user: "admin", status: "Allowed", risk: "Low" },
    { name: "External HDD", type: "USB Storage", user: "contractor", status: "Blocked", risk: "High" },
  ];

  const devicePolicies = [
    { device: "USB Storage", icon: Usb, policy: "Block All", exceptions: 3 },
    { device: "USB Peripherals", icon: HardDrive, policy: "Allow", exceptions: 0 },
    { device: "Bluetooth", icon: Bluetooth, policy: "Controlled", exceptions: 5 },
    { device: "CD/DVD", icon: Disc, policy: "Block All", exceptions: 0 },
    { device: "External Monitors", icon: Monitor, policy: "Allow", exceptions: 0 },
    { device: "Microphones", icon: Mic, policy: "Controlled", exceptions: 12 },
    { device: "Webcams", icon: Camera, policy: "Controlled", exceptions: 8 },
    { device: "Printers", icon: Printer, policy: "Allow", exceptions: 2 },
  ];

  const recentEvents = [
    { device: "USB Drive", action: "Connection Blocked", user: "contractor", timestamp: "14:32:01" },
    { device: "Bluetooth Device", action: "Paired Successfully", user: "admin", timestamp: "14:28:45" },
    { device: "External HDD", action: "Connection Blocked", user: "john.smith", timestamp: "14:25:12" },
    { device: "Webcam", action: "Access Granted", user: "jane.doe", timestamp: "14:20:33" },
  ];

  return (
    <div className="space-y-8 animate-fade-in">
      <div>
        <h1 className="text-4xl font-display font-bold mb-3 text-foreground">Device Control</h1>
        <p className="text-lg text-muted-foreground">USB, removable media, and peripheral device management</p>
      </div>

      <div className="grid gap-6 md:grid-cols-4">
        <StatCard title="Devices Blocked" value="234" change="This week" icon={Usb} />
        <StatCard title="Connected Now" value="89" change="Monitored" icon={HardDrive} />
        <StatCard title="Policies" value="8" change="Active" icon={Monitor} />
        <StatCard title="Exceptions" value="30" change="Configured" icon={Bluetooth} />
      </div>

      <Card className="p-6 bg-card border-border shadow-lg">
        <h3 className="text-xl font-semibold mb-6 text-foreground">Device Policies</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {devicePolicies.map((device, idx) => (
            <div key={idx} className="p-4 rounded-lg bg-muted/50 border border-border hover:bg-muted transition-colors">
              <div className="flex items-center gap-3 mb-3">
                <device.icon className="w-5 h-5 text-primary" />
                <span className="font-medium text-foreground">{device.device}</span>
              </div>
              <div className="flex items-center justify-between">
                <Badge variant={device.policy === "Block All" ? "destructive" : device.policy === "Controlled" ? "outline" : "default"} className={device.policy === "Allow" ? "bg-success" : ""}>
                  {device.policy}
                </Badge>
                {device.exceptions > 0 && (
                  <span className="text-xs text-muted-foreground">{device.exceptions} exceptions</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </Card>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card className="p-6 bg-card border-border shadow-lg">
          <h3 className="text-xl font-semibold mb-6 text-foreground">Connected Devices</h3>
          <div className="space-y-3">
            {connectedDevices.map((device, idx) => (
              <div key={idx} className="p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors border border-border">
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <span className="font-medium text-foreground">{device.name}</span>
                    <p className="text-sm text-muted-foreground">{device.type} • {device.user}</p>
                  </div>
                  <Badge variant={device.status === "Blocked" ? "destructive" : "default"} className={device.status === "Allowed" ? "bg-success" : ""}>
                    {device.status}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-6 bg-card border-border shadow-lg">
          <h3 className="text-xl font-semibold mb-6 text-foreground">Recent Events</h3>
          <div className="space-y-3">
            {recentEvents.map((event, idx) => (
              <div key={idx} className="p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors border border-border">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium text-foreground">{event.device}</span>
                  <span className="text-xs text-muted-foreground">{event.timestamp}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">{event.action}</span>
                  <span className="text-xs text-muted-foreground">{event.user}</span>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default DeviceControl;