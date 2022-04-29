import React, { useState } from "react";
import useNotFound from "../../lib/hooks/useNotFound";
import NotFoundPage from "../../pages/NotFoundPage";

interface ErrorBoundaryProps {
  children: React.ReactNode;
}

const ErrorBoundary = ({ children }: ErrorBoundaryProps) => {
  const { isNotFound } = useNotFound();

  if (isNotFound) {
    console.log("isNotFound:", isNotFound);
    return <NotFoundPage />;
  }

  return <>{children}</>;
};

export default ErrorBoundary;
