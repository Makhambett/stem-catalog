import './Lighting.css'

const products = [
  // Скрин 1 (оригинальный дизайн)
  {
    id: 1,
    title: 'START',
    img: '/img/pagedecor/lighting/start.png',
    size: '600х600',
    article: 'S.Me-ST.S.DP',
  },
  {
    id: 2,
    title: 'LEZARD',
    img: '/img/pagedecor/lighting/lezard.png',
    size: '600х600',
    article: 'S.Me-ST.S.DP',
  },
  {
    id: 3,
    title: 'ВСТРАИВАЕМЫЙ СВЕТИЛЬНИК ЭРА',
    img: '/img/pagedecor/lighting/era.png',
    size: '600х600',
    article: 'S.Me-ST.S.DP',
  },
  {
    id: 4,
    title: 'TEKLED LED SLIM ROUND',
    img: '/img/pagedecor/lighting/tekled.png',
    size: '600х600',
    article: 'S.Me-ST.S.DP',
  },
  {
    id: 5,
    title: 'ELEKTROSTANDARD',
    img: '/img/pagedecor/lighting/elektrostandard.png',
    size: '600х600',
    article: 'S.Me-ST.S.DP',
  },
  {
    id: 6,
    title: 'LED ЛЕНТЫ',
    img: '/img/pagedecor/lighting/led-lenty.png',
    size: '600х600',
    article: 'S.Me-ST.S.DP',
  },
  {
    id: 7,
    title: 'LEDS C4',
    img: '/img/pagedecor/lighting/leds-c4.png',
    size: '3025 х 700',
    article: 'S.Me-ST.S.DP',
  },
  {
    id: 8,
    title: 'LED PENDELLEUCHTE OVAL',
    img: '/img/pagedecor/lighting/led-oval.png',
    size: '700х200х170',
    article: 'S.Me-ST.S.DP',
  },
  // Скрин 2 (продолжение)
  {
    id: 9,
    title: 'VOLTA LIGHTSTAR',
    img: '/img/pagedecor/lighting/volta.png',
    size: '600х600',
    article: 'S.Me-ST.S.DP',
  },
  {
    id: 10,
    title: 'LEZARD',
    img: '/img/pagedecor/lighting/lezard2.png',
    size: '600х600',
    article: 'S.Me-ST.S.DP',
  },
  {
    id: 11,
    title: 'ARKOSLIGHT FIFTY HO SUSPENDED LAMP',
    img: '/img/pagedecor/lighting/arkoslight.png',
    size: '600х600',
    article: 'S.Me-ST.S.DP',
  },
  {
    id: 12,
    title: 'START',
    img: '/img/pagedecor/lighting/start2.png',
    size: '600х600',
    article: 'S.Me-ST.S.DP',
  },
  {
    id: 13,
    title: 'RULLO LIGHTSTAR',
    img: '/img/pagedecor/lighting/rullo.png',
    size: '600х600',
    article: 'S.Me-ST.S.DP',
  },
  {
    id: 14,
    title: 'AURA WN02W H-GU10',
    img: '/img/pagedecor/lighting/aura.png',
    size: '600х600',
    article: 'S.Me-ST.S.DP',
  },
  {
    id: 15,
    title: 'DK LED WALL SPOTLIGHT',
    img: '/img/pagedecor/lighting/dk-led.png',
    size: '3025 х 700',
    article: 'S.Me-ST.S.DP',
  },
  {
    id: 16,
    title: 'START',
    img: '/img/pagedecor/lighting/start3.png',
    size: '700х200х170',
    article: 'S.Me-ST.S.DP',
  },
]


export default function Lighting() {
  return (
    <div className="page">
      <div className="breadcrumb">ДЕКОР | ОСВЕЩЕНИЕ</div>
      <main className="lighting-grid">
        {products.map((p) => (
          <div key={p.id} className="light-card">
            <img src={p.img} alt={p.title} className="light-card__img" />
            <h2 className="light-card__title">{p.title}</h2>
            <div className="light-card__size-row">
              <span className="light-card__label">Размеры:</span>
              <span className="light-card__value">{p.size}</span>
            </div>
            <p className="light-card__article">Артикул: {p.article}</p>
          </div>
        ))}
      </main>
    </div>
  )
}
