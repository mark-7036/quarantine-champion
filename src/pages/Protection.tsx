import { Card } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Shield, Globe, Lock, FileSearch } from "lucide-react";

const Protection = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2">Protection</h1>
        <p className="text-muted-foreground">Configure your security settings</p>
      </div>

      <div className="grid gap-4">
        <Card className="border-border bg-card/50 backdrop-blur-sm p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-lg bg-primary/10">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Real-time Protection</h3>
                <p className="text-sm text-muted-foreground">Continuously monitors for threats</p>
              </div>
            </div>
            <Switch defaultChecked />
          </div>
        </Card>

        <Card className="border-border bg-card/50 backdrop-blur-sm p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-lg bg-primary/10">
                <Globe className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Web Protection</h3>
                <p className="text-sm text-muted-foreground">Blocks malicious websites</p>
              </div>
            </div>
            <Switch defaultChecked />
          </div>
        </Card>

        <Card className="border-border bg-card/50 backdrop-blur-sm p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-lg bg-primary/10">
                <Lock className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Ransomware Protection</h3>
                <p className="text-sm text-muted-foreground">Protects important files from encryption</p>
              </div>
            </div>
            <Switch defaultChecked />
          </div>
        </Card>

        <Card className="border-border bg-card/50 backdrop-blur-sm p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-lg bg-primary/10">
                <FileSearch className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Behavior Monitoring</h3>
                <p className="text-sm text-muted-foreground">Detects suspicious program behavior</p>
              </div>
            </div>
            <Switch />
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Protection;
