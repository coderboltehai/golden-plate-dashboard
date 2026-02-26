import { DollarSign, TrendingUp, Wallet, CreditCard } from "lucide-react";
import { StatCard } from "@/components/dashboard/StatCard";
import { SalesChart } from "@/components/dashboard/SalesChart";
import { Badge } from "@/components/ui/badge";

const paymentHistory = [
  { id: "PAY-050", amount: "$420.00", period: "Feb 19-25", method: "Bank Transfer", status: "Paid" },
  { id: "PAY-049", amount: "$385.50", period: "Feb 12-18", method: "Bank Transfer", status: "Paid" },
  { id: "PAY-048", amount: "$510.00", period: "Feb 5-11", method: "Bank Transfer", status: "Paid" },
  { id: "PAY-047", amount: "$290.00", period: "Jan 29 - Feb 4", method: "Bank Transfer", status: "Paid" },
];

const breakdownData = [
  { label: "Base Pay", amount: "$98.00", pct: "63%" },
  { label: "Tips", amount: "$42.00", pct: "27%" },
  { label: "Bonuses", amount: "$16.00", pct: "10%" },
];

const DeliveryEarnings = () => {
  return (
    <div className="page-container">
      <h1 className="text-2xl font-bold">Earnings</h1>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard title="Today" value="$156.00" change={18} icon={DollarSign} />
        <StatCard title="This Week" value="$642.50" change={12} icon={TrendingUp} />
        <StatCard title="This Month" value="$2,340.00" change={8} icon={Wallet} />
        <StatCard title="Total Balance" value="$156.00" changeLabel="Available" icon={CreditCard} />
      </div>

      {/* Breakdown */}
      <div className="grid lg:grid-cols-2 gap-6">
        <div className="section-card">
          <div className="section-header"><h3 className="font-semibold">Today's Breakdown</h3></div>
          <div className="section-content space-y-4">
            {breakdownData.map((item) => (
              <div key={item.label} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-8 rounded-full bg-primary" />
                  <div>
                    <p className="text-sm font-medium">{item.label}</p>
                    <p className="text-xs text-muted-foreground">{item.pct} of total</p>
                  </div>
                </div>
                <span className="font-semibold">{item.amount}</span>
              </div>
            ))}
            <div className="border-t border-border pt-3 flex justify-between font-bold">
              <span>Total</span><span className="text-primary">$156.00</span>
            </div>
          </div>
        </div>

        <div className="section-card">
          <div className="section-header"><h3 className="font-semibold">Weekly Trend</h3></div>
          <div className="section-content"><SalesChart /></div>
        </div>
      </div>

      {/* Payment History */}
      <div className="section-card">
        <div className="section-header"><h3 className="font-semibold">Payment History</h3></div>
        <div className="overflow-x-auto">
          <table className="data-table">
            <thead><tr><th>ID</th><th>Amount</th><th>Period</th><th>Method</th><th>Status</th></tr></thead>
            <tbody>
              {paymentHistory.map((p) => (
                <tr key={p.id}>
                  <td className="font-medium text-sm">{p.id}</td>
                  <td className="text-sm font-semibold text-primary">{p.amount}</td>
                  <td className="text-sm text-muted-foreground">{p.period}</td>
                  <td className="text-sm">{p.method}</td>
                  <td><Badge variant="outline" className="text-success border-success/30">{p.status}</Badge></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DeliveryEarnings;
