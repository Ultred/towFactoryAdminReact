import { create } from "zustand";

export const SaveNotifBookingSolo = create((set) => ({
  soloBookNotifValue: [],

  setSoloBookNotifValue: (booking) => set({ soloBookNotifValue: booking }),
  clearSoloBookNotifValue: () => set({ soloBookNotifValue: [] }),
}));
