import { Box, LucideIcon } from "lucide-react";

interface StatCard {
  title: string;
  value: string | number;
  change: string;
  icon: LucideIcon;
}

const Card = ({ title, value, change, icon: Icon }: StatCard) => {
  return (
    <div className="bg-gradient-to-b from-neutral-50 to-neutral-200 p-6 border border-neutral-200 rounded-xl">
      <div className="flex items-center justify-between mb-2">
        <p className="text-neutral-500 font-semibold text-sm">{title}</p>
        <Icon className="h-5 w-5 text-neutral-600" />
      </div>
      <h1 className="text-3xl font-bold mb-2">{value}</h1>
      <p className="text-neutral-500 text-sm">{change}</p>
    </div>
  );
};

export default Card;
