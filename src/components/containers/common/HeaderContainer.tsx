import React from "react";
import { useSelector } from "react-redux";
import { ReducerType } from "../../../modules";
import { Header } from "../../common/Header";

export const HeaderContainer = () => {
  const { user } = useSelector(({ user }: ReducerType) => ({
    user: user.user,
  }));
  console.log("headerUser:", user);
  return <Header user={user} />;
};
