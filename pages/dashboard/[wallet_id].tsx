//@ts-ignore
import { NextPage } from "next";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";

const Wallet_Details: React.FC = () => {
  const [data, setData] = useState([]);
  const [load, setLoad] = useState(false);
  const router = useRouter();
  const { wallet_id } = router.query;
  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://api.covalenthq.com/v1/1/address/${wallet_id}/balances_v2/?key=ckey_4bfe30fcda54495da7e3304adfb`
      );

      setData(response?.data.data.items);
      console.log(response?.data.data.items);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    if (wallet_id) {
      fetchData();
    }
  }, [wallet_id]);
  return (
    <div>
      <div className="flex flex-col items-center gap-6 justify-center">
        <img
          className="w-44 h-44"
          src={`https://avatars.dicebear.com/api/human/${wallet_id}.svg`}
        />
        <h1 className="text-4xl text-orange-500  font-bold font-mono ">
          {wallet_id}
        </h1>
      </div>
      <div>
        {data.length != 0 ? (
          <div className="flex flex-col my-6 items-center">
            <h1 className="text-5xl font-bold">Holding Details</h1>
            <div className=" flex gap-4 flex-wrap m-5">
              {data?.map((i, index) => {
                return (
                  <div className="bg-gray-900 hover:bg-gray-700 w-min-[400px] flex items-center gap-10  mt-6 p-4 ">
                    <img className="h-28 w-28" src={i?.logo_url}></img>
                    <div>
                      {" "}
                      <h1 className="text-2xl font-bold mt-3">
                        {" "}
                        {i?.contract_name}
                      </h1>
                      <h1>
                        {i?.balance / 10 ** i?.contract_decimals}{" "}
                        {i?.contract_ticker_symbol}
                      </h1>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ) : (
          <div className="flex justify-center">
            <svg
              className="inline mr-2 w-20 h-20 text-gray-200 animate-spin  fill-black mt-20"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
              />
            </svg>
            <span className="sr-only">Loading...</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Wallet_Details;
