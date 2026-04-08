import { useState, useEffect } from 'react'
import { useSearchParams, Link } from 'react-router-dom'
import { getProducts } from '../api/api'
import { useLang } from '../i18n/LanguageContext'
import './SearchPage.css'

export default function SearchPage() {
  const [searchParams] = useSearchParams()
  const query = searchParams.get('q') || ''
  const [results, setResults] = useState([])
  const [loading, setLoading] = useState(true)
  const { t } = useLang()

  useEffect(() => {
    if (query) {
      setLoading(true)
      getProducts({ q: query }).then(data => {
        setResults(data)
        setLoading(false)
      })
    }
  }, [query])

  return (
    <div className="search-page">
      <div className="search-breadcrumb">
        <Link to="/" className="breadcrumb-link">{t.home}</Link>
        <span> / </span>
        <span>Поиск: {query}</span>
      </div>

      <h1 className="search-title">
        Результаты поиска: <span>"{query}"</span>
      </h1>

      {loading ? (
        <p className="search-loading">Загрузка...</p>
      ) : results.length === 0 ? (
        <p className="search-empty">Ничего не найдено по запросу "{query}"</p>
      ) : (
        <>
          <p className="search-count">Найдено {results.length} товаров</p>
          <div className="search-grid">
            {results.map(product => (
              <div key={product.id} className="search-card">
                <img src={product.img} alt={product.title} className="search-card__img" />
                <div className="search-card__info">
                  <h3 className="search-card__title">{product.title}</h3>
                  <p className="search-card__article">Артикул: {product.article}</p>
                  <a
                    href={`https://t.me/stem_academia_bot?text=${encodeURIComponent(`Интересует: ${product.title}`)}`}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-order"
                  >
                    {t.order_btn}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  )
}