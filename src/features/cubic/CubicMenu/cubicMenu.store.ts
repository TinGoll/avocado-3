import { createStore, useStore } from "zustand";
import { localStoragePersistMiddleware } from "@/zustandHelpers/localStoragePersistMiddleware.zustand";
import { withStorageDOMEvents } from "@/zustandHelpers/withStorageDOMEvents.zustand";

const CUBIC_MENU_LOCAL_STORAGE_KEY = "cubic-menu-storage";

export enum CubicPage {
  SUPPLIERS = "suppliers",
  PRICE = "price",
}

type Actions = {
  setCubicPage: (page: CubicPage) => void;
  toggleCubicMenuCollapsed: () => void;
};
type Store = {
  page: CubicPage;
  collapsed: boolean;
  actions: Actions;
};

export const cubicMenuStore = createStore<Store>()(
  localStoragePersistMiddleware(
    (set, get) => ({
      page: CubicPage.SUPPLIERS,
      collapsed: false,
      actions: {
        setCubicPage: (page: CubicPage) => set({ page }),
        toggleCubicMenuCollapsed: () => set({ collapsed: !get().collapsed }),
      },
    }),
    CUBIC_MENU_LOCAL_STORAGE_KEY
  )
);

withStorageDOMEvents(cubicMenuStore);
export const useCurrentCubicPage = (): CubicPage =>
  useStore(cubicMenuStore, (state) => state.page);
export const useCubicMenuCollapsed = (): boolean =>
  useStore(cubicMenuStore, (state) => state.collapsed);
export const { setCubicPage, toggleCubicMenuCollapsed } =
  cubicMenuStore.getState().actions;
