import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import Dashboard from "./pages/Dashboard";
import Protection from "./pages/Protection";
import Quarantine from "./pages/Quarantine";
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
            <Route path="/quarantine" element={<Quarantine />} />
            {/* Placeholder routes */}
            <Route path="/scans" element={<Dashboard />} />
            <Route path="/network" element={<Dashboard />} />
            <Route path="/firewall" element={<Dashboard />} />
            <Route path="/alert" element={<Dashboard />} />
            <Route path="/setting" element={<Dashboard />} />
            <Route path="/support" element={<Dashboard />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
