import { create } from "zustand";

const useCartStore = create((set) => ({
  carrito: [],
  agregarAlCarrito: (producto) => {
    set((state) => ({ carrito: [...state.carrito, producto] }));
  },
}));

export default useCartStore;
