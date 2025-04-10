import { create } from 'zustand';
import { DeviceType } from '../types/types';

interface DeviceSelectionState {
  selectedDevices: Record<DeviceType, boolean>;
  toggleDevice: (deviceType: DeviceType) => void;
  resetSelection: () => void;
}

export const useDeviceSelectionStore = create<DeviceSelectionState>((set) => ({
  selectedDevices: {
    [DeviceType.BACKHAUL]: true,    
    [DeviceType.FAT_SWITCH]: true,  
    [DeviceType.SWITCH]: true,      
    [DeviceType.ROUTER]: true,      
    [DeviceType.FIREWALL]: true,    
    [DeviceType.LOAD_BALANCER]: true, 
    [DeviceType.INTERNET]: true,    
    [DeviceType.WAN]: true,         
    [DeviceType.UNKNOWN]: true,     
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
        [DeviceType.BACKHAUL]: true, 
        [DeviceType.FAT_SWITCH]: true,
        [DeviceType.SWITCH]: true,    
        [DeviceType.ROUTER]: true,    
        [DeviceType.FIREWALL]: true,  
        [DeviceType.LOAD_BALANCER]: true, 
        [DeviceType.INTERNET]: true,    
        [DeviceType.WAN]: true,         
        [DeviceType.UNKNOWN]: true,
      },
    }),
}));