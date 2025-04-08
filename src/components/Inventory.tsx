import { useEffect, useState } from 'react'
import { useNetworkStore } from '../store/dataStore';
import { DeviceType } from '../types/types';

const Inventory = () => {
  const [switches, setSwitches] = useState(0);
  const [routers, setRouters] = useState(0);
  const [firewalls, setFirewalls] = useState(0);
  const [loadBalancers, setLoadBalancers] = useState(0);

  const { networkData } = useNetworkStore();

  useEffect(()=>{
    const switchCount = networkData.nodes.filter( node => 
      node.type === DeviceType.FAT_SWITCH ||
      node.type === DeviceType.SWITCH ||
      node.type === DeviceType.UNKNOWN
    ).length;

    const routerCount = networkData.nodes.filter( node => 
      node.type === DeviceType.ROUTER
    ).length;

    const loadBalancer = networkData.nodes.filter( node =>
      node.type === DeviceType.LOAD_BALANCER
    ).length;

    const firewall = networkData.nodes.filter( node =>
      node.type === DeviceType.FIREWALL
    ).length;

    setSwitches(switchCount);
    setRouters(routerCount);
    setLoadBalancers(loadBalancer);
    setFirewalls(firewall);
  }, [networkData])

  return (
    <div className="w-48 h-auto rounded-2xl shadow-lg bg-white">
      <div className="bg-slate-300 border-b h-7 rounded-t-lg text-[#1E5D78] text-center text-sm flex items-center justify-center border-1">
        Device Inventory
      </div>
      <div className=" border border-[#1E5D78] rounded-b-lg p-1">
        <div className="text-sm ml-2 flex items-center justify-start">
          <input type='checkbox'/>
          <span className='ml-2'>Switches: {switches}</span>
        </div>
        <div className="text-sm ml-2 flex items-center justify-start">
          <input type='checkbox'/>
          <span className='ml-2'>Routers: {routers}</span>
        </div>
        <div className="text-sm ml-2 flex items-center justify-start">
          <input type='checkbox'/>
          <span className='ml-2'>Firewalls: {firewalls}</span>
        </div>
        <div className="text-sm ml-2 flex items-center justify-start">
          <input type='checkbox'/>
          <span className='ml-2'>Load Balancers: {loadBalancers}</span>
        </div>
      </div>
    </div>
  )
}

export default Inventory