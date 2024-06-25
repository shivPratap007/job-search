export default function ResultsCount({ totalJobs }: { totalJobs: number }) {
  return <p className="count"><span className="u-bold" >{totalJobs}</span> results</p>;
}
