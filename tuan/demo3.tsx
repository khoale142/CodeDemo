import { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';

// Demo: useEffect return = cleanup (componentWillUnmount)
function Message() {
  useEffect(() => {
    console.log("🟢 Mount - Component đã mount");
    
    return () => {
      console.log("🔴 Cleanup - Component sắp unmount!");
    };
  }, []);

  return <h1>Hello World!</h1>;
}

function App() {
  const [show, setShow] = useState(true);

  return (
    <div>
      {show && <Message />}
      <button onClick={() => setShow(false)}>Unmount</button>
      <button onClick={() => setShow(true)}>Mount</button>
      <p>Mở Console (F12) để xem log</p>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')!).render(<App />);