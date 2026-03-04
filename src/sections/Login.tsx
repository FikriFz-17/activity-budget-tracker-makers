import React, { useState } from "react";

interface LoginProps {
    onLogin: (email: string, password: string) => void
}

export const Login = ({onLogin} : LoginProps) => {
    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");
    const [Error, setError] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setError("");

        const dummyEmail = "fikri@gmail.com";
        const dummyPassword = "123456";

        if (Email === dummyEmail && Password === dummyPassword) {
            localStorage.setItem("isLogin", "true");
            onLogin(Email, Password);
        } else {
            setError("Invalid email or password");
        }
    }

    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50 p-6">
        <div className="w-full max-w-md bg-white rounded-3xl shadow-xl border border-slate-100 p-10">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-black text-blue-600 tracking-tight uppercase">
              FinanceFlow
            </h1>
            <p className="text-slate-400 text-sm mt-2 font-medium">
              Kelola pengeluaranmu dengan mudah
            </p>
          </div>

          {/* Form Login */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {Error && (
              <div className="bg-red-50 text-red-500 text-xs p-3 rounded-xl border border-red-100 font-bold text-center animate-shake">
                {Error}
              </div>
            )}

            <div>
              <label className="text-xs font-bold text-slate-500 uppercase ml-1">
                Email
              </label>
              <input
                type="email"
                placeholder="admin@mail.com"
                className="w-full mt-1 p-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                value={Email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div>
              <label className="text-xs font-bold text-slate-500 uppercase ml-1">
                Password
              </label>
              <input
                type="password"
                placeholder="•••••"
                className="w-full mt-1 p-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                value={Password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl shadow-lg shadow-blue-200 transition-all active:scale-95">
              Masuk Sekarang
            </button>
          </form>

          <div className="mt-8 text-center text-[10px] text-slate-300 uppercase tracking-widest font-bold">
            Protected by FinanceFlow Security
          </div>
        </div>
      </div>
    );
}