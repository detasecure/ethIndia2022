import React from 'react'
import { useWeb3React } from "@web3-react/core";
import * as PushAPI from "@pushprotocol/restapi";
import { useAccount, useContract, useSigner } from 'wagmi'
import { toast } from 'react-toastify';

const OptIn = () => {
    const { address, isConnected } = useAccount()
    const { data: signer, isError, isLoading } = useSigner()

    console.log(address)
    async function optingIn() {
        await PushAPI.channels.subscribe({
            signer: signer,
            channelAddress: 'eip155:5:0x3871501819066e22032493d3FDFfc540d71365f1', // channel address in CAIP
            userAddress: `eip155:5:${address}`, // user address in CAIP
            onSuccess: () => {
             console.log('opt in success');
             const notify = () => toast("Subscribed Successfully!!!", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
            notify()
            },
            onError: () => {
                const notify = () => toast("Oppsieeee there's soemthing wrong!", {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    });
                notify()
            },
            env: 'staging'
          })
    }

  return (
    <div>
        <button onClick={optingIn} className=" bg-slate-700 text-white font-medium text-xl w-48 p-4 rounded-md">Subscribe</button>
    </div>
  )
}

export default OptIn