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
  // Removed edgeStyle and arrowSize
  // New edge properties
  enableEdgeBundling: boolean;
  bundlingStrength: number;
  edgeRoutingStyle: string;

  toggleGeneral: () => void;
  toggleEdges: () => void;
  toggleLabelling: () => void;
  setSample: (value: string) => void;
  setPreset: (value: string) => void;
  setPartitioningPolicy: (value: string) => void;
  toggleActOnSelectionOnly: () => void;
  toggleUseDrawingAsSketch: () => void;
  // Removed setEdgeStyle and setArrowSize
  // New setters and toggles
  toggleEnableEdgeBundling: () => void;
  setBundlingStrength: (value: number) => void;
  setEdgeRoutingStyle: (value: string) => void;
}

const useCircularSideBarStore = create<CircularSideBarState>((set) => ({
  isGeneralOpen: true,
  isEdgesOpen: false,
  isLabellingOpen: false,
  sample: 'Default',
  preset: 'Default',
  partitioningPolicy: 'BCC Compact',
  actOnSelectionOnly: false,
  useDrawingAsSketch: false,
  enableEdgeBundling: false,
  bundlingStrength: 0.5, 
  edgeRoutingStyle: 'Automatic',

  toggleGeneral: () => set((state) => ({ isGeneralOpen: !state.isGeneralOpen, isEdgesOpen: false, isLabellingOpen: false })),
  toggleEdges: () => set((state) => ({ isEdgesOpen: !state.isEdgesOpen, isGeneralOpen: false, isLabellingOpen: false })),
  toggleLabelling: () => set((state) => ({ isLabellingOpen: !state.isLabellingOpen, isGeneralOpen: false, isEdgesOpen: false })),
  setSample: (value) => set({ sample: value }),
  setPreset: (value) => set({ preset: value }),
  setPartitioningPolicy: (value) => set({ partitioningPolicy: value }),
  toggleActOnSelectionOnly: () => set((state) => ({ actOnSelectionOnly: !state.actOnSelectionOnly })),
  toggleUseDrawingAsSketch: () => set((state) => ({ useDrawingAsSketch: !state.useDrawingAsSketch })),
  toggleEnableEdgeBundling: () => set((state) => ({ enableEdgeBundling: !state.enableEdgeBundling })),
  setBundlingStrength: (value) => set({ bundlingStrength: value }),
  setEdgeRoutingStyle: (value) => set({ edgeRoutingStyle: value }),
}));

export default useCircularSideBarStore;