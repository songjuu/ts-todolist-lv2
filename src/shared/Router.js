import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "../App";
import TodoDetail from "../pages/TodoDetail";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="detail" element={<TodoDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
