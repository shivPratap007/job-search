import {  useState } from "react";
import Background from "./Background";
import Container from "./Container";
import Footer from "./Footer";
import Header from "./Header";
import UseJobItems from "../hooks/UseJobItems";

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
  const { jobItems, isLoading } = UseJobItems(searchText);
  return (
    <>
      <Background />
      <Header searchText={searchText} setSearchText={setSearchText} />
      <Container jobItems={jobItems} isLoading={isLoading} />
      <Footer />
    </>
  );
}

export default App;
