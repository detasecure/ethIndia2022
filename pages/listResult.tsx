import React, { useEffect, useState } from "react";
import TableRow from "../components/TableRow";
import ResultData from "../data/ResultData";
var TempData = JSON.parse(JSON.stringify(ResultData))
const listResult = ({TempData}) => {
const [load, setLoad] = useState(true)
useEffect(() => {setLoad(false)},[])
  return (
    <div className="mx-auto max-w-[80%]">
      <div className="flex flex-col ">
  <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
    <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
      <div className="overflow-hidden"></div>
      <table className="table-auto border-spacing-1 rounded-t-md">
        <thead className="bg-purple-600 border-b rounded-t-[4rem]">
          <tr className="rounded-t-md">
            <th className="text-sm font-medium text-gray-900 px-6 py-4 text-left">Name</th>
            <th className="text-sm font-medium text-gray-900 px-6 py-4 text-left">Email</th>
            <th className="text-sm font-medium text-gray-900 px-6 py-4 text-left">ENS</th>
            <th className="text-sm font-medium text-gray-900 px-6 py-4 text-left">Wallet Adress</th>
            
          </tr>
        </thead>
        <tbody>
          
            {TempData.data.emails.map((res, index) =>
            (<tr className={`${index %2==0 ?"bg-gray-100" : "bg-white" } border-b`} key={index}>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{res.first_name + res.last_name}</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{res.value}</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{res.ens_id}</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{res.wallet_id}</td>
          </tr>
            )
          )}
          
        </tbody>
      </table>
    </div>
    </div>
    </div>
    </div>
    );
};
export async function getServerSideProps() {
  var bal = 0;
  ResultData.data.emails.map((res,index) => {

    fetch(`https://api.covalenthq.com/v1/1/address/${res.wallet_id}/balances_v2/?key=ckey_4bfe30fcda54495da7e3304adfb`)
    .then((res) => res.json())
    .then((body) => (body.data.items.filter((item:any) => {
      if(item.contract_name == "Ether")
      {
        bal = item.balance
        console.log(bal)
        // console.log(typeof TempData.data.emails[index])
        // var obj = TempData.data.emails[index]
        // obj.push({"balanceEth": bal})
      }
    }
    )
    )
    )
  })
  return {props: {TempData}} // will be passed to the page component as props
  }


export default listResult;
