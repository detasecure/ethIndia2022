import { useRouter } from "next/router";
import { useAccount } from "wagmi";
import { ConnectKitButton } from "connectkit";
import Charts from "../components/Charts";
import { KeyboardEvent, useState } from "react";
export default function Home() {
  const [userState, setUserState] = useState("");
  const { address, isConnected, isConnecting, isDisconnected, isReconnecting } =
    useAccount();
  const router = useRouter();
  const [searchString, setSearchString] = useState<string>("");

  const handleSearch = () => {
    router.push({ pathname: "/search/[sid]", query: { sid: searchString } });
  };

  function handleKeyDown(e: KeyboardEvent) {
    if (e.key === "Enter") {
      handleSearch;
    }
  }

  return (
    <div className="h-[80vh] place-items-center grid overflow-hidden">
      <h1 className="inline text-5xl px-10 text-center font-sans">
        Here is some text that explains about out project. some good lines. and
        here is some{" "}
        <span className="font-mono italic font-bold animate-[loop_3s_linear_infinite] delay-75 text-5xl bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-violet-500 to-pink-500 bg-[200%] ">
          {" "}
          keyword explaination
        </span>{" "}
        and here goes some more text
      </h1>

      <div className=" flex flex-col gap-4">
        {isConnected ? (
          <div className="flex gap-4 text-lg items-center">
            <div
              className={` rounded-3xl px-12 py-6  text-3xl cursor-pointer  p-2 ${
                userState === "investor"
                  ? `bg-violet-500 `
                  : `opacity-50 bg-gray-500`
              }`}
              onClick={() => {
                setUserState("investor");
                router.push("/investor");
              }}
            >
              Investor
            </div>
            <div
              className={` rounded-3xl px-12 py-6  text-3xl cursor-pointer p-2 ${
                userState === "company"
                  ? `bg-violet-500`
                  : `opacity-50 bg-gray-500`
              }`}
              onClick={() => {
                setUserState("company");
                router.push("/company");
              }}
            >
              Company
            </div>
          </div>
        ) : null}
        <ConnectKitButton.Custom>
          {({ isConnected, isConnecting, show, hide, address, ensName }) => {
            return (
              <button
                onClick={show}
                className=" rounded-xl p-4 bg-indigo-500 font-semibold "
              >
                {isConnected ? address : "Connect Wallet"}
              </button>
            );
          }}
        </ConnectKitButton.Custom>

        {/* <ConnectKitButton
          label="Connet you Wallet"
          customTheme={"w-[300px]"}
          showAvatar
          showBalance
        /> */}
      </div>

      {/* <div className="flex gap-3 justify-center ">
        <input
          className="p-4 rounded-xl w-[50vw] border-0 outline-none placeholder:text-xl text-xl invalid:outline-red-300 "
          placeholder="Search for protocol name url. Example: https://polygon.technology"
          onChange={(e) => {
            setSearchString(e.target.value);
          }}
          value={searchString}
          onKeyDown={handleKeyDown}
        />
        <button
          className="bg-violet-500 px-5 rounded-xl text-xl"
          onClick={() => {
            handleSearch();
          }}
        >
          Search
        </button>
      </div> */}
    </div>
  );
}
