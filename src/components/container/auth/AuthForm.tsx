import React from "react";
import { Link } from "react-router-dom";
import { AuthReducerType } from "../../../modules/auth";
import { Button } from "../../common/Button";
import "./auth.scss";
import GoogleLoginbtn from "../../../static/svg/GoogleLoginbtn.svg";
import KakaoLoginbtn from "../../../static/svg/KakaoLoginbtn.svg";

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
      <div className="div head-area">{text}</div>
      <form onSubmit={onSubmit}>
        {type === "register" && (
          <div className="div input-area">
            <input
              className="input"
              name="name"
              placeholder="이름"
              onChange={onChange}
              value={(form as AuthReducerType["register"]).name}
            />
          </div>
        )}
        {type === "register" && (
          <div className="div input-area">
            <input
              className="input"
              name="nickname"
              placeholder="닉네임"
              onChange={onChange}
              value={(form as AuthReducerType["register"]).nickname}
            />
          </div>
        )}
        <div className="div input-area">
          <input
            className="input"
            autoComplete="email"
            name="email"
            placeholder="이메일"
            onChange={onChange}
            value={form.email}
          />
        </div>
        <div className="div input-area">
          <input
            className="input"
            autoComplete="new-password"
            name="password"
            placeholder="비밀번호"
            type="password"
            onChange={onChange}
            value={form.password}
          />
        </div>
        {type === "register" && (
          <div className="div input-area">
            <input
              className="input"
              autoComplete="new-password"
              name="passwordConfirm"
              placeholder="비밀번호확인"
              type="password"
              onChange={onChange}
              value={(form as AuthReducerType["register"]).passwordConfirm}
            />
          </div>
        )}
        {type === "login" && (
          <div className="div login-maintain-area">
            <input type="checkbox" id="login-maintain" name="scales" />
            <label htmlFor="login-maintain">로그인 유지</label>
          </div>
        )}
        <Button className="btn" cyan="cyan" fullWidth="fullWidth">
          {text}
        </Button>
      </form>
      {type === "login" && (
        <div className="div find-and-signup-area">
          <div className="div find-and-signup">
            <Link to="/findID">아이디 찾기</Link>
          </div>
          <div className="div vertical-line" />
          <div className="div find-and-signup">
            <Link to="/findPW">비밀번호 찾기</Link>
          </div>
          <div className="div vertical-line" />
          <div className="div find-and-signup">
            <Link to="/register">회원가입</Link>
          </div>
        </div>
      )}
      {type === "login" && (
        <div className="div social-login-area">
          <div className="div social-login-icon">
            <Link to="/login-to-google">
              <img className="img icon" src={GoogleLoginbtn} alt="google" />
            </Link>
          </div>
          <div className="div social-login-icon">
            <Link to="/jogin-to-kakao">
              <img className="img icon" src={KakaoLoginbtn} alt="kakao" />
            </Link>
          </div>
        </div>
      )}
      {/* <footer className="footer">
        {type === "login" ? (
          <Link to="/register">회원가입</Link>
        ) : (
          <Link to="/login">로그인</Link>
        )}
      </footer> */}
    </div>
  );
};
