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

export function RecentTable() {
  return (
    <Table className="w-full text-sm text-neutral-700">
      <TableCaption className="text-neutral-500 text-xs">
        A list of your recent invoices.
      </TableCaption>
      <TableHeader>
        <TableRow className="border-b border-neutral-200">
          <TableHead className="w-[100px] font-semibold text-neutral-600">
            Invoice
          </TableHead>
          <TableHead className="font-semibold text-neutral-600">
            Status
          </TableHead>
          <TableHead className="font-semibold text-neutral-600">
            Method
          </TableHead>
          <TableHead className="text-right font-semibold text-neutral-600">
            Amount
          </TableHead>
        </TableRow>
      </TableHeader>

      <TableBody>
        {invoices.map((invoice) => (
          <TableRow
            key={invoice.invoice}
            className="hover:bg-neutral-100 transition-colors duration-150 border-neutral-300"
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
          <TableCell colSpan={3} className="font-semibold text-neutral-700">
            Total
          </TableCell>
          <TableCell className="text-right font-semibold text-neutral-800">
            $2,500.00
          </TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
}
