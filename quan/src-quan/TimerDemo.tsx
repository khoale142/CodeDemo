import React, { useEffect, useState } from "react";

export function TimerDemo(): React.JSX.Element {
  const [sec, setSec] = useState<number>(0);

  useEffect(() => {
    const id: number = window.setInterval(() => {
      setSec((s) => s + 1);
    }, 1000);

    return () => window.clearInterval(id); // cleanup
  }, []);

  return <div>Seconds: {sec}</div>;
}
