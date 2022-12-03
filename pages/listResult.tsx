import React from "react";
import ResultData from "../data/ResultData";
const listResult = () => {

  return (
    <div className="mx-auto max-w-5xl">
      <div className="flex flex-col ">
  <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
    <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
      <div className="overflow-hidden"></div>
      <table className="table-auto border-spacing-1">
        <thead className="bg-white border-b">
          <tr>
            <th className="text-sm font-medium text-gray-900 px-6 py-4 text-left">Name</th>
            <th className="text-sm font-medium text-gray-900 px-6 py-4 text-left">Email</th>
            <th className="text-sm font-medium text-gray-900 px-6 py-4 text-left">ENS</th>
            <th className="text-sm font-medium text-gray-900 px-6 py-4 text-left">Wallet Adress</th>
            <th className="text-sm font-medium text-gray-900 px-6 py-4 text-left">Balance</th>
          </tr>
        </thead>
        <tbody>
          {
            ResultData.data.emails.map((res, index) => (
              <tr className="bg-gray-100 border-b" key={index}>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{res.first_name + res.last_name}</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{res.value}</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{res.ens_id}</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{res.wallet_id}</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">0.381eth</td>
          </tr>
            ))
          }
        </tbody>
      </table>
    </div>
    </div>
    </div>
    </div>
    );
};

export default listResult;
