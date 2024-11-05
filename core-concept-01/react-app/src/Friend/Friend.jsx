import React from 'react'

const Friend = ({friends}) => {
    console.log(friends);
    
  return (
    <>
      <div>
        <h2>Name: {friends}</h2>
      </div>
    </>
  )
}

export default Friend
