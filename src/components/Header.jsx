import { useOktaAuth } from "@okta/okta-react";
import LogoutButton from "../auth/LogoutButton";

const Header = () => {
  const { authState, oktaAuth } = useOktaAuth();

  if (!authState) return null;

  return (
    <div style={{ padding: "10px", borderBottom: "1px solid #ccc" }}>
      <span>My App</span>

      {authState.isAuthenticated ? (
        <LogoutButton />
      ) : (
        <button onClick={() => oktaAuth.signInWithRedirect()}>
          Login
        </button>
      )}
    </div>
  );
};

export default Header;