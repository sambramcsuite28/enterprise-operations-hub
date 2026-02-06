import { TopBar } from "@/components/TopBar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Copy, RefreshCw, ExternalLink } from "lucide-react";

const jobSources = [
  { name: "LinkedIn Apply Link", status: "Connected", action: "copy" },
  { name: "Company Career Page", status: "Active", action: "view" },
  { name: "Email Ingestion", status: "Not configured", action: "configure" },
  { name: "ATS Sync", status: "Coming soon", action: null },
];

const communicationChannels = [
  { name: "Email notifications", status: "Enabled" },
  { name: "Calendar scheduling", status: "Connected (Google)" },
  { name: "Slack notifications", status: "Coming soon" },
  { name: "Webhooks", status: "Coming soon" },
];

function StatusBadge({ status }: { status: string }) {
  const variant =
    status === "Connected" || status === "Active" || status === "Enabled" || status.startsWith("Connected")
      ? "default"
      : status === "Not configured"
        ? "outline"
        : "secondary";

  return (
    <Badge variant={variant} className="font-normal text-xs">
      {status}
    </Badge>
  );
}

export default function IntegrationsPage() {
  return (
    <>
      <TopBar title="Integrations" />
      <main className="p-6 space-y-10">
        {/* Job Sources */}
        <section>
          <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">
            Job Sources
          </h2>
          <div className="border rounded-md">
            {jobSources.map((source, i) => (
              <div
                key={source.name}
                className={`flex items-center justify-between px-4 py-3.5 ${i < jobSources.length - 1 ? "border-b" : ""}`}
              >
                <div className="flex items-center gap-4">
                  <span className="text-sm font-medium">{source.name}</span>
                  <StatusBadge status={source.status} />
                </div>
                <div className="flex items-center gap-2">
                  {source.action === "copy" && (
                    <>
                      <Button variant="ghost" size="sm" className="h-7 gap-1.5 text-xs text-muted-foreground">
                        <Copy className="h-3.5 w-3.5" />
                        Copy link
                      </Button>
                      <Button variant="ghost" size="sm" className="h-7 gap-1.5 text-xs text-muted-foreground">
                        <RefreshCw className="h-3.5 w-3.5" />
                        Regenerate
                      </Button>
                    </>
                  )}
                  {source.action === "view" && (
                    <Button variant="ghost" size="sm" className="h-7 gap-1.5 text-xs text-muted-foreground">
                      <ExternalLink className="h-3.5 w-3.5" />
                      View
                    </Button>
                  )}
                  {source.action === "configure" && (
                    <Button variant="outline" size="sm" className="h-7 text-xs">
                      Configure
                    </Button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Communication */}
        <section>
          <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">
            Communication
          </h2>
          <div className="border rounded-md">
            {communicationChannels.map((channel, i) => (
              <div
                key={channel.name}
                className={`flex items-center justify-between px-4 py-3.5 ${i < communicationChannels.length - 1 ? "border-b" : ""}`}
              >
                <span className="text-sm font-medium">{channel.name}</span>
                <StatusBadge status={channel.status} />
              </div>
            ))}
          </div>
        </section>

        {/* AI Configuration */}
        <section>
          <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">
            AI Configuration
          </h2>
          <div className="border rounded-md divide-y">
            <div className="flex items-center justify-between px-4 py-3.5">
              <span className="text-sm font-medium">Default interview language</span>
              <span className="text-sm text-muted-foreground">English</span>
            </div>
            <div className="flex items-center justify-between px-4 py-3.5">
              <span className="text-sm font-medium">Interview timezone</span>
              <span className="text-sm text-muted-foreground">IST (UTC+5:30)</span>
            </div>
            <div className="flex items-center justify-between px-4 py-3.5">
              <span className="text-sm font-medium">Voice enabled</span>
              <Switch defaultChecked />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
