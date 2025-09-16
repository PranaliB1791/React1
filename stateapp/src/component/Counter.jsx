import { Component } from "react"

class Counter extends Component {
    constructor() {
        super()
        this.state = {
            count: 0
        }

    }
    increment = () => {
         this.setState({count:this.state.count+ 1})

    }
    decrement = () => {
        this.setState({count:this.state.count-1})

    }
    render() {
        return (
            <div className="bg-dark text-light w-50 mx-auto p-4 text-center rounded-3 mt-5">
                <h2>
                    Counter in class Comp
                </h2>
                <div className="btn-group">
                    <button className="btn btn-light" onClick={this.increment}>+</button>
                    <button className="btn btn-success">{this.state.count}</button>
                    <button className="btn btn-light" onClick={this.decrement}>-</button>
                </div>
            </div>

        )
    }
}
export default Counter