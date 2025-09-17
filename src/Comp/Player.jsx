const Players = () => {
    const playerinfo = [
        {
            name: "Rohit Sharma", country: "India", age: 36, ipl: "MI", city: "Mumbai"
        },
        {
            name: "Virat Kohli", country: "India", age: 35, ipl: "RCB", city: "Delhi"
        },
        {
            name: "Hardik Pandya", country: "India", age: 30, ipl: "MI", city: "Mumbai"
        },
        {
            name: "Rahul Dravid", country: "India", age: 50, ipl: "RR", city: "Nagpur"
        }
    ]
    return (
        <div>
            <h2 className="text-center">Players List</h2>
            <div>
                <table className="table table-dark" >
                    <thead>
                        <tr>
                            <th>Sr.No</th>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Country</th>
                            <th>IPL Team</th>
                            <th>City</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            playerinfo.map((player ,index)=>{
                                return (
                                    <tr key={index}>
                                         <td>{index+ 1}</td>
                                        <td>{player.name}</td>
                                        <td>{player.age}</td>
                                        <td>{player.country}</td>
                                        <td>{player.ipl}</td>
                                        <td>{player.city}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>

            </div>

        </div>

    )
}
export default Players;