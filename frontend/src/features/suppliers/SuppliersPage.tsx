import React from "react";
import SuppliersHeader from "./components/SuppliersHeader";
import SuppliersTable from "./components/SuppliersTable";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

const SuppliersPage = () => {
  return (
    <main className="p-5">
      <SuppliersHeader />
      <div className="relative w-full max-w-sm mt-5 shadow-sm">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-4 w-4" />
        <Input
          type="text"
          placeholder="Search suppliers..."
          className="pl-9 rounded-md border border-gray-300 focus-visible:ring-0 focus-visible:border-gray-400 placeholder:text-gray-400"
        />
      </div>
      <SuppliersTable />
    </main>
  );
};

export default SuppliersPage;
