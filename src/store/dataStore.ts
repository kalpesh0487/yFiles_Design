import { create } from "zustand";
import { NetworkData } from "../types/types";
import networkData from "../data/networkData";

interface NetworkState {
    networkData: NetworkData;
    setNetworkData: (data: NetworkData) => void;
}

export const useNetworkStore = create<NetworkState>((set) => ({
    networkData: {
      nodes: [],
      connections: [],
      groups: []
    },
    setNetworkData: (data: NetworkData) => set({ networkData: data }),
}));

useNetworkStore.getState().setNetworkData(networkData);