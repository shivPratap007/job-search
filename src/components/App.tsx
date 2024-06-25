import { useEffect, useState } from "react";
import Background from "./Background";
import Container from "./Container";
import Footer from "./Footer";
import Header from "./Header";
import UseJobItems from "../hooks/UseJobItems";
import UseActiveId from "../hooks/UseActiveId";

export type TjobItems = {
  badgeLetters: string;
  company: string;
  daysAgo: number;
  id: number;
  relevanceScore: number;
  title: string;
};

function App() {
  const [searchText, setSearchText] = useState<string>("");
  const [jobItemsSliced, isLoading] = UseJobItems(searchText);

  // FOR SELECTING JOB ITEMS AND SHOWING THE FULL DETAILS
  const activeId:string=UseActiveId();

  return (
    <>
      <Background />
      <Header searchText={searchText} setSearchText={setSearchText} />
      <Container jobItems={jobItemsSliced} isLoading={isLoading} />
      <Footer />
    </>
  );
}

export default App;
