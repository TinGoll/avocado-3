/// <reference types="vite/client" />
/// <reference types="@emotion/react/types/css-prop" />

interface Window {
  // expose in the `electron/preload/index.ts`
  ipcRenderer: import('electron').IpcRenderer
}
