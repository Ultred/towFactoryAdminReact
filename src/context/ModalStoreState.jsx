import { create } from "zustand";

const ModalStoreState = create((set) => ({
  isOpen: false,
  modalComponent: null,
  openModal: (component) => set({ isOpen: true, modalComponent: component }),
  closeModal: () => set({ isOpen: false, modalComponent: null }),
}));

export { ModalStoreState };
