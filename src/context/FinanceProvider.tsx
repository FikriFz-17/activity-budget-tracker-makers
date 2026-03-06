import React from "react";
import { FinanceContext } from "./FinanceContext";
import { useFinanceLogic } from "../hooks/useFinanceLogic";

export const FinanceProvider = ({ children }: { children: React.ReactNode }) => {
    const value = useFinanceLogic();

    return (
        <FinanceContext.Provider value={value}>
            {children}
        </FinanceContext.Provider>
    )
}