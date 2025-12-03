import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { RotateCcw, Trash2, Shield } from "lucide-react";
import { toast } from "sonner";
import { PageHeader } from "@/components/PageHeader";
import { SeverityBadge } from "@/components/SeverityBadge";
import { DataTable } from "@/components/DataTable";
import { SeverityLevel } from "@/lib/constants";

interface QuarantineItem {
  id: string;
  fileName: string;
  threatType: string;
  severity: SeverityLevel;
  dateQuarantined: string;
}

const initialItems: QuarantineItem[] = [
  { id: "1", fileName: "EICAR-Test-File.exe", threatType: "Test Malware", severity: "Critical", dateQuarantined: "5/11/2016" },
  { id: "2", fileName: "Malware.exe", threatType: "Trojan.Generic", severity: "High", dateQuarantined: "10/09/2025" },
  { id: "3", fileName: "Suspicious.doc", threatType: "Macro Virus", severity: "Medium", dateQuarantined: "10/08/2025" },
  { id: "4", fileName: "Adware_Bundle.msi", threatType: "Adware", severity: "Low", dateQuarantined: "10/07/2025" },
  { id: "5", fileName: "Ransomware.crypted", threatType: "Ransomware.WannaCry", severity: "Critical", dateQuarantined: "10/06/2025" },
];

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

  const columns = [
    {
      key: "fileName",
      header: "File Name",
      render: (item: QuarantineItem) => (
        <span className="text-foreground font-medium text-sm">{item.fileName}</span>
      ),
    },
    {
      key: "threatType",
      header: "Threat Type",
      render: (item: QuarantineItem) => (
        <span className="text-muted-foreground text-sm">{item.threatType}</span>
      ),
    },
    {
      key: "severity",
      header: "Severity",
      render: (item: QuarantineItem) => <SeverityBadge severity={item.severity} />,
    },
    {
      key: "date",
      header: "Date",
      render: (item: QuarantineItem) => (
        <span className="text-muted-foreground text-sm tabular-nums">{item.dateQuarantined}</span>
      ),
    },
    {
      key: "actions",
      header: "Actions",
      align: "right" as const,
      render: (item: QuarantineItem) => (
        <div className="flex justify-end gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => handleRestore(item.id)}
            className="border-success/30 text-success hover:bg-success/10 hover:border-success/50"
          >
            <RotateCcw className="w-4 h-4 mr-1.5" />
            Restore
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => handleDelete(item.id)}
            className="border-critical/30 text-critical hover:bg-critical/10 hover:border-critical/50"
          >
            <Trash2 className="w-4 h-4 mr-1.5" />
            Delete
          </Button>
        </div>
      ),
    },
  ];

  return (
    <div className="space-y-8 animate-fade-in">
      <PageHeader
        title="Quarantine"
        description="Manage quarantined threats and restore false positives"
        icon={Shield}
      />

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
              <DataTable
                columns={columns}
                data={items}
                keyExtractor={(item) => item.id}
              />
            </div>
          )}
        </div>
      </Card>
    </div>
  );
};

export default Quarantine;
