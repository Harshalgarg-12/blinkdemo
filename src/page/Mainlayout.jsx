import React from 'react'
import Header from '../Component/Header'
import { Outlet } from 'react-router'
import Footer from '../Component/Footer'

export default function Mainlayout() {
  return (
  <>
  <Header/>
  <Outlet/>
  <Footer/>
  </>
  )
}
