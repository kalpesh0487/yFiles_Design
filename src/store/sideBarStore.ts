import { create } from 'zustand';

interface SideBarState {
  isCollapsed: boolean;
  layout: string;
  toggleCollapse: () => void;
  setLayout: (value: string) => void;
}

const useSideBarStore = create<SideBarState>((set) => ({
  isCollapsed: false,
  layout: 'Hierarchical',

  toggleCollapse: () => set((state) => ({ isCollapsed: !state.isCollapsed })),
  setLayout: (value) => set({ layout: value }),
}));

export default useSideBarStore;