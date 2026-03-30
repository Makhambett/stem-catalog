import { Link } from 'react-router-dom'
import './EquipmentPage.css'

const categories = [
  { title: 'ARDUINO',    img: '/img/equipment/arduino.png',   path: '#' },
  { title: 'LEGO SPIKE', img: '/img/equipment/legospike.png', path: '#' },
  { title: 'LABDISC',    img: '/img/equipment/labdisc.png',   path: '/equipment/labdisc' },
  { title: 'ULAB',       img: '/img/equipment/ulab.png',      path: '/equipment/ulab' },
  { title: 'СКОРО',      img: null,                           path: '#' },
  { title: 'СКОРО',      img: null,                           path: '#' },
]

export default function EquipmentPage() {
  return (
    <div className="equip-page">
      <div className="equip-breadcrumb">ОБОРУДОВАНИЯ</div>
      <main className="equip-grid">
        {categories.map((cat, i) => (
          <Link key={i} to={cat.path} className="equip-card">
            <span className="equip-card__title">{cat.title}</span>
            {cat.img ? (
              <img src={cat.img} alt={cat.title} className="equip-card__img" />
            ) : (
              <div className="equip-card__empty">
                <span>СКОРО</span>
              </div>
            )}
          </Link>
        ))}
      </main>
    </div>
  )
}