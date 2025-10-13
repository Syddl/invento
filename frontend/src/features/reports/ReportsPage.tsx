import ReportHeader from "./components/ReportHeader";
import ReportCards from "./components/ReportCard";
import { ReportPieChart } from "./components/ReportPieChart";
import { ReportChart } from "./components/ReportChart";
import { ReportTable } from "./components/ReportTable";

const ReportPage = () => {
  return (
    <main className="p-5">
      <ReportHeader />
      <ReportCards />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 my-5">
        <ReportChart />
        <ReportPieChart />
      </div>
      <ReportTable />
    </main>
  );
};

export default ReportPage;
