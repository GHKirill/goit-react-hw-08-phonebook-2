import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect, lazy } from 'react';
import { SharedLayout } from 'Pages/SharedLayout';
import { useAuth } from './hooks/useAuth';
import { refreshUser } from 'redux/auth.js/operations';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';
import NotFoundPage from 'Pages/NotFoundPage/NotFoundPage';

const HomePage = lazy(() => import(`Pages/HomePage/HomePage`));
const RegisterPage = lazy(() => import(`Pages/RegisterPage/RegisterPage`));
const LoginPage = lazy(() => import(`Pages/LoginPage/LoginPage`));
const ContactsPage = lazy(() => import(`Pages/ContactsPage/ContactsPage`));
//const NotFoundPage = lazy(() => import(`Pages/NotFoundPage/NotFoundPage`));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route
            path="/register"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<RegisterPage />}
              />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<LoginPage />}
              />
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
            }
          />
        </Route>
        {/* <Route path="*" element={<div>page is not found</div>} /> */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
};
