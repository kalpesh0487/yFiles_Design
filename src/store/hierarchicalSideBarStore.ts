import { create } from "zustand";

interface HierarchicalSideBarState {
  isGeneralOpen: boolean;
  isEdgesOpen: boolean;
  isLabellingOpen: boolean;
  duration: number;
  edgeToEdge: number;
  nodeToNode: number;
  nodeToEdge: number;
  layerToLayer: number;
  sample: string;
  preset: string;
  orientation: string;
  layoutComponentsSeparately: boolean;
  layoutSubComponentsSeparately: boolean;
  symmetricPlacement: boolean;
  // sample p
  sampleHierarchical : boolean;
  
  // edges
  edgeRoutingStyle: string;
  backloopRouting: boolean;
  automaticEdgeGrouping: boolean;
  automaticBusRouting: boolean;
  highlightCriticalPath: boolean;
  minimumFirstSegmentLength: number;
  minimumLastSegmentLength: number;
  minimumEdgeLength: number;
  minimumEdgeDistance: number;
  minimumSlope: number;
  arrowsDefineEdgeDirection: boolean;
  considerEdgeThickness: boolean;
  recursiveEdgeRoutingStyle: string;
  uTurnSymmetry: number;
  allowShortcuts: boolean;

  // labels
  edgeLabelPlacementHierarchical: string;
  nodeLabelPlacementHierarchical: string;
  edgeOrientation: string,
  alongEdge: string,
  sideOfSide: string,

  toggleGeneral: () => void;
  toggleEdges: () => void;
  toggleLabelling: () => void;
  setDuration: (value: number) => void;
  setEdgeToEdge: (value: number) => void;
  setNodeToNode: (value: number) => void;
  setNodeToEdge: (value: number) => void;
  setLayerToLayer: (value: number) => void;
  setSample: (value: string) => void;
  setPreset: (value: string) => void;
  setOrientation: (value: string) => void;
  toggleLayoutComponentsSeparately: () => void;
  toggleLayoutSubComponentsSeparately: () => void;
  toggleSymmetricPlacement: () => void;
  // edges
  setEdgeRoutingStyle: (value: string) => void;
  toggleBackloopRouting: () => void;
  toggleAutomaticEdgeGrouping: () => void;
  toggleAutomaticBusRouting: () => void;
  toggleHighlightCriticalPath: () => void;
  setMinimumFirstSegmentLength: (value: number) => void;
  setMinimumLastSegmentLength: (value: number) => void;
  setMinimumEdgeLength: (value: number) => void;
  setMinimumEdgeDistance: (value: number) => void;
  setMinimumSlope: (value: number) => void;
  toggleArrowsDefineEdgeDirection: () => void;
  toggleConsiderEdgeThickness: () => void;
  setRecursiveEdgeRoutingStyle: (value: string) => void;
  setUTurnSymmetry: (value: number) => void;
  toggleAllowShortcuts: () => void;

  // labels
  setEdgeLabelPlacementHierarchical : (value: string) => void;
  setNodeLabelPlacementHierarchical : (value: string) => void;
  setEdgeOrientation: (value: string) => void;
  setAlongEdge: (value: string) => void;
  setSideOfSide: (value: string) => void;
  setSampleHierarchical : (value: boolean) => void;
}

const useHierarchicalSideBarStore = create<HierarchicalSideBarState>((set) => ({
  isGeneralOpen: true,
  isEdgesOpen: false,
  isLabellingOpen: false,
  duration: 83,
  edgeToEdge: 17,
  nodeToNode: 35,
  nodeToEdge: 5,
  layerToLayer: 5,
  sample: 'Default',
  preset: 'Default',
  orientation: 'Top to Bottom',
  layoutComponentsSeparately: false,
  layoutSubComponentsSeparately: false,
  symmetricPlacement: false,

  // edge prop
  edgeRoutingStyle: 'Orthogonal',
  backloopRouting: false,
  automaticEdgeGrouping: false,
  automaticBusRouting: false,
  highlightCriticalPath: false,
  minimumFirstSegmentLength: 10,
  minimumLastSegmentLength: 38,
  minimumEdgeLength: 10,
  minimumEdgeDistance: 10,
  minimumSlope: 10,
  arrowsDefineEdgeDirection: false,
  considerEdgeThickness: false,
  recursiveEdgeRoutingStyle: 'Off',
  uTurnSymmetry: 50,
  allowShortcuts: false,
  sampleHierarchical: false,

  // labels
  edgeLabelPlacementHierarchical: 'ignore',
  nodeLabelPlacementHierarchical : 'consider',
  edgeOrientation: 'horizontal',
  alongEdge: 'At Target',
  sideOfSide: 'On Edge',

  toggleGeneral: () => set((state) => ({ isGeneralOpen: !state.isGeneralOpen, isEdgesOpen: false, isLabellingOpen: false })),
  toggleEdges: () => set((state) => ({ isEdgesOpen: !state.isEdgesOpen, isGeneralOpen: false, isLabellingOpen: false })),
  toggleLabelling: () => set((state) => ({ isLabellingOpen: !state.isLabellingOpen, isGeneralOpen: false, isEdgesOpen: false })),
  setDuration: (value) => set({ duration: value }),
  setEdgeToEdge: (value) => set({ edgeToEdge: value }),
  setNodeToNode: (value) => set({ nodeToNode: value }),
  setNodeToEdge: (value) => set({ nodeToEdge: value }),
  setLayerToLayer: (value) => set({ layerToLayer: value }),
  setSample: (value) => set({ sample: value }),
  setPreset: (value) => set({ preset: value }),
  setOrientation: (value) => set({ orientation: value }),
  toggleLayoutComponentsSeparately: () => set((state) => ({ layoutComponentsSeparately: !state.layoutComponentsSeparately })),
  toggleLayoutSubComponentsSeparately: () => set((state) => ({ layoutSubComponentsSeparately: !state.layoutSubComponentsSeparately })),
  toggleSymmetricPlacement: () => set((state) => ({ symmetricPlacement: !state.symmetricPlacement })),
  // edges
  setEdgeRoutingStyle: (value) => set({ edgeRoutingStyle: value }),
  toggleBackloopRouting: () => set((state) => ({ backloopRouting: !state.backloopRouting })),
  toggleAutomaticEdgeGrouping: () => set((state) => ({ automaticEdgeGrouping: !state.automaticEdgeGrouping })),
  toggleAutomaticBusRouting: () => set((state) => ({ automaticBusRouting: !state.automaticBusRouting })),
  toggleHighlightCriticalPath: () => set((state) => ({ highlightCriticalPath: !state.highlightCriticalPath })),
  setMinimumFirstSegmentLength: (value) => set({ minimumFirstSegmentLength: value }),
  setMinimumLastSegmentLength: (value) => set({ minimumLastSegmentLength: value }),
  setMinimumEdgeLength: (value) => set({ minimumEdgeLength: value }),
  setMinimumEdgeDistance: (value) => set({ minimumEdgeDistance: value }),
  setMinimumSlope: (value) => set({ minimumSlope: value }),
  toggleArrowsDefineEdgeDirection: () => set((state) => ({ arrowsDefineEdgeDirection: !state.arrowsDefineEdgeDirection })),
  toggleConsiderEdgeThickness: () => set((state) => ({ considerEdgeThickness: !state.considerEdgeThickness })),
  setRecursiveEdgeRoutingStyle: (value) => set({ recursiveEdgeRoutingStyle: value }),
  setUTurnSymmetry: (value) => set({ uTurnSymmetry: value }),
  toggleAllowShortcuts: () => set((state) => ({ allowShortcuts: !state.allowShortcuts })),


  // label
  setEdgeLabelPlacementHierarchical: (value) => set({ edgeLabelPlacementHierarchical: value}),
  setNodeLabelPlacementHierarchical: (value) => set({ nodeLabelPlacementHierarchical: value}),
  setEdgeOrientation: (value: string) => set({ edgeOrientation: value }),
  setAlongEdge: (value: string) => set({ alongEdge: value}),
  setSideOfSide: (value: string) => set({ sideOfSide: value}),
  setSampleHierarchical: (value : boolean) => set({ sampleHierarchical: value}),
}));

export default useHierarchicalSideBarStore;