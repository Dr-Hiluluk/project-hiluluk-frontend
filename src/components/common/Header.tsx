import React, { MouseEventHandler, useState } from "react";
import { Button } from "./Button/Button";
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

  // const userProfileButtonClick = (e: boolean) => {
  //   setUserProfileActive(!e);
  // };

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
                  <Button to="/" fullWidth>
                    1. 123
                  </Button>
                  <Button to="/" cyan fullWidth>
                    2. 456
                  </Button>
                  <Button to="/" fullWidth>
                    3. 789
                  </Button>
                  <Button cyan fullWidth onClick={onLogout}>
                    로그아웃
                  </Button>
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
                  <Button to="/" cyan fullWidth>
                    1. 123
                  </Button>
                  <Button to="/" fullWidth>
                    2. 456
                  </Button>
                  <Button to="/login" cyan fullWidth>
                    로그인
                  </Button>
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
