import { useState, useEffect, useCallback } from "react";
import { type ActivityItem, type FinanceContextProps } from "../context/FinanceContext";

export const useFinanceLogic = (): FinanceContextProps => {
  const [saldo, setSaldo] = useState<number>(() => {
    const saved = localStorage.getItem("finance_saldo");
    return saved ? JSON.parse(saved) : 100000;
  });

  const [aktivitas, setAktivitas] = useState<ActivityItem[]>(() => {
    const saved = localStorage.getItem("finance_activities");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("finance_saldo", JSON.stringify(saldo));
    localStorage.setItem("finance_activities", JSON.stringify(aktivitas));
  }, [saldo, aktivitas]);

  const addActivity = useCallback(
    (title: string, biaya: number) => {
      if (saldo - biaya < 0) {
        alert("Maaf, saldo Anda tidak mencukupi.");
        return;
      }

      const newActivity = { id: Date.now(), title, pengeluaran: biaya };
      setAktivitas((prev) => [newActivity, ...prev]);
      setSaldo((prev) => prev - biaya);
    },
    [saldo],
  );

  const resetData = useCallback(() => {
    if (window.confirm("Hapus semua data?")) {
      setSaldo(100000);
      setAktivitas([]);
    }
  }, []);

  const getStatus = () => {
    if (saldo <= 5000) return "☠️";
    if (saldo <= 10000) return "kritis";
    return "okelah";
  }

  return { saldo, aktivitas, addActivity, resetData, getStatus };
};