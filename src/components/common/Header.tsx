import React, { MouseEventHandler, useState } from "react";
import { Responsive } from "./Responsive";
import { Link, useNavigate } from "react-router-dom";
import { userInitialStateType } from "../../modules/user.type";
import { defaultThumbnail, logo } from "../../static/svg";
import "./Header.scss";
import { IoReorderThree } from "react-icons/io5";

interface HeaderProps {
  user?: userInitialStateType["user"];
  onLogout: MouseEventHandler<any> | undefined;
}

const UserInfoButton: React.FC<HeaderProps> = ({ user, onLogout }) => {
  const [style, setStyle] = useState({ display: "none" });
  const navigation = useNavigate();

  const onChangeDisplay = () => {
    setStyle({ display: style.display === "none" ? "block" : "none" });
  };
  return (
    <div className="right">
      {/* <div className="user-info">{user && user.nickname}</div> */}
      <button className="user-profile" onClick={onChangeDisplay}>
        <div className="user-profile-three">
          <IoReorderThree />
        </div>
        <div className="user-profile-icon">
          <img
            alt="user thumbnail"
            src={user?.thumbnail ? user.thumbnail : defaultThumbnail}
          />
        </div>
        <nav
          className="user-profile-nav"
          style={style}
          onMouseLeave={onChangeDisplay}
        >
          <Link className="user-profile-nav-button" to={user ? "/" : "/login"}>
            내정보
          </Link>
          <div className="user-profile-nav-line" />
          <Link
            className="user-profile-nav-button"
            to={user ? "/write" : "/login"}
          >
            글쓰기
          </Link>
          <div className="user-profile-nav-line" />
          <Link className="user-profile-nav-button" to="/">
            도움말
          </Link>
          <div
            className="user-profile-nav-button bold"
            onClick={
              user
                ? onLogout
                : () => {
                    navigation("/login");
                  }
            }
          >
            {user ? "로그아웃" : "로그인"}
          </div>
        </nav>
      </button>
    </div>
  );
};

const Header: React.FC<HeaderProps> = ({ user, onLogout }) => {
  return (
    <>
      <div className="header-block">
        <Responsive className="wrapper">
          <Link to="/">
            <img className="logo" src={logo} alt="logo" />
          </Link>
          <UserInfoButton user={user} onLogout={onLogout} />
        </Responsive>
      </div>
      <div className="spacer" />
    </>
  );
};

export default Header;
