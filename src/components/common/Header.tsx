import React, { MouseEventHandler } from "react";
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
              <button className="user-profile">
                <div className="user-profile-navi">
                  <IoReorderThree />
                </div>
                <div className="user-profile-icon">
                  <IoPersonSharp />
                </div>
              </button>
              <div>
                <Button cyan fullWidth onClick={onLogout}>
                  로그아웃
                </Button>
              </div>
            </div>
          ) : (
            <div className="right">
              {/* 닉네임 위치 임시 */}
              <div className="user-info">Nick</div>
              <Button to="/login" cyan fullWidth>
                로그인
              </Button>
            </div>
          )}
        </Responsive>
      </div>
      <div className="spacer" />
    </>
  );
};
