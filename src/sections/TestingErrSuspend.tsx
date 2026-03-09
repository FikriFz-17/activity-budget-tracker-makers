import { useState, useEffect } from "react";

interface Post {
  id: number;
  title: string;
  completed: boolean;
}

const TestErrSuspend = () => {
  const [data, setData] = useState<Post | null>(null);
  const [shouldCrash, setShouldCrash] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      fetch("https://jsonplaceholder.typicode.com/todos/1")
        .then((res) => res.json())
        .then((json) => setData(json));
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (shouldCrash) {
    throw new Error("BOOM! Komponen ini meledak sengaja! 💥");
  }

  return (
    <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm mt-6">
      <h2 className="text-xl font-bold mb-4">🧪 Test Advanced Area</h2>

      {data ? (
        <div className="bg-green-50 p-4 rounded-xl border border-green-100">
          <p className="text-sm text-green-700 font-mono">
            Data dari API: {data.title}
          </p>
        </div>
      ) : (
        <p className="text-slate-400 animate-pulse">
          Sedang mengambil data dummy...
        </p>
      )}

      <button
        onClick={() => setShouldCrash(true)}
        className="mt-4 px-4 py-2 bg-red-100 text-red-600 rounded-lg text-sm font-bold hover:bg-red-200 transition-all">
        Simulasi Crash (Test Error Boundary)
      </button>
    </div>
  );
};

export default TestErrSuspend;
