import useCart from "@/hooks/useCartStore"
import { formatter } from "@/utils/formatters"
import { ShoppingBag, ShoppingCart } from "lucide-react"


import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu"
import CartItem from "./cart/cart-item"

export default function Cart() {
  const { items, getTotalCount, getTotalPrice } = useCart()
  const totalCount = getTotalCount()

  return (
    <DropdownMenu 
    modal={false} 
    >
      <DropdownMenuTrigger  asChild>
        <Button size={"icon"} variant={"ghost"} className="relative">
          <Badge className="size-4 aspect-square absolute -top-1 -right-1 
          bg-kumbh-orange text-kumbh-white rounded-sm"
          >
            {totalCount}
          </Badge>

          <ShoppingCart className="size-5" />
        </Button>
      </DropdownMenuTrigger>
      
      <DropdownMenuContent className="w-80" align="center">
        <div className="p-4 border-b">
          <h2 className="text-lg font-semibold">Shopping Cart</h2>
        </div>

        <div className="max-h-[300px] overflow-y-auto">
          {items.length > 0 ? (
            items.map((item) => (
              <CartItem
              key={item.id} 
              count={item.count}
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              />
            ))
          ) : (
            <div className="p-4 text-center">
            <ShoppingBag className="h-16 w-16 text-gray-400 mx-auto" />
            <h2 className="mt-4 text-lg font-semibold">
                Your cart is empty
            </h2>
            <p className="mt-2 text-sm text-gray-500">
                Add some items to your cart to get started.
            </p>
          </div>
          )}
        </div>

        {items.length > 0 && (
          <div className="p-4 border-t">
            <div className="flex justify-between items-center text-base 
            font-medium mb-4"
            >
              <p>Subtotal</p>
              <p>{formatter.format(getTotalPrice())}</p>
            </div>
            <Button className="bg-kumbh-orange hover:bg-kumbh-orange/90 text-white w-full">
              Checkout
            </Button>
          </div>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}