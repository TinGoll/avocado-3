import { createStore, useStore } from "zustand";
import { Authentication } from "../types";
import { localStoragePersistMiddleware } from "@/shared/utils/zustandHelpers/localStoragePersistMiddleware.zustand";
import { withStorageDOMEvents } from "@/shared/utils/zustandHelpers/withStorageDOMEvents.zustand";

const AUTHENTICATION_LOCAL_STORAGE_KEY = "auth-storage";

export const authenticationStore = createStore<Authentication.Store>()(
  localStoragePersistMiddleware(
    (set, get) => ({
      token: null,
      user: null,
      isAuth: false,
      actions: {
        logout: () =>
          set((state) => ({
            ...state,
            token: null,
            user: null,
            isAuth: false,
          })),
        login: (userName: string) =>
          set((state) => ({
            ...state,
            isAuth: true,
            user: userName,
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
