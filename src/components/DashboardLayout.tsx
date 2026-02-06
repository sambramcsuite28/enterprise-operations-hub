import { Outlet } from "react-router-dom";
import { AppSidebar } from "@/components/AppSidebar";

export function DashboardLayout() {
  return (
    <div className="flex min-h-screen w-full">
      <AppSidebar />
      <div className="flex-1 ml-60">
        <Outlet />
      </div>
    </div>
  );
}
