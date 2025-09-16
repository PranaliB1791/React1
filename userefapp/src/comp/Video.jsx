import React from 'react'
import myvdo from '../comp/myvideo.mp4'
import { useRef } from 'react'

const Video = () => {
    const vdoref = useRef(null)

    const playVideo = () => {
        vdoref.current.play()

    }


    const pauseVideo = () => {
        vdoref.current.pause()

    }
    return (
        <div>
            <h2>Play and pause video  using useRef()</h2>
            <video width={500} controls ref={vdoref}>
                <source src={myvdo}/>

            </video>
            <br />
            <button onClick={playVideo}>Play</button>
            <button onClick={pauseVideo}>Pause</button>
        </div>
    )
}

export default Video