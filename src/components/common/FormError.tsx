import React from "react";
import "./common.scss";
export const FormError = ({ message }: any) => {
  return message === "" ||
    message == null ||
    typeof message == "undefined" ? null : (
    <span className="span error">{message}</span>
  );
};
