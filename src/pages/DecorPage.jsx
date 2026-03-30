import { Link } from 'react-router-dom'
import './DecorPage.css'

const row1 = [
  { title: 'ГОС',       img: '/img/pagedecor/gos.png',   path: '/decor/gos' },
  {
    title: '3Д ПАНЕЛИ',
    imgs: ['/img/pagedecor/3dpanel1.png', '/img/pagedecor/3dpanel2.png'],
    path: '/decor/3dpanels'
  },
  { title: 'ОСВЕЩЕНИЕ', img: '/img/pagedecor/light.png', path: '/decor/lighting' },
]

const row2 = [
  { title: 'ПЕРЕГОРОДКИ', img: '/img/pagedecor/peregorodki.png', path: '/decor/peregorodki' },
  { title: 'ШТОРЫ',       img: '/img/pagedecor/shtory.png',      path: '/decor/shtory' },
  { title: 'РАСТЕНИЯ',    img: '/img/pagedecor/plant.png',       path: '/decor/rasteniya' },
  { title: 'ДОСКИ',       img: '/img/pagedecor/doska.png',       path: '/decor/doski' },
]

export default function DecorPage() {
  return (
    <div className="decor-page">
      <div className="decor-breadcrumb">ДЕКОР</div>
      <main className="decor-main">

        <div className="decor-row decor-row--3">
          {row1.map((item, i) => (
            <Link key={i} to={item.path} className="decor-card">
              <span className="decor-card__title">{item.title}</span>
              {item.imgs ? (
                <div className="decor-card__double">
                  <img src={item.imgs[0]} alt={item.title + ' left'}  className="decor-card__img" />
                  <img src={item.imgs[1]} alt={item.title + ' right'} className="decor-card__img" />
                </div>
              ) : (
                <img src={item.img} alt={item.title} className="decor-card__img" />
              )}
            </Link>
          ))}
        </div>

        <div className="decor-row decor-row--4">
          {row2.map((item, i) => (
            <Link key={i} to={item.path} className="decor-card">
              <span className="decor-card__title">{item.title}</span>
              <img src={item.img} alt={item.title} className="decor-card__img" />
            </Link>
          ))}
        </div>

      </main>
    </div>
  )
}