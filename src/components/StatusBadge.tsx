import { Badge } from "@/components/ui/badge";
import { STATUS_COLORS, StatusType } from "@/lib/constants";
import { cn } from "@/lib/utils";

interface StatusBadgeProps {
  status: StatusType;
  className?: string;
}

export const StatusBadge = ({ status, className }: StatusBadgeProps) => {
  return (
    <Badge
      variant="outline"
      className={cn(
        STATUS_COLORS[status],
        "text-xs px-3 py-1",
        className
      )}
    >
      {status}
    </Badge>
  );
};
