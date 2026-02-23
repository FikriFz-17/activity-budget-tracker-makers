interface SummaryProps{
    totalItem: number
    status: string
}

export const Summary = ({ totalItem, status }: SummaryProps) => {
    return (
      <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100">
        <h3 className="font-bold text-slate-800 mb-4">Ringkasan Hari Ini</h3>
        <ul className="space-y-3 text-sm">
          <li className="flex justify-between">
            <span className="text-slate-500">Total Transaksi</span>
            <span className="font-semibold">{totalItem}</span>
          </li>
          <li className="flex justify-between">
            <span className="text-slate-500">Status Saldo</span>
            <span className={`font-bold ${status === "sehat"? "text-green-500" : status === "kritis" ? "text-yellow-500" : "text-red-500"}`}>
            {status === "sehat"? "Sehat" : status === "kritis" ? "Kritis" : "☠️"}
          </span>
          </li>
        </ul>
      </div>
    );
};