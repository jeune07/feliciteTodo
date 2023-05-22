import React from 'react'
import index from '../../../src/index.css'

const Form = () => {
  return (
    <>

      <form action="#" className='form'>
        <label htmlFor="title"></label>
        <input type="text" placeholder="Add a new task" className="inputTask" name='title' id='title'/>
        <label htmlFor="taskValue"></label>
        <textarea type="textarea" placeholder="Add a new task" className="inputTask" id='taskValue' name='taskValue'/>
       
      </form>
      <button type='button' id='add'>Add</button>
      <button type='button'id='delete'>Delete</button>
      <div>
        <ul id='list'>
          <li>Task 1</li>
          <li>Task 2</li>
          <li>Task 3</li>
          <li>Task 2</li>
          <li>Task 3</li>
          <li>Task 2</li>
          <li>Task 3</li>
        </ul>
      </div>
    </>
  )
}

export default Form