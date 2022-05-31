import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ReducerType } from "../../modules";
import { changeField, initializeForm, register } from "../../modules/auth";
import { check } from "../../modules/user";
import AuthForm from "./AuthForm";

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const navigation = useNavigate();
  const { form, auth, authError, user, userError } = useSelector(
    ({ auth, user }: ReducerType) => ({
      form: auth.register,
      auth: auth.auth,
      authError: auth.authError,
      user: user.user,
      userError: user.userError,
    }),
  );
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    dispatch(changeField({ form: "register", key: name, value: value }));
  };

  const onSubmit = (data: any, e: React.FormEvent<HTMLFormElement>) => {
    const { name, nickname, email, password, passwordConfirm } = data;
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
      dispatch(check());
    }
  }, [auth, authError, dispatch]);

  // user 잘 설정되어있는지 확인
  useEffect(() => {
    if (user?.nickname) {
      console.log("check API 성공");
      console.log("checkUser:", user);
    } else {
      console.log("check API 실패");
      console.log(userError);
    }
  }, [user, userError]);

  // 로그인 상태 유지
  useEffect(() => {
    if (user?.id) {
      navigation("/");
      try {
        localStorage.setItem("user", JSON.stringify(user));
      } catch (e) {
        console.log("localStorage is not working.");
      }
    }
  }, [user, navigation]);

  return (
    <AuthForm
      type="register"
      form={form}
      onChange={onChange}
      onSubmit={onSubmit}
    />
  );
};
