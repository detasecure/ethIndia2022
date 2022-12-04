import * as PushAPI from "@pushprotocol/restapi";
import * as ethers from "ethers";
import { toast } from "react-toastify";

const PK = "aaa1408aea4810ca0c95b78bc2893fa1382b97d281c77aabcd43f19cc3fdbf74"; // channel private key
const Pkey = `0x${PK}`;
const signer = new ethers.Wallet(Pkey);

const sendNoti = async (data) => {
  try {
    const apiResponse = await PushAPI.payloads.sendNotification({
      signer,
      type: 3, // target
      identityType: 2, // direct payload
      notification: {
        title: data.title,
        body: data.body,
      },
      payload: {
        title: data.paytitle,
        body: data.paybody,
        cta: "",
        img: "",
      },
      recipients: "eip155:5:0x3871501819066e22032493d3FDFfc540d71365f1", // recipient address
      channel: "eip155:5:0x3871501819066e22032493d3FDFfc540d71365f1", // your channel address
      env: "staging",
    });
    console.log("API repsonse: ", apiResponse);
    const notify = () => toast("Notification Sent Successfully!", {
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
  } catch (err) {
    console.error("Error: ", err);
  }
};

// sendNoti();

const handleSubmit = async (event) => {
event.preventDefault()

const data = {
    title: event.target.title.value,
    body: event.target.body.value,
    paytitle: event.target.paytitle.value,
    paybody: event.target.paybody.value
}

console.log(data)

sendNoti(data)
}

export default function SendNotification() {
    return(
        <div className="">
            <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-md p-4 border-4 rounded-md text-left mx-auto mt-12">
                <label htmlFor="title" className="text-xl font-medium ">Notification Title</label>
                <input type="text" id="title" name="title" required className="border-2 p-2 text-slate-500"/>

                <label htmlFor="body" className="text-xl font-medium ">Notification Body</label>
                <input type="text" id="body" name="body" required className="border-2 p-2 text-slate-500"/>

                <label htmlFor="paytitle" className="text-xl font-medium ">Payload Title</label>
                <input type="text" id="paytitle" name="paytitle" required className="border-2 p-2 text-slate-500"/>

                <label htmlFor="paybody" className="text-xl font-medium ">Payload Body</label>
                <input type="text" id="paybody" name="paybody" required className="border-2 p-2 text-slate-500"/>

                <button type="submit" className="bg-slate-700 text-white  rounded-md p-4 text-center text-xl mt-4 w-full ">Send Notification</button>
            </form>
        </div>
    )
}
