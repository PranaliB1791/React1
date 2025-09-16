import React from 'react'
import errorgif from '../../assets/errorimg.gif'

const ErrorPage = () => {
  return (
    <div className='text-center'>
         <h3>Page not found</h3>
        <img src={errorgif} alt="" />
       
    </div>
  )
}

export default ErrorPage