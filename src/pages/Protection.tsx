import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Shield, Globe, Lock, FileSearch } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { FeatureToggleList } from "@/components/FeatureToggleList";

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
      <PageHeader
        title="Protection"
        description="Configure your security settings and protection layers"
        icon={Shield}
      />

      <FeatureToggleList features={protectionFeatures} variant="card" />

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
