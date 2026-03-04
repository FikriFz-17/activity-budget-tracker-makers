import { ActivityCard } from "../components/ActivityCard";
import { AddActivityForm } from "../components/ActivityFrom";

interface ActivityItem {
  id: number;
  title: string;
  pengeluaran: number;
}

interface AktivitasProps {
  saldo: number;
  activities: ActivityItem[];
  onAdd: (title: string, biaya: number) => void;
}

export const ActivitySection = ({
  saldo,
  activities,
  onAdd,
}: AktivitasProps) => {
  return (
    <section>
      {/* Visualisasi Saldo */}
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

      {/* Form Input Dinamis */}
      <AddActivityForm onAdd={onAdd} />

      {/* Daftar Transaksi */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-bold text-slate-700">Riwayat Transaksi</h2>
        <span className="text-xs text-slate-400 font-medium bg-slate-100 px-2 py-1 rounded">
          {activities.length} Data
        </span>
      </div>

      <div className="space-y-3">
        {activities.length > 0 ? (
          activities.map((item) => (
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
