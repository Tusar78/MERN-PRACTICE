import React, { useEffect, useState } from 'react'
import './Users.css'

const Users = () => {
    const [user, setUser] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(res => res.json())
            .then(data => setUser(data))
    }, [])
  return (
    <div>
      <li>users: {user.length}</li>
    </div>
  )
}

export default Users
