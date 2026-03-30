import { Link } from 'react-router-dom'
import './SecondPage.css'

const categories = [
  { title: 'ДИВАНЫ',   img: '/img/pagesecond/a1a32584672.png',    path: '/secondpage/divany' },
  { title: 'КРЕСЛО',   img: '/img/pagesecond/738d1eff.png',       path: '/secondpage/kreslo' },
  { title: 'КУХНЯ',    img: '/img/pagesecond/4a950c62bed144.jpg',  path: '#' },
  { title: 'ПУФЫ',     img: '/img/pagesecond/a41bcac159.png',     path: '/secondpage/pufy' },
  { title: 'СТЕЛЛАЖИ', img: '/img/pagesecond/e0f5951d3c3.png',    path: '/secondpage/stellazhi' },
  { title: 'СТОЛЫ',    img: '/img/pagesecond/bb20aa.png',         path: '#' },
  { title: 'СТУЛЬЯ',   img: '/img/pagesecond/983793aa0.png',      path: '/secondpage/stulya' },
  { title: 'ТУМБЫ',    img: '/img/pagesecond/4d735992.png',       path: '/secondpage/tumby' },
  { title: 'ШКАФЫ',    img: '/img/pagesecond/ce38f5332a.png',     path: '/secondpage/shkafy' },
]

export default function SecondPage() {
  return (
    <div className="second-page">
      <div className="second-breadcrumb">МЕБЕЛЬ</div>
      <main className="second-grid">
        {categories.map((cat, i) => (
          <Link key={i} to={cat.path} className="second-card">
            <span className="second-card__title">{cat.title}</span>
            <img src={cat.img} alt={cat.title} className="second-card__img" />
          </Link>
        ))}
      </main>
    </div>
  )
}