export default function ResultsCount({
  totalJobs,
}: {
  totalJobs: number | undefined;
}) {
  return (
    <p className="count">
      <span className="u-bold">{!totalJobs ? "0" : totalJobs}</span> results
    </p>
  );
}
