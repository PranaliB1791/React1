import React, { useReducer } from 'react'

const Counter = () => {
    const reducer = (state, action) => {
        switch (action) {
            case "increment": return state + 1
            case "decrement": return state - 1
            case "reset": return 0
            default: return state

        }

    }
    const [count, dispatch] = useReducer(reducer, 0)

    return (
        <div>
            <div className='bg-dark p-4 text-light fs-4 text-center w-50 mx-auto rounded-4'>
                <div>
                    {count}
                </div>
                <div className='btn-group'>
                    <button className='btn btn-danger fs-4 ' onClick={() => dispatch('increment')}>+</button>
                    <button className='btn btn-danger fs-4' onClick={() => dispatch('decrement')}>-</button>
                    <button className='btn btn-danger fs-4' onClick={() => dispatch('reset')}>reset</button>
                </div>
            </div>

        </div>
    )
}

export default Counter