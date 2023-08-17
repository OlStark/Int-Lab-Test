import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.scss";
import ReviewsCard from "../cards/reviewsCard";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}
function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
      }}
      onClick={onClick}></div>
  );
}

const dataCollection = [
  {
    name: "Константинов Михаил Павлович",
    city: "Москва",
    reviews:
      "Каждый из нас понимает очевидную вещь: перспективное планирование предоставляет широкие возможности для анализа существующих паттернов поведения. В своём стремлении улучшить пользовательский опыт мы упускаем, что активно развивающиеся страны третьего мира призваны к ответу.",
    icon: "./noname.jpg",
  },
  {
    name: "Иван Иванов",
    city: "Санкт-Петербург",
    reviews:
      "Каждый из нас понимает очевидную вещь: перспективное планирование предоставляет широкие возможности для анализа существующих паттернов поведения. В своём стремлении улучшить пользовательский опыт мы упускаем, что активно развивающиеся страны третьего мира призваны к ответу.",
    icon: "./user1.jpg",
  },
  {
    name: "Артем Корнилов",
    city: "Самара",
    reviews:
      "Каждый из нас понимает очевидную вещь: перспективное планирование предоставляет широкие возможности для анализа существующих паттернов поведения. В своём стремлении улучшить пользовательский опыт мы упускаем, что активно развивающиеся страны третьего мира призваны к ответу.",
    icon: "./user2.jpg",
  },
  {
    name: "Константинов Михаил Павлович",
    city: "Москва",
    reviews:
      "Каждый из нас понимает очевидную вещь: перспективное планирование предоставляет широкие возможности для анализа существующих паттернов поведения. В своём стремлении улучшить пользовательский опыт мы упускаем, что активно развивающиеся страны третьего мира призваны к ответу.",
    icon: "./noname.jpg",
  },
  {
    name: "Иван Иванов",
    city: "Санкт-Петербург",
    reviews:
      "Каждый из нас понимает очевидную вещь: перспективное планирование предоставляет широкие возможности для анализа существующих паттернов поведения. В своём стремлении улучшить пользовательский опыт мы упускаем, что активно развивающиеся страны третьего мира призваны к ответу.",
    icon: "./user1.jpg",
  },
  {
    name: "Артем Корнилов",
    city: "Самара",
    reviews:
      "Каждый из нас понимает очевидную вещь: перспективное планирование предоставляет широкие возможности для анализа существующих паттернов поведения. В своём стремлении улучшить пользовательский опыт мы упускаем, что активно развивающиеся страны третьего мира призваны к ответу.",
    icon: "./user2.jpg",
  },
  {
    name: "Константинов Михаил Павлович",
    city: "Москва",
    reviews:
      "Каждый из нас понимает очевидную вещь: перспективное планирование предоставляет широкие возможности для анализа существующих паттернов поведения. В своём стремлении улучшить пользовательский опыт мы упускаем, что активно развивающиеся страны третьего мира призваны к ответу.",
    icon: "./noname.jpg",
  },
  {
    name: "Иван Иванов",
    city: "Санкт-Петербург",
    reviews:
      "Каждый из нас понимает очевидную вещь: перспективное планирование предоставляет широкие возможности для анализа существующих паттернов поведения. В своём стремлении улучшить пользовательский опыт мы упускаем, что активно развивающиеся страны третьего мира призваны к ответу.",
    icon: "./user1.jpg",
  },
  {
    name: "Артем Корнилов",
    city: "Самара",
    reviews:
      "Каждый из нас понимает очевидную вещь: перспективное планирование предоставляет широкие возможности для анализа существующих паттернов поведения. В своём стремлении улучшить пользовательский опыт мы упускаем, что активно развивающиеся страны третьего мира призваны к ответу.",
    icon: "./user2.jpg",
  },
  {
    name: "Константинов Михаил Павлович",
    city: "Москва",
    reviews:
      "Каждый из нас понимает очевидную вещь: перспективное планирование предоставляет широкие возможности для анализа существующих паттернов поведения. В своём стремлении улучшить пользовательский опыт мы упускаем, что активно развивающиеся страны третьего мира призваны к ответу.",
    icon: "./noname.jpg",
  },
  {
    name: "Иван Иванов",
    city: "Санкт-Петербург",
    reviews:
      "Каждый из нас понимает очевидную вещь: перспективное планирование предоставляет широкие возможности для анализа существующих паттернов поведения. В своём стремлении улучшить пользовательский опыт мы упускаем, что активно развивающиеся страны третьего мира призваны к ответу.",
    icon: "./user1.jpg",
  },
  {
    name: "Артем Корнилов",
    city: "Самара",
    reviews:
      "Каждый из нас понимает очевидную вещь: перспективное планирование предоставляет широкие возможности для анализа существующих паттернов поведения. В своём стремлении улучшить пользовательский опыт мы упускаем, что активно развивающиеся страны третьего мира призваны к ответу.",
    icon: "./user2.jpg",
  },
];

function Carousel() {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow className="prev" />,
    appendDots: (dots) => (
      <div
        style={{
          borderRadius: "10px",
          padding: "10px",
        }}>
        <ul style={{ margin: "0px" }}>{dots}</ul>
      </div>
    ),
  };
  return (
    <div>
      <Slider {...settings}>
        {dataCollection.map((item, index) => (
          <div key={index}>
            <ReviewsCard
              icon={item.icon}
              subtitle={item.name}
              text={item.city}
              reviews={item.reviews}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Carousel;