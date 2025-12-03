import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import Dashboard from "./pages/Dashboard";
import Threats from "./pages/Threats";
import Devices from "./pages/Devices";
import Protection from "./pages/Protection";
import ScanAnalysis from "./pages/ScanAnalysis";
import Quarantine from "./pages/Quarantine";
import NetworkSecurity from "./pages/NetworkSecurity";
import XDRAnalytics from "./pages/XDRAnalytics";
import SystemTools from "./pages/SystemTools";
import ReportsLogs from "./pages/ReportsLogs";
import Settings from "./pages/Settings";
import Account from "./pages/Account";
import Admin from "./pages/Admin";
import NotFound from "./pages/NotFound";
import IdentityTelemetry from "./pages/IdentityTelemetry";
import EmailTelemetry from "./pages/EmailTelemetry";
import CloudTelemetry from "./pages/CloudTelemetry";
import HardwareTelemetry from "./pages/HardwareTelemetry";
import DataEnrichment from "./pages/DataEnrichment";
import ThreatIntelligence from "./pages/ThreatIntelligence";
import SOARPlaybooks from "./pages/SOARPlaybooks";
import ForensicsDashboard from "./pages/ForensicsDashboard";
import EndpointControl from "./pages/EndpointControl";
import HardwareSecurity from "./pages/HardwareSecurity";
import SandboxAnalysis from "./pages/SandboxAnalysis";
import DataLake from "./pages/DataLake";
import ComplianceDashboard from "./pages/ComplianceDashboard";
import NetworkTelemetry from "./pages/NetworkTelemetry";
import BehaviorMonitor from "./pages/BehaviorMonitor";
import AdvancedDetection from "./pages/AdvancedDetection";
import DNSSecurity from "./pages/DNSSecurity";
import AttackChainViewer from "./pages/AttackChainViewer";
import ThreatHunting from "./pages/ThreatHunting";
import CloudSecurity from "./pages/CloudSecurity";
import MobileSecurity from "./pages/MobileSecurity";
import DeceptionTechnology from "./pages/DeceptionTechnology";
import ZeroTrust from "./pages/ZeroTrust";
import SupplyChainSecurity from "./pages/SupplyChainSecurity";
import RansomwareDefense from "./pages/RansomwareDefense";
import ApplicationControl from "./pages/ApplicationControl";
import DeviceControl from "./pages/DeviceControl";
import WebProtection from "./pages/WebProtection";
import AdvancedProcessSecurity from "./pages/AdvancedProcessSecurity";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/threats" element={<Threats />} />
            <Route path="/devices" element={<Devices />} />
            <Route path="/protection" element={<Protection />} />
            <Route path="/scan-analysis" element={<ScanAnalysis />} />
            <Route path="/quarantine" element={<Quarantine />} />
            <Route path="/network-security" element={<NetworkSecurity />} />
            <Route path="/xdr-analytics" element={<XDRAnalytics />} />
            <Route path="/system-tools" element={<SystemTools />} />
            <Route path="/reports-logs" element={<ReportsLogs />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/account" element={<Account />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/telemetry/identity" element={<IdentityTelemetry />} />
            <Route path="/telemetry/email" element={<EmailTelemetry />} />
            <Route path="/telemetry/cloud" element={<CloudTelemetry />} />
            <Route path="/telemetry/hardware" element={<HardwareTelemetry />} />
            <Route path="/data-enrichment" element={<DataEnrichment />} />
            <Route path="/threat-intelligence" element={<ThreatIntelligence />} />
            <Route path="/soar" element={<SOARPlaybooks />} />
            <Route path="/forensics" element={<ForensicsDashboard />} />
            <Route path="/endpoint-control" element={<EndpointControl />} />
            <Route path="/hardware-security" element={<HardwareSecurity />} />
            <Route path="/sandbox-analysis" element={<SandboxAnalysis />} />
            <Route path="/data-lake" element={<DataLake />} />
            <Route path="/compliance" element={<ComplianceDashboard />} />
            <Route path="/telemetry/network" element={<NetworkTelemetry />} />
            <Route path="/behavior-monitor" element={<BehaviorMonitor />} />
            <Route path="/advanced-detection" element={<AdvancedDetection />} />
            <Route path="/dns-security" element={<DNSSecurity />} />
            <Route path="/attack-chain" element={<AttackChainViewer />} />
            <Route path="/threat-hunting" element={<ThreatHunting />} />
            <Route path="/cloud-security" element={<CloudSecurity />} />
            <Route path="/mobile-security" element={<MobileSecurity />} />
            <Route path="/deception" element={<DeceptionTechnology />} />
            <Route path="/zero-trust" element={<ZeroTrust />} />
            <Route path="/supply-chain" element={<SupplyChainSecurity />} />
            <Route path="/ransomware-defense" element={<RansomwareDefense />} />
            <Route path="/app-control" element={<ApplicationControl />} />
            <Route path="/device-control" element={<DeviceControl />} />
            <Route path="/web-protection" element={<WebProtection />} />
            <Route path="/process-security" element={<AdvancedProcessSecurity />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
