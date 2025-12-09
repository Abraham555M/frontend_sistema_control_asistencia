import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("token");

  // Si NO hay token → mandar al login
  if (!token) {
    return <Navigate to="/" replace />;
  }

  // Si hay token, renderiza la ruta
  return children;
};

export default ProtectedRoute;
