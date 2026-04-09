import { useOktaAuth } from "@okta/okta-react";
import { useEffect } from "react";

const ProtectedRoute = ({ children }) => {
  const { authState, oktaAuth } = useOktaAuth();

  useEffect(() => {
    if (!authState) return;

    if (!authState.isAuthenticated) {
      oktaAuth.signInWithRedirect(); 
    }
  }, [authState]);

  if (!authState || !authState.isAuthenticated) {
    return <div>Loading...</div>;
  }

  return children;
};

export default ProtectedRoute;