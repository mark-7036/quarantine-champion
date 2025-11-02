import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { RotateCcw, Trash2 } from "lucide-react";
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
  Critical: "bg-critical/20 text-critical border-critical/50",
  High: "bg-warning/20 text-warning border-warning/50",
  Medium: "bg-blue-500/20 text-blue-400 border-blue-500/50",
  Low: "bg-muted text-muted-foreground border-border",
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
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2">Quarantine</h1>
        <p className="text-muted-foreground">
          Manage quarantined threats. Restore false positives or permanently delete confirmed threats.
        </p>
      </div>

      <Card className="border-border bg-card/50 backdrop-blur-sm">
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-foreground">Quarantined Items</h2>
            <div className="text-sm text-muted-foreground">
              Total: <span className="text-foreground font-semibold">{items.length}</span> items
            </div>
          </div>

          {items.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">No quarantined items</p>
              <p className="text-muted-foreground text-sm mt-2">Your system is clean!</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 px-4 text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                      File Name
                    </th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                      Threat Type
                    </th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                      Severity
                    </th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                      Date
                    </th>
                    <th className="text-right py-3 px-4 text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {items.map((item) => (
                    <tr key={item.id} className="hover:bg-muted/50 transition-colors">
                      <td className="py-4 px-4">
                        <span className="text-foreground font-medium">{item.fileName}</span>
                      </td>
                      <td className="py-4 px-4">
                        <span className="text-muted-foreground">{item.threatType}</span>
                      </td>
                      <td className="py-4 px-4">
                        <Badge
                          variant="outline"
                          className={severityColors[item.severity]}
                        >
                          {item.severity}
                        </Badge>
                      </td>
                      <td className="py-4 px-4">
                        <span className="text-muted-foreground">{item.dateQuarantined}</span>
                      </td>
                      <td className="py-4 px-4">
                        <div className="flex justify-end gap-2">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => handleRestore(item.id)}
                            className="border-success/50 text-success hover:bg-success/10"
                          >
                            <RotateCcw className="w-4 h-4 mr-1" />
                            Restore
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => handleDelete(item.id)}
                            className="border-critical/50 text-critical hover:bg-critical/10"
                          >
                            <Trash2 className="w-4 h-4 mr-1" />
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
