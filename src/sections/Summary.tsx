import { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../redux/hooks";
import { resetData } from "../redux/slices/financeSlice";
import { useStatusStore } from "../store/useStatusStore"; // Import Zustand

export const Summary = () => {
  const dispatch = useAppDispatch();

  // Ambil data dari Redux
  const { aktivitas, saldo } = useAppSelector((state) => state.finance);

  // Ambil fungsi & state dari Zustand
  const updateStatus = useStatusStore((state) => state.updateStatus);
  const getStatusColor = useStatusStore((state) => state.getStatusColor);
  const getStatusLabel = useStatusStore((state) => state.getStatusLabel);

  // Sync Redux ke Zustand
  useEffect(() => {
    updateStatus(saldo);
  }, [saldo, updateStatus]);

  return (
    <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100">
      <h3 className="font-bold text-slate-800 mb-4">
        Ringkasan (Redux + Zustand)
      </h3>
      <ul className="space-y-3 text-sm mb-3">
        <li className="flex justify-between">
          <span className="text-slate-500">Total Transaksi</span>
          <span className="font-semibold">{aktivitas.length}</span>
        </li>
        <li className="flex justify-between">
          <span className="text-slate-500">Status Saldo</span>
          <span className={`font-bold ${getStatusColor()}`}>
            {getStatusLabel()}
          </span>
        </li>
      </ul>

      <button
        onClick={() => dispatch(resetData())}
        className="w-full py-2 text-xs font-semibold text-red-500 border border-red-100 rounded-xl hover:bg-red-50 transition-colors">
        Reset Data
      </button>
    </div>
  );
};
