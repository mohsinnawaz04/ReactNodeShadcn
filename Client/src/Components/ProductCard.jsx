import { AspectRatio } from "./ui/aspect-ratio";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";

const ProductCard = () => {
  return (
    <Card className="w-[500px] py-2">
      {/* Card Content */}
      <CardContent>
        {/* <AspectRatio ratio={16 / 9}> */}
        <div className="w-[400px] mx-auto">
          <img
            src="product1.avif"
            alt="Image"
            className="rounded-md object-cover select-none"
          />
        </div>
        {/* </AspectRatio> */}
      </CardContent>

      {/* Card Header */}
      <CardHeader>
        <CardTitle>Card 01</CardTitle>
        <CardDescription>This is a shadcn Card</CardDescription>
      </CardHeader>

      {/* Card Footer */}
      <CardFooter className="flex justify-between">
        <Button>More Info</Button>
        <Button>Add to Cart</Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
