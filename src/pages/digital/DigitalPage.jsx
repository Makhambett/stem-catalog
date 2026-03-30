import { Link } from 'react-router-dom'
import './DigitalPage.css'

const row1 = [
  {
    title: 'ROQED SCIENCE',
    img: '/img/pagedigital/roqed.png',
    path: '/digital/roqed',
  },
  {
    title: 'STEM PLATFORM',
    img: '/img/pagedigital/stem-platform.png',
    path: '/digital/stemplatform',
  },
]

const row2 = [
  {
    title: 'ИНФО СТЕНДЫ',
    img: '/img/pagedigital/infostend.png',
    path: '/digital/infostend',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris mi quam, euismod quis mi quis, dapibus porta ante. Aenean mi arcu, dapibus quis ornare eget, porta id mi. Suspendisse potenti. Sed ullamcorper risus eu mi dapibus sodales.',
  },
  {
    title: 'STEAM BOOK',
    img: '/img/pagedigital/steambook.png',
    path: '/digital/steambook',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris mi quam, euismod quis mi quis, dapibus porta ante. Aenean mi arcu, dapibus quis ornare eget, porta id mi. Suspendisse potenti. Sed ullamcorper risus eu mi dapibus sodales.',
  },
]

export default function DigitalPage() {
  return (
    <div className="digital-page">
      <div className="digital-breadcrumb">ЦИФРОВЫЕ ПРОДУКТЫ</div>

      <main className="digital-main">

        <div className="digital-row digital-row--2">
          {row1.map((item, i) => (
            <Link key={i} to={item.path} className="digital-card digital-card--img">
              <span className="digital-card__title">{item.title}</span>
              <div className="digital-card__img-wrap">
                <img src={item.img} alt={item.title} className="digital-card__img" />
              </div>
            </Link>
          ))}
        </div>

        <div className="digital-row digital-row--2">
          {row2.map((item, i) => (
            <Link key={i} to={item.path} className="digital-card digital-card--text">
              <div className="digital-card__content">
                <span className="digital-card__title">{item.title}</span>
                <p className="digital-card__desc">{item.description}</p>
              </div>
              <div className="digital-card__img-wrap">
                <img src={item.img} alt={item.title} className="digital-card__img" />
              </div>
            </Link>
          ))}
        </div>

      </main>
    </div>
  )
}