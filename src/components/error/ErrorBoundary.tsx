import React from "react";
import useNotFound from "../../lib/hooks/useNotFound";
import NotFoundPage from "../../pages/NotFoundPage";
import CrashErrorScreen from "./CrashErrorScreen";

interface ErrorBoundaryProps {
  children: React.ReactNode;
}

class ErrorBoundary extends React.Component {
  state = {
    hasError: false,
  };

  static getDerivedStateFromError(error: Error) {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: any) {
    console.log("Error:", error);
    console.log("ErrorInfo:", errorInfo);
  }
  
  handleResolveError = () => {
    this.setState({ hasError: false });
  };

  render() {
    if (this.state.hasError) {
      return <CrashErrorScreen onResolve={this.handleResolveError} />;
    }
    return <ErrorBoundaryWrapper>{this.props.children}</ErrorBoundaryWrapper>;
  }
}

function ErrorBoundaryWrapper({ children }: ErrorBoundaryProps) {
  const { isNotFound } = useNotFound();

  if (isNotFound) {
    console.log("isNotFound:", isNotFound);
    return <NotFoundPage />;
  }

  return <>{children}</>;
}

export default ErrorBoundary;
