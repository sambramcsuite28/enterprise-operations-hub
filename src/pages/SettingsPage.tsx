import { TopBar } from "@/components/TopBar";

export default function SettingsPage() {
  return (
    <>
      <TopBar title="Settings" />
      <main className="p-6">
        <p className="text-sm text-muted-foreground">Organization settings will appear here.</p>
      </main>
    </>
  );
}
