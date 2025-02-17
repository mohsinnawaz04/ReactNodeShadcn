import { ShoppingCart } from "lucide-react";
import { Button } from "../Components/ui/button";
import { Separator } from "../Components/ui/separator";
import CartProductComponent from "../Components/Cart/CartProductComponent";
import CheckoutProduct from "../Components/Cart/CheckoutProduct";

const CartPage = () => {
  return (
    // <div className="cart_page container mt-20">
    //   <div className="grid">
    //     <h1 className="text-3xl font-bold">Shopping Cart</h1>

    //     <div className="products_listing">
    //       <div className="cart_products">
    //         <ul className="space-y-4 mt-10">
    //           <li className="flex items-center justify-between p-4 border rounded-lg shadow">
    //             <div>
    //               <h3 className="font-semibold">T-Shirt</h3>
    //               <p className="text-sm text-muted-foreground">$999</p>
    //             </div>
    //             <div className="flex items-center space-x-2">
    //               <Button size="icon">
    //                 <Minus />
    //               </Button>
    //               <span>1</span>
    //               <Button size="icon">
    //                 <Plus />
    //               </Button>
    //             </div>
    //           </li>
    //         </ul>
    //       </div>
    //     </div>
    //   </div>
    // </div>

    <div className="container mx-auto p-4 md:p-6">
      <h1 className="text-3xl font-bold mb-6">Shopping Cart</h1>
      <div className="grid md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          <ul className="space-y-4">
            <CartProductComponent />
          </ul>
        </div>
        <div>
          <div className="bg-zinc-900/50 p-4 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">Checkout</h2>
            <div className="space-y-2">
              <CheckoutProduct />
            </div>
            <Separator className="my-4" />
            <div className="flex justify-between font-bold">
              <span>Total</span>
              <span>$1499</span>
            </div>
            <Button className="w-full mt-4 bg-zinc-800 hover:bg-zinc-700/80 active:bg-zinc-500/80">
              <ShoppingCart className="mr-2 h-4 w-4" /> Proceed to Checkout
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
