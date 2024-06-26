import { useState } from "react";
import Background from "./Background";
import Container from "./Container";
import Footer from "./Footer";
import Header from "./Header";
import UseJobItems from "../hooks/UseJobItems";
import UseActiveId from "../hooks/UseActiveId";
import UseJobItem from "../hooks/UseJobItem";

export type TjobItems = {
  badgeLetters: string;
  company: string;
  daysAgo: number;
  id: number;
  relevanceScore: number;
  title: string;
};

export type TjobItem = {
  id: number;
  description: string;
  qualifications: string[];
  reviews: string[];
  title: string;
  badgeLetters: string;
  company: string;
  duration: string;
  salary: string;
  location: string;
  relevanceScore: number;
  daysAgo: number;
  coverImgURL: string;
  companyURL: string;
};

function App() {
  const [searchText, setSearchText] = useState<string>("");
  // TO GET JOBS BASED ON SEARCH
  const { jobItems, isLoading, totalJobs,isAllJobsError } = UseJobItems(searchText);

  // FOR SELECTING JOB ITEMS FROM ROUTE
  const activeId: string = UseActiveId();
  // GETTING THE JOB OF SELECTED ID
  const { jobItem, jobLoading,isError } = UseJobItem(activeId);

  return (
    <>
      <Background />
      <Header searchText={searchText} setSearchText={setSearchText} />
      <Container
        totalJobs={totalJobs}
        jobItems={jobItems}
        isLoading={isLoading}
        jobItem={jobItem}
        jobLoading={jobLoading}
        isError={isError}
        isAllJobsError={isAllJobsError}
      />
      <Footer />
    </>
  );
}

export default App;
