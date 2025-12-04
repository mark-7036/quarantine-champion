import {
  Shield,
  Activity,
  Search,
  Lock,
  Globe,
  Settings,
  FileSearch,
  Wrench,
  BookOpen,
  User,
  Eye,
  Brain,
  Wifi,
  GitBranch,
  Target,
  AppWindow,
  Usb,
  Cpu,
  AlertTriangle,
  Scan,
  Bug,
  Network,
  LucideIcon,
} from "lucide-react";

export interface MenuItem {
  icon: LucideIcon;
  label: string;
  path: string;
}

export interface MenuSection {
  title: string;
  items: MenuItem[];
}

export const menuSections: MenuSection[] = [
  {
    title: "Overview",
    items: [
      { icon: Activity, label: "Dashboard", path: "/" },
    ],
  },
  {
    title: "Protection",
    items: [
      { icon: Shield, label: "Real-Time Shield", path: "/protection" },
      { icon: Search, label: "Scan & Clean", path: "/scan-analysis" },
      { icon: Lock, label: "Quarantine", path: "/quarantine" },
      { icon: Shield, label: "Ransomware Defense", path: "/ransomware-defense" },
    ],
  },
  {
    title: "Detection",
    items: [
      { icon: AlertTriangle, label: "Threats & Alerts", path: "/threats" },
      { icon: Activity, label: "XDR Analytics", path: "/xdr-analytics" },
      { icon: Eye, label: "Behavior Monitor", path: "/behavior-monitor" },
      { icon: Brain, label: "Advanced Detection", path: "/advanced-detection" },
      { icon: Bug, label: "Threat Intelligence", path: "/threat-intelligence" },
    ],
  },
  {
    title: "Network",
    items: [
      { icon: Network, label: "Network Security", path: "/network-security" },
      { icon: Globe, label: "Web Protection", path: "/web-protection" },
      { icon: Wifi, label: "DNS Security", path: "/dns-security" },
    ],
  },
  {
    title: "Investigation",
    items: [
      { icon: FileSearch, label: "Forensics", path: "/forensics" },
      { icon: Scan, label: "Sandbox Analysis", path: "/sandbox-analysis" },
      { icon: GitBranch, label: "Attack Chain", path: "/attack-chain" },
      { icon: Target, label: "Threat Hunting", path: "/threat-hunting" },
    ],
  },
  {
    title: "Controls",
    items: [
      { icon: AppWindow, label: "Application Control", path: "/app-control" },
      { icon: Usb, label: "Device Control", path: "/device-control" },
      { icon: Cpu, label: "Process Security", path: "/process-security" },
    ],
  },
  {
    title: "System",
    items: [
      { icon: Wrench, label: "System Tools", path: "/system-tools" },
      { icon: BookOpen, label: "Reports & Logs", path: "/reports-logs" },
      { icon: Settings, label: "Settings", path: "/settings" },
      { icon: User, label: "Account", path: "/account" },
    ],
  },
];
