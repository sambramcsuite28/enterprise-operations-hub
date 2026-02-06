import { TopBar } from "@/components/TopBar";
import { Link } from "react-router-dom";
import { MoreHorizontal } from "lucide-react";

const candidates = [
  { id: "1", name: "Priya Sharma", role: "Senior Backend Engineer", stage: "AI Interview", score: 92, applied: "2 days ago", source: "LinkedIn" },
  { id: "2", name: "Alex Chen", role: "Frontend Engineer", stage: "Human Review", score: 88, applied: "3 days ago", source: "Referral" },
  { id: "3", name: "Jordan Williams", role: "Product Designer", stage: "Pre-Screen", score: 76, applied: "1 day ago", source: "Direct" },
  { id: "4", name: "Maria Garcia", role: "Data Scientist", stage: "AI Interview", score: 85, applied: "4 days ago", source: "LinkedIn" },
  { id: "5", name: "Thomas Mueller", role: "DevOps Engineer", stage: "Applied", score: null, applied: "6 hr ago", source: "Job Board" },
  { id: "6", name: "Aisha Patel", role: "Product Manager", stage: "Offer", score: 94, applied: "1 week ago", source: "Referral" },
  { id: "7", name: "Marcus Johnson", role: "Senior Backend Engineer", stage: "Pre-Screen", score: 71, applied: "2 days ago", source: "Direct" },
  { id: "8", name: "Yuki Tanaka", role: "Frontend Engineer", stage: "Applied", score: null, applied: "12 hr ago", source: "LinkedIn" },
];

export default function CandidatesPage() {
  return (
    <>
      <TopBar title="Candidates" />
      <main className="p-6">
        <div className="flex items-center justify-between mb-6">
          <p className="text-sm text-muted-foreground">{candidates.length} candidates</p>
          <div className="flex items-center gap-2">
            <select className="h-8 rounded-md border bg-background px-3 text-xs">
              <option>All Stages</option>
              <option>Applied</option>
              <option>Pre-Screen</option>
              <option>AI Interview</option>
              <option>Human Review</option>
              <option>Offer</option>
            </select>
            <select className="h-8 rounded-md border bg-background px-3 text-xs">
              <option>All Roles</option>
            </select>
          </div>
        </div>

        <div className="border">
          <table className="w-full">
            <thead>
              <tr className="border-b bg-secondary">
                <th className="px-4 py-2.5 text-left text-xs font-medium uppercase tracking-wider text-muted-foreground">Name</th>
                <th className="px-4 py-2.5 text-left text-xs font-medium uppercase tracking-wider text-muted-foreground">Role</th>
                <th className="px-4 py-2.5 text-left text-xs font-medium uppercase tracking-wider text-muted-foreground">Stage</th>
                <th className="px-4 py-2.5 text-left text-xs font-medium uppercase tracking-wider text-muted-foreground">Score</th>
                <th className="px-4 py-2.5 text-left text-xs font-medium uppercase tracking-wider text-muted-foreground">Applied</th>
                <th className="px-4 py-2.5 text-left text-xs font-medium uppercase tracking-wider text-muted-foreground">Source</th>
                <th className="w-10"></th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {candidates.map((c) => (
                <tr key={c.id} className="hover:bg-accent/50 transition-colors">
                  <td className="px-4 py-3">
                    <Link to={`/candidates/${c.id}`} className="text-sm font-medium hover:underline">
                      {c.name}
                    </Link>
                  </td>
                  <td className="px-4 py-3 text-sm text-muted-foreground">{c.role}</td>
                  <td className="px-4 py-3 text-sm">{c.stage}</td>
                  <td className="px-4 py-3 text-sm font-medium">{c.score ?? "—"}</td>
                  <td className="px-4 py-3 text-sm text-muted-foreground">{c.applied}</td>
                  <td className="px-4 py-3 text-sm text-muted-foreground">{c.source}</td>
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
