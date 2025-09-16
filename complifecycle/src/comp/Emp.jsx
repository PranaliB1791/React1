import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Emp = () => {
    const [emp, setEmp] = useState([])
    const fetchData = async () => {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
        console.log(response)
        const res = response.data
        // console.log(res)
        setEmp(res)
    }
    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div>
            <h2>
                Employee Info

            </h2>
            <table className='table table-dark'>
                <thead>
                    <tr>
                        <th>UserID</th>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Profile</th>
                    </tr>
                </thead>
                <tbody>
                    {

                        emp.map((e, index) => {
                            return (
                                <tr>
                                    <td>{e.userId}</td>
                                    <td>{e.id}</td>
                                    <td>{e.title}</td>
                                    <td>{e.body}</td>
                                </tr>

                            )
                        })
                    }

                </tbody>

            </table>
        </div>
    )
}

export default Emp