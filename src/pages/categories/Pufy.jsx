import './Category.css'

const products = [
  {
    id: 1,
    title: 'ПУФ 1',
    img: '/img/pagesecond/pufy/puf1.png',
    description: 'Каркас: брус, фанера, дсп Наполнение: ППУ синтепон Ткань: велюр, микро велюр, рогожка, экокожа, кожзам.',
    material: ['Синтепон', 'Мягкая поверхность', 'Велкор', 'Пластмассовые ножки'],
    size: 'По согласованию с заказчиком',
    colors: [
      { name: 'Оранжевый',     hex: '#FF6600' },
      { name: 'Бежевый',       hex: '#F5DEB3' },
      { name: 'Тёмно-зелёный', hex: '#1B4D3E' },
      { name: 'Серый',         hex: '#888888' },
    ],
    article: 'L.Me-PF.UN.600',
  },
  {
    id: 2,
    title: 'ПУФ 2',
    img: '/img/pagesecond/pufy/puf2.png',
    description: 'Каркас: брус, фанера, дсп Наполнение: ППУ синтепон Ткань: велюр, микро велюр, рогожка, экокожа, кожзам.',
    material: ['Синтепон', 'Мягкая поверхность', 'Велкор', 'Пластмассовые ножки'],
    size: 'По согласованию с заказчиком',
    colors: [
      { name: 'Оранжевый',     hex: '#FF6600' },
      { name: 'Бежевый',       hex: '#F5DEB3' },
      { name: 'Тёмно-зелёный', hex: '#1B4D3E' },
      { name: 'Серый',         hex: '#888888' },
    ],
    article: 'L.Me-PF.UN.600',
  },
  {
    id: 3,
    title: 'ПУФ 3',
    img: '/img/pagesecond/pufy/puf3.png',
    description: 'Каркас: брус, фанера, дсп Наполнение: ППУ синтепон Ткань: велюр, микро велюр, рогожка, экокожа, кожзам.',
    material: ['Синтепон', 'Мягкая поверхность', 'Велкор', 'Пластмассовые ножки'],
    size: 'По согласованию с заказчиком',
    colors: [
      { name: 'Оранжевый',     hex: '#FF6600' },
      { name: 'Бежевый',       hex: '#F5DEB3' },
      { name: 'Тёмно-зелёный', hex: '#1B4D3E' },
      { name: 'Серый',         hex: '#888888' },
    ],
    article: 'L.Me-PF.UN.600',
  },
  {
    id: 4,
    title: 'ПУФ 4',
    img: '/img/pagesecond/pufy/puf4.png',
    description: 'Каркас: брус, фанера, дсп Наполнение: ППУ синтепон Ткань: велюр, микро велюр, рогожка, экокожа, кожзам.',
    material: ['Синтепон', 'Мягкая поверхность', 'Велкор', 'Пластмассовые ножки'],
    size: 'По согласованию с заказчиком',
    colors: [
      { name: 'Оранжевый',     hex: '#FF6600' },
      { name: 'Бежевый',       hex: '#F5DEB3' },
      { name: 'Тёмно-зелёный', hex: '#1B4D3E' },
      { name: 'Серый',         hex: '#888888' },
    ],
    article: 'L.Me-PF.UN.600',
  },
  {
    id: 5,
    title: 'ПУФ 5',
    img: '/img/pagesecond/pufy/puf5.png',
    description: 'Каркас: брус, фанера, дсп Наполнение: ППУ синтепон Ткань: экокожа, кожзам.',
    material: ['Синтепон', 'Мягкая поверхность', 'Велкор', 'Пластмассовые ножки'],
    size: 'По согласованию с заказчиком',
    colors: [
      { name: 'Оранжевый',     hex: '#FF6600' },
      { name: 'Бежевый',       hex: '#F5DEB3' },
      { name: 'Тёмно-зелёный', hex: '#1B4D3E' },
      { name: 'Серый',         hex: '#888888' },
    ],
    article: 'L.Me-PF.UN.600',
  },
  {
    id: 6,
    title: 'ПУФ 6',
    img: '/img/pagesecond/pufy/puf6.png',
    description: 'Каркас: брус, фанера, дсп Наполнение: ППУ синтепон Ткань: велюр, микро велюр, рогожка, экокожа, кожзам.',
    material: ['Синтепон', 'Мягкая поверхность', 'Велкор', 'Пластмассовые ножки'],
    size: 'По согласованию с заказчиком',
    colors: [
      { name: 'Оранжевый',     hex: '#FF6600' },
      { name: 'Бежевый',       hex: '#F5DEB3' },
      { name: 'Тёмно-зелёный', hex: '#1B4D3E' },
      { name: 'Серый',         hex: '#888888' },
    ],
    article: 'L.Me-PF.UN.600',
  },
  {
    id: 7,
    title: 'ПУФ 7',
    img: '/img/pagesecond/pufy/puf7.png',
    description: 'Каркас: брус, фанера, дсп Наполнение: ППУ синтепон Ткань: велюр, микро велюр, рогожка, экокожа, кожзам.',
    material: ['Синтепон', 'Мягкая поверхность', 'Велкор', 'Пластмассовые ножки'],
    size: 'По согласованию с заказчиком',
    colors: [
      { name: 'Оранжевый',     hex: '#FF6600' },
      { name: 'Бежевый',       hex: '#F5DEB3' },
      { name: 'Тёмно-зелёный', hex: '#1B4D3E' },
      { name: 'Серый',         hex: '#888888' },
    ],
    article: 'L.Me-PF.UN.600',
  },
  {
    id: 8,
    title: 'ПУФ 8',
    img: '/img/pagesecond/pufy/puf8.png',
    description: 'Каркас: брус, фанера, дсп Наполнение: ППУ синтепон Ткань: велюр, микро велюр, рогожка, экокожа, кожзам.',
    material: ['Синтепон', 'Мягкая поверхность', 'Велкор', 'Пластмассовые ножки'],
    size: 'По согласованию с заказчиком',
    colors: [
      { name: 'Оранжевый',     hex: '#FF6600' },
      { name: 'Бежевый',       hex: '#F5DEB3' },
      { name: 'Тёмно-зелёный', hex: '#1B4D3E' },
      { name: 'Серый',         hex: '#888888' },
    ],
    article: 'L.Me-PF.UN.600',
  },
  {
    id: 9,
    title: 'ПУФ 9',
    img: '/img/pagesecond/pufy/puf9.png',
    description: 'Каркас: брус, фанера, дсп Наполнение: ППУ синтепон Ткань: велюр, микро велюр, рогожка, экокожа, кожзам.',
    material: ['Синтепон', 'Мягкая поверхность', 'Велкор', 'Пластмассовые ножки'],
    size: 'По согласованию с заказчиком',
    colors: [
      { name: 'Оранжевый',     hex: '#FF6600' },
      { name: 'Бежевый',       hex: '#F5DEB3' },
      { name: 'Тёмно-зелёный', hex: '#1B4D3E' },
      { name: 'Серый',         hex: '#888888' },
    ],
    article: 'L.Me-PF.UN.600',
  },
]

export default function Pufy() {
  return (
    <div className="page">
      <div className="breadcrumb">МЕБЕЛЬ / ПУФЫ</div>
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
