import * as PushAPI from "@pushprotocol/restapi";
import * as ethers from "ethers";

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
        <div>
            <form onSubmit={handleSubmit} className="flex flex-col gap-2 max-w-md">
                <label htmlFor="title">Notification Title</label>
                <input type="text" id="title" name="title" required />

                <label htmlFor="body">Notification Body</label>
                <input type="text" id="body" name="body" required />

                <label htmlFor="paytitle">Payload Title</label>
                <input type="text" id="paytitle" name="paytitle" required />

                <label htmlFor="paybody">Payload Body</label>
                <input type="text" id="paybody" name="paybody" required />

                <button type="submit" className="bg-slate-700 text-white w-48 rounded-md p-4">Send Notification</button>
            </form>
        </div>
    )
}
