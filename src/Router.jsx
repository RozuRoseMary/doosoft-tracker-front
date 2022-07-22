import React from "react";
import { Route, Routes } from "react-router-dom";
import TrackerPage from "./pages/TrackerPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ListPage from "./pages/ListPage";
import ProfilePage from "./pages/ProfilePage";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />}></Route>
      <Route path="/login" element={<LoginPage />}></Route>
      <Route path="/register" element={<RegisterPage />}></Route>
      <Route path="/auth" element={<TrackerPage />}>
        <Route path="profile/:userId" element={<ProfilePage />}></Route>
        <Route path="tracker" element={<ListPage />}></Route>
      </Route>
    </Routes>
  );
}

export default Router;
