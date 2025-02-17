import { Separator } from "../Components/ui/separator";
import { Input } from "../Components/ui/input";
import { Button } from "../Components/ui/button";
import { Upload } from "lucide-react";
import { Select } from "../Components/ui/select";
import { SelectCategory } from "../Components/Admin/Products/SelectCategory";
import { Textarea } from "../Components/ui/textarea";

const AddProduct = () => {
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mt-10">AddProduct</h1>

      <div className="grid grid-cols-12 mt-10 space-x-10">
        {/* Product Image */}
        <div className="col-span-4 border rounded-md">
          <h3 className="p-3">Product Image</h3>
          <Separator />

          <div className="p-3 space-y-2">
            <h6 className="sub-heading text-sm">Tag</h6>
            <Input placeholder="Mobile, Laptop, Electronics etc..." />
          </div>

          <div className="mt-2 p-3 space-y-2">
            <h6 className="sub-heading text-sm">Product Image</h6>
            <div className="img-wrapper border min-h-[250px] rounded-md">
              <img src="images/iphone.png" alt="Glasses Image" />
            </div>

            <Button className="hover:bg-zinc-700/40 active:bg-zinc-700/20">
              <Upload /> Add Another Image
            </Button>
          </div>
        </div>

        {/* Product Info */}
        <div className="col-span-8 border rounded-md relative">
          <h3 className="p-3">Product Details</h3>
          <Separator />

          <div className="p-3 space-y-2">
            <h6 className="sub-heading text-sm">Product Name</h6>
            <Input placeholder="Ex: Bluetooth USB Adapter" />
          </div>

          <div className="p-3 flex justify-between gap-5">
            <div className="flex-1 space-y-2">
              <h6 className="sub-heading text-sm">Product Price</h6>
              <Input type="number" min="1" max="2000" placeholder="Ex: 499" />
            </div>

            <div className="flex-1 space-y-2">
              <h6 className="sub-heading text-sm">Product Category</h6>
              <SelectCategory />
            </div>
          </div>

          <div className="p-3 space-y-2">
            <h6 className="sub-heading text-sm">Product Description</h6>
            <Textarea placeholder="Slim fit ready to wear jeans." rows="7" />
          </div>
          <Button className="mx-3 mt-2">Add Product</Button>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
