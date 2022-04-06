import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ReducerType } from "../../../modules";
import {
  AuthReducerType,
  changeField,
  initializeForm,
  register,
} from "../../../modules/auth";
import { AuthForm } from "./AuthForm";

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const { form, auth, authError } = useSelector(({ auth }: ReducerType) => ({
    form: auth.register,
    auth: auth.auth,
    authError: auth.authError,
  }));
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    dispatch(changeField({ form: "register", key: name, value: value }));
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { name, nickname, email, password, passwordConfirm } = form;
    if (password !== passwordConfirm) {
      return;
    }
    dispatch(register({ name, nickname, email, password }));
  };

  // 컴포넌트 처음 렌더링 시 form 초기화
  useEffect(() => {
    dispatch(initializeForm({ form: "register" }));
  }, [dispatch]);
  // 회원가입 성공/실패 처리
  useEffect(() => {
    if (authError) {
      console.log("Auth Error");
      console.log(authError);
      return;
    }
    if (auth) {
      console.log("회원가입 성공");
      console.log(auth);
    }
  }, [auth, authError]);

  return (
    <AuthForm
      type="register"
      form={form}
      onChange={onChange}
      onSubmit={onSubmit}
    />
  );
};
