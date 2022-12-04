import { useConnect, useAccount } from "wagmi";
import { ConnectKitButton } from "connectkit";

import { useRouter } from "next/router";
import OptIn from "./OptIn";


  
export const Navbar: React.FC = () => {
  const router = useRouter();

  return (
    <div className="flex justify-between p-3 text-3xl px-5  ">
      {/* <div>Nicheeee</div> */}
      {/* <OptIn /> */}
      <div>Niche 🌱</div>
    </div>
  );
};
