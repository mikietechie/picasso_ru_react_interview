import { Outlet } from "react-router-dom"
import { Navbar } from "./Navbar"
import { Footer } from "./Footer"
import React from "react"

export const Layout: React.FC = () => {

  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}
