import DashboardCards from "./components/DashboardCards";
import { RecentTable } from "./components/RecentTable";
import StockTable from "./components/StockTable";
import QuickAccess from "./components/QuickAccess";

const DashboardPage = () => {
  return (
    <main className="p-5">
      <DashboardCards />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-5 items-stretch">
        {/* Recent Activity */}
        <RecentTable />
        {/* Low Stock Alerts */}
        <StockTable />
      </div>
      <QuickAccess />
    </main>
  );
};

export default DashboardPage;
