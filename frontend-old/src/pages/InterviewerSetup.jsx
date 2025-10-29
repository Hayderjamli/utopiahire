import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useServices } from '../ServiceContext'

export default function InterviewerSetup(){
  const { cvFile, setCvFile, cvText, setCvText, interviewConfig, setInterviewConfig, addHistory } = useServices()
  const navigate = useNavigate()

  const onFile = (f) => {
    if(!f) return
    setCvFile(f)
    // Optional: read text for matching (txt only for now)
    if(f.type === 'text/plain'){
      const reader = new FileReader()
      reader.onload = () => setCvText(String(reader.result || ''))
      reader.readAsText(f)
    }
  }

  const onDrop = (e) => {
    e.preventDefault()
    const f = e.dataTransfer.files?.[0]
    onFile(f)
  }

  const createInterview = (e) => {
    e.preventDefault()
    // Record history
    addHistory({
      type: 'interview',
      title: interviewConfig.jobTitle || 'Interview',
      meta: {
        company: interviewConfig.company,
        language: interviewConfig.language,
        seniority: interviewConfig.seniority
      }
    })
    // In a real app we'd POST this to backend to create a session
    navigate('/interviewer/session')
  }

  return (
    <div className="container py-10">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Create an Interview</h1>

      <form onSubmit={createInterview} className="grid md:grid-cols-2 gap-8">
        {/* Left: CV upload */}
        <div>
          <h2 className="font-semibold text-gray-900 mb-3">Upload your CV</h2>
          <div 
            className="rounded-2xl border-2 border-dashed border-gray-300 p-6 text-center bg-white hover:border-indigo-400 transition"
            onDragOver={(e)=>e.preventDefault()}
            onDrop={onDrop}
          >
            <p className="text-gray-600 mb-4">Drag & drop your CV here, or click to browse</p>
            <input 
              type="file" 
              accept=".pdf,.doc,.docx,.txt" 
              onChange={(e)=>onFile(e.target.files?.[0])}
              className="block w-full text-sm text-gray-600" />
            {cvFile && <p className="mt-3 text-sm text-gray-700">Selected: <strong>{cvFile.name}</strong></p>}
            <p className="mt-3 text-xs text-gray-500">Tip: upload a .txt to allow quick text-based features</p>
          </div>

          <div className="mt-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">Or paste CV text</label>
            <textarea 
              className="w-full min-h-[140px] rounded-xl border-2 border-gray-200 p-3 focus:border-indigo-500 focus:ring-0"
              placeholder="Paste your CV text here..."
              value={cvText}
              onChange={(e)=>setCvText(e.target.value)}
            />
          </div>
        </div>

        {/* Right: job details */}
        <div>
          <h2 className="font-semibold text-gray-900 mb-3">Job details</h2>
          <div className="grid grid-cols-1 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Job title</label>
              <input className="w-full rounded-xl border-2 border-gray-200 p-3 focus:border-indigo-500"
                value={interviewConfig.jobTitle}
                onChange={(e)=>setInterviewConfig({...interviewConfig, jobTitle: e.target.value})} required />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Language</label>
              <select className="w-full rounded-xl border-2 border-gray-200 p-3 focus:border-indigo-500"
                value={interviewConfig.language}
                onChange={(e)=>setInterviewConfig({...interviewConfig, language: e.target.value})}>
                <option>English</option>
                <option>French</option>
                <option>Arabic</option>
                <option>Spanish</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Company name</label>
              <input className="w-full rounded-xl border-2 border-gray-200 p-3 focus:border-indigo-500"
                value={interviewConfig.company}
                onChange={(e)=>setInterviewConfig({...interviewConfig, company: e.target.value})} />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Required experience</label>
              <input className="w-full rounded-xl border-2 border-gray-200 p-3 focus:border-indigo-500"
                placeholder="e.g., 3+ years React"
                value={interviewConfig.experience}
                onChange={(e)=>setInterviewConfig({...interviewConfig, experience: e.target.value})} />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Seniority</label>
              <select className="w-full rounded-xl border-2 border-gray-200 p-3 focus:border-indigo-500"
                value={interviewConfig.seniority}
                onChange={(e)=>setInterviewConfig({...interviewConfig, seniority: e.target.value})}>
                <option>Junior</option>
                <option>Mid</option>
                <option>Senior</option>
                <option>Lead</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Job description</label>
              <textarea className="w-full min-h-[120px] rounded-xl border-2 border-gray-200 p-3 focus:border-indigo-500"
                placeholder="Paste the job description"
                value={interviewConfig.description}
                onChange={(e)=>setInterviewConfig({...interviewConfig, description: e.target.value})} />
            </div>
          </div>

          <button type="submit" className="mt-6 w-full py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold shadow hover:shadow-lg">
            Create Interview
          </button>
        </div>
      </form>
    </div>
  )
}
