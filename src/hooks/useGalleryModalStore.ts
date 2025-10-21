import { create } from 'zustand';
interface BaseModalStore{
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}

export const useGalleryModalStore = create<BaseModalStore>((set) => ({
  isOpen: false,
  type: null,
  openModal: () => set({ isOpen: true, }),
  closeModal: () => set({ isOpen: false, }),
}));