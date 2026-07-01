import { create } from "zustand";

const useCartStore = create((set) => ({
  carrito: [],
  agregarAlCarrito: (producto) => {
    set((state) => ({ carrito: [...state.carrito, producto] }));
  },
  eliminarDelCarrito: (index) => {
    set((state) => ({
      carrito: state.carrito.filter((_, i) => i !== index),
    }));
  },
  vaciarCarrito: () => set({ carrito: [] }),
  toggleCarrito: () =>
    set((state) => ({ mostrarCarrito: !state.mostrarCarrito })),
}));

export default useCartStore;
