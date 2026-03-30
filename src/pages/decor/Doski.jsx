import './Doski.css'

const products = [
  {
    id: 1,
    title: 'МАРКЕРНАЯ ДОСКА',
    img: '/img/pagedecor/doski/item1.png',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris mi quam, euismod quis mi quis, dapibus porta ante. Aenean mi arcu, dapibus quis ornare eget, porta id mi.',
    article: 'S.Me-ST.S.DP',
  },
  {
    id: 2,
    title: 'ГРИФЕЛЬНАЯ ДОСКА',
    img: '/img/pagedecor/doski/item2.png',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris mi quam, euismod quis mi quis, dapibus porta ante. Aenean mi arcu, dapibus quis ornare eget, porta id mi.',
    article: 'M.Me-ST.P.DP',
  },
  {
    id: 3,
    title: 'СТЕКЛЯННАЯ ДОСКА',
    img: '/img/pagedecor/doski/item3.png',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris mi quam, euismod quis mi quis, dapibus porta ante. Aenean mi arcu, dapibus quis ornare eget, porta id mi.',
    article: 'L.Me-ST.Mg.DP',
  },
]

export default function Doski() {
  return (
    <div className="page">
      <div className="breadcrumb">ДЕКОР | ДОСКА</div>

      <main className="doski-grid">
        {products.map((p) => (
          <div key={p.id} className="doski-card">
            <h2 className="doski-card__title">{p.title}</h2>

            <div className="doski-card__img-wrap">
              <img src={p.img} alt={p.title} className="doski-card__img" />
            </div>

            <div className="doski-card__body">
              <p className="doski-card__desc-label">Описание:</p>
              <p className="doski-card__desc">{p.description}</p>
              <div className="doski-card__divider" />
              <p className="doski-card__article">Артикул: {p.article}</p>
            </div>
          </div>
        ))}
      </main>
    </div>
  )
}