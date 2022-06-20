import React from "react";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import { Responsive } from "../components/common/Responsive";
import { HeaderContainer } from "../containers/common/HeaderContainer";
import UserProfileContainer from "../containers/user/UserProfileContainer";

const UserPage = () => {
  const { nickname } = useParams();

  return (
    <>
      <Helmet>
        <title>{nickname}'s Profile</title>
      </Helmet>
      <HeaderContainer />
      <Responsive>
        <UserProfileContainer />
      </Responsive>
    </>
  );
};

export default UserPage;
