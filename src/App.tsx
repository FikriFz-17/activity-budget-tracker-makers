import { useState, useEffect } from "react";
import { ActivitySection } from "./sections/ActivitySection";
import { Summary } from "./sections/Summary";

interface ActivityItem {
  id: number;
  title: string;
  pengeluaran: number;
}

function App() {
  // 1. mengambil dari LocalStorage
  const [saldo, setSaldo] = useState<number>(() => {
    const savedSaldo = localStorage.getItem("finance_saldo");
    return savedSaldo ? JSON.parse(savedSaldo) : 100000;
  });

  const [aktivitas, setAktivitas] = useState<ActivityItem[]>(() => {
    const savedAktivitas = localStorage.getItem("finance_activities");
    return savedAktivitas ? JSON.parse(savedAktivitas) : [];
  });

  // 2. Lifecycle Hook: Menyimpan data setiap kali ada perubahan state
  useEffect(() => {
    localStorage.setItem("finance_saldo", JSON.stringify(saldo));
    localStorage.setItem("finance_activities", JSON.stringify(aktivitas));
  }, [saldo, aktivitas]);

  const handleTambahAktivitas = (title: string, biaya: number) => {
    if (saldo - biaya < 0) {
      alert("Maaf, saldo Anda tidak mencukupi untuk transaksi ini.");
      return;
    }

    const newActivity: ActivityItem = {
      id: Date.now(),
      title: title,
      pengeluaran: biaya,
    };

    setAktivitas([newActivity, ...aktivitas]);
    setSaldo(saldo - biaya);
  };

  // Menghitung status secara dinamis (Derived State)
  const getStatus = () => {
    if (saldo <= 5000){
      return "☠️"
    } else if (saldo <= 10000) {
      return "kritis";
    } else {
      return "okelah";
    }
  };

  const handleResetLocal = () => {
    if (
      window.confirm(
        "Apakah Anda yakin ingin menghapus semua riwayat transaksi?",
      )
    ) {
      // 1. Bersihkan LocalStorage
      localStorage.removeItem("finance_saldo");
      localStorage.removeItem("finance_activities");

      // 2. Kembalikan State ke nilai awal (Default)
      setSaldo(100000);
      setAktivitas([]);

      alert("Data berhasil direset!");
    }
  }

  const handleLogout = () => {
    localStorage.removeItem("isLogin");
    window.location.reload();
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased">
      <nav className="bg-white border-b border-slate-200 py-4 px-8 sticky top-0 z-10 shadow-sm">
        <div className="max-w-5xl mx-auto flex justify-between items-center">
          <h1 className="text-xl font-black bg-linear-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent uppercase tracking-tight">
            FinanceFlow
          </h1>
        <button onClick={handleLogout} className="text-sm font-semibold text-slate-600 hover:text-slate-800">Logout</button>
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
                saldo={saldo}
                activities={aktivitas}
                onAdd={handleTambahAktivitas}
              />
            </div>
          </div>

          <div className="lg:col-span-4 space-y-6">
            <Summary totalItem={aktivitas.length} status={getStatus()} onReset={handleResetLocal}/>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
