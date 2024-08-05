import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
  Navigate
} from "react-router-dom";
import LazyLoader from '../common/LazyLoader';
import "../styles/index.css"

const CarDashboard = React.lazy(()=> import('./CarDashboard'));
const CarDescription = React.lazy(()=> import('./CarDescription'));

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <LazyLoader Component={CarDashboard} fallback={<div>Loading Car Comparison...</div>} />,
    },
    {
      path: "/description",
      element: <LazyLoader Component={CarDescription} fallback={<div>Loading Car Description...</div>} />,
    },
    {
      path: "*",
      element: <Navigate to="/" />,
    }
  ]);

  return (
    <RouterProvider router={router} />
  );
};

export default App;
