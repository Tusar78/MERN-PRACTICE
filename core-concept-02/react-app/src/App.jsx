import viteLogo from '/vite.svg'
import './App.css'
import { useEffect, useState } from 'react'
import Users from './Components/Users/Users';

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => {
        return res.json();
      })
      .then(data => {
        setUsers(data);
        setLoading(false);
      })
  }, [])

  return (
    <>
      <Users users={users} loading={loading} />
    </>
  )
}

export default App
