import { ipcRenderer, contextBridge } from "electron";

// --------- Expose some API to the Renderer process ---------
contextBridge.exposeInMainWorld("ipcRenderer", withPrototype(ipcRenderer));

// `exposeInMainWorld` can't detect attributes and methods of `prototype`, manually patching it.
function withPrototype(obj: Record<string, any>) {
  const protos = Object.getPrototypeOf(obj);

  for (const [key, value] of Object.entries(protos)) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) continue;

    if (typeof value === "function") {
      // Some native APIs, like `NodeJS.EventEmitter['on']`, don't work in the Renderer process. Wrapping them into a function.
      obj[key] = function (...args: any) {
        return value.call(obj, ...args);
      };
    } else {
      obj[key] = value;
    }
  }
  return obj;
}

// --------- Preload scripts loading ---------
function domReady(
  condition: DocumentReadyState[] = ["complete", "interactive"]
) {
  return new Promise((resolve) => {
    if (condition.includes(document.readyState)) {
      resolve(true);
    } else {
      document.addEventListener("readystatechange", () => {
        if (condition.includes(document.readyState)) {
          resolve(true);
        }
      });
    }
  });
}

const safeDOM = {
  append(parent: HTMLElement, child: HTMLElement) {
    if (!Array.from(parent.children).find((e) => e === child)) {
      return parent.appendChild(child);
    }
  },
  remove(parent: HTMLElement, child: HTMLElement) {
    if (Array.from(parent.children).find((e) => e === child)) {
      return parent.removeChild(child);
    }
  },
};

function useLoading() {
  const className = `loaders-css__square-spin`;
  const styleContent = `
    @keyframes spin {
      0% { transform: rotate(0deg); animation-timing-function: cubic-bezier(0.15, 0.5, 0.5, 1); }
      100% { transform: rotate(1080deg); animation-timing-function: cubic-bezier(0.75, 0.05, 0.3, 1); }
    }
    .${className} > svg {
      animation: spin 5s linear infinite;
    }
    .app-loading-wrap {
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      background: #282c34;
      z-index: 9;
    }
  `;

  const oStyle = document.createElement("style");
  const oDiv = document.createElement("div");

  oStyle.id = "app-loading-style";
  oStyle.innerHTML = styleContent;
  oDiv.className = "app-loading-wrap";
  oDiv.innerHTML = `
    <div class="${className}">
      <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 216 216">
      <path fill="#80bd01"
          d="M104.6 180.7c-2 0-3.9-.5-5.7-1.5l-18.1-10.7c-2.7-1.5-1.4-2-.5-2.4 3.6-1.2 4.3-1.5 8.2-3.7.4-.2.9-.1 1.3.1l13.9 8.2c.5.3 1.2.3 1.7 0l54.1-31.2c.5-.3.8-.9.8-1.5V75.7c0-.6-.3-1.2-.8-1.5l-54-31.2c-.5-.3-1.2-.3-1.7 0l-54 31.2c-.5.3-.9.9-.9 1.5v62.4c0 .6.3 1.2.9 1.4l14.8 8.6c8 4 13-.7 13-5.5V81c0-.9.7-1.6 1.6-1.6h6.9c.9 0 1.6.7 1.6 1.6v61.6c0 10.7-5.8 16.9-16 16.9-3.1 0-5.6 0-12.5-3.4L44.8 148c-3.5-2-5.7-5.8-5.7-9.9V75.7c0-4.1 2.2-7.8 5.7-9.9l54.1-31.2c3.4-1.9 8-1.9 11.4 0l54.1 31.2c3.5 2 5.7 5.8 5.7 9.9v62.4c0 4.1-2.2 7.8-5.7 9.9l-54.1 31.2c-1.8 1-3.7 1.5-5.7 1.5zm43.6-61.5c0-11.7-7.9-14.8-24.5-17-16.8-2.2-18.5-3.4-18.5-7.3 0-3.2 1.4-7.6 13.9-7.6 11.1 0 15.2 2.4 16.9 9.9.1.7.8 1.2 1.5 1.2h7c.4 0 .8-.2 1.1-.5.3-.3.5-.8.4-1.2-1.1-12.9-9.7-18.9-27-18.9-15.4 0-24.6 6.5-24.6 17.4 0 11.8 9.1 15.1 23.9 16.6 17.7 1.7 19.1 4.3 19.1 7.8 0 6-4.8 8.6-16.2 8.6-14.3 0-17.5-3.6-18.5-10.7-.1-.8-.8-1.3-1.6-1.3h-7c-.9 0-1.6.7-1.6 1.6 0 9.1 5 20 28.6 20 17.3-.1 27.1-6.8 27.1-18.6zM172 55.9V57h3v8h1.2v-8h3.1v-1.1H172zm8.4 9.1h1.2v-7.6l2.6 7.6h1.2l2.6-7.6V65h1.2v-9h-1.7l-2.6 7.6-2.6-7.6h-1.8v9z" />
      </svg>
    </div>
  `;

  return {
    appendLoading() {
      safeDOM.append(document.head, oStyle);
      safeDOM.append(document.body, oDiv);
    },
    removeLoading() {
      safeDOM.remove(document.head, oStyle);
      safeDOM.remove(document.body, oDiv);
    },
  };
}

// ----------------------------------------------------------------------

const { appendLoading, removeLoading } = useLoading();
domReady().then(appendLoading);

window.onmessage = (ev) => {
  ev.data.payload === "removeLoading" && removeLoading();
};

setTimeout(removeLoading, 4999);
