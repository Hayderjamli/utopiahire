import React from 'react'
import { FaHandshake, FaShieldAlt, FaBolt, FaCompass, FaCheckCircle } from 'react-icons/fa'

export default function About(){
  return (
    <div className="bg-white">
      {/* Header */}
      <section className="container pt-16 pb-10 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
          About UtopiaHire
        </h1>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          We help candidates practice smarter interviews with AI guidance, actionable feedback, and career-ready tools.
        </p>
      </section>

      {/* Mission + Values */}
      <section className="container grid md:grid-cols-2 gap-10 items-center pb-16">
        <div className="order-2 md:order-1">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
          <p className="text-gray-600 leading-relaxed">
            Interviews can be stressful and unpredictable. We believe preparation should be accessible, personalized, and measurable.
            UtopiaHire simulates real-world interviews, provides immediate feedback, and guides your improvement over time.
          </p>
          <ul className="mt-6 space-y-3 text-gray-700">
            <li className="flex items-center gap-2"><FaCheckCircle className="text-indigo-600" /> AI-driven interview practice</li>
            <li className="flex items-center gap-2"><FaCheckCircle className="text-indigo-600" /> Actionable, structured feedback</li>
            <li className="flex items-center gap-2"><FaCheckCircle className="text-indigo-600" /> Career tools across your journey</li>
          </ul>
        </div>
        <div className="order-1 md:order-2">
          <div className="rounded-3xl bg-gradient-to-br from-indigo-50 via-white to-purple-50 p-8 shadow-lg border border-gray-100">
            <div className="grid grid-cols-2 gap-4">
              <div className="h-32 rounded-2xl bg-indigo-100" />
              <div className="h-32 rounded-2xl bg-purple-100" />
              <div className="h-32 rounded-2xl bg-pink-100" />
              <div className="h-32 rounded-2xl bg-blue-100" />
            </div>
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="container pb-20">
        <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">What sets us apart</h3>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="group bg-white rounded-2xl p-8 border border-gray-200 hover:border-indigo-300 shadow-sm hover:shadow-lg transition-all">
            <div className="w-12 h-12 rounded-xl bg-indigo-100 flex items-center justify-center mb-4">
              <FaBolt className="text-indigo-600" />
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">Instant feedback</h4>
            <p className="text-gray-600">Actionable insights after each answer to help you iterate quickly.</p>
          </div>
          <div className="group bg-white rounded-2xl p-8 border border-gray-200 hover:border-indigo-300 shadow-sm hover:shadow-lg transition-all">
            <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center mb-4">
              <FaShieldAlt className="text-purple-600" />
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">Realistic practice</h4>
            <p className="text-gray-600">Simulations mirror real interview flows and difficulty levels.</p>
          </div>
          <div className="group bg-white rounded-2xl p-8 border border-gray-200 hover:border-indigo-300 shadow-sm hover:shadow-lg transition-all">
            <div className="w-12 h-12 rounded-xl bg-pink-100 flex items-center justify-center mb-4">
              <FaCompass className="text-pink-600" />
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">Guided growth</h4>
            <p className="text-gray-600">Structured paths so you always know your next step to improve.</p>
          </div>
        </div>
      </section>

      {/* Microservices overview */}
      <section className="container pb-24">
        <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Tools you'll access after sign-in</h3>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="rounded-2xl p-6 bg-gradient-to-br from-indigo-50 to-white border border-indigo-100">
            <h4 className="font-semibold text-gray-900 mb-2">AI Interviewer</h4>
            <p className="text-gray-600">Practice behavioral and technical interviews with instant feedback.</p>
          </div>
          <div className="rounded-2xl p-6 bg-gradient-to-br from-purple-50 to-white border border-purple-100">
            <h4 className="font-semibold text-gray-900 mb-2">CV Reviewer & Enhancer</h4>
            <p className="text-gray-600">Get suggestions to improve clarity, impact and keyword alignment.</p>
          </div>
          <div className="rounded-2xl p-6 bg-gradient-to-br from-pink-50 to-white border border-pink-100">
            <h4 className="font-semibold text-gray-900 mb-2">Job Matcher</h4>
            <p className="text-gray-600">Match your profile with relevant roles and get tailored preparation.</p>
          </div>
        </div>
      </section>
    </div>
  )
}
