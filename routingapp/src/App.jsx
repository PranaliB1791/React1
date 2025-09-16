import React from 'react'
import Navbar from './components/navbar/navbar'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/pages/Home'
import About from './components/pages/About'
import Service from './components/pages/Service'
import Register from './components/pages/Register'
import Contact from './components/pages/Contact'
import ErrorPage from './components/pages/ErrorPage'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home/>}>

          </Route>
          <Route path='/home' element={<Home/>}>

          </Route>
          <Route path='/about' element={<About/>}>

          </Route>
          <Route path='/contact' element={<Contact/>}>

          </Route>
          <Route path='/service' element={<Service/>}>

          </Route>
          <Route path='/register' element={<Register/>}>

          </Route>
          <Route path='*' element={<ErrorPage/>}>

          </Route>

        </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App