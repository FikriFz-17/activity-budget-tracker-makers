import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { ActivityItem } from "../../context/FinanceContext";

interface FinanceState {
    saldo: number;
    aktivitas: ActivityItem[];
}

const initialState: FinanceState = {
    saldo: JSON.parse(localStorage.getItem("finance_saldo") || "100000"),
    aktivitas: JSON.parse(localStorage.getItem("finance_activities") || "[]"),
};

const financeSlice = createSlice({
  name: "finance",
  initialState,
  reducers: {
    addActivity: (state, action: PayloadAction<{ title: string; biaya: number }>,) => {
        const { title, biaya } = action.payload;

        if (state.saldo - biaya < 0) {
            alert("Maaf, saldo Anda tidak mencukupi.");
            return;
        }

        const newActivity = { id: Date.now(), title, pengeluaran: biaya };
        state.aktivitas.unshift(newActivity); // Immer.js menangani mutasi secara aman
        state.saldo -= biaya;

        // Update LocalStorage
        localStorage.setItem("finance_saldo", JSON.stringify(state.saldo));
        localStorage.setItem(
            "finance_activities",
            JSON.stringify(state.aktivitas),
        );
    },

    resetData: (state) => {
        state.saldo = 100000;
        state.aktivitas = [];

        // Update LocalStorage
        localStorage.setItem("finance_saldo", JSON.stringify(state.saldo));
        localStorage.setItem("finance_activities", JSON.stringify(state.aktivitas));
    },

    
  },
  

});

export const { addActivity, resetData } = financeSlice.actions;
export default financeSlice.reducer;