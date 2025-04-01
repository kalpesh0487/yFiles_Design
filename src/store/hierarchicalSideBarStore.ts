import { create } from 'zustand';

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
}

const useHierarchicalSideBarStore = create<HierarchicalSideBarState>((set) => ({

  isGeneralOpen: true,
  isEdgesOpen: false,
  isLabellingOpen: false,

  duration: 70,
  edgeToEdge: 17,
  nodeToNode: 25,
  nodeToEdge: 5,
  layerToLayer: 5,

  sample: 'Default',
  preset: 'Default',
  orientation: 'Top to Bottom',
  layoutComponentsSeparately: false,
  layoutSubComponentsSeparately: false,
  symmetricPlacement: false,

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

  setDuration: (value) => set({ duration: value }),
  setEdgeToEdge: (value) => set({ edgeToEdge: value }),
  setNodeToNode: (value) => set({ nodeToNode: value }),
  setNodeToEdge: (value) => set({ nodeToEdge: value }),
  setLayerToLayer: (value) => set({ layerToLayer: value }),

  setSample: (value) => set({ sample: value }),
  setPreset: (value) => set({ preset: value }),
  setOrientation: (value) => set({ orientation: value }),
  toggleLayoutComponentsSeparately: () =>
    set((state) => ({ layoutComponentsSeparately: !state.layoutComponentsSeparately })),
  toggleLayoutSubComponentsSeparately: () =>
    set((state) => ({ layoutSubComponentsSeparately: !state.layoutSubComponentsSeparately })),
  toggleSymmetricPlacement: () =>
    set((state) => ({ symmetricPlacement: !state.symmetricPlacement })),
}));

export default useHierarchicalSideBarStore;