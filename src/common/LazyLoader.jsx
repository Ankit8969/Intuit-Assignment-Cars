import React, { Suspense } from 'react';

const LazyLoader = ({ Component, fallback }) => {
  return (
    <Suspense fallback={fallback}>
      <Component />
    </Suspense>
  );
};

export default LazyLoader;
