import { Workflow, Play, Plus, AlertTriangle, CheckCircle } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

const SOARPlaybooks = () => {
  const playbooks = [
    { 
      name: "Ransomware Response", 
      status: "Active", 
      triggers: "File Encryption Detected", 
      actions: ["Isolate Endpoint", "Kill Process", "Block C2 IPs", "Restore from Backup"],
      executions: 3,
      successRate: "100%"
    },
    { 
      name: "Phishing Email Remediation", 
      status: "Active", 
      triggers: "Malicious Email Detected", 
      actions: ["Delete Email", "Block Sender", "Notify Users", "Update Rules"],
      executions: 47,
      successRate: "98%"
    },
    { 
      name: "Brute Force Mitigation", 
      status: "Active", 
      triggers: "Multiple Failed Logins", 
      actions: ["Block IP", "Disable Account", "Notify Admin", "Enforce MFA"],
      executions: 12,
      successRate: "100%"
    },
    { 
      name: "Malware Containment", 
      status: "Draft", 
      triggers: "Malware Signature Match", 
      actions: ["Quarantine File", "Scan System", "Block Hash", "Generate Report"],
      executions: 0,
      successRate: "N/A"
    },
  ];

  const recentExecutions = [
    { playbook: "Ransomware Response", trigger: "File encryption on Endpoint-045", result: "Success", time: "14:35:22", duration: "12s" },
    { playbook: "Phishing Email Remediation", trigger: "Phishing email detected", result: "Success", time: "14:22:11", duration: "3s" },
    { playbook: "Brute Force Mitigation", trigger: "10 failed logins from 185.220.45.12", result: "Success", time: "14:10:45", duration: "8s" },
  ];

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-display font-bold mb-3 text-foreground">
            SOAR Playbooks
          </h1>
          <p className="text-lg text-muted-foreground">
            Automated security orchestration, response, and remediation
          </p>
        </div>
        <Button className="bg-primary hover:bg-primary/90">
          <Plus className="w-4 h-4 mr-2" />
          Create Playbook
        </Button>
      </div>

      {/* Playbook List */}
      <div className="grid gap-6 md:grid-cols-2">
        {playbooks.map((playbook, index) => (
          <Card key={index} className="p-6 bg-card border-border shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <Workflow className="w-6 h-6 text-primary" />
                <div>
                  <h3 className="text-lg font-semibold text-foreground">{playbook.name}</h3>
                  <p className="text-sm text-muted-foreground">Trigger: {playbook.triggers}</p>
                </div>
              </div>
              <Badge variant={playbook.status === "Active" ? "secondary" : "outline"} className={playbook.status === "Active" ? "bg-green-500/20 text-green-400" : ""}>
                {playbook.status}
              </Badge>
            </div>

            <div className="space-y-3 mb-4">
              <div className="text-sm font-semibold text-foreground">Actions:</div>
              <div className="space-y-1">
                {playbook.actions.map((action, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    {action}
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-border">
              <div className="text-sm text-muted-foreground">
                <span className="font-medium text-foreground">{playbook.executions}</span> executions • <span className="font-medium text-foreground">{playbook.successRate}</span> success
              </div>
              <Button size="sm" variant="outline">
                <Play className="w-4 h-4 mr-2" />
                Run
              </Button>
            </div>
          </Card>
        ))}
      </div>

      {/* Playbook Builder */}
      <Card className="p-6 bg-card border-border shadow-lg">
        <h3 className="text-xl font-semibold mb-6 text-foreground">Playbook Builder (Drag & Drop)</h3>
        <div className="grid grid-cols-3 gap-6">
          <div className="space-y-3">
            <div className="text-sm font-semibold text-foreground mb-3">Triggers</div>
            {["Malware Detected", "Network Anomaly", "Failed Login", "Data Exfiltration"].map((trigger, idx) => (
              <div key={idx} className="p-3 bg-muted/50 rounded-lg border border-border hover:bg-muted cursor-move">
                <div className="text-sm text-foreground">{trigger}</div>
              </div>
            ))}
          </div>

          <div className="space-y-3">
            <div className="text-sm font-semibold text-foreground mb-3">Actions</div>
            {["Isolate Endpoint", "Block IP", "Kill Process", "Quarantine File", "Notify Admin"].map((action, idx) => (
              <div key={idx} className="p-3 bg-muted/50 rounded-lg border border-border hover:bg-muted cursor-move">
                <div className="text-sm text-foreground">{action}</div>
              </div>
            ))}
          </div>

          <div className="space-y-3">
            <div className="text-sm font-semibold text-foreground mb-3">Workflow Canvas</div>
            <div className="min-h-[300px] p-4 bg-muted/30 rounded-lg border-2 border-dashed border-border">
              <div className="text-sm text-muted-foreground text-center mt-20">
                Drag triggers and actions here to build your playbook
              </div>
            </div>
          </div>
        </div>
      </Card>

      {/* Recent Executions */}
      <Card className="p-6 bg-card border-border shadow-lg">
        <h3 className="text-xl font-semibold mb-6 text-foreground">Recent Playbook Executions</h3>
        <ScrollArea className="h-[300px]">
          <div className="space-y-3">
            {recentExecutions.map((exec, index) => (
              <div key={index} className="p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors border border-border">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <div>
                      <div className="font-semibold text-foreground">{exec.playbook}</div>
                      <div className="text-sm text-muted-foreground">{exec.trigger}</div>
                    </div>
                  </div>
                  <Badge variant="secondary" className="bg-green-500/20 text-green-400">
                    {exec.result}
                  </Badge>
                </div>
                <div className="ml-8 flex gap-4 text-xs text-muted-foreground">
                  <span>Duration: {exec.duration}</span>
                  <span>{exec.time}</span>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </Card>

      {/* Ransomware Rollback */}
      <Card className="p-6 bg-card border-border shadow-lg">
        <h3 className="text-xl font-semibold mb-4 text-foreground">Ransomware Recovery Control</h3>
        <div className="grid grid-cols-2 gap-4">
          <div className="p-4 bg-red-500/10 border border-red-500/30 rounded-lg">
            <div className="flex items-center gap-2 mb-3">
              <AlertTriangle className="w-5 h-5 text-red-400" />
              <span className="font-semibold text-foreground">Emergency Actions</span>
            </div>
            <div className="space-y-2">
              <Button variant="destructive" className="w-full">Isolate All Endpoints</Button>
              <Button variant="destructive" className="w-full">Kill Suspicious Processes</Button>
              <Button variant="destructive" className="w-full">Block All C2 IPs</Button>
            </div>
          </div>

          <div className="p-4 bg-green-500/10 border border-green-500/30 rounded-lg">
            <div className="flex items-center gap-2 mb-3">
              <CheckCircle className="w-5 h-5 text-green-400" />
              <span className="font-semibold text-foreground">Recovery Options</span>
            </div>
            <div className="space-y-2">
              <Button variant="outline" className="w-full">Restore from Backup</Button>
              <Button variant="outline" className="w-full">Decrypt Files (if key available)</Button>
              <Button variant="outline" className="w-full">Generate Incident Report</Button>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default SOARPlaybooks;
