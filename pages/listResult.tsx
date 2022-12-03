import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";
import ResultData from "../data/ResultData";
const listResult = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(false)
  }, [])
  return (
    <div className="mx-auto text-center max-w-[80%]">
      <Head>
      <script src="https://kit.fontawesome.com/3e2258bee7.js" crossOrigin="anonymous"></script>
      </Head>
      <div className="flex flex-col ">
  <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
    <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
      <table className="table-auto border-spacing-1 rounded-t-md ">
        <thead className="bg-purple-600 border-b rounded-t-[4rem] ">
          <tr className="rounded-t-md">
            <th className="text-lg font-medium text-gray-900 px-6 py-4 ">Secure</th>
            <th className="text-lg font-medium text-gray-900 px-6 py-4 ">Risk Score</th>
            <th className="text-lg font-medium text-gray-900 px-6 py-4 ">Name</th>
            <th className="text-lg font-medium text-gray-900 px-6 py-4 ">Email</th>
            <th className="text-lg font-medium text-gray-900 px-6 py-4  max-w-sm">ENS</th>
            <th className="text-lg font-medium text-gray-900 px-6 py-4 ">Wallet Adress</th>
            
          </tr>
        </thead>
        <tbody>
          
            {
            loading ? "" :
            ResultData.data.emails.map((res, index) =>
            (<tr className={`${index %2==0 ?"bg-gray-100" : "bg-white" } border-b`} key={index}>
            <td className={`px-6 py-4 whitespace-nowrap text-lg font-medium ${res.is_breached == "no" ? "text-red-400" : "text-green-400"}`}>
            <i className="fa-solid fa-circle"></i>
            </td>

            <td className={`px-6 py-4 whitespace-nowrap text-lg font-medium ${res.wallet_risk_score == "HIGH" ? "text-red-400" : "text-green-400"}`}>
            <i className="fa-solid fa-triangle-exclamation"></i>
            </td>

            <td className="px-6 py-4 whitespace-nowrap text-lg font-medium text-gray-900">{`${res.first_name} ${res.last_name}` != "null null" ? `${res.first_name} ${res.last_name}` : "No Name"}</td>
            <td className="px-6 py-4 whitespace-nowrap text-lg font-medium text-gray-900">{res.value}</td>
            <td className="px-6 py-4 whitespace-nowrap text-lg font-medium text-gray-900 truncate max-w-sm">{res.ens_id}</td>
            <td className="px-6 py-4 whitespace-nowrap text-lg font-medium text-gray-900">
            <Link href={`/dashboard/${res.wallet_id}`} >
              {res.wallet_id}
            </Link>
              </td>
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

export default listResult;
