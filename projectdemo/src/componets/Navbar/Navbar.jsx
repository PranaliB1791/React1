import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-dark">
        <div className="container-fluid">
          <NavLink className="navbar-brand text-warning fs-4 fw-bold" to="/">IT HUB</NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink className="nav-link active text-light fs-5 fw-bold" aria-current="page" to="/home">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link active text-light fs-5 fw-bold" to="/about">About</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link active text-light fs-5 fw-bold" to="/register">Register</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link active text-light fs-5 fw-bold" to="/admin">Admin</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link active text-light fs-5 fw-bold" to="/students">Students</NavLink>
              </li>
              {/* <li className="nav-item">
                <NavLink className="nav-link active text-light fs-5 fw-bold" to="/stu_details"> Enroll Students</NavLink>
              </li> */}

              <li className="nav-item">
                <NavLink className="nav-link active text-light fs-5 fw-bold" to="/contact">Contact</NavLink>
              </li>


            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar