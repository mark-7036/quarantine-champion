import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Shield, Users, Key, Settings, Plus, Trash2, Edit } from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

interface User {
  id: string;
  name: string;
  email: string;
  role: "Admin" | "Security Analyst" | "Viewer";
  status: "Active" | "Inactive";
  lastLogin: string;
}

interface APIKey {
  id: string;
  name: string;
  key: string;
  created: string;
  lastUsed: string;
  permissions: string;
}

const users: User[] = [
  {
    id: "USR-001",
    name: "John Smith",
    email: "john.smith@company.com",
    role: "Admin",
    status: "Active",
    lastLogin: "2 mins ago",
  },
  {
    id: "USR-002",
    name: "Sarah Johnson",
    email: "sarah.j@company.com",
    role: "Security Analyst",
    status: "Active",
    lastLogin: "15 mins ago",
  },
  {
    id: "USR-003",
    name: "Mike Davis",
    email: "mike.d@company.com",
    role: "Viewer",
    status: "Active",
    lastLogin: "1 hour ago",
  },
];

const apiKeys: APIKey[] = [
  {
    id: "KEY-001",
    name: "Production API Key",
    key: "sk_live_••••••••••••4f2a",
    created: "2025-09-15",
    lastUsed: "2 mins ago",
    permissions: "Read/Write",
  },
  {
    id: "KEY-002",
    name: "Integration API Key",
    key: "sk_live_••••••••••••8b9c",
    created: "2025-10-22",
    lastUsed: "1 hour ago",
    permissions: "Read Only",
  },
];

const roleColors = {
  Admin: "bg-critical/10 text-critical border-critical/30",
  "Security Analyst": "bg-warning/10 text-warning border-warning/30",
  Viewer: "bg-info/10 text-info border-info/30",
};

const Admin = () => {
  return (
    <div className="space-y-6 animate-fade-in">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Dashboard</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Admin Panel</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-display font-bold text-foreground">Admin Panel</h1>
          <p className="text-lg text-muted-foreground mt-2">
            User management, roles, and API keys
          </p>
        </div>
        <Badge variant="outline" className="bg-primary/10 text-primary border-primary/30 text-sm px-4 py-2">
          <Shield className="w-4 h-4 mr-2" />
          Administrator Access
        </Badge>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="p-6 border-border bg-gradient-to-br from-card/80 to-card/60">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-muted-foreground text-sm">Total Users</p>
              <p className="text-3xl font-bold text-foreground mt-2">{users.length}</p>
            </div>
            <Users className="w-8 h-8 text-primary" />
          </div>
        </Card>

        <Card className="p-6 border-border bg-gradient-to-br from-card/80 to-card/60">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-muted-foreground text-sm">Active API Keys</p>
              <p className="text-3xl font-bold text-foreground mt-2">{apiKeys.length}</p>
            </div>
            <Key className="w-8 h-8 text-primary" />
          </div>
        </Card>

        <Card className="p-6 border-border bg-gradient-to-br from-card/80 to-card/60">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-muted-foreground text-sm">Admin Users</p>
              <p className="text-3xl font-bold text-foreground mt-2">
                {users.filter((u) => u.role === "Admin").length}
              </p>
            </div>
            <Shield className="w-8 h-8 text-primary" />
          </div>
        </Card>
      </div>

      <Card className="p-6 border-border bg-card shadow-lg">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-semibold text-foreground">User Management</h2>
          <Button className="bg-primary hover:bg-primary/90">
            <Plus className="w-4 h-4 mr-2" />
            Add User
          </Button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="border-b border-border">
              <tr>
                <th className="text-left py-4 px-4 text-xs font-semibold text-muted-foreground uppercase">User</th>
                <th className="text-left py-4 px-4 text-xs font-semibold text-muted-foreground uppercase">Email</th>
                <th className="text-left py-4 px-4 text-xs font-semibold text-muted-foreground uppercase">Role</th>
                <th className="text-left py-4 px-4 text-xs font-semibold text-muted-foreground uppercase">Status</th>
                <th className="text-left py-4 px-4 text-xs font-semibold text-muted-foreground uppercase">Last Login</th>
                <th className="text-left py-4 px-4 text-xs font-semibold text-muted-foreground uppercase">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {users.map((user, index) => (
                <tr
                  key={user.id}
                  className="hover:bg-muted/20 transition-colors animate-fade-in"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <span className="text-primary font-semibold">{user.name.charAt(0)}</span>
                      </div>
                      <span className="text-foreground font-medium">{user.name}</span>
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <span className="text-muted-foreground">{user.email}</span>
                  </td>
                  <td className="py-4 px-4">
                    <Badge variant="outline" className={roleColors[user.role]}>
                      {user.role}
                    </Badge>
                  </td>
                  <td className="py-4 px-4">
                    <Badge variant="outline" className="bg-success/10 text-success border-success/30">
                      {user.status}
                    </Badge>
                  </td>
                  <td className="py-4 px-4">
                    <span className="text-muted-foreground text-sm">{user.lastLogin}</span>
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-2">
                      <Button variant="ghost" size="sm">
                        <Edit className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Trash2 className="w-4 h-4 text-critical" />
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      <Card className="p-6 border-border bg-card shadow-lg">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-semibold text-foreground">API Keys</h2>
          <Button className="bg-primary hover:bg-primary/90">
            <Plus className="w-4 h-4 mr-2" />
            Generate New Key
          </Button>
        </div>

        <div className="space-y-4">
          {apiKeys.map((key, index) => (
            <Card
              key={key.id}
              className="p-4 border-border bg-muted/30 hover:bg-muted/50 transition-colors animate-fade-in"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <Key className="w-5 h-5 text-primary" />
                    <h3 className="text-lg font-semibold text-foreground">{key.name}</h3>
                  </div>
                  <div className="flex items-center gap-6 text-sm text-muted-foreground">
                    <span className="font-mono">{key.key}</span>
                    <span>Created: {key.created}</span>
                    <span>Last used: {key.lastUsed}</span>
                    <Badge variant="outline" className="text-xs">
                      {key.permissions}
                    </Badge>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm" className="bg-background hover:bg-muted/50">
                    Copy
                  </Button>
                  <Button variant="outline" size="sm" className="bg-background hover:bg-muted/50">
                    <Trash2 className="w-4 h-4 text-critical" />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Card>

      <Card className="p-6 border-border bg-card shadow-lg">
        <div className="flex items-center gap-3 mb-6">
          <Settings className="w-6 h-6 text-primary" />
          <h2 className="text-2xl font-semibold text-foreground">Role Permissions</h2>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="border-b border-border">
              <tr>
                <th className="text-left py-4 px-4 text-sm font-semibold text-foreground">Permission</th>
                <th className="text-center py-4 px-4 text-sm font-semibold text-foreground">Admin</th>
                <th className="text-center py-4 px-4 text-sm font-semibold text-foreground">Security Analyst</th>
                <th className="text-center py-4 px-4 text-sm font-semibold text-foreground">Viewer</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {[
                "View Dashboard",
                "Manage Threats",
                "Scan Devices",
                "Configure Firewall",
                "Manage Users",
                "View Reports",
                "Modify Settings",
              ].map((permission, index) => (
                <tr key={index} className="hover:bg-muted/20 transition-colors">
                  <td className="py-4 px-4 text-foreground">{permission}</td>
                  <td className="py-4 px-4 text-center">
                    <Badge className="bg-success/10 text-success border-success/30">✓</Badge>
                  </td>
                  <td className="py-4 px-4 text-center">
                    {permission !== "Manage Users" && permission !== "Modify Settings" ? (
                      <Badge className="bg-success/10 text-success border-success/30">✓</Badge>
                    ) : (
                      <Badge className="bg-muted text-muted-foreground border-border">✗</Badge>
                    )}
                  </td>
                  <td className="py-4 px-4 text-center">
                    {permission.startsWith("View") ? (
                      <Badge className="bg-success/10 text-success border-success/30">✓</Badge>
                    ) : (
                      <Badge className="bg-muted text-muted-foreground border-border">✗</Badge>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
};

export default Admin;
