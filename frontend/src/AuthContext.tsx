import React, { createContext, useState, useEffect, ReactNode } from 'react'
import API from './api'
import { User, AuthModalState, AuthResponse } from './types'

interface AuthContextType {
  user: User | null
  loading: boolean
  login: (email: string, password: string) => Promise<AuthResponse>
  register: (name: string, email: string, password: string) => Promise<AuthResponse>
  logout: () => void
  authModal: AuthModalState
  openAuthModal: (view?: 'login' | 'register') => void
  closeAuthModal: () => void
  oauthSignIn: (provider: string) => Promise<{ user: User; token: string }>
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)
  const [authModal, setAuthModal] = useState<AuthModalState>({ open: false, view: 'login' })

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (!token) {
      setLoading(false)
      return
    }
    API.get('/auth/me')
      .then(res => {
        setUser(res.data.user)
      })
      .catch(() => {
        localStorage.removeItem('token')
        localStorage.removeItem('refreshToken')
        setUser(null)
      })
      .finally(() => setLoading(false))
  }, [])

  const login = async (email: string, password: string): Promise<AuthResponse> => {
    const res = await API.post('/auth/login', { email, password })
    localStorage.setItem('token', res.data.token)
    if (res.data.refreshToken) localStorage.setItem('refreshToken', res.data.refreshToken)
    setUser(res.data.user)
    return res.data
  }

  const register = async (name: string, email: string, password: string): Promise<AuthResponse> => {
    const res = await API.post('/auth/register', { name, email, password })
    localStorage.setItem('token', res.data.token)
    if (res.data.refreshToken) localStorage.setItem('refreshToken', res.data.refreshToken)
    setUser(res.data.user)
    return res.data
  }

  const logout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('refreshToken')
    setUser(null)
  }

  const openAuthModal = (view: 'login' | 'register' = 'login') => setAuthModal({ open: true, view })
  const closeAuthModal = () => setAuthModal({ open: false })

  // Mock OAuth handlers (frontend-only). In production you'll redirect to real OAuth flows.
  const oauthSignIn = async (provider: string) => {
    // Simulate OAuth: create a fake user and token
    const fakeUser: User = { 
      id: 9999, 
      name: `${provider} User`, 
      email: `${provider.toLowerCase()}@example.com` 
    }
    const fakeToken = `fake-${provider}-token-${Date.now()}`
    localStorage.setItem('token', fakeToken)
    setUser(fakeUser)
    closeAuthModal()
    return { user: fakeUser, token: fakeToken }
  }

  return (
    <AuthContext.Provider value={{
      user,
      loading,
      login,
      register,
      logout,
      authModal,
      openAuthModal,
      closeAuthModal,
      oauthSignIn
    }}>
      {children}
    </AuthContext.Provider>
  )
}
