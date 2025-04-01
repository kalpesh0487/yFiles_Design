import { create } from "zustand";

interface OrganicSideBarState {
  isGeneralOpen: boolean;
  isEdgesOpen: boolean;
  isLabellingOpen: boolean;

  sample: string;
  preset: string;
  scope: string;
  preferredEdgeLength: number;
  minimumNodeDistance: number;
  avoidNodeEdgeOverlap: boolean;
  compactness: number;
  orientation: string;
  clustering: string;

  edgeStyle: string;
  arrowSize: number;

  toggleGeneral: () => void;
  toggleEdges: () => void;
  toggleLabelling: () => void;

  setSample: (value: string) => void;
  setPreset: (value: string) => void;
  setScope: (value: string) => void;
  setPreferredEdgeLength: (value: number) => void;
  setMinimumNodeDistance: (value: number) => void;
  toggleAvoidNodeEdgeOverlap: () => void;
  setCompactness: (value: number) => void;
  setOrientation: (value: string) => void;
  setClustering: (value: string) => void;

  setEdgeStyle: (value: string) => void;
  setArrowSize: (value: number) => void;
}

const useOrganicSideBarStore = create<OrganicSideBarState>((set) => ({
  
  isGeneralOpen: true,
  isEdgesOpen: false,
  isLabellingOpen: false,

  sample: 'default',
  preset: 'default',
  scope: 'all',
  preferredEdgeLength: 10,
  minimumNodeDistance: 20,
  avoidNodeEdgeOverlap: false,
  compactness: 80,
  orientation: 'none',
  clustering: 'none',

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
  setScope: (value) => set({ scope: value }),
  setPreferredEdgeLength: (value) => set({ preferredEdgeLength: value }),
  setMinimumNodeDistance: (value) => set({ minimumNodeDistance: value }),
  toggleAvoidNodeEdgeOverlap: () =>
    set((state) => ({ avoidNodeEdgeOverlap: !state.avoidNodeEdgeOverlap })),
  setCompactness: (value) => set({ compactness: value }),
  setOrientation: (value) => set({ orientation: value }),
  setClustering: (value) => set({ clustering: value }),

  setEdgeStyle: (value) => set({ edgeStyle: value }),
  setArrowSize: (value) => set({ arrowSize: value }),
}));

export default useOrganicSideBarStore;