import { TjobItem, TjobItems } from "./App";
import JobItemContent from "./JobItemContent";
import Sidebar from "./Sidebar";

export default function Container({
  jobItems,
  isLoading,
  jobItem,
  jobLoading,
  totalJobs,
}: {
  jobItems: TjobItems[];
  isLoading: boolean;
  jobItem: TjobItem|null ;
  jobLoading:boolean;
  totalJobs:number;
}) {
  return (
    <div className="container">
      <Sidebar totalJobs={totalJobs} jobItems={jobItems} isLoading={isLoading} />
      <JobItemContent jobItem={jobItem} jobLoading={jobLoading} />
    </div>
  );
}
