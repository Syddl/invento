import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

const SuppliersHeader = () => {
  return (
    <div className="flex items-center justify-between ">
      <div>
        <h1 className="font-bold text-3xl">Suppliers</h1>
        <p className="text-neutral-500 text-sm">
          Manage your supplier relationships
        </p>
      </div>
      <Button className="bg-neutral-900 text-white hover:bg-neutral-800 cursor-pointer">
        <Plus /> <span>Add Supplier</span>
      </Button>
    </div>
  );
};

export default SuppliersHeader;
