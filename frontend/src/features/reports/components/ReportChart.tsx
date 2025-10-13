"use client";
import { TrendingUp } from "lucide-react";
import { CartesianGrid, Line, LineChart, XAxis } from "recharts";
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

export const description = "A line chart";

const chartData = [
  { month: "January", desktop: 186 },
  { month: "February", desktop: 305 },
  { month: "March", desktop: 237 },
  { month: "April", desktop: 73 },
  { month: "May", desktop: 209 },
  { month: "June", desktop: 214 },
];

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "#3B82F6", // Tailwind blue-500
  },
} satisfies ChartConfig;

export function ReportChart() {
  return (
    <div className="h-full">
      <Card className="bg-white border-neutral-300">
        <CardHeader>
          <CardTitle className="text-lg font-semibold text-neutral-800">
            Line Chart
          </CardTitle>
          <CardDescription className="text-sm text-neutral-500">
            January - June 2024
          </CardDescription>
        </CardHeader>

        <CardContent>
          <ChartContainer config={chartConfig}>
            <LineChart
              accessibilityLayer
              data={chartData}
              margin={{
                left: 12,
                right: 12,
              }}
            >
              <CartesianGrid
                strokeDasharray="3 3"
                stroke="#E5E7EB"
                vertical={false}
              />
              <XAxis
                dataKey="month"
                tickLine={false}
                axisLine={false}
                tickMargin={8}
                tickFormatter={(value) => value.slice(0, 3)}
                stroke="#9CA3AF"
              />
              <ChartTooltip
                cursor={{ stroke: "#93C5FD", strokeWidth: 1 }}
                content={
                  <ChartTooltipContent
                    hideLabel
                    className="bg-white/90 backdrop-blur-md border border-gray-200 text-sm"
                  />
                }
              />
              <Line
                dataKey="desktop"
                type="monotone"
                stroke="#3B82F6"
                strokeWidth={3}
                dot={{ r: 2, fill: "#3B82F6" }}
              />
            </LineChart>
          </ChartContainer>
        </CardContent>

        <CardFooter className="flex-col items-start gap-1 text-sm">
          <div className="flex items-center gap-2 font-medium text-neutral-700">
            Trending up by 5.2% this month
            <TrendingUp className="h-4 w-4 text-green-500" />
          </div>
          <div className="text-neutral-500">
            Showing total visitors for the last 6 months
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
