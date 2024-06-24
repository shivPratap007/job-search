import { useEffect, useState } from "react";
import Background from "./Background";
import Container from "./Container";
import Footer from "./Footer";
import Header from "./Header";


export type TjobItems={
  badgeLetters:string;
  company:string;
  daysAgo:number;
  id:number;
  relevanceScore:number;
  title:string;
}

function App() {
  const [jobItems, setJobItems] = useState<TjobItems[]>([]);
  const [searchText, setSearchText] = useState<string>("");
  const[isLoading,setIsLoading]=useState(false);

  useEffect(() => {
    if (!searchText) return;

    async function getData(): Promise<void> {
      setIsLoading(true);
      const data = await fetch(
        `https://bytegrad.com/course-assets/projects/rmtdev/api/data?search=${searchText}`
      );
      const result = await data.json();
      setJobItems(result.jobItems);
      setIsLoading(false);
    }
    getData();
  }, [searchText]);
  return (
    <>
      <Background />
      <Header searchText={searchText} setSearchText={setSearchText} />
      <Container jobItems={jobItems} isLoading={isLoading}/>
      <Footer />
    </>
  );
}

export default App;



