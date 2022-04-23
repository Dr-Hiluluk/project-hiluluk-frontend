import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ReducerType } from "../../../modules";
import { logout } from "../../../modules/user";
import { Header } from "../../common/Header";

export const HeaderContainer = () => {
  const { user } = useSelector(({ user }: ReducerType) => ({
    user: user.user,
  }));
  const dispatch = useDispatch();
  const onLogout = () => {
    dispatch(logout());
  };

  return <Header user={user} onLogout={onLogout} />;
};
