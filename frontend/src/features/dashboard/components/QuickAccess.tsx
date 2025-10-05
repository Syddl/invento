import { Button } from "@/components/ui/button";
import { ChartSpline, Package, ShoppingCart } from "lucide-react";
import React from "react";

const QuickAccess = () => {
  return (
    <div className="flex items-center justify-between mt-5 w-full bg-gradient-to-b from-neutral-50 to-neutral-100 px-6 py-4 border border-neutral-200 rounded-xl shadow-sm">
      <p className="font-semibold">Quick Actions</p>

      <div className="flex gap-2">
        <Button className="bg-neutral-900 text-white hover:bg-neutral-800 cursor-pointer">
          <Package /> <span>Add Product</span>
        </Button>
        <Button
          variant="outline"
          className="bg-white text-800 hover:bg-neutral-100 cursor-pointer border-neutral-200"
        >
          <ShoppingCart /> <span>Manage Suppliers</span>
        </Button>
        <Button
          variant="outline"
          className="bg-white text-800 hover:bg-neutral-100 cursor-pointer border-neutral-200"
        >
          <ChartSpline /> Generate Report
        </Button>
      </div>
    </div>
  );
};

export default QuickAccess;
