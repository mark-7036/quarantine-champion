import { Mail, AlertTriangle, Shield, FileText, Activity } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { StatCard } from "@/components/StatCard";

const EmailTelemetry = () => {
  const emailEvents = [
    { time: "15:45:22", subject: "Urgent: Wire Transfer Required", sender: "ceo@fake-domain.com", severity: "Critical", threat: "Phishing", dmarc: "Fail", dkim: "Fail", attachments: 1 },
    { time: "15:42:11", subject: "Invoice #12345", sender: "billing@vendor.com", severity: "High", threat: "Malicious Attachment", dmarc: "Pass", dkim: "Pass", attachments: 1 },
    { time: "15:38:45", subject: "Meeting Reminder", sender: "calendar@corp.com", severity: "Info", threat: "Clean", dmarc: "Pass", dkim: "Pass", attachments: 0 },
    { time: "15:35:33", subject: "Your Account Security Alert", sender: "security@phish.com", severity: "Critical", threat: "Credential Harvesting", dmarc: "Fail", dkim: "Fail", attachments: 0 },
    { time: "15:32:18", subject: "Quarterly Report", sender: "finance@corp.com", severity: "Info", threat: "Clean", dmarc: "Pass", dkim: "Pass", attachments: 2 },
    { time: "15:28:09", subject: "Re: Contract Renewal", sender: "legal@partner.com", severity: "Medium", threat: "Suspicious Link", dmarc: "Pass", dkim: "Neutral", attachments: 0 },
    { time: "15:24:55", subject: "You've won a prize!", sender: "promo@spam.com", severity: "High", threat: "Spam/Phishing", dmarc: "Fail", dkim: "Fail", attachments: 0 },
    { time: "15:20:44", subject: "Weekly Newsletter", sender: "news@corp.com", severity: "Info", threat: "Clean", dmarc: "Pass", dkim: "Pass", attachments: 0 },
  ];

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "Critical": return "destructive";
      case "High": return "destructive";
      case "Medium": return "outline";
      default: return "secondary";
    }
  };

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-display font-bold mb-3 text-foreground">
            Email Telemetry
          </h1>
          <p className="text-lg text-muted-foreground">
            Monitor email threats, attachments, and DMARC/DKIM validation
          </p>
        </div>
        <Button className="bg-primary hover:bg-primary/90">
          <Activity className="w-4 h-4 mr-2" />
          Export Report
        </Button>
      </div>

      {/* Stats */}
      <div className="grid gap-6 md:grid-cols-4">
        <StatCard
          title="Emails Processed"
          value="8,432"
          change="+412"
          icon={Mail}
        />
        <StatCard
          title="Phishing Blocked"
          value="127"
          change="+23"
          icon={AlertTriangle}
        />
        <StatCard
          title="Malicious Attachments"
          value="34"
          change="+8"
          icon={FileText}
        />
        <StatCard
          title="DMARC Failures"
          value="89"
          change="-5"
          icon={Shield}
        />
      </div>

      {/* Filters */}
      <Card className="p-6 bg-card border-border shadow-lg">
        <div className="flex gap-4">
          <Input placeholder="Search sender, subject, recipient..." className="flex-1" />
          <select className="px-4 py-2 rounded-lg bg-muted border border-border text-foreground">
            <option>All Threats</option>
            <option>Phishing</option>
            <option>Malicious Attachment</option>
            <option>Spam</option>
            <option>Clean</option>
          </select>
          <select className="px-4 py-2 rounded-lg bg-muted border border-border text-foreground">
            <option>All DMARC</option>
            <option>Pass</option>
            <option>Fail</option>
          </select>
        </div>
      </Card>

      {/* Email Stream */}
      <Card className="p-6 bg-card border-border shadow-lg">
        <h3 className="text-xl font-semibold mb-6 text-foreground">Email Security Events</h3>
        <ScrollArea className="h-[600px]">
          <div className="space-y-3">
            {emailEvents.map((email, index) => (
              <div key={index} className="p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors border border-border">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-primary" />
                    <div className="flex-1">
                      <div className="font-semibold text-foreground">{email.subject}</div>
                      <div className="text-sm text-muted-foreground">From: {email.sender}</div>
                    </div>
                  </div>
                  <Badge variant={getSeverityColor(email.severity) as any}>
                    {email.threat}
                  </Badge>
                </div>
                <div className="ml-8 flex gap-6 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    DMARC: <Badge variant={email.dmarc === "Pass" ? "secondary" : "destructive"} className="text-xs">{email.dmarc}</Badge>
                  </span>
                  <span className="flex items-center gap-1">
                    DKIM: <Badge variant={email.dkim === "Pass" ? "secondary" : email.dkim === "Fail" ? "destructive" : "outline"} className="text-xs">{email.dkim}</Badge>
                  </span>
                  <span>Attachments: {email.attachments}</span>
                  <span className="text-xs">{email.time}</span>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </Card>
    </div>
  );
};

export default EmailTelemetry;
