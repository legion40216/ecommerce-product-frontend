// components/ProductDetails.tsx
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { formatter } from "@/utils/formatters";
import { Minus, Plus, ShoppingCart, X } from "lucide-react";
import { toast } from "sonner";

type ProductDetailsProps = {
  name: string;
  description: string;
  price: number;
  discount: number;
  quantity: number;
  inCart: boolean;
  onQuantityChange: (change: number) => void;
  onCartAction: () => void;
};

export default function ProductDetails({
  name,
  description,
  price,
  discount,
  quantity,
  inCart,
  onQuantityChange,
  onCartAction
}: ProductDetailsProps) {
  const handleQuantityChange = (change: number) => {
    if (change < 0 && quantity <= 1) {
      toast.error("Quantity cannot be less than 1");
      return;
    }
    onQuantityChange(change);
  };

  return (
    <div className="grid place-content-center space-y-4 p-6">
      {/* Product Info */}
      <div className="space-y-2 md:space-y-4">
        <span className="text-kumbh-orange font-semibold uppercase text-sm block">
          sneaker company
        </span>
        <h1 className="text-3xl font-bold text-kumbh-VeryDarkBlue">
          {name}
        </h1>
        <p className="md:mt-8 text-kumbh-darkGrayishBlue">
          {description}
        </p>
      </div>

      {/* Price Section */}
      <div className="flex items-center justify-between md:flex-col 
        md:items-start md:justify-normal md:space-y-2"
      >
        <div className="flex items-center gap-3">
          <span className="text-2xl font-bold text-kumbh-VeryDarkBlue">
            ${price.toFixed(2)}
          </span>
          <Badge className="bg-kumbh-orange/20 text-kumbh-orange font-bold">
            {discount}%
          </Badge>
        </div>
        <span className="line-through text-kumbh-grayishBlue font-[600]">
          {formatter.format(price * 2)}
        </span>
      </div>

      {/* Quantity & Add to Cart */}
      <div className="flex flex-col md:flex-row gap-4 md:mt-4">
        {/* Quantity Selector */}
        <div className="flex items-center rounded-lg w-full md:w-min justify-between bg-kumbh-lightGrayishBlue">
          <Button
            variant="ghost"
            size="icon"
            className="text-kumbh-orange hover:text-kumbh-orange 
            bg-kumbh-lightGrayishBlue hover:bg-kumbh-darkGrayishBlue/5"
            onClick={() => handleQuantityChange(-1)}
          >
            <Minus className="size-4" />
          </Button>

          <div className="flex items-center bg-kumbh-lightGrayishBlue aspect-square">
            <span className="px-4 text-kumbh-veryDarkBlue font-bold">
              {quantity}
            </span>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="text-kumbh-orange bg-kumbh-lightGrayishBlue 
            hover:text-kumbh-orange hover:bg-kumbh-darkGrayishBlue/5"
            onClick={() => handleQuantityChange(1)}
          >
            <Plus className="size-4" />
          </Button>
        </div>

        {/* Cart Action Button */}
        <Button
          size="lg"
          className="bg-kumbh-orange hover:bg-kumbh-orange/90 text-white md:flex-1"
          onClick={onCartAction}
        >
          <span className="flex items-center gap-2">
            {inCart ? (
              <>
                <X className="size-5" />
                Remove from cart
              </>
            ) : (
              <>
                <ShoppingCart className="size-5" />
                Add to cart
              </>
            )}
          </span>
        </Button>
      </div>
    </div>
  );
}