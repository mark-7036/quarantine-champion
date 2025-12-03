// Centralized constants for severity, status colors, and other shared mappings

export const SEVERITY_COLORS = {
  Critical: "bg-critical/10 text-critical border-critical/30",
  High: "bg-warning/10 text-warning border-warning/30",
  Medium: "bg-info/10 text-info border-info/30",
  Low: "bg-muted/50 text-muted-foreground border-border",
} as const;

export const STATUS_COLORS = {
  Active: "bg-critical/10 text-critical border-critical/30",
  Investigating: "bg-warning/10 text-warning border-warning/30",
  Resolved: "bg-success/10 text-success border-success/30",
  "False Positive": "bg-muted text-muted-foreground border-border",
  Protected: "bg-success/10 text-success border-success/30",
  "At Risk": "bg-warning/10 text-warning border-warning/30",
  Offline: "bg-muted text-muted-foreground border-border",
  Blocked: "bg-critical/10 text-critical border-critical/30",
  Allowed: "bg-success/10 text-success border-success/30",
  Quarantined: "bg-warning/10 text-warning border-warning/30",
  Unprocessed: "bg-muted text-muted-foreground border-border",
} as const;

export const AGENT_STATUS_COLORS = {
  Active: "bg-success/10 text-success border-success/30",
  Outdated: "bg-warning/10 text-warning border-warning/30",
  Disconnected: "bg-critical/10 text-critical border-critical/30",
} as const;

export type SeverityLevel = keyof typeof SEVERITY_COLORS;
export type StatusType = keyof typeof STATUS_COLORS;
export type AgentStatus = keyof typeof AGENT_STATUS_COLORS;
