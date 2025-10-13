import { Download, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const ReportHeader = () => {
  return (
    <div className="flex items-center justify-between mb-5">
      <div>
        <h1 className="font-bold text-3xl">Reports</h1>
        <p className="text-neutral-500 text-sm">
          Analytics and insights for your inventory
        </p>
      </div>
      <div className="flex gap-2">
        <Select defaultValue="30days">
          <SelectTrigger className="w-[180px]">
            <SelectValue />
          </SelectTrigger>
          <SelectContent className="bg-white">
            <SelectGroup>
              <SelectItem value="7days">Last 7 days</SelectItem>
              <SelectItem value="30days">Last 30 days</SelectItem>
              <SelectItem value="90days">Last 90 days</SelectItem>
              <SelectItem value="lastYear">last year</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <Button className="bg-neutral-900 text-white hover:bg-neutral-800 cursor-pointer">
          <Download /> <span> Export Data</span>
        </Button>
      </div>
    </div>
  );
};

export default ReportHeader;
