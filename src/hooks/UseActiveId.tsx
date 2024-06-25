import { useState, useEffect } from "react";

export default function UseActiveId():string {
  const [activeId, setActiveId] = useState<string>("");
  useEffect(() => {
    const handleHashChange = () => {
      const id = window.location.hash.slice(1);
      setActiveId(id);
    };
    handleHashChange();
    window.addEventListener("hashchange", handleHashChange);
    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);
  return activeId ;
}
