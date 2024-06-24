import { useState, useEffect } from "react";
import { TjobItems } from "../components/App";

export default function UseJobItems(searchText:string) {
  const [jobItems, setJobItems] = useState<TjobItems[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!searchText) return;

    async function getData(): Promise<void> {
      setIsLoading(true);
      const data = await fetch(
        `https://bytegrad.com/course-assets/projects/rmtdev/api/data?search=${searchText}`
      );
      const result = await data.json();
      setJobItems(result.jobItems);
      setIsLoading(false);
    }
    getData();
  }, [searchText]);
  return {
    jobItems,
    isLoading
  };
}
