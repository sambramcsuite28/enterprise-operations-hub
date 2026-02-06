import { NavLink } from "@/components/NavLink";
import {
  LayoutDashboard,
  Briefcase,
  Users,
  Video,
  UserCog,
  GitBranch,
  Puzzle,
  BarChart3,
  CreditCard,
  Settings,
  ChevronDown,
} from "lucide-react";

const primaryNav = [
  { title: "Overview", to: "/", icon: LayoutDashboard },
  { title: "Jobs", to: "/jobs", icon: Briefcase },
  { title: "Candidates", to: "/candidates", icon: Users },
  { title: "Interviews", to: "/interviews", icon: Video },
];

const managementNav = [
  { title: "Team", to: "/team", icon: UserCog },
  { title: "Workflow", to: "/workflow", icon: GitBranch },
  { title: "Integrations", to: "/integrations", icon: Puzzle },
];

const systemNav = [
  { title: "Usage", to: "/usage", icon: BarChart3 },
  { title: "Billing", to: "/billing", icon: CreditCard },
  { title: "Settings", to: "/settings", icon: Settings },
];

function SidebarSection({ label, items }: { label: string; items: typeof primaryNav }) {
  return (
    <div className="mb-6">
      <p className="px-4 mb-2 text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
        {label}
      </p>
      <nav className="space-y-0.5">
        {items.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.to === "/"}
            className="flex items-center gap-3 px-4 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground hover:bg-accent"
            activeClassName="text-foreground bg-accent font-medium"
          >
            <item.icon className="h-4 w-4 shrink-0" strokeWidth={1.5} />
            <span>{item.title}</span>
          </NavLink>
        ))}
      </nav>
    </div>
  );
}

export function AppSidebar() {
  return (
    <aside className="fixed left-0 top-0 z-30 flex h-screen w-60 flex-col border-r bg-secondary">
      {/* Logo */}
      <div className="flex h-14 items-center px-5 border-b">
        <span className="text-sm font-semibold tracking-tight">HireOS</span>
      </div>

      {/* Navigation */}
      <div className="flex-1 overflow-y-auto py-4">
        <SidebarSection label="Primary" items={primaryNav} />
        <SidebarSection label="Management" items={managementNav} />
        <SidebarSection label="System" items={systemNav} />
      </div>

      {/* Org switcher */}
      <div className="border-t p-3">
        <button className="flex w-full items-center gap-3 rounded-md px-2 py-2 text-sm hover:bg-accent transition-colors">
          <div className="flex h-8 w-8 items-center justify-center rounded-md bg-foreground text-primary-foreground text-xs font-semibold">
            AC
          </div>
          <div className="flex-1 text-left">
            <p className="text-sm font-medium leading-none">Acme Corp</p>
            <p className="text-xs text-muted-foreground mt-0.5">Enterprise</p>
          </div>
          <ChevronDown className="h-3.5 w-3.5 text-muted-foreground" />
        </button>
      </div>
    </aside>
  );
}
