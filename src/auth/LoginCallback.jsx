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

      // Assign role based on email
      let role = claims.role || "viewer"; // default fallback

      // Custom mapping for specific emails
      if (claims.email === "vishal.torgal@jrdsi.com") {
        role = "admin";
      } else if (claims.email === "vishaltorgal@gmail.com") {
        role = "viewer";
      }

      dispatch(
        login({
          name: claims.name,
          role,
        })
      );
    }
  }, [authState]);

  return <div>Logging in...</div>;
};

export default LoginCallbackHandler;