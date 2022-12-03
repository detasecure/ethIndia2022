import React, { useEffect, useState } from 'react'
import Charts from '../components/dashboard/Charts'
import Stats from '../components/dashboard/Stats'

const dashboard = () => {

    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        setLoaded(true)
    },[])

  return (
    <div className='flex flex-col items-center justify-center w-screen h-screen text-gray-800 p-10 bg-gray-200'>
      
      {loaded ? <Stats value={24} /> : ""}
      {loaded ? <Charts /> : ""}
    </div>
  )
}

export default dashboard