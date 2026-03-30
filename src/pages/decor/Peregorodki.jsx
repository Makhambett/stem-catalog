import './Peregorodki.css'

const products = [
  {
    id: 1,
    title: 'СТЕКЛО',
    img: ['/img/pagedecor/peregorodki/item1.png'],
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris mi quam, euismod quis mi quis, dapibus porta ante. Aenean mi arcu, dapibus quis ornare eget, porta id mi.',
    article: 'S.Me-ST.S.DP',
  },
  {
    id: 2,
    title: 'РЕЙКИ',
    img: ['/img/pagedecor/peregorodki/item2.png'],
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris mi quam, euismod quis mi quis, dapibus porta ante. Aenean mi arcu, dapibus quis ornare eget, porta id mi.',
    article: 'S.Me-ST.S.DP',
  },
  {
    id: 3,
    title: 'МЕТАЛЛ',
    img: ['/img/pagedecor/peregorodki/item31.png', '/img/pagedecor/peregorodki/item32.png'],
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris mi quam, euismod quis mi quis, dapibus porta ante. Aenean mi arcu, dapibus quis ornare eget, porta id mi.',
    article: 'S.Me-ST.S.DP',
  },
]

export default function Peregorodki() {
  return (
    <div className="page">
      <div className="breadcrumb">ДЕКОР | ПЕРЕГОРОДКИ</div>

      <main className="peregorodki-grid">
        {products.map((p) => (
          <div key={p.id} className="peregorodki-card">
            <h2 className="peregorodki-card__title">{p.title}</h2>

            <div className={`peregorodki-card__img-wrap ${p.img.length > 1 ? 'peregorodki-card__img-wrap--multi' : ''}`}>
              {p.img.map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt={p.title}
                  className="peregorodki-card__img"
                />
              ))}
            </div>

            <div className="peregorodki-card__body">
              <p className="peregorodki-card__desc-label">Описание:</p>
              <p className="peregorodki-card__desc">{p.description}</p>
              <div className="peregorodki-card__divider" />
              <p className="peregorodki-card__article">Артикул: {p.article}</p>
            </div>
          </div>
        ))}
      </main>
    </div>
  )
}