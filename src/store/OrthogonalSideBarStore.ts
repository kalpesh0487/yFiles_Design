  // orthogonalSideBarStore.js
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

    toggleGeneral: () => void;
    toggleEdges: () => void;
    toggleLabelling: () => void;

    setSample: (value: string) => void;
    setPreset: (value: string) => void;
    setLayoutMode: (value: string) => void;
    setGridSpacing: (value: number) => void;

    setEdgeStyle: (value: string) => void;
    setArrowSize: (value: number) => void;
  }

  const useOrthogonalSideBarStore = create<OrthogonalSideBarState>((set) => ({
    isGeneralOpen: true,
    isEdgesOpen: false,
    isLabellingOpen: false,

    sample: 'default',
    preset: 'default',
    layoutMode: 'strict',
    gridSpacing: 50,

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
    setLayoutMode: (value) => set({ layoutMode: value }),
    setGridSpacing: (value) => set({ gridSpacing: value }),

    setEdgeStyle: (value) => set({ edgeStyle: value }),
    setArrowSize: (value) => set({ arrowSize: value }),
  }));

  export default useOrthogonalSideBarStore;