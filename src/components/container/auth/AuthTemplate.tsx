import React, { ReactChild, ReactChildren } from "react";
import { Link } from "react-router-dom";
import "./auth.scss";
import LogoDrHiluluk from "../../../static/svg/LogoDrHiluluk.svg";

interface childProps {
  children: ReactChild | ReactChildren;
}

export const AuthTemplate = ({ children }: childProps) => {
  return (
    <div className="div template">
      <div className="div white-box">
        <div className="div logo-area">
          <Link to="/">
            <img className="img logo" src={LogoDrHiluluk} alt="logo" />
          </Link>
        </div>
        <div className="div inner-area">{children}</div>
      </div>
    </div>
  );
};
