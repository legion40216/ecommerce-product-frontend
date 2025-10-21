// components/ProductGallery.tsx
import { useState } from "react";
import GalleryModal from "../gallery-modal";


type GalleryItem = {
  id: number;
  mainImage: string;
  thumbnailImage: string;
};

type ProductGalleryProps = {
  gallery: GalleryItem[];
  productName: string;
};

export default function ProductGallery({ gallery, productName }: ProductGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const selectedImage = gallery[selectedIndex].mainImage;

  const goToPrevious = () => {
    setSelectedIndex((prev) => (prev === 0 ? gallery.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setSelectedIndex((prev) => (prev === gallery.length - 1 ? 0 : prev + 1));
  };

  return (
    <>
      <div className="grid gap-y-4">
        {/* Main Image with Navigation */}
        <div className="relative aspect-square">
          <img
            src={selectedImage}
            alt={productName}
            className="md:rounded-2xl w-full h-full object-cover md:cursor-pointer"
            onClick={() => setIsModalOpen(true)}
          />
          
          {/* Mobile Navigation Arrows */}
          <button
            onClick={goToPrevious}
            className="md:hidden absolute left-4 top-1/2 -translate-y-1/2 
              bg-white rounded-full p-3 shadow-lg hover:bg-gray-50 
              transition-colors z-10"
            aria-label="Previous image"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="16" 
              height="16" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="3" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>

          <button
            onClick={goToNext}
            className="md:hidden absolute right-4 top-1/2 -translate-y-1/2 
              bg-white rounded-full p-3 shadow-lg hover:bg-gray-50 
              transition-colors z-10"
            aria-label="Next image"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="16" 
              height="16" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="3" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>
        </div>
        
        {/* Thumbnail Gallery */}
        <div className="gap-4 hidden md:grid grid-cols-4">
          {gallery.map((item, index) => (
            <div
              key={item.id}
              className={`border-kumbh-DarkGrayishBlue rounded-lg overflow-hidden 
                aspect-square hover:ring-3 hover:ring-kumbh-orange ring-offset-2 
                cursor-pointer hover:opacity-80 transition 
                ${index === selectedIndex ? "ring-3 ring-kumbh-orange opacity-80" : ""}`}
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

      {/* Modal */}
      <GalleryModal
        isOpen={isModalOpen}
        setOpen={setIsModalOpen}
        title={`${productName} Gallery`}
        description="Full size product images"
        body={
          <div className="space-y-2">
            <div className="flex justify-end">
                {/* Close button */}
              <button
                onClick={() => setIsModalOpen(false)}
                className=" text-white hover:text-kumbh-orange 
                  transition-colors"
                aria-label="Close gallery"
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="24" 
                  height="24" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>

            {/* Gallery content */}
            <div className="space-y-4">
              {/* Main Image with Navigation */}
              <div className="relative aspect-square rounded-2xl overflow-hidden">
                <img
                  src={selectedImage}
                  alt={productName}
                  className="object-cover"
                />
                
                {/* Navigation Arrows */}
                <button
                  onClick={goToPrevious}
                  className="absolute left-4 top-1/2 -translate-y-1/2 
                    bg-white rounded-full p-3 shadow-lg hover:bg-gray-50 
                    transition-colors"
                  aria-label="Previous image"
                >
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="16" 
                    height="16" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="3" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  >
                    <polyline points="15 18 9 12 15 6"></polyline>
                  </svg>
                </button>

                <button
                  onClick={goToNext}
                  className="absolute right-4 top-1/2 -translate-y-1/2 
                    bg-white rounded-full p-3 shadow-lg hover:bg-gray-50 
                    transition-colors"
                  aria-label="Next image"
                >
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="16" 
                    height="16" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="3" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  >
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                </button>
              </div>
              
              {/* Thumbnail Gallery */}
              <div className="flex gap-4 mx-auto ">
                {gallery.map((item, index) => (
                  <div
                    key={item.id}
                    className={`border-kumbh-DarkGrayishBlue rounded-lg overflow-hidden 
                      aspect-square hover:ring-3 hover:ring-kumbh-orange ring-offset-2 
                      cursor-pointer transition opacity-80
                      ${index === selectedIndex ? "ring-3 ring-kumbh-orange opacity-80" : ""}`}
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
          </div>
        }
      />
    </>
  );
}