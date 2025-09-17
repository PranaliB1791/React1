import React from 'react'
import a from '../../../assets/carousel/444.avif'
import b from '../../../assets/carousel/222.webp'
import c from '../../../assets/carousel/3333.webp'

const Slider = () => {
    return (
        <div>
            <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval="4000">
                        <img src={a} className="d-block w-100 h-auto" alt="ds" />
                    </div>
                    <div className="carousel-item" data-bs-interval="4000">
                        <img src={b} className="d-block w-100 h-auto" alt="ds" />
                    </div>
                    <div className="carousel-item " data-bs-interval="4000">
                        <img src={c} className="d-block w-100 h-auto" alt="ds" />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

        </div>
    )
}

export default Slider