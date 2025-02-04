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
          <TableRow className="border-zinc-800">
            <TableHead>Name</TableHead>
            <TableHead>Description</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Category</TableHead>
            <TableHead className="text-right">Created At</TableHead>
            <TableHead className="text-right w-[50px]"></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium">Google Pixel 9XL</TableCell>
            <TableCell>Lorem ipsum dolor sit amet.</TableCell>
            <TableCell>$250.00</TableCell>
            <TableCell>Mobile</TableCell>
            <TableCell className="text-right">January 31, 2025</TableCell>
            <TableCell className="text-right">
              <Button className="bg-transparent -mt-2">...</Button>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};

export default ProductsTable;
