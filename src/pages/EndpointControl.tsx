import { Monitor, Shield, Usb, HardDrive, Activity, AlertTriangle } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { StatCard } from "@/components/StatCard";

const EndpointControl = () => {
  const endpoints = [
    { name: "Endpoint-001", status: "Protected", kernel: "Active", memory: "Protected", usb: "Blocked", isolated: false },
    { name: "Endpoint-045", status: "Isolated", kernel: "Active", memory: "Protected", usb: "Blocked", isolated: true },
    { name: "Endpoint-102", status: "Protected", kernel: "Active", memory: "Protected", usb: "Allowed", isolated: false },
    { name: "Endpoint-203", status: "At Risk", kernel: "Inactive", memory: "Vulnerable", usb: "Allowed", isolated: false },
  ];

  return (
    <div className="space-y-8 animate-fade-in">
      <div>
        <h1 className="text-4xl font-display font-bold mb-3 text-foreground">
          Endpoint Agent Control
        </h1>
        <p className="text-lg text-muted-foreground">
          Kernel-level monitoring, memory protection, USB control, and isolation
        </p>
      </div>

      {/* Stats */}
      <div className="grid gap-6 md:grid-cols-4">
        <StatCard
          title="Total Endpoints"
          value="487"
          change="+12"
          icon={Monitor}
        />
        <StatCard
          title="Protected"
          value="485"
          change="99.6%"
          icon={Shield}
        />
        <StatCard
          title="Isolated"
          value="1"
          change="Critical"
          icon={AlertTriangle}
        />
        <StatCard
          title="At Risk"
          value="1"
          change="Action Needed"
          icon={AlertTriangle}
        />
      </div>

      {/* Global Controls */}
      <Card className="p-6 bg-card border-border shadow-lg">
        <h3 className="text-xl font-semibold mb-6 text-foreground">Global Protection Controls</h3>
        <div className="grid grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
              <div className="flex items-center gap-3">
                <Shield className="w-5 h-5 text-primary" />
                <div>
                  <div className="font-semibold text-foreground">Kernel-Level Monitoring</div>
                  <div className="text-sm text-muted-foreground">Deep system inspection</div>
                </div>
              </div>
              <Switch defaultChecked />
            </div>
            <div className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
              <div className="flex items-center gap-3">
                <HardDrive className="w-5 h-5 text-primary" />
                <div>
                  <div className="font-semibold text-foreground">Memory Protection</div>
                  <div className="text-sm text-muted-foreground">DEP, ASLR, MPU</div>
                </div>
              </div>
              <Switch defaultChecked />
            </div>
            <div className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
              <div className="flex items-center gap-3">
                <Activity className="w-5 h-5 text-primary" />
                <div>
                  <div className="font-semibold text-foreground">Real-Time Scanning</div>
                  <div className="text-sm text-muted-foreground">Continuous monitoring</div>
                </div>
              </div>
              <Switch defaultChecked />
            </div>
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
              <div className="flex items-center gap-3">
                <Usb className="w-5 h-5 text-primary" />
                <div>
                  <div className="font-semibold text-foreground">USB Device Control</div>
                  <div className="text-sm text-muted-foreground">Block unauthorized devices</div>
                </div>
              </div>
              <Switch defaultChecked />
            </div>
            <div className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
              <div className="flex items-center gap-3">
                <Shield className="w-5 h-5 text-primary" />
                <div>
                  <div className="font-semibold text-foreground">Anti-Tamper Protection</div>
                  <div className="text-sm text-muted-foreground">Prevent agent disabling</div>
                </div>
              </div>
              <Switch defaultChecked />
            </div>
            <div className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
              <div className="flex items-center gap-3">
                <AlertTriangle className="w-5 h-5 text-primary" />
                <div>
                  <div className="font-semibold text-foreground">Auto-Isolation</div>
                  <div className="text-sm text-muted-foreground">Quarantine on threat</div>
                </div>
              </div>
              <Switch />
            </div>
          </div>
        </div>
      </Card>

      {/* Endpoint List */}
      <Card className="p-6 bg-card border-border shadow-lg">
        <h3 className="text-xl font-semibold mb-6 text-foreground">Managed Endpoints</h3>
        <div className="space-y-3">
          {endpoints.map((endpoint, index) => (
            <div key={index} className={`p-4 rounded-lg ${endpoint.isolated ? 'bg-red-500/10 border border-red-500/30' : 'bg-muted/50'} transition-colors`}>
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <Monitor className="w-5 h-5 text-primary" />
                  <div>
                    <div className="font-semibold text-foreground">{endpoint.name}</div>
                    <Badge 
                      variant={endpoint.status === "Protected" ? "secondary" : endpoint.status === "Isolated" ? "destructive" : "outline"}
                      className={endpoint.status === "Protected" ? "bg-green-500/20 text-green-400" : ""}
                    >
                      {endpoint.status}
                    </Badge>
                  </div>
                </div>
                <div className="flex gap-2">
                  {endpoint.isolated ? (
                    <Button size="sm" variant="outline">
                      <Shield className="w-4 h-4 mr-2" />
                      Release Isolation
                    </Button>
                  ) : (
                    <Button size="sm" variant="destructive">
                      <AlertTriangle className="w-4 h-4 mr-2" />
                      Isolate
                    </Button>
                  )}
                </div>
              </div>
              <div className="grid grid-cols-4 gap-4 text-sm">
                <div>
                  <span className="text-muted-foreground">Kernel Monitor:</span>
                  <span className={`ml-2 font-medium ${endpoint.kernel === "Active" ? "text-green-400" : "text-red-400"}`}>
                    {endpoint.kernel}
                  </span>
                </div>
                <div>
                  <span className="text-muted-foreground">Memory:</span>
                  <span className={`ml-2 font-medium ${endpoint.memory === "Protected" ? "text-green-400" : "text-red-400"}`}>
                    {endpoint.memory}
                  </span>
                </div>
                <div>
                  <span className="text-muted-foreground">USB:</span>
                  <span className={`ml-2 font-medium ${endpoint.usb === "Blocked" ? "text-green-400" : "text-yellow-400"}`}>
                    {endpoint.usb}
                  </span>
                </div>
                <div>
                  <span className="text-muted-foreground">Status:</span>
                  <span className={`ml-2 font-medium ${endpoint.isolated ? "text-red-400" : "text-green-400"}`}>
                    {endpoint.isolated ? "Isolated" : "Connected"}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default EndpointControl;
