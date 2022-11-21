import { Navigate } from "react-router-dom";

const PublicRoutes = ({ isLogged, children }) => {
  return isLogged ? <Navigate to="/home" /> : children;
};

export default PublicRoutes;