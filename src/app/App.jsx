import { useEffect, useContext, useRef } from "react";
import { useOktaAuth } from "@okta/okta-react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../store/authSlice";
import { AlertContext } from "../context/AlertContext";
import { Security } from "@okta/okta-react";
import { oktaConfig } from "../auth/oktaConfig";
import GlobalAlert from "../components/GlobalAlert";
import Header from "../components/Header/Header";
import { AppRoutes } from "./routes";

const App = () => {
  const { authState } = useOktaAuth();
  const { showAlert } = useContext(AlertContext);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loginAlertShown = useRef(false); // ✅ track if alert was already shown

  const restoreOriginalUri = async (_oktaAuth, originalUri) => {
    navigate(originalUri || "/");
  };

  useEffect(() => {
    if (authState?.isAuthenticated && !loginAlertShown.current) {
      // Trigger login alert only once
      showAlert("success", "Login successful!");
      loginAlertShown.current = true;

      const claims = authState.idToken?.claims;
      const email = claims.email;

      const role = email === "vishal.torgal@jrdsi.com" ? "admin" : "viewer";

      dispatch(
        login({
          name: claims.name,
          role: role,
        })
      );
    }
  }, [authState, dispatch, showAlert]);

  return (
    <Security oktaAuth={oktaConfig} restoreOriginalUri={restoreOriginalUri}>
      <GlobalAlert />
      <Header />
      <AppRoutes />
    </Security>
  );
};

export default App;