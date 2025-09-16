import React, { useRef } from 'react'

const UpdateStyle = () => {
    const divref = useRef(null)
    const divHandler = () => {
        divref.current.style.cssText = "background-color:orange; width:150px; height:150px; transition: 3s"

    }
    return (
        <div>
            <h2>updateStyle of element using useRef() instead of useState()
            </h2>
            <div ref={divref}
                style={{
                    width: "100px",
                    height: "100px",
                    backgroundColor: "black"
                }}>

            </div>
            <button style={{ marginTop: "20x" }} onClick={divHandler}>Create Box</button>
        </div>
    )
}

export default UpdateStyle