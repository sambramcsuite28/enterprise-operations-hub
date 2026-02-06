import { TopBar } from "@/components/TopBar";
import { GripVertical, Zap, User, Filter } from "lucide-react";

const stages = [
  { name: "Apply", type: "manual", description: "Candidates submit application" },
  { name: "Resume Filter", type: "filter", description: "Automatic resume screening" },
  { name: "AI Interview", type: "ai", description: "Automated AI-powered interview" },
  { name: "Human Interview", type: "manual", description: "Panel or 1:1 interview" },
  { name: "Offer", type: "manual", description: "Final offer stage" },
];

const typeIcons: Record<string, typeof Zap> = {
  ai: Zap,
  manual: User,
  filter: Filter,
};

const typeLabels: Record<string, string> = {
  ai: "AI Automated",
  manual: "Manual",
  filter: "Auto Filter",
};

export default function WorkflowPage() {
  return (
    <>
      <TopBar title="Workflow" />
      <main className="p-6">
        <div className="mb-6">
          <p className="text-sm text-muted-foreground">
            Configure your hiring pipeline stages. Drag to reorder.
          </p>
        </div>

        <div className="max-w-xl space-y-px bg-border">
          {stages.map((stage, i) => {
            const Icon = typeIcons[stage.type] || User;
            return (
              <div
                key={stage.name}
                className="flex items-center gap-4 bg-background px-5 py-4 group"
              >
                <GripVertical className="h-4 w-4 text-muted-foreground/40 cursor-grab" />
                <div className="flex h-8 w-8 items-center justify-center border">
                  <span className="text-xs font-medium text-muted-foreground">{i + 1}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium">{stage.name}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">{stage.description}</p>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                  <Icon className="h-3.5 w-3.5" strokeWidth={1.5} />
                  {typeLabels[stage.type]}
                </div>
              </div>
            );
          })}
        </div>
      </main>
    </>
  );
}
