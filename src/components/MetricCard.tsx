import { LucideIcon } from "lucide-react";
import { Card } from "@/components/ui/card";

interface MetricCardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  iconColor?: string;
  valueColor?: string;
}

export const MetricCard = ({
  title,
  value,
  icon: Icon,
  iconColor = "text-primary",
  valueColor = "text-foreground",
}: MetricCardProps) => {
  return (
    <Card className="p-6 border-border bg-gradient-to-br from-card/80 to-card/60">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-muted-foreground text-sm">{title}</p>
          <p className={`text-3xl font-bold mt-2 ${valueColor}`}>{value}</p>
        </div>
        <Icon className={`w-8 h-8 ${iconColor}`} />
      </div>
    </Card>
  );
};
