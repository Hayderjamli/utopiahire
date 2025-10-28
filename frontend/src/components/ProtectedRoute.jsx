import React, { useContext, useEffect } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { AuthContext } from '../AuthContext'

export default function ProtectedRoute({ children }){
  const { user, loading, openAuthModal } = useContext(AuthContext)
  const location = useLocation()
  useEffect(() => {
    if(!loading && !user){
      openAuthModal('login')
    }
  }, [loading, user, openAuthModal])
  if(loading) return <div className="container">Loading...</div>
  if(!user) return <Navigate to="/" replace state={{ from: location }} />
  return children
}
