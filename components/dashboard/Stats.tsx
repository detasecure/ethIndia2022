import React from "react";

const Stats = () => {
  return (
    <div className="flex  gap-6 w-full justify-center ]">
      {/* <!-- Tile 1 --> */}
      <div className="flex items-center p-4  rounded-xl bg-gray-900 mix-blend-lighten shadow-xl shadow-cyan-500/30 w-[400px] ">
        <div className="flex flex-shrink-0 items-center justify-center  h-16 w-16 rounded">
          <img
            src={
              "https://img.freepik.com/free-icon/user_318-928335.jpg?t=st=1670090890~exp=1670091490~hmac=be67c1f2b5827acf7f68055f6e60fdb36f175e184c47a263449f39eec4d20729"
            }
          />
        </div>
        <div className="flex-grow flex flex-col ml-4">
          <span className="text-2xl font-bold">Total Accounts Retrived</span>
          <span className="text-indigo-500 text-2xl	font-bold  ">1000</span>
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
          <span className="text-indigo-500 text-2xl	font-bold  ">400</span>
        </div>
      </div>

      <div className="flex items-center p-4  rounded-xl bg-gray-900 mix-blend-lighten shadow-xl shadow-cyan-500/30 w-[400px] ">
        <div className="flex flex-shrink-0 items-center justify-center  h-16 w-16 rounded">
          <img src={"./account.svg"} />
        </div>
        <div className="flex-grow flex flex-col ml-4">
          <span className="text-2xl font-bold">Sus Accounts</span>
          <span className="text-indigo-500 text-2xl	font-bold  ">20</span>
        </div>
      </div>

      <div className="flex items-center p-4  rounded-xl bg-gray-900 mix-blend-lighten shadow-xl shadow-cyan-500/30 w-[400px] ">
        <div className="flex flex-shrink-0 items-center justify-center  h-16 w-16 rounded">
          <img src={"./account.svg"} />
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
