import { ActivityCard } from "../components/ActivityCard";
import { AddActivityForm } from "../components/ActivityFrom";
// import { useFinance } from "../context/FinanceContext"; 
import { useAppSelector } from "../redux/hooks";

export const ActivitySection = () => {
  // const { saldo, aktivitas } = useFinance();
  const { saldo, aktivitas } = useAppSelector((state) => state.finance);
  
  return (
    <section>
      <div
        className={`p-8 rounded-3xl mb-8 text-white shadow-lg transition-all duration-500 ${
          saldo <= 0 ? "bg-red-500" : "bg-blue-600"
        }`}>
        <p className="text-sm opacity-80 font-medium uppercase tracking-wider">
          Sisa Saldo Anda
        </p>
        <h2 className="text-4xl font-bold font-mono mt-1">
          Rp {saldo.toLocaleString()}
        </h2>
        {saldo <= 0 && (
          <div className="mt-4 bg-white/20 p-2 rounded-lg text-xs animate-pulse text-center font-bold">
            PERINGATAN: SALDO SUDAH HABIS!
          </div>
        )}
      </div>

      <AddActivityForm />

      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-bold text-slate-700">Riwayat Transaksi</h2>
        <span className="text-xs text-slate-400 font-medium bg-slate-100 px-2 py-1 rounded">
          {aktivitas.length} Data
        </span>
      </div>

      <div className="space-y-3">
        {aktivitas.length > 0 ? (
          aktivitas.map((item) => (
            <ActivityCard
              key={item.id}
              title={item.title}
              pengeluaran={item.pengeluaran}
            />
          ))
        ) : (
          <p className="text-center text-slate-400 py-10 text-sm italic">
            Belum ada transaksi hari ini.
          </p>
        )}
      </div>
    </section>
  );
};
