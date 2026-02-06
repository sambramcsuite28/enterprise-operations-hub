import { TopBar } from "@/components/TopBar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Download } from "lucide-react";

const invoices = [
  { date: "12 Jan 2026", amount: "₹24,999", status: "Paid", id: "INV-2026-001" },
  { date: "12 Dec 2025", amount: "₹24,999", status: "Paid", id: "INV-2025-012" },
  { date: "12 Nov 2025", amount: "₹22,499", status: "Paid", id: "INV-2025-011" },
  { date: "12 Oct 2025", amount: "₹22,499", status: "Paid", id: "INV-2025-010" },
];

export default function BillingPage() {
  return (
    <>
      <TopBar title="Billing" />
      <main className="p-6 space-y-10">
        {/* Plan Summary */}
        <section>
          <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">
            Plan Summary
          </h2>
          <div className="border rounded-md p-5 space-y-3">
            <div className="flex items-center gap-3">
              <span className="text-base font-semibold">Growth Plan</span>
              <Badge variant="secondary" className="text-xs font-normal">Active</Badge>
            </div>
            <p className="text-sm text-muted-foreground">Includes 500 AI interviews / month</p>
            <p className="text-sm text-muted-foreground">Next renewal: 12 Feb 2026</p>
          </div>
        </section>

        {/* Usage Charges */}
        <section>
          <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">
            Usage Charges
          </h2>
          <div className="border rounded-md divide-y">
            <div className="flex items-center justify-between px-4 py-3.5">
              <div>
                <span className="text-sm font-medium">Extra AI interviews</span>
                <p className="text-xs text-muted-foreground mt-0.5">42 interviews beyond plan limit</p>
              </div>
              <span className="text-sm font-medium">₹4,200</span>
            </div>
            <div className="flex items-center justify-between px-4 py-3.5 bg-secondary/50">
              <span className="text-sm font-medium">Estimated total this cycle</span>
              <span className="text-sm font-semibold">₹29,199</span>
            </div>
          </div>
        </section>

        {/* Payment Method */}
        <section>
          <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">
            Payment Method
          </h2>
          <div className="border rounded-md p-5">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium">Visa ending in 4832</p>
                <p className="text-xs text-muted-foreground mt-0.5">Expires 08/2027</p>
              </div>
              <Button variant="outline" size="sm" className="h-8 text-xs">
                Change
              </Button>
            </div>
          </div>
        </section>

        {/* Invoice History */}
        <section>
          <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">
            Invoice History
          </h2>
          <div className="border rounded-md">
            <table className="w-full">
              <thead>
                <tr className="border-b bg-secondary">
                  <th className="px-4 py-2.5 text-left text-xs font-medium uppercase tracking-wider text-muted-foreground">Date</th>
                  <th className="px-4 py-2.5 text-left text-xs font-medium uppercase tracking-wider text-muted-foreground">Amount</th>
                  <th className="px-4 py-2.5 text-left text-xs font-medium uppercase tracking-wider text-muted-foreground">Status</th>
                  <th className="px-4 py-2.5 text-left text-xs font-medium uppercase tracking-wider text-muted-foreground">Invoice</th>
                  <th className="w-10"></th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {invoices.map((inv) => (
                  <tr key={inv.id} className="hover:bg-accent/50 transition-colors">
                    <td className="px-4 py-3 text-sm">{inv.date}</td>
                    <td className="px-4 py-3 text-sm font-medium">{inv.amount}</td>
                    <td className="px-4 py-3 text-sm text-muted-foreground">{inv.status}</td>
                    <td className="px-4 py-3 text-sm text-muted-foreground">{inv.id}</td>
                    <td className="px-4 py-3">
                      <button className="p-1 text-muted-foreground hover:text-foreground transition-colors">
                        <Download className="h-4 w-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </>
  );
}
