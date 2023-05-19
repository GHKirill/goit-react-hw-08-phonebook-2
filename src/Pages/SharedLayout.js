import { AppBarComp } from 'components/AppBar/AppBar';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
export const SharedLayout = () => {
  return (
    <>
      {' '}
      <AppBarComp />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </>
  );
};
