import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { FaVideo } from 'react-icons/fa'
import { AuthContext } from '../AuthContext'

export default function Nav(){
  const { user, logout, openAuthModal } = useContext(AuthContext)
  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-lg border-b border-gray-200/50 shadow-sm">
      <div className="container">
        <div className="grid grid-cols-3 items-center py-4">
          {/* left: brand + interview cta */}
          <div className="justify-self-start flex items-center gap-4">
            <Link className="text-2xl font-extrabold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent hover:from-purple-600 hover:to-pink-600 transition-all" to="/">
              UtopiaHire 
            </Link>
            
          </div>

          {/* center: main links */}
          <nav className="justify-self-center flex items-center gap-8">
            <Link className="text-sm font-medium text-gray-600 hover:text-indigo-600 transition-colors" to="/about">About</Link>
            <Link className="text-sm font-medium text-gray-600 hover:text-indigo-600 transition-colors" to="/pricing">Pricing</Link>
          </nav>

          {/* right: auth / dashboard */}
          <div className="justify-self-end flex items-center gap-4">
            {user && (
              <Link
                to="/dashboard"
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-sm font-semibold shadow-md hover:shadow-lg transform hover:scale-105 transition-all"
                aria-label="Go to Interview dashboard"
              >
                <FaVideo className="text-xs" />
                Interview
              </Link>
            )}
            {user ? (
              <button 
                className="text-sm font-medium text-gray-600 hover:text-indigo-600 transition-colors" 
                onClick={logout}
              >
                Logout
              </button>
            ) : (
              <>
                <button 
                  className="text-sm font-medium text-gray-600 hover:text-indigo-600 transition-colors" 
                  onClick={()=>openAuthModal('login')}
                >
                  Sign in
                </button>
                <button 
                  className="px-5 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-sm font-semibold rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-200" 
                  onClick={()=>openAuthModal('register')}
                >
                  Get Started
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}
