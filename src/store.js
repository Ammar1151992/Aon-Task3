import { create } from 'zustand'

export const useStore = create((set) => ({
  activeCard: 0,
  setActiveCard: (activeCard) => set({ activeCard }),
  select2: true,
  setSelect2: (select2) => set({ select2 }),
  select: "today",
  setSelect: (select) => set({ select }),
  arr: [],
  setArr: (arr) => set({ arr }),
  loading: false,
  setLoading: (loading) => set({ loading }),
  nowplay: [],
  setNowplay: (nowplay) => set({ nowplay }),
  slid2: 0,
  setSlid2: (slid2) => set({ slid2 }),
  menu: false,
  setMenu: (menu) => set({ menu }),
}))
