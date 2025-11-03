import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Shield, Globe, Lock, FileSearch, Cpu, Brain, HardDrive, Box, CheckCircle, XCircle } from "lucide-react";
import { StatCard } from "@/components/StatCard";
import { Progress } from "@/components/ui/progress";

const protectionFeatures = [
  {
    icon: Shield,
    title: "Real-time Protection",
    description: "Continuously monitors for threats and malicious activity",
    enabled: true,
  },
  {
    icon: Globe,
    title: "Web Protection",
    description: "Blocks malicious websites and phishing attempts",
    enabled: true,
  },
  {
    icon: Lock,
    title: "Ransomware Protection",
    description: "Protects important files from unauthorized encryption",
    enabled: true,
  },
  {
    icon: FileSearch,
    title: "Behavior Monitoring",
    description: "Detects suspicious program behavior and activity patterns",
    enabled: false,
  },
];

const Protection = () => {
  return (
    <div className="space-y-8 animate-fade-in">
      <div className="space-y-3">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-primary/10 border border-primary/20">
            <Shield className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h1 className="text-4xl font-display font-bold text-foreground tracking-tight">Protection</h1>
            <p className="text-muted-foreground mt-1 text-base">
              Configure your security settings and protection layers
            </p>
          </div>
        </div>
      </div>

      <div className="grid gap-5 max-w-4xl">
        {protectionFeatures.map((feature, index) => (
          <Card 
            key={feature.title}
            className="border-border bg-gradient-to-br from-card/80 to-card/60 backdrop-blur-xl shadow-lg hover:shadow-xl transition-all duration-300 animate-slide-in"
            style={{ 
              boxShadow: 'var(--shadow-elevated)',
              animationDelay: `${index * 60}ms` 
            }}
          >
            <div className="p-7">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-5">
                  <div className="p-3.5 rounded-xl bg-primary/10 border border-primary/20">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-display font-semibold text-foreground text-lg">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground max-w-md leading-relaxed">{feature.description}</p>
                  </div>
                </div>
                <Switch 
                  defaultChecked={feature.enabled} 
                  className="data-[state=checked]:bg-success"
                />
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* TPM-Based System Integrity */}
      <Card className="p-8 bg-gradient-to-br from-card/80 to-card/60 backdrop-blur-xl border-border shadow-lg" style={{ boxShadow: 'var(--shadow-elevated)' }}>
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <Lock className="w-6 h-6 text-info" />
            <h3 className="text-xl font-semibold text-foreground">TPM-Based System Integrity</h3>
          </div>
          <Badge variant="outline" className="bg-success/10 text-success border-success/30">Enabled</Badge>
        </div>
        <div className="space-y-6">
          <div className="flex items-center justify-between p-4 bg-muted/20 rounded-lg border border-border">
            <div>
              <p className="text-sm font-medium text-foreground">Integrity Score</p>
              <p className="text-2xl font-bold text-success mt-1">98.7%</p>
            </div>
            <Button className="bg-primary hover:bg-primary/90">Verify Integrity</Button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Protection;
