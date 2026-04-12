import { createContext, useContext, useState, useEffect } from 'react'
import { useUserEmail } from './UserEmailContext'
import { login as apiLogin, register as apiRegister, logout as apiLogout } from '../api/api'

const AuthContext = createContext()

// ✅ Базовый URL для прямого fetch (если нужно)
const API_BASE = 
  import.meta.env.VITE_API_URL_BACKEND || 
  import.meta.env.VITE_API_URL || 
  'http://localhost:8000'

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [showModal, setShowModal] = useState(false)
  const [loading, setLoading] = useState(true)  // ✅ Индикатор загрузки
  const { setUserEmail } = useUserEmail()

  // Проверка токена при загрузке
  useEffect(() => {
    const checkAuth = async () => {
      const token = localStorage.getItem('stem_access_token')
      
      if (token) {
        try {
          const res = await fetch(`${API_BASE}/auth/me`, {
            headers: { Authorization: `Bearer ${token}` }
          })
          
          if (res.ok) {
            const data = await res.json()
            setUser(data)
            setUserEmail(data.email)
          } else {
            localStorage.removeItem('stem_access_token')
          }
        } catch (err) {
          console.error('Auth check error:', err)
          localStorage.removeItem('stem_access_token')
        }
      }
      setLoading(false)
    }
    
    checkAuth()
  }, [])

  const register = async (name, email, password) => {
    try {
      const data = await apiRegister(email, password, name)
      localStorage.setItem('stem_access_token', data.access_token)
      setUser(data.user)
      setUserEmail(data.user.email)
      setShowModal(false)
      return data
    } catch (err) {
      throw err  // Пробрасываем ошибку вверх для обработки в компоненте
    }
  }

  const login = async (email, password) => {
    try {
      const data = await apiLogin(email, password)
      // FastAPI OAuth2 возвращает { access_token, token_type }
      // Нам нужно отдельно запросить данные пользователя
      const res = await fetch(`${API_BASE}/auth/me`, {
        headers: { Authorization: `Bearer ${data.access_token}` }
      })
      
      if (res.ok) {
        const userData = await res.json()
        localStorage.setItem('stem_access_token', data.access_token)
        setUser(userData)
        setUserEmail(userData.email)
        setShowModal(false)
        return userData
      } else {
        throw new Error('Failed to fetch user data')
      }
    } catch (err) {
      throw err
    }
  }

  const logout = () => {
    apiLogout()
    setUser(null)
    setUserEmail(null)
  }

  const openModal = () => setShowModal(true)
  const closeModal = () => setShowModal(false)

  // Пока проверяем авторизацию — показываем лоадер
  if (loading) {
    return <div style={{ display: 'none' }}>{children}</div>
  }

  return (
    <AuthContext.Provider value={{ 
      user, 
      login, 
      register, 
      logout, 
      showModal, 
      openModal, 
      closeModal,
      isAuthenticated: !!user 
    }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider')
  }
  return context
}