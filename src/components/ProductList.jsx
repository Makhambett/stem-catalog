import { useState, useEffect, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { useLang } from '../i18n/LanguageContext'
import { useFavorites } from '../context/FavoritesContext'
import { useCart } from '../context/CartContext'
import './ProductList.css'

const API_BASE_URL =
  import.meta.env.VITE_API_URL_BACKEND || 'http://localhost:8000'

function ApplicationModal({ product, onClose }) {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    username: '',
    comment: '',
  })
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)
  const [phoneError, setPhoneError] = useState('')
  const [nameError, setNameError] = useState('')

  useEffect(() => {
    const handler = (e) => {
      if (e.key === 'Escape') onClose()
    }

    document.addEventListener('keydown', handler)
    return () => document.removeEventListener('keydown', handler)
  }, [onClose])

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [])

  const validateName = (name) => {
    const cleaned = name.trim()
    return /^[A-Za-zА-Яа-яӘәҒғҚқҢңӨөҰұҮүҺһІіЁё\s-]{2,50}$/.test(cleaned)
  }

  const validatePhone = (phone) => {
    const digits = phone.replace(/\D/g, '')
    return digits.length >= 10 && digits.length <= 15
  }

  const handlePhoneChange = (e) => {
    const filtered = e.target.value.replace(/[^\d+()\-\s]/g, '')
    setForm((prev) => ({ ...prev, phone: filtered }))
    setPhoneError('')
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!validateName(form.name)) {
      setNameError('Введите корректное имя')
      return
    }

    if (!validatePhone(form.phone)) {
      setPhoneError('Введите корректный номер телефона')
      return
    }

    setLoading(true)

    try {
      const response = await fetch(`${API_BASE_URL}/api/applications/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: form.name,
          phone: form.phone,
          username: form.username,
          comment: form.comment,
          product_name: product.title,
          article: product.article,
          product_url: window.location.href,
        }),
      })

      if (!response.ok) {
        throw new Error('Ошибка отправки')
      }

      setSent(true)
    } catch {
      alert('Не удалось отправить заявку. Попробуйте позже.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} type="button">
          ×
        </button>

        {sent ? (
          <div className="modal-success">
            <strong>✅ Заявка отправлена!</strong>
            Менеджер свяжется с вами в ближайшее время.
          </div>
        ) : (
          <>
            <h3 className="modal-title">Оставить заявку</h3>
            <p className="modal-product-name">{product.title}</p>

            {product.article && (
              <p className="modal-article">Артикул: {product.article}</p>
            )}

            <form className="modal-form" onSubmit={handleSubmit}>
              <div>
                <input
                  className="modal-input"
                  type="text"
                  placeholder="Ваше имя"
                  value={form.name}
                  onChange={(e) => {
                    setForm((prev) => ({ ...prev, name: e.target.value }))
                    setNameError('')
                  }}
                  required
                />
                {nameError && <span className="modal-error">{nameError}</span>}
              </div>

              <div>
                <input
                  className="modal-input"
                  type="tel"
                  placeholder="+7 (777) 123-45-67"
                  value={form.phone}
                  onChange={handlePhoneChange}
                  required
                />
                {phoneError && (
                  <span className="modal-error">{phoneError}</span>
                )}
              </div>

              <div>
                <input
                  className="modal-input"
                  type="text"
                  placeholder="Telegram username (необязательно)"
                  value={form.username}
                  onChange={(e) =>
                    setForm((prev) => ({ ...prev, username: e.target.value }))
                  }
                />
              </div>

              <div>
                <textarea
                  className="modal-input modal-textarea"
                  placeholder="Комментарий"
                  value={form.comment}
                  onChange={(e) =>
                    setForm((prev) => ({ ...prev, comment: e.target.value }))
                  }
                />
              </div>

              <button type="submit" className="btn-order" disabled={loading}>
                {loading ? 'Отправка...' : 'Отправить заявку'}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  )
}

function ImagePlaceholder() {
  return (
    <div className="divan-card__no-img">
      <span className="divan-card__soon-badge">СКОРО</span>
      <span className="divan-card__soon-text">СКОРО</span>
    </div>
  )
}

function ProductCard({ product }) {
  const [showModal, setShowModal] = useState(false)
  const [activeColor, setActiveColor] = useState(0)
  const [addedToCart, setAddedToCart] = useState(false)
  const [imgError, setImgError] = useState(false)

  const { t } = useLang()
  const { toggleFavorite, isFavorite } = useFavorites()
  const { addToCart } = useCart()

  const img = Array.isArray(product.imgs) ? product.imgs[0] : product.img
  const size = Array.isArray(product.size) ? product.size.join(', ') : product.size
  const material = Array.isArray(product.material)
    ? product.material.join(', ')
    : product.material
  const colors = product.colors || []

  const inFavorite = isFavorite(product.id)
  const showPlaceholder = !img || imgError

  const handleClose = useCallback(() => setShowModal(false), [])

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.title,
      image: img,
      price: product.price || 0,
      article: product.article,
    })

    setAddedToCart(true)
    setTimeout(() => setAddedToCart(false), 2000)
  }

  const handleFavoriteClick = () => {
    toggleFavorite(product)
  }

  return (
    <>
      <div className="divan-card">
        <div className="divan-card__gallery">
          {showPlaceholder ? (
            <ImagePlaceholder />
          ) : (
            <img
              src={img}
              alt={product.title}
              className="divan-card__main-img"
              loading="lazy"
              onError={() => setImgError(true)}
            />
          )}

          {product.in_stock === false && (
            <span className="badge-out">Нет в наличии</span>
          )}
        </div>

        <div className="divan-card__info">
          <h2 className="divan-card__title">{product.title}</h2>
          <p className="divan-card__desc">{product.description}</p>

          {colors.length > 0 && (
            <div className="divan-card__section">
              <span className="divan-card__label">
                Цвет: <strong>{colors[activeColor]?.name || 'Стандарт'}</strong>
              </span>

              <div className="divan-card__colors">
                {colors.map((color, index) => (
                  <button
                    key={index}
                    className={`color-dot ${index === activeColor ? 'active' : ''}`}
                    style={{ backgroundColor: color.hex }}
                    onClick={() => setActiveColor(index)}
                    title={color.name}
                    type="button"
                  />
                ))}
              </div>
            </div>
          )}

          <div className="divan-card__section">
            <span className="divan-card__label">Характеристики:</span>

            <table className="divan-card__table">
              <tbody>
                {material && (
                  <tr>
                    <td>{t.material || 'Материал'}</td>
                    <td>{material}</td>
                  </tr>
                )}

                {size && (
                  <tr>
                    <td>Размеры</td>
                    <td>{size}</td>
                  </tr>
                )}

                {product.article && (
                  <tr>
                    <td>Артикул</td>
                    <td>{product.article}</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          <div className="divan-card__delivery">
            <span>🚚 {t.delivery || 'Доставка по Казахстану'}</span>
            <span>📍 {t.pickup || 'Самовывоз'}</span>
          </div>

          <div className="divan-card__actions">
            <button
              className="btn-add-to-cart"
              onClick={handleAddToCart}
              disabled={addedToCart || product.in_stock === false}
              type="button"
            >
              {addedToCart ? '✓ Добавлено!' : '🛒 В корзину'}
            </button>

            <button
              className={`btn-favorite ${inFavorite ? 'active' : ''}`}
              onClick={handleFavoriteClick}
              type="button"
              aria-pressed={inFavorite}
            >
              ❤ {inFavorite ? 'В избранном' : 'В избранное'}
            </button>
          </div>

          <button
            className="btn-order-full"
            onClick={() => setShowModal(true)}
            type="button"
          >
            📝 Оставить заявку
          </button>
        </div>
      </div>

      {showModal && <ApplicationModal product={product} onClose={handleClose} />}
    </>
  )
}

export default function ProductList({ products, title, backPath, backLabel }) {
  const { t } = useLang()

  if (!products || products.length === 0) {
    return (
      <div className="divany-page">
        <div className="empty-state">
          <h2>😕 Товары не найдены</h2>
          <Link to={backPath} className="btn-back">
            ← Вернуться назад
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="divany-page">
      <div className="divany-breadcrumb">
        <Link to="/" className="breadcrumb-link">
          {t.home || 'Главная'}
        </Link>

        <span> / </span>

        {backPath && (
          <>
            <Link to={backPath} className="breadcrumb-link">
              {backLabel || 'Каталог'}
            </Link>
            <span> / </span>
          </>
        )}

        <span>{title}</span>
      </div>

      <h1 className="divany-title">
        {title} <span>{products.length} товаров</span>
      </h1>

      <div className="divany-list">
        {products.map((product) => (
          <ProductCard key={product.id || product.article} product={product} />
        ))}
      </div>
    </div>
  )
}