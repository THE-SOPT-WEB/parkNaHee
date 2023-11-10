import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from '@page/Main';
import NotFound from '@page/NotFound';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
