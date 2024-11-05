import React, { useState } from "react";
import Friend from "./Friend/Friend";

const App = () => {
  const friendsData = [
    { id: 1, name: "Aopo", age: 24, major: "Web" },
    { id: 2, name: "Salman", age: 24, major: "Graphics" },
    { id: 3, name: "Jannat", age: 24, major: "UI/UX" },
    { id: 4, name: "Asha", age: 24, major: "Networking" },
  ];

  const [count, setCount] = useState(0);
  const handleCount = () => {
    const newCount = count + 1;
    setCount(newCount);
  }

  const handleReduce = () => {
    setCount(count - 1)
  }
  return (
    <>
      <p>{count}</p>
      <button onClick={handleCount}>Add</button>
      <button onClick={handleReduce}>Reduce</button>

      <Friend
        friends={{ id: 1, name: "Tusar", age: 25, major: "WebDev" }}
      ></Friend>
      {friendsData.map((friend, id) => (
        <Friend friends={friend} key={id}></Friend>
      ))}
    </>
  );
};

export default App;
