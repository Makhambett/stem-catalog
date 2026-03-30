import './Rasteniya.css'

const products = [
  {
    id: 1,
    title: 'ДЕРЕВО',
    img: '/img/pagedecor/rasteniya/item1.png',
    colors: ['Белый', 'Черный', 'Бежевый'],
    materials: ['Металл', 'Гипс', 'Пластик'],
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris mi quam, euismod quis mi quis, dapibus porta ante. Aenean mi arcu, dapibus quis ornare eget, porta id mi.',
    article: 'L.DE-Ras.Der',
  },
  {
    id: 2,
    title: 'КОМАНДНЫЕ РАСТЕНИЯ',
    img: '/img/pagedecor/rasteniya/item2.png',
    colors: ['Белый', 'Черный', 'Бежевый', 'Серый'],
    materials: null,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris mi quam, euismod quis mi quis, dapibus porta ante. Aenean mi arcu, dapibus quis ornare eget, porta id mi.',
    article: 'L.DE-Ras.KomRas',
  },
  {
    id: 3,
    title: 'РАСТИТЕЛЬНОСТЬ НА СТЕНЕ',
    img: '/img/pagedecor/rasteniya/item3.png',
    colors: null,
    materials: null,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris mi quam, euismod quis mi quis, dapibus porta ante. Aenean mi arcu, dapibus quis ornare eget, porta id mi.',
    article: 'L.DE-Ras.Moh',
  },
]

const colorDots = {
  'Белый':   '#fff',
  'Черный':  '#222',
  'Бежевый': '#c8b89a',
  'Серый':   '#aaa',
}

export default function Rasteniya() {
  return (
    <div className="page">
      <div className="breadcrumb">ДЕКОР | РАСТЕНИЯ</div>

      <main className="rasteniya-grid">
        {products.map((p) => (
          <div key={p.id} className="rasteniya-card">
            <h2 className="rasteniya-card__title">{p.title}</h2>

            <div className="rasteniya-card__img-wrap">
              <img src={p.img} alt={p.title} className="rasteniya-card__img" />
            </div>

            <div className="rasteniya-card__body">
              {p.colors && (
                <div className="rasteniya-card__section">
                  <p className="rasteniya-card__label">Цвет горшка:</p>
                  <ul className="rasteniya-card__colors">
                    {p.colors.map((c) => (
                      <li key={c} className="rasteniya-card__color-item">
                        <span
                          className="rasteniya-card__color-dot"
                          style={{
                            background: colorDots[c],
                            border: c === 'Белый' ? '1.5px solid #ccc' : 'none',
                          }}
                        />
                        {c}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {p.materials && (
                <div className="rasteniya-card__section">
                  <p className="rasteniya-card__label">Материал:</p>
                  <ul className="rasteniya-card__materials">
                    {p.materials.map((m) => (
                      <li key={m} className="rasteniya-card__material-item">• {m}</li>
                    ))}
                  </ul>
                </div>
              )}

              <p className="rasteniya-card__desc-label">Описание:</p>
              <p className="rasteniya-card__desc">{p.description}</p>
              <div className="rasteniya-card__divider" />
              <p className="rasteniya-card__article">Артикул: {p.article}</p>
            </div>
          </div>
        ))}
      </main>
    </div>
  )
}