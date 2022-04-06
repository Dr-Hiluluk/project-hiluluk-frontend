import React from "react";
import { Link } from "react-router-dom";
import { AuthReducerType } from "../../../modules/auth";
import { Button } from "../../common/Button";
import "./auth.scss";

interface AuthFormType {
  type: string;
  form: AuthReducerType["login"] | AuthReducerType["register"];
  onChange: React.ChangeEventHandler<HTMLInputElement> | undefined;
  onSubmit: React.FormEventHandler<HTMLFormElement> | undefined;
}

export const AuthForm = ({ type, form, onChange, onSubmit }: AuthFormType) => {
  const text = type === "login" ? "로그인" : "회원가입";
  return (
    <div className="div auth-form">
      <h3>{text}</h3>
      <form onSubmit={onSubmit}>
        {type === "register" && (
          <input
            className="input"
            name="name"
            placeholder="이름"
            onChange={onChange}
            value={(form as AuthReducerType["register"]).name}
          />
        )}
        {type === "register" && (
          <input
            className="input"
            name="nickname"
            placeholder="닉네임"
            onChange={onChange}
            value={(form as AuthReducerType["register"]).nickname}
          />
        )}
        <input
          className="input"
          autoComplete="email"
          name="email"
          placeholder="이메일"
          onChange={onChange}
          value={form.email}
        />
        <input
          className="input"
          autoComplete="new-password"
          name="password"
          placeholder="비밀번호"
          type="password"
          onChange={onChange}
          value={form.password}
        />
        {type === "register" && (
          <input
            className="input"
            autoComplete="new-password"
            name="passwordConfirm"
            placeholder="비밀번호확인"
            type="password"
            onChange={onChange}
            value={(form as AuthReducerType["register"]).passwordConfirm}
          />
        )}
        <Button className="btn" cyan="cyan" fullWidth="fullWidth">
          {text}
        </Button>
      </form>
      <footer className="footer">
        {type === "login" ? (
          <Link to="/register">회원가입</Link>
        ) : (
          <Link to="/login">로그인</Link>
        )}
      </footer>
    </div>
  );
};
