import React, { MouseEvent } from "react";
import { useNavigate } from "react-router-dom";
import "./Button.scss";

interface customButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  to?: string;
  fullWidth?: string;
  cyan?: string;
}

export const Button = (props: customButtonProps) => {
  const navigation = useNavigate();
  const onClick = (e: MouseEvent<HTMLButtonElement>) => {
    if (props.to) {
      navigation(props.to);
    }
    if (props.onClick) {
      props.onClick(e);
    }
  };

  return (
    <button
      className={`btn ${props.fullWidth} ${props.cyan}`}
      disabled={props.disabled}
      onClick={onClick}
    >
      {props.children}
    </button>
  );
};
