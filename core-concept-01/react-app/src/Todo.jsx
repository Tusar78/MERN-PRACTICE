import React from 'react'

const Todo = ({task, isDone}) => {
    console.log(task, isDone);
    
  if (isDone) {
    return <li>Complete: {task}</li>
  } else {
    return <li>Work On: {task}</li>
  }
}

export default Todo
