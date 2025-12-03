import { Shield, AlertTriangle, Globe, FileSearch, Activity, TrendingUp } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { StatCard } from "@/components/StatCard";
import { ScrollArea } from "@/components/ui/scroll-area";
import { PageHeader } from "@/components/PageHeader";
import { SeverityBadge } from "@/components/SeverityBadge";
import { SeverityLevel } from "@/lib/constants";

const iocFeeds = [
  { ioc: "185.220.45.12", type: "IP Address", threat: "Cobalt Strike C2", severity: "Critical" as SeverityLevel, source: "AlienVault", timestamp: "2 min ago" },
  { ioc: "evil-domain.com", type: "Domain", threat: "Phishing Campaign", severity: "High" as SeverityLevel, source: "Abuse.ch", timestamp: "15 min ago" },
  { ioc: "a3f8d9c7b2e1f4a6...", type: "File Hash", threat: "Ransomware", severity: "Critical" as SeverityLevel, source: "VirusTotal", timestamp: "1 hour ago" },
  { ioc: "malicious-url.com/payload", type: "URL", threat: "Drive-by Download", severity: "High" as SeverityLevel, source: "PhishTank", timestamp: "2 hours ago" },
];

const cveFeeds = [
  { cve: "CVE-2024-1234", severity: "Critical" as SeverityLevel, cvss: "9.8", description: "Remote Code Execution in Windows SMB", exploited: true },
  { cve: "CVE-2024-5678", severity: "High" as SeverityLevel, cvss: "8.1", description: "Privilege Escalation in Linux Kernel", exploited: false },
  { cve: "CVE-2024-9012", severity: "Critical" as SeverityLevel, cvss: "9.1", description: "SQL Injection in Apache Struts", exploited: true },
];

const threatActors = [
  { name: "APT29 (Cozy Bear)", activity: "Active", targets: "Government, Energy", ttps: ["T1566", "T1059", "T1071"] },
  { name: "Lazarus Group", activity: "Active", targets: "Financial, Crypto", ttps: ["T1204", "T1105", "T1486"] },
  { name: "REvil Ransomware", activity: "Dormant", targets: "Healthcare, Manufacturing", ttps: ["T1486", "T1490", "T1491"] },
];

const ThreatIntelligence = () => {
  return (
    <div className="space-y-8 animate-fade-in">
      <PageHeader
        title="Threat Intelligence"
        description="Real-time IoC feeds, CVE tracking, and threat actor intelligence"
        action={{ label: "Export Intel", icon: Activity }}
      />

      <div className="grid gap-6 md:grid-cols-4">
        <StatCard title="Active IoCs" value="2,847" change="+142" icon={Shield} />
        <StatCard title="Critical CVEs" value="34" change="+7" icon={AlertTriangle} />
        <StatCard title="Threat Actors" value="12" change="Tracked" icon={Globe} />
        <StatCard title="Intel Feeds" value="8" change="Active" icon={TrendingUp} />
      </div>

      <Card className="p-6 bg-card border-border shadow-lg">
        <h3 className="text-xl font-semibold mb-4 text-foreground">IoC Lookup</h3>
        <div className="flex gap-4">
          <Input placeholder="Search IP, domain, hash, or URL..." className="flex-1" />
          <Button className="bg-primary hover:bg-primary/90">
            <FileSearch className="w-4 h-4 mr-2" />Lookup
          </Button>
        </div>
      </Card>

      <Card className="p-6 bg-card border-border shadow-lg">
        <h3 className="text-xl font-semibold mb-6 text-foreground">Live Threat Feeds</h3>
        <ScrollArea className="h-[400px]">
          <div className="space-y-3">
            {iocFeeds.map((ioc, index) => (
              <div key={index} className="p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors border border-border">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <Shield className="w-5 h-5 text-primary" />
                    <div>
                      <div className="font-mono text-sm text-foreground">{ioc.ioc}</div>
                      <div className="text-sm text-muted-foreground">{ioc.threat}</div>
                    </div>
                  </div>
                  <SeverityBadge severity={ioc.severity} />
                </div>
                <div className="ml-8 flex gap-4 text-xs text-muted-foreground">
                  <span>Type: {ioc.type}</span>
                  <span>Source: {ioc.source}</span>
                  <span>{ioc.timestamp}</span>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </Card>

      <Card className="p-6 bg-card border-border shadow-lg">
        <h3 className="text-xl font-semibold mb-6 text-foreground">Critical Vulnerabilities (CVE)</h3>
        <div className="space-y-3">
          {cveFeeds.map((cve, index) => (
            <div key={index} className="p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors border border-border">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-3">
                  <AlertTriangle className="w-5 h-5 text-critical" />
                  <div>
                    <div className="font-semibold text-foreground">{cve.cve}</div>
                    <div className="text-sm text-muted-foreground">{cve.description}</div>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Badge variant="destructive">CVSS {cve.cvss}</Badge>
                  {cve.exploited && <Badge variant="destructive" className="bg-critical">Exploited</Badge>}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Card>

      <Card className="p-6 bg-card border-border shadow-lg">
        <h3 className="text-xl font-semibold mb-6 text-foreground">Tracked Threat Actors</h3>
        <div className="space-y-4">
          {threatActors.map((actor, index) => (
            <div key={index} className="p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors border border-border">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <div className="font-semibold text-lg text-foreground">{actor.name}</div>
                  <div className="text-sm text-muted-foreground">Targets: {actor.targets}</div>
                </div>
                <Badge variant={actor.activity === "Active" ? "destructive" : "secondary"}>{actor.activity}</Badge>
              </div>
              <div className="flex gap-2 flex-wrap">
                {actor.ttps.map((ttp, idx) => (
                  <Badge key={idx} variant="outline" className="text-xs">MITRE: {ttp}</Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default ThreatIntelligence;
