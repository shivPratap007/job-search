import { TjobItems } from "./App";
import JobList from "./JobList";
import Pagination from "./PaginationControls";
import ResultsCount from "./ResultsCount";
import Sorting from "./SortingControls";

export default function Sidebar({
  jobItems,
  isLoading,
  totalJobs,
  isAllJobsError,
}: {
  jobItems: TjobItems[]|null|undefined;
  isLoading: boolean;
  totalJobs:number|undefined;
  isAllJobsError:boolean;
}) {
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <ResultsCount totalJobs={totalJobs} />
        <Sorting />
      </div>
      <JobList jobItems={jobItems} isLoading={isLoading} isAllJobsError={isAllJobsError} />
      <Pagination />
    </div>
  );
}
