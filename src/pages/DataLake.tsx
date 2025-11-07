import { Database, Lock, Clock, Activity, HardDrive } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { StatCard } from "@/components/StatCard";
import { Switch } from "@/components/ui/switch";

const DataLake = () => {
  return (
    <div className="space-y-8 animate-fade-in">
      <div>
        <h1 className="text-4xl font-display font-bold mb-3 text-foreground">
          Data Lake Storage
        </h1>
        <p className="text-lg text-muted-foreground">
          Log retention, WORM storage, and blockchain-based integrity
        </p>
      </div>

      {/* Stats */}
      <div className="grid gap-6 md:grid-cols-4">
        <StatCard
          title="Total Storage"
          value="2.4 TB"
          change="+123 GB"
          icon={Database}
        />
        <StatCard
          title="Log Entries"
          value="847M"
          change="+2.3M"
          icon={Activity}
        />
        <StatCard
          title="Retention Days"
          value="365"
          change="Active"
          icon={Clock}
        />
        <StatCard
          title="WORM Protected"
          value="1.8 TB"
          change="75%"
          icon={Lock}
        />
      </div>

      {/* Storage Overview */}
      <Card className="p-6 bg-card border-border shadow-lg">
        <h3 className="text-xl font-semibold mb-6 text-foreground">Storage Distribution</h3>
        <div className="space-y-4">
          {[
            { category: "Security Events", size: "1.2 TB", percentage: 50, retention: "365 days" },
            { category: "Network Logs", size: "620 GB", percentage: 26, retention: "180 days" },
            { category: "Endpoint Telemetry", size: "380 GB", percentage: 16, retention: "90 days" },
            { category: "Cloud Audit Logs", size: "200 GB", percentage: 8, retention: "365 days" },
          ].map((item, index) => (
            <div key={index}>
              <div className="flex justify-between mb-2">
                <div className="flex items-center gap-3">
                  <HardDrive className="w-5 h-5 text-primary" />
                  <span className="font-semibold text-foreground">{item.category}</span>
                </div>
                <div className="text-right">
                  <div className="text-foreground font-medium">{item.size}</div>
                  <div className="text-xs text-muted-foreground">Retention: {item.retention}</div>
                </div>
              </div>
              <div className="w-full h-3 bg-muted rounded-full overflow-hidden">
                <div className="h-full bg-primary transition-all duration-500" style={{ width: `${item.percentage}%` }} />
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Retention Controls */}
      <Card className="p-6 bg-card border-border shadow-lg">
        <h3 className="text-xl font-semibold mb-6 text-foreground">Log Retention Controls</h3>
        <div className="grid grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="p-4 bg-muted/50 rounded-lg">
              <div className="flex items-center justify-between mb-3">
                <span className="font-semibold text-foreground">Auto-Archive Old Logs</span>
                <Switch defaultChecked />
              </div>
              <div className="text-sm text-muted-foreground">Move logs older than 90 days to cold storage</div>
            </div>
            <div className="p-4 bg-muted/50 rounded-lg">
              <div className="flex items-center justify-between mb-3">
                <span className="font-semibold text-foreground">Compress Archived Data</span>
                <Switch defaultChecked />
              </div>
              <div className="text-sm text-muted-foreground">Reduce storage footprint by 70%</div>
            </div>
          </div>
          <div className="space-y-4">
            <div className="p-4 bg-muted/50 rounded-lg">
              <label className="text-sm font-semibold text-foreground mb-2 block">Security Events Retention</label>
              <select className="w-full px-3 py-2 rounded-lg bg-background border border-border text-foreground">
                <option>365 days</option>
                <option>180 days</option>
                <option>90 days</option>
                <option>Custom</option>
              </select>
            </div>
            <div className="p-4 bg-muted/50 rounded-lg">
              <label className="text-sm font-semibold text-foreground mb-2 block">Network Logs Retention</label>
              <select className="w-full px-3 py-2 rounded-lg bg-background border border-border text-foreground">
                <option>180 days</option>
                <option>365 days</option>
                <option>90 days</option>
                <option>Custom</option>
              </select>
            </div>
          </div>
        </div>
      </Card>

      {/* WORM Storage */}
      <Card className="p-6 bg-card border-border shadow-lg">
        <h3 className="text-xl font-semibold mb-6 text-foreground">WORM / Immutable Log Viewer</h3>
        <div className="grid grid-cols-2 gap-6">
          <div>
            <div className="mb-4 p-4 bg-green-500/10 border border-green-500/30 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <Lock className="w-5 h-5 text-green-400" />
                <span className="font-semibold text-foreground">WORM Protection: Active</span>
              </div>
              <div className="text-sm text-muted-foreground">
                Write-Once-Read-Many ensures logs cannot be modified or deleted
              </div>
            </div>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between p-3 bg-muted/50 rounded-lg">
                <span className="text-muted-foreground">Protected Logs</span>
                <span className="text-foreground font-medium">1.8 TB</span>
              </div>
              <div className="flex justify-between p-3 bg-muted/50 rounded-lg">
                <span className="text-muted-foreground">Lock Duration</span>
                <span className="text-foreground font-medium">Permanent</span>
              </div>
              <div className="flex justify-between p-3 bg-muted/50 rounded-lg">
                <span className="text-muted-foreground">Compliance</span>
                <Badge variant="secondary" className="bg-green-500/20 text-green-400">SOC 2, HIPAA</Badge>
              </div>
            </div>
          </div>
          <div>
            <div className="text-sm font-semibold text-foreground mb-3">Protected Log Categories</div>
            <div className="space-y-2">
              {["Authentication Events", "Admin Actions", "File Access", "Configuration Changes", "Security Alerts"].map((cat, idx) => (
                <div key={idx} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                  <div className="flex items-center gap-2">
                    <Lock className="w-4 h-4 text-green-400" />
                    <span className="text-foreground">{cat}</span>
                  </div>
                  <Badge variant="secondary" className="bg-green-500/20 text-green-400 text-xs">Protected</Badge>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Card>

      {/* Blockchain Integrity */}
      <Card className="p-6 bg-card border-border shadow-lg">
        <h3 className="text-xl font-semibold mb-6 text-foreground">Blockchain-Based Log Integrity</h3>
        <div className="grid grid-cols-2 gap-6">
          <div>
            <div className="p-4 bg-muted/30 rounded-lg font-mono text-sm mb-4">
              <div className="text-muted-foreground mb-2">Latest Block Hash:</div>
              <div className="text-foreground break-all">0x7a8f9c3e...d2b1a4f6</div>
            </div>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between p-3 bg-muted/50 rounded-lg">
                <span className="text-muted-foreground">Block Height</span>
                <span className="text-foreground font-medium">1,247,892</span>
              </div>
              <div className="flex justify-between p-3 bg-muted/50 rounded-lg">
                <span className="text-muted-foreground">Chain Status</span>
                <Badge variant="secondary" className="bg-green-500/20 text-green-400">Valid</Badge>
              </div>
            </div>
          </div>
          <div>
            <div className="text-sm font-semibold text-foreground mb-3">Integrity Verification</div>
            <div className="space-y-3">
              <Button variant="outline" className="w-full justify-start">
                <Activity className="w-4 h-4 mr-2" />
                Verify Last 1000 Blocks
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Database className="w-4 h-4 mr-2" />
                View Blockchain Explorer
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Lock className="w-4 h-4 mr-2" />
                Generate Proof of Integrity
              </Button>
            </div>
          </div>
        </div>
      </Card>

      {/* Time-Series Graphs */}
      <Card className="p-6 bg-card border-border shadow-lg">
        <h3 className="text-xl font-semibold mb-6 text-foreground">Storage Growth Trends</h3>
        <div className="h-64 flex items-end justify-between gap-2">
          {[45, 52, 48, 61, 58, 67, 72, 69, 78, 82, 89, 95, 100].map((height, idx) => (
            <div key={idx} className="flex-1 bg-primary/20 hover:bg-primary/40 rounded-t transition-colors relative group">
              <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 bg-popover px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                {height} GB/day
              </div>
              <div style={{ height: `${height}%` }} className="bg-primary rounded-t" />
            </div>
          ))}
        </div>
        <div className="flex justify-between mt-4 text-xs text-muted-foreground">
          <span>Jan</span>
          <span>Feb</span>
          <span>Mar</span>
          <span>Apr</span>
          <span>May</span>
          <span>Jun</span>
          <span>Jul</span>
          <span>Aug</span>
          <span>Sep</span>
          <span>Oct</span>
          <span>Nov</span>
          <span>Dec</span>
          <span>Now</span>
        </div>
      </Card>
    </div>
  );
};

export default DataLake;
