import React, { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../AuthContext'

export default function Register(){
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)
  const { register } = useContext(AuthContext)
  const navigate = useNavigate()

  const checks = {
    lower: /[a-z]/.test(password),
    upper: /[A-Z]/.test(password),
    digit: /\d/.test(password),
    symbol: /[^A-Za-z0-9]/.test(password),
    length: password.length >= 8,
  }
  const isStrong = Object.values(checks).every(Boolean)

  const submit = async e => {
    e.preventDefault()
    setError(null)
    if(!isStrong){
      setError('Password must be at least 8 characters and include lowercase (a-z), uppercase (A-Z), a number (0-9), and a symbol.')
      return
    }
    try{
      await register(name, email, password)
      navigate('/dashboard')
    }catch(err){
      setError(err?.response?.data?.message || 'Registration failed')
    }
  }

  return (
    <section className="container auth">
      <h2>Register</h2>
      <form onSubmit={submit}>
        <label>Name</label>
        <input value={name} onChange={e=>setName(e.target.value)} required />
        <label>Email</label>
        <input value={email} onChange={e=>setEmail(e.target.value)} required />
        <label>Password</label>
        <input type="password" value={password} onChange={e=>setPassword(e.target.value)} required />
        <ul className="text-xs text-gray-600 space-y-1 mb-2">
          <li className={checks.length ? 'text-green-600' : ''}>At least 8 characters</li>
          <li className={checks.lower ? 'text-green-600' : ''}>Contains a lowercase letter (a-z)</li>
          <li className={checks.upper ? 'text-green-600' : ''}>Contains an uppercase letter (A-Z)</li>
          <li className={checks.digit ? 'text-green-600' : ''}>Contains a number (0-9)</li>
          <li className={checks.symbol ? 'text-green-600' : ''}>Contains a symbol (!@#$...)</li>
        </ul>
        <button className="btn" type="submit" disabled={!isStrong}>Create account</button>
        {error && <p className="error">{error}</p>}
      </form>
    </section>
  )
}
