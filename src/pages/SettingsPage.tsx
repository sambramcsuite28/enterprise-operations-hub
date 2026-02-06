import { TopBar } from "@/components/TopBar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Plus, MoreHorizontal } from "lucide-react";

const teamMembers = [
  { name: "Sarah Kim", role: "Admin", lastActive: "Just now", status: "Active" },
  { name: "James Liu", role: "Hiring Manager", lastActive: "5 min ago", status: "Active" },
  { name: "Maria Perez", role: "Recruiter", lastActive: "1 hr ago", status: "Active" },
  { name: "David Roth", role: "Interviewer", lastActive: "3 hr ago", status: "Active" },
  { name: "Chris Miller", role: "Viewer", lastActive: "3 days ago", status: "Inactive" },
];

function SettingsRow({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex items-center justify-between px-4 py-3.5 border-b last:border-b-0">
      <span className="text-sm font-medium">{label}</span>
      <div className="w-64">{children}</div>
    </div>
  );
}

export default function SettingsPage() {
  return (
    <>
      <TopBar title="Settings" />
      <main className="p-6 space-y-10">
        {/* Organization Profile */}
        <section>
          <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">
            Organization Profile
          </h2>
          <div className="border rounded-md">
            <SettingsRow label="Company name">
              <Input defaultValue="Acme Corp" className="h-8 text-sm" />
            </SettingsRow>
            <SettingsRow label="Logo">
              <Button variant="outline" size="sm" className="h-8 text-xs">Upload</Button>
            </SettingsRow>
            <SettingsRow label="Career page description">
              <Input defaultValue="Join our team and build the future." className="h-8 text-sm" />
            </SettingsRow>
            <SettingsRow label="Default timezone">
              <Select defaultValue="ist">
                <SelectTrigger className="h-8 text-sm">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="ist">IST (UTC+5:30)</SelectItem>
                  <SelectItem value="pst">PST (UTC-8)</SelectItem>
                  <SelectItem value="est">EST (UTC-5)</SelectItem>
                  <SelectItem value="utc">UTC</SelectItem>
                </SelectContent>
              </Select>
            </SettingsRow>
          </div>
        </section>

        {/* Hiring Defaults */}
        <section>
          <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">
            Hiring Defaults
          </h2>
          <div className="border rounded-md">
            <SettingsRow label="Default pipeline">
              <Select defaultValue="standard">
                <SelectTrigger className="h-8 text-sm">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="standard">Standard (5 stages)</SelectItem>
                  <SelectItem value="fast">Fast Track (3 stages)</SelectItem>
                  <SelectItem value="custom">Custom</SelectItem>
                </SelectContent>
              </Select>
            </SettingsRow>
            <SettingsRow label="Default interview duration">
              <Select defaultValue="30">
                <SelectTrigger className="h-8 text-sm">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="15">15 minutes</SelectItem>
                  <SelectItem value="30">30 minutes</SelectItem>
                  <SelectItem value="45">45 minutes</SelectItem>
                  <SelectItem value="60">60 minutes</SelectItem>
                </SelectContent>
              </Select>
            </SettingsRow>
            <SettingsRow label="Auto-send interview invites">
              <div className="flex justify-end">
                <Switch defaultChecked />
              </div>
            </SettingsRow>
          </div>
        </section>

        {/* Data & Privacy */}
        <section>
          <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">
            Data & Privacy
          </h2>
          <div className="border rounded-md">
            <SettingsRow label="Data retention period">
              <Select defaultValue="365">
                <SelectTrigger className="h-8 text-sm">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="90">90 days</SelectItem>
                  <SelectItem value="180">180 days</SelectItem>
                  <SelectItem value="365">1 year</SelectItem>
                  <SelectItem value="730">2 years</SelectItem>
                </SelectContent>
              </Select>
            </SettingsRow>
            <SettingsRow label="Delete candidates after rejection">
              <Select defaultValue="90">
                <SelectTrigger className="h-8 text-sm">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="30">30 days</SelectItem>
                  <SelectItem value="60">60 days</SelectItem>
                  <SelectItem value="90">90 days</SelectItem>
                  <SelectItem value="never">Never</SelectItem>
                </SelectContent>
              </Select>
            </SettingsRow>
            <SettingsRow label="Recording storage duration">
              <Select defaultValue="180">
                <SelectTrigger className="h-8 text-sm">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="30">30 days</SelectItem>
                  <SelectItem value="90">90 days</SelectItem>
                  <SelectItem value="180">180 days</SelectItem>
                  <SelectItem value="365">1 year</SelectItem>
                </SelectContent>
              </Select>
            </SettingsRow>
          </div>
        </section>

        {/* Access Control */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              Access Control
            </h2>
            <Button size="sm" className="h-8 gap-1.5 text-xs">
              <Plus className="h-3.5 w-3.5" />
              Invite User
            </Button>
          </div>
          <div className="border rounded-md">
            <table className="w-full">
              <thead>
                <tr className="border-b bg-secondary">
                  <th className="px-4 py-2.5 text-left text-xs font-medium uppercase tracking-wider text-muted-foreground">Name</th>
                  <th className="px-4 py-2.5 text-left text-xs font-medium uppercase tracking-wider text-muted-foreground">Role</th>
                  <th className="px-4 py-2.5 text-left text-xs font-medium uppercase tracking-wider text-muted-foreground">Last Active</th>
                  <th className="px-4 py-2.5 text-left text-xs font-medium uppercase tracking-wider text-muted-foreground">Status</th>
                  <th className="w-10"></th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {teamMembers.map((m) => (
                  <tr key={m.name} className="hover:bg-accent/50 transition-colors">
                    <td className="px-4 py-3 text-sm font-medium">{m.name}</td>
                    <td className="px-4 py-3 text-sm text-muted-foreground">{m.role}</td>
                    <td className="px-4 py-3 text-sm text-muted-foreground">{m.lastActive}</td>
                    <td className="px-4 py-3 text-sm">
                      <span className={m.status === "Active" ? "text-foreground" : "text-muted-foreground"}>
                        {m.status}
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <button className="p-1 text-muted-foreground hover:text-foreground transition-colors">
                        <MoreHorizontal className="h-4 w-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </>
  );
}
