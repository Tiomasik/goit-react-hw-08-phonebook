import { Route, Routes } from "react-router-dom";
import { lazy } from "react";

import { Layout } from "./Layout/Layout";

const Home = lazy(() => import("../pages/Home"));
const Register = lazy(() => import("../pages/Register"));
const Login = lazy(() => import("../pages/Login"));
const Contacts = lazy(() => import("../pages/Contacts"));
const NotFound = lazy(() => import("../pages/NotFound"));

export const App = () => {
  return (
    <Routes>
        <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
        <Route path="contacts" element={<Contacts />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};
