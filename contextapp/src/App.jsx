import React, { createContext } from 'react'
const greet = createContext()
import ChildD from './Comp/ChildD'

const App = () => {
  return (
    <div>App
      <greet.Provider value="Good Evening">
        <ChildD />
      </greet.Provider>



    </div>

  )
}

export default App

export { greet }