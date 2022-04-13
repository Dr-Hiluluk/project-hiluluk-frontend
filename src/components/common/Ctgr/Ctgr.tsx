import React from "react";
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
import "./Ctgr.scss";

const activeLink = (e: string) => {
  const list = document.querySelectorAll(".list");
  const ctgrNum: HTMLElement | any = document.getElementById(e);
  const isActive = () => {
    for (let i = 0; i < list.length; i++) {
      let j: HTMLElement | any = document.getElementById(String(i + 1));
      j.className = "list";
    }
  };
  // ctgrNum.className === "list" :닫혀있는 상태
  if (ctgrNum.className === "list") {
    isActive();
    ctgrNum.className = "list active";
  } else if (ctgrNum.className === "list active") {
    isActive();
  }
};

export const Ctgr = () => {
  return (
    <div className="ctgr-area">
      <Responsive className="ctgr-wrapper">
        <div className="ctgr">
          <ul>
            <li
              id="1"
              className="list"
              onClick={() => {
                activeLink("1");
              }}
            >
              <Link to="/">
                <span className="icon">
                  <IoBody />
                </span>
                <span className="text">전신</span>
              </Link>
            </li>
            <li
              id="2"
              className="list"
              onClick={() => {
                activeLink("2");
              }}
            >
              <Link to="/">
                <span className="icon">
                  <IoHappy />
                </span>
                <span className="text">머리</span>
              </Link>
            </li>
            <li
              id="3"
              className="list"
              onClick={() => {
                activeLink("3");
              }}
            >
              <Link to="/">
                <span className="icon">
                  <IoHeart />
                </span>
                <span className="text">정신</span>
              </Link>
            </li>
            <li
              id="4"
              className="list"
              onClick={() => {
                activeLink("4");
              }}
            >
              <Link to="/">
                <span className="icon">
                  <IoSad />
                </span>
                <span className="text">얼굴</span>
              </Link>
            </li>
            <li
              id="5"
              className="list"
              onClick={() => {
                activeLink("5");
              }}
            >
              <Link to="/">
                <span className="icon">
                  <IoMic />
                </span>
                <span className="text">목</span>
              </Link>
            </li>
            <li
              id="6"
              className="list"
              onClick={() => {
                activeLink("6");
              }}
            >
              <Link to="/">
                <span className="icon">
                  <IoPerson />
                </span>
                <span className="text">가슴/등</span>
              </Link>
            </li>
            <li
              id="7"
              className="list"
              onClick={() => {
                activeLink("7");
              }}
            >
              <Link to="/">
                <span className="icon">
                  <IoShirt />
                </span>
                <span className="text">복부</span>
              </Link>
            </li>
            <li
              id="8"
              className="list"
              onClick={() => {
                activeLink("8");
              }}
            >
              <Link to="/">
                <span className="icon">
                  <IoMaleFemaleSharp />
                </span>
                <span className="text">비뇨기</span>
              </Link>
            </li>
            <li
              id="9"
              className="list"
              onClick={() => {
                activeLink("9");
              }}
            >
              <Link to="/">
                <span className="icon">
                  <IoHandLeft />
                </span>
                <span className="text">팔과 손</span>
              </Link>
            </li>
            <li
              id="10"
              className="list"
              onClick={() => {
                activeLink("10");
              }}
            >
              <Link to="/">
                <span className="icon">
                  <IoFootsteps />
                </span>
                <span className="text">다리와 발</span>
              </Link>
            </li>
            <li
              id="11"
              className="list"
              onClick={() => {
                activeLink("11");
              }}
            >
              <Link to="/">
                <span className="icon">
                  <IoSkull />
                </span>
                <span className="text">뼈/근육</span>
              </Link>
            </li>
            <li
              id="12"
              className="list"
              onClick={() => {
                activeLink("12");
              }}
            >
              <Link to="/">
                <span className="icon">
                  <IoWater />
                </span>
                <span className="text">피부</span>
              </Link>
            </li>
            <div id="indic" className="indicator" />
          </ul>
        </div>
      </Responsive>
    </div>
  );
};
