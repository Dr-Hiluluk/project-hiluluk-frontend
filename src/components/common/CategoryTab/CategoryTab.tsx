import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Responsive } from "../Responsive";
import {
  IoBody,
  IoHappy,
  IoHeart,
  IoSad,
  IoMic,
  IoPerson,
  IoShirt,
  IoMaleFemaleSharp,
  IoHandLeft,
  IoFootsteps,
  IoSkull,
  IoWater,
} from "react-icons/io5";
import "./CategoryTab.scss";

const CategoryTab = () => {
  const [active, setActive] = useState([
    { id: 0, isActive: false, categoryName: "전신", categoryIcon: <IoBody /> },
    { id: 1, isActive: false, categoryName: "머리", categoryIcon: <IoHappy /> },
    { id: 2, isActive: false, categoryName: "정신", categoryIcon: <IoHeart /> },
    { id: 3, isActive: false, categoryName: "얼굴", categoryIcon: <IoSad /> },
    { id: 4, isActive: false, categoryName: "목", categoryIcon: <IoMic /> },
    {
      id: 5,
      isActive: false,
      categoryName: "가슴/등",
      categoryIcon: <IoPerson />,
    },
    { id: 6, isActive: false, categoryName: "복부", categoryIcon: <IoShirt /> },
    {
      id: 7,
      isActive: false,
      categoryName: "비뇨기",
      categoryIcon: <IoMaleFemaleSharp />,
    },
    {
      id: 8,
      isActive: false,
      categoryName: "팔과 손",
      categoryIcon: <IoHandLeft />,
    },
    {
      id: 9,
      isActive: false,
      categoryName: "다리와 발",
      categoryIcon: <IoFootsteps />,
    },
    {
      id: 10,
      isActive: false,
      categoryName: "뼈/근육",
      categoryIcon: <IoSkull />,
    },
    {
      id: 11,
      isActive: false,
      categoryName: "피부",
      categoryIcon: <IoWater />,
    },
  ]);

  const [indicatorActive, setIndicatorActive] = useState(false);

  const handleButtonClick = (idNumber: number) => {
    setActive(
      active.map((btn) =>
        idNumber === btn.id
          ? { ...btn, isActive: !btn.isActive }
          : { ...btn, isActive: false },
      ),
    );
  };

  useEffect(() => {
    const activeLength = active.filter((item) => item.isActive === true).length;
    activeLength === 1 ? setIndicatorActive(true) : setIndicatorActive(false);
  }, [active]);

  return (
    <div className="category-area">
      <Responsive className="category-wrapper">
        <div className="category">
          <ul>
            {active.map((button) => (
              <li
                key={button.id}
                id={button.id.toString()}
                className={
                  active[button.id - 1].isActive ? "list active" : "list"
                }
                onClick={() => handleButtonClick(button.id)}
              >
                <Link to="/">
                  <span className="icon">{button.categoryIcon}</span>
                  <span className="text">{button.categoryName}</span>
                </Link>
              </li>
            ))}
            <div
              id="indicator"
              className={indicatorActive ? "indicator" : ""}
            />
          </ul>
        </div>
      </Responsive>
    </div>
  );
};

export default CategoryTab;
