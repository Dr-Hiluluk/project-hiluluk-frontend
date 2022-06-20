import React from "react";
import "./common.scss";
interface responsiveType extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const Responsive = ({ children, ...rest }: responsiveType) => {
  return (
    <div className="block" {...rest}>
      {children}
    </div>
  );
};
