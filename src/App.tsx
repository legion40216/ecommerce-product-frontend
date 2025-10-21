// App.tsx
import { useEffect, useState } from "react";
import Navbar from "./components/modules/navbar";
import { productData } from "./data/product-data";
import useCart from "./hooks/useCartStore";
import ProductGallery from "./components/modules/product-gallery/product-gallery";
import ProductDetails from "./components/modules/product-details/product-details";

function App() {
  const [pendingQuantity, setPendingQuantity] = useState(1);
  const { addItem, removeItem, updateItemCount, getItemCount } = useCart();

  const quantityInCart = getItemCount(productData.id.toString());
  const inCart = quantityInCart > 0;

  // Reset pending quantity when item is removed from cart
  useEffect(() => {
    if (!inCart) {
      setPendingQuantity(1);
    }
  }, [inCart]);

  // Display quantity: cart quantity if in cart, otherwise pending quantity
  const displayQuantity = inCart ? quantityInCart : pendingQuantity;

  // Quantity change handler
  const handleQuantityChange = (change: number) => {
    if (inCart) {
      updateItemCount(productData.id.toString(), quantityInCart + change);
    } else {
      setPendingQuantity(pendingQuantity + change);
    }
  };

  // Add or remove from cart
  const handleCartAction = () => {
    const id = productData.id.toString();

    if (inCart) {
      removeItem(id);
      setPendingQuantity(1);
    } else {
      addItem(
        {
          id,
          title: productData.name,
          image: productData.gallery[0].mainImage,
          price: productData.price,
        },
        pendingQuantity
      );
    }
  };

  return (
    <div className="grid grid-rows-[min-content_1fr] h-screen md:space-y-9 container m-auto">
      <header className="px-4 border-b border-kumbh-DarkGrayishBlue">
        <Navbar />
      </header>

      <main className="md:px-4 md:py-8 container m-auto">
        <div className="h-full grid place-content-center">
          <div className="grid md:grid-cols-2 md:gap-12">
            <ProductGallery 
              gallery={productData.gallery} 
              productName={productData.name} 
            />
            
            <ProductDetails
              name={productData.name}
              description={productData.description}
              price={productData.price}
              discount={productData.discount}
              quantity={displayQuantity}
              inCart={inCart}
              onQuantityChange={handleQuantityChange}
              onCartAction={handleCartAction}
            />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;