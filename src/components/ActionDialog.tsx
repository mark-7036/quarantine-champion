import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { AlertTriangle, CheckCircle, Info, Shield } from "lucide-react";

interface ActionDialogProps {
  open: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title: string;
  description: string;
  confirmText?: string;
  cancelText?: string;
  variant?: "default" | "destructive" | "warning" | "success";
}

export const ActionDialog = ({
  open,
  onClose,
  onConfirm,
  title,
  description,
  confirmText = "Confirm",
  cancelText = "Cancel",
  variant = "default",
}: ActionDialogProps) => {
  const icons = {
    default: Info,
    destructive: AlertTriangle,
    warning: AlertTriangle,
    success: CheckCircle,
  };

  const iconColors = {
    default: "text-primary",
    destructive: "text-destructive",
    warning: "text-warning",
    success: "text-success",
  };

  const Icon = icons[variant];

  return (
    <Dialog open={open} onOpenChange={(isOpen) => !isOpen && onClose()}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <div className="flex items-center gap-3">
            <div className={`p-2 rounded-full bg-muted ${iconColors[variant]}`}>
              <Icon className="w-5 h-5" />
            </div>
            <DialogTitle>{title}</DialogTitle>
          </div>
          <DialogDescription className="pt-2">{description}</DialogDescription>
        </DialogHeader>
        <DialogFooter className="gap-2 sm:gap-0">
          <Button variant="outline" onClick={onClose}>
            {cancelText}
          </Button>
          <Button
            variant={variant === "destructive" ? "destructive" : "default"}
            onClick={() => {
              onConfirm();
              onClose();
            }}
          >
            {confirmText}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

interface ScanDialogProps {
  open: boolean;
  onClose: () => void;
  onStartScan: (type: string) => void;
}

export const ScanDialog = ({ open, onClose, onStartScan }: ScanDialogProps) => {
  const scanTypes = [
    {
      type: "quick",
      title: "Quick Scan",
      description: "Scan common threat locations (~2 minutes)",
      icon: Shield,
    },
    {
      type: "full",
      title: "Full Scan",
      description: "Comprehensive system scan (~30 minutes)",
      icon: Shield,
    },
    {
      type: "custom",
      title: "Custom Scan",
      description: "Select specific files or folders",
      icon: Shield,
    },
  ];

  return (
    <Dialog open={open} onOpenChange={(isOpen) => !isOpen && onClose()}>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>Start a Scan</DialogTitle>
          <DialogDescription>
            Choose the type of scan you want to perform
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-3 py-4">
          {scanTypes.map((scan) => (
            <button
              key={scan.type}
              onClick={() => {
                onStartScan(scan.type);
                onClose();
              }}
              className="w-full p-4 rounded-lg border border-border bg-muted/30 hover:bg-muted transition-colors text-left flex items-center gap-4"
            >
              <div className="p-2 rounded-lg bg-primary/10">
                <scan.icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="font-medium text-foreground">{scan.title}</p>
                <p className="text-sm text-muted-foreground">{scan.description}</p>
              </div>
            </button>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
};

interface QuarantineActionDialogProps {
  open: boolean;
  onClose: () => void;
  action: "restore" | "delete" | "analyze";
  fileName: string;
  onConfirm: () => void;
}

export const QuarantineActionDialog = ({
  open,
  onClose,
  action,
  fileName,
  onConfirm,
}: QuarantineActionDialogProps) => {
  const actions = {
    restore: {
      title: "Restore File",
      description: `Are you sure you want to restore "${fileName}" to its original location? This file was flagged as potentially malicious.`,
      confirmText: "Restore",
      variant: "warning" as const,
    },
    delete: {
      title: "Permanently Delete",
      description: `Are you sure you want to permanently delete "${fileName}"? This action cannot be undone.`,
      confirmText: "Delete",
      variant: "destructive" as const,
    },
    analyze: {
      title: "Analyze File",
      description: `Send "${fileName}" to the sandbox for deep behavioral analysis?`,
      confirmText: "Analyze",
      variant: "default" as const,
    },
  };

  const config = actions[action];

  return (
    <ActionDialog
      open={open}
      onClose={onClose}
      onConfirm={onConfirm}
      title={config.title}
      description={config.description}
      confirmText={config.confirmText}
      variant={config.variant}
    />
  );
};
