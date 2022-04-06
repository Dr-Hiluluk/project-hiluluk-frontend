import React from "react";
import { AuthTemplate } from "../components/container/auth/AuthTemplate";
import { RegisterForm } from "../components/container/auth/RegisterForm";

const RegisterPage = () => {
  return (
    <AuthTemplate>
      <RegisterForm />
    </AuthTemplate>
  );
};

export default RegisterPage;
