import { ReactNode } from "react";
import { Sidebar } from "./Sidebar";
import cyberGlobe from "@/assets/cyber-globe.jpg";

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <div 
        className="fixed inset-0 opacity-[0.15] pointer-events-none"
        style={{
          backgroundImage: `url(${cyberGlobe})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />
      
      <div className="fixed inset-0 bg-gradient-to-br from-primary/[0.02] via-transparent to-transparent pointer-events-none" />
      
      <Sidebar />
      
      <main className="ml-64 relative z-10">
        <div className="p-10 max-w-[1600px] mx-auto">
          {children}
        </div>
      </main>
    </div>
  );
};
