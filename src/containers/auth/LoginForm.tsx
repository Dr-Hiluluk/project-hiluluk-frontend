import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { ReducerType } from "../../modules";
import { changeField, initializeForm, login } from "../../modules/auth";
import { check } from "../../modules/user";
import AuthForm from "./AuthForm";

export const LoginForm = () => {
  const dispatch = useDispatch();
  const navigation = useNavigate();
  const location = useLocation();

  const { form, auth, authError, user } = useSelector(
    ({ auth, user }: ReducerType) => ({
      form: auth.login,
      auth: auth.auth,
      authError: auth.authError,
      user: user.user,
    }),
  );
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    dispatch(changeField({ form: "login", key: name, value }));
  };
  const onSubmit = (data: any, e: React.FormEvent<HTMLFormElement>) => {
    dispatch(login({ email: data.email, password: data.password }));
  };

  // 컴포넌트 처음 렌더링시 form 초기화 작업
  useEffect(() => {
    dispatch(initializeForm({ form: "login" }));
  }, [dispatch]);

  useEffect(() => {
    if (auth) {
      console.log("로그인 성공");
      console.log(auth);
      dispatch(check());
    }
    if (authError) {
      console.log("로그인 에러");
      console.log(authError);
    }
  }, [auth, authError, navigation, dispatch]);

  // 로그인 상태 유지
  useEffect(() => {
    if (user) {
      if (location.state) {
        navigation(`${location.state}`);
      } else {
        navigation("/");
      }
      try {
        localStorage.setItem("user", JSON.stringify(user));
      } catch (e) {
        console.log("localStorage is not working.");
      }
    }
  }, [user, navigation, location.state]);

  return (
    <AuthForm
      type="login"
      form={form}
      onChange={onChange}
      onSubmit={onSubmit}
    />
  );
};
