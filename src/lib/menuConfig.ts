import {
  Shield,
  Activity,
  Search,
  Lock,
  Globe,
  Layers,
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
  Cloud,
  Smartphone,
  Key,
  Users,
  Package,
  RotateCcw,
  AppWindow,
  Usb,
  Cpu,
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
    title: "Core",
    items: [
      { icon: Activity, label: "Dashboard", path: "/" },
      { icon: Shield, label: "Threats & Alerts", path: "/threats" },
      { icon: Activity, label: "Devices", path: "/devices" },
      { icon: Shield, label: "Protection", path: "/protection" },
      { icon: Search, label: "Scan & Analysis", path: "/scan-analysis" },
      { icon: Lock, label: "Quarantine", path: "/quarantine" },
    ],
  },
  {
    title: "Telemetry",
    items: [
      { icon: User, label: "Identity", path: "/telemetry/identity" },
      { icon: FileSearch, label: "Email", path: "/telemetry/email" },
      { icon: Globe, label: "Cloud", path: "/telemetry/cloud" },
      { icon: Wrench, label: "Hardware", path: "/telemetry/hardware" },
      { icon: Wifi, label: "Network", path: "/telemetry/network" },
      { icon: Eye, label: "Behavior Monitor", path: "/behavior-monitor" },
    ],
  },
  {
    title: "Detection & Response",
    items: [
      { icon: Layers, label: "XDR Analytics", path: "/xdr-analytics" },
      { icon: Brain, label: "Advanced Detection", path: "/advanced-detection" },
      { icon: Shield, label: "Threat Intelligence", path: "/threat-intelligence" },
      { icon: Activity, label: "SOAR Playbooks", path: "/soar" },
      { icon: Search, label: "Data Enrichment", path: "/data-enrichment" },
      { icon: Target, label: "Threat Hunting", path: "/threat-hunting" },
    ],
  },
  {
    title: "Investigation",
    items: [
      { icon: FileSearch, label: "Forensics", path: "/forensics" },
      { icon: Activity, label: "Sandbox Analysis", path: "/sandbox-analysis" },
      { icon: GitBranch, label: "Attack Chain Viewer", path: "/attack-chain" },
    ],
  },
  {
    title: "Network & Web",
    items: [
      { icon: Globe, label: "Network Security", path: "/network-security" },
      { icon: Globe, label: "Web Protection", path: "/web-protection" },
      { icon: Globe, label: "DNS Security", path: "/dns-security" },
    ],
  },
  {
    title: "Infrastructure",
    items: [
      { icon: Activity, label: "Endpoint Control", path: "/endpoint-control" },
      { icon: Shield, label: "Hardware Security", path: "/hardware-security" },
      { icon: Activity, label: "Data Lake", path: "/data-lake" },
      { icon: Cloud, label: "Cloud Security", path: "/cloud-security" },
      { icon: Smartphone, label: "Mobile Security", path: "/mobile-security" },
    ],
  },
  {
    title: "Advanced Features",
    items: [
      { icon: Key, label: "Deception Technology", path: "/deception" },
      { icon: Users, label: "Zero Trust", path: "/zero-trust" },
      { icon: Package, label: "Supply Chain", path: "/supply-chain" },
      { icon: RotateCcw, label: "Ransomware Defense", path: "/ransomware-defense" },
      { icon: AppWindow, label: "Application Control", path: "/app-control" },
      { icon: Usb, label: "Device Control", path: "/device-control" },
      { icon: Cpu, label: "Process Security", path: "/process-security" },
    ],
  },
  {
    title: "Management",
    items: [
      { icon: Wrench, label: "System Tools", path: "/system-tools" },
      { icon: BookOpen, label: "Reports & Logs", path: "/reports-logs" },
      { icon: Shield, label: "Compliance", path: "/compliance" },
      { icon: Settings, label: "Settings", path: "/settings" },
      { icon: Shield, label: "Admin Panel", path: "/admin" },
      { icon: User, label: "Account", path: "/account" },
    ],
  },
];
