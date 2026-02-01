import { useCallback, useEffect, useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [other, setOther] = useState(0);

  // ✅ useCallback: cố định reference của function
  const fetchData = useCallback(() => {
    console.log("fetch data, count =", count);
  }, [count]);

  // effect chỉ chạy khi fetchData thật sự thay đổi
  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <div style={{ padding: 20 }}>
      <h2>Slide 7 – useCallback Demo</h2>

      <p>Count (liên quan fetch): {count}</p>
      <p>Other state (không liên quan): {other}</p>

      <button onClick={() => setCount(count + 1)}>
        Tăng count
      </button>

      <button
        style={{ marginLeft: 10 }}
        onClick={() => setOther(other + 1)}
      >
        Tăng other
      </button>
    </div>
  );
}

export default App;
