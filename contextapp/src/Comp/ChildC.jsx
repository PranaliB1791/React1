import React from 'react'
import ChildB from './ChildB'
import {greet} from '../App'
import { useContext } from 'react'

const ChildC = () => {
    const mydata=useContext(greet)
  return (
    <div>ChildC-{mydata}
        <ChildB/>
    </div>
  )
}

export default ChildC