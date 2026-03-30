import './Stanki.css'

const products = [
  {
    id: 1,
    tag: 'The cool tool',
    title: 'UNIMAT ML 160200',
    img: '/img/pagethird/stanki/item1.png',
    description: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris mi quam, euismod quis mi quis, dapibus porta ante. Aenean mi arcu, dapibus quis ornare eget, porta id mi.',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris mi quam, euismod quis mi quis, dapibus porta ante. Aenean mi arcu, dapibus quis ornare eget, porta id mi.',
    ],
    article: 'S.Me-ST.S.DP',
  },
  {
    id: 2,
    tag: 'The cool tool',
    title: 'UNIMAT 1 BASIC 4B1',
    img: '/img/pagethird/stanki/item2.png',
    description: [
      '1. Токарный станок по дереву (маленький, но мощный силовой узел позволяет успешно обрабатывать детали 135мм. длиной и до 50мм. в диаметре)',
      '2. Электролобзик (используется для выпиливания из фанеры, твердого дерева, пробковой древесины, пластмасс и тонкого металлического листа)',
      '3. Ручная дрель (используется как дрель, диаметр рабочего инструмента от 0,5 до 6мм.)',
      '4. Шлифовальная машина (стационарный вращающийся шлифовальный круг применяется для финишной обработки или для заточки инструмента, а также можно использовать как ручную шлифовальную машину для обработки труднодоступных мест).',
    ],
    article: 'S.Me-ST.S.DP',
  },
  {
    id: 3,
    tag: 'The cool tool',
    title: 'NAME_TEXT',
    img: '/img/pagethird/stanki/item3.png',
    description: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris mi quam, euismod quis mi quis, dapibus porta ante. Aenean mi arcu, dapibus quis ornare eget, porta id mi.',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris mi quam, euismod quis mi quis, dapibus porta ante. Aenean mi arcu, dapibus quis ornare eget, porta id mi.',
    ],
    article: 'S.Me-ST.S.DP',
  },
]

export default function Stanki() {
  return (
    <div className="page">
      <div className="breadcrumb">ЭЛЕКТРОТЕХНИКА | СТАНКИ</div>

      <main className="stanki-grid">
        {products.map((p) => (
          <div key={p.id} className="stanki-card">
            <div className="stanki-card__header">
              <p className="stanki-card__tag">{p.tag}</p>
              <h2 className="stanki-card__title">{p.title}</h2>
            </div>

            <div className="stanki-card__img-wrap">
              <img src={p.img} alt={p.title} className="stanki-card__img" />
            </div>

            <div className="stanki-card__body">
              <p className="stanki-card__desc-label">Описание:</p>
              {p.description.map((d, i) => (
                <p key={i} className="stanki-card__desc">{d}</p>
              ))}
            </div>

            <div className="stanki-card__footer">
              <div className="stanki-card__divider" />
              <p className="stanki-card__article">Артикул: {p.article}</p>
            </div>
          </div>
        ))}
      </main>
    </div>
  )
}