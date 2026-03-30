import './Category.css'

const products = Array.from({ length: 3 }, (_, i) => ({
  id: i + 1,
  title: `ВСТРОЕННЫЙ ШКАФ ${i + 1}`,
  img: `/img/pagesecond/shkafy/vstroenye/shkaf${i + 1}.png`,
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris mi quam, euismod quis mi quis, dapibus porta ante. Aenean mi arcu, dapibus quis ornare eget, porta id mi.',
  material: ['ДСП', 'МДФ', 'Фурнитура металлическая', 'Зеркальные вставки'],
  size: '2000x600x2400',
  colors: [
    { name: 'Белый',         hex: '#FFFFFF' },
    { name: 'Венге',         hex: '#3B1F0A' },
    { name: 'Дуб сонома',    hex: '#C8A97E' },
    { name: 'Серый',         hex: '#888888' },
  ],
  article: `L.Me-VS.UN.${200 + i}`,
}))

export default function Vstroenye() {
  return (
    <div className="page">
      <div className="breadcrumb">МЕБЕЛЬ / ШКАФЫ / ВСТРОЕННЫЕ ШКАФЫ</div>
      <main className="category-grid">
        {products.map((p) => (
          <div key={p.id} className="product-card">
            <img src={p.img} alt={p.title} className="product-card__img" />
            <div className="product-card__info">
              <h2 className="product-card__title">{p.title}</h2>
              <p className="product-card__desc">{p.description}</p>
              <div className="product-card__section">
                <strong>Материал:</strong>
                <ol>{p.material.map((m, i) => <li key={i}>{m}</li>)}</ol>
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
