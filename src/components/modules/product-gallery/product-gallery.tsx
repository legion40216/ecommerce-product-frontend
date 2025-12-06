// components/ProductGallery.tsx
import { useState } from "react";

import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { useGalleryModalStore } from "@/hooks/useGalleryModalStore";

import { Button } from "@/components/ui/button";

type GalleryItem = {
  id: number;
  mainImage: string;
  thumbnailImage: string;
};

type ProductGalleryProps = {
  gallery: GalleryItem[];
  productName: string;
};

export default function ProductGallery({ 
  gallery,
  productName 
  }: ProductGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const openModal = useGalleryModalStore((state: { openModal: any; }) => state.openModal);

  const selectedImage = gallery[selectedIndex].mainImage;

  const goToPrevious = () => {
    setSelectedIndex((prev) => (prev === 0 ? gallery.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setSelectedIndex((prev) => (prev === gallery.length - 1 ? 0 : prev + 1));
  };

  return (
    <div>
      {/* Main Image with Navigation */}
      <div className="relative aspect-square md:rounded-2xl overflow-hidden mb-8">
        <img
          src={selectedImage}
          alt={productName}
          className="object-cover cursor-pointer"
          onClick={() => openModal(gallery, productName, selectedIndex)}
        />

        {/* Mobile Navigation Arrows */}
        <Button
          onClick={goToPrevious}
          className="absolute left-4 top-1/2 -translate-y-1/2 md:hidden"
          aria-label="Previous image"
          size="icon"
          variant="secondary"
        >
          <ChevronLeftIcon className="size-5" />
        </Button>

        <Button
          onClick={goToNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 md:hidden"
          aria-label="Next image"
          size="icon"
          variant="secondary"
        >
          <ChevronRightIcon className="size-5" />
        </Button>
      </div>

      {/* Thumbnail Gallery */}
      <div className="flex gap-4 justify-center">
        {gallery.map((item, index) => (
          <div
            key={item.id}
            className={`border-kumbh-DarkGrayishBlue rounded-lg overflow-hidden 
                aspect-square hover:ring-3 hover:ring-kumbh-orange ring-offset-2 
                cursor-pointer hover:opacity-80 transition 
                ${
                  index === selectedIndex
                    ? "ring-3 ring-kumbh-orange opacity-80"
                    : ""
                }`}
            onClick={() => setSelectedIndex(index)}
          >
            <img
              src={item.thumbnailImage}
              alt={`Thumbnail ${item.id}`}
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}