import React from "react";
import { Responsive } from "../components/common/Responsive";
import { HeaderContainer } from "../containers/common/HeaderContainer";
import SettingUserContainer from "../containers/user/SettingUserContainer";

const SettingPage = () => {
  return (
    <>
      <HeaderContainer />
      <Responsive>
        <SettingUserContainer />
      </Responsive>
    </>
  );
};

export default SettingPage;
