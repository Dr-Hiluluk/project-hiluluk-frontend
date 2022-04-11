import React from "react";
import { AuthTemplate } from "../components/containers/auth/AuthTemplate";
import { LoginForm } from "../components/containers/auth/LoginForm";

const LoginPage = () => {
  return (
    <AuthTemplate>
      <LoginForm />
    </AuthTemplate>
  );
};
export default LoginPage;
