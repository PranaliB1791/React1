import React, { useState } from 'react';
import './Register.css';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const { register, handleSubmit, reset, formState: { errors }, setValue } = useForm()
  const navigate = useNavigate()
  const addStudent = (data) => {
    axios.post('http://localhost:8080/students', data)
    alert('Data Added !!')
    reset()
    navigate('/stu_details')
  }

  const [course, setCourse] = useState('')
  const courseFees = {
    React: "15000",
    AWS: "20000",
    Azure: "30000",
    Java: "25000",
    DS: "23000",
    Python: "20000"
  }
  const courseHandler = (event) => {
    const selectCourse = event.target.value
    setCourse(selectCourse)
    const selectFees = courseFees[selectCourse];

    setValue("fees", selectFees)
  }
  return (
    <div>
      <section className="h-100 bg-dark">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col">
              <div className="card card-registration my-4">
                <div className="row g-0">
                  <div className="col-xl-6 d-none d-xl-block">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/img4.webp"
                      alt="Sample photo"
                      className="img-fluid fromstyle"
                    />
                  </div>
                  <div className="col-xl-6">
                    <div className="card-body p-md-5 text-black">
                      <h3 className="mb-5 text-uppercase">Student registration form</h3>
                      <form onSubmit={handleSubmit(addStudent)}>
                        <div className="row">
                          <div className="col-md-6 mb-4">
                            <div data-mdb-input-init className="form-outline">
                              <input type="text" id="form3Example1m" className="form-control form-control-lg"
                                {...register('first_name', {
                                  required: "First name is Required",
                                  pattern: {
                                    value: /^[A-Za-z]+$/,
                                    message: "Only alphabets are allowed"
                                  }
                                })} />
                              <label className="form-label" htmlFor="form3Example1m">First name</label>
                              {
                                errors.first_name && <div className='text-danger'>{errors.first_name.message}</div>
                              }
                            </div>
                          </div>
                          <div className="col-md-6 mb-4">
                            <div data-mdb-input-init className="form-outline">
                              <input type="text" id="form3Example1n" className="form-control form-control-lg"
                                {...register('last_name', {
                                  required: "Last name is Required",
                                  pattern: {
                                    value: /^[A-Za-z]+$/,
                                    message: "Only alphabets are allowed"
                                  }
                                })} />
                              <label className="form-label" htmlFor="form3Example1n">Last name</label>
                              {
                                errors.last_name && <div className='text-danger'>{errors.last_name.message}</div>
                              }
                            </div>
                          </div>
                        </div>

                        {/* <div className="row">
                          <div className="col-md-6 mb-4">
                            <div data-mdb-input-init className="form-outline">
                              <input type="text" id="form3Example1m1" className="form-control form-control-lg"{...register('mothers_name')} />
                              <label className="form-label" htmlFor="form3Example1m1">Mother's name</label>
                            </div>
                          </div>
                          <div className="col-md-6 mb-4">
                            <div data-mdb-input-init className="form-outline">
                              <input type="text" id="form3Example1n1" className="form-control form-control-lg" {...register('fathers_name')} />
                              <label className="form-label" htmlFor="form3Example1n1">Father's name</label>
                            </div>
                          </div>
                        </div> */}

                        <div data-mdb-input-init className="form-outline mb-4">
                          <input type="text" id="form3Example8" className="form-control form-control-lg"
                            {...register('address', {
                              required: "Address is Required",
                              pattern: {
                                value: /^[A-Za-z0-9\s,.-]+$/
                                ,
                                message: "Only alphabets are allowed"
                              }
                            })} />
                          <label className="form-label" htmlFor="form3Example8">Address</label>
                          {
                            errors.address && <div className='text-danger'>{errors.address.message}</div>
                          }
                        </div>

                        <div className="d-md-flex justify-content-start align-items-center mb-4 py-2">
                          <h6 className="mb-0 me-4">Gender:</h6>

                          <div className="form-check form-check-inline mb-0 me-4">
                            <input className="form-check-input" type="radio" name="gender" id="femaleGender" value="female"
                              {...register('gender', {
                                required: "Please Select one option"
                              })} />
                            <label className="form-check-label" htmlFor="femaleGender">Female</label>
                          </div>

                          <div className="form-check form-check-inline mb-0 me-4">
                            <input className="form-check-input" type="radio" name="gender" id="maleGender" value="male"
                              {...register('gender', {
                                required: "Please Select one option"
                              })} />
                            <label className="form-check-label" htmlFor="maleGender">Male</label>
                          </div>

                          <div className="form-check form-check-inline mb-0">
                            <input className="form-check-input" type="radio" name="gender" id="otherGender" value="other"
                              {...register('gender', {
                                required: "Please Select one option"
                              })} />
                            <label className="form-check-label" htmlFor="otherGender">Other</label>
                          </div>
                        </div>

                        {/* Selects Row 1: State & City */}
                        <div className="row">
                          <div className="col-md-6 mb-4">
                            <select data-mdb-select-init className="form-control"
                              {...register('state', {
                                required: "Please Select one option"
                              })}>
                              <option value="">State</option>
                              <option value="Maharashtra">Maharashtra</option>
                              <option value="Telengana">Telengana</option>
                              <option value="Gujarat">Gujarat</option>

                            </select>
                          </div>
                          <div className="col-md-6 mb-4">
                            <select data-mdb-select-init className="form-control"
                              {...register('city', {
                                required: "Please Select one option"
                              })}>
                              <option value="">City</option>
                              <option value="Pune">Pune</option>
                              <option value="HYD">HYD</option>
                              <option value="Gujarat">Gujarat</option>
                            </select>
                          </div>
                        </div>

                        {/* Selects Row 2: Course & Price */}
                        <div className="row">
                          <div className="col-md-6 mb-4">
                            <select data-mdb-select-init className="form-control"
                              {...register('course', {
                                required: "Please Select one option"
                              })} onChange={courseHandler} value={course}>
                              <option value=''>Select Course</option>
                              {
                                Object.keys(courseFees).map((course) => (
                                  <option key={course}>
                                    {course}

                                  </option>
                                )

                                )

                              }

                            </select>
                          </div>
                          <div className="col-md-6 mb-4">
                            <input
                              type="text"
                              className='form-control'
                              placeholder='Slect Course for fees'
                              {...register('fees')}
                            />
                          </div>
                        </div>

                        <div data-mdb-input-init className="form-outline mb-4">
                          <input type="date" id="form3Example9" className="form-control form-control-lg"
                            {...register('dob', {
                              required: "Please Enter DOB"
                            })} />
                          <label className="form-label" htmlFor="form3Example9">DOB</label>
                        </div>

                        <div data-mdb-input-init className="form-outline mb-4">
                          <input type="tel" id="form3Example90" className="form-control form-control-lg"
                            {...register('contact', {
                              required: "Please Enter Valid Contact ",
                              pattern: {
                                value: /^[6789]{1}[0-9]{9}$/,
                                message: "Contact must be 10 digits"

                              }
                            })} />
                          <label className="form-label" htmlFor="form3Example90">Contact</label>
                          {
                            errors.contact && <div className='text-danger'>{errors.contact.message}</div>
                          }
                        </div>

                        {/* <div data-mdb-input-init className="form-outline mb-4">
                          <input type="text" id="form3Example99" className="form-control form-control-lg" {...register('first_na')}/>
                          <label className="form-label" htmlFor="form3Example99">Course</label>
                        </div> */}

                        <div data-mdb-input-init className="form-outline mb-4">
                          <input type="email" id="form3Example97" className="form-control form-control-lg"
                            {...register('email', {
                              required: "Please Enter valid email"
                            })} />
                          <label className="form-label" htmlFor="form3Example97">Email ID</label>
                          {
                            errors.email && <div className='text-danger'>{errors.email.message}</div>
                          }
                        </div>

                        <div data-mdb-input-init className="form-outline mb-4">
                          <input type="password" id="form3Example97" className="form-control form-control-lg"
                            {...register('password', {
                              required: "Password is required",
                              pattern: {
                                value: /^(?=.*[A-Z])(?=.*[!@$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/,
                                message: "password must be at least 8 character long,include on uppercase,one special character and digit"

                              }
                            })} />
                          <label className="form-label" htmlFor="form3Example97">Password</label>
                          {
                            errors.password && <div className='text-danger'>{errors.password.message}</div>
                          }
                        </div>

                        <div className="d-flex justify-content-end pt-3">
                          <button
                            type="reset"
                            data-mdb-button-init
                            data-mdb-ripple-init
                            className="btn btn-light btn-lg"
                          >
                            Reset all
                          </button>
                          <button
                            type="submit"
                            data-mdb-button-init
                            data-mdb-ripple-init
                            className="btn btn-warning btn-lg ms-2"
                          >
                            Submit form
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Register;
