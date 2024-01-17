import { useContext } from "react";
import { AuthContext } from "../context/AuthContext/Context";
import { Navigate } from "react-router-dom";

const ProtectedRoutes = ({ children }) => {
  const { user } = useContext(AuthContext);

  // user
  if (user && user.userDetails.isAdmin) {
    return children;
  }
  return <Navigate to="/imedia-admin/login" replace={true} />;
};

export default ProtectedRoutes;
