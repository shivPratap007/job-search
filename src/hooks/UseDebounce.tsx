import { useEffect, useState } from "react";

export default function UseDebounce(dString: string, time: number) {
  const [text, setText] = useState(dString);

  useEffect(() => {
    const debounce = setTimeout(() => {
      setText(dString);
    }, time);

    return () => clearTimeout(debounce);
  }, [dString, time]);

  return text;
}
