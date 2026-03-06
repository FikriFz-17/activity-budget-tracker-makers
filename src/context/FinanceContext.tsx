import { createContext, useContext } from "react";

export interface ActivityItem{
    id: number;
    title: string;
    pengeluaran: number;
}
export interface FinanceContextProps{
    saldo: number;
    aktivitas: ActivityItem[];
    addActivity: (title: string, biaya: number) => void;
    resetData: () => void;
    getStatus: () => string;
}
export const FinanceContext = createContext<FinanceContextProps | null>(null);

export const useFinance = () => {
    const context = useContext(FinanceContext);
    if (!context) {
        throw new Error("useFinance must be used within a FinanceProvider");
    }
    return context;
}

