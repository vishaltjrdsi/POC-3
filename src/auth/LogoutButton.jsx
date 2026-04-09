import { useOktaAuth } from "@okta/okta-react";

const LogoutButton = () => {
  const { oktaAuth } = useOktaAuth();

  const handleLogout = async () => {
    await oktaAuth.signOut(); // logs out from Okta
  };

  return <button onClick={handleLogout}>Logout</button>;
};

export default LogoutButton;