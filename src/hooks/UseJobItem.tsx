import { useState, useEffect } from "react";
import { TjobItem } from "../components/App";
import { BACKEND_URL } from "../lib/constants";

export default function UseJobItem(activeId: string): TjobItem[] | null {
  const [jobItem, setJobItem] = useState<TjobItem[] | null>(null);

  useEffect(() => {
    if (!activeId) return;

    async function fetchJob() {
      try {
        const res = await fetch(`${BACKEND_URL}/${activeId}`);
        const job = await res.json();
        console.log(job);
        setJobItem(job.jobItem);
      } catch (error) {
        console.error("Error fetching job item:", error);
        setJobItem(null);
      }
    }

    fetchJob();
  }, [activeId]);

  return jobItem;
}
