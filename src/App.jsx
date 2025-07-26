import React, { useState } from 'react'
import {BrowserRouter, Routes,Outlet,Route} from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Onboarding from './pages/Onboarding'
import AuthPage from './pages/AuthPage'
import PastriesVendor from './pages/PastriesVendor'
import PrivateRoute from './routes/PrivateRoutes'
import PastryDetails from './pages/PastryDetails'
import VendorProfile from './pages/VendorProfile'
import AllVendor from './pages/AllVendor'
import Modal from './components/Modal'
import { useCart } from './context/ChatContext'
import Pastries from './pages/Pastries'

const Layout = () => {
  const [showCart, setShowCart] = useState(false);
  const { cartItems } = useCart();

  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="">
      <Header onCartClick={() => setShowCart(true)} />

      <div className="px-6 py-8">
        <Outlet />
      </div>

      <Footer />

      {/* Global Cart Modal */}
      <Modal isOpen={showCart} onClose={() => setShowCart(false)}>
        <h2 className="text-xl font-bold mb-4 text-[#113f67]">Your Cart</h2>

        {cartItems.length === 0 ? (
          <p className="text-gray-500">Your cart is empty.</p>
        ) : (
          <ul className="space-y-3">
            {cartItems.map((item) => (
              <li key={item.id} className="flex justify-between">
                <span>{item.title}</span>
                <span>₦{item.price} × {item.quantity}</span>
              </li>
            ))}
          </ul>
        )}

        <div className="mt-6 flex justify-between font-semibold">
          <span>Total:</span>
          <span>₦{total}</span>
        </div>

        <button
          className="mt-6 w-full bg-[#113f67] text-white py-2 rounded hover:bg-blue-900"
          onClick={() => {
            // add your checkout logic or redirect to WhatsApp
            setShowCart(false);
          }}
        >
          Proceed to Checkout
        </button>
      </Modal>
      </div>)}







const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
          <Route path='home'  element={<Home />} />
          <Route path='pastry' element={<PastriesVendor />}/>
          <Route path='/pastries' element={<Pastries />}/>
          </Route>
          <Route  index element={<Onboarding />}/>
          {/* protected Route */}
            <Route
            path='/home'
            element={<PrivateRoute>
                <Home />
              </PrivateRoute> }
            />

             <Route
            path='/vendors'
            element={<PrivateRoute>
                <AllVendor />
              </PrivateRoute> }
            />

             <Route
            path='/pastry/:id'
            element={<PrivateRoute>
                <PastryDetails />
              </PrivateRoute> }
            />

             <Route
            path='/vendor/:id'
            element={<PrivateRoute>
                <VendorProfile />
              </PrivateRoute> }
            />

            <Route path='*' element={<Onboarding />}/>

           <Route path='/signin' element={<AuthPage type="signin" />} />
          <Route path='/signup' element={<AuthPage type="signup" />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
