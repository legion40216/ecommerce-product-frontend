import { toast } from 'sonner';
import { X, Plus, Minus } from "lucide-react";
import useCart from '../../../../../hooks/useCartStore';

import type { CartItem } from '../../../../../hooks/useCartStore';
import { formatter } from '../../../../../utils/formatters';
import { Button } from '../../../../ui/button';

type CartItemProps = {
  count: number;
  id: string;
  title: string,
  image: string,
  price: number
}

export default function CartItem({ 
  count,
  id,
  title,
  image,
  price
 }: CartItemProps) {
  const { removeItem, updateItemCount } = useCart();

  const handleRemove = () => {
    removeItem(id);
  };

  const handleQuantityChange = (change: number) => {
    const newQty = count + change;
    if (newQty < 1) {
      toast.error("Quantity cannot be less than 1");
      return;
    }
    updateItemCount(id, newQty);
  };

  return (
    <div className="flex gap-x-2 py-2 border-b">
      {/*this is the image */}
      <div>
        <div className="rounded-md overflow-hidden aspect-square">
          <img src={image} alt={title} className="object-cover" />
        </div>
      </div>

      {/*this is the details */}
      <div className="flex flex-1 flex-col gap-y-2">
        {/*this is the title */}
        <div className="flex flex-col gap-y-2 text-sm 
          font-medium"
        >
          <h2>{title}</h2>
          <div className='flex gap-3'>
            <div className="flex items-center gap-1 text-kumbh-grayishBlue">
              <span>{formatter.format(price)}</span>
              <X className="size-3" />
              <span>{count}</span>
            </div>
            <span className='font-bold'>{formatter.format(price * count)}</span>
          </div>
        </div>

        {/*this is the quantity */}
        <div
          className="flex items-center rounded-lg w-full
        justify-between bg-kumbh-lightGrayishBlue"
        >
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
            <span className="px-4 text-kumbh-veryDarkBlue font-bold text-sm">
              {count}
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
      </div>

      {/*this is the remove button */}
      <Button
        variant="ghost"
        onClick={handleRemove}
        size={"icon"}
        className="ml-2 "
      >
        <X size={15} />
      </Button>
    </div>
  );
}