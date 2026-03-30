import './Printers3D.css'

const features = [
  'Быстрая настройка в течение 10 минут',
  'Автоматическое Выравнивание',
  'Быстросъемная насадка',
  'Максимальная скорость 600 мм/с',
  'Максимальное ускорение 20000 мм/с2',
  'Двойная Фильтрация воздуха для внутренней и внешней циркуляции',
]

export default function Printers3D() {
  return (
    <div className="page">
      <div className="breadcrumb">ЭЛЕКТРОТЕХНИКА | 3D ПРИНТЕРЫ</div>

      <main className="printers3d-layout">

        {/* Левая карточка */}
        <div className="printers3d-card">

          {/* Блок 1 — скорость */}
          <div className="printers3d-block">
            <h3 className="printers3d-block__title">Высокая скорость, высокое качество</h3>
            <p className="printers3d-block__text">
              В AD5MP используется продуманная структура CoreXY, компактная конструкция экструдера с
              прямым приводом и разработанный самостоятельно алгоритм подавления вибрации экструдера.
              Это обеспечивает стабильное качество печати даже в режиме высокоскоростной печати.
            </p>
          </div>

          {/* Блок 2 — калибровка + дракон */}
          <div className="printers3d-block printers3d-block--row">
            <div className="printers3d-block__left">
              <h3 className="printers3d-block__title">Автоматическая калибровка одним нажатием</h3>
              <p className="printers3d-block__text">
                После тестирования нескольких точек AD5MP автоматически выполнит оптимальную настройку уровня.
              </p>
              <ul className="printers3d-block__list">
                <li>Автоматическое смещение по оси Z</li>
                <li>Автоматическое выравнивание</li>
                <li>вибрационного резонанса</li>
                <li>Давления в сопле</li>
              </ul>
            </div>
            <div className="printers3d-block__img-wrap">
              <img
                src="/img/pagethird/printers3d/item1.png"
                alt="Дракон"
                className="printers3d-block__img"
              />
            </div>
          </div>

          {/* Скорость печати */}
          <div className="printers3d-speed">
            <span className="printers3d-speed__label">Скорость печати</span>
            <div className="printers3d-speed__bar">
              <div className="printers3d-speed__fill" />
            </div>
            <span className="printers3d-speed__time">1 час 29 мин.</span>
          </div>

          {/* Блок 3 — циркуляция */}
          <div className="printers3d-block printers3d-block--circulation">
            <h3 className="printers3d-block__title">Качественная структура и оборот</h3>
            <p className="printers3d-block__text">
              Мы гарантируем, что при печати из специальных материалов, таких как ABS, он лучше сохраняет
              тепло, а встроенная функция циркуляции обеспечивает более стабильную печать из ваших
              специальных материалов.
            </p>
            <div className="printers3d-circulation">
              <img
                src="/img/pagethird/printers3d/item2.png"
                alt="Циркуляция"
                className="printers3d-circulation__img"
              />
            </div>
          </div>

        </div>

        {/* Правая часть */}
        <div className="printers3d-right">
          <h3 className="printers3d-right__title">Основные характеристики</h3>
          <ul className="printers3d-right__list">
            {features.map((f, i) => (
              <li key={i} className="printers3d-right__item">• {f}</li>
            ))}
          </ul>

          <div className="printers3d-right__img-wrap">
            <img
              src="/img/pagethird/printers3d/item3.png"
              alt="Принтер"
              className="printers3d-right__img"
            />
          </div>

          <p className="printers3d-right__article">Артикул: M.Ee-3DP.FL.5M</p>
        </div>

      </main>
    </div>
  )
}