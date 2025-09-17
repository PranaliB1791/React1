import React from 'react'

const Footer = () => {
  return (
    <div className='p-4 bg-dark text-light'>
      <div className='d-flex justify-content-evenly'>
        <div>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.968542216527!2d73.81312867371942!3d18.485084070260193!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bfde630c887d%3A0x56917e16795b084f!2sFRP8%2B27G%20Pentagon%20Tower%2C%20Sangunabai%20Bhoj%20Path%2C%20Karvenagar%2C%20Pune%2C%20Maharashtra%20411052!5e0!3m2!1sen!2sin!4v1756111217467!5m2!1sen!2sin" width="400"
            height="300" loading='lazy' referrerpolicy="no-referrer-when-downgrade" style={{ borderRadius: "20px" }}></iframe>
        </div>
        <div>
          <h2>Contact us: 8899887766</h2>
          <h3>Click on map for Direction</h3>
        </div>
      </div>
    </div>
  )
}

export default Footer