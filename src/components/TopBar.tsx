import { Search, Bell } from "lucide-react";
import { Input } from "@/components/ui/input";

interface TopBarProps {
  title: string;
}

export function TopBar({ title }: TopBarProps) {
  return (
    <header className="sticky top-0 z-20 flex h-14 items-center justify-between border-b bg-background px-6">
      <h1 className="text-sm font-semibold">{title}</h1>

      <div className="flex items-center gap-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search candidates, jobs, emails…"
            className="h-8 w-64 border-border bg-secondary pl-9 text-sm placeholder:text-muted-foreground focus-visible:ring-1"
          />
        </div>

        <button className="relative p-1.5 text-muted-foreground hover:text-foreground transition-colors">
          <Bell className="h-4 w-4" strokeWidth={1.5} />
          <span className="absolute right-1 top-1 h-1.5 w-1.5 rounded-full bg-destructive" />
        </button>

        <div className="flex h-7 w-7 items-center justify-center rounded-full bg-foreground text-primary-foreground text-xs font-medium">
          JD
        </div>
      </div>
    </header>
  );
}
