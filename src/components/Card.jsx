import React from 'react'
import { handleCompleteTodo, handleDeleteTodo } from '../helpers/todoHelpers'
import './Card.css'

// Card component representing a single todo item
const Card = ({ todo, setVersion }) => {
  return (
    <div className='card'> {/* Main card container */}
      
      {/* Left section: displays todo title and description */}
      <div className='card-text'>
        <h3>{todo.todos}</h3>
        <p>{todo.description}</p>
      </div>

      {/* Right section: contains delete button and either completed label or complete button */}
      <div className='button'>
        <button 
          className='delete' 
          onClick={() => handleDeleteTodo(todo.id, setVersion)}>❌</button>

        {
          todo.isCompleted ? (
            <p className='completed-label'>Completed</p> // Displayed if the task is completed
          ) : (
            <button className='complete' onClick={() => handleCompleteTodo(todo.id, setVersion)}>✔️</button>
          )
        }
      </div>

    </div>
  )
}

export default Card
