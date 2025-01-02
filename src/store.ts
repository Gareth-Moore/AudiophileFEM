import { create } from "zustand";
import { productsData } from "./assets/data";

export type ProductCategory = (typeof productsData)[number]["category"];

export type Breakpoints = "mobile" | "desktop" | "tablet" | null;

export type ProductNames = "xx59" | "xx99-mark-ii" | "xx99-mark-i" | "yx1" | "zx7" | "zx9";

export type ScrollToTop = true | false;

interface Store {
  currentCategory: ProductCategory;
  currentProduct: ProductNames;
  currentBreakpoint: Breakpoints;
  scrollToTop: ScrollToTop;
  setCategory: (newCategory: ProductCategory) => void;
  setProduct: (newProduct: ProductNames) => void;
  setBreakpoint: (newBreakpoint: Breakpoints) => void;
  setScrollToTop: () => void;
}

export const useStore = create<Store>((set) => ({
  currentCategory: "SPEAKERS",
  currentProduct: "xx99-mark-ii",
  currentBreakpoint: null,
  scrollToTop: true,
  setCategory: (newCategory: ProductCategory) => set({ currentCategory: newCategory }),
  setProduct: (newProduct: ProductNames) => set({ currentProduct: newProduct }),
  setBreakpoint: (newBreakpoint: Breakpoints) => set({ currentBreakpoint: newBreakpoint }),
  setScrollToTop: () => set((state) => ({ scrollToTop: !state.scrollToTop })),
}));
