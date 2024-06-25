import { TjobItem, TjobItems } from "./App";
import JobItemContent from "./JobItemContent";
import Sidebar from "./Sidebar";

export default function Container({
  jobItems,
  isLoading,
  jobItem,
  jobLoading,
  totalJobs,
  isError,
  isAllJobsError
}: {
  jobItems: TjobItems[]|null|undefined;
  isLoading: boolean;
  jobItem: TjobItem|null|undefined ;
  jobLoading:boolean;
  totalJobs:number | undefined;
  isError:boolean;
  isAllJobsError:boolean
}) {
  return (
    <div className="container">
      <Sidebar totalJobs={totalJobs} jobItems={jobItems} isLoading={isLoading} isAllJobsError={isAllJobsError} />
      <JobItemContent jobItem={jobItem} jobLoading={jobLoading} isError={isError} />
    </div>
  );
}
