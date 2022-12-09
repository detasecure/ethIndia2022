const {IdrissCrypto, Authorization} = require("idriss-crypto");
const idriss = new IdrissCrypto();

const fwdLookup = async(data)=>{
  const result = await idriss.resolve(data);
  return result
};

const revLookup = async(data)=>{
  const reverse = await idriss.reverseResolve(data);
  return reverse;
};


const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({
	extended: true
}));
app.use(express.static("public"));


// Fetching a specific employee
app.get("/search/fwd/:social_data", function(req, res) {
  email = 'hello@idriss.xyz'
  try {
    fwdLookup(req.params.social_data)
      .then((DATA)=>
        res.json({
      "search_query": req.params.social_data,
      "results": DATA}));
  }
  catch(error) {
    console.log(error);
    res.json({
      "search_query": req.params.social_data,
      "results": "ERROR HAPPENED"});
  }
});


app.listen(3000, function() {
	console.log("Server started on port 3000");
});

// const emailList = ['hello@idriss.xyz','hello@sdf.xyz','hello@idriss.xyz','hello@idriss.xyz']
// emailList.map((email)=>{fwdLookup(email).then((DATA)=>console.log(DATA))})
// console.log(await revLookup("0x995945Fb74e0f8e345b3f35472c3e07202Eb38Ac"))
