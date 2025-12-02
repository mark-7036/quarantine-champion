import { Globe, Shield, AlertTriangle, Activity, Ban, Search } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { StatCard } from "@/components/StatCard";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const DNSSecurity = () => {
  const dnsQueries = [
    { domain: "update.microsoft.com", type: "A", response: "20.189.173.21", status: "Clean", timestamp: "14:35:22" },
    { domain: "c2-server-dga.xyz", type: "A", response: "SINKHOLED", status: "DGA Detected", timestamp: "14:35:18" },
    { domain: "api.malware.net", type: "CNAME", response: "BLOCKED", status: "Malicious", timestamp: "14:35:15" },
    { domain: "tunnel.data-exfil.com", type: "TXT", response: "BLOCKED", status: "DNS Tunneling", timestamp: "14:35:10" },
  ];

  const dgaDetections = [
    { domain: "xk9f2mzp.com", algorithm: "Necurs", confidence: "98%", blocked: true },
    { domain: "qw3rt7yu.net", algorithm: "Emotet", confidence: "95%", blocked: true },
    { domain: "mn8b4vcd.org", algorithm: "Unknown", confidence: "87%", blocked: true },
  ];

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-display font-bold mb-3 text-foreground">DNS Security</h1>
          <p className="text-lg text-muted-foreground">DNS filtering, tunneling detection, and DGA analysis</p>
        </div>
        <div className="flex gap-2">
          <Input placeholder="Lookup domain..." className="w-64" />
          <Button className="bg-primary hover:bg-primary/90">
            <Search className="w-4 h-4" />
          </Button>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-4">
        <StatCard title="DNS Queries" value="1.2M" change="Today" icon={Globe} />
        <StatCard title="Blocked" value="3,847" change="+142" icon={Ban} />
        <StatCard title="DGA Detected" value="89" change="Sinkholed" icon={AlertTriangle} />
        <StatCard title="Tunneling Attempts" value="12" change="Blocked" icon={Activity} />
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card className="p-6 bg-card border-border shadow-lg">
          <h3 className="text-xl font-semibold mb-6 text-foreground">DGA Detection</h3>
          <div className="space-y-3">
            {dgaDetections.map((dga, idx) => (
              <div key={idx} className="p-4 rounded-lg bg-destructive/10 border border-destructive/30">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono text-sm text-foreground">{dga.domain}</span>
                  <Badge variant="destructive">DGA</Badge>
                </div>
                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                  <span>Algorithm: {dga.algorithm}</span>
                  <span>Confidence: {dga.confidence}</span>
                  <span className="text-success">✓ Blocked</span>
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-6 bg-card border-border shadow-lg">
          <h3 className="text-xl font-semibold mb-6 text-foreground">Security Features</h3>
          <div className="space-y-4">
            {[
              { feature: "DNSSEC Validation", status: "Enabled" },
              { feature: "DNS Sinkholing", status: "Active" },
              { feature: "DGA Detection", status: "Active" },
              { feature: "DNS Tunneling Detection", status: "Active" },
              { feature: "Cache Poisoning Protection", status: "Enabled" },
              { feature: "DNS Firewall", status: "Active" },
            ].map((item, idx) => (
              <div key={idx} className="flex items-center justify-between p-3 rounded-lg bg-muted/50 border border-border">
                <span className="text-foreground">{item.feature}</span>
                <Badge variant="default" className="bg-success">{item.status}</Badge>
              </div>
            ))}
          </div>
        </Card>
      </div>

      <Card className="p-6 bg-card border-border shadow-lg">
        <h3 className="text-xl font-semibold mb-6 text-foreground">DNS Query Log</h3>
        <ScrollArea className="h-[300px]">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-3 px-4 font-semibold text-foreground">Domain</th>
                <th className="text-left py-3 px-4 font-semibold text-foreground">Type</th>
                <th className="text-left py-3 px-4 font-semibold text-foreground">Response</th>
                <th className="text-left py-3 px-4 font-semibold text-foreground">Status</th>
                <th className="text-left py-3 px-4 font-semibold text-foreground">Time</th>
              </tr>
            </thead>
            <tbody>
              {dnsQueries.map((query, idx) => (
                <tr key={idx} className="border-b border-border hover:bg-muted/50 transition-colors">
                  <td className="py-3 px-4 text-foreground font-mono text-sm">{query.domain}</td>
                  <td className="py-3 px-4"><Badge variant="outline">{query.type}</Badge></td>
                  <td className="py-3 px-4 text-muted-foreground font-mono text-sm">{query.response}</td>
                  <td className="py-3 px-4">
                    <Badge variant={query.status === "Clean" ? "secondary" : "destructive"}>{query.status}</Badge>
                  </td>
                  <td className="py-3 px-4 text-muted-foreground text-sm">{query.timestamp}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </ScrollArea>
      </Card>
    </div>
  );
};

export default DNSSecurity;