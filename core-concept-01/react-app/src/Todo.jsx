import React from 'react'

const Todo = ({task, isDone}) => {
    return(
        // isDone ? <li>Complete: {task}</li> : <li>Work On: {task}</li>
        // <li>
        //     {isDone ? 'Complete' : 'Workon'}
        // </li>

        // <li>{task} {isDone && ': Done'}</li>
        <li>{task} {isDone || ': Do it'}</li>
    )    
}

export default Todo
