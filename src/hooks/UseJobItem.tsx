import { TjobItem } from "../components/App";
import { BACKEND_URL } from "../lib/constants";
import { useQuery } from "react-query";

export default function UseJobItem(activeId: string) {
  const fetchData = async (activeId: string): Promise<TjobItem | null> => {
    try {
      const res = await fetch(`${BACKEND_URL}/${activeId}`);
      if(!res.ok){
        const error=await res.json();
        throw new Error(error.description);
      }
      const job = await res.json();
      return job.jobItem;
    } catch (e) {
      throw new Error("Data is not fetched");
    }
  };

  const { data, isLoading,isError } = useQuery(
    ["job-item", activeId],
    () => (activeId ? fetchData(activeId) : null),
    {
      staleTime: 1000 * 60 * 60,
      refetchOnWindowFocus: false,
      retry: false,
      enabled: !!activeId,
      onError: (error) => {console.log(error)},
    }
  );
  return { jobItem: data, jobLoading: isLoading,isError };
}
