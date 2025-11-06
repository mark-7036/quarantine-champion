import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import Dashboard from "./pages/Dashboard";
import Protection from "./pages/Protection";
import ScanAnalysis from "./pages/ScanAnalysis";
import Quarantine from "./pages/Quarantine";
import NetworkSecurity from "./pages/NetworkSecurity";
import XDRAnalytics from "./pages/XDRAnalytics";
import SystemTools from "./pages/SystemTools";
import ReportsLogs from "./pages/ReportsLogs";
import Settings from "./pages/Settings";
import Account from "./pages/Account";
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
            <Route path="/protection" element={<Protection />} />
            <Route path="/scan-analysis" element={<ScanAnalysis />} />
            <Route path="/quarantine" element={<Quarantine />} />
            <Route path="/network-security" element={<NetworkSecurity />} />
            <Route path="/xdr-analytics" element={<XDRAnalytics />} />
            <Route path="/system-tools" element={<SystemTools />} />
            <Route path="/reports-logs" element={<ReportsLogs />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/account" element={<Account />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
