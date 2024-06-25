import UseActiveId from "../hooks/UseActiveId";
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
  const activeId = UseActiveId();
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
