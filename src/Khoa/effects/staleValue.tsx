import { useEffect, useState } from "react";

function StaleValueDemo() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Effect chạy, count =", count);
  }, []); // ❌ thiếu count

  return (
    <div>
      <h2>Stale Value Demo</h2>
      <p>Count hiện tại: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Tăng count
      </button>
    </div>
  );
}

export default StaleValueDemo;
