import React, { useContext } from 'react'
import { AuthContext } from '../AuthContext'
import { FaRocket, FaBrain, FaChartLine, FaStar, FaCheckCircle } from 'react-icons/fa'

export default function Home(){
  const { openAuthModal } = useContext(AuthContext)
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      {/* Animated background blobs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>

      {/* Hero Section */}
      <section className="relative container pt-20 pb-32">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6 animate-fade-in">
            <FaRocket className="animate-bounce" />
            <span>AI-Powered Interview Practice</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-fade-in-up">
            Master Your Next Interview
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-2xl mx-auto animate-fade-in-up animation-delay-200">
            Practice with AI-powered simulations, get instant feedback, and land your dream job with confidence.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up animation-delay-400">
            <button 
              onClick={()=>openAuthModal('register')}
              className="group relative px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-200"
            >
              <span className="relative z-10">Start Free Trial</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
            </button>
            <button 
              onClick={()=>openAuthModal('login')}
              className="px-8 py-4 bg-white text-gray-700 font-semibold rounded-xl border-2 border-gray-200 hover:border-indigo-500 hover:text-indigo-600 shadow-sm hover:shadow-md transition-all duration-200"
            >
              Sign In
            </button>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-3 gap-8 max-w-2xl mx-auto animate-fade-in-up animation-delay-600">
            <div>
              <div className="text-3xl font-bold text-indigo-600">10K+</div>
              <div className="text-sm text-gray-600 mt-1">Users</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600">50K+</div>
              <div className="text-sm text-gray-600 mt-1">Interviews</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-pink-600">95%</div>
              <div className="text-sm text-gray-600 mt-1">Success Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative container py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Entretien AI?</h2>
          <p className="text-xl text-gray-600">Everything you need to ace your next interview</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Feature 1 */}
          <div className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-2xl opacity-0 group-hover:opacity-5 transition-opacity"></div>
            <div className="relative">
              <div className="w-14 h-14 bg-indigo-100 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <FaBrain className="text-2xl text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">AI-Powered Feedback</h3>
              <p className="text-gray-600">Get instant, personalized feedback on your answers with actionable insights to improve.</p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl opacity-0 group-hover:opacity-5 transition-opacity"></div>
            <div className="relative">
              <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <FaChartLine className="text-2xl text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Track Progress</h3>
              <p className="text-gray-600">Monitor your improvement over time with detailed analytics and performance metrics.</p>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
            <div className="absolute inset-0 bg-gradient-to-br from-pink-500 to-red-500 rounded-2xl opacity-0 group-hover:opacity-5 transition-opacity"></div>
            <div className="relative">
              <div className="w-14 h-14 bg-pink-100 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <FaStar className="text-2xl text-pink-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Real Scenarios</h3>
              <p className="text-gray-600">Practice with realistic interview scenarios from top companies across industries.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="relative container py-20">
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl p-12 text-center text-white shadow-2xl">
          <div className="flex justify-center gap-1 mb-4">
            {[...Array(5)].map((_, i) => <FaStar key={i} className="text-yellow-300 text-2xl" />)}
          </div>
          <h3 className="text-3xl font-bold mb-4">Loved by thousands of job seekers</h3>
          <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
            "This platform helped me land my dream job at a FAANG company. The AI feedback was incredibly detailed!"
          </p>
          <div className="flex items-center justify-center gap-3">
            <div className="w-12 h-12 bg-white/20 rounded-full"></div>
            <div className="text-left">
              <div className="font-semibold">Sarah Chen</div>
              <div className="text-sm text-indigo-200">Software Engineer at Google</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative container py-20 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Ready to ace your interview?</h2>
        <p className="text-xl text-gray-600 mb-8">Join thousands of successful candidates today</p>
        <button 
          onClick={()=>openAuthModal('register')}
          className="px-10 py-5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-lg font-semibold rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-200"
        >
          Get Started for Free
        </button>
      </section>
    </div>
  )
}
