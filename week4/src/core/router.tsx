import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from '@page/Main';
import NotFound from '@page/NotFound';
import AsyncBoundary from '@components/common/AsyncBoundary';
import Loading from '@components/common/Skeleton';
import ErrorFallback from '@components/common/ErrorFallback';

function Router() {
  return (
    <AsyncBoundary
      pendingFallback={<Loading />}
      renderRejectedFallback={({ error, reset }) => <ErrorFallback error={error} reset={reset} />}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </AsyncBoundary>
  );
}

export default Router;
