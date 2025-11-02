import { ReactNode } from "react";
import { Sidebar } from "./Sidebar";
import cyberGlobe from "@/assets/cyber-globe.jpg";

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-background relative">
      <div 
        className="fixed inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: `url(${cyberGlobe})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />
      
      <Sidebar />
      
      <main className="ml-52 relative z-10">
        <div className="p-8">
          {children}
        </div>
      </main>
    </div>
  );
};
