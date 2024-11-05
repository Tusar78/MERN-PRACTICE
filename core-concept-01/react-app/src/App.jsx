import React from 'react'
import Friend from './Friend/Friend'

const App = () => {
  const friends = ['Aopo', 'Salman', 'Jannat', 'Asha']
  return (
    <>
      {friends.map(friend => <Friend friends={friend}></Friend>)}
    </>
  )
}

export default App
