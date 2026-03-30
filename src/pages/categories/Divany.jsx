import './Category.css'

const products = [
  {
    id: 1,
    title: 'ДИВАН 1',
    img: '/img/pagesecond/divany/divan1.png',
    description: "Каркас: брус, фанера, дсп Наполнение: ППУ синтепон Ткань: велюр, микро велюр, рогожка, экокожа, кожзам.",
    material: ['Синтепон', 'Мягкая поверхность', 'Велкор', 'Пластмассовые ножки'],
    size: 'По согласованию с заказчиком',
    colors: [
      { name: 'Оранжевый', hex: '#FF6600' },
      { name: 'Бежевый',   hex: '#F5DEB3' },
      { name: 'Тёмно-зелёный', hex: '#1B4D3E' },
      { name: 'Серый',     hex: '#888888' },
    ],
    article: 'L.Me-DI.UN.2500',
  },
  {
    id: 2,
    title: 'ДИВАН 2',
    img: '/img/pagesecond/divany/divan2.png',
    description: 'Каркас: брус, фанера, дсп Наполнение: ППУ синтепон Ткань: велюр, микро велюр, рогожка, экокожа, кожзам.',
    material: ['Синтепон', 'Мягкая поверхность', 'Велкор', 'Пластмассовые ножки'],
    size: 'По согласованию с заказчиком',
    colors: [
      { name: 'Оранжевый', hex: '#FF6600' },
      { name: 'Бежевый',   hex: '#F5DEB3' },
      { name: 'Тёмно-зелёный', hex: '#1B4D3E' },
      { name: 'Серый',     hex: '#888888' },
    ],
    article: 'L.Me-DI.UN.2500',
  },
  {
    id: 3,
    title: 'ДИВАН 3',
    img: '/img/pagesecond/divany/divan3.png',
    description: 'Каркас: брус, фанера, дсп Наполнение: ППУ синтепон Ткань: велюр, микро велюр, рогожка, экокожа, кожзам.',
    material: ['Синтепон', 'Мягкая поверхность', 'Велкор', 'Пластмассовые ножки'],
    size: 'По согласованию с заказчиком',
    colors: [
      { name: 'Оранжевый', hex: '#FF6600' },
      { name: 'Бежевый',   hex: '#F5DEB3' },
      { name: 'Тёмно-зелёный', hex: '#1B4D3E' },
      { name: 'Серый',     hex: '#888888' },
    ],
    article: 'L.Me-DI.UN.2500',
  },
  {
    id: 4,
    title: 'ДИВАН 4',
    img: '/img/pagesecond/divany/divan4.png',
    description: 'Каркас: брус, фанера, дсп Наполнение: ППУ синтепон Ткань: велюр, микро велюр, рогожка, экокожа, кожзам.',
    material: ['Синтепон', 'Мягкая поверхность', 'Велкор', 'Пластмассовые ножки'],
    size: 'По согласованию с заказчиком',
    colors: [
      { name: 'Оранжевый', hex: '#FF6600' },
      { name: 'Бежевый',   hex: '#F5DEB3' },
      { name: 'Тёмно-зелёный', hex: '#1B4D3E' },
      { name: 'Серый',     hex: '#888888' },
    ],
    article: 'L.Me-DI.UN.2500',
  },
  {
    id: 5,
    title: 'ДИВАН 5',
    img: '/img/pagesecond/divany/divan5.png',
    description: 'Каркас: брус, фанера, дсп Наполнение: ППУ синтепон Ткань: велюр, микро велюр, рогожка, экокожа, кожзам.',
    material: ['Синтепон', 'Мягкая поверхность', 'Велкор', 'Пластмассовые ножки'],
    size: 'По согласованию с заказчиком',
    colors: [
      { name: 'Оранжевый', hex: '#FF6600' },
      { name: 'Бежевый',   hex: '#F5DEB3' },
      { name: 'Тёмно-зелёный', hex: '#1B4D3E' },
      { name: 'Серый',     hex: '#888888' },
    ],
    article: 'L.Me-DI.UN.2500',
  },
  {
    id: 6,
    title: 'ДИВАН 6',
    img: '/img/pagesecond/divany/divan6.png',
    description: 'Каркас: брус, фанера, дсп Наполнение: ППУ синтепон Ткань: велюр, микро велюр, рогожка, экокожа, кожзам.',
    material: ['Синтепон', 'Мягкая поверхность', 'Велкор', 'Пластмассовые ножки'],
    size: 'По согласованию с заказчиком',
    colors: [
      { name: 'Оранжевый', hex: '#FF6600' },
      { name: 'Бежевый',   hex: '#F5DEB3' },
      { name: 'Тёмно-зелёный', hex: '#1B4D3E' },
      { name: 'Серый',     hex: '#888888' },
    ],
    article: 'L.Me-DI.UN.2500',
  },
]

export default function Divany() {
  return (
    <div className="page">
      <div className="breadcrumb">МЕБЕЛЬ / ДИВАНЫ</div>
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
                      <span
                        className="color-circle"
                        style={{ backgroundColor: c.hex }}
                      ></span>
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
