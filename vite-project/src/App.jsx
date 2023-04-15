import { Routes, Route } from 'react-router-dom'
import Navbar from "./Components/Navbar/Navbar"
import Footer from "./Components/Footer/Footer"
import Home from "./Pages/Home/Home"
import Signin from "./Pages/Signin/Signin"
import User from "./Pages/User/User"

import './App.css'

function App() {

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/signin" element={<Signin/>} />
        <Route path="/user" element={<User/>} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
