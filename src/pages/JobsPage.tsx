import { TopBar } from "@/components/TopBar";
import { Button } from "@/components/ui/button";
import { Plus, MoreHorizontal } from "lucide-react";
import { Link } from "react-router-dom";

const jobs = [
  { id: "1", role: "Senior Backend Engineer", department: "Engineering", stage: "Active", candidates: 42, lastActivity: "2 min ago", owner: "Sarah K." },
  { id: "2", role: "Product Designer", department: "Design", stage: "Active", candidates: 28, lastActivity: "15 min ago", owner: "James L." },
  { id: "3", role: "Data Scientist", department: "Data", stage: "Active", candidates: 31, lastActivity: "1 hr ago", owner: "Maria P." },
  { id: "4", role: "Frontend Engineer", department: "Engineering", stage: "Screening", candidates: 56, lastActivity: "3 hr ago", owner: "David R." },
  { id: "5", role: "Product Manager", department: "Product", stage: "Active", candidates: 19, lastActivity: "5 hr ago", owner: "Anna T." },
  { id: "6", role: "DevOps Engineer", department: "Engineering", stage: "Paused", candidates: 8, lastActivity: "2 days ago", owner: "Chris M." },
  { id: "7", role: "Content Strategist", department: "Marketing", stage: "Active", candidates: 14, lastActivity: "6 hr ago", owner: "Lisa W." },
];

export default function JobsPage() {
  return (
    <>
      <TopBar title="Jobs" />
      <main className="p-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <p className="text-sm text-muted-foreground">{jobs.length} open positions</p>
          </div>
          <Button size="sm" className="h-8 gap-1.5 text-xs">
            <Plus className="h-3.5 w-3.5" />
            New Job
          </Button>
        </div>

        <div className="border">
          <table className="w-full">
            <thead>
              <tr className="border-b bg-secondary">
                <th className="px-4 py-2.5 text-left text-xs font-medium uppercase tracking-wider text-muted-foreground">Role</th>
                <th className="px-4 py-2.5 text-left text-xs font-medium uppercase tracking-wider text-muted-foreground">Department</th>
                <th className="px-4 py-2.5 text-left text-xs font-medium uppercase tracking-wider text-muted-foreground">Stage</th>
                <th className="px-4 py-2.5 text-left text-xs font-medium uppercase tracking-wider text-muted-foreground">Candidates</th>
                <th className="px-4 py-2.5 text-left text-xs font-medium uppercase tracking-wider text-muted-foreground">Last Activity</th>
                <th className="px-4 py-2.5 text-left text-xs font-medium uppercase tracking-wider text-muted-foreground">Owner</th>
                <th className="w-10"></th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {jobs.map((job) => (
                <tr key={job.id} className="hover:bg-accent/50 transition-colors">
                  <td className="px-4 py-3">
                    <Link to={`/jobs/${job.id}`} className="text-sm font-medium hover:underline">
                      {job.role}
                    </Link>
                  </td>
                  <td className="px-4 py-3 text-sm text-muted-foreground">{job.department}</td>
                  <td className="px-4 py-3">
                    <span className={`inline-flex items-center text-xs font-medium ${
                      job.stage === "Active" ? "text-foreground" :
                      job.stage === "Paused" ? "text-muted-foreground" : "text-foreground"
                    }`}>
                      {job.stage}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-sm">{job.candidates}</td>
                  <td className="px-4 py-3 text-sm text-muted-foreground">{job.lastActivity}</td>
                  <td className="px-4 py-3 text-sm text-muted-foreground">{job.owner}</td>
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
