import { useSelector } from "react-redux";

const RoleGuard = ({ allowedRoles, children }) => {
  const user = useSelector((state) => state.auth.user);

  if (!user || !allowedRoles.includes(user.role)) {
    return null;
  }

  return <>{children}</>;
};

export default RoleGuard;