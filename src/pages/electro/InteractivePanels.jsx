import './InteractivePanels.css'

const products = [
  {
    id: 1,
    description: 'Современное образовательное решение, которое позволяет учителям сделать уроки более наглядными, эффективными и интересными для учеников. Панель оснащена технологиями сенсорного управления, что позволяет учителям управлять процессом презентации, делать пометки и комментарии, изменять текст и многое другое.',
    software: {
      title: 'Функционал дополнительного ПО',
      name: 'Roqed Science',
      text: '– программа для изучения науки и отработки навыков в виртуальной и интерактивной среде. Более +450 моделей по Биологии +330 моделей по Физике, +370 моделей по Химии.',
      img: '/img/pagethird/interactive/item1.png',
    },
    included: [
      'Интерактивная панель Roqed RQ-GT.',
      'Мобильная стойка Riotouch mobile stand',
      'Встроенный компьютер OPS GREATZC i5-1035C1',
      'ПО Roqed Science premium для изучения естественных наук для преподавателя',
      'Пульт дистанционного управления',
      'Настенное крепление',
      'Кабель питания 5м',
      'Кабель HDMI 5м',
    ],
    specs: [
      { icon: '⛶', label: 'Диагональ/дюйм',        value: "65' 75' 85'",                  highlight: true  },
      { icon: '⊞', label: 'Разрешение',              value: '3840x2160',                   highlight: true  },
      { icon: '🛡', label: 'Поверхность экрана',      value: 'Антибликовая Антивандальная', highlight: false },
      { icon: '💻', label: 'Операционные системы',    value: 'Android 11 Windows 11',       highlight: true  },
      { icon: '📡', label: 'Применяемая технология',  value: 'инфракрасная сенсорная',      highlight: true  },
      { icon: '💾', label: 'Тип оперативной памяти',  value: 'DDR4',                        highlight: true  },
      { icon: '🔊', label: 'Встроенные динамики',     value: '2x15 Вт',                     highlight: true  },
      { icon: '📋', label: 'Оперативная память',      value: '8Gb',                         highlight: true  },
      { icon: '🔆', label: 'Контрастность',           value: '1200:1',                      highlight: false },
      { icon: 'R',  label: 'Встроенная ПО',           value: 'ROQED SCIENCE',               highlight: true, orange: true },
    ],
    article: 'L.Me-DI.UN.2500',
  },
  {
    id: 2,
    img: '/img/pagethird/interactive/item2.png',
    article: 'M.Ee-IP.Rq.75',
  },
]

export default function InteractivePanels() {
  return (
    <div className="page">
      <div className="breadcrumb">ЭЛЕКТРОТЕХНИКА | ИНТЕРАКТИВНЫЕ ПАНЕЛИ</div>

      <main className="interactive-layout">

        {/* Левая карточка */}
        <div className="interactive-card--detailed">

          <h3 className="interactive-card__section-title">Описание интерактивной панели</h3>
          <p className="interactive-card__desc">{products[0].description}</p>

          <div className="interactive-card__software">
            <p className="interactive-card__software-title">{products[0].software.title}</p>
            <div className="interactive-card__software-inner">
              <p className="interactive-card__software-text">
                <strong>{products[0].software.name}</strong> {products[0].software.text}
              </p>
              <img
                src={products[0].software.img}
                alt="Roqed Science"
                className="interactive-card__software-img"
              />
            </div>
          </div>

          <h3 className="interactive-card__section-title">В комплекте</h3>
          <ul className="interactive-card__list">
            {products[0].included.map((item, i) => (
              <li key={i}>• {item}</li>
            ))}
          </ul>

          <h3 className="interactive-card__section-title">Характеристики интерактивной панели</h3>
          <div className="interactive-card__specs">
            {products[0].specs.map((s, i) => (
              <div key={i} className={`spec-item ${s.orange ? 'spec-item--orange' : ''}`}>
                <div className="spec-item__icon">{s.icon}</div>
                <div className="spec-item__label">{s.label}</div>
                <div className={`spec-item__value ${s.highlight ? 'spec-item__value--bold' : ''}`}>
                  {s.value}
                </div>
              </div>
            ))}
          </div>

          <p className="interactive-card__article">Артикул: {products[0].article}</p>
        </div>

        {/* Правая часть */}
        <div className="interactive-card--image">
          <div className="interactive-card__img-wrap">
            <img
              src={products[1].img}
              alt="Интерактивная панель"
              className="interactive-card__img"
            />
          </div>
          <p className="interactive-card__article">Артикул: {products[1].article}</p>
        </div>

      </main>
    </div>
  )
}