import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Counter from './component/Counter.jsx'

const App = () => {
  return (
    <div>
      <h2 className='text-center'>Learn useReducer()</h2>
      <Counter/>
    </div>
  )
}

export default App