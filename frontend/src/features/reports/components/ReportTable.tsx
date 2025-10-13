import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const invoices = [
  {
    invoice: "INV001",
    paymentStatus: "Paid",
    totalAmount: "$250.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV002",
    paymentStatus: "Pending",
    totalAmount: "$150.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV003",
    paymentStatus: "Unpaid",
    totalAmount: "$350.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV004",
    paymentStatus: "Paid",
    totalAmount: "$450.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV005",
    paymentStatus: "Paid",
    totalAmount: "$550.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV006",
    paymentStatus: "Pending",
    totalAmount: "$200.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV007",
    paymentStatus: "Unpaid",
    totalAmount: "$300.00",
    paymentMethod: "Credit Card",
  },
];

export function ReportTable() {
  return (
    <div className="lg:col-span-2 h-full">
      <Card className="h-full flex flex-col bg-white p-6 border border-neutral-300 rounded-xl">
        <CardHeader className="p-0">
          <CardTitle className="p-0">Top Performing Products</CardTitle>
        </CardHeader>
        <CardContent className="p-0 flex-1">
          <Table className="w-full text-sm text-neutral-700">
            <TableBody>
              {invoices.map((invoice) => (
                <TableRow
                  key={invoice.invoice}
                  className="hover:bg-neutral-100 transition-colors duration-150 border-neutral-300 h-12"
                >
                  <TableCell className="font-medium text-neutral-500">
                    {invoice.invoice}
                  </TableCell>
                  <TableCell className="text-neutral-700">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${
                        invoice.paymentStatus === "Paid"
                          ? "bg-green-100 text-green-700"
                          : invoice.paymentStatus === "Pending"
                          ? "bg-yellow-100 text-yellow-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {invoice.paymentStatus}
                    </span>
                  </TableCell>
                  <TableCell className="text-neutral-700">
                    {invoice.paymentMethod}
                  </TableCell>
                  <TableCell className="text-right text-neutral-800">
                    {invoice.totalAmount}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>

            <TableFooter>
              <TableRow className="border-t border-neutral-200">
                <TableCell
                  colSpan={3}
                  className="font-semibold text-neutral-700"
                >
                  Total
                </TableCell>
                <TableCell className="text-right font-semibold text-neutral-800">
                  $2,500.00
                </TableCell>
              </TableRow>
            </TableFooter>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
