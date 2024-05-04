import React from 'react'
import { useSelector } from 'react-redux'
import {Navigate } from 'react-router-dom'

function AuthWrapper({children}) {
 const userId = localStorage.getItem('userId')
console.log("hii auth ",userId)
    if(!userId){
   return <Navigate to='/login' replace={true} />
}
  return (
  <div>
  {children}
  </div>

  )
}

export default AuthWrapper