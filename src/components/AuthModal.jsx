import { useState } from 'react'
import { useAuth } from '../context/AuthContext'
import './AuthModal.css'

export default function AuthModal() {
  const { login, register, setShowModal } = useAuth()
  const [mode, setMode] = useState('login')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setLoading(true)
    try {
      if (mode === 'register') {
        await register(name, email, password)
      } else {
        await login(email, password)
      }
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="auth-backdrop" onClick={() => setShowModal(false)}>
      <div className="auth-box" onClick={e => e.stopPropagation()}>

        <div className="auth-box__logo">
          <span className="auth-logo-stem">STEM</span>
          <span className="auth-logo-academia">Academia</span>
        </div>

        <div className="auth-box__tabs">
          <button
            className={`auth-box__tab ${mode === 'login' ? 'active' : ''}`}
            onClick={() => { setMode('login'); setError('') }}
          >Войти</button>
          <button
            className={`auth-box__tab ${mode === 'register' ? 'active' : ''}`}
            onClick={() => { setMode('register'); setError('') }}
          >Регистрация</button>
        </div>

        <form onSubmit={handleSubmit} className="auth-box__form">
          {mode === 'register' && (
            <div className="auth-box__field">
              <label>Имя</label>
              <input
                type="text"
                placeholder="Ваше имя"
                value={name}
                onChange={e => setName(e.target.value)}
              />
            </div>
          )}
          <div className="auth-box__field">
            <label>Email</label>
            <input
              type="email"
              placeholder="example@mail.com"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </div>
          <div className="auth-box__field">
            <label>Пароль</label>
            <input
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </div>

          {error && <div className="auth-box__error">⚠️ {error}</div>}

          <button type="submit" className="auth-box__submit" disabled={loading}>
            {loading ? 'Загрузка...' : mode === 'login' ? 'Войти в аккаунт' : 'Создать аккаунт'}
          </button>
        </form>

        <p className="auth-box__switch">
          {mode === 'login' ? (
            <>Нет аккаунта? <span onClick={() => { setMode('register'); setError('') }}>Зарегистрироваться</span></>
          ) : (
            <>Уже есть аккаунт? <span onClick={() => { setMode('login'); setError('') }}>Войти</span></>
          )}
        </p>

        <button className="auth-box__close" onClick={() => setShowModal(false)}>✕</button>
      </div>
    </div>
  )
}