import { Card } from "@/components/ui/card";
import { SeverityBadge } from "./SeverityBadge";
import { SeverityLevel } from "@/lib/constants";

interface TimelineItem {
  id: string;
  title: string;
  description?: string;
  timestamp: string;
  severity: SeverityLevel;
}

interface AlertTimelineProps {
  items: TimelineItem[];
  title?: string;
}

export const AlertTimeline = ({ items, title }: AlertTimelineProps) => {
  const getSeverityColor = (severity: SeverityLevel) => {
    switch (severity) {
      case "Critical":
        return "bg-critical border-critical";
      case "High":
        return "bg-warning border-warning";
      case "Medium":
        return "bg-info border-info";
      default:
        return "bg-muted border-muted";
    }
  };

  return (
    <Card className="p-6 border-border bg-card shadow-lg">
      {title && (
        <h3 className="text-xl font-semibold text-foreground mb-6">{title}</h3>
      )}
      <div className="relative">
        <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-border"></div>
        <div className="space-y-6 pl-12">
          {items.map((item, index) => (
            <div
              key={item.id}
              className="relative animate-slide-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div
                className={`absolute -left-[2.6rem] w-6 h-6 rounded-full border-2 ${getSeverityColor(
                  item.severity
                )}`}
              ></div>
              <Card className="p-4 border-border bg-muted/30">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <p className="font-semibold text-foreground">{item.title}</p>
                    {item.description && (
                      <p className="text-sm text-muted-foreground">
                        {item.description}
                      </p>
                    )}
                  </div>
                  <SeverityBadge severity={item.severity} />
                </div>
                <p className="text-xs text-muted-foreground">{item.timestamp}</p>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
};
