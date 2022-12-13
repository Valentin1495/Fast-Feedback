import Navbar from "../components/Navbar";
import Paid from "../components/Paid";
import useSWR from "swr";
import fetcher from "../utils/fetcher";

export default function Sites() {
  const { data, isLoading } = useSWR("/api/sites", fetcher);
  console.log(data);

  if (isLoading) {
    return "Loading...";
  }

  return (
    <div>
      <Navbar />
      <Paid />
    </div>
  );
}
