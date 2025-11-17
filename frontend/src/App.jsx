import { Routes, Route, Link, Outlet } from 'react-router-dom'

import Home from './components/Home'
import Navbar from './components/Navbar'
import Profile from './components/Profile'
import './index.css'



const App = () => {
  return (
      <div>



       <Navbar />



        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<h2>404 - This page doesn't exist yet</h2>} />
        </Routes>



      </div>
  )
}





export default App