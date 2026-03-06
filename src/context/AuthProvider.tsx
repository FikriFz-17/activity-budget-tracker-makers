import React from "react";
import { AuthContext } from "./AuthContext";
import { useAuthLogic } from "../hooks/useAuthLogic";

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const authValues = useAuthLogic();

  return (
    <AuthContext.Provider value={authValues}>{children}</AuthContext.Provider>
  );
};
