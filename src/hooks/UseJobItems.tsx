import { TjobItems } from "../components/App";
import { BACKEND_URL } from "../lib/constants";
import UseDebounce from "./UseDebounce";
import { useQuery } from "react-query";

export default function UseJobItems(searchText: string) {
  const debounceText = UseDebounce(searchText, 500);

  async function fetchData(): Promise<TjobItems[] | null> {
    try {
      const response = await fetch(`${BACKEND_URL}?search=${debounceText}`);
      if (!response.ok) {
        throw new Error("Data not found");
      }
      const result = await response.json();
      return result.jobItems;
    } catch (err) {
      const error = err as Error;
      console.error("Error fetching job items:", error);
      throw new Error(error.message);
    }
  }

  const { data, isFetching, isError } = useQuery(
    ["jobs", debounceText],
    () => fetchData(),
    {
      staleTime: 1000 * 60 * 60,
      refetchOnWindowFocus: false,
      retry: false,
      enabled: !!searchText,
      onError: (error) => {
        console.log(error);
      },
    }
  );
  const totalJobs = data?.length;

  return {
    jobItems: data,
    isLoading:isFetching,
    totalJobs,
    isAllJobsError: isError,
  } as const;
}
