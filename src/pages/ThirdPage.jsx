import React from "react";
import { Link } from "react-router-dom";
import "./ThirdPage.css";

const ThirdPage = () => {
  const items = [
    { id: 1, title: "Интерактивные панели", image: "/img/pagethird/panel.png", path: '/electro/interactive' },
    { id: 2, title: "Компьютеры",           image: "/img/pagethird/comp.png",  path: '/electro/computers' },
    { id: 3, title: "Инфо-киоск",           image: "/img/pagethird/info.png",  path: '/electro/infokiosk' },
    { id: 4, title: "Станки",               image: "/img/pagethird/stanki.png",path: '/electro/stanki' },
    { id: 5, title: "Бытовая техника",      image: "/img/pagethird/tech.png",  path: '/electro/bytovaya' },
    { id: 6, title: "3D принтеры",          image: "/img/pagethird/print.png", path: '/electro/printers3d' },
  ];

  return (
    <div className="third-page">
      <div className="third-breadcrumb">ЭЛЕКТРОТЕХНИКА</div>
      <div className="third-grid">
        {items.map((item) => (
          <Link to={item.path} key={item.id} className="third-card">
            <div className="third-card__img-wrap">
              <img src={item.image} alt={item.title} className="third-card__img" />
            </div>
            <h3 className="third-card__title">{item.title}</h3>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ThirdPage;