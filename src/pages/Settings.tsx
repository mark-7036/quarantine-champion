import { Card } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Settings as SettingsIcon, Shield, Bell, Database, Cloud } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function Settings() {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Settings</h1>
          <p className="text-muted-foreground mt-1">
            Configure protection levels, exclusions, and system preferences
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="p-6 bg-gradient-to-br from-card/80 to-card/60 backdrop-blur-xl border-border">
          <div className="flex items-center gap-3 mb-4">
            <Cloud className="w-5 h-5 text-primary" />
            <h3 className="font-semibold text-foreground">Signature Database</h3>
          </div>
          <div className="space-y-3">
            <div>
              <p className="text-sm text-muted-foreground">Current Version</p>
              <p className="text-lg font-semibold text-foreground">2025.11.02</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Last Updated</p>
              <p className="text-sm text-foreground">Today, 14:30</p>
            </div>
            <Button className="w-full mt-4">Check for Updates</Button>
          </div>
        </Card>

        <Card className="p-6 bg-gradient-to-br from-card/80 to-card/60 backdrop-blur-xl border-border">
          <div className="flex items-center gap-3 mb-4">
            <Database className="w-5 h-5 text-primary" />
            <h3 className="font-semibold text-foreground">Threat Database</h3>
          </div>
          <div className="space-y-3">
            <div>
              <p className="text-sm text-muted-foreground">Total Signatures</p>
              <p className="text-lg font-semibold text-foreground">14,847,392</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Cloud Connected</p>
              <Badge className="bg-success/10 text-success border-success/30">Active</Badge>
            </div>
          </div>
        </Card>

        <Card className="p-6 bg-gradient-to-br from-card/80 to-card/60 backdrop-blur-xl border-border">
          <div className="flex items-center gap-3 mb-4">
            <Shield className="w-5 h-5 text-primary" />
            <h3 className="font-semibold text-foreground">Protection Level</h3>
          </div>
          <div className="space-y-3">
            <Button variant="outline" className="w-full justify-start">
              Low
            </Button>
            <Button variant="outline" className="w-full justify-start">
              Medium
            </Button>
            <Button className="w-full justify-start">High (Current)</Button>
          </div>
        </Card>
      </div>

      <Card className="p-8 bg-gradient-to-br from-card/80 to-card/60 backdrop-blur-xl border-border">
        <h3 className="text-xl font-semibold text-foreground mb-6">Protection Settings</h3>
        <div className="space-y-6">
          <div className="flex items-center justify-between p-4 rounded-lg border border-border bg-background/30">
            <div className="flex-1">
              <h4 className="font-medium text-foreground">Real-time Protection</h4>
              <p className="text-sm text-muted-foreground mt-1">
                Continuously monitor system for threats
              </p>
            </div>
            <Switch defaultChecked />
          </div>

          <div className="flex items-center justify-between p-4 rounded-lg border border-border bg-background/30">
            <div className="flex-1">
              <h4 className="font-medium text-foreground">Cloud-based Protection</h4>
              <p className="text-sm text-muted-foreground mt-1">
                Enhanced detection using cloud intelligence
              </p>
            </div>
            <Switch defaultChecked />
          </div>

          <div className="flex items-center justify-between p-4 rounded-lg border border-border bg-background/30">
            <div className="flex-1">
              <h4 className="font-medium text-foreground">Automatic Sample Submission</h4>
              <p className="text-sm text-muted-foreground mt-1">
                Send suspicious files for analysis
              </p>
            </div>
            <Switch defaultChecked />
          </div>

          <div className="flex items-center justify-between p-4 rounded-lg border border-border bg-background/30">
            <div className="flex-1">
              <h4 className="font-medium text-foreground">Tamper Protection</h4>
              <p className="text-sm text-muted-foreground mt-1">
                Prevent unauthorized changes to security settings
              </p>
            </div>
            <Switch defaultChecked />
          </div>
        </div>
      </Card>

      <Card className="p-8 bg-gradient-to-br from-card/80 to-card/60 backdrop-blur-xl border-border">
        <h3 className="text-xl font-semibold text-foreground mb-6">Exclusions</h3>
        <div className="space-y-4">
          <div>
            <label className="text-sm font-medium text-foreground">Add File/Folder Exclusion</label>
            <div className="flex gap-2 mt-2">
              <Input placeholder="C:\Path\To\Exclude" className="flex-1" />
              <Button>Add</Button>
            </div>
          </div>

          <div className="space-y-2 mt-6">
            <h4 className="text-sm font-medium text-foreground">Current Exclusions</h4>
            <div className="space-y-2">
              {[
                "C:\\Program Files\\Development\\",
                "C:\\Users\\Admin\\VirtualMachines\\",
                "D:\\Backup\\",
              ].map((path, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-3 rounded-lg border border-border bg-background/30"
                >
                  <span className="text-sm text-foreground font-mono">{path}</span>
                  <Button variant="ghost" size="sm" className="text-critical">
                    Remove
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Card>

      <Card className="p-8 bg-gradient-to-br from-card/80 to-card/60 backdrop-blur-xl border-border">
        <h3 className="text-xl font-semibold text-foreground mb-6">Notifications</h3>
        <div className="space-y-6">
          <div className="flex items-center justify-between p-4 rounded-lg border border-border bg-background/30">
            <div className="flex-1">
              <h4 className="font-medium text-foreground">Threat Detection Alerts</h4>
              <p className="text-sm text-muted-foreground mt-1">
                Get notified when threats are detected
              </p>
            </div>
            <Switch defaultChecked />
          </div>

          <div className="flex items-center justify-between p-4 rounded-lg border border-border bg-background/30">
            <div className="flex-1">
              <h4 className="font-medium text-foreground">Scan Completion</h4>
              <p className="text-sm text-muted-foreground mt-1">
                Notify when scans complete
              </p>
            </div>
            <Switch defaultChecked />
          </div>

          <div className="flex items-center justify-between p-4 rounded-lg border border-border bg-background/30">
            <div className="flex-1">
              <h4 className="font-medium text-foreground">Update Notifications</h4>
              <p className="text-sm text-muted-foreground mt-1">
                Alert about signature updates
              </p>
            </div>
            <Switch />
          </div>
        </div>
      </Card>
    </div>
  );
}
