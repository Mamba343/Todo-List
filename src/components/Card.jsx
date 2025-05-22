import React from 'react'
import { handleCompleteTodo, handleDeleteTodo } from '../helpers/todoHelpers'
import './Card.css'

const Card = ({ todo, setVersion }) => {
  return (
    <div className='card'>
      <div className='card-text'>
        <h3>{todo.todos}</h3>
        <p>{todo.description}</p>
      </div>
      <div className='button'>
        <button className='delete' onClick={() => handleDeleteTodo(todo.id, setVersion)}>❌</button>
        {
          todo.isCompleted ? (
            <p className='completed-label'>Completed</p>
          ) : (
            <button className='complete' onClick={() => handleCompleteTodo(todo.id, setVersion)}>✔️</button>
          )
        }
      </div>
    </div>
  )
}

export default Card
