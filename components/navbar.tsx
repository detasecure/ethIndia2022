import { useConnect, useAccount } from "wagmi";
import { ConnectKitButton } from "connectkit";
import { useState } from "react";
import { useRouter } from "next/router";

export const Navbar: React.FC = () => {
  const { connect } = useConnect();
  const router = useRouter();
  const { address, isConnected, isConnecting, isDisconnected, isReconnecting } =
    useAccount();
  console.log(
    address,
    isConnected,
    isConnecting,
    isDisconnected,
    isReconnecting
  );

  const [userType, setUsertype] = useState<string>("");
  console.log(userType);
  return (
    <div className="flex justify-between p-3 text-3xl px-5  ">
      <div>_someText</div>
      <div>
        <div className="flex gap-5">
          {" "}
          <ConnectKitButton label="Connect as an Investor" />
          <ConnectKitButton
            label="Connect as a Company"
            key={"company"}
            onClick={() => {
              if (address) {
                router.push("company");
              }
            }}
          />
        </div>
        {/* {userType === "" ? <> </> : <ConnectKitButton />} */}
      </div>
    </div>
  );
};
