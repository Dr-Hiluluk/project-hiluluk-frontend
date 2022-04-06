import React, { ReactChild, ReactChildren } from "react";
import { Link } from "react-router-dom";
import "./auth.scss";

interface childProps {
  children: ReactChild | ReactChildren;
}

export const AuthTemplate = ({ children }: childProps) => {
  return (
    <div className="div template">
      <div className="div white-box">
        <div className="div logo-area">
          <Link to="/">Dr.Hiluluk</Link>
        </div>
        {children}
      </div>
    </div>
  );
};
