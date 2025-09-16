import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
//import Counter from './component/Counter'
//import Increment from './component/increment'
//import BgMode from './component/BgMode'
import Users from './component/Users'

const App = () => {
  return (
    <div>
      <h1 className='text-center'>
        Learn State
        {/* <Counter/>
        <Increment/> */}
        <Users/>
     


      </h1>
    </div>
  )
}

export default App