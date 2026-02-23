import { ActivitySection } from "./sections/ActivitySection";
import { Summary } from "./sections/Summary";
import { useState } from "react";

interface ActivityItem {
  id: number;
  title: string;
  pengeluaran: number;
}

function App() {
  const [saldo, setSaldo] = useState(100000);
  const [aktivitas, setAktivitas] = useState<ActivityItem[]>([]);

  const handleTambahAktivitas = (title: string, biaya: number) => {
    if (saldo - biaya < 0) {
      alert("Maaf, saldo Anda tidak mencukupi.");
      return;
    }

    const newActivity = {
      id: Date.now(),
      title: title,
      pengeluaran: biaya,
    }

    setAktivitas([newActivity, ...aktivitas]);
    setSaldo(saldo - biaya);
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased">
      <nav className="bg-white border-b border-slate-200 py-4 px-8 sticky top-0 z-10 shadow-sm">
        <div className="max-w-5xl mx-auto flex justify-between items-center">
          <div>
            <h1 className="text-xl font-black bg-linear-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent uppercase tracking-tight">
              FinanceFlow
            </h1>
          </div>
          <div className="text-xs font-medium text-slate-400 uppercase tracking-widest">
            Finance Tracker v1.0
          </div>
        </div>
      </nav>

      <main className="max-w-5xl mx-auto p-6 md:p-10">
        <header className="mb-10">
          <h2 className="text-3xl font-bold text-slate-800">Halo👋</h2>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-8">
            <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100">
              <ActivitySection 
                saldo={saldo} activities={aktivitas} onAdd={handleTambahAktivitas}/>
            </div>
          </div>

          <div className="lg:col-span-4 space-y-6">
            <Summary 
              totalItem={aktivitas.length} status={saldo === 0 ? "habis" : saldo <= 40000 ? "kritis" : "sehat"}/>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
