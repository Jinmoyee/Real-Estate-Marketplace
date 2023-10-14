import React from "react";
import {BrowserRouter, Routes,Route} from "react-router-dom"
import Home from "./pages/Home";
import About from "./pages/About";
import Profile from "./pages/Profile";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";

export default function App () {
  return (
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Home />}>Hello World!</Route>
    <Route path="/about" element={<About />}>About Page</Route>
    <Route path="/sign-in" element={<SignIn />}>Sign In page</Route>
    <Route path="/sign-up" element={<SignUp />}>Sign Up page</Route>
    <Route path="/profile" element={<Profile />}>Profile page</Route>
  </Routes>
  </BrowserRouter>
  )
}