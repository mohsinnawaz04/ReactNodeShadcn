import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "../ui/button";

const ProductsTable = () => {
  return (
    <div className="mx-1 mt-10 border border-zinc-800 rounded-md">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Description</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Category</TableHead>
            <TableHead className="text-start w-[200px]">Created At</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium">Google Pixel 9XL</TableCell>
            <TableCell>Lorem ipsum dolor sit amet.</TableCell>
            <TableCell>$250.00</TableCell>
            <TableCell>Mobile</TableCell>
            <TableCell className="text-start">January 31, 2025</TableCell>
          </TableRow>

          <TableRow>
            <TableCell className="font-medium">Google Pixel 9XL</TableCell>
            <TableCell>Lorem ipsum dolor sit amet.</TableCell>
            <TableCell>$250.00</TableCell>
            <TableCell>Mobile</TableCell>
            <TableCell className="text-start">January 31, 2025</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};

export default ProductsTable;
