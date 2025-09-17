import React from 'react'
import aboutImg from '../../assets/about.jpg'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'animate.css'

const About = () => {
    return (
        <div
            className="container-fluid py-5"
            style={{ background: 'linear-gradient(to right, #dbeafe, #e0f2f1)' }}
        >
            {/* Heading */}
            <div className="text-center mb-5">
                <h1 className="fw-bold text-primary">About Our Platform</h1>
                <p className="text-muted fs-5">Empowering learners with real-world tech skills</p>
            </div>

            {/* About Image and Text */}
            <div className="container mb-5">
                <div className="row align-items-center">
                    <div className="col-md-6 mb-4 mb-md-0">
                        <img
                            src={aboutImg}
                            alt="About us"
                            className="img-fluid rounded-4 shadow-lg animate__animated animate__fadeInLeft"
                            style={{ height: '400px', width: '100%', objectFit: 'cover' }}
                        />
                    </div>
                    <div className="col-md-6">
                        <h3 className="text-success">🚀 Learn From The Best</h3>
                        <p className="fs-5">
                            Our platform provides high-quality, industry-relevant courses in areas like React, AWS,
                            Java, Python, and more. Whether you're a beginner or an experienced developer, our goal is
                            to help you grow and succeed.
                        </p>
                        <p className="fs-5">
                            We believe in hands-on learning, mentorship, and real-world projects to make you job-ready.
                        </p>
                    </div>
                </div>
            </div>

            {/* Why Choose Us */}
            <div className="container text-center mb-5">
                <h3 className="mb-4 text-dark">🌟 Why Choose Us?</h3>
                <div className="row">
                    <div className="col-md-4 mb-3">
                        <div className="p-4 bg-white border rounded shadow-sm h-100 animate__animated animate__fadeInUp">
                            <i className="bi bi-person-workspace fs-1 text-info mb-3"></i>
                            <h5>Industry Experts</h5>
                            <p>Courses curated by professionals with years of experience.</p>
                        </div>
                    </div>
                    <div className="col-md-4 mb-3">
                        <div className="p-4 bg-white border rounded shadow-sm h-100 animate__animated animate__fadeInUp animate__delay-1s">
                            <i className="bi bi-code-slash fs-1 text-warning mb-3"></i>
                            <h5>Hands-On Projects</h5>
                            <p>Learn by building real-world applications.</p>
                        </div>
                    </div>
                    <div className="col-md-4 mb-3">
                        <div className="p-4 bg-white border rounded shadow-sm h-100 animate__animated animate__fadeInUp animate__delay-2s">
                            <i className="bi bi-briefcase-fill fs-1 text-success mb-3"></i>
                            <h5>Placement Assistance</h5>
                            <p>We help you prepare for interviews and connect with companies.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* CTA */}
            <div className="text-center">
                <h4 className="text-dark">Ready to start your learning journey?</h4>
                <a href="/register" className="btn btn-primary mt-3 btn-lg shadow">
                    <i className="bi bi-pencil-square me-2"></i>Enroll Now
                </a>
            </div>
        </div>
    )
}

export default About
