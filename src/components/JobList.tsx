import UseActiveId from "../hooks/UseActiveId";
import { TjobItems } from "./App";
import JobListItem from "./JobListItem";
import Spinner from "./Spinner";

export function JobList({
  jobItems,
  isLoading,
  isAllJobsError,
}: {
  jobItems: TjobItems[]|undefined|null;
  isLoading: boolean;
  isAllJobsError:boolean
}) {
  const activeId = UseActiveId();
  if(!jobItems) return 
  console.log(isLoading,"===================")
  if(isAllJobsError) return 
  return (
    <ul className="job-list">
      {isLoading && <Spinner />}
      {!isLoading &&
        jobItems.map((jobItem: TjobItems) => (
          <JobListItem
            key={jobItem.id}
            jobItem={jobItem}
            isActive={jobItem.id === parseInt(activeId)}
          />
        ))}
    </ul>
  );
}

export default JobList;
