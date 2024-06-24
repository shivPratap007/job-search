import { TjobItems } from "./App";
import JobListItem from "./JobListItem";
import Spinner from "./Spinner";

export function JobList({
  jobItems,
  isLoading,
}: {
  jobItems: TjobItems[];
  isLoading: boolean;
}) {
  return (
    <ul className="job-list">
      {isLoading && <Spinner />}
      {!isLoading &&
        jobItems.map((jobItem: TjobItems) => <JobListItem jobItem={jobItem} />)}
    </ul>
  );
}

export default JobList;
