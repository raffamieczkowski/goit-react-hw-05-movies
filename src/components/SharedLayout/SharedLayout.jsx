import React, { Suspense } from 'react';

const SharedLayout = ({ children }) => {
  return (
    <div>
      <h1>Shared Layout</h1>
      <Suspense fallback={<div>Loading...</div>}>
        {children}
      </Suspense>
    </div>
  );
};

export default SharedLayout;
