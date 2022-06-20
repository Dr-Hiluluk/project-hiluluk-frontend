import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import PostListPage from "./pages/PostListPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import WritePage from "./pages/WritePage";
import PostPage from "./pages/PostPage";
import { Helmet } from "react-helmet-async";
import NotFoundPage from "./pages/NotFoundPage";
import ErrorBoundary from "./components/error/ErrorBoundary";
import UserPage from "./pages/UserPage";

function App() {
  return (
    <>
      <Helmet>
        <title>Dr.Hiluluk</title>
      </Helmet>
      <ErrorBoundary>
        <Routes>
          <Route path="/" element={<PostListPage />} />
          <Route path="/@:nickname" element={<UserPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/write" element={<WritePage />} />
          <Route path="/@:nickname/:postId" element={<PostPage />} />
          <Route path="/*" element={<NotFoundPage />} />
        </Routes>
      </ErrorBoundary>
    </>
  );
}

export default App;
