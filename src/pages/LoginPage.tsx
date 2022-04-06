import React from "react";
import { AuthTemplate } from "../components/container/auth/AuthTemplate";
import { LoginForm } from "../components/container/auth/LoginForm";

const LoginPage = () => {
  return (
    <AuthTemplate>
      <LoginForm />
    </AuthTemplate>
  );
};
export default LoginPage;
