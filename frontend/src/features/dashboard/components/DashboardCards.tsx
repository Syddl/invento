import Card from "./Card";
import { Box, TrendingUp, TriangleAlert, Users } from "lucide-react";

const DashboardCards = () => {
  const mockData = [
    {
      title: "Total Products",
      value: "1,234",
      change: "+20.1% from last month",
      icon: Box,
    },
    {
      title: "Total Value",
      value: "$1,234,567",
      change: "+15.3% from last month",
      icon: TrendingUp,
    },
    {
      title: "Low Stock Alerts",
      value: "12",
      change: "Items need restocking",
      icon: TriangleAlert,
    },
    {
      title: "Total Suppliers",
      value: "47",
      change: "+2 from last month",
      icon: Users,
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

export default DashboardCards;
