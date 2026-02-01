import { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';

// Demo: useEffect với [color] = chạy khi color thay đổi
function Header() {
  const [color, setColor] = useState("red");

  useEffect(() => {
    console.log("🟠 useEffect[color] - Màu thay đổi: " + color);
  }, [color]); // Chạy khi color thay đổi

  return (
    <div>
      <h1>Màu: {color}</h1>
      <button onClick={() => setColor("yellow")}>Yellow</button>
      <button onClick={() => setColor("blue")}>Blue</button>
      <p>Mở Console (F12) để xem log</p>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')!).render(<Header />);