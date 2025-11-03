import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import Dashboard from "./pages/Dashboard";
import Scanner from "./pages/Scanner";
import Protection from "./pages/Protection";
import Behavior from "./pages/Behavior";
import XDRDashboard from "./pages/XDRDashboard";
import Network from "./pages/Network";
import ThreatIntel from "./pages/ThreatIntel";
import Logbook from "./pages/Logbook";
import Quarantine from "./pages/Quarantine";
import Sandbox from "./pages/Sandbox";
import AIAnalysis from "./pages/AIAnalysis";
import Ransomware from "./pages/Ransomware";
import PrivacyGuard from "./pages/PrivacyGuard";
import USBScan from "./pages/USBScan";
import Optimization from "./pages/Optimization";
import LogsReports from "./pages/LogsReports";
import Settings from "./pages/Settings";
import NotFound from "./pages/NotFound";

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
            <Route path="/scanner" element={<Scanner />} />
            <Route path="/protection" element={<Protection />} />
            <Route path="/behavior" element={<Behavior />} />
            <Route path="/xdr" element={<XDRDashboard />} />
            <Route path="/network" element={<Network />} />
            <Route path="/threat-intel" element={<ThreatIntel />} />
            <Route path="/sandbox" element={<Sandbox />} />
            <Route path="/ai-analysis" element={<AIAnalysis />} />
            <Route path="/ransomware" element={<Ransomware />} />
            <Route path="/privacy" element={<PrivacyGuard />} />
            <Route path="/usb-scan" element={<USBScan />} />
            <Route path="/optimization" element={<Optimization />} />
            <Route path="/logs" element={<LogsReports />} />
            <Route path="/quarantine" element={<Quarantine />} />
            <Route path="/settings" element={<Settings />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
