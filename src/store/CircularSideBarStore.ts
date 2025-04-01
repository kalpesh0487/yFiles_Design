import { create } from "zustand";

interface CircularSideBarState {
  isGeneralOpen: boolean;
  isEdgesOpen: boolean;
  isLabellingOpen: boolean;

  sample: string;
  preset: string;
  partitioningPolicy: string;
  actOnSelectionOnly: boolean;
  useDrawingAsSketch: boolean;

  edgeStyle: string;
  arrowSize: number;

  toggleGeneral: () => void;
  toggleEdges: () => void;
  toggleLabelling: () => void;

  setSample: (value: string) => void;
  setPreset: (value: string) => void;
  setPartitioningPolicy: (value: string) => void;
  toggleActOnSelectionOnly: () => void;
  toggleUseDrawingAsSketch: () => void;

  setEdgeStyle: (value: string) => void;
  setArrowSize: (value: number) => void;
}

const useCircularSideBarStore = create<CircularSideBarState>((set) => ({
  isGeneralOpen: true,
  isEdgesOpen: false,
  isLabellingOpen: false,

  sample: 'default',
  preset: 'default',
  partitioningPolicy: 'BCC Compact',
  actOnSelectionOnly: false,
  useDrawingAsSketch: false,

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
  setPartitioningPolicy: (value) => set({ partitioningPolicy: value }),
  toggleActOnSelectionOnly: () =>
    set((state) => ({ actOnSelectionOnly: !state.actOnSelectionOnly })),
  toggleUseDrawingAsSketch: () =>
    set((state) => ({ useDrawingAsSketch: !state.useDrawingAsSketch })),

  setEdgeStyle: (value) => set({ edgeStyle: value }),
  setArrowSize: (value) => set({ arrowSize: value }),
}));

export default useCircularSideBarStore;