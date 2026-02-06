import { TopBar } from "@/components/TopBar";
import { Button } from "@/components/ui/button";
import { Plus, MoreHorizontal } from "lucide-react";

const teamMembers = [
  { name: "Sarah Kim", role: "Admin", jobs: "All", lastActive: "Just now", status: "Active" },
  { name: "James Liu", role: "Hiring Manager", jobs: "Design, Product", lastActive: "5 min ago", status: "Active" },
  { name: "Maria Perez", role: "Recruiter", jobs: "Engineering, Data", lastActive: "1 hr ago", status: "Active" },
  { name: "David Roth", role: "Interviewer", jobs: "Engineering", lastActive: "3 hr ago", status: "Active" },
  { name: "Anna Torres", role: "Hiring Manager", jobs: "Product", lastActive: "1 day ago", status: "Active" },
  { name: "Chris Miller", role: "Viewer", jobs: "Engineering", lastActive: "3 days ago", status: "Inactive" },
];

export default function TeamPage() {
  return (
    <>
      <TopBar title="Team" />
      <main className="p-6">
        <div className="flex items-center justify-between mb-6">
          <p className="text-sm text-muted-foreground">{teamMembers.length} members</p>
          <Button size="sm" className="h-8 gap-1.5 text-xs">
            <Plus className="h-3.5 w-3.5" />
            Invite User
          </Button>
        </div>

        <div className="border">
          <table className="w-full">
            <thead>
              <tr className="border-b bg-secondary">
                <th className="px-4 py-2.5 text-left text-xs font-medium uppercase tracking-wider text-muted-foreground">Name</th>
                <th className="px-4 py-2.5 text-left text-xs font-medium uppercase tracking-wider text-muted-foreground">Role</th>
                <th className="px-4 py-2.5 text-left text-xs font-medium uppercase tracking-wider text-muted-foreground">Jobs Access</th>
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
                  <td className="px-4 py-3 text-sm text-muted-foreground">{m.jobs}</td>
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
      </main>
    </>
  );
}
