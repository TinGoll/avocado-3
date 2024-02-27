import { createStore, useStore } from "zustand";
import { localStoragePersistMiddleware } from "@/zustandHelpers/localStoragePersistMiddleware.zustand";
import { withStorageDOMEvents } from "@/zustandHelpers/withStorageDOMEvents.zustand";
import { AppTheme } from "./types.store";

const THEME_MODE_LOCAL_STORAGE_KEY = "theme-mode";

const themeStore = createStore<AppTheme.Store>()(
  localStoragePersistMiddleware(
    (set) => ({
      mode: "light",
      actions: {
        setMode: (mode) => set({ mode }),
        toggleMode: () =>
          set((state) => ({ mode: state.mode === "light" ? "dark" : "light" })),
      },
    }),
    THEME_MODE_LOCAL_STORAGE_KEY
  )
);

withStorageDOMEvents(themeStore);

export const useMode = () => useStore(themeStore, (state) => state.mode);
export const { setMode, toggleMode } = themeStore.getState().actions;
