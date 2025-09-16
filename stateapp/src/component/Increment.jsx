import React, { useState } from 'react'

const Increment = () => {
    const [count, setCount] = useState(0)

    const increment = () => {
       // setCount(count+1)
        setCount((prevState) => prevState + 1)
        setCount((prevState) => prevState + 1)
        setCount((prevState) => prevState + 1)
        setCount((prevState) => prevState + 1)
        setCount((prevState) => prevState + 1)
        setCount((prevState) => prevState + 1)

    }
    const decrement = () => {
        if (count > 0) {
            setCount(count - 1)
        }


    }
    return (
        <div className="bg-dark text-light w-50 mx-auto p-4 text-center rounded-3 mt-5">
            <h2>
                Counter in Funcational Comp
            </h2>
            <div className="btn-group">
                <button className="btn btn-light" onClick={increment} >+</button>
                <button className="btn btn-success">{count}</button>
                <button className="btn btn-light" onClick={decrement}>-</button>
            </div>
        </div>

    )
}

export default Increment