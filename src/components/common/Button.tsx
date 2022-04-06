import classNames from "classnames";
import React from "react";
import "./common.scss";

// interface buttonProps {
//   props: React.DetailedHTMLProps<
//     React.ButtonHTMLAttributes<HTMLButtonElement>,
//     HTMLButtonElement
//   >;
// }
// interface customButtonProps extends buttonProps {
//   fullWidth: string;
//   cyan: string;
// }

export const Button = (props: any) => {
  return (
    <button className={`btn ${props.fullWidth} ${props.cyan}`}>
      {props.children}
    </button>
  );
};
