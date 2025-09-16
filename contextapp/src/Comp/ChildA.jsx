import React from 'react'
import {greet} from "../App"

const ChildA = () => {
  return (
    <div>ChildA
        <greet.Consumer>
            {
                (abc)=>{
                    return(
                        <h2>
                            {abc}
                        </h2>
                    )

                }
            }
        </greet.Consumer>
    </div>
  )
}

export default ChildA