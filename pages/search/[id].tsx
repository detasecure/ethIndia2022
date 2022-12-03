import { useRouter } from "next/router";
const SearchResult = () => {
  const router = useRouter();
  const { sid } = router.query;
  const pid = router.asPath.split("/")[2];
  return (
    <div className="text-white p-10">
      <h1 className="text-3xl text-center ">{mockdata.search_query}</h1>
      <div className="flex gap-10 w-full mt-10 text-xl font-bold">
        <div className="w-full flex rounded-lg bg-slate-900 px-[50px] py-[30px]">
          <div>
            <img src="./accoun.svg" />
          </div>
          <div className="flex flex-col">
            <p>total acc fetched</p>
            <p> {mockdata.toatal_acc}</p>
          </div>
        </div>{" "}
        <div className="w-full flex rounded-lg bg-slate-900 px-[50px] py-[30px]">
          <div>icon</div>
          <div className="flex flex-col">
            <p>total addr fetched</p>
            <p> {mockdata.total_addr}</p>
          </div>
        </div>{" "}
        <div className="w-full flex rounded-lg bg-slate-900 px-[50px] py-[30px]">
          <div className="h-full">icon</div>
          <div className="flex flex-col h-full">
            <p>total ricky acc</p>
            <p> {mockdata.total_ricky}</p>
          </div>
        </div>{" "}
      </div>
    </div>
  );
};
export default SearchResult;

const mockdata = {
  search_query: "domain_name",
  twitter: "www.twitter.com/0xpolygon",
  toatal_acc: 40,
  total_addr: 30,
  total_ricky: 12,
  results: [
    {
      name: "John Doe",
      email: "john.doe@gmail.com",
      ens_name: "somethig.eth",
      wallet_address: "blah",
      risk_category: "high",
    },
    {
      name: "John Doe",
      email: "john.doe@gmail.com",
      ens_name: "somethig.eth",
      wallet_address: "blah",
      risk_category: "medium",
    },
    {
      name: "John Doe",
      email: "john.doe@gmail.com",
      ens_name: "somethig.eth",
      wallet_address: "blah",
      risk_category: "medium",
    },
    {
      name: "John Doe",
      email: "john.doe@gmail.com",
      ens_name: "",
      wallet_address: "",
      risk_category: "medium",
    },
    {
      name: "John Doe",
      email: "john.doe@gmail.com",
      ens_name: "somethig.eth",
      wallet_address: "blah",
      risk_category: "medium",
    },
  ],
};
