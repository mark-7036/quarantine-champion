import { Cpu, HardDrive, Gauge, Activity, Shield } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { StatCard } from "@/components/StatCard";

const HardwareTelemetry = () => {
  const hpcMetrics = [
    { metric: "CPU Cycles", value: "2.45 GHz", status: "Normal", anomaly: false },
    { metric: "Cache Misses", value: "2.3%", status: "Normal", anomaly: false },
    { metric: "Cache Hits", value: "97.7%", status: "Optimal", anomaly: false },
    { metric: "Branch Mispredictions", value: "8.2%", status: "Anomaly", anomaly: true },
    { metric: "TLB Misses", value: "0.4%", status: "Normal", anomaly: false },
    { metric: "Memory Bandwidth", value: "34 GB/s", status: "High", anomaly: true },
  ];

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-display font-bold mb-3 text-foreground">
            Hardware Telemetry
          </h1>
          <p className="text-lg text-muted-foreground">
            Monitor TPM, HPC metrics, hardware counters, and virtualization status
          </p>
        </div>
        <Button className="bg-primary hover:bg-primary/90">
          <Activity className="w-4 h-4 mr-2" />
          Generate Report
        </Button>
      </div>

      {/* Stats */}
      <div className="grid gap-6 md:grid-cols-4">
        <StatCard
          title="TPM Status"
          value="Active"
          change="Healthy"
          icon={Shield}
        />
        <StatCard
          title="CPU Cycles"
          value="2.45 GHz"
          change="Normal"
          icon={Cpu}
        />
        <StatCard
          title="Cache Hit Rate"
          value="97.7%"
          change="+0.3%"
          icon={Gauge}
        />
        <StatCard
          title="HW Anomalies"
          value="2"
          change="Active"
          icon={Activity}
        />
      </div>

      {/* TPM Status */}
      <Card className="p-6 bg-card border-border shadow-lg">
        <h3 className="text-xl font-semibold mb-6 text-foreground">TPM & Secure Boot Status</h3>
        <div className="grid grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="flex justify-between items-center p-4 bg-muted/50 rounded-lg">
              <span className="text-foreground font-medium">TPM Version</span>
              <Badge variant="secondary">2.0</Badge>
            </div>
            <div className="flex justify-between items-center p-4 bg-muted/50 rounded-lg">
              <span className="text-foreground font-medium">TPM Enabled</span>
              <Badge variant="secondary" className="bg-green-500/20 text-green-400">Yes</Badge>
            </div>
            <div className="flex justify-between items-center p-4 bg-muted/50 rounded-lg">
              <span className="text-foreground font-medium">Secure Boot</span>
              <Badge variant="secondary" className="bg-green-500/20 text-green-400">Enabled</Badge>
            </div>
          </div>
          <div className="space-y-4">
            <div className="flex justify-between items-center p-4 bg-muted/50 rounded-lg">
              <span className="text-foreground font-medium">Measured Boot</span>
              <Badge variant="secondary" className="bg-green-500/20 text-green-400">Active</Badge>
            </div>
            <div className="flex justify-between items-center p-4 bg-muted/50 rounded-lg">
              <span className="text-foreground font-medium">Attestation Status</span>
              <Badge variant="secondary">Valid</Badge>
            </div>
            <div className="flex justify-between items-center p-4 bg-muted/50 rounded-lg">
              <span className="text-foreground font-medium">Virtualization</span>
              <Badge variant="secondary" className="bg-green-500/20 text-green-400">VT-x/AMD-V</Badge>
            </div>
          </div>
        </div>
      </Card>

      {/* HPC Metrics */}
      <Card className="p-6 bg-card border-border shadow-lg">
        <h3 className="text-xl font-semibold mb-6 text-foreground">Hardware Performance Counters (HPC)</h3>
        <div className="space-y-3">
          {hpcMetrics.map((item, index) => (
            <div key={index} className={`p-4 rounded-lg ${item.anomaly ? 'bg-red-500/10 border border-red-500/30' : 'bg-muted/50'} transition-colors`}>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Cpu className={`w-5 h-5 ${item.anomaly ? 'text-red-400' : 'text-primary'}`} />
                  <div>
                    <div className="font-semibold text-foreground">{item.metric}</div>
                    <div className="text-2xl font-bold text-primary">{item.value}</div>
                  </div>
                </div>
                <Badge variant={item.anomaly ? "destructive" : "secondary"}>
                  {item.status}
                </Badge>
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Virtualization */}
      <Card className="p-6 bg-card border-border shadow-lg">
        <h3 className="text-xl font-semibold mb-6 text-foreground">Virtualization-Based Security</h3>
        <div className="grid grid-cols-2 gap-4">
          <div className="p-4 bg-muted/50 rounded-lg">
            <div className="text-sm text-muted-foreground mb-2">Hypervisor Status</div>
            <div className="flex items-center gap-2">
              <Badge variant="secondary" className="bg-green-500/20 text-green-400">Running</Badge>
              <span className="text-foreground font-medium">Hyper-V / KVM</span>
            </div>
          </div>
          <div className="p-4 bg-muted/50 rounded-lg">
            <div className="text-sm text-muted-foreground mb-2">Isolated Processes</div>
            <div className="text-2xl font-bold text-primary">8 Active</div>
          </div>
          <div className="p-4 bg-muted/50 rounded-lg">
            <div className="text-sm text-muted-foreground mb-2">Memory Integrity</div>
            <Badge variant="secondary" className="bg-green-500/20 text-green-400">Enabled</Badge>
          </div>
          <div className="p-4 bg-muted/50 rounded-lg">
            <div className="text-sm text-muted-foreground mb-2">Credential Guard</div>
            <Badge variant="secondary" className="bg-green-500/20 text-green-400">Protected</Badge>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default HardwareTelemetry;
