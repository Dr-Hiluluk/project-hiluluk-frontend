import React, { memo } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { AuthReducerType } from "../../../modules/auth";
import {
  EMAIL_EXP,
  PASSWORD_EXP,
  USERNAME_EXP,
} from "../../../utils/variables";
import { Button } from "../../common/Button";
import { FormError } from "../../common/FormError";
import "./auth.scss";

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
    <div className="div auth-form">
      <h3>{text}</h3>
      <form
        onSubmit={handleSubmit((data: any, e: any) => {
          onSubmit(data, e);
        })}
      >
        {type === "register" && (
          <div>
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
            <input
              className="input"
              {...register("nickname", {
                pattern: {
                  value: USERNAME_EXP,
                  message:
                    "5-20자의 영문 소문자,숫자와 특수기호(_,-)만 사용 가능합니다.",
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
        <input
          className="input"
          {...register("email", {
            required: true,
            pattern: {
              value: EMAIL_EXP,
              message: "이메일 주소가 아닙니다.",
            },
          })}
          autoComplete="email"
          placeholder="이메일"
          type="email"
          name="email"
        />
        <FormError message={formState.errors.email?.message} />
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
        {type === "register" && (
          <div>
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
        <Button
          className="btn"
          cyan="cyan"
          fullWidth="fullWidth"
          disabled={!formState.isDirty || !formState.isValid}
        >
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

export default memo(AuthForm);
