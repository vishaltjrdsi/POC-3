import { useOktaAuth } from "@okta/okta-react";

const LoginButton = () => {
  const { oktaAuth } = useOktaAuth();

  return <button onClick={() => oktaAuth.signInWithRedirect()}>Login</button>;
};

export default LoginButton;