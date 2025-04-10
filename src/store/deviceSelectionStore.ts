// src/store/deviceSelectionStore.ts
import { create } from 'zustand';
import { DeviceType } from '../types/types';

interface DeviceSelectionState {
  selectedDevices: Record<DeviceType, boolean>;
  toggleDevice: (deviceType: DeviceType) => void;
  resetSelection: () => void;
}

export const useDeviceSelectionStore = create<DeviceSelectionState>((set) => ({
  selectedDevices: {
    [DeviceType.BACKHAUL]: true,    // Always true
    [DeviceType.FAT_SWITCH]: true,  // Initially true
    [DeviceType.SWITCH]: true,      // Initially true
    [DeviceType.ROUTER]: true,      // Initially true
    [DeviceType.FIREWALL]: true,    // Initially true
    [DeviceType.LOAD_BALANCER]: true, // Initially true
    [DeviceType.INTERNET]: true,    // Always true
    [DeviceType.WAN]: true,         // Always true
    [DeviceType.UNKNOWN]: true,     // Initially true
  },
  toggleDevice: (deviceType: DeviceType) =>
    set((state) => {
      // Only allow toggling for non-fixed device types
      if (
        deviceType !== DeviceType.BACKHAUL &&
        deviceType !== DeviceType.INTERNET &&
        deviceType !== DeviceType.WAN
      ) {
        return {
          selectedDevices: {
            ...state.selectedDevices,
            [deviceType]: !state.selectedDevices[deviceType],
          },
        };
      }
      return state; // Return unchanged state for BACKHAUL, INTERNET, WAN
    }),
  resetSelection: () =>
    set({
      selectedDevices: {
        [DeviceType.BACKHAUL]: true,    // Always true
        [DeviceType.FAT_SWITCH]: true,  // Reset to true
        [DeviceType.SWITCH]: true,      // Reset to true
        [DeviceType.ROUTER]: true,      // Reset to true
        [DeviceType.FIREWALL]: true,    // Reset to true
        [DeviceType.LOAD_BALANCER]: true, // Reset to true
        [DeviceType.INTERNET]: true,    // Always true
        [DeviceType.WAN]: true,         // Always true
        [DeviceType.UNKNOWN]: true,     // Reset to true
      },
    }),
}));