import { useRouter } from "next/router";
const SearchResult = () => {
  const router = useRouter();
  const { sid } = router.query;
  const pid = router.asPath.split("/")[2];
  return <></>;
};
export default SearchResult;
