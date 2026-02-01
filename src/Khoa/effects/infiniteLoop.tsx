import { useEffect, useState } from "react";

function InfiniteLoopDemo() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Effect chạy, count =", count);
    setCount(count + 1); // ❌ cập nhật state đang phụ thuộc
  }, [count]);

  return (
    <div>
      <h2>Infinite Loop Demo</h2>
      <p>Count: {count}</p>
    </div>
  );
}

export default InfiniteLoopDemo;
