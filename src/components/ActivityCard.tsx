interface ActivityProps {
  title: string;
  pengeluaran: number;
}

export const ActivityCard = ({ title, pengeluaran }: ActivityProps) => {
  return (
    <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200 flex justify-between items-center transition-all hover:shadow-md">
      <div>
        <h4 className="font-bold text-slate-800 capitalize">{title}</h4>
        <p className="text-xs text-slate-400">Pengeluaran</p>
      </div>
      <div className="text-right">
        <span className="text-red-500 font-bold font-mono">
          - Rp {pengeluaran.toLocaleString()}
        </span>
      </div>
    </div>
  );
};
