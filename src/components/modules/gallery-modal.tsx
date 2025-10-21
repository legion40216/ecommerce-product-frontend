// components/GalleryModal.tsx
import React from 'react'
import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog"

type ModalProps = {
  body: React.ReactNode;
  isOpen: boolean;
  setOpen: (open: boolean) => void;
  title?: string;
  description?: string;
};

export default function GalleryModal({
  body,
  title,
  description,
  isOpen,
  setOpen,
}: ModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={setOpen}>
      <DialogContent
  className="p-0 [&>button]:hidden bg-transparent border-none shadow-none grid place-content-center"
>
        {/* Hidden title and description for accessibility */}
        <span className="sr-only">{title}</span>
        <span className="sr-only">{description}</span>
        
        <div className='max-w-[400px]'>
          {body}
        </div>
      </DialogContent>
    </Dialog>
  );
}