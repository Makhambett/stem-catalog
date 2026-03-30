import './Shtory.css'

const products = [
  {
    id: 1,
    title: 'РУЛОННЫЕ',
    img: ['/img/pagedecor/shtory/item1.png'],
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris mi quam, euismod quis mi quis, dapibus porta ante. Aenean mi arcu, dapibus quis ornare eget, porta id mi.',
    article: 'S.Me-ST.S.DP',
  },
  {
    id: 2,
    title: 'ЖАЛЮЗИ',
    img: ['/img/pagedecor/shtory/item2.png'],
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris mi quam, euismod quis mi quis, dapibus porta ante. Aenean mi arcu, dapibus quis ornare eget, porta id mi.',
    article: 'S.Me-ST.S.DP',
  },
  {
    id: 3,
    title: 'ТКАНЕВЫЕ',
    img: ['/img/pagedecor/shtory/item3.png'],
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris mi quam, euismod quis mi quis, dapibus porta ante. Aenean mi arcu, dapibus quis ornare eget, porta id mi.',
    article: 'S.Me-ST.S.DP',
  },
]

export default function Shtory() {
  return (
    <div className="page">
      <div className="breadcrumb">ДЕКОР | ШТОРЫ</div>

      <main className="shtory-grid">
        {products.map((p) => (
          <div key={p.id} className="shtory-card">
            <h2 className="shtory-card__title">{p.title}</h2>

            <div className={`shtory-card__img-wrap ${p.img.length > 1 ? 'shtory-card__img-wrap--multi' : ''}`}>
              {p.img.map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt={p.title}
                  className="shtory-card__img"
                />
              ))}
            </div>

            <div className="shtory-card__body">
              <p className="shtory-card__desc-label">Описание:</p>
              <p className="shtory-card__desc">{p.description}</p>
              <div className="shtory-card__divider" />
              <p className="shtory-card__article">Артикул: {p.article}</p>
            </div>
          </div>
        ))}
      </main>
    </div>
  )
}