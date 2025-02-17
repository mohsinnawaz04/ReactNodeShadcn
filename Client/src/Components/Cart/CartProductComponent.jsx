import { Minus, Plus } from "lucide-react";
import { Button } from "../ui/button";

const CartProductComponent = () => {
  return (
    <>
      <li className="flex items-center justify-between p-4 bg-zinc-800/50 border border-zinc-800 rounded-lg">
        <div className="flex items-center space-x-4">
          <img
            className="rounded-md"
            src="images/glasses.png"
            alt="Glasses Image"
            width={150}
          />
          <div className="product_info_text">
            <h3 className="font-semibold">T-Shirt</h3>
            <p className="text-sm text-muted-foreground">$999</p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <Button
            className="bg-zinc-950 hover:bg-zinc-950/40 active:bg-zinc-800/20"
            size="icon"
          >
            <Minus className="h-4 w-4" />
          </Button>
          <span className="w-8 text-center">1</span>
          <Button
            className="bg-zinc-950 hover:bg-zinc-950/40 active:bg-zinc-800/20"
            size="icon"
          >
            <Plus className="h-4 w-4" />
          </Button>
        </div>
      </li>
    </>
  );
};

export default CartProductComponent;
