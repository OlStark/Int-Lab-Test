import { useState } from "react";
import Switcher from "../switcher/switch";
import "./style.scss";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

function Navbar() {
  const [nav, setNav] = useState(false);
  const scrollControl = {
    diasbledScroll() {
      document.body.style.cssText = `overflow: hidden`;
    },

    enabledScroll() {
      document.body.style.cssText = `overflow: visible`;
      setNav(false);
    },
  };

  return (
    <div className="container">
      <div className="box">
        <div className={nav ? "logo__image active" : "logo__image"}>
          <Switcher />
          <h5 style={nav ? { color: "black" } : { color: "white" }}>testLab</h5>
        </div>
        <ul className={nav ? "menu active" : "menu"}>
          <li>
            <a href="#howItsWork" onClick={() => scrollControl.enabledScroll()}>
              Как это работает
            </a>
            <div className="arrow"></div>
          </li>
          <li>
            <a href="#thirdBlock" onClick={() => scrollControl.enabledScroll()}>
              3-й блок
            </a>
            <div className="arrow"></div>
          </li>
          <li>
            <a href="#qa" onClick={() => scrollControl.enabledScroll()}>
              Вопросы и ответы
            </a>
            <div className="arrow"></div>
          </li>
          <li>
            <a href="#send-form" onClick={() => scrollControl.enabledScroll()}>
              Форма
            </a>
            <div className="arrow"></div>
          </li>
        </ul>
        <div className="mobile__btn" onClick={() => setNav(!nav)}>
          {nav ? (
            <AiOutlineClose
              size={22}
              onClick={() => scrollControl.enabledScroll()}
            />
          ) : (
            <AiOutlineMenu
              size={22}
              color="white"
              onClick={() => scrollControl.diasbledScroll()}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
