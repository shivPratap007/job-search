import { useState, useEffect } from "react";
import { TjobItem } from "../components/App";
import { BACKEND_URL } from "../lib/constants";

export default function UseJobItem(activeId: string):[jobItem:null|TjobItem,jobLoading:boolean] {
  const [jobItem, setJobItem] = useState<TjobItem | null>(null);
  const [jobLoading, setJobLoading] = useState(false);
  useEffect(() => {
    if (!activeId) return;

    async function fetchJob() {
      setJobLoading(true);
      try {
        const res = await fetch(`${BACKEND_URL}/${activeId}`);
        const job = await res.json();
        setJobItem(job.jobItem);
        setJobLoading(false);
      } catch (error) {
        console.error("Error fetching job item:", error);
        setJobItem(null);
        setJobLoading(true);
      }
    }

    fetchJob();
  }, [activeId]);

  return [jobItem,jobLoading];
}
