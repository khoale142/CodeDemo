import React, { useEffect, useState } from "react";

export function ResizeDemo(): React.JSX.Element {
  const [w, setW] = useState<number>(() => window.innerWidth);

  useEffect(() => {
    const onResize = (): void => setW(window.innerWidth);

    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
    // cleanup
  }, []);

  return <div>Width: {w}px</div>;
}
