import React from 'react'
import Landing1 from '../assets/Landing1.avif'
import Bakery from './Bakery'
import Hero from '../components/Hero'
import Value from '../components/Value'
import Product from './Product'

const Home = () => {
  return (
    <div className='h-screen flex flex-col gap-6'>
      <Hero />
    <Bakery />
    <Value />
    <Product />
    
    </div>
  )
}

export default Home
