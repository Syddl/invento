import { Pencil, Plus, Search, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import React from "react";
import { Input } from "@/components/ui/input";
import {
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  Table,
  TableCaption,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

const ProductsPage = () => {
  const products = [
    {
      name: 'MacBook Pro 16"',
      sku: "MBP16-001",
      category: "Laptops",
      quantity: 25,
      supplier: "Apple Inc.",
      price: "$2,499",
      status: "In Stock",
    },
    {
      name: "iPhone 15",
      sku: "IP15-001",
      category: "Smartphones",
      quantity: 5,
      supplier: "Apple Inc.",
      price: "$999",
      status: "Low Stock",
    },
    {
      name: "Dell XPS 13",
      sku: "XPS13-001",
      category: "Laptops",
      quantity: 15,
      supplier: "Dell Technologies",
      price: "$1,299",
      status: "In Stock",
    },
    {
      name: "Samsung Galaxy S24",
      sku: "SGS24-001",
      category: "Smartphones",
      quantity: 0,
      supplier: "Samsung Electronics",
      price: "$899",
      status: "Out of Stock",
    },
    {
      name: "Samsung Galaxy S24",
      sku: "SGS24-001",
      category: "Smartphones",
      quantity: 0,
      supplier: "Samsung Electronics",
      price: "$899",
      status: "Out of Stock",
    },
    {
      name: "Samsung Galaxy S24",
      sku: "SGS24-001",
      category: "Smartphones",
      quantity: 0,
      supplier: "Samsung Electronics",
      price: "$899",
      status: "Out of Stock",
    },
    {
      name: "Samsung Galaxy S24",
      sku: "SGS24-001",
      category: "Smartphones",
      quantity: 0,
      supplier: "Samsung Electronics",
      price: "$899",
      status: "Out of Stock",
    },
    {
      name: 'MacBook Pro 16"',
      sku: "MBP16-001",
      category: "Laptops",
      quantity: 25,
      supplier: "Apple Inc.",
      price: "$2,499",
      status: "In Stock",
    },
    {
      name: "iPhone 15",
      sku: "IP15-001",
      category: "Smartphones",
      quantity: 5,
      supplier: "Apple Inc.",
      price: "$999",
      status: "Low Stock",
    },
    {
      name: "Dell XPS 13",
      sku: "XPS13-001",
      category: "Laptops",
      quantity: 15,
      supplier: "Dell Technologies",
      price: "$1,299",
      status: "In Stock",
    },
    {
      name: "Samsung Galaxy S24",
      sku: "SGS24-001",
      category: "Smartphones",
      quantity: 0,
      supplier: "Samsung Electronics",
      price: "$899",
      status: "Out of Stock",
    },
    {
      name: "Samsung Galaxy S24",
      sku: "SGS24-001",
      category: "Smartphones",
      quantity: 0,
      supplier: "Samsung Electronics",
      price: "$899",
      status: "Out of Stock",
    },
    {
      name: "Samsung Galaxy S24",
      sku: "SGS24-001",
      category: "Smartphones",
      quantity: 0,
      supplier: "Samsung Electronics",
      price: "$899",
      status: "Out of Stock",
    },
    {
      name: "Samsung Galaxy S24",
      sku: "SGS24-001",
      category: "Smartphones",
      quantity: 0,
      supplier: "Samsung Electronics",
      price: "$899",
      status: "Out of Stock",
    },
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "In Stock":
        return (
          <Badge className="bg-blue-600 hover:bg-blue-700 text-white">
            {status}
          </Badge>
        );
      case "Low Stock":
        return (
          <Badge className="bg-gray-200 text-gray-800 hover:bg-gray-300">
            {status}
          </Badge>
        );
      case "Out of Stock":
        return (
          <Badge className="bg-red-500 hover:bg-red-600 text-white">
            {status}
          </Badge>
        );
      default:
        return <Badge>{status}</Badge>;
    }
  };

  return (
    <main className="p-5">
      <div className="flex items-center justify-between ">
        <div>
          <h1 className="font-bold text-3xl">Products</h1>
          <p className="text-neutral-500 text-sm">
            Manage your inventory products
          </p>
        </div>
        <Button className="bg-neutral-900 text-white hover:bg-neutral-800 cursor-pointer">
          <Plus /> <span>Add Product</span>
        </Button>
      </div>
      <div className="relative w-full max-w-sm mt-5">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-4 w-4" />
        <Input
          type="text"
          placeholder="Search products..."
          className="pl-9 rounded-md border border-gray-300 focus-visible:ring-0 focus-visible:border-gray-400 placeholder:text-gray-400"
        />
      </div>
      <div className="bg-white p-6 border border-gray-200 rounded-xl shadow-sm mt-5 max-h-170 overflow-y-auto">
        <Table>
          <TableHeader>
            <TableRow className="border-b border-neutral-200">
              <TableHead>Name</TableHead>
              <TableHead>SKU</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Quantity</TableHead>
              <TableHead>Supplier</TableHead>
              <TableHead>Price</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {products.map((product, index) => (
              <TableRow
                key={index}
                className="h-15 hover:bg-neutral-100 transition-colors duration-150 border-neutral-200"
              >
                <TableCell className="font-medium">{product.name}</TableCell>
                <TableCell>{product.sku}</TableCell>
                <TableCell>{product.category}</TableCell>
                <TableCell>{product.quantity}</TableCell>
                <TableCell>{product.supplier}</TableCell>
                <TableCell>{product.price}</TableCell>
                <TableCell>{getStatusBadge(product.status)}</TableCell>
                <TableCell className="text-right flex items-center justify-end gap-2">
                  <Pencil className="w-4 h-4 text-gray-500 hover:text-gray-700 cursor-pointer" />
                  <Trash2 className="w-4 h-4 text-gray-500 hover:text-red-600 cursor-pointer" />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </main>
  );
};

export default ProductsPage;
