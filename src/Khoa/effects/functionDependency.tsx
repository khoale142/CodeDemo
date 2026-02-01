import { useEffect, useState } from "react";

function FunctionDependencyDemo() {
  const [count, setCount] = useState(0);

  const fetchData = () => {
    console.log("Fetch data, count =", count);
  };

  useEffect(() => {
    fetchData();
  }, [fetchData]); // ❌ function tạo mới mỗi render

  return (
    <div>
      <h2>Function Dependency Demo</h2>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Tăng count
      </button>
    </div>
  );
}

export default FunctionDependencyDemo;
