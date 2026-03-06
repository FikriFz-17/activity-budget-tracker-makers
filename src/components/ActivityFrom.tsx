import { useState } from "react";
import { useFinance } from "../context/FinanceContext";

export const AddActivityForm = () => {
  const { addActivity } = useFinance();

  const [title, setTitle] = useState("");
  const [biaya, setBiaya] = useState<number>(0);

  const handleSubmitForm = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || biaya <= 0) {
      alert("Masukkan nama dan nominal yang valid!");
      return;
    }

    addActivity(title, biaya);
    setTitle(""); 
    setBiaya(0);
  };

  return (
    <form
      onSubmit={handleSubmitForm}
      className="mb-8 p-5 bg-slate-50 rounded-2xl border-2 border-dashed border-slate-200">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          type="text"
          placeholder="Nama Belanja (Misal: Token Listrik)"
          className="p-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="number"
          placeholder="Nominal (Rp)"
          className="p-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none"
          value={biaya || ""}
          onChange={(e) => setBiaya(Number(e.target.value))}
        />
      </div>
      <button
        type="submit"
        className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-xl transition-all shadow-lg shadow-blue-200 active:scale-[0.98]">
        Simpan Transaksi
      </button>
    </form>
  );
};
