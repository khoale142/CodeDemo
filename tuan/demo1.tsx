import { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';

// Demo: useEffect với [] = componentDidMount (chạy 1 lần khi mount)
function Header() {
  const [color, setColor] = useState("red");

  useEffect(() => {
    console.log("🟢 useEffect[] - Component đã mount");
    setTimeout(() => setColor("yellow"), 1000);
  }, []); // [] = chỉ chạy 1 lần khi mount

  return <h1>Màu: {color}</h1>;
}

ReactDOM.createRoot(document.getElementById('root')!).render(<Header />);