import { useConnect, useAccount } from "wagmi";
import { ConnectKitButton } from "connectkit";

import { useRouter } from "next/router";

const handleOnClick = async () => {
  try{
    const res = await fetch('/api/optin')
    const data = await res.json()
    console.log(data)
      }
      catch(e){

      }
    }
  
export const Navbar: React.FC = () => {
  const router = useRouter();

  return (
    <div className="flex justify-between p-3 text-3xl px-5  ">
      <div>Nicheeee</div>
      <button onClick={handleOnClick}>Subercribe</button>
    </div>
  );
};
