import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within a AuthProvider");
    }
    
    const {isAuth, setIsAuth} = context;
    
    const login = (email: string, password: string) => {
        if (email === "fikri@gmail.com" && password === "123456") {
            localStorage.setItem("isLogin", "true");
            setIsAuth(true);
            return true;
        }
        return false;
    }

    const logout = () => {
        localStorage.removeItem("isLogin");
        setIsAuth(false);
    }

    return { isAuth, login, logout };
}
