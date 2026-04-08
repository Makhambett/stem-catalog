import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useLang } from '../i18n/LanguageContext'
import { useCart } from '../context/CartContext'
import { useAuth } from '../context/AuthContext'
import { useFavorites } from '../context/FavoritesContext'
import './Navbar.css'

export default function Navbar() {
  const [query, setQuery] = useState('')
  const { lang, setLang, t } = useLang()
  const navigate = useNavigate()
  const { totalCount, setIsOpen } = useCart()
  const { user, logout, setShowModal } = useAuth()
  const { favorites } = useFavorites()

  const categories = [
    { label: t.nav_design,    path: '/' },
    { label: t.nav_furniture, path: '/secondpage' },
    { label: t.nav_electro,   path: '/electro' },
    { label: t.nav_decor,     path: '/decor' },
    { label: t.nav_equipment, path: '/equipment' },
    { label: t.nav_digital,   path: '/digital' },
    { label: t.nav_contacts,  path: '/contacts' },
  ]

  function handleSearch(e) {
    e.preventDefault()
    if (query.trim()) {
      navigate(`/search?q=${encodeURIComponent(query.trim())}`)
      setQuery('')
    }
  }

  return (
    <header className="navbar-wrapper">

      {/* TOP BAR */}
      <div className="navbar-topbar">
        <span className="topbar-city">📍 {t.city}</span>
        <Link to="/contacts" className="topbar-link">{t.stores}</Link>
        <div className="topbar-right">
          <span className="topbar-phone">📞 {t.phone}</span>
          <span
            className={`topbar-lang ${lang === 'ru' ? 'active' : ''}`}
            onClick={() => setLang('ru')}
          >
            Рус
          </span>
          <span
            className={`topbar-lang ${lang === 'kz' ? 'active' : ''}`}
            onClick={() => setLang('kz')}
          >
            Қаз
          </span>
        </div>
      </div>

      {/* MAIN NAV */}
      <div className="navbar-main">
        <Link to="/" className="navbar-logo">
          <span className="logo-stem">STEM</span>
          <span className="logo-academia">Academia</span>
        </Link>

        <form className="navbar-search" onSubmit={handleSearch}>
          <input
            type="text"
            placeholder={t.search}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button type="submit">🔍</button>
        </form>

        <div className="navbar-icons">

          {/* ИЗБРАННОЕ */}
          <Link to="/favorites" className="nav-icon-btn" title={t.favorite}>
            <div className="cart-icon-wrap">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
              </svg>
              {favorites.length > 0 && (
                <span className="cart-badge">{favorites.length}</span>
              )}
            </div>
            <span>{t.favorite}</span>
          </Link>

          {/* СРАВНИТЬ */}
          <button className="nav-icon-btn" title={t.compare}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
            </svg>
            <span>{t.compare}</span>
          </button>

          {/* TELEGRAM */}
          <a
            href="https://t.me/stem_academia_bot"
            target="_blank"
            rel="noreferrer"
            className="nav-icon-btn nav-telegram"
            title="Telegram"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.248-1.97 9.289c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12L7.17 13.857l-2.95-.924c-.64-.203-.654-.64.136-.948l11.527-4.443c.533-.194 1.003.131.679.706z"/>
            </svg>
            <span>Telegram</span>
          </a>

          {/* КОРЗИНА */}
          <button
            className="nav-icon-btn nav-cart"
            title="Корзина"
            onClick={() => setIsOpen(true)}
          >
            <div className="cart-icon-wrap">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="9" cy="21" r="1"/>
                <circle cx="20" cy="21" r="1"/>
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
              </svg>
              {totalCount > 0 && (
                <span className="cart-badge">{totalCount}</span>
              )}
            </div>
            <span>Корзина</span>
          </button>

          {/* ВХОД / ЛИЧНЫЙ КАБИНЕТ */}
          {user ? (
            <div className="nav-user">
              {/* ← Link на /profile */}
              <Link to="/profile" className="nav-icon-btn nav-account">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                  <circle cx="12" cy="7" r="4"/>
                </svg>
                <span>{user.name}</span>
              </Link>
              <button className="nav-logout" onClick={logout} title="Выйти">✕</button>
            </div>
          ) : (
            <button
              className="nav-icon-btn nav-account"
              title="Войти"
              onClick={() => setShowModal(true)}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                <circle cx="12" cy="7" r="4"/>
              </svg>
              <span>Войти</span>
            </button>
          )}

        </div>
      </div>

      {/* CATEGORY BAR */}
      <nav className="navbar-categories">
        {categories.map((cat) => (
          <Link key={cat.path} to={cat.path} className="cat-link">
            {cat.label}
          </Link>
        ))}
      </nav>

    </header>
  )
}