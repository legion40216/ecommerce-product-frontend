// components/GalleryModal.tsx
import { ChevronLeftIcon, ChevronRightIcon, X } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "../ui/button";
import { useGalleryModalStore } from "@/hooks/useGalleryModalStore";


export default function GalleryModal() {
  const { isOpen, gallery, productName, selectedIndex, closeModal, setSelectedIndex } = 
    useGalleryModalStore();

  if (!gallery.length) return null;

  const selectedImage = gallery[selectedIndex].mainImage;

  const goToPrevious = () => {
    setSelectedIndex(selectedIndex === 0 ? gallery.length - 1 : selectedIndex - 1);
  };

  const goToNext = () => {
    setSelectedIndex(selectedIndex === gallery.length - 1 ? 0 : selectedIndex + 1);
  };

  return (
    <Dialog open={isOpen} onOpenChange={closeModal}>
      <DialogContent className="p-0 [&>button]:hidden bg-transparent border-none shadow-none grid place-content-center">
        <div className="max-w-[400px]">
          <div className="space-y-2">
            <div className="flex justify-end">
              <Button
                onClick={closeModal}
                aria-label="Close gallery"
                className="text-foreground"
                size="icon"
                variant="secondary"
              >
                <X className="size-5" />
              </Button>
            </div>

            <div className="space-y-4">
              <div className="relative aspect-square rounded-2xl overflow-hidden">
                <img
                  src={selectedImage}
                  alt={productName}
                  className="object-cover"
                />

                <Button
                  onClick={goToPrevious}
                  className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full"
                  aria-label="Previous image"
                  size="icon"
                  variant="secondary"
                >
                  <ChevronLeftIcon className="size-5" />
                </Button>

                <Button
                  onClick={goToNext}
                  className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full"
                  aria-label="Next image"
                  size="icon"
                  variant="secondary"
                >
                  <ChevronRightIcon className="size-5" />
                </Button>
              </div>

              <div className="flex gap-4 mx-auto">
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
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}