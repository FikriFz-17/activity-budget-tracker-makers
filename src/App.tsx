import { ActivitySection } from "./sections/ActivitySection";
import { Summary } from "./sections/Summary";
import { useFinance } from "./hooks/useFinance";
import { useAuth } from "./hooks/useAuth";

function App() {
  const { saldo, aktivitas, addActivity, resetData } = useFinance();
  const { logout } = useAuth();
  const getStatus = () => {
    if (saldo <= 5000){
      return "☠️"
    } else if (saldo <= 10000) {
      return "kritis";
    } else {
      return "okelah";
    }
  };

  const handleLogout = () => {
    logout();
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
                onAdd={addActivity}
              />
            </div>
          </div>

          <div className="lg:col-span-4 space-y-6">
            <Summary totalItem={aktivitas.length} status={getStatus()} onReset={resetData}/>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
