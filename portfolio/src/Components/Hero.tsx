import React from 'react'
import Navbar from './Navbar'

const Hero = () => {
  return (
    <div className="bg-[url()] lg:bg-[url(/banner.jpg)] min-h-screen bg-cover">
    <Navbar/>
    <div className="container grid lg:grid-cols-2 h-[calc(100vh-60px)]"></div>
    </div>
  )
}

export default Hero