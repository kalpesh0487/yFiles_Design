import { NetworkData } from '../types/types';

const getNetworkData = async (): Promise<NetworkData | null> => {
  try {
    const res = await fetch('http://localhost:3000/networkdata');
    if (!res.ok) throw new Error('Failed to fetch network data');
    const data: NetworkData = await res.json();
    return data;
  } catch (err) {
    console.error('Error in getNetworkData:', err);
    return null;
  }
};

export default getNetworkData;