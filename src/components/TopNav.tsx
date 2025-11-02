import { Bell, User, Search, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

export const TopNav = () => {
  return (
    <header className="h-16 border-b border-border bg-card/50 backdrop-blur-xl sticky top-0 z-50">
      <div className="h-full px-6 flex items-center justify-between">
        <div className="flex items-center gap-4 flex-1">
          <div className="relative max-w-md w-full">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="Search threats, files, or logs..."
              className="pl-10 bg-background/50 border-border"
            />
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Button variant="ghost" size="icon" className="relative">
            <RefreshCw className="w-4 h-4" />
          </Button>
          
          <Button variant="ghost" size="icon" className="relative">
            <Bell className="w-4 h-4" />
            <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 bg-critical text-[10px]">
              3
            </Badge>
          </Button>

          <div className="h-8 w-px bg-border mx-2" />

          <Button variant="ghost" size="icon" className="rounded-full">
            <User className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </header>
  );
};
