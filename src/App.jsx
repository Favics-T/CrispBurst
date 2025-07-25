import React from 'react'
import {BrowserRouter, Routes,Outlet,Route} from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Onboarding from './pages/Onboarding'
import AuthPage from './pages/AuthPage'

const Layout = ()=>{
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
          <Route path='home'  element={<Home />} />
          </Route>
          <Route  index element={<Onboarding />}/>
           <Route path='/signin' element={<AuthPage type="signin" />} />
          <Route path='/signup' element={<AuthPage type="signup" />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
