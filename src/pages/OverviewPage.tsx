import { TopBar } from "@/components/TopBar";
import { ArrowRight, AlertCircle } from "lucide-react";

const metrics = [
  { label: "Active Jobs", value: "12" },
  { label: "Candidates This Week", value: "186" },
  { label: "Interviews Today", value: "24" },
  { label: "Shortlisted", value: "7" },
];

const pipelineStages = [
  { stage: "Applied", count: 421 },
  { stage: "Pre-Screen", count: 210 },
  { stage: "AI Interview", count: 64 },
  { stage: "Human Review", count: 18 },
  { stage: "Offer", count: 5 },
];

const recentActivity = [
  { text: "AI completed interview — Backend Engineer", time: "2 min ago" },
  { text: "Rahul moved candidate to shortlist", time: "10 min ago" },
  { text: "Interview report generated — Sr. Designer", time: "22 min ago" },
  { text: "New application received — Product Manager", time: "34 min ago" },
  { text: "Candidate withdrew — Data Analyst", time: "1 hr ago" },
];

const attentionItems = [
  { text: "5 candidates waiting review", urgent: true },
  { text: "3 interviews failed to complete", urgent: true },
  { text: "2 candidates requested reschedule", urgent: false },
];

export default function OverviewPage() {
  return (
    <>
      <TopBar title="Overview" />
      <main className="p-6 space-y-8">
        {/* Hiring Health */}
        <section>
          <h2 className="text-xs font-medium uppercase tracking-wider text-muted-foreground mb-4">
            Hiring Health
          </h2>
          <div className="grid grid-cols-4 gap-px bg-border">
            {metrics.map((m) => (
              <div key={m.label} className="bg-background p-6">
                <p className="text-3xl font-semibold tracking-tight">{m.value}</p>
                <p className="mt-1 text-sm text-muted-foreground">{m.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Pipeline Snapshot */}
        <section>
          <h2 className="text-xs font-medium uppercase tracking-wider text-muted-foreground mb-4">
            Pipeline Snapshot
          </h2>
          <div className="flex items-stretch gap-px bg-border">
            {pipelineStages.map((s, i) => (
              <button
                key={s.stage}
                className="flex-1 bg-background p-5 text-left hover:bg-accent transition-colors group"
              >
                <p className="text-2xl font-semibold tracking-tight">{s.count}</p>
                <div className="flex items-center gap-1.5 mt-1">
                  <p className="text-sm text-muted-foreground">{s.stage}</p>
                  {i < pipelineStages.length - 1 && (
                    <ArrowRight className="h-3 w-3 text-muted-foreground/40 opacity-0 group-hover:opacity-100 transition-opacity" />
                  )}
                </div>
              </button>
            ))}
          </div>
        </section>

        <div className="grid grid-cols-3 gap-6">
          {/* Recent Activity */}
          <section className="col-span-2">
            <h2 className="text-xs font-medium uppercase tracking-wider text-muted-foreground mb-4">
              Recent Activity
            </h2>
            <div className="border divide-y">
              {recentActivity.map((a, i) => (
                <div key={i} className="flex items-center justify-between px-4 py-3">
                  <p className="text-sm">{a.text}</p>
                  <p className="text-xs text-muted-foreground shrink-0 ml-4">{a.time}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Attention Required */}
          <section>
            <h2 className="text-xs font-medium uppercase tracking-wider text-muted-foreground mb-4">
              Attention Required
            </h2>
            <div className="border divide-y">
              {attentionItems.map((a, i) => (
                <div key={i} className="flex items-start gap-3 px-4 py-3">
                  <AlertCircle
                    className={`h-4 w-4 mt-0.5 shrink-0 ${a.urgent ? "text-destructive" : "text-muted-foreground"}`}
                    strokeWidth={1.5}
                  />
                  <p className="text-sm">{a.text}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
