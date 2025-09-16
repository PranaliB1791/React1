import axios from 'axios'
import React from 'react'

const Users = () => {
    //to fetch data create one async function
    const fetchData = async () => {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users')
        console.log(response)
        const result =response.data
        console.log(result)
    }
    fetchData()
  
    return (
        <div>
            <h1>Users Data</h1>
        </div>
    )
}

export default Users