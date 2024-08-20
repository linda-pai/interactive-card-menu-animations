import { useEffect, useState } from "react";
import getOffset from "./utils/getOffset";
import "./App.css";
import { ReactComponent as Flower1 } from "./flower_1.svg";
import { ReactComponent as Flower2 } from "./flower_2.svg";
import { ReactComponent as Flower3 } from "./flower_3.svg";
import { ReactComponent as Flower4 } from "./flower_4.svg";

const content = [
  {
    title: "毅力",
    svg: <Flower1 />,
    id: 1,
  },
  {
    title: "樂觀",
    svg: <Flower2 />,
    id: 2,
  },
  {
    title: "積極",
    svg: <Flower3 />,
    id: 3,
  },
  {
    title: "執著",
    svg: <Flower4 />,
    id: 4,
  },
];

const options = [
  {
    title: "無懼未來的自己",
    id: 1,
  },
  {
    title: "勇於挑戰的自己",
    id: 2,
  },
  {
    title: "珍惜每天的自己",
    id: 3,
  },
  {
    title: " ",
    id: 4,
  },
];

function App() {
  const [selectedCard, setSelectedCard] = useState(null);
  const [selectOption, setSelectedOption] = useState(null);

  const handleOnClickCard = (e) => {
    const target = e.currentTarget;
    target.classList.add("selected");

    setSelectedCard(target.id);

    //animation
    //target translateXY to the center
    const { translateX, translateY } = getOffset(target);

    //other cards opacity to 0
    const cards = document.querySelectorAll(".card");
    cards.forEach((card) => {
      if (card !== target) {
        card.style.opacity = 0;
      }
    });

    //target translateXY to the center after 0.8s
    setTimeout(() => {
      target.style.transform = `translate(${translateX}px, ${translateY}px)`;
    }, 800);

    //.cards-wrapper opacity to 0 and display none after 4.5s
    const cardsWrapper = document.querySelector(".cards-wrapper");
    const selectedCard = document.querySelector(".selected-card");

    setTimeout(() => {
      cardsWrapper.style.opacity = "0";
    }, 4500);

    setTimeout(() => {
      cardsWrapper.style.display = "none";
      selectedCard.style.display = "block";
    }, 5500);

    //.select-wrapper scaleY to 1 after 7.2s
    setTimeout(() => {
      const selectWrapper = document.querySelector(".select-wrapper");
      selectWrapper.style.transform = "scaleY(1)";
    }, 7200);
  };

  const handleOnClickOption = (e) => {
    const target = e.currentTarget;
    target.classList.add("selected");

    setSelectedOption(target.textContent);
  };

  useEffect(() => {
    if (selectOption) {
      //framePlaceHolder scaleX to 1 after 1.5s
      setTimeout(() => {
        const framePlaceHolder = document.querySelector(".frame-place-holder");
        framePlaceHolder.style.transform = "scaleX(1)";
      }, 1500);

      //select-wrapper scaleY to 0 after 2s
      setTimeout(() => {
        const selectWrapper = document.querySelector(".select-wrapper");
        selectWrapper.style.transform = "scaleY(0)";
      }, 2000);

      //framePlaceHolder scaleY to 0 after 2.5s
      setTimeout(() => {
        const framePlaceHolder = document.querySelector(".frame-place-holder");
        framePlaceHolder.style.transform = "scaleY(0)";
      }, 2500);

      const optionSelectWrapper = document.querySelector(
        ".option-select-wrapper"
      );

      //option-select-wrapper > text-frame scaleY to 0 after 3s
      setTimeout(() => {
        const textFrame = optionSelectWrapper.querySelector(".text-frame");
        textFrame.style.animation = "scaleDown 0.3s forwards";
      }, 3000);

      //option-select-wrapper > text-frame-outline scaleY to 0 after 3.3s
      setTimeout(() => {
        const textFrameOutline = optionSelectWrapper.querySelector(
          ".text-frame-outline"
        );
        textFrameOutline.style.animation = "scaleDown 0.3s forwards";
      }, 3300);
    }
  }, [selectOption]);

  return (
    <div className="App">
      {/* 四張圖卡 Start */}
      <div className="cards-wrapper">
        {Array(4)
          .fill(0)
          .map((_, index) => (
            <div
              className="card"
              onClick={handleOnClickCard}
              id={content[index].id}
              key={content[index].id}
            >
              <div id={`card-${content[index].id}`}>
                <div className={`animated-line animated-line-${index}`}>
                  <div className="animation-card ">
                    <div className="content-wrapper">{content[index].svg}</div>
                  </div>
                </div>
                <div className="text-frame-wrapper">
                  <div className="text-frame"></div>
                  <div className="text-frame-outline"></div>
                </div>
                <div className="text-frame-content">{content[index].title}</div>
              </div>
            </div>
          ))}
      </div>
      {/* 四張圖卡 End */}

      {/* 選單下拉 Start */}
      <div className="selected-card">
        {selectedCard && (
          <div className="option-select-wrapper">
            <div className="text-frame-wrapper">
              <div className="text-frame">
                <p className="frame-place-holder">
                  {selectOption ? selectOption : "\u00A0"}
                </p>
              </div>
              <div className="text-frame-outline"></div>
            </div>
            <div className="select-wrapper">
              {options.map((item) => (
                <div
                  className="option-item"
                  onClick={handleOnClickOption}
                  key={item.id}
                >
                  <p>{item.title}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      {/* 選單下拉 End */}
    </div>
  );
}

export default App;
