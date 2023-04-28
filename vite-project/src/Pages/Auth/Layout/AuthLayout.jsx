import React from 'react'
import { Outlet } from "react-router-dom";
import Navbar from "../../../Components/Navbar/Navbar";
import Footer from "../../../Components/Footer/Footer";

export default function AuthLayout() {
  return (
    <div className="layout">
    <Navbar isLoggedIn={false} />
    <Outlet />
    <Footer />
  </div>
  )
}
