import './FirstPage.css'
import TelegramButton from '../components/TelegramButton'

export default function FirstPage() {
  return (
    <div className="page">

      {/* BREADCRUMB */}
      <div className="breadcrumb">ДИЗАЙН ИНТЕРЬЕРА / ПАКЕТЫ ДИЗАЙНА</div>

      {/* ПАКЕТЫ */}
      <main className="packages">

        <div className="package package--s">
          <div className="package__content">
            <h2 className="package__title">ПАКЕТ S</h2>
            <p className="package__desc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris mi quam,
              euismod quis mi quis, dapibus porta ante. Aenean mi arcu, dapibus quis
              ornare eget, porta id mi. Suspendisse potenti. Sed ullamcorper risus eu
              mi dapibus sodales.
            </p>
            <ul className="package__list">
              <li>Lorem ipsum dolor sit amet</li>
              <li>consectetur adipiscing elit.</li>
              <li>Mauris mi quam, euismod quis mi</li>
              <li>quis, dapibus porta ante.</li>
              <li>Aenean mi arcu, dapibus</li>
            </ul>
          </div>
          <img src="/img/pagefirst/Слой1.png" alt="Стул" className="package__img" />
          <div className="package__price">от 130 000 тг за м²</div>
        </div>

        <div className="package package--m">
          <div className="package__content">
            <h2 className="package__title">ПАКЕТ M</h2>
            <p className="package__desc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris mi quam,
              euismod quis mi quis, dapibus porta ante. Aenean mi arcu, dapibus quis
              ornare eget, porta id mi. Suspendisse potenti. Sed ullamcorper risus eu
              mi dapibus sodales.
            </p>
            <ul className="package__list">
              <li>Lorem ipsum dolor sit amet</li>
              <li>consectetur adipiscing elit.</li>
              <li>Mauris mi quam, euismod quis mi</li>
              <li>quis, dapibus porta ante.</li>
              <li>Aenean mi arcu, dapibus</li>
            </ul>
          </div>
          <img src="/img/pagefirst/plant.png" alt="Растение" className="package__img" />
          <div className="package__price">от 130 000 тг за м²</div>
        </div>

        <div className="package package--l">
          <div className="package__content">
            <h2 className="package__title">ПАКЕТ L</h2>
            <p className="package__desc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris mi quam,
              euismod quis mi quis, dapibus porta ante. Aenean mi arcu, dapibus quis
              ornare eget, porta id mi. Suspendisse potenti. Sed ullamcorper risus eu
              mi dapibus sodales.
            </p>
            <ul className="package__list">
              <li>Lorem ipsum dolor sit amet</li>
              <li>consectetur adipiscing elit.</li>
              <li>Mauris mi quam, euismod quis mi</li>
              <li>quis, dapibus porta ante.</li>
              <li>Aenean mi arcu, dapibus</li>
              <li>quis ornare eget</li>
              <li>Suspendisse potenti.</li>
              <li>ullamcorper risus eu mi</li>
              <li>dapibus sodales.</li>
            </ul>
          </div>
          <img src="/img/pagefirst/F5.png" alt="Кресло" className="package__img" />
          <div className="package__price">от 210 000 тг за м²</div>
        </div>

      </main>

      {/* СЕКЦИЯ DREAM */}
      <section className="dream">
        <img src="/img/pagefirst/key1.png" alt="" className="dream__key dream__key--tl" />
        <img src="/img/pagefirst/key1.png" alt="" className="dream__key dream__key--tm" />
        <img src="/img/pagefirst/key1.png" alt="" className="dream__key dream__key--bl" />
        <img src="/img/pagefirst/key1.png" alt="" className="dream__key dream__key--br" />

        <div className="dream__left">
          <h2 className="dream__title">ВОПЛОТИ СВОЮ МЕЧТУ</h2>
          <p className="dream__desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris mi quam,
            euismod quis mi quis, dapibus porta ante. Aenean mi arcu, dapibus quis
            ornare eget, porta id mi. Suspendisse potenti. Sed ullamcorper risus eu mi
            dapibus sodales.
          </p>
          <a href="#" className="dream__btn">ОТ 10 000 000 ТГ</a>

          {/* Кнопка Telegram */}
          <div style={{ marginTop: '16px' }}>
            <TelegramButton />
          </div>
        </div>

        <div className="dream__right">
          <img src="/img/pagefirst/room.png" alt="Комната" className="dream__room" />
        </div>
      </section>

    </div>
  )
}
