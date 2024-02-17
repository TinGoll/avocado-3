export declare module Authentication {
  interface Store {
    token: Credentials | null;
    isAuth: boolean;
    user: User;
    actions: Actions;
  }

  interface Credentials {
    accessToken: string;
    refreshToken: string;
    expiresAt: Date;
  }

  interface Actions {
    login: (userName: string) => void;
    logout: () => void;
  }

  type User = string | null;
}
