import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import InterviewerSetup from './pages/InterviewerSetup'
import Interview from './pages/Interview'
import CVTool from './pages/CVTool'
import JobMatcher from './pages/JobMatcher'
import Pricing from './pages/Pricing'
import Dashboard from './pages/Dashboard'
import Nav from './components/Nav'
import Footer from './components/Footer'
import { AuthProvider } from './AuthContext'
import { ServiceProvider } from './ServiceContext'
import ProtectedRoute from './components/ProtectedRoute'
import AuthModal from './components/AuthModal'
import BackgroundShader from './components/BackgroundShader'

export default function App() {
  return (
    <AuthProvider>
      <ServiceProvider>
        <div className="app-root">
          {/* Global interactive shader background */}
          <BackgroundShader className="fixed inset-0 -z-10" />
          <Nav />
          <AuthModal />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/interviewer/setup" element={<ProtectedRoute><InterviewerSetup /></ProtectedRoute>} />
              <Route path="/interviewer/session" element={<ProtectedRoute><Interview /></ProtectedRoute>} />
              <Route path="/cv" element={<ProtectedRoute><CVTool /></ProtectedRoute>} />
              <Route path="/jobs" element={<ProtectedRoute><JobMatcher /></ProtectedRoute>} />
              <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
            </Routes>
          </main>
          <Footer />
        </div>
      </ServiceProvider>
    </AuthProvider>
  )
}
