import { TjobItem, TjobItems } from "./App";
import JobItemContent from "./JobItemContent";
import Sidebar from "./Sidebar";

export default function Container({
  jobItems,
  isLoading,
  jobItem,
  jobLoading
}: {
  jobItems: TjobItems[];
  isLoading: boolean;
  jobItem: TjobItem|null ;
  jobLoading:boolean;
}) {
  return (
    <div className="container">
      <Sidebar jobItems={jobItems} isLoading={isLoading} />
      <JobItemContent jobItem={jobItem} jobLoading={jobLoading} />
    </div>
  );
}
