import React, { useEffect, useState } from 'react'
import Charts from '../components/Charts'

const dashboard = () => {

    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        setLoaded(true)
    },[])

  return (
    <div>
      {loaded ? <Charts /> : ""}
    </div>
  )
}

export default dashboard