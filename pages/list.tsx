import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import ResultData from "../public/sample.json";
const listResult = () => {
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  useEffect(() => {
    setLoading(false);
  }, []);
  return (
    <div className=" text-center w-full">
      <div className="flex flex-col  ">
        <div className="rounded-xl ">
          <div className="py-2 inline-block  sm:px-6 lg:px-8">
            <table className="table-auto border-spacing-1 rounded-t-md ">
              <thead className="bg-indigo-500 rounded-xl w-full rounded-t-[4rem] ">
                <tr className="rounded-t-md">
                  <th className="text-xl font-bold  px-6 py-4 ">
                    Account at Risk
                  </th>
                  <th className="text-xl font-bold  px-6 py-4 ">Risk Score</th>
                  <th className="text-xl font-bold  px-6 py-4 ">Avatar</th>
                  <th className="text-xl font-bold  px-6 py-4 ">Name</th>
                  <th className="text-xl font-bold  px-6 py-4 ">Email</th>
                  <th className="text-xl font-bold  px-6 py-4 ">ENS</th>
                  <th className="text-xl font-bold  px-6 py-4 ">
                    Wallet Adress
                  </th>{" "}
                  <th className="text-xl font-bold  px-6 py-4 "> </th>
                </tr>
              </thead>
              <tbody>
                {loading
                  ? ""
                  : ResultData.data.emails.map((res, index) => (
                      <tr
                        className={`${
                          index % 2 == 0 ? "bg-neutral-900" : "bg-stone-900"
                        } `}
                        key={index}
                      >
                        <td className="text-4xl">
                          {res.is_breached === "no" ? "👍" : "💩"}
                        </td>

                        <td className="text-4xl">
                          {res.wallet_risk_score === "HIGH" ? "⚠️" : "🚀"}
                        </td>
                        <td className="flex justify-center">
                          <img
                            className="w-16 h-16 mt-4"
                            src={`https://avatars.dicebear.com/api/human/${res.wallet_id}.svg`}
                          />
                        </td>

                        <td className="px-6 py-4 whitespace-nowrap text-lg font-medium ">
                          {`${res.first_name} ${res.last_name}` != "null null"
                            ? `${res.first_name} ${res.last_name}`
                            : "No Name"}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-lg font-medium ">
                          {res.value}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-lg font-extrabold   truncate max-w-sm">
                          {res.ens_id}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-lg font-medium "></td>
                        <td className="px-6 py-4 whitespace-nowrap text-lg font-medium ">
                          <p
                            onClick={() => {
                              router.push(`/dashboard/${res.wallet_id}`);
                            }}
                            className="bg-purple-500 cursor-pointer rounded-2xl  text-black italic px-3 py-2"
                          >
                            see details
                          </p>
                        </td>
                      </tr>
                    ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default listResult;
