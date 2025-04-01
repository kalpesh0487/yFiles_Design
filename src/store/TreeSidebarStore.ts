// treeSideBarStore.js
import { create } from "zustand";

interface TreeSideBarState {
  isGeneralOpen: boolean;
  isEdgesOpen: boolean;
  isLabellingOpen: boolean;

  sample: string;
  preset: string;
  orientation: string;
  actOnSelectionOnly: boolean;

  edgeStyle: string;
  arrowSize: number;

  toggleGeneral: () => void;
  toggleEdges: () => void;
  toggleLabelling: () => void;

  setSample: (value: string) => void;
  setPreset: (value: string) => void;
  setOrientation: (value: string) => void;
  toggleActOnSelectionOnly: () => void;

  setEdgeStyle: (value: string) => void;
  setArrowSize: (value: number) => void;
}

const useTreeSideBarStore = create<TreeSideBarState>((set) => ({
  
  isGeneralOpen: true,
  isEdgesOpen: false,
  isLabellingOpen: false,

  sample: 'Default',
  preset: 'Default',
  orientation: 'Top to Bottom',
  actOnSelectionOnly: false,

  edgeStyle: 'straight',
  arrowSize: 4,

  toggleGeneral: () =>
    set((state) => ({
      isGeneralOpen: !state.isGeneralOpen,
      isEdgesOpen: false,
      isLabellingOpen: false,
    })),
  toggleEdges: () =>
    set((state) => ({
      isEdgesOpen: !state.isEdgesOpen,
      isGeneralOpen: false,
      isLabellingOpen: false,
    })),
  toggleLabelling: () =>
    set((state) => ({
      isLabellingOpen: !state.isLabellingOpen,
      isGeneralOpen: false,
      isEdgesOpen: false,
    })),

  setSample: (value) => set({ sample: value }),
  setPreset: (value) => set({ preset: value }),
  setOrientation: (value) => set({ orientation: value }),
  toggleActOnSelectionOnly: () =>
    set((state) => ({ actOnSelectionOnly: !state.actOnSelectionOnly })),

  setEdgeStyle: (value) => set({ edgeStyle: value }),
  setArrowSize: (value) => set({ arrowSize: value }),
}));

export default useTreeSideBarStore;