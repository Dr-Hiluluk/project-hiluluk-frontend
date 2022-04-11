import React, { ReactChild, ReactChildren } from "react";
import { Link } from "react-router-dom";
import "./auth.scss";
import LogoDrHiluluk from "../../../static/svg/LogoDrHiluluk.svg";

interface childProps {
  children: ReactChild | ReactChildren;
}

export const AuthTemplate = ({ children }: childProps) => {
  return (
    <div className="template">
      <div className="white-box">
        <div className="logo-area">
          <Link to="/">
            <img className="logo" src={LogoDrHiluluk} alt="logo" />
          </Link>
        </div>
        <div className="inner-area">{children}</div>
      </div>
    </div>
  );
};
