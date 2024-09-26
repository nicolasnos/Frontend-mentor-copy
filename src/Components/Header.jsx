import React, { useState } from "react";
import HamburguerLogo from "../assets/images/icon-hamburger.svg";
import CloseIcon from "../assets/images/icon-close.svg";
import "../Styles/Header.css";

const Header = () => {
  const navigation = [
    { name: "home", href: "#" },
    { name: "shop", href: "#" },
    { name: "about", href: "#" },
    { name: "contact", href: "#" },
  ];
  const [menu, setMenu] = useState(false);

  return window.screen.width <= 820 ? (
    <header className="mobileHeader">
      <img
        src={HamburguerLogo}
        alt="Hamburguer Logo"
        onClick={() => setMenu(true)}
      />
      <h1 className="mainTitle">room</h1>
      {menu && (
        <nav className="mobileMenu">
          <button onClick={() => setMenu(false)}>
            <img src={CloseIcon} alt="Hamburguer Logo" />
          </button>
          <ul>
            {navigation.map((item) => (
              <li key={item.name}>
                <a href={item.href}>{item.name}</a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  ) : (
    <header className="bg-slate-800 text-white p-4">
      <h1 className="text-3xl font-bold">room</h1>
      <nav>
        <ul>
          {navigation.map((item) => (
            <li key={item.name}>
              <a href={item.href}>{item.name}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
