import { useState } from "react";

export function RemoteApp() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>Remote App</h1>
      <div>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </div>
  );
}
