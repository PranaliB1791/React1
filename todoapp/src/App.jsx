import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Todo from './comp/todo'

const App = () => {
  return (
    <div>
      <h2 className='text-center'>Todo App</h2>
      <Todo/>
    
    </div>
  )
}

export default App