import { useState, useEffect } from "react";
import { TjobItems } from "../components/App";
import { BACKEND_URL } from "../lib/constants";

export default function UseJobItems(searchText: string) {
  const [jobItems, setJobItems] = useState<TjobItems[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const totalJobs = jobItems.length;

  const jobItemsSliced: TjobItems[] = jobItems.slice(0, 7);

  useEffect(() => {
    if (!searchText) return;

    const debouncingTimeout = setTimeout(getData, 1000);
    setIsLoading(true);

    async function getData(): Promise<void> {
      const data = await fetch(`${BACKEND_URL}?search=${searchText}`);
      const result = await data.json();
      setJobItems(result.jobItems);
      setIsLoading(false);
    }
    return () => clearTimeout(debouncingTimeout);
  }, [searchText]);

  return { jobItemsSliced, isLoading, totalJobs } as const;
}
