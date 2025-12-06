// App.tsx
import { useEffect, useState } from "react";

import { productData } from "./data/product-data";
import useCart from "./hooks/useCartStore";

import ProductGallery from "./components/modules/product-gallery/product-gallery";
import ProductDetails from "./components/modules/product-details/product-details";
import Navbar from "./components/modules/navbar";

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
    <div className="container m-auto">
      <div className="grid-rows-[min-content_1fr]">
        <header className="border-b border-kumbh-grayishBlue">
          <Navbar />
        </header>

        <main className="py-8 md:py-16">
          <div className="grid md:grid-cols-2 justify-between gap-6 md:gap-20 lg:gap-32">
            <div  className="sm:max-w-sm md:max-w-lg lg:max-w-xl mx-auto">
              <ProductGallery 
                gallery={productData.gallery} 
                productName={productData.name} 
              />
            </div>

            <div className="sm:max-w-sm md:max-w-lg lg:max-w-xl mx-auto content-center">
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
    </div>
  );
}

export default App;