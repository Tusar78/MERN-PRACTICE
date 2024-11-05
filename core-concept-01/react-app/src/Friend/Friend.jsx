import React from 'react'
import './Friend.css'

const Friend = ({friends: {name, age, major}}) => {

  return (
    <>
      <div className='friend'>
        <h2>Name: {name}</h2>
        <p>age: {age}</p>
        <p>Major: {major}</p>
        <button onClick={() => alert(name)}>Show Name</button>
      </div>
    </>
  )
}

export default Friend
