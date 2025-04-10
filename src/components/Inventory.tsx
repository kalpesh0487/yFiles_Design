// src/components/Inventory.tsx
import { useEffect, useState } from 'react';
import { useNetworkStore } from '../store/dataStore';
import { DeviceType } from '../types/types';
import { useDeviceSelectionStore } from '../store/deviceSelectionStore';

const Inventory = () => {
  const [switches, setSwitches] = useState(0);
  const [routers, setRouters] = useState(0);
  const [firewalls, setFirewalls] = useState(0);
  const [loadBalancers, setLoadBalancers] = useState(0);

  const { networkData } = useNetworkStore();
  const { selectedDevices, toggleDevice } = useDeviceSelectionStore();

  useEffect(() => {
    const switchCount = networkData.nodes.filter(
      (node) =>
        node.type === DeviceType.FAT_SWITCH ||
        node.type === DeviceType.SWITCH ||
        node.type === DeviceType.UNKNOWN
    ).length;

    const routerCount = networkData.nodes.filter(
      (node) => node.type === DeviceType.ROUTER
    ).length;

    const loadBalancer = networkData.nodes.filter(
      (node) => node.type === DeviceType.LOAD_BALANCER
    ).length;

    const firewall = networkData.nodes.filter(
      (node) => node.type === DeviceType.FIREWALL
    ).length;

    setSwitches(switchCount);
    setRouters(routerCount);
    setLoadBalancers(loadBalancer);
    setFirewalls(firewall);
  }, [networkData]);

  const handleCheckboxChange = (deviceType: DeviceType, isSwitchOrUnknown?: boolean) => {
    if (isSwitchOrUnknown) {
      toggleDevice(DeviceType.SWITCH);
      toggleDevice(DeviceType.FAT_SWITCH);
      toggleDevice(DeviceType.UNKNOWN);
    } else {
      toggleDevice(deviceType);
    }
  };

  return (
    <div className="w-48 h-auto rounded-2xl shadow-lg bg-white">
      <div className="bg-slate-300 border-b h-7 rounded-t-lg text-[#1E5D78] text-center text-sm flex items-center justify-center border-1">
        Device Inventory
      </div>
      <div className="border border-[#1E5D78] rounded-b-lg p-1">
        <div className="text-sm ml-2 flex items-center justify-start">
          <input
            type="checkbox"
            checked={selectedDevices[DeviceType.SWITCH] && selectedDevices[DeviceType.FAT_SWITCH] && selectedDevices[DeviceType.UNKNOWN]}
            onChange={() => handleCheckboxChange(DeviceType.SWITCH, true)}
            disabled={false} // Allow toggling
          />
          <span className="ml-2">Switches: {switches}</span>
        </div>
        <div className="text-sm ml-2 flex items-center justify-start">
          <input
            type="checkbox"
            checked={selectedDevices[DeviceType.ROUTER]}
            onChange={() => handleCheckboxChange(DeviceType.ROUTER)}
            disabled={false} // Allow toggling
          />
          <span className="ml-2">Routers: {routers}</span>
        </div>
        <div className="text-sm ml-2 flex items-center justify-start">
          <input
            type="checkbox"
            checked={selectedDevices[DeviceType.FIREWALL]}
            onChange={() => handleCheckboxChange(DeviceType.FIREWALL)}
            disabled={false} // Allow toggling
          />
          <span className="ml-2">Firewalls: {firewalls}</span>
        </div>
        <div className="text-sm ml-2 flex items-center justify-start">
          <input
            type="checkbox"
            checked={selectedDevices[DeviceType.LOAD_BALANCER]}
            onChange={() => handleCheckboxChange(DeviceType.LOAD_BALANCER)}
            disabled={false} // Allow toggling
          />
          <span className="ml-2">Load Balancers: {loadBalancers}</span>
        </div>
      </div>
    </div>
  );
};

export default Inventory;