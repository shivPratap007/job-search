import { TjobItems } from "./App";
import JobItemContent from "./JobItemContent";
import Sidebar from "./Sidebar";

export default function Container({
  jobItems,
  isLoading,
}: {
  jobItems: TjobItems[];
  isLoading: boolean;
}) {
  return (
    <div className="container">
      <Sidebar jobItems={jobItems} isLoading={isLoading} />
      <JobItemContent />
    </div>
  );
}
