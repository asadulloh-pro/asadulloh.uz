import React from 'react';
import {
  createBrowserRouter,
  Navigate,
  NavLink,
  RouterProvider,
} from 'react-router-dom';

import { Outlet } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="col-span-2 py-[2rem] px-[1rem]">
      <ul>
        <li>
          <NavLink to="/workshop/dashboard" className="navlink">
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink to="/workshop/settings" className="navlink">
            Settings
          </NavLink>
        </li>
        <li>
          <NavLink to="/workshop/profile" className="navlink">
            Profile
          </NavLink>
        </li>
      </ul>

      <a href="/" className="navlink mt-auto">
        Landing
      </a>
    </nav>
  );
};

const Dashboard = () => (
  <h1 className="text-[4rem] text-center flex justify-center items-center min-h-full">
    Dashboard
  </h1>
);
const Settings = () => (
  <h1 className="text-[4rem] text-center flex justify-center items-center min-h-full">
    Settings
  </h1>
);
const Profile = () => (
  <h1 className="text-[4rem] text-center flex justify-center items-center min-h-full">
    Profile
  </h1>
);
const Default = () => Navigate({ to: '/workshop/dashboard' });

const Layout = () => (
  <div className="grid grid-cols-12">
    <Navbar />
    <div className="col-span-10">
      <Outlet />
    </div>
  </div>
);

const router = createBrowserRouter([
  {
    path: '/workshop',
    element: <Layout />,
    children: [
      { path: '', element: <Default /> },
      { path: 'dashboard', element: <Dashboard /> },
      { path: 'settings', element: <Settings /> },
      { path: 'profile', element: <Profile /> },
    ],
  },
]);

const App = () => {
  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
};

export default App;
