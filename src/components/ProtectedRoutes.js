import { useContext } from "react";
import { Context } from "../context/Context";
import { Navigate } from "react-router-dom";

const ProtectedRoutes = ({ children }) => {
  const { user } = useContext(Context);


  // user
  if ( user && user.userDetails.isAdmin) {
    return children;
  }
  return <Navigate to="/imedia-admin/login" replace={true} />;
};

export default ProtectedRoutes;
