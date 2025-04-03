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
  // edge properties
  enableEdgeBundling: boolean;
  bundlingStrength: number;
  edgeRoutingStyleCircular: string;

  edgeLabelPlacementCircular: string;
  nodeLabelPlacementCircular: string;
  edgeOrientationCircular: string,
  alongEdgeCircular: string,
  sideOfSideCircular: string,

  toggleGeneral: () => void;
  toggleEdges: () => void;
  toggleLabelling: () => void;
  setSample: (value: string) => void;
  setPreset: (value: string) => void;
  setPartitioningPolicy: (value: string) => void;
  toggleActOnSelectionOnly: () => void;
  toggleUseDrawingAsSketch: () => void;
  // setters and toggles for edges
  toggleEnableEdgeBundling: () => void;
  setBundlingStrength: (value: number) => void;
  setEdgeRoutingStyleCircular: (value: string) => void;

  // labels
  setEdgeLabelPlacementCircular : (value: string) => void;
  setNodeLabelPlacementCircular : (value: string) => void;
  setEdgeOrientationCircular: (value: string) => void;
  setAlongEdgeCircular: (value: string) => void;
  setSideOfSideCircular: (value: string) => void;
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
  // edges
  enableEdgeBundling: false,
  bundlingStrength: 0.5, 
  edgeRoutingStyleCircular: 'Automatic',

  edgeLabelPlacementCircular: 'ignore',
  nodeLabelPlacementCircular: 'consider',
  edgeOrientationCircular: '',
  alongEdgeCircular: '',
  sideOfSideCircular: '',

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
  setEdgeRoutingStyleCircular: (value) => set({ edgeRoutingStyleCircular: value }),

  setEdgeLabelPlacementCircular : (value) => set({ edgeLabelPlacementCircular: value }),
  setNodeLabelPlacementCircular : (value) => set({ nodeLabelPlacementCircular: value }),
  setEdgeOrientationCircular: (value) => set({ edgeOrientationCircular:value }),
  setAlongEdgeCircular: (value) => set({ alongEdgeCircular: value }),
  setSideOfSideCircular: (value) => set({ sideOfSideCircular: value }),
}));

export default useCircularSideBarStore;