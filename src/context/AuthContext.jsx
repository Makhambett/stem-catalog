import { createContext, useContext, useState, useEffect } from 'react'
import { useUserEmail } from './UserEmailContext'

const AuthContext = createContext()
const API = 'http://localhost:8000'

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [showModal, setShowModal] = useState(false)
  const { setUserEmail } = useUserEmail()

  useEffect(() => {
    const token = localStorage.getItem('stem_token')
    if (token) {
      fetch(`${API}/auth/me`, {
        headers: { Authorization: `Bearer ${token}` }
      })
        .then(res => res.ok ? res.json() : null)
        .then(data => {
          if (data) {
            setUser(data)
            setUserEmail(data.email)
          }
        })
        .catch(() => localStorage.removeItem('stem_token'))
    }
  }, [])

  const register = async (name, email, password) => {
    const res = await fetch(`${API}/auth/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, password })
    })
    const data = await res.json()
    if (!res.ok) throw new Error(data.detail || 'Ошибка регистрации')
    localStorage.setItem('stem_token', data.access_token)
    setUser(data.user)
    setUserEmail(data.user.email)
    setShowModal(false)
  }

  const login = async (email, password) => {
    const res = await fetch(`${API}/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    })
    const data = await res.json()
    if (!res.ok) throw new Error(data.detail || 'Неверный email или пароль')
    localStorage.setItem('stem_token', data.access_token)
    setUser(data.user)
    setUserEmail(data.user.email)
    setShowModal(false)
  }

  const logout = () => {
    localStorage.removeItem('stem_token')
    setUser(null)
    setUserEmail(null)
  }

  return (
    <AuthContext.Provider value={{ user, login, register, logout, showModal, setShowModal }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)