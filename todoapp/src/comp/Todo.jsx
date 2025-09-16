import React, { useReducer, useState } from 'react';

const Todo = () => {
    const initialState = [];

    const reducer = (state, action) => {
        switch (action.type) {
            case "ADD_DATA":
                return [
                    ...state,
                    {
                        id: Date.now(),
                        name: action.payload.name,
                        course: action.payload.course,
                        status: action.payload.status
                    }
                ];
            case "DELETE_DATA":
                return state.filter((todo) => todo.id !== action.payload);
            case "UPDATE_STATUS":
                return state.map(todo =>
                    todo.id === action.payload.id
                        ? { ...todo, status: action.payload.status }
                        : todo
                );
            default:
                return state;
        }
    };

    const [input, setInput] = useState({ name: "", course: "", status: "" });
    const [state, dispatch] = useReducer(reducer, initialState);

    const dataHandler = () => {
        if (
            input.name.trim() !== '' &&
            input.course.trim() !== '' &&
            input.status.trim() !== ''
        ) {
            dispatch({ type: "ADD_DATA", payload: input });
            setInput({ name: '', course: '', status: '' });
        } else {
            alert('All fields are mandatory');
        }
    };

    return (
        <div>
            {/* Input Form */}
            <div className='w-50 bg-dark p-4 mx-auto mt-5 rounded-2 text-white'>
                <div>
                    <input
                        type="text"
                        className='form-control mb-3'
                        placeholder='Enter name'
                        value={input.name}
                        onChange={(e) => setInput({ ...input, name: e.target.value })}
                    />
                </div>
                <div>
                    <input
                        type="text"
                        className='form-control mb-3'
                        placeholder='Enter task'
                        value={input.course}
                        onChange={(e) => setInput({ ...input, course: e.target.value })}
                    />
                </div>
                <div>
                    <select
                        className='form-control mb-3'
                        value={input.status}
                        onChange={(e) => setInput({ ...input, status: e.target.value })}
                    >
                        <option value="" disabled>Select Status</option>
                        <option value="To Do">To Do</option>
                        <option value="In Progress">In Progress</option>
                        <option value="Completed">Completed</option>
                    </select>
                </div>
                <div className='text-center'>
                    <button className='btn btn-success' onClick={dataHandler}>Add</button>
                </div>
            </div>

            {/* Table */}
            <div className='w-75 mx-auto mt-5 bg-dark p-4 rounded-3 text-white'>
                <table className='table table-dark table-striped'>
                    <thead>
                        <tr>
                            <th>Sr.No</th>
                            <th>Name</th>
                            <th>Task</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {state.map((stu, index) => (
                            <tr key={stu.id}>
                                <td>{index + 1}</td>
                                <td>{stu.name}</td>
                                <td>{stu.course}</td>
                                <td>
                                    <select
                                        className='form-control'
                                        value={stu.status}
                                        onChange={(e) =>
                                            dispatch({
                                                type: "UPDATE_STATUS",
                                                payload: { id: stu.id, status: e.target.value }
                                            })
                                        }
                                    >
                                        <option value="" disabled>Select Status</option>
                                        <option value="To Do">To Do</option>
                                        <option value="In Progress">In Progress</option>
                                        <option value="Completed">Completed</option>
                                    </select>
                                </td>
                                <td>
                                    <button
                                        className='btn btn-danger'
                                        onClick={() =>
                                            dispatch({ type: "DELETE_DATA", payload: stu.id })
                                        }
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Todo;
