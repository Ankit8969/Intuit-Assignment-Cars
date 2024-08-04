import React, { Suspense } from 'react';

// Higher order Component
const LazyLoader = ({ Component, fallback }) => {
  return (
    <Suspense fallback={fallback}>
      <Component />
    </Suspense>
  );
};

export default LazyLoader;
