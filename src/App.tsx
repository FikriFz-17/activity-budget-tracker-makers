import { ActivitySection } from "./sections/ActivitySection";
import { Summary } from "./sections/Summary";
import { useAuth } from "./context/AuthContext";
import { lazy, Suspense } from "react";

const TestAdvanced = lazy(() => import("./sections/TestingErrSuspend"));

function App() {
  const { logout } = useAuth();

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased">
      <nav className="bg-white border-b border-slate-200 py-4 px-8 sticky top-0 z-10 shadow-sm">
        <div className="max-w-5xl mx-auto flex justify-between items-center">
          <h1 className="text-xl font-black bg-linear-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent uppercase tracking-tight">
            FinanceFlow
          </h1>
          <button
            onClick={logout}
            className="text-sm font-semibold text-slate-600 hover:text-slate-800 transition-colors">
            Logout
          </button>
        </div>
      </nav>

      <main className="max-w-5xl mx-auto p-6 md:p-10">
        <header className="mb-10">
          <h2 className="text-3xl font-bold text-slate-800">Halo👋</h2>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-8">
            <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100">
              <ActivitySection />
            </div>
          </div>

          <div className="lg:col-span-4 space-y-6">
            <Summary />
          </div>
        </div>

        <Suspense
          fallback={
            <div className="mt-6 p-10 bg-blue-50 border-2 border-dashed border-blue-200 rounded-2xl text-center">
              <p className="text-blue-500 font-bold animate-bounce">
                ⏳ SEDANG LOADING KOMPONEN TEST...
              </p>
            </div>
          }>
          <TestAdvanced />
        </Suspense>
      </main>
    </div>
  );
}

export default App;
