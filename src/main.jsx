import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app/App.jsx";
import { AlertProvider } from "./context/AlertContext";
import GlobalAlert from "./components/GlobalAlert";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/store"; 
import { Security } from "@okta/okta-react";
import { oktaConfig } from "./auth/oktaConfig";


const restoreOriginalUri = async (_oktaAuth, originalUri) => {
  window.location.replace(originalUri || "/");
};


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <AlertProvider>
          <Security
            oktaAuth={oktaConfig}
            restoreOriginalUri={restoreOriginalUri}
          >
            <GlobalAlert />
            <App />
          </Security>
        </AlertProvider>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);