import React, { ReactChild, ReactChildren } from "react";

interface responsiveType {
  children: ReactChildren;
}

export const Responsive = ({ children, ...rest }: any) => {
  return (
    <div className="block" {...rest}>
      {children}
    </div>
  );
};
