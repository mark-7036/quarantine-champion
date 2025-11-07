import { Database, Globe, Shield, FileSearch, Search } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const DataEnrichment = () => {
  const [hashLookup, setHashLookup] = useState("");

  const enrichmentSources = [
    { name: "GeoIP Database", status: "Active", lastUpdate: "2 hours ago", records: "4.2M" },
    { name: "Threat Intelligence Feeds", status: "Active", lastUpdate: "5 min ago", records: "892K" },
    { name: "MITRE ATT&CK Framework", status: "Active", lastUpdate: "1 day ago", records: "623" },
    { name: "VirusTotal Integration", status: "Active", lastUpdate: "Live", records: "N/A" },
  ];

  const recentEnrichments = [
    { 
      event: "Process Execution", 
      original: "process.exe started on endpoint-01", 
      enriched: ["GeoIP: US, Virginia", "Reputation: Unknown", "MITRE: T1059 - Command Execution"],
      timestamp: "14:35:22"
    },
    { 
      event: "Network Connection", 
      original: "Connection to 185.220.45.12:443", 
      enriched: ["GeoIP: Russia, Moscow", "Threat Intel: Known C2 Server", "Risk Score: 95/100"],
      timestamp: "14:33:11"
    },
    { 
      event: "File Downloaded", 
      original: "invoice.pdf.exe downloaded", 
      enriched: ["VirusTotal: 45/70 engines flagged", "Hash: Known Malware", "MITRE: T1566 - Phishing"],
      timestamp: "14:30:45"
    },
  ];

  return (
    <div className="space-y-8 animate-fade-in">
      <div>
        <h1 className="text-4xl font-display font-bold mb-3 text-foreground">
          Data Normalization & Enrichment
        </h1>
        <p className="text-lg text-muted-foreground">
          Unified event schema, GeoIP, threat intel, and MITRE mapping
        </p>
      </div>

      {/* File Hash Lookup */}
      <Card className="p-6 bg-card border-border shadow-lg">
        <h3 className="text-xl font-semibold mb-4 text-foreground">File Reputation Lookup</h3>
        <div className="flex gap-4">
          <Input 
            placeholder="Enter MD5, SHA1, or SHA256 hash..." 
            className="flex-1"
            value={hashLookup}
            onChange={(e) => setHashLookup(e.target.value)}
          />
          <Button className="bg-primary hover:bg-primary/90">
            <Search className="w-4 h-4 mr-2" />
            Lookup
          </Button>
        </div>
        {hashLookup && (
          <div className="mt-4 p-4 bg-muted/50 rounded-lg">
            <div className="text-sm text-muted-foreground mb-2">Sample Result:</div>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-foreground">Reputation:</span>
                <Badge variant="destructive">Malicious</Badge>
              </div>
              <div className="flex justify-between">
                <span className="text-foreground">Detection Rate:</span>
                <span className="text-foreground font-medium">58/72 engines</span>
              </div>
              <div className="flex justify-between">
                <span className="text-foreground">File Type:</span>
                <span className="text-foreground font-medium">PE32 Executable</span>
              </div>
            </div>
          </div>
        )}
      </Card>

      {/* Enrichment Sources */}
      <Card className="p-6 bg-card border-border shadow-lg">
        <h3 className="text-xl font-semibold mb-6 text-foreground">Enrichment Data Sources</h3>
        <div className="grid grid-cols-2 gap-4">
          {enrichmentSources.map((source, index) => (
            <div key={index} className="p-4 bg-muted/50 rounded-lg hover:bg-muted transition-colors">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <Database className="w-5 h-5 text-primary" />
                  <span className="font-semibold text-foreground">{source.name}</span>
                </div>
                <Badge variant="secondary" className="bg-green-500/20 text-green-400">{source.status}</Badge>
              </div>
              <div className="text-sm text-muted-foreground space-y-1">
                <div>Records: {source.records}</div>
                <div>Last Update: {source.lastUpdate}</div>
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Recent Enrichments */}
      <Card className="p-6 bg-card border-border shadow-lg">
        <h3 className="text-xl font-semibold mb-6 text-foreground">Recent Enriched Events</h3>
        <div className="space-y-4">
          {recentEnrichments.map((item, index) => (
            <div key={index} className="p-4 rounded-lg bg-muted/50 border border-border">
              <div className="flex items-start gap-3 mb-3">
                <Shield className="w-5 h-5 text-primary mt-1" />
                <div className="flex-1">
                  <div className="font-semibold text-foreground mb-1">{item.event}</div>
                  <div className="text-sm text-muted-foreground mb-2">Original: {item.original}</div>
                  <div className="space-y-1">
                    {item.enriched.map((enrich, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <Globe className="w-3 h-3 text-primary" />
                        <span className="text-sm text-foreground">{enrich}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <span className="text-xs text-muted-foreground">{item.timestamp}</span>
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Unified Schema Viewer */}
      <Card className="p-6 bg-card border-border shadow-lg">
        <h3 className="text-xl font-semibold mb-6 text-foreground">Unified Event Schema</h3>
        <div className="bg-muted/30 p-4 rounded-lg font-mono text-sm">
          <pre className="text-foreground overflow-x-auto">
{`{
  "timestamp": "2025-01-15T14:35:22Z",
  "event_type": "process_execution",
  "source": {
    "ip": "192.168.1.100",
    "hostname": "endpoint-01",
    "user": "john.doe"
  },
  "process": {
    "name": "powershell.exe",
    "path": "C:\\\\Windows\\\\System32\\\\WindowsPowerShell\\\\v1.0",
    "hash": "a3f8d9c7b2e1..."
  },
  "enrichment": {
    "geo": { "country": "US", "city": "New York" },
    "reputation": { "score": 45, "category": "suspicious" },
    "mitre": ["T1059.001"]
  }
}`}
          </pre>
        </div>
      </Card>
    </div>
  );
};

export default DataEnrichment;
