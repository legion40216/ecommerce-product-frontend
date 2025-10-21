// Keep all your imports exactly as they are
import image1 from "../assets/images/image-product-1.jpg";
import image2 from "../assets/images/image-product-2.jpg";
import image3 from "../assets/images/image-product-3.jpg";
import image4 from "../assets/images/image-product-4.jpg";

import thumb1 from "../assets/images/image-product-1-thumbnail.jpg";
import thumb2 from "../assets/images/image-product-2-thumbnail.jpg";
import thumb3 from "../assets/images/image-product-3-thumbnail.jpg";
import thumb4 from "../assets/images/image-product-4-thumbnail.jpg";

export const productData = {
  id: 1,
  name: "Fall Limited Edition Sneakers",
  description:
    "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.",
  price: 125,
  discount: 50,
  new: true,
  
  // 💥 The combined array is the key change 💥
  gallery: [
    {
      id: 1, // This ID now represents the pair.
      mainImage: image1,
      thumbnailImage: thumb1,
    },
    {
      id: 2,
      mainImage: image2,
      thumbnailImage: thumb2,
    },
    {
      id: 3,
      mainImage: image3,
      thumbnailImage: thumb3,
    },
    {
      id: 4,
      mainImage: image4,
      thumbnailImage: thumb4,
    },
  ],
};