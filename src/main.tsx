import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import "./firebase/firebaseConfig";

async function enableMocking() {
  if (import.meta.env.VITE_APP_MODE !== "development") {
    return;
  }

  const { worker } = await import("./mocksConfig/browser");

  return worker.start({
    // onUnhandledRequest: "bypass",
  });
}

enableMocking().then(() => {
  ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
});
