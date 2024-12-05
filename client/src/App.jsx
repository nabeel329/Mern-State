import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router'
import Home from './pages/Home'
import Signin from './pages/Signin'
import Signup from './pages/Signup'
import Profile from './pages/Profile'
import About from './pages/About'
import Header from './components/Header'

const App = () => {
  return (
   <BrowserRouter>
   <Header />
   <Routes>
    
    <Route path='/' element={<Home />} />
    <Route path='/signin' element={<Signin />} />
    <Route path='/signup' element={<Signup />} />
    <Route path='/profile' element={<Profile />}/>
    <Route path='/about' element={<About />} />
   </Routes>
   </BrowserRouter>
      
    
  )
}

export default App