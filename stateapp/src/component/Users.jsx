import React, { useState } from 'react'

const Users = () => {
    const [fname,setFname]=useState('')
    const[lname,setLname]=useState('')
    const[email,setEmail]=useState('')
    const[contact,setContact]=useState('')
    const first_name=(event )=>{
        setFname(event.target.value)
    }
    return (
        <div>
            <h2 className='text-center'>User Information </h2>
            <form>
                <div className='bg-dark p-4 text-light w-50 mx-auto rounded-4'>
                    <div className='mb-3' >
                        <label className='form-label small text-start d-block fs-6'>Enter First Name :</label>
                        <input type="text" className='form-control' placeholder='Enter first Name' value={fname} onChange={(event)=>setFname(event.target.value)} />
                    </div>

                    <div className='mb-3'>
                        <label className='form-label small text-start d-block fs-6'>Enter Last Name : </label>
                        <input type='text' placeholder='Enter last Name' className='form-control' value={lname} onChange={(event)=>setLname(event.target.value)}></input>
                    </div>
                    <div className='mb-3'>
                        <label className='form-label small text-start d-block fs-6'>Enter Email : </label>
                        <input type='text' placeholder='Enter Email' className='form-control'value={email} onChange={(event)=>setEmail(event.target.value)}></input>
                    </div>
                    <div className='mb-3'>
                        <label className='form-label small text-start d-block fs-6'>Enter Contact : </label>
                        <input type="tel" className='form-control' placeholder='Enter Contact number'value={contact} onChange={(event)=>setContact(event.target.value)} />
                    </div>
                </div>
            </form>
            <div className=' w-50 bg-secondary p-3 rounded-2 mt-3 mx-auto fw-bold small text-start d-block fs-6'>
                User Full Name-{fname} {lname}
                <br />
                Email-{email}
                <br />
                Contact Info -{contact}
                <br />
            </div>

        </div>
    )
}

export default Users