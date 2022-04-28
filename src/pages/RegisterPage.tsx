import React from "react";
import { AuthTemplate } from "../containers/auth/AuthTemplate";
import { RegisterForm } from "../containers/auth/RegisterForm";

const RegisterPage = () => {
  return (
    <AuthTemplate>
      <RegisterForm />
    </AuthTemplate>
  );
};

export default RegisterPage;
