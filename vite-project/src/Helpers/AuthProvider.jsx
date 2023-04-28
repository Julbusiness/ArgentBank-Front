import React from 'react'
import { Navigate } from 'react-router-dom'

export default function AuthProvider({children}) {

  const logged = false

  if(!logged) {
    return <Navigate to="/user/login" />
  }

  return (
    children
  )
}
