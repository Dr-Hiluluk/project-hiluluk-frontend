import React from "react";
import { Button } from "../common/Button/Button";

interface errorScreenTemplateProps {
  image: string;
  message: string;
  buttonText?: string;
  onButtonClick?: () => void;
}

const ErrorScreenTemplate = ({
  image,
  message,
  buttonText,
  onButtonClick,
}: errorScreenTemplateProps) => {
  return (
    <div className="error-screen-template_container">
      <img src={image} alt="error" />
      <div className="error-screen-template_message">{message}</div>
      {buttonText && (
        <div className="error-screen-template_button-wrapper">
          <Button onClick={onButtonClick}>{buttonText}</Button>
        </div>
      )}
    </div>
  );
};

export default ErrorScreenTemplate;
