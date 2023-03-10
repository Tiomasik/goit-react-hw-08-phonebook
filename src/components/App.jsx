import { Route, Routes } from "react-router-dom";
import { useEffect, lazy } from "react";
import { useDispatch } from 'react-redux';

import { Layout } from "./Layout";
import { refreshUser } from 'redux/auth/operations';
import { useAuth } from '../hooks/useAuth';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';

const Home = lazy(() => import("../pages/Home/Home"));
const Register = lazy(() => import("../pages/Register/Register"));
const Login = lazy(() => import("../pages/Login/Login"));
const Contacts = lazy(() => import("../pages/Contacts/Contacts"));
const NotFound = lazy(() => import("../pages/NotFound"));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    !isRefreshing && (<Routes>
        <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="register" element={
            <RestrictedRoute redirectTo="/contacts" component={<Register />} />
          } />
        <Route path="login"  element={
            <RestrictedRoute redirectTo="/contacts" component={<Login />} />
          }/>
        <Route path="contacts" element={
            <PrivateRoute redirectTo="/login" component={<Contacts />} />
          } />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes >)
  );
};
