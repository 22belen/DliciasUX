import { create } from "zustand";

const useStore = create((set) => ({
  token: localStorage.getItem("token") || null,
  setToken: (token) => {
    localStorage.setItem("token", token);
    set({ token });
  },
}));

export default useStore;
