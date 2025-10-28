import React, { createContext, useState, useContext, useEffect } from 'react'

const ServiceContext = createContext()
export const useServices = () => useContext(ServiceContext)

export function ServiceProvider({ children }){
  const [cvFile, setCvFile] = useState(null)
  const [cvText, setCvText] = useState('')
  const [interviewConfig, setInterviewConfig] = useState({
    jobTitle: '', language: 'English', company: '', experience: '', seniority: 'Junior', description: ''
  })
  const [history, setHistory] = useState(() => {
    try { return JSON.parse(localStorage.getItem('history') || '[]') } catch { return [] }
  })

  useEffect(()=>{
    localStorage.setItem('history', JSON.stringify(history))
  }, [history])

  const addHistory = (entry) => {
    const withId = { id: Date.now(), ts: new Date().toISOString(), ...entry }
    setHistory(prev => [withId, ...prev].slice(0, 100))
  }

  const clearHistory = () => setHistory([])

  const value = {
    cvFile, setCvFile,
    cvText, setCvText,
    interviewConfig, setInterviewConfig,
    history, addHistory, clearHistory,
  }
  return <ServiceContext.Provider value={value}>{children}</ServiceContext.Provider>
}
