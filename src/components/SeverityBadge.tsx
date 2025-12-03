import { Badge } from "@/components/ui/badge";
import { SEVERITY_COLORS, SeverityLevel } from "@/lib/constants";
import { cn } from "@/lib/utils";

interface SeverityBadgeProps {
  severity: SeverityLevel;
  className?: string;
}

export const SeverityBadge = ({ severity, className }: SeverityBadgeProps) => {
  return (
    <Badge
      variant="outline"
      className={cn(
        SEVERITY_COLORS[severity],
        "font-medium text-xs px-3 py-1",
        className
      )}
    >
      {severity}
    </Badge>
  );
};
