import { Link } from 'react-router-dom'
import './Category.css'
import './Stulya.css'

const subcategories = [
  { title: 'ВСТРОЕННЫЕ ШКАФЫ', img: '/img/pagesecond/shkafy/vstroenye.png', path: '/secondpage/shkafy/vstroenye' },
  { title: 'СТАНДАРТНЫЕ ШКАФЫ', img: '/img/pagesecond/shkafy/standartnye.png', path: '/secondpage/shkafy/standartnye' },
]

export default function Shkafy() {
  return (
    <div className="page">
      <div className="breadcrumb">МЕБЕЛЬ / ШКАФЫ</div>
      <main className="stulya-grid">
        {subcategories.map((cat, i) => (
          <Link key={i} to={cat.path} className="stulya-card">
            <img src={cat.img} alt={cat.title} className="stulya-card__img" />
            <span className="stulya-card__title">{cat.title}</span>
          </Link>
        ))}
      </main>
    </div>
  )
}
