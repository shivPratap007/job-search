import { TjobItems } from "./App";
import JobItemContent from "./JobItemContent";
import Sidebar from "./Sidebar";

export default function Container({jobItems}:{jobItems:TjobItems[]}) {
  return <div className="container">
    <Sidebar jobItems={jobItems} />
    <JobItemContent />
  </div>;
}
