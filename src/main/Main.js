import "./style.scss";
import Card from "../components/cards/card";
import icon1 from "../styles/icons/waiting.svg";
import icon2 from "../styles/icons/delivery-truck.svg";
import icon3 from "../styles/icons/secure.svg";
import icon4 from "../styles/icons/money-bags.svg";
import image1 from "../styles/images/2_1.svg";
import image2 from "../styles/images/2_2.svg";
import Carousel from "../components/slider/Carousel";
import Accordion from "../components/accordion/accordion";
import Form from "../components/form/form";

function Main() {
  return (
    <>
      <div className="main">
        <div className="howItsWork" id="howItsWork">
          <div className="howItsWork__title">
            <h2>Как это работает</h2>
          </div>
          <div className="cards">
            <Card
              icon={icon1}
              subtitle={"Прочитай задание внимательно"}
              text={"Думаю у тебя не займет это больше двух-трех минут"}
            />
            <Card
              icon={icon2}
              subtitle={"Изучи весь макет заранее"}
              text={
                "Подумай как это будет работать на разных разрешениях и при скролле"
              }
            />
            <Card
              icon={icon3}
              subtitle={"Сделай хорошо"}
              text={"Чтобы мы могли тебе доверить подобные задачи в будущем"}
            />
            <Card
              icon={icon4}
              subtitle={"Получи предложение"}
              text={
                "Ну тут все просто, не я придумал правила, но думаю так и будет)))"
              }
            />
          </div>
        </div>
        <div className="thirdBlock" id="thirdBlock">
          <div className="thirdBlock__description">
            <div className="thirdBlock__description--title">
              <h3>Круто, ты дошел до третьего блока</h3>
            </div>
            <p>
              63% опрошенных пользовались кредитами из-за того, что не могли
              покрыть непредвиденные расходы свыше 15 000 ₽.{" "}
            </p>
            <br></br>
            <p>
              Доступ к заработанным деньгам помогает отказаться от кредитов и
              экономить деньги на процентах и штрафах.
            </p>
          </div>
          <div className="thirdBlock__image">
            <img src={image1} className="image1" />
            <img src={image2} className="image2" />
          </div>
        </div>
        <div className="reviews">
          <div className="reviews__title">
            <h2>Отзывы</h2>
          </div>
          <div className="carousel">
            <Carousel></Carousel>
          </div>
        </div>
        <div className="qa" id="qa">
          <Accordion />
        </div>
        <div className="info">
          <div className="info__wrapper">
            <div className="info__container">
              <div className="info__title">
                <span>Опрошенных пользовались микрокредитами</span>
              </div>
              <div className="info__text">
                <p>
                  Не могли покрыть внезапные траты свыше 7000 ₽. Доступ к
                  заработанным деньгам помогает отказаться от кредитов и
                  экономить деньги на процентах и штрафах Не могли покрыть
                  внезапные траты свыше 7000 ₽. Доступ к заработанным деньгам
                  помогает отказаться от кредитов и экономить деньги на
                  процентах и штрафах
                </p>
              </div>
            </div>
            <div className="info__container">
              <div className="info__title">
                <span>Опрошенных пользовались микрокредитами</span>
              </div>
              <div className="info__text">
                <p>
                  Не могли покрыть внезапные траты свыше 7000 ₽. Доступ к
                  заработанным деньгам помогает отказаться от кредитов и
                  экономить деньги на процентах и штрафахНе могли покрыть
                  внезапные траты свыше 7000 ₽. Доступ к заработанным деньгам
                  помогает отказаться от кредитов и экономить деньги на
                  процентах и штрафах Не могли покрыть внезапные траты свыше
                  7000 ₽. Доступ к заработанным деньгам помогает отказаться от
                  кредитов и экономить деньги на процентах и штрафах
                </p>
              </div>
            </div>
            <div className="info__container">
              <div className="info__title">
                <span>Опрошенных пользовались микрокредитами</span>
              </div>
              <div className="info__text">
                <p>
                  Не могли покрыть внезапные траты свыше 7000 ₽. Доступ к
                  заработанным деньгам помогает отказаться от кредитов и
                  экономить деньги на процентах и штрафах Не могли покрыть
                  внезапные траты свыше 7000 ₽. Доступ к заработанным деньгам
                  помогает отказаться от кредитов и экономить деньги на
                  процентах и штрафах
                </p>
              </div>
            </div>
            <div className="info__container">
              <div className="info__title">
                <span>Опрошенных пользовались микрокредитами</span>
              </div>
              <div className="info__text">
                <p>
                  Не могли покрыть внезапные траты свыше 7000 ₽. Доступ к
                  заработанным деньгам помогает отказаться от кредитов и
                  экономить деньги на процентах и штрафах Не могли покрыть
                  внезапные траты свыше 7000 ₽. Доступ к заработанным деньгам
                  помогает отказаться от кредитов и экономить деньги на
                  процентах и штрафах
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="send-form" id="send-form">
          <Form />
        </div>
      </div>
    </>
  );
}

export default Main;
