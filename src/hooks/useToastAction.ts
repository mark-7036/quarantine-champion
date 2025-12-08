import { useToast } from "@/hooks/use-toast";

export const useToastAction = () => {
  const { toast } = useToast();

  const showActionToast = (title: string, description: string, variant: "default" | "destructive" = "default") => {
    toast({
      title,
      description,
      variant,
    });
  };

  const showSuccessToast = (title: string, description?: string) => {
    toast({
      title,
      description: description || "Action completed successfully",
    });
  };

  const showErrorToast = (title: string, description?: string) => {
    toast({
      title,
      description: description || "An error occurred",
      variant: "destructive",
    });
  };

  const showScanStarted = (scanType: string) => {
    toast({
      title: `${scanType} Started`,
      description: "Scanning your system for threats...",
    });
  };

  const showScanComplete = (threats: number) => {
    toast({
      title: "Scan Complete",
      description: threats > 0 ? `Found ${threats} potential threats` : "No threats detected",
      variant: threats > 0 ? "destructive" : "default",
    });
  };

  const showThreatBlocked = (threatName: string) => {
    toast({
      title: "Threat Blocked",
      description: `${threatName} has been blocked and quarantined`,
    });
  };

  const showSettingUpdated = (setting: string, enabled: boolean) => {
    toast({
      title: "Setting Updated",
      description: `${setting} has been ${enabled ? "enabled" : "disabled"}`,
    });
  };

  return {
    showActionToast,
    showSuccessToast,
    showErrorToast,
    showScanStarted,
    showScanComplete,
    showThreatBlocked,
    showSettingUpdated,
  };
};
