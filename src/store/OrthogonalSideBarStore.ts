import { create } from "zustand";

interface OrthogonalSideBarState {
  isGeneralOpen: boolean;
  isEdgesOpen: boolean;
  isLabellingOpen: boolean;
  sample: string;
  preset: string;
  layoutMode: string;
  gridSpacing: number;
  edgeStyle: string;
  arrowSize: number;
  
  minimumFirstSegmentLengthOrthogonal: number;
  minimumSegmentLength: number;
  minimumLastSegmentLengthOrthogonal: number;
  routeSelectedEdgesDownwards: boolean;

  toggleGeneral: () => void;
  toggleEdges: () => void;
  toggleLabelling: () => void;
  setSample: (value: string) => void;
  setPreset: (value: string) => void;
  setLayoutMode: (value: string) => void;
  setGridSpacing: (value: number) => void;
  setEdgeStyle: (value: string) => void;
  setArrowSize: (value: number) => void;
  
  setMinimumFirstSegmentLengthOrthogonal: (value: number) => void;
  setMinimumSegmentLength: (value: number) => void;
  setMinimumLastSegmentLengthOrthogonal: (value: number) => void;
  toggleRouteSelectedEdgesDownwards: () => void;
}

const useOrthogonalSideBarStore = create<OrthogonalSideBarState>((set) => ({
  isGeneralOpen: true,
  isEdgesOpen: false,
  isLabellingOpen: false,
  sample: 'Default',
  preset: 'Default',
  layoutMode: 'Strict',
  gridSpacing: 30,
  edgeStyle: 'straight',
  arrowSize: 4,
  
  minimumFirstSegmentLengthOrthogonal: 10,
  minimumSegmentLength: 10,
  minimumLastSegmentLengthOrthogonal: 10,
  routeSelectedEdgesDownwards: false,

  toggleGeneral: () => set((state) => ({ isGeneralOpen: !state.isGeneralOpen, isEdgesOpen: false, isLabellingOpen: false })),
  toggleEdges: () => set((state) => ({ isEdgesOpen: !state.isEdgesOpen, isGeneralOpen: false, isLabellingOpen: false })),
  toggleLabelling: () => set((state) => ({ isLabellingOpen: !state.isLabellingOpen, isGeneralOpen: false, isEdgesOpen: false })),
  setSample: (value) => set({ sample: value }),
  setPreset: (value) => set({ preset: value }),
  setLayoutMode: (value) => set({ layoutMode: value }),
  setGridSpacing: (value) => set({ gridSpacing: value }),
  setEdgeStyle: (value) => set({ edgeStyle: value }),
  setArrowSize: (value) => set({ arrowSize: value }),
  
  setMinimumFirstSegmentLengthOrthogonal: (value) => set({ minimumFirstSegmentLengthOrthogonal: value }),
  setMinimumSegmentLength: (value) => set({ minimumSegmentLength: value }),
  setMinimumLastSegmentLengthOrthogonal: (value) => set({ minimumLastSegmentLengthOrthogonal: value }),
  toggleRouteSelectedEdgesDownwards: () => set((state) => ({ routeSelectedEdgesDownwards: !state.routeSelectedEdgesDownwards })),
}));

export default useOrthogonalSideBarStore;