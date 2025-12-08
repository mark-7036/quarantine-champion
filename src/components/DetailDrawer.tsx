import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";

interface DetailDrawerProps {
  open: boolean;
  onClose: () => void;
  title: string;
  description?: string;
  children: React.ReactNode;
  actions?: React.ReactNode;
}

export const DetailDrawer = ({
  open,
  onClose,
  title,
  description,
  children,
  actions,
}: DetailDrawerProps) => {
  return (
    <Drawer open={open} onOpenChange={(isOpen) => !isOpen && onClose()}>
      <DrawerContent className="max-h-[90vh]">
        <DrawerHeader className="border-b border-border">
          <div className="flex items-center justify-between">
            <div>
              <DrawerTitle className="text-xl">{title}</DrawerTitle>
              {description && (
                <DrawerDescription>{description}</DrawerDescription>
              )}
            </div>
            <DrawerClose asChild>
              <Button variant="ghost" size="icon">
                <X className="w-4 h-4" />
              </Button>
            </DrawerClose>
          </div>
        </DrawerHeader>
        <ScrollArea className="flex-1 p-6 max-h-[60vh]">
          {children}
        </ScrollArea>
        {actions && (
          <DrawerFooter className="border-t border-border">
            {actions}
          </DrawerFooter>
        )}
      </DrawerContent>
    </Drawer>
  );
};

interface ThreatDetailProps {
  threat: {
    name: string;
    severity: string;
    type?: string;
    path?: string;
    hash?: string;
    detectedAt?: string;
    status?: string;
  };
  onQuarantine?: () => void;
  onRemove?: () => void;
  onIgnore?: () => void;
}

export const ThreatDetailContent = ({ threat, onQuarantine, onRemove, onIgnore }: ThreatDetailProps) => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-1">
          <p className="text-sm text-muted-foreground">Threat Name</p>
          <p className="font-medium text-foreground">{threat.name}</p>
        </div>
        <div className="space-y-1">
          <p className="text-sm text-muted-foreground">Severity</p>
          <Badge variant={threat.severity === "Critical" || threat.severity === "High" ? "destructive" : "outline"}>
            {threat.severity}
          </Badge>
        </div>
        {threat.type && (
          <div className="space-y-1">
            <p className="text-sm text-muted-foreground">Type</p>
            <p className="font-medium text-foreground">{threat.type}</p>
          </div>
        )}
        {threat.path && (
          <div className="space-y-1 col-span-2">
            <p className="text-sm text-muted-foreground">File Path</p>
            <p className="font-mono text-sm text-foreground break-all">{threat.path}</p>
          </div>
        )}
        {threat.hash && (
          <div className="space-y-1 col-span-2">
            <p className="text-sm text-muted-foreground">SHA-256 Hash</p>
            <p className="font-mono text-xs text-foreground break-all">{threat.hash}</p>
          </div>
        )}
        {threat.detectedAt && (
          <div className="space-y-1">
            <p className="text-sm text-muted-foreground">Detected At</p>
            <p className="font-medium text-foreground">{threat.detectedAt}</p>
          </div>
        )}
        {threat.status && (
          <div className="space-y-1">
            <p className="text-sm text-muted-foreground">Status</p>
            <Badge variant="outline">{threat.status}</Badge>
          </div>
        )}
      </div>

      <div className="flex gap-2 pt-4">
        {onQuarantine && (
          <Button onClick={onQuarantine} className="flex-1">
            Quarantine
          </Button>
        )}
        {onRemove && (
          <Button onClick={onRemove} variant="destructive" className="flex-1">
            Remove
          </Button>
        )}
        {onIgnore && (
          <Button onClick={onIgnore} variant="outline" className="flex-1">
            Ignore
          </Button>
        )}
      </div>
    </div>
  );
};

interface ProcessDetailProps {
  process: {
    pid: number;
    name: string;
    status: string;
    cpu?: string;
    memory?: string;
    path?: string;
    parent?: string;
    startTime?: string;
  };
  onTerminate?: () => void;
  onSuspend?: () => void;
  onAnalyze?: () => void;
}

export const ProcessDetailContent = ({ process, onTerminate, onSuspend, onAnalyze }: ProcessDetailProps) => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-1">
          <p className="text-sm text-muted-foreground">Process ID</p>
          <p className="font-mono text-foreground">{process.pid}</p>
        </div>
        <div className="space-y-1">
          <p className="text-sm text-muted-foreground">Process Name</p>
          <p className="font-medium text-foreground">{process.name}</p>
        </div>
        <div className="space-y-1">
          <p className="text-sm text-muted-foreground">Status</p>
          <Badge variant={process.status === "High Risk" ? "destructive" : "outline"}>
            {process.status}
          </Badge>
        </div>
        {process.cpu && (
          <div className="space-y-1">
            <p className="text-sm text-muted-foreground">CPU Usage</p>
            <p className="font-medium text-foreground">{process.cpu}</p>
          </div>
        )}
        {process.memory && (
          <div className="space-y-1">
            <p className="text-sm text-muted-foreground">Memory Usage</p>
            <p className="font-medium text-foreground">{process.memory}</p>
          </div>
        )}
        {process.path && (
          <div className="space-y-1 col-span-2">
            <p className="text-sm text-muted-foreground">File Path</p>
            <p className="font-mono text-sm text-foreground break-all">{process.path}</p>
          </div>
        )}
        {process.parent && (
          <div className="space-y-1">
            <p className="text-sm text-muted-foreground">Parent Process</p>
            <p className="font-medium text-foreground">{process.parent}</p>
          </div>
        )}
        {process.startTime && (
          <div className="space-y-1">
            <p className="text-sm text-muted-foreground">Start Time</p>
            <p className="font-medium text-foreground">{process.startTime}</p>
          </div>
        )}
      </div>

      <div className="flex gap-2 pt-4">
        {onAnalyze && (
          <Button onClick={onAnalyze} className="flex-1">
            Deep Analysis
          </Button>
        )}
        {onSuspend && (
          <Button onClick={onSuspend} variant="outline" className="flex-1">
            Suspend
          </Button>
        )}
        {onTerminate && (
          <Button onClick={onTerminate} variant="destructive" className="flex-1">
            Terminate
          </Button>
        )}
      </div>
    </div>
  );
};
