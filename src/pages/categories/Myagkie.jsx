import './Category.css'

const products = [
  {
    id: 1,
    title: 'МЯГКИЙ СТУЛ 1',
    img: '/img/pagesecond/stulya/myagkie/stul7.png',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris mi quam, euismod quis mi quis, dapibus porta ante. Aenean mi arcu, dapibus quis ornare eget, porta id mi.',
    material: ['Синтепон', 'Мягкая поверхность', 'Велкор', 'Пластмассовые ножки'],
    size: '450x450x900',
    colors: [
      { name: 'Оранжевый',     hex: '#FF6600' },
      { name: 'Бежевый',       hex: '#F5DEB3' },
      { name: 'Тёмно-зелёный', hex: '#1B4D3E' },
      { name: 'Серый',         hex: '#888888' },
    ],
    article: 'L.Me-MY.UN.450',
  },
  {
    id: 2,
    title: 'МЯГКИЙ СТУЛ 2',
    img: '/img/pagesecond/stulya/myagkie/stul8.png',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris mi quam, euismod quis mi quis, dapibus porta ante. Aenean mi arcu, dapibus quis ornare eget, porta id mi.',
    material: ['Синтепон', 'Мягкая поверхность', 'Велкор', 'Пластмассовые ножки'],
    size: '450x450x900',
    colors: [
      { name: 'Оранжевый',     hex: '#FF6600' },
      { name: 'Бежевый',       hex: '#F5DEB3' },
      { name: 'Тёмно-зелёный', hex: '#1B4D3E' },
      { name: 'Серый',         hex: '#888888' },
    ],
    article: 'L.Me-MY.UN.451',
  },
  {
    id: 3,
    title: 'МЯГКИЙ СТУЛ 3',
    img: '/img/pagesecond/stulya/myagkie/stul9.png',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris mi quam, euismod quis mi quis, dapibus porta ante. Aenean mi arcu, dapibus quis ornare eget, porta id mi.',
    material: ['Синтепон', 'Мягкая поверхность', 'Велкор', 'Пластмассовые ножки'],
    size: '450x450x900',
    colors: [
      { name: 'Оранжевый',     hex: '#FF6600' },
      { name: 'Бежевый',       hex: '#F5DEB3' },
      { name: 'Тёмно-зелёный', hex: '#1B4D3E' },
      { name: 'Серый',         hex: '#888888' },
    ],
    article: 'L.Me-MY.UN.452',
  },
]

export default function Myagkie() {
  return (
    <div className="page">
      <div className="breadcrumb">МЕБЕЛЬ / СТУЛЬЯ / МЯГКИЕ СТУЛЬЯ</div>
      <main className="category-grid">
        {products.map((p) => (
          <div key={p.id} className="product-card">
            <img src={p.img} alt={p.title} className="product-card__img" />
            <div className="product-card__info">
              <h2 className="product-card__title">{p.title}</h2>
              <p className="product-card__desc">{p.description}</p>

              <div className="product-card__section">
                <strong>Материал:</strong>
                <ol>
                  {p.material.map((m, i) => <li key={i}>{m}</li>)}
                </ol>
              </div>

              <div className="product-card__section">
                <strong>Размеры:</strong> {p.size}
              </div>

              <div className="product-card__section">
                <strong>Цвет материала:</strong>
                <div className="product-card__colors">
                  {p.colors.map((c, i) => (
                    <div key={i} className="color-item">
                      <span className="color-circle" style={{ backgroundColor: c.hex }}></span>
                      <span>{c.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="product-card__section">
                <strong>Артикул:</strong> {p.article}
              </div>
            </div>
          </div>
        ))}
      </main>
    </div>
  )
}
