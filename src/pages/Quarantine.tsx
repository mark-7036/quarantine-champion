import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { RotateCcw, Trash2, Shield } from "lucide-react";
import { toast } from "sonner";

interface QuarantineItem {
  id: string;
  fileName: string;
  threatType: string;
  severity: "Critical" | "High" | "Medium" | "Low";
  dateQuarantined: string;
}

const initialItems: QuarantineItem[] = [
  {
    id: "1",
    fileName: "EICAR-Test-File.exe",
    threatType: "Test Malware",
    severity: "Critical",
    dateQuarantined: "5/11/2016",
  },
  {
    id: "2",
    fileName: "Malware.exe",
    threatType: "Trojan.Generic",
    severity: "High",
    dateQuarantined: "10/09/2025",
  },
  {
    id: "3",
    fileName: "Suspicious.doc",
    threatType: "Macro Virus",
    severity: "Medium",
    dateQuarantined: "10/08/2025",
  },
  {
    id: "4",
    fileName: "Adware_Bundle.msi",
    threatType: "Adware",
    severity: "Low",
    dateQuarantined: "10/07/2025",
  },
  {
    id: "5",
    fileName: "Ransomware.crypted",
    threatType: "Ransomware.WannaCry",
    severity: "Critical",
    dateQuarantined: "10/06/2025",
  },
];

const severityColors = {
  Critical: "bg-critical/10 text-critical border-critical/30",
  High: "bg-warning/10 text-warning border-warning/30",
  Medium: "bg-blue-500/10 text-blue-400 border-blue-500/30",
  Low: "bg-muted/50 text-muted-foreground border-border",
};

const Quarantine = () => {
  const [items, setItems] = useState<QuarantineItem[]>(initialItems);

  const handleRestore = (id: string) => {
    const item = items.find((i) => i.id === id);
    setItems(items.filter((i) => i.id !== id));
    toast.success(`Restored ${item?.fileName}`);
  };

  const handleDelete = (id: string) => {
    const item = items.find((i) => i.id === id);
    setItems(items.filter((i) => i.id !== id));
    toast.success(`Permanently deleted ${item?.fileName}`);
  };

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="space-y-3">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-primary/10 border border-primary/20">
            <Shield className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h1 className="text-4xl font-display font-bold text-foreground tracking-tight">Quarantine</h1>
            <p className="text-muted-foreground mt-1 text-base">
              Manage quarantined threats and restore false positives
            </p>
          </div>
        </div>
      </div>

      <Card className="border-border bg-gradient-to-br from-card/80 to-card/60 backdrop-blur-xl shadow-2xl" style={{ boxShadow: 'var(--shadow-elevated)' }}>
        <div className="p-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-xl font-display font-semibold text-foreground">Quarantined Items</h2>
            <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-muted/50 border border-border">
              <span className="text-sm text-muted-foreground">Total:</span>
              <span className="text-lg font-semibold text-foreground tabular-nums">{items.length}</span>
              <span className="text-sm text-muted-foreground">items</span>
            </div>
          </div>

          {items.length === 0 ? (
            <div className="text-center py-20">
              <div className="inline-flex p-4 rounded-2xl bg-success/10 border border-success/20 mb-4">
                <Shield className="w-12 h-12 text-success" />
              </div>
              <p className="text-foreground text-xl font-semibold mb-2">No quarantined items</p>
              <p className="text-muted-foreground">Your system is clean and secure</p>
            </div>
          ) : (
            <div className="overflow-hidden rounded-xl border border-border">
              <table className="w-full">
                <thead className="bg-muted/30">
                  <tr>
                    <th className="text-left py-4 px-6 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                      File Name
                    </th>
                    <th className="text-left py-4 px-6 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                      Threat Type
                    </th>
                    <th className="text-left py-4 px-6 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                      Severity
                    </th>
                    <th className="text-left py-4 px-6 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                      Date
                    </th>
                    <th className="text-right py-4 px-6 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border bg-card/50">
                  {items.map((item, index) => (
                    <tr 
                      key={item.id} 
                      className="hover:bg-muted/20 transition-colors animate-fade-in"
                      style={{ animationDelay: `${index * 50}ms` }}
                    >
                      <td className="py-5 px-6">
                        <span className="text-foreground font-medium text-sm tracking-wide">{item.fileName}</span>
                      </td>
                      <td className="py-5 px-6">
                        <span className="text-muted-foreground text-sm">{item.threatType}</span>
                      </td>
                      <td className="py-5 px-6">
                        <Badge
                          variant="outline"
                          className={`${severityColors[item.severity]} font-medium text-xs px-3 py-1`}
                        >
                          {item.severity}
                        </Badge>
                      </td>
                      <td className="py-5 px-6">
                        <span className="text-muted-foreground text-sm tabular-nums">{item.dateQuarantined}</span>
                      </td>
                      <td className="py-5 px-6">
                        <div className="flex justify-end gap-2">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => handleRestore(item.id)}
                            className="border-success/30 text-success hover:bg-success/10 hover:border-success/50 transition-all"
                          >
                            <RotateCcw className="w-4 h-4 mr-1.5" />
                            Restore
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => handleDelete(item.id)}
                            className="border-critical/30 text-critical hover:bg-critical/10 hover:border-critical/50 transition-all"
                          >
                            <Trash2 className="w-4 h-4 mr-1.5" />
                            Delete
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </Card>
    </div>
  );
};

export default Quarantine;
