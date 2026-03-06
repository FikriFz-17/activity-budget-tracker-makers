import { useFinance } from "../context/FinanceContext"; // Import hook context

export const Summary = () => {
  // Ambil data yang dibutuhkan dari Context
  const { aktivitas, getStatus, resetData } = useFinance();

  // Ambil string status (okelah/kritis/☠️) dari fungsi context
  const status = getStatus();

  const getStatusColor = () => {
    if (status === "okelah") return "text-green-500";
    if (status === "kritis") return "text-yellow-500";
    return "text-red-500";
  };

  const getStatusLabel = () => {
    if (status === "okelah") return "Sultan";
    if (status === "kritis") return "Kritis";
    return "☠️";
  };

  return (
    <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100">
      <h3 className="font-bold text-slate-800 mb-4">Ringkasan Hari Ini</h3>
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
        onClick={resetData}
        className="w-full py-2 text-xs font-semibold text-red-500 border border-red-100 rounded-xl hover:bg-red-50 hover:border-red-200 transition-colors">
        Reset Data & Saldo
      </button>
    </div>
  );
};
