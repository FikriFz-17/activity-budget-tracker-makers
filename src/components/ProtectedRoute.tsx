import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth"; 

interface Props {
  children: React.ReactNode;
}

const ProtectedRoute = ({ children }: Props) => {
  const { isAuth } = useAuth(); 

  if (!isAuth) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
