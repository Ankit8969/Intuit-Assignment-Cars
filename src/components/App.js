import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import LazyLoader from '../common/LazyLoader';
import "../styles/index.css"

// Code splitting
const CarComparison = React.lazy(()=> import('./CarComparison'));
const CarDescription = React.lazy(()=> import('./CarDescription'));

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <LazyLoader Component={CarComparison} fallback={<div>Loading Car Comparison...</div>} />,
    },
    {
      path: "/description",
      element: <LazyLoader Component={CarDescription} fallback={<div>Loading Car Description...</div>} />,
    },
    {
      path: "*",
      element: <LazyLoader Component={CarComparison} fallback={<div>Loading...</div>} />,
    }
  ]);

  return (
    <RouterProvider router={router} />
  );
};

export default App;
