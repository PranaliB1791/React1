import React from 'react'
import d from '../../../assets/cards/react.png'
import e from '../../../assets/cards/aws.png'
import f from '../../../assets/cards/java.jpg'
import g from '../../../assets/cards/azure.png'
import h from '../../../assets/cards/ds.png'
import i from '../../../assets/cards/py.jpg'
import { NavLink } from 'react-router-dom'

const Cards = () => {
    return (
        <div className='bg-secondary pt-5 pb-5'>
            <div className='d-flex justify-content-evenly mb-3'>
                <div className="card" style={{ width: '18rem' }}>
                    <img src={d} className="card-img-top" alt="..."height={200} />
                    <div className="card-body">
                        <h5 className="card-title">React</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <NavLink to="/register" className="btn btn-primary">Enroll Here</NavLink>
                    </div>
                </div>

                <div className="card" style={{ width: '18rem' }}>
                    <img src={e} className="card-img-top" alt="..." height={200}/>
                    <div className="card-body">
                        <h5 className="card-title">AWS</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <NavLink to="/register" className="btn btn-primary">Enroll Here</NavLink>
                    </div>
                </div>

                <div className="card" style={{ width: '18rem' }}>
                    <img src={f} className="card-img-top" alt="..." height={200}/>
                    <div className="card-body">
                        <h5 className="card-title">Java</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <NavLink to="/register" className="btn btn-primary">Enroll Here</NavLink>
                    </div>
                </div>
            </div>

            <div className='d-flex justify-content-evenly'>
                <div className="card" style={{ width: '18rem' }}>
                    <img src={g} className="card-img-top" alt="..."height={200} />
                    <div className="card-body">
                        <h5 className="card-title">Azure</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <NavLink to="/register" className="btn btn-primary">Enroll Here</NavLink>
                    </div>
                </div>

                <div className="card" style={{ width: '18rem' }}>
                    <img src={h} className="card-img-top" alt="..." height={200}/>
                    <div className="card-body">
                        <h5 className="card-title">Data Structure</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <NavLink to="/register" className="btn btn-primary">Enroll Here</NavLink>
                    </div>
                </div>

                <div className="card" style={{ width: '18rem' }}>
                    <img src={i} className="card-img-top" alt="..." height={200}/>
                    <div className="card-body">
                        <h5 className="card-title">Python</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <NavLink to="/register" className="btn btn-primary">Enroll Here</NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cards