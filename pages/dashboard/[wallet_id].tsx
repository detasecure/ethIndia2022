import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const details = () => {
    const [balance, setBalance] = useState(null);
  
  console.log("Path reached");
  console.log(wallet_id);
  useEffect(() => {

      
    }, [])
  return (
    <div className="flex flex-col">
        <div className="border-4 rounded-md max-w-md text-center">
            <h2 className="text-3xl font-medium">Wallet Address</h2>
            <p>{wallet_id}</p>
        </div>
        <div className="border-4 rounded-md max-w-md text-center">
            <h2 className="text-3xl font-medium">Balance (in ETH)</h2>
            <p>{balance ? (balance/10**18) : "Fetching...."}</p>
        </div>
    </div>
    );
};

export async function getServerSideProps() {
    const router = useRouter();
    var response;
  const { wallet_id } = router.query;
  try{
    if(wallet_id)    
    fetch(
        `https://api.covalenthq.com/v1/1/address/${wallet_id}/balances_v2/?key=ckey_4bfe30fcda54495da7e3304adfb`
        )
        .then((res) => {response = res.json()})
        console.log(response)
      }
      catch(e){
          console.log(e)
      }
    return {
      props: {}, // will be passed to the page component as props
    }
  }


export default details;