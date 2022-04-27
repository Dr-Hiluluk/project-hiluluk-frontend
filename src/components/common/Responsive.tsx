import React from "react";

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
