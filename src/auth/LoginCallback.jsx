import { useOktaAuth } from "@okta/okta-react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { login } from "../store/authSlice";

const LoginCallbackHandler = () => {
  const { authState } = useOktaAuth();
  const dispatch = useDispatch();

  useEffect(() => {
    if (authState?.isAuthenticated) {
      const claims = authState.idToken?.claims;

      dispatch(
        login({
          name: claims.name,
          role: claims.role || "viewer", // fallback
        })
      );
    }
  }, [authState]);

  return <div>Logging in...</div>;
};

export default LoginCallbackHandler;