import { Outlet } from 'react-router-dom';
import NavbarApp from './NavbarApp';
import { Suspense } from 'react';

const Layout = () => {
  return (
    <div>
      <NavbarApp />

      <Suspense fallback={<h1>Loading App...</h1>}>{<Outlet />}</Suspense>
    </div>
  );
};

export default Layout;
