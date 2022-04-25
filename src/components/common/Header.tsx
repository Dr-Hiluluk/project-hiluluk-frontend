import React, { MouseEventHandler } from "react";
import { Button } from "./Button/Button";
import { Responsive } from "./Responsive";
import LogoDrHiluluk from "../../static/svg/LogoDrHiluluk.svg";
import { Link } from "react-router-dom";
import { userInitialStateType } from "../../modules/user.type";

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
            <img className="logo" src={LogoDrHiluluk} alt="logo" />
          </Link>
          {user?.name ? (
            <div className="right">
              <div className="user-info">{user.nickname}</div>
              <Button
                cyan="button-cyan"
                fullWidth="button-fullWidth"
                onClick={onLogout}
              >
                로그아웃
              </Button>
            </div>
          ) : (
            <div className="right">
              <div className="user-info">Nick</div>
              <Button
                to="/login"
                cyan="button-cyan"
                fullWidth="button-fullWidth"
              >
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
