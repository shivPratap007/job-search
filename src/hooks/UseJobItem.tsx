import { BACKEND_URL } from "../lib/constants";
import { useQuery } from "react-query";

export default function UseJobItem(activeId: string) {
  
  const { data, isLoading } = useQuery(["job-item", activeId], async () => {
    const res = await fetch(`${BACKEND_URL}/${activeId}`);
    const job = await res.json();
    return job.jobItem;
  },{
    staleTime:1000*60*60,
    refetchOnWindowFocus:false,
    retry:false,
    enabled:!!activeId,
    onError:()=>{},
  });
  console.log(data);
  return {jobItem:data, jobLoading:isLoading}
}
