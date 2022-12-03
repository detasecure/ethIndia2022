import React from "react";
import Data from "./sample.json";

const Stats = () => {
  return (
    <div className="flex  gap-6 w-full justify-center ]">
      {/* <!-- Tile 1 --> */}
      <div className="flex items-center p-4 py-10  rounded-xl bg-gray-900 mix-blend-lighten shadow-xl shadow-cyan-500/30 w-[400px] ">
        <div className="flex flex-shrink-0 items-center justify-center  h-16 w-16 rounded">
          <img
            src={
              "https://img.freepik.com/free-icon/user_318-928335.jpg?t=st=1670090890~exp=1670091490~hmac=be67c1f2b5827acf7f68055f6e60fdb36f175e184c47a263449f39eec4d20729"
            }
          />
        </div>
        <div className="flex-grow flex flex-col ml-4">
          <span className="text-2xl font-bold">Total Accounts Retrived</span>
          <span className="text-indigo-500 text-2xl	font-bold  ">
            {Data.meta.results}
          </span>
        </div>
      </div>

      {/* <!-- Tile 2 --> */}
      <div className="flex items-center p-4  rounded-xl bg-gray-900 mix-blend-lighten shadow-xl shadow-cyan-500/30 w-[400px] ">
        <div className="flex flex-shrink-0 items-center justify-center  h-16 w-16 rounded">
          <img
            src={
              "https://img.freepik.com/free-icon/bitcoin_318-937535.jpg?t=st=1670091060~exp=1670091660~hmac=6241a45a4b84d1c15461db4bb0f7b61862f7ec07232ef5e96edcba7fd9a28d17"
            }
          />
        </div>
        <div className="flex-grow flex flex-col ml-4">
          <span className="text-2xl font-bold">Total Addresses Retrived</span>
          <span className="text-indigo-500 text-2xl	font-bold  ">
            {Data.meta.results}
          </span>
        </div>
      </div>

      <div className="flex items-center p-4  rounded-xl bg-gray-900 mix-blend-lighten shadow-xl shadow-cyan-500/30 w-[400px] ">
        <div className="flex flex-shrink-0 items-center justify-center  h-16 w-16 rounded">
          <img
            src={
              "https://img.freepik.com/free-icon/wallet_318-937553.jpg?t=st=1670099267~exp=1670099867~hmac=404aa0babae4167ab33aa79646d2a0b001a243bd67dafdc83e21b316b415291c"
            }
          />
        </div>
        <div className="flex-grow flex flex-col ml-4">
          <span className="text-2xl font-bold"> Accounts at Risk</span>
          <span className="text-indigo-500 text-2xl	font-bold  ">
            {Data.meta.high_risk_wallet_count}
          </span>
        </div>
      </div>

      <div className="flex items-center p-4  rounded-xl bg-gray-900 mix-blend-lighten shadow-xl shadow-cyan-500/30 w-[400px] ">
        <div className="flex flex-shrink-0 items-center justify-center  h-16 w-16 rounded">
          <img
            src={
              "https://img.freepik.com/free-icon/poison_318-837480.jpg?t=st=1670099344~exp=1670099944~hmac=cc657bd143ecd8071d158b9f6d6475512fc935ce4b933412c46747715437e865"
            }
          />
        </div>
        <div className="flex-grow flex flex-col ml-4">
          <span className="text-2xl font-bold">Sus Addresses</span>
          <span className="text-indigo-500 text-2xl	font-bold  ">18</span>
        </div>
      </div>
    </div>
  );
};

export default Stats;
