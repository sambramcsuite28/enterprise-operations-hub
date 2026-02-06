import { TopBar } from "@/components/TopBar";
import { Progress } from "@/components/ui/progress";

const hiringActivity = [
  { label: "Applications received", value: "1,284" },
  { label: "AI interviews conducted", value: "312" },
  { label: "Reports generated", value: "298" },
  { label: "Active jobs", value: "7" },
];

const teamActivity = [
  { label: "Most active recruiter", value: "Maria Perez" },
  { label: "Avg review time", value: "1.4 days" },
  { label: "Interview completion rate", value: "94%" },
];

export default function UsagePage() {
  const creditsUsed = 312;
  const creditsTotal = 500;
  const creditsPercent = Math.round((creditsUsed / creditsTotal) * 100);

  return (
    <>
      <TopBar title="Usage" />
      <main className="p-6 space-y-10">
        {/* Hiring Activity */}
        <section>
          <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">
            Hiring Activity
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-px border rounded-md bg-border">
            {hiringActivity.map((item) => (
              <div key={item.label} className="bg-background p-5">
                <p className="text-2xl font-semibold tracking-tight">{item.value}</p>
                <p className="text-xs text-muted-foreground mt-1">{item.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Consumption Meter */}
        <section>
          <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">
            Consumption
          </h2>
          <div className="border rounded-md p-5">
            <div className="flex items-baseline justify-between mb-3">
              <span className="text-sm font-medium">AI Interview Credits</span>
              <span className="text-sm text-muted-foreground">
                {creditsUsed} / {creditsTotal}
              </span>
            </div>
            <Progress value={creditsPercent} className="h-2" />
            <p className="text-xs text-muted-foreground mt-2">
              {creditsTotal - creditsUsed} credits remaining this billing cycle
            </p>
          </div>
        </section>

        {/* Team Activity */}
        <section>
          <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">
            Team Activity
          </h2>
          <div className="border rounded-md divide-y">
            {teamActivity.map((item) => (
              <div key={item.label} className="flex items-center justify-between px-4 py-3.5">
                <span className="text-sm font-medium">{item.label}</span>
                <span className="text-sm text-muted-foreground">{item.value}</span>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
