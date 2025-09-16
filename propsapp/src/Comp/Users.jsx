const Users=(props)=>{
    return(
        <div>
            <h3>User component - child comp</h3>
            <h4>AppName : {props.appname}</h4>
            <h4>Employee Info: {props.empdeatils.empName} {props.empdeatils.company} {props.empdeatils.role} {props.empdeatils.dev}</h4>
        </div>
    )
}
export default Users;