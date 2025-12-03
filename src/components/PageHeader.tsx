import { LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ReactNode } from "react";

interface PageHeaderProps {
  title: string;
  description: string;
  icon?: LucideIcon;
  action?: {
    label: string;
    icon?: LucideIcon;
    onClick?: () => void;
  };
  badge?: ReactNode;
}

export const PageHeader = ({
  title,
  description,
  icon: Icon,
  action,
  badge,
}: PageHeaderProps) => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        {Icon && (
          <div className="p-2.5 rounded-xl bg-primary/10 border border-primary/20">
            <Icon className="w-6 h-6 text-primary" />
          </div>
        )}
        <div>
          <h1 className="text-4xl font-display font-bold text-foreground tracking-tight">
            {title}
          </h1>
          <p className="text-muted-foreground mt-1 text-base">{description}</p>
        </div>
      </div>
      <div className="flex items-center gap-4">
        {badge}
        {action && (
          <Button
            className="bg-primary hover:bg-primary/90"
            onClick={action.onClick}
          >
            {action.icon && <action.icon className="w-4 h-4 mr-2" />}
            {action.label}
          </Button>
        )}
      </div>
    </div>
  );
};
