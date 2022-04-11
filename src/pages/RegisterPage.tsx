import React from "react";
import { AuthTemplate } from "../components/containers/auth/AuthTemplate";
import { RegisterForm } from "../components/containers/auth/RegisterForm";

const RegisterPage = () => {
  return (
    <AuthTemplate>
      <RegisterForm />
    </AuthTemplate>
  );
};

export default RegisterPage;
