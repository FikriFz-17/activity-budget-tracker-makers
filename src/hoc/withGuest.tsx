import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export function withGuest<P extends object>(Component: React.ComponentType<P>) {
  const WithGuestWrapper = (props: P) => {
    const { isAuth } = useAuth();

    if (isAuth) {
      return <Navigate to="/" replace />;
    }
    return <Component {...props} />;
  };

  return WithGuestWrapper;
}
