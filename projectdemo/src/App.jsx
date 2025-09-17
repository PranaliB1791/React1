import React from 'react'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.min.js"
import "../node_modules/bootstrap-icons/font/bootstrap-icons.css"
import Navbar from './componets/Navbar/Navbar.jsx'
import Home from './componets/Pages/Home.jsx'
import About from './componets/Pages/About.jsx'
import Register from './componets/Pages/Register'
import Contact from './componets/Pages/Contact.jsx'
import Admin from './componets/Pages/Admin.jsx'
import Students from './componets/Pages/Students.jsx'
import ErrorPage from './componets/Pages/ErrorPage.jsx'
import Footer from './componets/Footer/Footer.jsx'
// import Studentsdetails from './componets/Pages/Studentsdetails.jsx'
import Studata from './componets/Pages/Studata.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Studentsdetails from './componets/Pages/Studentsdetails.jsx'
import Update from './componets/Pages/Update.jsx'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/register' element={<Register />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/admin' element={<Admin />} />
          <Route path='/students' element={<Students />} />
          <Route path='/studata' element={<Studata/>}/>
          <Route path='/stu_details' element={<Studentsdetails />}></Route>
          <Route path="/update/:studentID" element={<Update/>} ></Route>
          <Route path='*' element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
      <Footer />


    </div>
  )
}

export default App