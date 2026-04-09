import { useOktaAuth } from "@okta/okta-react";
import LogoutButton from "../../auth/LogoutButton";
import "./Header.css";

const Header = () => {
  const { authState, oktaAuth } = useOktaAuth();

  if (!authState || !authState.isAuthenticated) return null;

  // Example: get role from ID token claims
  const userClaims = authState.idToken?.claims;
  console.log("User Claims in Header:", userClaims); // Debugging line
  const role = userClaims?.role || "Viewer"; // default to Viewer
  const name = userClaims?.name || "User";

  return (
    <header className="app-header">
       <div className="auth-actions">
        <span className="user-name">Hello, {name}</span>
        <span className="user-role">({role})</span>
      
      </div>
      
      <div className="auth-actions">
          <LogoutButton className="logout-button" />
      </div>

     
    </header>
  );
};

export default Header;