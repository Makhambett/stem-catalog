import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Sidebar from './Sidebar'
import './Navbar.css'

const links = [
  { label: 'дизайн интерьера', path: '/' },
  {
    label: 'мебель', path: '/secondpage',
    dropdown: [
      { label: 'Диваны',   path: '/secondpage/divany' },
      { label: 'Кресла',   path: '/secondpage/kreslo' },
      { label: 'Пуфы',     path: '/secondpage/pufy' },
      { label: 'Стеллажи', path: '/secondpage/stellazhi' },
      { label: 'Тумбы',    path: '/secondpage/tumby' },
      { label: 'Стулья',   path: '/secondpage/stulya' },
      { label: 'Шкафы',    path: '/secondpage/shkafy' },
    ]
  },
  {
    label: 'электротехника', path: '/electro',
    dropdown: [
      { label: 'Интерактивные панели', path: '/electro/interactive' },
      { label: 'Компьютеры',          path: '/electro/computers' },
      { label: 'Инфо киоск',          path: '/electro/infokiosk' },
      { label: 'Станки',              path: '/electro/stanki' },
      { label: 'Бытовая техника',     path: '/electro/bytovaya' },
      { label: '3Д принтеры',         path: '/electro/printers3d' },
    ]
  },
  {
    label: 'декор', path: '/decor',
    dropdown: [
      { label: 'ГОС',         path: '/decor/gos' },
      { label: '3D панели',   path: '/decor/3dpanels' },
      { label: 'Освещение',   path: '/decor/lighting' },
      { label: 'Перегородки', path: '/decor/peregorodki' },
      { label: 'Шторы',       path: '/decor/shtory' },
      { label: 'Растения',    path: '/decor/rasteniya' },
      { label: 'Доски',       path: '/decor/doski' },
    ]
  },
  {
    label: 'цифровые продукты', path: '/digital',
    dropdown: [
      { label: 'Roqed Science', path: '/digital/roqed' },
      { label: 'STEM Platform', path: '/digital/stemplatform' },
      { label: 'Инфо стенды',  path: '/digital/infostend' },
      { label: 'Steam Book',   path: '/digital/steambook' },
    ]
  },
  {
    label: 'оборудования', path: '/equipment',
    dropdown: [
      { label: 'U-LAB',   path: '/equipment/ulab' },
      { label: 'Labdisc', path: '/equipment/labdisc' },
    ]
  },
  { label: 'контакты', path: '/contacts' },
]

export default function Navbar() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const location = useLocation()

  const isActive = (link) => {
    if (link.path === '/') return location.pathname === '/'
    return location.pathname.startsWith(link.path)
  }

  return (
    <>
      <header className="navbar">
        <div className="navbar__left">
          <button className="navbar__menu-btn" onClick={() => setSidebarOpen(true)}>
            <span></span>
            <span></span>
            <span></span>
          </button>
          <span className="navbar__menu-label">меню</span>
          <div className="navbar__divider" />

          <nav className="navbar__links">
            {links.map(link => (
              <div key={link.path} className={`navbar__item ${isActive(link) ? 'navbar__item--active' : ''}`}>
                <Link
                  to={link.path}
                  className={`navbar__link ${isActive(link) ? 'navbar__link--active' : ''}`}
                >
                  {link.label}
                  {link.dropdown && (
                    <svg className="navbar__arrow" width="10" height="6" viewBox="0 0 10 6" fill="none">
                      <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                  )}
                </Link>

                {isActive(link) && (
                  <div className="navbar__indicator" />
                )}

                {link.dropdown && (
                  <div className="navbar__dropdown">
                    <div className="navbar__dropdown-arrow" />
                    {link.dropdown.map(item => (
                      <Link
                        key={item.path}
                        to={item.path}
                        className={`navbar__dropdown-item ${location.pathname === item.path ? 'navbar__dropdown-item--active' : ''}`}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>

        <div className="navbar__right">
          <div className="navbar__divider" />

          {/* Telegram кнопка */}
          <a href="https://t.me/stem_academia_bot" target="_blank" className="navbar__tg-btn">
            ✈️ Написать нам
          </a>
          <div className="navbar__divider" />

          <a href="tel:+77000880132" className="navbar__phone">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.04 1.18 2 2 0 012 .04h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
            </svg>
            +7 (700) 088 0132
          </a>
          <div className="navbar__divider" />
          <Link to="/" className="navbar__logo-wrap">
            <img src="/img/vvedenie/Vector.png" alt="STEM Academia" className="navbar__logo" />
          </Link>
        </div>
      </header>

      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
    </>
  )
}
