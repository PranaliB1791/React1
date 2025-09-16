import React, { useState } from 'react'

const BgMode = () => {
    const [bgColor, setBgcolor] = useState('white')
    const bgHandler = (event) => {
        setBgcolor(event.target.value)

    }
    return (
        <div style={{height :'100vh', backgroundColor:bgColor}}> 
            <select className='form-control w-50 mmx-auto mt-4' onChange={bgHandler}>
                <option value=''>Select Mode </option>
                <option value='black'>  Dark</option>
                <option value='green'>Green</option>
                <option value='navy'>Navy</option>
                <option value='white'>Light</option>
            </select>
        </div>
    )
}

export default BgMode