import { useEffect, useState, type JSX } from "react";

export function TitleDemo(): JSX.Element {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    document.title = `Cart: ${count}`;
  }, [count]);

  return (
    <button onClick={() => setCount((c) => c + 1)}>
      +1 ({count})
    </button>
  );
}
