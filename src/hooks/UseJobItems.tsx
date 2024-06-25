import { useState, useEffect } from "react";
import { TjobItems } from "../components/App";
import { BACKEND_URL } from "../lib/constants";
import UseDebounce from "./UseDebounce";

export default function UseJobItems(searchText: string) {
  const [jobItems, setJobItems] = useState<TjobItems[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const debounceText = UseDebounce(searchText, 500);

  const totalJobs = jobItems.length;

  const jobItemsSliced: TjobItems[] = jobItems.slice(0, 7);

  useEffect(() => {
    if (!debounceText) return;

    setIsLoading(true);

    async function getData(): Promise<void> {
      try {
        const response = await fetch(`${BACKEND_URL}?search=${debounceText}`);
        const result = await response.json();
        setJobItems(result.jobItems);
      } catch (error) {
        console.error("Error fetching job items:", error);
      } finally {
        setIsLoading(false);
      }
    }

    getData();
  }, [debounceText]);

  return { jobItemsSliced, isLoading, totalJobs } as const;
}
