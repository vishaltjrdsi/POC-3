import { Security } from "@okta/okta-react";
import { oktaConfig } from "../auth/oktaConfig";
import { useOktaAuth } from "@okta/okta-react";
import { useDispatch } from "react-redux";
import { AppRoutes } from "./routes";
import GlobalAlert from "../components/GlobalAlert";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import { useEffect } from "react";
import { login } from "../store/authSlice";

const App = () => {
  const { authState } = useOktaAuth();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const restoreOriginalUri = async (_oktaAuth, originalUri) => {
    navigate(originalUri || "/");
  };


  useEffect(() => {
    if (authState?.isAuthenticated) {
      const claims = authState.idToken?.claims;
      const email = claims.email;

      // ✅ TEMP ROLE LOGIC
      const role =
        email === "vishal.torgal@jrdsi.com"
          ? "admin"
          : "viewer";
      // 🔍 ADD THIS LINE
    //  console.log("CLAIMS:", claims);

      dispatch(
        login({
          name: claims.name,
          role: role,
        })
      );
    }
  }, [authState]);


  return (
    <Security
      oktaAuth={oktaConfig}
      restoreOriginalUri={restoreOriginalUri}
    >
      <GlobalAlert />
      <Header />
      <AppRoutes />
    </Security>
  );
};

export default App;