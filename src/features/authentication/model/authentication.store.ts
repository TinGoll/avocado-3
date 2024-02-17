import { createStore, useStore } from "zustand";
import { Authentication } from "../types";
import { localStoragePersistMiddleware } from "@/zustandHelpers/localStoragePersistMiddleware.zustand";
import { withStorageDOMEvents } from "@/zustandHelpers/withStorageDOMEvents.zustand";

const AUTHENTICATION_LOCAL_STORAGE_KEY = "auth-storage";

export const authenticationStore = createStore<Authentication.Store>()(
  localStoragePersistMiddleware(
    (set, get) => ({
      token: null,
      isAuth: false,
      actions: {
        logout: () =>
          set((state) => ({
            ...state,
            token: null,
            isAuth: false,
          })),
        login: () =>
          set((state) => ({
            ...state,
            isAuth: true,
            token: {
              accessToken: "accessToken",
              refreshToken: "refreshToken",
              expiresAt: new Date(),
            },
          })),
      },
    }),
    AUTHENTICATION_LOCAL_STORAGE_KEY
  )
);

withStorageDOMEvents(authenticationStore);

export const useIsAuth = (): boolean =>
  useStore(authenticationStore, (state) => state.isAuth);
export const { login, logout } = authenticationStore.getState().actions;
export type TAuthenticationStore = typeof authenticationStore;
