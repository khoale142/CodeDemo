import { useEffect, useState } from "react";

type User = {
  id: number;
  name: string;
};

const EffectBugDemo = () => {
  const [count, setCount] = useState<number>(0);
  const [userId, setUserId] = useState<number>(1);
  const [user, setUser] = useState<User | null>(null);

  const fetchUser = () => {
    console.log("Fetching user:", userId);
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then(res => res.json())
      .then(data => setUser(data));
  };

  useEffect(() => {
    console.log("Effect chạy, count =", count);

    if (count < 2) {
      setCount(count + 1);
    }

    fetchUser();
  }, []); // 👈 dependency rỗng

  return (
    <div>
      <h3>Effect Bug Demo</h3>

      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increase Count
      </button>

      <p>User ID: {userId}</p>
      <button onClick={() => setUserId(userId + 1)}>
        Next User
      </button>

      {user && <p>User: {user.name}</p>}
    </div>
  );
};

export default EffectBugDemo;
