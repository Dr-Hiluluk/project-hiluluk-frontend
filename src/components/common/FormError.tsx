import React from "react";
import "./common.scss";

export interface FormErrorProps {
  message?: string;
}

export const FormError: React.FC<FormErrorProps> = ({ message }) => {
  return message === "" ||
    message == null ||
    typeof message == "undefined" ? null : (
    <span className="error">{message}</span>
  );
};
