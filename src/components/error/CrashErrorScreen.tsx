import React from "react";
import { useNavigate } from "react-router-dom";
import { crashScreenLogo } from "../../static/svg";
import ErrorScreenTemplate from "./ErrorScreenTemplate";

export interface CrashErrorScreenProps {
  onResolve: () => void;
}

const CrashErrorScreen = ({ onResolve }: CrashErrorScreenProps) => {
  const navigation = useNavigate();
  return (
    <ErrorScreenTemplate
      image={crashScreenLogo}
      message="오류가 발생했습니다."
      buttonText="홈으로"
      onButtonClick={() => {
        navigation("/");
        onResolve();
      }}
    />
  );
};

export default CrashErrorScreen;
