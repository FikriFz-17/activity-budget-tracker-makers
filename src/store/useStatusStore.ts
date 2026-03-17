import { create } from 'zustand';

interface StatusState{
    status: string;
    updateStatus: (saldo: number) => void;
    getStatusColor: () => string;
    getStatusLabel: () => string;
}

export const useStatusStore = create<StatusState>((set, get) => ({
    status: "okelah",

    updateStatus: (saldo) => set(() => ({ status: saldo <= 5000 ? "☠️" : saldo <= 10000 ? "kritis" : "okelah" })),

    getStatusColor: () => get().status === "okelah" ? "text-green-500" : get().status === "kritis" ? "text-yellow-500" : "text-red-500",

    getStatusLabel: () => get().status === "okelah" ? "Sultan" : get().status === "kritis" ? "Kritis" : "☠️",
}))