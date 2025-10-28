import React, { createContext, useState, useEffect } from 'react'
import API from './api'

export const AuthContext = createContext()

export function AuthProvider({ children }){
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const [authModal, setAuthModal] = useState({ open: false, view: 'login' })

  useEffect(()=>{
    const token = localStorage.getItem('token')
    if(!token){ setLoading(false); return }
    API.get('/auth/me').then(res => {
      setUser(res.data.user)
    }).catch(()=>{
      localStorage.removeItem('token')
      localStorage.removeItem('refreshToken')
      setUser(null)
    }).finally(()=>setLoading(false))
  },[])

  const login = async (email, password) => {
    const res = await API.post('/auth/login', { email, password })
    localStorage.setItem('token', res.data.token)
    if(res.data.refreshToken) localStorage.setItem('refreshToken', res.data.refreshToken)
    setUser(res.data.user)
    return res.data
  }

  const register = async (name, email, password) => {
    const res = await API.post('/auth/register', { name, email, password })
    localStorage.setItem('token', res.data.token)
    if(res.data.refreshToken) localStorage.setItem('refreshToken', res.data.refreshToken)
    setUser(res.data.user)
    return res.data
  }

  const logout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('refreshToken')
    setUser(null)
  }

  const openAuthModal = (view = 'login') => setAuthModal({ open: true, view })
  const closeAuthModal = () => setAuthModal({ open: false })

  // Mock OAuth handlers (frontend-only). In production you'll redirect to real OAuth flows.
  const oauthSignIn = async (provider) => {
    // Simulate OAuth: create a fake user and token
    const fakeUser = { id: 9999, name: `${provider} User`, email: `${provider.toLowerCase()}@example.com` }
    const fakeToken = `fake-${provider}-token-${Date.now()}`
    localStorage.setItem('token', fakeToken)
    setUser(fakeUser)
    closeAuthModal()
    return { user: fakeUser, token: fakeToken }
  }

  return (
    <AuthContext.Provider value={{user, loading, login, register, logout, authModal, openAuthModal, closeAuthModal, oauthSignIn}}>
      {children}
    </AuthContext.Provider>
  )
}
