import React, { useEffect, useState } from 'react'

const TableRow = (walletadd:string, index:number, res:any) => {
    const [bal, setBal] = useState(null)
    const [isLoading, setLoading] = useState(true)
    useEffect(() => {
        setLoading(true)
        fetch(`https://api.covalenthq.com/v1/1/address/${walletadd}/balances_v2/?key=ckey_4bfe30fcda54495da7e3304adfb`)
    .then((res) => res.json())
    .then((body) => (body.data.items.filter((item:any) => {
      if(item.contract_name == "Ether")
      {
      setBal(item.balance)
      setLoading(false)
    }
}
    )
    )
    )
  }
     ,[])
    //  if(isLoading)
    //  return <tr>Loading......</tr>
    //  if(!isLoading)
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