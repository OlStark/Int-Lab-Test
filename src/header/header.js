import Switcher from "../components/switcher/switch";
import Button from "../components/buttons/button";
import "./style.scss";
import Navbar from "../components/navBar/NavBar";

const Header = function () {
  return (
    <>
      <div className="wrapper">
        <div className="overlay"></div>
      </div>
      <header className="header">
        <div className="logo">
          <Switcher />
          <h5 className="logo-text">testLab</h5>
        </div>
        <nav>
          <span />
          <span />
          <a href="#howItsWork">Как это работает</a>
          <a href="#thirdBlock">3-й блок</a>
          <a href="#qa">Вопросы и ответы</a>
          <a href="#send-form">Форма</a>
        </nav>
        <Navbar />
      </header>
      <div className="change-proffesion">
        <div className="change-proffesion__title">
          <h1>Говорят, никогда не поздно сменить професию</h1>
        </div>
        <div className="change-proffesion__subtitle">
          <p>Сделай круто тестовое задание и у тебя получится</p>
        </div>
        <div className="change-proffesion__button">
          <Button text={"Проще простого!"} check={true}></Button>
        </div>
      </div>
    </>
  );
};

export default Header;
