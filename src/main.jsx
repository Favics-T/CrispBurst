import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { CartProvider } from './context/ChatContext.jsx'

createRoot(document.getElementById('root')).render(
 <CartProvider>
 <StrictMode>
    <App />
  </StrictMode>
   </CartProvider>
  
  ,
)
