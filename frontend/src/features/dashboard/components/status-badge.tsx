import type React from "react";
import { cn } from "@/lib/utils";

interface StatusBadgeProps {
  status: "low" | "medium" | "high" | "out-of-stock";
  children: React.ReactNode;
  className?: string;
}

export function StatusBadge({ status, children, className }: StatusBadgeProps) {
  const statusStyles = {
    low: "bg-red-50 text-red-700 border-red-200",
    medium: "bg-yellow-50 text-yellow-700 border-yellow-200",
    high: "bg-green-50 text-green-700 border-green-200",
    "out-of-stock": "bg-gray-50 text-gray-700 border-gray-200",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border",
        statusStyles[status],
        className
      )}
    >
      {children}
    </span>
  );
}
