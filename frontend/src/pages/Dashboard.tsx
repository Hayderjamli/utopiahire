import React, { useContext } from 'react'
import { AuthContext } from '../AuthContext'
import { useServices } from '../ServiceContext'
import { useNavigate } from 'react-router-dom'
import { FaComments, FaFileAlt, FaBriefcase } from 'react-icons/fa'

export default function Dashboard() {
  const context = useContext(AuthContext)
  const { history, clearHistory } = useServices()
  const navigate = useNavigate()

  if (!context) {
    throw new Error('Dashboard must be used within AuthProvider')
  }

  const { user } = context

  return (
    <div className="bg-gradient-to-b from-white to-primary-50/40 min-h-[60vh]">
      <section className="container pt-12 pb-6">
        <h2 className="text-3xl font-bold text-gray-900">Welcome back{user ? `, ${user.name}` : ''}</h2>
        <p className="text-gray-600 mt-2">Pick a tool to continue your preparation</p>
      </section>

      <section className="container pb-16 grid md:grid-cols-3 gap-6">
        {/* AI Interviewer */}
        <div className="group bg-white rounded-2xl p-6 border border-gray-200 hover:border-primary-300 shadow-sm hover:shadow-lg transition-all">
          <div className="w-12 h-12 rounded-xl bg-primary-100 flex items-center justify-center mb-4">
            <FaComments className="text-primary-600" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900">AI Interviewer</h3>
          <p className="text-gray-600 mt-1">Practice behavioral and technical interviews with instant AI feedback.</p>
          <button onClick={() => navigate('/interviewer/setup')} className="mt-4 px-4 py-2 rounded-lg bg-gradient-to-r from-primary-600 to-primary-700 text-white font-medium shadow hover:shadow-md">Start session</button>
        </div>

        {/* CV Reviewer */}
        <div className="group bg-white rounded-2xl p-6 border border-gray-200 hover:border-primary-300 shadow-sm hover:shadow-lg transition-all">
          <div className="w-12 h-12 rounded-xl bg-primary-100 flex items-center justify-center mb-4">
            <FaFileAlt className="text-primary-700" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900">CV Reviewer & Enhancer</h3>
          <p className="text-gray-600 mt-1">Upload your CV to get clarity, impact, and keyword suggestions.</p>
          <button onClick={() => navigate('/cv')} className="mt-4 px-4 py-2 rounded-lg border-2 border-gray-200 hover:border-primary-500 hover:text-primary-600 bg-white font-medium">Upload CV</button>
        </div>

        {/* Job Matcher */}
        <div className="group bg-white rounded-2xl p-6 border border-gray-200 hover:border-secondary-300 shadow-sm hover:shadow-lg transition-all">
          <div className="w-12 h-12 rounded-xl bg-secondary-100 flex items-center justify-center mb-4">
            <FaBriefcase className="text-secondary-700" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900">Job Matcher</h3>
          <p className="text-gray-600 mt-1">Discover tailored roles that fit your profile and preparation level.</p>
          <button onClick={() => navigate('/jobs')} className="mt-4 px-4 py-2 rounded-lg border-2 border-gray-200 hover:border-secondary-500 hover:text-secondary-600 bg-white font-medium">Find jobs</button>
        </div>
      </section>

      {/* History */}
      <section className="container pb-16">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-semibold text-gray-900">Recent activity</h3>
          {history.length > 0 && (
            <button onClick={clearHistory} className="text-sm px-3 py-1.5 rounded-lg border-2 border-gray-200 hover:border-red-400 hover:text-red-600">Clear</button>
          )}
        </div>
        {history.length === 0 ? (
          <p className="text-gray-600">No activity yet. Your recent sessions and tools will appear here.</p>
        ) : (
          <ul className="space-y-3">
            {history.slice(0, 8).map(item => (
              <li key={item.id} className="bg-white rounded-xl p-4 border border-gray-200 flex items-center justify-between">
                <div>
                  <div className="font-medium text-gray-900 capitalize">{item.type?.replace('-', ' ') || 'Activity'}</div>
                  <div className="text-sm text-gray-600">{item.title} • {new Date(item.ts).toLocaleString()}</div>
                </div>
                {item.meta?.results !== undefined && (
                  <div className="text-sm text-gray-600">{item.meta.results} results</div>
                )}
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  )
}
