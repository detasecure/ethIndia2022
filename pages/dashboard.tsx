import React, { useEffect, useState } from 'react'
import CardBarChart from '../components/dashboard/CardBarChart'
import RadarChart from '../components/dashboard/RadarChart'
import Stats from '../components/dashboard/Stats'
import WalletList from '../components/dashboard/WalletList'
import Charts from "../components/dashboard/Charts";

const dashboard = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div className='grid grid-cols-3 items-center justify-center w-[70%] p-10 gap-4 mx-auto'>
      {loaded ? <RadarChart /> : ""}
      <div className='col-span-2'>
      {loaded ? <WalletList /> : ""}
      </div>
      {loaded ? <CardBarChart /> : ""}
      {loaded ? <Stats value={24} /> : ""}
    </div>
  );
};

export default dashboard;
