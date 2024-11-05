import React from 'react'
import './Friend.css'

const Friend = ({friends: {name, age, major}}) => {

  return (
    <>
      <div className='friend'>
        <h2>Name: {name}</h2>
        <p>Name: {age}</p>
        <p>Name: {major}</p>
      </div>
    </>
  )
}

export default Friend
