import { create } from 'zustand';

type GalleryItem = {
  id: number;
  mainImage: string;
  thumbnailImage: string;
};

interface GalleryModalStore {
  isOpen: boolean;
  gallery: GalleryItem[];
  productName: string;
  selectedIndex: number;
  openModal: (gallery: GalleryItem[], productName: string, selectedIndex?: number) => void;
  closeModal: () => void;
  setSelectedIndex: (index: number) => void;
}

export const useGalleryModalStore = create<GalleryModalStore>((set) => ({
  isOpen: false,
  gallery: [],
  productName: '',
  selectedIndex: 0,
  openModal: (gallery, productName, selectedIndex = 0) => 
    set({ isOpen: true, gallery, productName, selectedIndex }),
  closeModal: () => set({ isOpen: false }),
  setSelectedIndex: (index) => set({ selectedIndex: index }),
}));