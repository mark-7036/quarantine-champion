import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Eye, Camera, Mic, MapPin, Shield } from "lucide-react";
import { StatCard } from "@/components/StatCard";

export default function PrivacyGuard() {
  const trackers = [
    { app: "Chrome Browser", type: "Cookies", blocked: 247, status: "Active" },
    { app: "Windows Telemetry", type: "Data Collection", blocked: 89, status: "Active" },
    { app: "Adobe Reader", type: "Usage Tracking", blocked: 34, status: "Active" },
    { app: "Spotify", type: "Analytics", blocked: 156, status: "Active" },
  ];

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="space-y-3">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-primary/10 border border-primary/20">
            <Eye className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h1 className="text-4xl font-display font-bold text-foreground tracking-tight">Privacy Guard</h1>
            <p className="text-muted-foreground mt-1 text-base">
              Anti-surveillance and privacy protection suite
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <StatCard
          title="Trackers Blocked"
          value="3,847"
          change="+247 today"
          changeType="positive"
          icon={Shield}
          iconColor="text-success"
        />
        <StatCard
          title="Privacy Score"
          value="94/100"
          change="Excellent"
          changeType="positive"
          icon={Eye}
          iconColor="text-info"
        />
        <StatCard
          title="Data Requests"
          value="156"
          change="Denied today"
          changeType="positive"
          icon={MapPin}
          iconColor="text-primary"
        />
        <StatCard
          title="Protection Level"
          value="Maximum"
          change="All guards active"
          changeType="positive"
          icon={Shield}
          iconColor="text-success"
        />
      </div>

      <Card className="p-8 bg-gradient-to-br from-card/80 to-card/60 backdrop-blur-xl border-border shadow-lg" style={{ boxShadow: 'var(--shadow-elevated)' }}>
        <h3 className="text-xl font-semibold text-foreground mb-6">Privacy Controls</h3>
        
        <div className="grid gap-5">
          {[
            { icon: Camera, title: "Webcam Protection", description: "Prevents unauthorized camera access", enabled: true },
            { icon: Mic, title: "Microphone Guard", description: "Blocks suspicious audio recording attempts", enabled: true },
            { icon: MapPin, title: "Location Privacy", description: "Prevents location tracking and sharing", enabled: true },
            { icon: Eye, title: "Anti-Keylogger", description: "Protects against keystroke monitoring", enabled: true },
            { icon: Shield, title: "DNS Privacy", description: "Encrypted DNS queries for browsing privacy", enabled: false },
          ].map((feature, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-5 bg-muted/20 rounded-lg border border-border animate-slide-in"
              style={{ animationDelay: `${index * 60}ms` }}
            >
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-lg bg-primary/10 border border-primary/20">
                  <feature.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">{feature.title}</h4>
                  <p className="text-sm text-muted-foreground mt-0.5">{feature.description}</p>
                </div>
              </div>
              <Switch defaultChecked={feature.enabled} className="data-[state=checked]:bg-success" />
            </div>
          ))}
        </div>
      </Card>

      <Card className="p-8 bg-gradient-to-br from-card/80 to-card/60 backdrop-blur-xl border-border shadow-lg" style={{ boxShadow: 'var(--shadow-elevated)' }}>
        <h3 className="text-xl font-semibold text-foreground mb-6">Tracker Activity</h3>
        <div className="overflow-hidden rounded-lg border border-border">
          <table className="w-full">
            <thead className="bg-muted/30">
              <tr>
                <th className="text-left py-3 px-4 text-xs font-semibold text-muted-foreground uppercase">Application</th>
                <th className="text-left py-3 px-4 text-xs font-semibold text-muted-foreground uppercase">Type</th>
                <th className="text-left py-3 px-4 text-xs font-semibold text-muted-foreground uppercase">Blocked</th>
                <th className="text-left py-3 px-4 text-xs font-semibold text-muted-foreground uppercase">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border bg-card/50">
              {trackers.map((tracker, index) => (
                <tr key={index} className="hover:bg-muted/20 transition-colors animate-fade-in" style={{ animationDelay: `${index * 50}ms` }}>
                  <td className="py-3 px-4 text-sm text-foreground font-medium">{tracker.app}</td>
                  <td className="py-3 px-4 text-sm text-muted-foreground">{tracker.type}</td>
                  <td className="py-3 px-4 text-sm text-muted-foreground">{tracker.blocked}</td>
                  <td className="py-3 px-4">
                    <Badge variant="outline" className="bg-success/10 text-success border-success/30">
                      {tracker.status}
                    </Badge>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}
