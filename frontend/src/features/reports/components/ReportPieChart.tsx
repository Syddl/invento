"use client";

import { TrendingUp } from "lucide-react";
import { Pie, PieChart } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

export const description = "A donut chart";

const chartData = [
  { browser: "Chrome", visitors: 275, fill: "#3B82F6" },
  { browser: "Safari", visitors: 200, fill: "#60A5FA" },
  { browser: "Firefox", visitors: 187, fill: "#93C5FD" },
  { browser: "Edge", visitors: 173, fill: "#BFDBFE" },
  { browser: "Other", visitors: 90, fill: "#DBEAFE" },
];

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  chrome: {
    label: "Chrome",
    color: "#3B82F6",
  },
  safari: {
    label: "Safari",
    color: "#60A5FA",
  },
  firefox: {
    label: "Firefox",
    color: "#93C5FD",
  },
  edge: {
    label: "Edge",
    color: "#BFDBFE",
  },
  other: {
    label: "Other",
    color: "#DBEAFE",
  },
} satisfies ChartConfig;

export function ReportPieChart() {
  return (
    <Card className="flex flex-col bg-white border-neutral-300">
      <CardHeader className="items-center pb-0">
        <CardTitle>Pie Chart - Donut</CardTitle>
        <CardDescription>January - June 2024</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[350px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="visitors"
              nameKey="browser"
              innerRadius={60}
            />
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 leading-none font-medium">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="text-muted-foreground leading-none">
          Showing total visitors for the last 6 months
        </div>
      </CardFooter>
    </Card>
  );
}
