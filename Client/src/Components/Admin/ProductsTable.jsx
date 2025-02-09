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
import { Trash2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useEffect, useState } from "react";
import { useProducts } from "@/lib/Context/ProductsContext";

const ProductsTable = () => {
  const [isProductDeleting, setIsProductDeleting] = useState(false);
  const [products, setProducts] = useState([]);

  const { loadProducts, isLoading } = useProducts();
  const { toast } = useToast();

  useEffect(() => {
    async function fetchAllProducts() {
      const productsArray = await loadProducts();

      if (productsArray) {
        setProducts(productsArray.data.data);
      }
    }

    fetchAllProducts();
  }, [isLoading]);

  const handleDelete = (id) => {
    setIsProductDeleting(true);

    setTimeout(() => {
      toast({
        title: "Success",
        description: "Product has been Deleted.",
        duration: 3000,
      });

      setIsProductDeleting(false);
    }, 700);
  };

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
            <TableHead className="w-[100px] text-center">Remove</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {products.map((product) => (
            <TableRow key={product._id}>
              <TableCell className="font-medium">{product.name}</TableCell>
              <TableCell>{product.description}</TableCell>
              <TableCell>${product.price}</TableCell>
              <TableCell>{product.category}</TableCell>
              <TableCell className="text-start">
                {new Date(product.updatedAt).toLocaleDateString()}
              </TableCell>
              <TableCell className="text-center">
                <Button
                  onClick={() => handleDelete(1)}
                  className="bg-transparent shadow-none hover:bg-transparent"
                  disabled={isProductDeleting}
                >
                  <div className="group">
                    <Trash2
                      className="inline-block stroke-white group-hover:stroke-red-500 hover:cursor-pointer"
                      size={15}
                    />
                  </div>
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default ProductsTable;
