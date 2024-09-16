"use client"
import Footer from '@/Components/Footer/Footer'
import Naveber from '@/Components/Naveber/Naveber'
import React from 'react'

const Layout = ( {children} : any ) => {
  return (
    <div className='w-full h-full'>
        <Naveber />
            <div>
                {children}
            </div>
        <Footer />
    </div>
  )
}

export default Layout