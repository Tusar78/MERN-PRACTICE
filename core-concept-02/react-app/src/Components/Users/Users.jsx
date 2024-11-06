import React from 'react'
import './Users.css'

const Users = ({users, loading}) => {
    console.log(loading);
    
  return (
    <div>
      {
        users.length
      } 
      
    </div>
  )
}


export default Users
