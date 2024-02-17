export declare module Authentication {
  interface Store {
    token: Credentials | null;
    isAuth: boolean;
    actions: Actions;
  }

  interface Credentials {
    accessToken: string;
    refreshToken: string;
    expiresAt: Date;
  }

  interface Actions {
    login: () => void;
    logout: () => void;
  }
}
