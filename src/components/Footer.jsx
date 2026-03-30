import './Footer.css'
import TelegramButton from './TelegramButton';

export default function Footer() {
  return (
    <footer className="footer">
      <span>Каталог разработан в STEM Academia | 2025</span>
      <div className="footer__right">
        <span>📍 г.Астана ул.Домалак-ана 26</span>
        <div className="footer__socials">
          <a href="#">IG</a>
          <a href="#">YT</a>
          <a href="#">WA</a>
        </div>
        <div className="footer-telegram">
        <p>Остались вопросы?</p>
        <TelegramButton />
        </div>
      </div>
    </footer>
  )
}
