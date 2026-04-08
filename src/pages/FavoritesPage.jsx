import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useFavorites } from '../context/FavoritesContext'
import { useAuth } from '../context/AuthContext'
import { useCart } from '../context/CartContext'
import './FavoritesPage.css'

function FavCard({ item }) {
  const { toggleFavorite } = useFavorites()
  const { addToCart } = useCart()
  const [added, setAdded] = useState(false)

  const telegramMsg = `Здравствуйте! Хочу узнать подробнее о товаре: ${item.name}`
  const telegramLink = `https://t.me/stem_academia_bot?text=${encodeURIComponent(telegramMsg)}`

  const handleAddToCart = () => {
    addToCart({
      id: item.id,
      name: item.name,
      image: item.image,
      price: item.price || 0,
    })
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  return (
    <div className="fav-card">
      {/* УДАЛИТЬ */}
      <button
        className="fav-card__remove"
        onClick={() => toggleFavorite(item)}
        title="Убрать из избранного"
      >✕</button>

      {/* ФОТО */}
      <img src={item.image} alt={item.name} className="fav-card__img" />

      {/* ИНФО */}
      <div className="fav-card__info">
        <h3 className="fav-card__name">{item.name}</h3>
        {item.price > 0 && (
          <p className="fav-card__price">{item.price.toLocaleString()} ₸</p>
        )}
      </div>

      {/* КНОПКИ */}
      <div className="fav-card__actions">
        <button
          className={`fav-btn-cart ${added ? 'fav-btn-cart--added' : ''}`}
          onClick={handleAddToCart}
        >
          {added ? '✓ Добавлено!' : '🛒 В корзину'}
        </button>

        <a
          href={telegramLink}
          target="_blank"
          rel="noreferrer"
          className="fav-btn-order"
        >
          📋 Оставить заявку
        </a>
      </div>
    </div>
  )
}

export default function FavoritesPage() {
  const { favorites } = useFavorites()
  const { user, setShowModal } = useAuth()

  if (!user) {
    return (
      <div className="fav-empty">
        <span>🔒</span>
        <h2>Войдите в аккаунт</h2>
        <p>Чтобы видеть избранные товары, нужно авторизоваться</p>
        <button onClick={() => setShowModal(true)} className="fav-login-btn">
          Войти / Зарегистрироваться
        </button>
      </div>
    )
  }

  if (favorites.length === 0) {
    return (
      <div className="fav-empty">
        <span>♡</span>
        <h2>Список избранного пуст</h2>
        <p>Добавляйте товары в избранное нажав на кнопку ❤</p>
        <Link to="/secondpage" className="fav-login-btn">Перейти в каталог</Link>
      </div>
    )
  }

  return (
    <div className="fav-page">
      <div className="fav-breadcrumb">
        <Link to="/">Главная</Link> / <span>Избранное</span>
      </div>

      <h1 className="fav-title">
        Избранное <span>{favorites.length} товаров</span>
      </h1>

      <div className="fav-grid">
        {favorites.map(item => (
          <FavCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  )
}