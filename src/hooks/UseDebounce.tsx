import { useEffect, useState } from "react";

export default function UseDebounce<T>(dString: T, time: number):T {
  const [text, setText] = useState<T>(dString);

  useEffect(() => {
    const debounce = setTimeout(() => {
      setText(dString);
    }, time);

    return () => clearTimeout(debounce);
  }, [dString, time]);

  return text;
}
