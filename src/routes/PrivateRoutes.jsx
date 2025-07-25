
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const user = JSON.parse(localStorage.getItem("user")); // or from context

  return user ? children : <Navigate to="/onboarding" />;
};

export default PrivateRoute;
