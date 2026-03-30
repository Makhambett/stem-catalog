import './Bytovaya.css'

const categories = [
  { id: 1, icon: '🫧', label: 'Стиральные машины' },
  { id: 2, icon: '🥤', label: 'Блендеры' },
  { id: 3, icon: '📺', label: 'Телевизоры' },
  { id: 4, icon: '📡', label: 'Микроволновые печи' },
  { id: 5, icon: '❄️', label: 'Холодильники' },
  { id: 6, icon: '🔥', label: 'Печи' },
]

const product = {
  title: 'НТЕРАКТИВНЫЙ КИОСК DIGITOUCH DS-49WT, ФОРМА "К"',
  description1: 'Информационный киоск — автоматизированный программно-аппаратный комплекс, предназначенный для предоставления справочной информации. В отличие от обычного справочного киоска, электронный информационный киоск работает автономно. Подобный киоск (киоск самообслуживания) предназначен для предоставления пользователю различной информации без привлечения обслуживающего персонала.',
  description2: 'Информационные киоски собирают на базе персонального компьютера, оснащённого сенсорным монитором и установленного в эргономичный вандалостойкий, как правило, стальной корпус.',
  advantagesLeft: [
    {
      title: 'Какие преимущества даёт инфокиоск?',
      isSection: true,
    },
    {
      title: 'Справочная информация в одно касание:',
      text: 'Благодаря сенсорному экрану и интуитивно понятному интерфейсу, пользователь получает необходимую информацию быстро и легко.',
    },
    {
      title: 'Простой и удобный интерфейс:',
      text: 'Дружественный пользовательский интерфейс делает взаимодействие с киоском лёгким даже для тех, кто не имеет опыта использования подобных устройств.',
    },
  ],
  img: '/img/pagethird/bytovaya/item1.png',
  article: 'S.Ee-INK.DDS.K',
}

export default function Bytovaya() {
  return (
    <div className="page">
      <div className="breadcrumb">ЭЛЕКТРОТЕХНИКА | БЫТОВАЯ ТЕХНИКА</div>

      <main className="bytovaya-layout">

        {/* Левая карточка */}
        <div className="bytovaya-card">
          <h2 className="bytovaya-card__title">{product.title}</h2>

          <p className="bytovaya-card__desc">{product.description1}</p>
          <p className="bytovaya-card__desc">{product.description2}</p>

          {product.advantagesLeft.map((a, i) => (
            a.isSection
              ? <p key={i} className="bytovaya-card__section-title">{a.title}</p>
              : <div key={i} className="bytovaya-card__advantage">
                  <p className="bytovaya-card__advantage-title">{a.title}</p>
                  <p className="bytovaya-card__advantage-text">{a.text}</p>
                </div>
          ))}

          {/* Категории */}
          <div className="bytovaya-card__categories">
            {categories.map((c) => (
              <div key={c.id} className="bytovaya-cat">
                <div className="bytovaya-cat__icon">{c.icon}</div>
                <p className="bytovaya-cat__label">{c.label}</p>
              </div>
            ))}
          </div>

          <div className="bytovaya-card__divider" />
          <p className="bytovaya-card__article">Артикул: {product.article}</p>
        </div>

        {/* Правая картинка */}
        <div className="bytovaya-image">
          <img src={product.img} alt="Бытовая техника" className="bytovaya-image__img" />
        </div>

      </main>
    </div>
  )
}