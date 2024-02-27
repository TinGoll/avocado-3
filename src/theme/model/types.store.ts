export declare module AppTheme {
  interface Store {
    mode: Mode;
    actions: Actions;
  }

  interface Actions {
    setMode: (mode: Mode) => void;
    toggleMode: () => void;
  }

  type Mode = "light" | "dark";
}
