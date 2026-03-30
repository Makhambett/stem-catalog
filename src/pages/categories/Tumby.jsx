import './Category.css'

const products = [
  {
    id: 1,
    title: 'ТУМБА 1',
    img: '/img/pagesecond/tumby/tumba1.png',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris mi quam, euismod quis mi quis, dapibus porta ante. Aenean mi arcu, dapibus quis ornare eget, porta id mi.',
    material: ['Синтепон', 'Мягкая поверхность', 'Велкор', 'Пластмассовые ножки'],
    size: '800x400x600',
    colors: [
      { name: 'Оранжевый',     hex: '#FF6600' },
      { name: 'Бежевый',       hex: '#F5DEB3' },
      { name: 'Тёмно-зелёный', hex: '#1B4D3E' },
      { name: 'Серый',         hex: '#888888' },
    ],
    article: 'L.Me-TU.UN.800',
  },
  {
    id: 2,
    title: 'ТУМБА 2',
    img: '/img/pagesecond/tumby/tumba2.png',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris mi quam, euismod quis mi quis, dapibus porta ante. Aenean mi arcu, dapibus quis ornare eget, porta id mi.',
    material: ['Синтепон', 'Мягкая поверхность', 'Велкор', 'Пластмассовые ножки'],
    size: '800x400x600',
    colors: [
      { name: 'Оранжевый',     hex: '#FF6600' },
      { name: 'Бежевый',       hex: '#F5DEB3' },
      { name: 'Тёмно-зелёный', hex: '#1B4D3E' },
      { name: 'Серый',         hex: '#888888' },
    ],
    article: 'L.Me-TU.UN.800',
  },
  {
    id: 3,
    title: 'ТУМБА 3',
    img: '/img/pagesecond/tumby/tumba3.png',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris mi quam, euismod quis mi quis, dapibus porta ante. Aenean mi arcu, dapibus quis ornare eget, porta id mi.',
    material: ['Синтепон', 'Мягкая поверхность', 'Велкор', 'Пластмассовые ножки'],
    size: '800x400x600',
    colors: [
      { name: 'Оранжевый',     hex: '#FF6600' },
      { name: 'Бежевый',       hex: '#F5DEB3' },
      { name: 'Тёмно-зелёный', hex: '#1B4D3E' },
      { name: 'Серый',         hex: '#888888' },
    ],
    article: 'L.Me-TU.UN.800',
  },
]

export default function Tumby() {
  return (
    <div className="page">
      <div className="breadcrumb">МЕБЕЛЬ / ТУМБЫ</div>
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
