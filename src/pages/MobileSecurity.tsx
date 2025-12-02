import { Smartphone, Shield, AlertTriangle, Lock, Wifi, MapPin } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { StatCard } from "@/components/StatCard";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";

const MobileSecurity = () => {
  const devices = [
    { name: "iPhone 15 Pro", user: "john.smith", os: "iOS 17.2", status: "Compliant", risk: "Low", enrolled: true },
    { name: "Samsung Galaxy S24", user: "jane.doe", os: "Android 14", status: "At Risk", risk: "High", enrolled: true },
    { name: "iPad Pro", user: "admin", os: "iPadOS 17.2", status: "Compliant", risk: "Low", enrolled: true },
    { name: "Pixel 8", user: "bob.wilson", os: "Android 14", status: "Jailbroken", risk: "Critical", enrolled: true },
  ];

  const threats = [
    { type: "Malicious App", device: "Samsung Galaxy S24", app: "FakeBank.apk", status: "Quarantined" },
    { type: "Phishing Attempt", device: "iPhone 15 Pro", url: "paypa1-login.com", status: "Blocked" },
    { type: "Root Detection", device: "Pixel 8", detail: "SuperSU detected", status: "Alert" },
  ];

  const policies = [
    { name: "Screen Lock Required", compliance: 98, enforced: true },
    { name: "Encryption Enabled", compliance: 100, enforced: true },
    { name: "OS Up-to-date", compliance: 85, enforced: false },
    { name: "No Jailbreak/Root", compliance: 92, enforced: true },
  ];

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-display font-bold mb-3 text-foreground">Mobile Security</h1>
          <p className="text-lg text-muted-foreground">Mobile Threat Defense (MTD) and Mobile Device Management (MDM)</p>
        </div>
        <Button className="bg-primary hover:bg-primary/90">
          <Smartphone className="w-4 h-4 mr-2" />
          Enroll Device
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-4">
        <StatCard title="Enrolled Devices" value="247" change="+12" icon={Smartphone} />
        <StatCard title="Compliant" value="89%" change="+3%" icon={Shield} />
        <StatCard title="Threats Blocked" value="34" change="This week" icon={AlertTriangle} />
        <StatCard title="Apps Vetted" value="1,247" change="Clean" icon={Lock} />
      </div>

      <Card className="p-6 bg-card border-border shadow-lg">
        <h3 className="text-xl font-semibold mb-6 text-foreground">Device Inventory</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-3 px-4 font-semibold text-foreground">Device</th>
                <th className="text-left py-3 px-4 font-semibold text-foreground">User</th>
                <th className="text-left py-3 px-4 font-semibold text-foreground">OS</th>
                <th className="text-left py-3 px-4 font-semibold text-foreground">Status</th>
                <th className="text-left py-3 px-4 font-semibold text-foreground">Risk</th>
              </tr>
            </thead>
            <tbody>
              {devices.map((device, idx) => (
                <tr key={idx} className="border-b border-border hover:bg-muted/50 transition-colors">
                  <td className="py-3 px-4 text-foreground">{device.name}</td>
                  <td className="py-3 px-4 text-muted-foreground">{device.user}</td>
                  <td className="py-3 px-4 text-muted-foreground">{device.os}</td>
                  <td className="py-3 px-4">
                    <Badge variant={device.status === "Compliant" ? "default" : "destructive"} className={device.status === "Compliant" ? "bg-success" : ""}>
                      {device.status}
                    </Badge>
                  </td>
                  <td className="py-3 px-4">
                    <Badge variant={device.risk === "Critical" ? "destructive" : device.risk === "High" ? "outline" : "secondary"}>
                      {device.risk}
                    </Badge>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card className="p-6 bg-card border-border shadow-lg">
          <h3 className="text-xl font-semibold mb-6 text-foreground">Mobile Threats</h3>
          <div className="space-y-3">
            {threats.map((threat, idx) => (
              <div key={idx} className="p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors border border-border">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <span className="font-medium text-foreground">{threat.type}</span>
                    <p className="text-sm text-muted-foreground">{threat.device}</p>
                  </div>
                  <Badge variant={threat.status === "Alert" ? "destructive" : "outline"}>{threat.status}</Badge>
                </div>
                <p className="text-xs font-mono text-muted-foreground">{threat.app || threat.url || threat.detail}</p>
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-6 bg-card border-border shadow-lg">
          <h3 className="text-xl font-semibold mb-6 text-foreground">Policy Compliance</h3>
          <div className="space-y-4">
            {policies.map((policy, idx) => (
              <div key={idx} className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-foreground">{policy.name}</span>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium text-foreground">{policy.compliance}%</span>
                    {policy.enforced && <Badge variant="outline" className="text-xs">Enforced</Badge>}
                  </div>
                </div>
                <Progress value={policy.compliance} className="h-2" />
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default MobileSecurity;