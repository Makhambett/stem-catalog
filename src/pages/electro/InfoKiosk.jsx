import './InfoKiosk.css'

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
  advantagesRight: [
    {
      title: 'Наглядная подача любого контента:',
      text: 'Графический интерфейс и возможность воспроизведения видео обеспечивают наглядную и запоминающуюся передачу информации.',
    },
    {
      title: 'Возможность выбрать язык взаимодействия:',
      text: 'Пользователи могут выбрать предпочтительный язык общения, что повышает удобство использования для различных аудиторий.',
    },
    {
      title: 'Самостоятельный поиск информации:',
      text: 'Пользователи могут самостоятельно проводить поиск по необходимым темам, что экономит их время и усилия.',
    },
  ],
  specs: [
    { icon: '🖥', label: 'Серия процессора',       value: 'Intel Core i3 GEN6' },
    { icon: '⊞', label: 'Разрешение дисплея',       value: 'FullHD'            },
    { icon: '💾', label: 'Объём оперативной памяти', value: '8Gb'               },
    { icon: '🔧', label: 'Тип оперативной памяти',   value: 'DDR3'              },
    { icon: '💿', label: 'Тип накопителя',           value: 'SSD 128Gb'         },
    { icon: '⊞', label: 'Операционная система',      value: 'Windows 10'        },
    { icon: '📐', label: 'Диагональ',                value: '49"'               },
    { icon: '👆', label: 'Количество касаний',       value: '10 касаний'        },
  ],
  img: '/img/pagethird/infokiosk/item1.png',
  article: 'S.Ee-INK.DDS.K',
}

export default function InfoKiosk() {
  return (
    <div className="page">
      <div className="breadcrumb">ЭЛЕКТРОТЕХНИКА | ИНФОРМАЦИОННЫЙ КИОСК</div>

      <main className="infokiosk-layout">

        {/* Левая карточка */}
        <div className="infokiosk-card">
          <h2 className="infokiosk-card__title">{product.title}</h2>

          <div className="infokiosk-card__content">
            {/* Левая колонка */}
            <div className="infokiosk-card__col">
              <p className="infokiosk-card__desc">{product.description1}</p>
              <p className="infokiosk-card__desc">{product.description2}</p>
              {product.advantagesLeft.map((a, i) => (
                a.isSection
                  ? <p key={i} className="infokiosk-card__section-title">{a.title}</p>
                  : <div key={i} className="infokiosk-card__advantage">
                      <p className="infokiosk-card__advantage-title">{a.title}</p>
                      <p className="infokiosk-card__advantage-text">{a.text}</p>
                    </div>
              ))}
            </div>

            {/* Правая колонка */}
            <div className="infokiosk-card__col">
              {product.advantagesRight.map((a, i) => (
                <div key={i} className="infokiosk-card__advantage">
                  <p className="infokiosk-card__advantage-title">{a.title}</p>
                  <p className="infokiosk-card__advantage-text">{a.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Характеристики */}
          <div className="infokiosk-card__specs-section">
            <h3 className="infokiosk-card__specs-title">Характеристики</h3>
            <div className="infokiosk-card__specs">
              {product.specs.map((s, i) => (
                <div key={i} className="kiosk-spec">
                  <div className="kiosk-spec__icon">{s.icon}</div>
                  <div className="kiosk-spec__label">{s.label}</div>
                  <div className="kiosk-spec__value">{s.value}</div>
                </div>
              ))}
            </div>
          </div>

          <p className="infokiosk-card__article">Артикул: {product.article}</p>
        </div>

        {/* Правая картинка */}
        <div className="infokiosk-image">
          <img src={product.img} alt="Инфокиоск" className="infokiosk-image__img" />
        </div>

      </main>
    </div>
  )
}