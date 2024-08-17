declare module AppTheme {
  interface Store {
    mode: Avocado.Mode;
    actions: Actions;
  }

  interface Actions {
    setMode: (mode: Avocado.Mode) => void;
    toggleMode: () => void;
  }
}
