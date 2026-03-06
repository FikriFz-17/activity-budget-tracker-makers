import { useState, useCallback } from "react";
import { type AuthContextProps } from "../context/AuthContext";

export const useAuthLogic = (): AuthContextProps => {
  const [isAuth, setIsAuth] = useState<boolean>(
    localStorage.getItem("isLogin") === "true",
  );

  const login = useCallback((email: string, password: string) => {
    if (email === "fikri@gmail.com" && password === "123456") {
      localStorage.setItem("isLogin", "true");
      setIsAuth(true);
      return true;
    }
    return false;
  }, []);

  const logout = useCallback(() => {
    localStorage.removeItem("isLogin");
    setIsAuth(false);
  }, []);

  return { isAuth, login, logout };
};
