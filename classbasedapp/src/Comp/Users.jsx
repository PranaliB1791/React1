import { Component } from "react";

class Users extends Component {
     name="Rohit";
    render() {
        return (
            <div>
<h1>I am class based Component</h1>
<h2>{this.name}</h2>
            </div>
        )
    }
}
export default Users;