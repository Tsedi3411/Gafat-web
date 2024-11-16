import React from 'react'
import Header from './Components/Header'
import { Outlet } from 'react-router-dom'

import Experiance from './Components/Experiance'
import Provide from './Components/Provide '
import Footer from './Components/Footer'
import News from './Components/News'
import Partners from './Components/Partners'
import Slider from './Components/Slider'

function Layout() {
  return (
    <div>
        <Header />
        <Outlet />
        <Footer />
       
    </div>
  )
}

export default Layout