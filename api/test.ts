export default function test(req:any, res:any){
    console.log("Api hit successfully")
    res.status(200).json({Name: "Sudhanshu"})
}