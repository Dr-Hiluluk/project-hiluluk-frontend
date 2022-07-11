import React, { MouseEventHandler, useEffect, useRef, useState } from "react";
import { Responsive } from "./Responsive";
import { Link, useNavigate } from "react-router-dom";
import { userInitialStateType } from "../../modules/user.type";
import { alignIcon, defaultThumbnail, logo } from "../../static/svg";
import "./Header.scss";
import SearchBoxContainer from "../../containers/search/SearchBoxContainer";

interface HeaderProps {
  user?: userInitialStateType["user"];
  onLogout: MouseEventHandler<any> | undefined;
}

const UserInfoButton: React.FC<HeaderProps> = ({ user, onLogout }) => {
  const [style, setStyle] = useState({ display: "none" });
  const navigation = useNavigate();
  const ref = useRef<HTMLDivElement>(null);
  const onChangeDisplay = () => {
    setStyle({ display: style.display === "none" ? "block" : "none" });
  };

  const checkOutside = (e: any) => {
    if (ref.current && !ref.current.contains(e.target)) {
      setStyle({ display: "none" });
    }
  };

  useEffect(() => {
    document.addEventListener("click", checkOutside);
    return () => {
      document.removeEventListener("click", checkOutside);
    };
  }, [style]);

  return (
    <div ref={ref} className="right">
      {/* <div className="user-info">{user && user.nickname}</div> */}
      <button className="user-profile" onClick={onChangeDisplay}>
        <div className="user-profile-icon">
          <img className="user-profile_align" alt="align" src={alignIcon} />
          <img
            className="user-profile_thumbnail"
            alt="user thumbnail"
            src={user?.thumbnail || defaultThumbnail}
          />
        </div>
        <nav
          className="user-profile-nav"
          style={style}
          onMouseLeave={onChangeDisplay}
        >
          <Link
            className="user-profile-nav-button"
            to={user ? `/@${user.nickname}` : "/login"}
          >
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
          {user && (
            <Link className="user-profile-nav-button" to="/setting">
              설정
            </Link>
          )}
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
          <div className="search-user_wrapper">
            <SearchBoxContainer />
            <UserInfoButton user={user} onLogout={onLogout} />
          </div>
        </Responsive>
      </div>
      <div className="spacer" />
    </>
  );
};

export default Header;
