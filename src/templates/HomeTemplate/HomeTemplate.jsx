import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
export default function HomeTemplate() {
  return (
    <div>
      <Header/>
      <div className='content' style={{minHeight:'75vh'}}>
        <Outlet/>
      </div>
      <Footer/>
    </div>
  )
}
