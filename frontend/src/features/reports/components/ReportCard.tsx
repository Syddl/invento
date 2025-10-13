import Card from "@/features/dashboard/components/Card";
import { Box, TrendingUp, TriangleAlert } from "lucide-react";

const ReportCards = () => {
  const mockData = [
    {
      title: "Total Stock Value",
      value: "$234,567",
      change: "+5.2% from last month",
      icon: Box,
    },
    {
      title: "Monthly Turnover",
      value: "2.3x",
      change: "Average inventory turnover",
      icon: TrendingUp,
    },
    {
      title: "Stock Movements",
      value: "1,247",
      change: "+15% from last month",
      icon: TrendingUp,
    },
    {
      title: "Critical Alerts",
      value: "12",
      change: "Items below minimum stock",
      icon: TriangleAlert,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {mockData.map((card, index) => (
        <Card
          key={index}
          title={card.title}
          value={card.value}
          change={card.change}
          icon={card.icon}
        />
      ))}
    </div>
  );
};

export default ReportCards;
