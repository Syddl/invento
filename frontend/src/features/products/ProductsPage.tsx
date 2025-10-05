import { Search } from "lucide-react";
import React from "react";
import { Input } from "@/components/ui/input";
import ProductsTable from "./components/ProductsTable";
import ProductsHeader from "./components/ProductsHeader";

const ProductsPage = () => {
  return (
    <main className="p-5">
      <ProductsHeader />
      <div className="relative w-full max-w-sm mt-5">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-4 w-4" />
        <Input
          type="text"
          placeholder="Search products..."
          className="pl-9 rounded-md border border-gray-300 focus-visible:ring-0 focus-visible:border-gray-400 placeholder:text-gray-400"
        />
      </div>
      <ProductsTable />
    </main>
  );
};

export default ProductsPage;
