import { Minus } from "lucide-react";
import { Button } from "@/components/ui/button";

const TransactionsHeader = () => {
  return (
    <div className="flex items-center justify-between ">
      <div>
        <h1 className="font-bold text-3xl">Transactions</h1>
        <p className="text-neutral-500 text-sm">
          Track all inventory movements
        </p>
      </div>
      <Button className="bg-neutral-900 text-white hover:bg-neutral-800 cursor-pointer">
        <Minus /> <span>Record Sale</span>
      </Button>
    </div>
  );
};

export default TransactionsHeader;
