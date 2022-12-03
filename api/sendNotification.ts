// import { ENS } from '@ensdomains/ensjs'
import * as PushAPI from "@pushprotocol/restapi";
import * as ethers from "ethers";

const PK = "aaa1408aea4810ca0c95b78bc2893fa1382b97d281c77aabcd43f19cc3fdbf74"; // channel private key
const Pkey = `0x${PK}`;
const signer = new ethers.Wallet(Pkey);

const sendNoti = async () => {
  try {
    const apiResponse = await PushAPI.payloads.sendNotification({
      signer,
      type: 3, // target
      identityType: 2, // direct payload
      notification: {
        title: `Test call`,
        body: `Push implemented successfully`,
      },
      payload: {
        title: `Push Successful`,
        body: `sample msg body`,
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

export default function sendNotification(req, res) {
  // fetchens()
  sendNoti();
  res.status(200).json({ name: "Rahat" });
}
