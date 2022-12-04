import React, { useEffect, useState } from 'react'

const TableRow = (walletadd:string, index:number, res:any) => {
    const [bal, setBal] = useState(null)
    const [isLoading, setLoading] = useState(true)
    
  return (

    <tr className={`${index %2==0 ?"bg-gray-100" : "bg-white" } border-b`} key={index}>
    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{res.first_name + res.last_name}</td>
    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{res.value}</td>
    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{res.ens_id}</td>
    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{res.wallet_id}</td>
    {/* <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{bal} </td> */}
  </tr>
  )
}

export default TableRow