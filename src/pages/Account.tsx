import { User, Shield, Key, LogOut, Mail, Phone, MapPin } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";

const Account = () => {
  return (
    <div className="space-y-8 animate-fade-in">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-display font-bold mb-3 text-foreground">
          Account
        </h1>
        <p className="text-lg text-muted-foreground">
          Manage your profile, license, and account settings
        </p>
      </div>

      {/* Profile Card */}
      <Card className="p-6 bg-card border-border shadow-lg">
        <div className="flex items-start gap-6">
          <Avatar className="w-24 h-24">
            <AvatarFallback className="bg-primary text-primary-foreground text-2xl">
              JD
            </AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <h2 className="text-2xl font-bold text-foreground">John Doe</h2>
              <Badge variant="default" className="bg-primary">Premium User</Badge>
            </div>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>john.doe@company.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>San Francisco, CA</span>
              </div>
            </div>
            <Button variant="outline" className="mt-4">
              Edit Profile
            </Button>
          </div>
        </div>
      </Card>

      {/* License Information */}
      <Card className="p-6 bg-card border-border shadow-lg">
        <h3 className="text-xl font-semibold mb-6 text-foreground">License Information</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <div className="space-y-4">
              <div>
                <div className="text-sm text-muted-foreground mb-1">License Plan</div>
                <div className="text-lg font-semibold text-foreground">Premium Enterprise</div>
              </div>
              <div>
                <div className="text-sm text-muted-foreground mb-1">License Key</div>
                <div className="font-mono text-sm text-foreground">XXXX-XXXX-XXXX-AB45</div>
              </div>
              <div>
                <div className="text-sm text-muted-foreground mb-1">Valid Until</div>
                <div className="text-lg font-semibold text-foreground">December 31, 2024</div>
              </div>
              <div>
                <div className="text-sm text-muted-foreground mb-1">License Status</div>
                <Badge variant="default" className="bg-green-500">Active</Badge>
              </div>
            </div>
          </div>
          <div className="p-4 rounded-lg bg-muted/50">
            <h4 className="font-semibold text-foreground mb-3">Plan Features</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-primary" />
                Real-time threat protection
              </li>
              <li className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-primary" />
                XDR analytics & threat hunting
              </li>
              <li className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-primary" />
                Advanced AI/ML detection
              </li>
              <li className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-primary" />
                Priority support 24/7
              </li>
              <li className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-primary" />
                Up to 50 devices
              </li>
            </ul>
            <Button className="w-full mt-4 bg-primary hover:bg-primary/90">
              Upgrade Plan
            </Button>
          </div>
        </div>
      </Card>

      {/* Device Information */}
      <Card className="p-6 bg-card border-border shadow-lg">
        <h3 className="text-xl font-semibold mb-6 text-foreground">Device Information</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="p-4 rounded-lg bg-muted/50">
            <div className="text-sm text-muted-foreground mb-1">Device ID</div>
            <div className="font-mono text-sm text-foreground">DEV-7F8A9B2C4D5E</div>
          </div>
          <div className="p-4 rounded-lg bg-muted/50">
            <div className="text-sm text-muted-foreground mb-1">Operating System</div>
            <div className="font-semibold text-foreground">Windows 11 Pro</div>
          </div>
          <div className="p-4 rounded-lg bg-muted/50">
            <div className="text-sm text-muted-foreground mb-1">Protection Since</div>
            <div className="font-semibold text-foreground">January 15, 2023</div>
          </div>
          <div className="p-4 rounded-lg bg-muted/50">
            <div className="text-sm text-muted-foreground mb-1">Last Seen</div>
            <div className="font-semibold text-foreground">Just now</div>
          </div>
        </div>
      </Card>

      {/* Account Actions */}
      <Card className="p-6 bg-card border-border shadow-lg">
        <h3 className="text-xl font-semibold mb-6 text-foreground">Account Actions</h3>
        <div className="space-y-3">
          <Button variant="outline" className="w-full justify-start">
            <Key className="w-4 h-4 mr-3" />
            Change Password
          </Button>
          <Button variant="outline" className="w-full justify-start">
            <Shield className="w-4 h-4 mr-3" />
            Enable Two-Factor Authentication
          </Button>
          <Button variant="outline" className="w-full justify-start">
            <User className="w-4 h-4 mr-3" />
            Privacy Settings
          </Button>
          <Separator className="my-4" />
          <Button variant="destructive" className="w-full justify-start">
            <LogOut className="w-4 h-4 mr-3" />
            Sign Out
          </Button>
        </div>
      </Card>

      {/* Usage Statistics */}
      <Card className="p-6 bg-card border-border shadow-lg">
        <h3 className="text-xl font-semibold mb-6 text-foreground">Usage Statistics</h3>
        <div className="grid md:grid-cols-4 gap-4">
          <div className="text-center p-4 rounded-lg bg-muted/50">
            <div className="text-3xl font-bold text-primary mb-1">1,249</div>
            <div className="text-sm text-muted-foreground">Threats Blocked</div>
          </div>
          <div className="text-center p-4 rounded-lg bg-muted/50">
            <div className="text-3xl font-bold text-primary mb-1">124</div>
            <div className="text-sm text-muted-foreground">Scans Performed</div>
          </div>
          <div className="text-center p-4 rounded-lg bg-muted/50">
            <div className="text-3xl font-bold text-primary mb-1">12.4M</div>
            <div className="text-sm text-muted-foreground">Files Protected</div>
          </div>
          <div className="text-center p-4 rounded-lg bg-muted/50">
            <div className="text-3xl font-bold text-primary mb-1">547</div>
            <div className="text-sm text-muted-foreground">Days Protected</div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Account;
