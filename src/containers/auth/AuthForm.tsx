import React, { memo } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { AuthReducerType } from "../../modules/auth";
import { EMAIL_EXP, PASSWORD_EXP, USERNAME_EXP } from "../../utils/variables";
import { Button } from "../../components/common/Button/Button";
import { FormError } from "../../components/common/FormError";
import "./auth.scss";
import GoogleLoginbtn from "../../../static/svg/GoogleLoginbtn.svg";
import KakaoLoginbtn from "../../../static/svg/KakaoLoginbtn.svg";

interface AuthFormType {
  type: string;
  form: AuthReducerType["login"] | AuthReducerType["register"];
  onChange: React.ChangeEventHandler<HTMLInputElement> | undefined;
  onSubmit: any;
}

const AuthForm = ({ type, form, onChange, onSubmit }: AuthFormType) => {
  const text = type === "login" ? "로그인" : "회원가입";
  const { handleSubmit, formState, getValues, register } = useForm({
    mode: "onChange",
    defaultValues: {
      name: "",
      nickname: "",
      email: "",
      password: "",
      passwordConfirm: "",
    },
  });

  return (
    <div className="auth-form">
      <h3>{text}</h3>
      <form
        onSubmit={handleSubmit((data: any, e: any) => {
          onSubmit(data, e);
        })}
      >
        {type === "register" && (
          <div className="input-area">
            <input
              className="input"
              {...register("name", {
                minLength: {
                  value: 2,
                  message: "2-15자 사이로 입력하세요.",
                },
                maxLength: {
                  value: 15,
                  message: "2-15자 사이로 입력하세요.",
                },
                required: {
                  value: true,
                  message: "필수 정보입니다.",
                },
              })}
              type="text"
              placeholder="이름"
              autoComplete="off"
            />
            <FormError message={formState.errors.name?.message} />
          </div>
        )}
        {type === "register" && (
          <div className="input-area">
            <input
              className="input"
              {...register("nickname", {
                pattern: {
                  value: USERNAME_EXP,
                  message:
                    "5-20자의 영문 소문자,숫자와 특수기호(_),(-)만 사용 가능합니다.",
                },
                required: {
                  value: true,
                  message: "필수 정보입니다.",
                },
              })}
              type="text"
              placeholder="닉네임"
              autoComplete="off"
            />
            <FormError message={formState.errors.nickname?.message} />
          </div>
        )}
        <div className="input-area">
          <input
            className="input"
            {...register("email", {
              pattern: {
                value: EMAIL_EXP,
                message: "이메일 주소가 아닙니다.",
              },
              required: {
                value: true,
                message: "필수 정보입니다.",
              },
            })}
            autoComplete="email"
            placeholder="이메일"
            type="email"
            name="email"
          />
          <FormError message={formState.errors.email?.message} />
        </div>
        <div className="input-area">
          <input
            className="input"
            {...register("password", {
              pattern: {
                value: PASSWORD_EXP,
                message: "8-16자 영문 대 소문자, 숫자, 특수문자를 사용하세요.",
              },
              required: {
                value: true,
                message: "필수 정보입니다.",
              },
            })}
            autoComplete="new-password"
            placeholder="비밀번호"
            type="password"
          />
          <FormError message={formState.errors.password?.message} />
        </div>
        {type === "register" && (
          <div className="input-area">
            <input
              className="input"
              {...register("passwordConfirm", {
                pattern: {
                  value: PASSWORD_EXP,
                  message:
                    "8~16자 영문 대 소문자, 숫자, 특수문자를 사용하세요.",
                },
                required: {
                  value: true,
                  message: "필수 정보입니다.",
                },
                validate: {
                  value: (v) =>
                    v === getValues("password") ||
                    "비밀번호가 일치하지 않습니다.",
                },
              })}
              autoComplete="new-password"
              placeholder="비밀번호확인"
              type="password"
            />
            <FormError message={formState.errors.passwordConfirm?.message} />
          </div>
        )}
        {type === "login" && (
          <div className="login-maintain-area">
            <input type="checkbox" id="login-maintain" name="scales" />
            <label htmlFor="login-maintain">로그인 유지</label>
          </div>
        )}
        <Button
          className="button"
          cyan="button-cyan"
          fullWidth="button-fullWidth"
          disabled={!formState.isDirty || !formState.isValid}
        >
          {text}
        </Button>
      </form>
      {type === "login" && (
        <div className="find-and-signup-area">
          <div className="find-and-signup">
            <Link to="/findID">아이디 찾기</Link>
          </div>
          <div className="vertical-line" />
          <div className="find-and-signup">
            <Link to="/findPW">비밀번호 찾기</Link>
          </div>
          <div className="vertical-line" />
          <div className="find-and-signup">
            <Link to="/register">회원가입</Link>
          </div>
        </div>
      )}
      {type === "login" && (
        <div className="social-login-area">
          <div className="social-login-effect">
            <Link to="/login-to-google">
              <div className="social-login-icon">
                <img src={GoogleLoginbtn} alt="google" />
                <div className="social-login-text">구글 로그인</div>
              </div>
            </Link>
          </div>
          <div className="social-login-effect">
            <Link to="/login-to-kakao">
              <div className="social-login-icon">
                <img src={KakaoLoginbtn} alt="kakao" />
                <div className="social-login-text">카카오 로그인</div>
              </div>
            </Link>
          </div>
        </div>
      )}
      {type === "register" && (
        <footer className="footer">
          <Link to="/login">로그인</Link>
        </footer>
      )}
    </div>
  );
};

export default memo(AuthForm);
