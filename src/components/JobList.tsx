import { TjobItems } from "./App";
import JobListItem from "./JobListItem";

export function JobList({jobItems}:{jobItems:TjobItems[]}) {
  return <ul className="job-list">
    {
      jobItems.map((jobItem:TjobItems)=><JobListItem jobItem={jobItem}/>)
    }
  </ul>;
}

export default JobList;
