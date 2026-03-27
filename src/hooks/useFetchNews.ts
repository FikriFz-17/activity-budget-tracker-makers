import { useQuery } from "@tanstack/react-query";

// Interface untuk data dummy
export interface NewsItem {
  id: number;
  title: string;
  body: string;
}

const fetchEconomyNews = async (): Promise<NewsItem[]> => {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=5",
  );
  if (!response.ok) throw new Error("Gagal mengambil berita");
  return response.json();
};

export const useFetchNews = () => {
  return useQuery({
    queryKey: ["economy-news"], // ID Unik untuk Cache
    queryFn: fetchEconomyNews, // Fungsi pengambil data
    staleTime: 1000 * 60 * 5, // Data dianggap fresh selama 5 menit
  });
};
