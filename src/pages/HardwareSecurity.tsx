import { Cpu, Shield, HardDrive, Activity } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { StatCard } from "@/components/StatCard";

const HardwareSecurity = () => {
  return (
    <div className="space-y-8 animate-fade-in">
      <div>
        <h1 className="text-4xl font-display font-bold mb-3 text-foreground">
          Hardware Security Module
        </h1>
        <p className="text-lg text-muted-foreground">
          TPM attestation, secure boot, hardware counters, and virtualization controls
        </p>
      </div>

      {/* Stats */}
      <div className="grid gap-6 md:grid-cols-4">
        <StatCard
          title="TPM Status"
          value="Active"
          change="v2.0"
          icon={Shield}
        />
        <StatCard
          title="Secure Boot"
          value="Enabled"
          change="Verified"
          icon={HardDrive}
        />
        <StatCard
          title="Virtualization"
          value="Active"
          change="VT-x/AMD-V"
          icon={Cpu}
        />
        <StatCard
          title="Anomalies"
          value="0"
          change="Healthy"
          icon={Activity}
        />
      </div>

      {/* TPM Attestation */}
      <Card className="p-6 bg-card border-border shadow-lg">
        <h3 className="text-xl font-semibold mb-6 text-foreground">TPM Attestation Results</h3>
        <div className="grid grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="p-4 bg-muted/50 rounded-lg">
              <div className="text-sm text-muted-foreground mb-2">TPM Version</div>
              <div className="text-2xl font-bold text-primary">2.0</div>
            </div>
            <div className="p-4 bg-green-500/10 border border-green-500/30 rounded-lg">
              <div className="text-sm text-muted-foreground mb-2">TPM Status</div>
              <Badge variant="secondary" className="bg-green-500/20 text-green-400">Active & Healthy</Badge>
            </div>
            <div className="p-4 bg-muted/50 rounded-lg">
              <div className="text-sm text-muted-foreground mb-2">Endorsement Key (EK)</div>
              <div className="font-mono text-xs text-foreground">RSA-2048 (Valid)</div>
            </div>
          </div>
          <div className="space-y-4">
            <div className="p-4 bg-muted/50 rounded-lg">
              <div className="text-sm text-muted-foreground mb-2">Platform Configuration Registers (PCR)</div>
              <div className="space-y-1 text-xs font-mono">
                <div className="text-green-400">PCR0: Valid (Firmware)</div>
                <div className="text-green-400">PCR7: Valid (Secure Boot)</div>
                <div className="text-green-400">PCR14: Valid (Boot Loader)</div>
              </div>
            </div>
            <div className="p-4 bg-green-500/10 border border-green-500/30 rounded-lg">
              <div className="text-sm text-muted-foreground mb-2">Attestation Result</div>
              <Badge variant="secondary" className="bg-green-500/20 text-green-400">System Integrity: Verified</Badge>
            </div>
          </div>
        </div>
        <div className="mt-6 flex gap-3">
          <Button variant="outline">
            <Shield className="w-4 h-4 mr-2" />
            Re-Attest
          </Button>
          <Button variant="outline">View Full Report</Button>
        </div>
      </Card>

      {/* Secure Boot */}
      <Card className="p-6 bg-card border-border shadow-lg">
        <h3 className="text-xl font-semibold mb-6 text-foreground">Secure Boot Status</h3>
        <div className="grid grid-cols-3 gap-4">
          <div className="p-4 bg-green-500/10 border border-green-500/30 rounded-lg text-center">
            <Shield className="w-8 h-8 mx-auto mb-2 text-green-400" />
            <div className="font-semibold text-foreground mb-1">Secure Boot</div>
            <Badge variant="secondary" className="bg-green-500/20 text-green-400">Enabled</Badge>
          </div>
          <div className="p-4 bg-green-500/10 border border-green-500/30 rounded-lg text-center">
            <HardDrive className="w-8 h-8 mx-auto mb-2 text-green-400" />
            <div className="font-semibold text-foreground mb-1">Measured Boot</div>
            <Badge variant="secondary" className="bg-green-500/20 text-green-400">Active</Badge>
          </div>
          <div className="p-4 bg-green-500/10 border border-green-500/30 rounded-lg text-center">
            <Cpu className="w-8 h-8 mx-auto mb-2 text-green-400" />
            <div className="font-semibold text-foreground mb-1">UEFI Firmware</div>
            <Badge variant="secondary" className="bg-green-500/20 text-green-400">Signed</Badge>
          </div>
        </div>
      </Card>

      {/* Hardware Counter Anomalies */}
      <Card className="p-6 bg-card border-border shadow-lg">
        <h3 className="text-xl font-semibold mb-6 text-foreground">Hardware Counter Anomaly Detection</h3>
        <div className="space-y-4">
          {[
            { metric: "CPU Cycles", value: "2.45 GHz", baseline: "2.40 GHz", status: "Normal", variance: "+2.1%" },
            { metric: "Cache Miss Rate", value: "2.3%", baseline: "2.5%", status: "Normal", variance: "-8.0%" },
            { metric: "Branch Mispredictions", value: "8.2%", baseline: "5.0%", status: "Anomaly", variance: "+64.0%" },
            { metric: "TLB Misses", value: "0.4%", baseline: "0.3%", status: "Normal", variance: "+33.3%" },
          ].map((metric, index) => (
            <div key={index} className={`p-4 rounded-lg ${metric.status === "Anomaly" ? "bg-red-500/10 border border-red-500/30" : "bg-muted/50"}`}>
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-3">
                  <Activity className={`w-5 h-5 ${metric.status === "Anomaly" ? "text-red-400" : "text-primary"}`} />
                  <div>
                    <div className="font-semibold text-foreground">{metric.metric}</div>
                    <div className="text-sm text-muted-foreground">Current: {metric.value} | Baseline: {metric.baseline}</div>
                  </div>
                </div>
                <div className="text-right">
                  <Badge variant={metric.status === "Anomaly" ? "destructive" : "secondary"}>
                    {metric.status}
                  </Badge>
                  <div className={`text-sm mt-1 ${metric.status === "Anomaly" ? "text-red-400" : "text-muted-foreground"}`}>
                    {metric.variance}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Virtualization-Based Security */}
      <Card className="p-6 bg-card border-border shadow-lg">
        <h3 className="text-xl font-semibold mb-6 text-foreground">Virtualization-Based Sandbox Controls</h3>
        <div className="grid grid-cols-2 gap-6">
          <div className="space-y-3">
            <div className="p-4 bg-muted/50 rounded-lg">
              <div className="text-sm text-muted-foreground mb-2">Hypervisor Status</div>
              <div className="flex items-center gap-2">
                <Badge variant="secondary" className="bg-green-500/20 text-green-400">Running</Badge>
                <span className="text-foreground font-medium">Type-1 Hypervisor</span>
              </div>
            </div>
            <div className="p-4 bg-muted/50 rounded-lg">
              <div className="text-sm text-muted-foreground mb-2">VT-x / AMD-V</div>
              <Badge variant="secondary" className="bg-green-500/20 text-green-400">Enabled</Badge>
            </div>
            <div className="p-4 bg-muted/50 rounded-lg">
              <div className="text-sm text-muted-foreground mb-2">Memory Integrity (HVCI)</div>
              <Badge variant="secondary" className="bg-green-500/20 text-green-400">Active</Badge>
            </div>
          </div>
          <div className="space-y-3">
            <div className="p-4 bg-muted/50 rounded-lg">
              <div className="text-sm text-muted-foreground mb-2">Isolated Sandboxes</div>
              <div className="text-2xl font-bold text-primary">8 Active</div>
            </div>
            <div className="p-4 bg-muted/50 rounded-lg">
              <div className="text-sm text-muted-foreground mb-2">Credential Guard</div>
              <Badge variant="secondary" className="bg-green-500/20 text-green-400">Protected</Badge>
            </div>
            <div className="p-4 bg-muted/50 rounded-lg">
              <div className="text-sm text-muted-foreground mb-2">Device Guard</div>
              <Badge variant="secondary" className="bg-green-500/20 text-green-400">Enforced</Badge>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default HardwareSecurity;
