import { create } from "zustand";
import { productsData } from "./assets/data";

type ProductCategory = (typeof productsData)[number]["category"];

type Breakpoints = "mobile" | "desktop" | "tablet" | null;

interface Store {
  currentCategory: ProductCategory | "";
  currentProduct: string;
  currentBreakpoint: Breakpoints;
  setCategory: (newCategory: ProductCategory) => void;
  setProduct: (newProduct: string) => void;
  setBreakpoint: (newBreakpoint: Breakpoints) => void;
}

export const useStore = create<Store>((set) => ({
  currentCategory: "",
  currentProduct: "",
  currentBreakpoint: null,
  setCategory: (newCategory: ProductCategory) => set({ currentCategory: newCategory }),
  setProduct: (newProduct: string) => set({ currentProduct: newProduct }),
  setBreakpoint: (newBreakpoint: Breakpoints) => set({ currentBreakpoint: newBreakpoint }),
}));
