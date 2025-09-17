import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Admin = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const navigate=useNavigate()
  const loginHandle = () => {
    if (username === "ADMIN" && password === "Admin@123") {
      alert("ADMIN LOGIN SUCCESS")
      navigate('/stu_details')
    }
    else {
      alert("Wrong Username and password")
      setPassword('')
      setUsername('')
    }
  }
  return (
    <div style={{ height: "550px" }}>
      <div className='bg-primary w-50 mx-auto mt-5 mb-5 text-center rounded-5 p-4'>
        <h2>Admin Login</h2>
        <div>
          <input type="text"
            className='form-control mb-2'
            placeholder="Enter Username" 
            value={username}
            onChange={(e)=>{
              setUsername(e.target.value)
            }}/>
        </div>
        <div>
          <input type="password"
            className='form-control'
            placeholder='Enter Password'
            value={password}
            onChange={(p)=>{
              setPassword(p.target.value)
            }} />
        </div>
        <button className='btn btn-success w-100' onClick={loginHandle}>LOGIN</button>
      </div>
    </div>
  )
}

export default Admin