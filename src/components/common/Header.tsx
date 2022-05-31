import React, { MouseEventHandler, useState } from "react";
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
                  <Link className="user-profile-nav-button" to="/">
                    내정보
                  </Link>
                  <div className="user-profile-nav-line" />
                  <Link className="user-profile-nav-button" to="/write">
                    글쓰기
                  </Link>
                  <div className="user-profile-nav-line" />
                  <Link className="user-profile-nav-button" to="/">
                    도움말
                  </Link>
                  <div
                    className="user-profile-nav-button bold"
                    onClick={onLogout}
                  >
                    로그아웃
                  </div>
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
                  <Link className="user-profile-nav-button" to="/">
                    123
                  </Link>
                  <div className="user-profile-nav-line" />
                  <Link className="user-profile-nav-button" to="/">
                    456
                  </Link>
                  <div className="user-profile-nav-line" />
                  <Link className="user-profile-nav-button" to="/">
                    도움말
                  </Link>
                  <Link className="user-profile-nav-button bold" to="/login">
                    로그인
                  </Link>
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
