import './Gos.css'

const products = [
  {
    id: 1,
    title: 'ГОСУДАРСТВЕННАЯ СИМВОЛИКА',
    img: '/img/pagedecor/gos/gos1.png',
    description: 'Стенд государственных символов РК. Флаг. Флагшток. Герб РК.',
    material: ['ЛДСП', 'Ножки из пластмасса'],
    colors: [
      { name: 'Белый',       hex: '#FFFFFF' },
      { name: 'Черный',      hex: '#222222' },
      { name: 'Светлый дуб', hex: '#C8A97E' },
      { name: 'Дуб',         hex: '#8B5E3C' },
    ],
    size: 'Высота: 2000 / 2500 / до потолка\nГлубина: 400 / 500 / 600\nШирина: Варьируется',
    article: 'S.Me-ST.S.DP',
  },
  {
    id: 2,
    title: 'ГОСУДАРСТВЕННАЯ СИМВОЛИКА',
    img: '/img/pagedecor/gos/gos2.png',
    description: 'Стенд государственных символов РК. Флаг. Флагшток. Герб РК.',
    material: ['ЛДСП', 'Ножки из пластмасса'],
    colors: [
      { name: 'Белый',       hex: '#FFFFFF' },
      { name: 'Черный',      hex: '#222222' },
      { name: 'Светлый дуб', hex: '#C8A97E' },
      { name: 'Дуб',         hex: '#8B5E3C' },
    ],
    size: 'Высота: 2000 / 2500 / до потолка\nГлубина: 400 / 500 / 600\nШирина: Варьируется',
    article: 'S.Me-ST.S.DP',
  },
  {
    id: 3,
    title: 'ГОСУДАРСТВЕННАЯ СИМВОЛИКА',
    img: '/img/pagedecor/gos/gos3.png',
    description: 'Стенд государственных символов РК. Флаг. Флагшток. Герб РК.',
    material: ['ЛДСП', 'МДФ', 'Металл', 'Ножки из пластмасса'],
    colors: [
      { name: 'Белый',       hex: '#FFFFFF' },
      { name: 'Черный',      hex: '#222222' },
      { name: 'Светлый дуб', hex: '#C8A97E' },
      { name: 'Дуб',         hex: '#8B5E3C' },
    ],
    size: 'Высота: 2000 / 2500 / до потолка\nГлубина: 400 / 500 / 600\nШирина: Варьируется',
    article: 'S.Me-ST.S.DP',
  },
]

export default function Gos() {
  return (
    <div className="page">
      <div className="breadcrumb">ДЕКОР | ГОСУДАРСТВЕННАЯ СИМВОЛИКА</div>
      <main className="gos-grid">
        {products.map((p) => (
          <div key={p.id} className="gos-card">
            <h2 className="gos-card__name">{p.title}</h2>
            <img src={p.img} alt={p.title} className="gos-card__img" />

            <div className="gos-card__row">
              <div className="gos-card__col">
                <strong>Описание:</strong>
                <p>{p.description}</p>
              </div>
              <div className="gos-card__col">
                <strong>Материал:</strong>
                <ol>
                  {p.material.map((m, i) => <li key={i}>{m}</li>)}
                </ol>
              </div>
            </div>

            <div className="gos-card__row">
              <div className="gos-card__col">
                <strong>Цвет:</strong>
                <div className="gos-card__colors">
                  {p.colors.map((c, i) => (
                    <div key={i} className="gos-color-item">
                      <span className="gos-color-circle" style={{ backgroundColor: c.hex }}></span>
                      <span>{c.name}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="gos-card__col">
                <strong>Размеры:</strong>
                <p className="gos-card__size">{p.size}</p>
              </div>
            </div>

            <p className="gos-card__article">Артикул: {p.article}</p>
          </div>
        ))}
      </main>
    </div>
  )
}
