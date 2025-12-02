import { Package, AlertTriangle, Shield, FileText, GitBranch, CheckCircle } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { StatCard } from "@/components/StatCard";
import { Progress } from "@/components/ui/progress";

const SupplyChainSecurity = () => {
  const sbomComponents = [
    { name: "log4j", version: "2.17.1", vulnerabilities: 0, license: "Apache-2.0", risk: "Low" },
    { name: "spring-core", version: "5.3.18", vulnerabilities: 2, license: "Apache-2.0", risk: "High" },
    { name: "jackson-databind", version: "2.13.2", vulnerabilities: 1, license: "Apache-2.0", risk: "Medium" },
    { name: "commons-text", version: "1.10.0", vulnerabilities: 0, license: "Apache-2.0", risk: "Low" },
  ];

  const vendors = [
    { name: "Acme Software", components: 45, risk: 72, lastAssessment: "2 weeks ago" },
    { name: "CloudTech Inc", components: 23, risk: 85, lastAssessment: "1 month ago" },
    { name: "SecureLib Corp", components: 12, risk: 95, lastAssessment: "1 week ago" },
  ];

  const dependencies = [
    { type: "Direct", count: 124, vulnerable: 8 },
    { type: "Transitive", count: 892, vulnerable: 23 },
    { type: "Dev", count: 56, vulnerable: 2 },
  ];

  return (
    <div className="space-y-8 animate-fade-in">
      <div>
        <h1 className="text-4xl font-display font-bold mb-3 text-foreground">Supply Chain Security</h1>
        <p className="text-lg text-muted-foreground">SBOM management, dependency scanning, and vendor risk assessment</p>
      </div>

      <div className="grid gap-6 md:grid-cols-4">
        <StatCard title="Components" value="1,072" change="Tracked" icon={Package} />
        <StatCard title="Vulnerabilities" value="33" change="-5 fixed" icon={AlertTriangle} />
        <StatCard title="Vendors" value="24" change="Assessed" icon={Shield} />
        <StatCard title="SBOM Coverage" value="94%" change="+2%" icon={FileText} />
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {dependencies.map((dep, idx) => (
          <Card key={idx} className="p-6 bg-card border-border shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-foreground">{dep.type} Dependencies</h3>
              <GitBranch className="w-5 h-5 text-primary" />
            </div>
            <div className="text-3xl font-bold text-foreground mb-2">{dep.count}</div>
            <div className="flex items-center gap-2 text-sm">
              <span className={`font-medium ${dep.vulnerable > 10 ? "text-destructive" : "text-warning"}`}>
                {dep.vulnerable} vulnerable
              </span>
            </div>
          </Card>
        ))}
      </div>

      <Card className="p-6 bg-card border-border shadow-lg">
        <h3 className="text-xl font-semibold mb-6 text-foreground">Software Bill of Materials (SBOM)</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-3 px-4 font-semibold text-foreground">Component</th>
                <th className="text-left py-3 px-4 font-semibold text-foreground">Version</th>
                <th className="text-left py-3 px-4 font-semibold text-foreground">Vulnerabilities</th>
                <th className="text-left py-3 px-4 font-semibold text-foreground">License</th>
                <th className="text-left py-3 px-4 font-semibold text-foreground">Risk</th>
              </tr>
            </thead>
            <tbody>
              {sbomComponents.map((component, idx) => (
                <tr key={idx} className="border-b border-border hover:bg-muted/50 transition-colors">
                  <td className="py-3 px-4 font-mono text-foreground">{component.name}</td>
                  <td className="py-3 px-4 text-muted-foreground">{component.version}</td>
                  <td className="py-3 px-4">
                    <Badge variant={component.vulnerabilities > 0 ? "destructive" : "default"} className={component.vulnerabilities === 0 ? "bg-success" : ""}>
                      {component.vulnerabilities}
                    </Badge>
                  </td>
                  <td className="py-3 px-4 text-muted-foreground">{component.license}</td>
                  <td className="py-3 px-4">
                    <Badge variant={component.risk === "High" ? "destructive" : component.risk === "Medium" ? "outline" : "secondary"}>
                      {component.risk}
                    </Badge>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      <Card className="p-6 bg-card border-border shadow-lg">
        <h3 className="text-xl font-semibold mb-6 text-foreground">Vendor Risk Assessment</h3>
        <div className="space-y-4">
          {vendors.map((vendor, idx) => (
            <div key={idx} className="p-4 rounded-lg bg-muted/50 border border-border">
              <div className="flex items-center justify-between mb-3">
                <div>
                  <span className="font-medium text-foreground">{vendor.name}</span>
                  <p className="text-sm text-muted-foreground">{vendor.components} components</p>
                </div>
                <span className="text-sm text-muted-foreground">Last assessed: {vendor.lastAssessment}</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-sm text-muted-foreground">Risk Score:</span>
                <Progress value={vendor.risk} className="flex-1 h-2" />
                <span className={`font-medium ${vendor.risk >= 90 ? "text-success" : vendor.risk >= 70 ? "text-warning" : "text-destructive"}`}>
                  {vendor.risk}/100
                </span>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default SupplyChainSecurity;