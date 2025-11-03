import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Eye, Camera, Mic, MapPin, Shield, Radio, AlertTriangle, UserSearch } from "lucide-react";
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

      {/* Webcam & Microphone Protection */}
      <Card className="p-8 bg-gradient-to-br from-card/80 to-card/60 backdrop-blur-xl border-border shadow-lg" style={{ boxShadow: 'var(--shadow-elevated)' }}>
        <div className="flex items-center gap-3 mb-6">
          <Camera className="w-6 h-6 text-primary" />
          <h3 className="text-xl font-semibold text-foreground">Webcam & Microphone Protection</h3>
        </div>

        <div className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 bg-muted/20 rounded-lg border border-border">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <Camera className="w-5 h-5 text-info" />
                  <p className="text-sm font-medium text-foreground">Webcam</p>
                </div>
                <Switch checked />
              </div>
              <Badge variant="outline" className="bg-success/10 text-success border-success/30">Protected</Badge>
            </div>

            <div className="p-4 bg-muted/20 rounded-lg border border-border">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <Mic className="w-5 h-5 text-warning" />
                  <p className="text-sm font-medium text-foreground">Microphone</p>
                </div>
                <Switch checked />
              </div>
              <Badge variant="outline" className="bg-success/10 text-success border-success/30">Protected</Badge>
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold text-muted-foreground uppercase mb-3">Unauthorized Access History</p>
            <div className="space-y-2">
              {[
                { app: "suspicious.exe", device: "Webcam", time: "2 hours ago", blocked: true },
                { app: "unknown-app.exe", device: "Microphone", time: "5 hours ago", blocked: true },
                { app: "malware.dll", device: "Webcam", time: "1 day ago", blocked: true },
              ].map((attempt, i) => (
                <div key={i} className="p-3 bg-critical/10 border border-critical/30 rounded-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-semibold text-foreground">{attempt.app}</p>
                      <p className="text-xs text-muted-foreground mt-1">Attempted to access {attempt.device}</p>
                    </div>
                    <div className="text-right">
                      <Badge variant="outline" className="bg-critical/10 text-critical border-critical/30 mb-1">
                        Blocked
                      </Badge>
                      <p className="text-xs text-muted-foreground">{attempt.time}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Card>

      {/* Ambient Data Leak Listener */}
      <Card className="p-8 bg-gradient-to-br from-card/80 to-card/60 backdrop-blur-xl border-border shadow-lg" style={{ boxShadow: 'var(--shadow-elevated)' }}>
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <Radio className="w-6 h-6 text-warning" />
            <h3 className="text-xl font-semibold text-foreground">Ambient Data Leak Listener</h3>
          </div>
          <Switch checked />
        </div>

        <div className="space-y-6">
          <div className="p-4 bg-warning/10 border border-warning/30 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <AlertTriangle className="w-4 h-4 text-warning" />
              <p className="text-sm font-semibold text-warning">3 Background Listeners Detected</p>
            </div>
            <p className="text-xs text-muted-foreground">Applications are passively collecting data in the background</p>
          </div>

          <div>
            <p className="text-sm font-semibold text-muted-foreground uppercase mb-3">Suspicious Background Listeners</p>
            <div className="space-y-2">
              {[
                { app: "analytics-service.exe", type: "Keyboard Listener", data: "Keystrokes", risk: "High" },
                { app: "background-agent.dll", type: "Clipboard Monitor", data: "Clipboard Data", risk: "Medium" },
                { app: "system-monitor.exe", type: "Screen Capture", data: "Screenshots", risk: "Critical" },
              ].map((listener, i) => (
                <div key={i} className="p-4 bg-muted/20 rounded-lg border border-border">
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <p className="text-sm font-semibold text-foreground">{listener.app}</p>
                      <p className="text-xs text-muted-foreground mt-1">{listener.type} - Collecting: {listener.data}</p>
                    </div>
                    <Badge variant="outline" className={
                      listener.risk === "Critical" ? "bg-critical/10 text-critical border-critical/30" :
                      listener.risk === "High" ? "bg-warning/10 text-warning border-warning/30" :
                      "bg-info/10 text-info border-info/30"
                    }>
                      {listener.risk}
                    </Badge>
                  </div>
                  <div className="flex gap-2 mt-3">
                    <Button size="sm" className="flex-1 bg-critical hover:bg-critical/90">Block</Button>
                    <Button size="sm" variant="outline" className="flex-1">Investigate</Button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="p-4 bg-muted/10 rounded-lg border border-border">
            <p className="text-xs text-muted-foreground uppercase mb-2">Suspicious Transmissions</p>
            <div className="space-y-1">
              {["157.89.23.12:443 - 2.3 MB sent", "203.45.67.89:8080 - 1.8 MB sent"].map((trans, i) => (
                <p key={i} className="text-xs font-mono text-foreground">{trans}</p>
              ))}
            </div>
          </div>
        </div>
      </Card>

      {/* Digital Shadow Tracker */}
      <Card className="p-8 bg-gradient-to-br from-card/80 to-card/60 backdrop-blur-xl border-border shadow-lg" style={{ boxShadow: 'var(--shadow-elevated)' }}>
        <div className="flex items-center gap-3 mb-6">
          <UserSearch className="w-6 h-6 text-info" />
          <h3 className="text-xl font-semibold text-foreground">Digital Shadow Tracker</h3>
        </div>

        <div className="space-y-6">
          <div className="p-4 bg-muted/20 rounded-lg border border-border">
            <p className="text-sm font-medium text-foreground mb-3">Scan Your Digital Footprint</p>
            <div className="flex gap-2">
              <input 
                type="text" 
                placeholder="Enter email or username..." 
                className="flex-1 px-4 py-2 bg-muted/20 border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary text-sm"
              />
              <Button className="bg-primary hover:bg-primary/90">Scan</Button>
            </div>
          </div>

          <div className="p-4 bg-critical/10 border border-critical/30 rounded-lg">
            <div className="flex items-center gap-2 mb-3">
              <AlertTriangle className="w-4 h-4 text-critical" />
              <p className="text-sm font-semibold text-critical">Dark Web Exposure Detected</p>
            </div>
            <p className="text-xs text-muted-foreground mb-4">Your credentials were found in 2 data breaches</p>
            
            <div className="space-y-2">
              {[
                { source: "Database Leak 2024", exposed: "Email, Password", severity: "High" },
                { source: "Forum Breach 2023", exposed: "Username, Email", severity: "Medium" },
              ].map((exposure, i) => (
                <div key={i} className="p-3 bg-card/50 rounded-lg border border-border">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-foreground">{exposure.source}</p>
                      <p className="text-xs text-muted-foreground mt-1">Exposed: {exposure.exposed}</p>
                    </div>
                    <Badge variant="outline" className={
                      exposure.severity === "High" ? "bg-critical/10 text-critical border-critical/30" : "bg-warning/10 text-warning border-warning/30"
                    }>
                      {exposure.severity}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <Button className="w-full bg-primary hover:bg-primary/90">View Full Report</Button>
        </div>
      </Card>
    </div>
  );
}
