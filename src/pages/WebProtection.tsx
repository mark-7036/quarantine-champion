import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Shield, Globe, AlertTriangle, TrendingUp, CheckCircle } from "lucide-react";
import { StatCard } from "@/components/StatCard";
import { Switch } from "@/components/ui/switch";
import { Progress } from "@/components/ui/progress";

export default function WebProtection() {
  const suspiciousSites = [
    { url: "phishing-bank.com", reputation: 12, category: "Phishing", blocked: true },
    { url: "malware-download.net", reputation: 8, category: "Malware", blocked: true },
    { url: "fake-login-portal.com", reputation: 15, category: "Credential Theft", blocked: true },
    { url: "suspicious-ads.xyz", reputation: 45, category: "Adware", blocked: false },
  ];

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="space-y-3">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-primary/10 border border-primary/20">
            <Globe className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h1 className="text-4xl font-display font-bold text-foreground tracking-tight">Web Protection</h1>
            <p className="text-muted-foreground mt-1 text-base">
              Anti-phishing and malicious website protection
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <StatCard
          title="Sites Blocked"
          value="2,847"
          change="+127 today"
          changeType="positive"
          icon={Shield}
          iconColor="text-success"
        />
        <StatCard
          title="Phishing Attempts"
          value="423"
          change="34 blocked today"
          changeType="positive"
          icon={AlertTriangle}
          iconColor="text-critical"
        />
        <StatCard
          title="Safe Browsing"
          value="99.2%"
          change="+0.3% this week"
          changeType="positive"
          icon={CheckCircle}
          iconColor="text-info"
        />
        <StatCard
          title="Scanned URLs"
          value="15.8K"
          change="Real-time"
          changeType="positive"
          icon={TrendingUp}
          iconColor="text-primary"
        />
      </div>

      {/* Anti-Phishing Protection */}
      <Card className="p-8 bg-gradient-to-br from-card/80 to-card/60 backdrop-blur-xl border-border shadow-lg" style={{ boxShadow: 'var(--shadow-elevated)' }}>
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <Shield className="w-6 h-6 text-primary" />
            <h3 className="text-xl font-semibold text-foreground">Anti-Phishing Protection</h3>
          </div>
          <Switch checked />
        </div>

        <div className="space-y-6">
          <div className="grid grid-cols-3 gap-4">
            <div className="p-4 bg-muted/20 rounded-lg border border-border">
              <p className="text-xs text-muted-foreground uppercase mb-2">Protection Level</p>
              <Badge variant="outline" className="bg-success/10 text-success border-success/30">Maximum</Badge>
            </div>
            <div className="p-4 bg-muted/20 rounded-lg border border-border">
              <p className="text-xs text-muted-foreground uppercase mb-2">Real-Time Scan</p>
              <Badge variant="outline" className="bg-success/10 text-success border-success/30">Active</Badge>
            </div>
            <div className="p-4 bg-muted/20 rounded-lg border border-border">
              <p className="text-xs text-muted-foreground uppercase mb-2">Database</p>
              <Badge variant="outline" className="bg-info/10 text-info border-info/30">Up to date</Badge>
            </div>
          </div>

          <div className="p-4 bg-success/10 border border-success/30 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <CheckCircle className="w-4 h-4 text-success" />
              <p className="text-sm font-semibold text-success">Protection Active</p>
            </div>
            <p className="text-xs text-muted-foreground">All web traffic is being monitored for phishing attempts and malicious content</p>
          </div>
        </div>
      </Card>

      {/* Suspicious Sites & Reputation Checker */}
      <Card className="p-8 bg-gradient-to-br from-card/80 to-card/60 backdrop-blur-xl border-border shadow-lg" style={{ boxShadow: 'var(--shadow-elevated)' }}>
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-semibold text-foreground">Suspicious Sites Detected</h3>
          <Button className="bg-primary hover:bg-primary/90">View All</Button>
        </div>

        <div className="overflow-hidden rounded-lg border border-border">
          <table className="w-full">
            <thead className="bg-muted/30">
              <tr>
                <th className="text-left py-3 px-4 text-xs font-semibold text-muted-foreground uppercase">URL</th>
                <th className="text-left py-3 px-4 text-xs font-semibold text-muted-foreground uppercase">Reputation</th>
                <th className="text-left py-3 px-4 text-xs font-semibold text-muted-foreground uppercase">Category</th>
                <th className="text-left py-3 px-4 text-xs font-semibold text-muted-foreground uppercase">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border bg-card/50">
              {suspiciousSites.map((site, index) => (
                <tr key={index} className="hover:bg-muted/20 transition-colors animate-fade-in" style={{ animationDelay: `${index * 50}ms` }}>
                  <td className="py-3 px-4 text-sm text-foreground font-mono">{site.url}</td>
                  <td className="py-3 px-4">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <Progress value={site.reputation} className="w-24" />
                        <span className="text-xs text-muted-foreground">{site.reputation}/100</span>
                      </div>
                    </div>
                  </td>
                  <td className="py-3 px-4">
                    <Badge variant="outline" className="bg-warning/10 text-warning border-warning/30">
                      {site.category}
                    </Badge>
                  </td>
                  <td className="py-3 px-4">
                    <Badge variant="outline" className={
                      site.blocked ? "bg-critical/10 text-critical border-critical/30" : "bg-warning/10 text-warning border-warning/30"
                    }>
                      {site.blocked ? "Blocked" : "Monitoring"}
                    </Badge>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      {/* URL Reputation Scanner */}
      <Card className="p-8 bg-gradient-to-br from-card/80 to-card/60 backdrop-blur-xl border-border shadow-lg" style={{ boxShadow: 'var(--shadow-elevated)' }}>
        <div className="flex items-center gap-3 mb-6">
          <Globe className="w-6 h-6 text-info" />
          <h3 className="text-xl font-semibold text-foreground">URL Reputation Scanner</h3>
        </div>

        <div className="space-y-4">
          <div className="flex gap-2">
            <input 
              type="text" 
              placeholder="Enter URL to check reputation..." 
              className="flex-1 px-4 py-3 bg-muted/20 border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <Button className="bg-primary hover:bg-primary/90 px-6">Scan</Button>
          </div>

          <div className="p-4 bg-muted/10 rounded-lg border border-border">
            <p className="text-xs text-muted-foreground uppercase mb-3">Recent Scans</p>
            <div className="space-y-2">
              {[
                { url: "example.com", score: 95, safe: true },
                { url: "suspicious-site.net", score: 23, safe: false },
                { url: "trusted-bank.com", score: 98, safe: true },
              ].map((scan, i) => (
                <div key={i} className="flex items-center justify-between p-2 bg-card/30 rounded">
                  <span className="text-sm font-mono text-foreground">{scan.url}</span>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-muted-foreground">{scan.score}/100</span>
                    <Badge variant="outline" className={
                      scan.safe ? "bg-success/10 text-success border-success/30" : "bg-critical/10 text-critical border-critical/30"
                    }>
                      {scan.safe ? "Safe" : "Risky"}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
