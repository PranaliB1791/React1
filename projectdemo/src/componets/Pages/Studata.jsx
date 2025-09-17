import React from 'react'

const Studata = ({ onLogout, student }) => {
    return (
        <div>
            <div>
                <h2>Student Details - {student.first_name}</h2>
            </div>
            <div>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Address</th>
                            <th>Gender</th>
                            <th>State</th>
                            <th>City</th>
                            <th>Course</th>
                            <th>Fees</th>
                            <th>Contact</th>
                            <th>DOB</th>
                            <th>Email</th>
                            <th>Password</th> {/* 👈 optional, remove in real apps */}
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{student.first_name}</td>
                            <td>{student.last_name}</td>
                            <td>{student.address}</td>
                            <td>{student.gender}</td>
                            <td>{student.state}</td>
                            <td>{student.city}</td>
                            <td>{student.course}</td>
                            <td>{student.fees}</td>
                            <td>{student.contact}</td>
                            <td>{student.dob}</td>
                            <td>{student.email}</td>
                            <td>{student.password}</td> {/*Not recommended to display */}
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className='text-center mt-4'>
                <button className='btn btn-warning w-50 mb-3 mt-3' onClick={onLogout}>Logout</button>
            </div>
        </div>
    )
}

export default Studata
