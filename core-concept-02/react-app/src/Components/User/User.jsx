import React from 'react'
import './user.css'

const User = ({user}) => {
    console.log(user);    
    
    return (
    <div className='user-item'>
      <h2>{user.name}</h2>
      {/* <p>- {user.website}</p> */}
    </div>
  )
}

export default User
