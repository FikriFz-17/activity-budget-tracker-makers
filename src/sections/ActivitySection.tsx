// sections/ActivitySection.tsx
import { ActivityCard } from "../components/ActivityCard";

interface AktivitasProps {
  saldo: number;
  activities: { id: number; title: string; pengeluaran: number }[];
  onAdd: (title: string, biaya: number) => void;
}

export const ActivitySection = ({ saldo, activities, onAdd }: AktivitasProps) => {
  return (
    <section className="max-w-md mx-auto">
      <div
        className={`p-6 rounded-2xl mb-6 text-white shadow-lg transition-colors ${saldo <= 0 ? "bg-red-500" : "bg-blue-600"}`}>
        <p className="text-sm opacity-80 font-medium">Sisa Saldo Anda</p>
        <h2 className="text-3xl font-bold font-mono mt-1">
          Rp {saldo.toLocaleString()}
        </h2>
        {saldo <= 0 && (
          <div className="mt-3 bg-white/20 p-2 rounded text-xs animate-pulse text-center font-bold">
            SALDO HABIS!
          </div>
        )}
      </div>

      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-bold text-slate-700">Riwayat Transaksi</h2>
        <button
          onClick={() => onAdd("Jajan Sate", 20000)} // Memanggil fungsi dari Parent
          className="bg-slate-800 text-white px-4 py-2 rounded-lg text-xs font-bold hover:bg-slate-700 active:scale-95 transition-all shadow-md">
          + Catat Belanja
        </button>
      </div>

      <div className="space-y-3">
        {activities.map((item) => (
          <ActivityCard
            key={item.id}
            title={item.title}
            pengeluaran={item.pengeluaran}
          />
        ))}
      </div>
    </section>
  );
};
