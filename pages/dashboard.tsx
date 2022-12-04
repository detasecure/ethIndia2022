import React, { useEffect, useState } from "react";
import Stats from "../components/dashboard/Stats";
import { useRouter } from "next/router";
import _data from "../components/dashboard/sample.json";
import Charts from "../components/dashboard/Charts";

import * as PushAPI from "@pushprotocol/restapi";
import { useAccount, useSigner } from "wagmi";
import { toast } from "react-toastify";

const dashboard = () => {
  const [loaded, setLoaded] = useState(false);
  const router = useRouter();
  const { address, isConnected } = useAccount();
  const { data: signer, isError, isLoading } = useSigner();

  useEffect(() => {
    setLoaded(true);
  }, []);
  async function optingIn() {
    await PushAPI.channels.subscribe({
      signer: signer,
      channelAddress: "eip155:5:0x3871501819066e22032493d3FDFfc540d71365f1", // channel address in CAIP
      userAddress: `eip155:5:${address}`, // user address in CAIP
      onSuccess: () => {
        console.log("opt in success");
        const notify = () =>
          toast("Subscribed Successfully!!!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        notify();
      },
      onError: () => {
        const notify = () =>
          toast("Oppsieeee there's soemthing wrong!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        notify();
      },
      env: "staging",
    });
  }
  return (
    <>
      <h1 className="my-4 font-bold text-6xl text-center">
        {_data.data.organization}
      </h1>
      <div className="flex justify-center my-6">
        <a href={"https://twitter.com/coinbase"}>
          <img
            className="w-10 h-10"
            src="https://img.freepik.com/free-icon/twitter_318-804659.jpg?t=st=1670098564~exp=1670099164~hmac=b40678e87b12d94a0fca4d68266d62b58a5d7f5525c014938d4b60eee23a6db9"
          />
        </a>
      </div>
      <div className="flex gap-4 my-5 justify-center">
        {" "}
        <div
          onClick={optingIn}
          className="rounded-xl bg-pink-400 px-5 py-3 cursor-pointer"
        >
          Subscribe with Push
        </div>
        <div
          onClick={() => {
            router.push("/list");
          }}
          className="rounded-xl bg-indigo-500 px-5 py-3 cursor-pointer"
        >
          {" "}
          See Details
        </div>
      </div>
      <div className="flex flex-col gap-4 items-center  h-screen ">
        {loaded ? <Stats /> : ""}
        {loaded ? <Charts /> : ""}
      </div>
    </>
  );
};

export default dashboard;
