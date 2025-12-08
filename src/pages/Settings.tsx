import { Card } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Shield, Database, Cloud, Plus, X } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export default function Settings() {
  const { toast } = useToast();
  const [protectionLevel, setProtectionLevel] = useState<"Low" | "Medium" | "High">("High");
  const [exclusionPath, setExclusionPath] = useState("");
  const [exclusions, setExclusions] = useState([
    "C:\\Program Files\\Development\\",
    "C:\\Users\\Admin\\VirtualMachines\\",
    "D:\\Backup\\",
  ]);
  const [settings, setSettings] = useState({
    realTimeProtection: true,
    cloudProtection: true,
    sampleSubmission: true,
    tamperProtection: true,
    threatAlerts: true,
    scanCompletion: true,
    updateNotifications: false,
  });
  const [isUpdating, setIsUpdating] = useState(false);

  const updateSetting = (key: keyof typeof settings) => {
    setSettings((prev) => {
      const updated = { ...prev, [key]: !prev[key] };
      toast({
        title: "Setting Updated",
        description: `${key.replace(/([A-Z])/g, " $1").trim()} has been ${updated[key] ? "enabled" : "disabled"}`,
      });
      return updated;
    });
  };

  const setLevel = (level: "Low" | "Medium" | "High") => {
    setProtectionLevel(level);
    toast({
      title: "Protection Level Changed",
      description: `Protection level set to ${level}`,
    });
  };

  const addExclusion = () => {
    if (!exclusionPath.trim()) return;
    setExclusions((prev) => [...prev, exclusionPath]);
    setExclusionPath("");
    toast({
      title: "Exclusion Added",
      description: `${exclusionPath} has been added to exclusions`,
    });
  };

  const removeExclusion = (index: number) => {
    const removed = exclusions[index];
    setExclusions((prev) => prev.filter((_, i) => i !== index));
    toast({
      title: "Exclusion Removed",
      description: `${removed} has been removed from exclusions`,
    });
  };

  const checkForUpdates = () => {
    setIsUpdating(true);
    setTimeout(() => {
      setIsUpdating(false);
      toast({
        title: "Already Up to Date",
        description: "Your signature database is current",
      });
    }, 2000);
  };

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
              <p className="text-lg font-semibold text-foreground">2025.12.08</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Last Updated</p>
              <p className="text-sm text-foreground">Today, 14:30</p>
            </div>
            <Button className="w-full mt-4" onClick={checkForUpdates} disabled={isUpdating}>
              {isUpdating ? "Checking..." : "Check for Updates"}
            </Button>
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
            <Button 
              variant={protectionLevel === "Low" ? "default" : "outline"} 
              className="w-full justify-start"
              onClick={() => setLevel("Low")}
            >
              Low
            </Button>
            <Button 
              variant={protectionLevel === "Medium" ? "default" : "outline"} 
              className="w-full justify-start"
              onClick={() => setLevel("Medium")}
            >
              Medium
            </Button>
            <Button 
              variant={protectionLevel === "High" ? "default" : "outline"} 
              className={`w-full justify-start ${protectionLevel === "High" ? "bg-primary" : ""}`}
              onClick={() => setLevel("High")}
            >
              High {protectionLevel === "High" && "(Current)"}
            </Button>
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
            <Switch checked={settings.realTimeProtection} onCheckedChange={() => updateSetting("realTimeProtection")} />
          </div>

          <div className="flex items-center justify-between p-4 rounded-lg border border-border bg-background/30">
            <div className="flex-1">
              <h4 className="font-medium text-foreground">Cloud-based Protection</h4>
              <p className="text-sm text-muted-foreground mt-1">
                Enhanced detection using cloud intelligence
              </p>
            </div>
            <Switch checked={settings.cloudProtection} onCheckedChange={() => updateSetting("cloudProtection")} />
          </div>

          <div className="flex items-center justify-between p-4 rounded-lg border border-border bg-background/30">
            <div className="flex-1">
              <h4 className="font-medium text-foreground">Automatic Sample Submission</h4>
              <p className="text-sm text-muted-foreground mt-1">
                Send suspicious files for analysis
              </p>
            </div>
            <Switch checked={settings.sampleSubmission} onCheckedChange={() => updateSetting("sampleSubmission")} />
          </div>

          <div className="flex items-center justify-between p-4 rounded-lg border border-border bg-background/30">
            <div className="flex-1">
              <h4 className="font-medium text-foreground">Tamper Protection</h4>
              <p className="text-sm text-muted-foreground mt-1">
                Prevent unauthorized changes to security settings
              </p>
            </div>
            <Switch checked={settings.tamperProtection} onCheckedChange={() => updateSetting("tamperProtection")} />
          </div>
        </div>
      </Card>

      <Card className="p-8 bg-gradient-to-br from-card/80 to-card/60 backdrop-blur-xl border-border">
        <h3 className="text-xl font-semibold text-foreground mb-6">Exclusions</h3>
        <div className="space-y-4">
          <div>
            <label className="text-sm font-medium text-foreground">Add File/Folder Exclusion</label>
            <div className="flex gap-2 mt-2">
              <Input 
                placeholder="C:\Path\To\Exclude" 
                className="flex-1" 
                value={exclusionPath}
                onChange={(e) => setExclusionPath(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && addExclusion()}
              />
              <Button onClick={addExclusion}>
                <Plus className="w-4 h-4 mr-2" />
                Add
              </Button>
            </div>
          </div>

          <div className="space-y-2 mt-6">
            <h4 className="text-sm font-medium text-foreground">Current Exclusions</h4>
            <div className="space-y-2">
              {exclusions.map((path, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-3 rounded-lg border border-border bg-background/30"
                >
                  <span className="text-sm text-foreground font-mono">{path}</span>
                  <Button variant="ghost" size="sm" className="text-critical hover:text-critical" onClick={() => removeExclusion(index)}>
                    <X className="w-4 h-4 mr-1" />
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
            <Switch checked={settings.threatAlerts} onCheckedChange={() => updateSetting("threatAlerts")} />
          </div>

          <div className="flex items-center justify-between p-4 rounded-lg border border-border bg-background/30">
            <div className="flex-1">
              <h4 className="font-medium text-foreground">Scan Completion</h4>
              <p className="text-sm text-muted-foreground mt-1">
                Notify when scans complete
              </p>
            </div>
            <Switch checked={settings.scanCompletion} onCheckedChange={() => updateSetting("scanCompletion")} />
          </div>

          <div className="flex items-center justify-between p-4 rounded-lg border border-border bg-background/30">
            <div className="flex-1">
              <h4 className="font-medium text-foreground">Update Notifications</h4>
              <p className="text-sm text-muted-foreground mt-1">
                Alert about signature updates
              </p>
            </div>
            <Switch checked={settings.updateNotifications} onCheckedChange={() => updateSetting("updateNotifications")} />
          </div>
        </div>
      </Card>
    </div>
  );
}
