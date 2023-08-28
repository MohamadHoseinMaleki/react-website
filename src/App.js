import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import Dashboard from "./components/Dashboard";
import RegitrationForm from "./components/RegistrationForm";
import { Helmet } from "react-helmet";

function App() {
  return (
    <>
      <Helmet>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
      </Helmet>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginForm />} exact />
          <Route path="/dashboard" element={<Dashboard />} exact />
          <Route path="/RegitrationPage" element={<RegitrationForm />} />
          
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
