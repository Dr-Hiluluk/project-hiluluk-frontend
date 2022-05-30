import React, { MouseEventHandler, useState } from "react";
import { Button } from "./Button/Button";
import { ButtonHeader } from "./Button/ButtonHeader";
import { Responsive } from "./Responsive";
import { Link } from "react-router-dom";
import { userInitialStateType } from "../../modules/user.type";
import { logo } from "../../static/svg";
import "./Header.scss";
import { IoPersonSharp, IoReorderThree } from "react-icons/io5";

interface headerType {
  user?: userInitialStateType["user"];
  onLogout: MouseEventHandler<any> | undefined;
}

export const Header = ({ user, onLogout }: headerType) => {
  const [style, setStyle] = useState({ display: "none" });

  return (
    <>
      <div className="header-block">
        <Responsive className="wrapper">
          <Link to="/">
            <img className="logo" src={logo} alt="logo" />
          </Link>
          {user?.name ? (
            <div className="right">
              <div className="user-info">{user.nickname}</div>
              <button
                className="user-profile"
                onClick={(e) => setStyle({ display: "block" })}
              >
                <div className="user-profile-three">
                  <IoReorderThree />
                </div>
                <div className="user-profile-icon">
                  <IoPersonSharp />
                </div>
                <nav
                  className="user-profile-nav"
                  style={style}
                  onMouseLeave={(e) => {
                    setStyle({ display: "none" });
                  }}
                >
                  <ButtonHeader to="/">내정보</ButtonHeader>
                  <div className="user-profile-nav-line" />
                  <ButtonHeader to="/write">글쓰기</ButtonHeader>
                  <div className="user-profile-nav-line" />
                  <ButtonHeader to="/">도움말</ButtonHeader>
                  <ButtonHeader bold onClick={onLogout}>
                    로그아웃
                  </ButtonHeader>
                </nav>
              </button>
            </div>
          ) : (
            <div className="right">
              <button
                className="user-profile"
                onClick={(e) => setStyle({ display: "block" })}
              >
                <div className="user-profile-three">
                  <IoReorderThree />
                </div>
                <div className="user-profile-icon">
                  <IoPersonSharp />
                </div>
                <nav
                  className="user-profile-nav"
                  style={style}
                  onMouseLeave={(e) => {
                    setStyle({ display: "none" });
                  }}
                >
                  <ButtonHeader to="/">123</ButtonHeader>
                  <div className="user-profile-nav-line" />
                  <ButtonHeader to="/">456</ButtonHeader>
                  <div className="user-profile-nav-line" />
                  <ButtonHeader to="/">도움말</ButtonHeader>
                  <ButtonHeader to="/login" bold>
                    로그인
                  </ButtonHeader>
                </nav>
              </button>
            </div>
          )}
        </Responsive>
      </div>
      <div className="spacer" />
    </>
  );
};
