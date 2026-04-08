import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useLang } from '../i18n/LanguageContext'
import './ProductList.css'

function ApplicationModal({ product, onClose }) {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    comment: '',
  })
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)
  const [phoneError, setPhoneError] = useState('')

  const validatePhone = (phone) => {
    const digits = phone.replace(/\D/g, '')
    return digits.length >= 10 && digits.length <= 15
  }

  const handlePhoneChange = (e) => {
    const value = e.target.value
    const filtered = value.replace(/[^\d+()\-\s]/g, '')
    setForm({ ...form, phone: filtered })
    setPhoneError('')
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    if (!validatePhone(form.phone)) {
      setPhoneError('Введите корректный номер телефона')
      setLoading(false)
      return
    }

    try {
      const response = await fetch('http://localhost:8000/api/applications/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          phone: form.phone,
          comment: form.comment,
          product_name: product.title,
          article: product.article,
        }),
      })

      if (!response.ok) {
        throw new Error('Ошибка отправки')
      }

      setSent(true)
    } catch (error) {
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

        <h3 className="modal-title">Оставить заявку</h3>
        <p className="modal-product-name">{product.title}</p>
        {product.article && (
          <p className="modal-article">Артикул: {product.article}</p>
        )}

        {sent ? (
          <div className="modal-success">
            <strong>Заявка отправлена!</strong>
            Менеджер свяжется с вами в ближайшее время.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="modal-form">
            <input
              className="modal-input"
              type="text"
              placeholder="Ваше имя"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
            />

            <input
              className="modal-input"
              type="tel"
              placeholder="+7 (777) 123-45-67"
              value={form.phone}
              onChange={handlePhoneChange}
              required
            />

            {phoneError && <p className="modal-error">{phoneError}</p>}

            <textarea
              className="modal-input modal-textarea"
              placeholder="Комментарий"
              value={form.comment}
              onChange={(e) => setForm({ ...form, comment: e.target.value })}
            />

            <button type="submit" className="btn-order" disabled={loading}>
              {loading ? 'Отправка...' : 'Отправить заявку'}
            </button>
          </form>
        )}
      </div>
    </div>
  )
}

function ProductCard({ product }) {
  const [activeColor, setActiveColor] = useState(0)
  const [showModal, setShowModal] = useState(false)
  const { t } = useLang()

  const img = Array.isArray(product.imgs) ? product.imgs[0] : product.img
  const size = Array.isArray(product.size) ? product.size.join(', ') : product.size
  const material = Array.isArray(product.material) ? product.material.join(', ') : product.material

  return (
    <>
      <div className="divan-card">
        <div className="divan-card__gallery">
          <img src={img} alt={product.title} className="divan-card__main-img" />
        </div>

        <div className="divan-card__info">
          <h2 className="divan-card__title">{product.title}</h2>
          <p className="divan-card__desc">{product.description}</p>

          <div className="divan-card__section">
            <span className="divan-card__label">
              Цвет: <strong>{product.colors[activeColor].name}</strong>
            </span>
            <div className="divan-card__colors">
              {product.colors.map((c, i) => (
                <button
                  key={i}
                  type="button"
                  className={i === activeColor ? 'color-dot active' : 'color-dot'}
                  style={{ backgroundColor: c.hex }}
                  onClick={() => setActiveColor(i)}
                  title={c.name}
                />
              ))}
            </div>
          </div>

          <div className="divan-card__section">
            <span className="divan-card__label">Характеристики:</span>
            <table className="divan-card__table">
              <tbody>
                <tr>
                  <td>{t.material}</td>
                  <td>{material}</td>
                </tr>
                <tr>
                  <td>Размеры</td>
                  <td>{size}</td>
                </tr>
                <tr>
                  <td>Артикул</td>
                  <td>{product.article}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="divan-card__delivery">
            <span>🚚 {t.delivery}</span>
            <span>📍 {t.pickup}</span>
          </div>

          <div className="divan-card__actions">
            <button
              type="button"
              className="btn-order"
              onClick={() => setShowModal(true)}
            >
              {t.order_btn}
            </button>

            <button type="button" className="btn-favorite">
              ❤ {t.favorite_btn}
            </button>
          </div>

          <div className="divan-card__share">
            <button type="button">↗ {t.share}</button>
            <button type="button">⚖ {t.compare_btn}</button>
          </div>
        </div>
      </div>

      {showModal && (
        <ApplicationModal
          product={product}
          onClose={() => setShowModal(false)}
        />
      )}
    </>
  )
}

export default function ProductList({ products, title, backPath, backLabel }) {
  const { t } = useLang()

  return (
    <div className="divany-page">
      <div className="divany-breadcrumb">
        <Link to="/" className="breadcrumb-link">{t.home}</Link>
        <span> / </span>
        <Link to={backPath} className="breadcrumb-link">{backLabel}</Link>
        <span> / </span>
        <span>{title}</span>
      </div>

      <h1 className="divany-title">
        {title} <span>{products.length} товаров</span>
      </h1>

      <div className="divany-list">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  )
}