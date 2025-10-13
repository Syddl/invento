import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertTriangle } from "lucide-react";
import React from "react";
import { StatusBadge } from "./status-badge";
import { Button } from "@/components/ui/button";

const StockTable = () => {
  const lowStockItems = [
    {
      product: "MacBook Air M2",
      current: 3,
      minimum: 10,
      supplier: "Apple Inc.",
    },
    {
      product: "Samsung Galaxy S24",
      current: 7,
      minimum: 15,
      supplier: "Samsung",
    },
    {
      product: "Dell XPS 13",
      current: 2,
      minimum: 8,
      supplier: "Dell Technologies",
    },
  ];

  return (
    <div className="h-full">
      <Card className="h-full flex flex-col bg-white py-6 px-3 border border-neutral-300 rounded-xl">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <AlertTriangle className="h-5 w-5 text-red-500" />
            Low Stock Alerts
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 flex-1">
          {lowStockItems.map((item, index) => (
            <div
              key={index}
              className="flex flex-col gap-2 p-3 bg-red-50 rounded-lg border border-red-200"
            >
              <div className="flex items-center justify-between">
                <span className="font-medium text-sm">{item.product}</span>
                <StatusBadge status="low">{item.current} left</StatusBadge>
              </div>
              <div className="text-xs text-muted-foreground">
                Minimum: {item.minimum} • Supplier: {item.supplier}
              </div>
              <Button size="sm" className="mt-2">
                Reorder Now
              </Button>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
};

export default StockTable;
