import './Category.css'

const products = [
  {
    id: 1,
    title: 'КРЕСЛО 1',
    img: '/img/pagesecond/kreslo/kreslo1.png',
    description: 'Каркас: стеклопластик,\n Ткань: велюр, микро велюр, рогожка.',
    material: ['Синтепон', 'Мягкая поверхность', 'Велкор', 'Пластмассовые ножки'],
    size: ['Ширина 94 см, Высота 120 см, Глубина 87 см'],
    colors: [
      { name: 'Оранжевый',     hex: '#FF6600' },
      { name: 'Бежевый',       hex: '#F5DEB3' },
      { name: 'Тёмно-зелёный', hex: '#1B4D3E' },
      { name: 'Серый',         hex: '#888888' },
    ],
    article: 'L.Me-KR.UN.900',
  },
  {
    id: 2,
    title: 'КРЕСЛО 2',
    img: '/img/pagesecond/kreslo/kreslo2.png',
    description: 'Каркас: брус, фанера, дсп Наполнение: ППУ синтепон Ткань: велюр, микро велюр, рогожка, экокожа, кожзам',
    material: ['Синтепон', 'Мягкая поверхность', 'Велкор', 'Пластмассовые ножки'],
    size: 'По согласованию с заказчиком',
    colors: [
      { name: 'Оранжевый',     hex: '#FF6600' },
      { name: 'Бежевый',       hex: '#F5DEB3' },
      { name: 'Тёмно-зелёный', hex: '#1B4D3E' },
      { name: 'Серый',         hex: '#888888' },
    ],
    article: 'L.Me-KR.UN.900',
  },
  {
    id: 3,
    title: 'КРЕСЛО 3',
    img: '/img/pagesecond/kreslo/kreslo3.png',
    description: 'Каркас: брус, фанера, дсп Наполнение: ППУ синтепон Ткань: велюр, микро велюр, рогожка, экокожа, кожзам.',
    material: ['Синтепон', 'Мягкая поверхность', 'Велкор', 'Пластмассовые ножки'],
    size: 'По согласованию с заказчиком',
    colors: [
      { name: 'Оранжевый',     hex: '#FF6600' },
      { name: 'Бежевый',       hex: '#F5DEB3' },
      { name: 'Тёмно-зелёный', hex: '#1B4D3E' },
      { name: 'Серый',         hex: '#888888' },
    ],
    article: 'L.Me-KR.UN.900',
  },
  {
    id: 4,
    title: 'КРЕСЛО 4',
    img: '/img/pagesecond/kreslo/kreslo4.png',
    description: 'Вращающееся сиденье, регулируемое по высоте Каркас из мультиплекса Наполнитель из пенополиуретана Обивка из ткани 100% полиэстер Ножка из стали с эпоксидным покрытием, 5 колесиков из полиамида.',
    material: ['Синтепон', 'Мягкая поверхность', 'Велкор', 'Пластмассовые ножки'],
    size: 'Ширина: 62 см Высота: 71-80 см Глубина: 63 см Сиденье: Д45 x Г43,5 x В46-55,5 см Высота подлокотников: 62-72 см',
    colors: [
      { name: 'Оранжевый',     hex: '#FF6600' },
      { name: 'Бежевый',       hex: '#F5DEB3' },
      { name: 'Тёмно-зелёный', hex: '#1B4D3E' },
      { name: 'Серый',         hex: '#888888' },
    ],
    article: 'L.Me-KR.UN.900',
  },
  {
    id: 5,
    title: 'КРЕСЛО 5',
    img: '/img/pagesecond/kreslo/kreslo5.png',
    description: 'Материал: Ткань, Металл, Пластик\nНожка из металла с эпоксидным покрытием 5 колесиков из полиамида.',
    material: ['Синтепон', 'Мягкая поверхность', 'Велкор', 'Пластмассовые ножки'],
    size: 'Длина - 68.5 см Ширина - 68.5 см Высота - 104.5-115.5 см Высота сидения - 44.5/55.5 см',
    colors: [
      { name: 'Оранжевый',     hex: '#FF6600' },
      { name: 'Бежевый',       hex: '#F5DEB3' },
      { name: 'Тёмно-зелёный', hex: '#1B4D3E' },
      { name: 'Серый',         hex: '#888888' },
    ],
    article: 'L.Me-KR.UN.900',
  },
  {
    id: 6,
    title: 'КРЕСЛО 6',
    img: '/img/pagesecond/kreslo/kreslo6.png',
    description: 'Материал спинки: сетка Материал сиденья: ткань, сетка Материал подголовника: сетка Материал подлокотников: пластик Механизм качания: мультиблок Крестовина: металлическая.',
    material: ['Синтепон', 'Мягкая поверхность', 'Велкор', 'Пластмассовые ножки'],
    size: 'Высота кресла 105 — 116 см Высота опоры (сиденья) 45 см Регулировка спинки по высоте 62 см',
    colors: [
      { name: 'Оранжевый',     hex: '#FF6600' },
      { name: 'Бежевый',       hex: '#F5DEB3' },
      { name: 'Тёмно-зелёный', hex: '#1B4D3E' },
      { name: 'Серый',         hex: '#888888' },
    ],
    article: 'L.Me-KR.UN.900',
  },
  {
    id: 7,
    title: 'КРЕСЛО 7',
    img: '/img/pagesecond/kreslo/kreslo7.png',
    description: 'Материал: крестовина, подлокотники – хром Материал обивки: экокожа Максимальная нагрузка: 120.0 кг.',
    material: ['Синтепон', 'Мягкая поверхность', 'Велкор', 'Пластмассовые ножки'],
    size: 'Высота 106 см Ширина 42 см Глубина 46 см',

    colors: [
      { name: 'Оранжевый',     hex: '#FF6600' },
      { name: 'Бежевый',       hex: '#F5DEB3' },
      { name: 'Тёмно-зелёный', hex: '#1B4D3E' },
      { name: 'Серый',         hex: '#888888' },
    ],
    article: 'L.Me-KR.UN.900',
  },
  {
    id: 8,
    title: 'КРЕСЛО 8',
    img: '/img/pagesecond/kreslo/kreslo8.png',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris mi quam, euismod quis mi quis, dapibus porta ante. Aenean mi arcu, dapibus quis ornare eget, porta id mi.',
    material: ['Синтепон', 'Мягкая поверхность', 'Велкор', 'Пластмассовые ножки'],
    size: '900x850x450',
    colors: [
      { name: 'Оранжевый',     hex: '#FF6600' },
      { name: 'Бежевый',       hex: '#F5DEB3' },
      { name: 'Тёмно-зелёный', hex: '#1B4D3E' },
      { name: 'Серый',         hex: '#888888' },
    ],
    article: 'L.Me-KR.UN.900',
  },
  {
    id: 9,
    title: 'КРЕСЛО 9',
    img: '/img/pagesecond/kreslo/kreslo9.png',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris mi quam, euismod quis mi quis, dapibus porta ante. Aenean mi arcu, dapibus quis ornare eget, porta id mi.',
    material: ['Синтепон', 'Мягкая поверхность', 'Велкор', 'Пластмассовые ножки'],
    size: '900x850x450',
    colors: [
      { name: 'Оранжевый',     hex: '#FF6600' },
      { name: 'Бежевый',       hex: '#F5DEB3' },
      { name: 'Тёмно-зелёный', hex: '#1B4D3E' },
      { name: 'Серый',         hex: '#888888' },
    ],
    article: 'L.Me-KR.UN.900',
  },
]

export default function Kreslo() {
  return (
    <div className="page">
      <div className="breadcrumb">МЕБЕЛЬ / КРЕСЛА</div>
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
