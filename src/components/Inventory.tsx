import { useState } from 'react'
import { useNetworkStore } from '../store/dataStore';

const Inventory = () => {
  const [switches, setSwitches] = useState(0);
  const [routers, setRouters] = useState(0);
  const [firewalls, setFirewalls] = useState(0);
  const [loadBalancers, setLoadBalancers] = useState(0);

  

  return (
    <div className="w-48 h-auto rounded-2xl shadow-lg bg-white"> {/* Adjusted width and added bg-white */}
      <div className="bg-slate-300 border-b h-7 rounded-t-lg text-[#1E5D78] text-center text-sm flex items-center justify-center border-1">
        Device Inventory
      </div>
      <div className=" border border-[#1E5D78] rounded-b-lg p-1"> {/* Added padding */}
        <div className="text-sm ml-2">Switches: {switches}</div>
        <div className="text-sm ml-2">Routers: {routers}</div>
        <div className="text-sm ml-2">Firewalls: {firewalls}</div>
        <div className="text-sm ml-2">Load Balancers: {loadBalancers}</div>
      </div>
    </div>
  )
}

export default Inventory