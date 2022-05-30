import React, { MouseEvent } from "react";
import { useNavigate } from "react-router-dom";
import "./ButtonHeader.scss";

interface customButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  to?: string;
  bold?: boolean;
}

export const ButtonHeader = (props: customButtonProps) => {
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
      className={`button-header ${props.bold ? "bold" : ""}`}
      disabled={props.disabled}
      onClick={onClick}
    >
      {props.children}
    </button>
  );
};
