import { Navigate, Outlet } from "react-router-dom";
import useAuthStore from "../context/useAuthStore";

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuthStore();

  if (!isAuthenticated) {
    // Redirect to login page if not authenticated
    return <Navigate to="/login" />;
  }

  // Render children if authenticated
  return children ? children : <Outlet />;
};

export default ProtectedRoute;
