import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ReducerType } from "../../../modules";
import { changeField, initializeForm, login } from "../../../modules/auth";
import { AuthForm } from "./AuthForm";

export const LoginForm = () => {
  const dispatch = useDispatch();
  const navigation = useNavigate();
  const { form, auth, authError } = useSelector(({ auth }: ReducerType) => ({
    form: auth.login,
    auth: auth.auth,
    authError: auth.authError,
  }));
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    dispatch(changeField({ form: "login", key: name, value }));
  };
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(login({ email: form.email, password: form.password }));
  };

  // 컴포넌트 처음 렌더링시 form 초기화 작업
  useEffect(() => {
    dispatch(initializeForm({ form: "login" }));
  }, [dispatch]);

  useEffect(() => {
    if (auth) {
      console.log("로그인 성공");
      console.log(auth);
      navigation("/");
    }
    if (authError) {
      console.log("로그인 에러");
      console.log(authError);
    }
  }, [auth, authError, navigation]);

  return (
    <AuthForm
      type="login"
      form={form}
      onChange={onChange}
      onSubmit={onSubmit}
    />
  );
};
