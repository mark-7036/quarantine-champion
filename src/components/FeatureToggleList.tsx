import { LucideIcon } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
  enabled: boolean;
}

interface FeatureToggleListProps {
  features: Feature[];
  onToggle?: (index: number, enabled: boolean) => void;
  variant?: "card" | "list";
}

export const FeatureToggleList = ({
  features,
  onToggle,
  variant = "card",
}: FeatureToggleListProps) => {
  if (variant === "list") {
    return (
      <div className="space-y-4">
        {features.map((feature, index) => (
          <div
            key={feature.title}
            className="flex items-center justify-between p-4 rounded-lg bg-muted/50"
          >
            <div className="flex items-center gap-4">
              <feature.icon
                className={`w-5 h-5 ${
                  feature.enabled ? "text-primary" : "text-muted-foreground"
                }`}
              />
              <div>
                <div className="font-semibold text-foreground">
                  {feature.title}
                </div>
                <div className="text-sm text-muted-foreground">
                  {feature.description}
                </div>
              </div>
            </div>
            <Switch
              checked={feature.enabled}
              onCheckedChange={(checked) => onToggle?.(index, checked)}
            />
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="grid gap-5 max-w-4xl">
      {features.map((feature, index) => (
        <Card
          key={feature.title}
          className="border-border bg-gradient-to-br from-card/80 to-card/60 backdrop-blur-xl shadow-lg hover:shadow-xl transition-all duration-300 animate-slide-in"
          style={{
            boxShadow: "var(--shadow-elevated)",
            animationDelay: `${index * 60}ms`,
          }}
        >
          <div className="p-7">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-5">
                <div className="p-3.5 rounded-xl bg-primary/10 border border-primary/20">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-display font-semibold text-foreground text-lg">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground max-w-md leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
              <Switch
                defaultChecked={feature.enabled}
                className="data-[state=checked]:bg-success"
                onCheckedChange={(checked) => onToggle?.(index, checked)}
              />
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
};
