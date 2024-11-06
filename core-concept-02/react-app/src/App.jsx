import "./App.css";
import { useEffect, useState } from "react";
import Users from "./Components/Users/Users";

function App() {
  // const [users, setUsers] = useState([]);
  // const [loading, setLoading] = useState(true);

  const [count, setCount] = useState(0);
  const [countt, setCountt] = useState(0);

  // useEffect(() => {
  //   setTimeout(() => {
  //     fetch("https://jsonplaceholder.typicode.com/users")
  //       .then((res) => {
  //         return res.json();
  //       })
  //       .then((data) => {
  //         setUsers(data);
  //         setLoading(false);
  //       });
  //   }, 1000);
  // }, []);

  const handleCount1 = () => {
    setCount((count) => count + 1);
  };

  const handleCount2 = () => {
    setCountt((countt) => countt + 1);
  };

  useEffect(() => {
    console.log("Rendering");
  }, [count]);
  return (
    <>
      {/* <Users users={users} loading={loading} /> */}

      {console.log("return")}

      <p>
        I am count one <span>{count}</span>{" "}
      </p>
      <p>
        I am count Two <span>{countt}</span>{" "}
      </p>

      <button onClick={handleCount1}>One +</button>
      <button onClick={handleCount2}>Two +</button>
    </>
  );
}

export default App;
