import { create } from "zustand";

interface TreeSideBarState {
  isGeneralOpen: boolean;
  isEdgesOpen: boolean;
  isLabellingOpen: boolean;
  sample: string;
  preset: string;
  orientation: string;
  actOnSelectionOnly: boolean;
  portAssignment: string;
  routingStyleForNonTreeEdges: string;

  // lable
  edgeLabelPlacementTree: string;
  nodeLabelPlacementTree: string;
  edgeOrientationTreeTree: string,
  alongEdgeTree: string,
  sideOfSideTree: string,

  toggleGeneral: () => void;
  toggleEdges: () => void;
  toggleLabelling: () => void;
  setSample: (value: string) => void;
  setPreset: (value: string) => void;
  setOrientation: (value: string) => void;
  toggleActOnSelectionOnly: () => void;
  setPortAssignment: (value: string) => void;
  setRoutingStyleForNonTreeEdges: (value: string) => void;

  setEdgeLabelPlacementTree : (value: string) => void;
  setNodeLabelPlacementTree : (value: string) => void;
  setEdgeOrientationTreeTree: (value: string) => void;
  setAlongEdgeTree: (value: string) => void;
  setSideOfSideTree: (value: string) => void;
}

const useTreeSideBarStore = create<TreeSideBarState>((set) => ({
  isGeneralOpen: true,
  isEdgesOpen: false,
  isLabellingOpen: false,
  sample: 'Default',
  preset: 'Default',
  orientation: 'Top to Bottom',
  actOnSelectionOnly: false,
  
  portAssignment: 'None',
  routingStyleForNonTreeEdges: 'Orthogonal',

  edgeLabelPlacementTree: 'ignore',
  nodeLabelPlacementTree: 'consider',
  edgeOrientationTreeTree: '',
  alongEdgeTree: '',
  sideOfSideTree: '',

  toggleGeneral: () => set((state) => ({ isGeneralOpen: !state.isGeneralOpen, isEdgesOpen: false, isLabellingOpen: false })),
  toggleEdges: () => set((state) => ({ isEdgesOpen: !state.isEdgesOpen, isGeneralOpen: false, isLabellingOpen: false })),
  toggleLabelling: () => set((state) => ({ isLabellingOpen: !state.isLabellingOpen, isGeneralOpen: false, isEdgesOpen: false })),
  setSample: (value) => set({ sample: value }),
  setPreset: (value) => set({ preset: value }),
  setOrientation: (value) => set({ orientation: value }),
  toggleActOnSelectionOnly: () => set((state) => ({ actOnSelectionOnly: !state.actOnSelectionOnly })),
  
  setPortAssignment: (value) => set({ portAssignment: value }),
  setRoutingStyleForNonTreeEdges: (value) => set({ routingStyleForNonTreeEdges: value }),


  setEdgeLabelPlacementTree : (value) => set({ edgeLabelPlacementTree: value }),
  setNodeLabelPlacementTree : (value) => set({ nodeLabelPlacementTree: value }),
  setEdgeOrientationTreeTree: (value) => set({ edgeOrientationTreeTree:value }),
  setAlongEdgeTree: (value) => set({ alongEdgeTree: value }),
  setSideOfSideTree: (value) => set({ sideOfSideTree: value }),
}));

export default useTreeSideBarStore;