import { useFetchNews } from "../hooks/useFetchNews";

export const NewsSection = () => {
  const { data, isLoading, isError, refetch } = useFetchNews();

  if (isLoading) {
    return (
      <div className="p-4 bg-slate-100 animate-pulse rounded-xl">
        Memuat berita ekonomi...
      </div>
    );
  }

  if (isError) {
    return <div className="text-red-500 text-sm">Gagal memuat berita.</div>;
  }

  return (
    <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-bold text-slate-700">Wawasan Ekonomi 📈</h3>
        <button
          onClick={() => refetch()}
          className="text-[10px] bg-slate-100 px-2 py-1 rounded hover:bg-slate-200 transition-all font-bold">
          REFRESH
        </button>
      </div>

      <div className="space-y-4">
        {data?.map((news) => (
          <div key={news.id} className="group cursor-pointer">
            <h4 className="text-sm font-semibold text-blue-600 group-hover:underline uppercase tracking-tight">
              {news.title.slice(0, 30)}...
            </h4>
            <p className="text-xs text-slate-500 mt-1 line-clamp-2">
              {news.body}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
